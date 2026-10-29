import { Mp3Encoder } from '@breezystack/lamejs';

export type BitrateOption = 128 | 192 | 320;

export interface ConversionOptions {
  bitrate: BitrateOption;
  trimStart: number; // in seconds
  trimEnd: number;   // in seconds (0 means full length)
  fadeIn: boolean;
  fadeOut: boolean;
  signal?: AbortSignal;
  onProgress?: (percent: number, stage: 'decoding' | 'encoding' | 'wasm') => void;
}

export interface ConvertedMp3Result {
  originalName: string;
  outputName: string;
  blob: Blob;
  url: string;
  sizeBytes: number;
  durationSeconds: number;
  bitrate: BitrateOption;
}

/**
 * Converts float32 audio samples [-1.0, 1.0] to 16-bit PCM Int16Array
 * while applying optional Fade In and Fade Out envelopes.
 */
function floatTo16BitPCMWithFade(
  input: Float32Array,
  sampleRate: number,
  fadeIn: boolean,
  fadeOut: boolean
): Int16Array {
  const totalSamples = input.length;
  const output = new Int16Array(totalSamples);
  const fadeSamples = Math.min(Math.floor(sampleRate * 2.0), Math.floor(totalSamples / 2));

  for (let i = 0; i < totalSamples; i++) {
    let gain = 1.0;
    if (fadeIn && fadeSamples > 0 && i < fadeSamples) {
      gain *= i / fadeSamples;
    }
    if (fadeOut && fadeSamples > 0 && i >= totalSamples - fadeSamples) {
      gain *= (totalSamples - 1 - i) / fadeSamples;
    }
    const sample = Math.max(-1, Math.min(1, input[i] * gain));
    output[i] = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
  }

  return output;
}

/**
 * Fallback extraction using @ffmpeg/ffmpeg WebAssembly when native browser
 * AudioContext.decodeAudioData cannot decode a specific container/codec.
 */
async function extractWithFFmpegWasm(
  file: File,
  options: ConversionOptions
): Promise<ConvertedMp3Result> {
  const { bitrate, trimStart, trimEnd, fadeIn, fadeOut, onProgress } = options;
  onProgress?.(10, 'wasm');

  const [{ FFmpeg }, { fetchFile }] = await Promise.all([
    import('@ffmpeg/ffmpeg'),
    import('@ffmpeg/util'),
  ]);

  const ffmpeg = new FFmpeg();
  ffmpeg.on('progress', ({ progress }) => {
    const pct = Math.min(98, Math.max(15, Math.round(15 + progress * 80)));
    onProgress?.(pct, 'wasm');
  });

  await ffmpeg.load();

  const ext = file.name.split('.').pop()?.toLowerCase() || 'mp4';
  const inputName = `input.${ext}`;
  const outputName = 'output.mp3';

  await ffmpeg.writeFile(inputName, await fetchFile(file));

  const args: string[] = ['-i', inputName];
  if (trimStart > 0) {
    args.push('-ss', String(trimStart));
  }
  if (trimEnd > 0 && trimEnd > trimStart) {
    args.push('-to', String(trimEnd));
  }

  const audioFilters: string[] = [];
  if (fadeIn) {
    audioFilters.push(`afade=t=in:st=${trimStart > 0 ? trimStart : 0}:d=2`);
  }
  if (fadeOut && trimEnd > trimStart + 2) {
    audioFilters.push(`afade=t=out:st=${Math.max(0, trimEnd - 2)}:d=2`);
  }
  if (audioFilters.length > 0) {
    args.push('-af', audioFilters.join(','));
  }

  args.push('-vn', '-acodec', 'libmp3lame', '-b:a', `${bitrate}k`, outputName);
  await ffmpeg.exec(args);

  const data = await ffmpeg.readFile(outputName);
  const uint8 = data instanceof Uint8Array ? data : new TextEncoder().encode(String(data));
  const blob = new Blob([uint8.buffer as ArrayBuffer], { type: 'audio/mpeg' });
  const url = URL.createObjectURL(blob);
  const baseName = file.name.replace(/\.[^/.]+$/, '') || 'audio';

  onProgress?.(100, 'encoding');

  return {
    originalName: file.name,
    outputName: `${baseName}-${bitrate}kbps.mp3`,
    blob,
    url,
    sizeBytes: blob.size,
    durationSeconds: Math.max(1, trimEnd > trimStart ? trimEnd - trimStart : 0),
    bitrate,
  };
}

/**
 * Primary 100% Client-Side MP4-to-MP3 Engine:
 * Decodes video/audio stream via Web Audio API `decodeAudioData`, applies
 * trim & fade controls, and encodes to MP3 via `lamejs` (`@breezystack/lamejs`),
 * with automatic `@ffmpeg/ffmpeg` WebAssembly fallback.
 */
export async function convertVideoToMp3(
  file: File,
  options: ConversionOptions
): Promise<ConvertedMp3Result> {
  const { bitrate, trimStart, trimEnd, fadeIn, fadeOut, signal, onProgress } = options;

  if (signal?.aborted) {
    throw new DOMException('Conversion cancelled', 'AbortError');
  }

  onProgress?.(4, 'decoding');
  const arrayBuffer = await file.arrayBuffer();

  if (signal?.aborted) {
    throw new DOMException('Conversion cancelled', 'AbortError');
  }

  onProgress?.(14, 'decoding');

  const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  const audioCtx = new AudioCtx();

  let audioBuffer: AudioBuffer;
  try {
    audioBuffer = await audioCtx.decodeAudioData(arrayBuffer.slice(0));
  } catch (decodeErr) {
    await audioCtx.close().catch(() => {});
    // Fallback to WebAssembly FFmpeg when native browser codec is unavailable
    return extractWithFFmpegWasm(file, options);
  }

  await audioCtx.close().catch(() => {});
  onProgress?.(25, 'encoding');

  const sampleRate = audioBuffer.sampleRate;
  const numChannels = Math.min(2, audioBuffer.numberOfChannels);
  const fullDuration = audioBuffer.duration;

  const safeStartSec = Math.max(0, Math.min(trimStart || 0, Math.max(0, fullDuration - 0.1)));
  const safeEndSec =
    trimEnd && trimEnd > safeStartSec && trimEnd <= fullDuration ? trimEnd : fullDuration;

  const startSample = Math.floor(safeStartSec * sampleRate);
  const endSample = Math.min(audioBuffer.length, Math.floor(safeEndSec * sampleRate));
  const sliceLength = Math.max(1, endSample - startSample);

  const leftFloat = audioBuffer.getChannelData(0).subarray(startSample, endSample);
  const rightFloat =
    numChannels > 1
      ? audioBuffer.getChannelData(1).subarray(startSample, endSample)
      : leftFloat;

  const leftPCM = floatTo16BitPCMWithFade(leftFloat, sampleRate, fadeIn, fadeOut);
  const rightPCM =
    numChannels > 1
      ? floatTo16BitPCMWithFade(rightFloat, sampleRate, fadeIn, fadeOut)
      : leftPCM;

  const mp3Encoder = new Mp3Encoder(numChannels, sampleRate, bitrate);
  const mp3Chunks: Uint8Array[] = [];

  // Encode in chunks of multiple 1152-sample frames to keep UI 60fps responsive
  const samplesPerFrame = 1152 * 16;
  const totalSamples = leftPCM.length;

  for (let offset = 0; offset < totalSamples; offset += samplesPerFrame) {
    if (signal?.aborted) {
      throw new DOMException('Conversion cancelled', 'AbortError');
    }

    const leftChunk = leftPCM.subarray(offset, offset + samplesPerFrame);
    const rightChunk = numChannels > 1 ? rightPCM.subarray(offset, offset + samplesPerFrame) : undefined;

    const mp3buf =
      numChannels > 1
        ? mp3Encoder.encodeBuffer(leftChunk, rightChunk!)
        : mp3Encoder.encodeBuffer(leftChunk);

    if (mp3buf.length > 0) {
      mp3Chunks.push(new Uint8Array(mp3buf));
    }

    const progressFraction = Math.min(1, (offset + samplesPerFrame) / totalSamples);
    const currentPercent = Math.min(98, Math.round(25 + progressFraction * 73));
    onProgress?.(currentPercent, 'encoding');

    // Yield to browser rendering loop so soundwave animation & percentage counter stay silky smooth
    await new Promise((resolve) => setTimeout(resolve, 12));
  }

  const flushBuf = mp3Encoder.flush();
  if (flushBuf.length > 0) {
    mp3Chunks.push(new Uint8Array(flushBuf));
  }

  onProgress?.(100, 'encoding');

  const blob = new Blob(mp3Chunks as BlobPart[], { type: 'audio/mpeg' });
  const url = URL.createObjectURL(blob);
  const baseName = file.name.replace(/\.[^/.]+$/, '') || 'extracted-audio';

  return {
    originalName: file.name,
    outputName: `${baseName}-${bitrate}kbps.mp3`,
    blob,
    url,
    sizeBytes: blob.size,
    durationSeconds: Number((sliceLength / sampleRate).toFixed(2)),
    bitrate,
  };
}

/**
 * Generates an in-memory demo audio/video container file with a pleasant warm
 * stereo synth chord progression so users can test the MP4-to-MP3 engine with 1 click.
 */
export function createDemoVideoFile(): File {
  const sampleRate = 44100;
  const durationSeconds = 5;
  const numSamples = sampleRate * durationSeconds;
  const numChannels = 2;
  const bytesPerSample = 2;
  const dataSize = numSamples * numChannels * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  // RIFF WAVE header (decoded natively by all browser AudioContext.decodeAudioData implementations)
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * bytesPerSample, true);
  view.setUint16(32, numChannels * bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  // Warm C-major-9th arpeggiated chord progression
  const notes = [261.63, 329.63, 392.0, 493.88, 587.33];
  let offset = 44;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const envelope = Math.min(1, t / 0.25) * Math.min(1, (durationSeconds - t) / 0.6);

    let leftSample = 0;
    let rightSample = 0;

    for (let n = 0; n < notes.length; n++) {
      const freq = notes[n];
      const noteStart = n * 0.35;
      if (t >= noteStart) {
        const localT = t - noteStart;
        const noteDecay = Math.exp(-localT * 0.65);
        const wave =
          Math.sin(2 * Math.PI * freq * t) * 0.65 +
          Math.sin(2 * Math.PI * freq * 2 * t) * 0.2 +
          Math.sin(2 * Math.PI * (freq * 0.5) * t) * 0.15;
        const pan = n % 2 === 0 ? 0.85 : 1.15;
        leftSample += wave * noteDecay * pan * 0.22;
        rightSample += wave * noteDecay * (2 - pan) * 0.22;
      }
    }

    const lInt = Math.max(-1, Math.min(1, leftSample * envelope)) * 0x7fff;
    const rInt = Math.max(-1, Math.min(1, rightSample * envelope)) * 0x7fff;

    view.setInt16(offset, lInt, true);
    view.setInt16(offset + 2, rInt, true);
    offset += 4;
  }

  return new File([buffer], 'studio-demo-clip.mp4', { type: 'video/mp4' });
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(2)} MB`;
}

export function formatDuration(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

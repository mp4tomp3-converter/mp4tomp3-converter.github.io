export const languages = {
  en: { code: 'EN', name: 'English', nativeName: 'English', dir: 'ltr', ogLocale: 'en_US' },
  es: { code: 'ES', name: 'Spanish', nativeName: 'Español', dir: 'ltr', ogLocale: 'es_ES' },
  pt: { code: 'PT', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', ogLocale: 'pt_BR' },
  de: { code: 'DE', name: 'German', nativeName: 'Deutsch', dir: 'ltr', ogLocale: 'de_DE' },
  fr: { code: 'FR', name: 'French', nativeName: 'Français', dir: 'ltr', ogLocale: 'fr_FR' },
  ja: { code: 'JA', name: 'Japanese', nativeName: '日本語', dir: 'ltr', ogLocale: 'ja_JP' },
  zh: { code: 'ZH', name: 'Chinese', nativeName: '中文', dir: 'ltr', ogLocale: 'zh_CN' },
  ru: { code: 'RU', name: 'Russian', nativeName: 'Русский', dir: 'ltr', ogLocale: 'ru_RU' },
} as const;

export type SupportedLocale = keyof typeof languages;

export const locales = Object.keys(languages) as SupportedLocale[];
export const defaultLang: SupportedLocale = 'en';

export const mandatoryKeywords = [
  'converter mp4 to mp3 free',
  'free mp3 converter',
  'mp4 to mp3 free converter',
  'free mp4 to mp3 converter',
  'free converter mp4 to mp3',
  'mp3 converter free',
  'youtube to mp3 converter',
  'converter mp4 to mp3 gratis offline',
  'yt to mp3 player converter',
] as const;

export const ui = {
  en: {
    // 1. Metadata & Open Graph
    'meta.title': 'MP4 to MP3 Converter Free — 100% Offline & Private (No Upload)',
    'meta.description':
      'Use our free MP4 to MP3 converter to extract 320kbps audio directly in your browser. A 100% private converter mp4 to mp3 gratis offline with zero server uploads, instant trim controls, and built-in yt to mp3 player converter preview.',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter',

    // Navigation & Header
    'nav.brand': 'MP4 to MP3',
    'nav.brandAria': 'MP4 to MP3 Converter Free Home',
    'nav.langSelectAria': 'Select interface language',
    'nav.themeToggleAria': 'Toggle Light or Dark color theme',
    'nav.themeLight': 'Light Mode',
    'nav.themeDark': 'Dark Mode',
    'nav.installApp': 'Add to Home Screen',
    'nav.installAppAria': 'Add MP4 to MP3 Converter to Home Screen for offline use',
    'nav.supportDev': 'Support the Developer',
    'nav.supportDevAria': 'Support the Developer on Ko-fi',

    // PWA & Offline Tooltip / Modal / Toast
    'pwa.toastReady': 'Offline mode cached & ready! Convert MP4 to MP3 anytime without internet.',
    'pwa.toastInstalled': 'App installed! Launch MP4 to MP3 anytime from your home screen.',
    'pwa.workspaceInstallBtn': 'Add to Home Screen (100% Offline App)',
    'pwa.iosTooltipTitle': 'Install on iPhone / iPad (Safari)',
    'pwa.iosTooltipStep': 'Tap Share → Add to Home Screen',
    'pwa.modalTitle': 'Install MP4 to MP3 Offline App',
    'pwa.modalDesc':
      'Install this converter mp4 to mp3 gratis offline on your desktop or phone home screen for instant 1-click access without internet.',
    'pwa.iosStep': 'On iPhone/iPad (Safari): Tap Share → Add to Home Screen.',
    'pwa.desktopStep': 'On Desktop/Android (Chrome/Edge): Click the Install icon in your address bar or tap Install App Now below.',
    'pwa.installNowBtn': 'Install App Now',
    'pwa.closeBtn': 'Got It',

    // Hero Workspace (Strictly Clean Above the Fold)
    'hero.badge': '100% Client-Side • Zero Uploads • Instant Privacy',
    'hero.title': 'MP4 to MP3 Converter',
    'hero.subtitle': 'Extract studio-quality MP3 audio from your videos right inside your browser.',

    // Step 1: Dropzone
    'dropzone.title': 'Drop your MP4 or video files here',
    'dropzone.subtitle': 'or click anywhere in this box to choose files from your device',
    'dropzone.formats': 'Supports .MP4, .MOV, .WEBM, .MKV • Batch Conversion Ready',
    'dropzone.browseBtn': 'Select Video Files',
    'dropzone.sampleBtn': 'Try Instant Demo Video',
    'dropzone.privacyNote': 'Files never leave your device — processed locally via Web Audio & WebAssembly',

    // Step 2: Bitrate & Trim Controls
    'controls.selectedFiles': 'Selected Video Files',
    'controls.addMoreFiles': '+ Add More Videos',
    'controls.clearAll': 'Clear All',
    'controls.qualityLabel': 'Select MP3 Audio Bitrate Quality',
    'controls.bitrate128': '128 kbps (Standard)',
    'controls.bitrate128Desc': 'Compact size, great for voice & podcasts',
    'controls.bitrate192': '192 kbps (High)',
    'controls.bitrate192Desc': 'Balanced clarity & file size for daily listening',
    'controls.bitrate320': '320 kbps (Studio Master)',
    'controls.bitrate320Desc': 'Maximum fidelity for music & studio audio',
    'controls.trimToggle': 'Audio Trim & Fade Controls',
    'controls.trimStart': 'Start Time (sec)',
    'controls.trimEnd': 'End Time (sec)',
    'controls.trimFullHint': 'Set End Time to 0 for full audio length',
    'controls.fadeIn': 'Smooth Fade In (2s)',
    'controls.fadeOut': 'Smooth Fade Out (2s)',
    'controls.convertBtn': 'Convert to MP3 Now',
    'controls.convertBatchBtn': 'Convert All to MP3',

    // Step 3: Extraction Progress
    'progress.extractingTitle': 'Extracting High-Fidelity MP3 Audio...',
    'progress.decodingAudio': 'Decoding audio stream via Web Audio Engine...',
    'progress.encodingMp3': 'Encoding MP3 frames locally in your browser...',
    'progress.wasmFallback': 'Running WebAssembly FFmpeg fallback engine...',
    'progress.fileCounter': 'Processing file',
    'progress.privacyReminder': '100% Local Processing — Zero bytes uploaded to any server',
    'progress.cancelBtn': 'Cancel Conversion',

    // Step 4: Instant Download & Preview
    'result.successTitle': 'Your MP3 Audio is Ready!',
    'result.successSubtitle': 'Listen to an instant preview below or save your MP3 file.',
    'result.previewLabel': 'Audio Preview Player',
    'result.downloadBtn': 'Download MP3',
    'result.downloadAllBtn': 'Download All MP3s',
    'result.convertAnotherBtn': 'Convert Another File',
    'result.fileSize': 'Output Size',
    'result.duration': 'Duration',
    'result.bitrateBadge': 'Bitrate',
    'result.errorTitle': 'Could not extract audio from this file',
    'result.errorDesc': 'Please make sure the video file contains a valid audio track and is not corrupted.',
    'result.tryAgainBtn': 'Try Another File',

    // Breadcrumbs
    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': 'Home',
    'breadcrumb.converter': 'MP4 to MP3 Free Converter',

    // Below-the-Fold Section 1: 3-Step Visual Guide
    'howto.sectionBadge': '3-Step Visual Guide',
    'howto.title': 'How to Use Our Free MP4 to MP3 Converter in 3 Simple Steps',
    'howto.subtitle':
      'Experience the fastest converter mp4 to mp3 free workflow with zero cloud queues, no sign-ups, and 100% local hardware acceleration.',
    'howto.step1Title': '1. Select or Drop MP4 Videos',
    'howto.step1Desc':
      'Drag one or multiple .mp4, .mov, .webm, or .mkv files into the dropzone. Our mp4 to mp3 free converter loads files directly in browser memory with zero upload wait time.',
    'howto.step2Title': '2. Customize 320kbps Bitrate & Trim',
    'howto.step2Desc':
      'Pick 128 kbps, 192 kbps, or 320 kbps Studio Master quality in this free mp3 converter, slice exact start/end timestamps, and toggle smooth 2-second audio fades.',
    'howto.step3Title': '3. Preview & Download MP3 Offline',
    'howto.step3Desc':
      'Listen immediately in the built-in yt to mp3 player converter preview bar and click Download MP3 to save your audio track instantly.',

    // Below-the-Fold Section 2: Why 100% Client-Side Offline Conversion Beats Cloud Converters
    'compare.sectionBadge': 'Architecture Comparison',
    'compare.title': 'Why 100% Client-Side Offline Conversion Beats Cloud Converters',
    'compare.subtitle':
      'Traditional online tools force you to upload gigabytes of personal video to remote servers. Discover why our free converter mp4 to mp3 is engineered differently.',
    'compare.card1Title': 'Zero Server Uploads vs. Cloud Privacy Risks',
    'compare.card1Cloud': 'Cloud converters upload and store your private recordings on third-party servers.',
    'compare.card1Local':
      'Our free mp4 to mp3 converter processes 100% of audio frames inside your browser sandbox via Web Audio API and WebAssembly. Your files never leave your device.',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline PWA',
    'compare.card2Cloud': 'Cloud tools fail the moment your Wi-Fi drops or bandwidth slows down.',
    'compare.card2Local':
      'Install our PWA with one click to enjoy a true converter mp4 to mp3 gratis offline on Windows, macOS, Linux, Android, and iOS with zero internet required.',
    'compare.card3Title': 'Instant Hardware Speed vs. Upload Queues',
    'compare.card3Cloud': 'Slow upload bars, file size paywalls, and artificial 1-file-at-a-time queues.',
    'compare.card3Local':
      'This mp3 converter free engine decodes multi-gigabyte MP4 files in seconds and supports unlimited batch conversions with zero throttling.',
    'compare.card4Title': 'Built-In YT to MP3 Player Converter Preview & Studio 320kbps',
    'compare.card4Cloud': 'Blind downloads with compressed 128kbps audio and intrusive pop-up ads.',
    'compare.card4Local':
      'Ideal for creators converting saved camera reels or local MP4 clips from a youtube to mp3 converter workflow—verify audio clarity in our yt to mp3 player converter before saving.',

    // Below-the-Fold Section 3: High-Intent FAQ Accordion incorporating all 9 target keywords
    'faq.sectionBadge': 'Frequently Asked Questions',
    'faq.title': 'Frequently Asked Questions — Free MP4 to MP3 Converter',
    'faq.subtitle': 'Everything you need to know about private, offline, studio-grade MP3 extraction.',
    'faq.q1': 'How does this converter mp4 to mp3 free work without uploading my files?',
    'faq.a1':
      'Unlike traditional cloud websites, our converter mp4 to mp3 free runs 100% inside your web browser using the HTML5 Web Audio API (decodeAudioData) paired with a WebAssembly MP3 encoder. Because no video data ever travels over the internet, your privacy is mathematically guaranteed.',
    'faq.q2': 'Why is this the fastest mp4 to mp3 free converter for large videos?',
    'faq.a2':
      'When you use a standard online tool, 90% of your time is wasted uploading gigabytes of video over your internet connection. Our mp4 to mp3 free converter reads the file directly from your local disk and extracts the audio stream in seconds.',
    'faq.q3': 'Does this work as a converter mp4 to mp3 gratis offline without Wi-Fi?',
    'faq.a3':
      'Yes! Once you open the page or click "Add to Home Screen", our Service Worker caches the entire application, making it a complete converter mp4 to mp3 gratis offline that functions on airplanes, on the road, or anywhere without internet.',
    'faq.q4': 'What audio quality options are included in this free mp3 converter?',
    'faq.a4':
      'Our free mp3 converter supports three industry-standard CBR bitrates: 128 kbps (Standard for voice and lectures), 192 kbps (High stereo balance), and 320 kbps (Studio Master fidelity for music production).',
    'faq.q5': 'Can I use this free converter mp4 to mp3 for downloaded YouTube MP4 videos?',
    'faq.a5':
      'If you have legally saved personal videos, podcasts, or Creative Commons MP4 clips on your device and need a local youtube to mp3 converter alternative, simply drop those MP4 or WebM files into our free converter mp4 to mp3 to extract clean 320kbps audio offline.',
    'faq.q6': 'Does the built-in yt to mp3 player converter let me trim and preview before downloading?',
    'faq.a6':
      'Absolutely. Before encoding, you can set exact start and end timestamps and enable 2-second Fade In/Out envelopes. Once extracted, our built-in yt to mp3 player converter lets you audition the full MP3 track right in the browser.',
    'faq.q7': 'Is this mp3 converter free from file limits, sign-ups, and watermarks?',
    'faq.a7':
      'Yes. This free mp4 to mp3 converter and mp3 converter free utility is 100% unrestricted—convert unlimited files in batch mode with zero registration, zero watermarks, and zero hidden fees.',

    // Footer
    'footer.tagline': '100% Client-Side MP4 to MP3 Converter Free • Powered by Web Audio API & WebAssembly.',
    'footer.privacyBadge': 'Zero Server Uploads • 100% Local Offline Privacy Guaranteed',
    'footer.copyright': 'MP4 to MP3 Converter. All rights reserved.',
    'footer.supportText': 'Enjoying lightning-fast private conversions?',
  },

  es: {
    'meta.title': 'Convertidor MP4 a MP3 Gratis — 100% Offline y Privado (Sin Subir Archivos)',
    'meta.description':
      'Usa nuestro converter mp4 to mp3 gratis offline para extraer audio MP3 a 320kbps en tu navegador. El mejor free mp4 to mp3 converter y mp3 converter free 100% privado, sin subidas al servidor.',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter, convertidor mp4 a mp3 gratis',

    'nav.brand': 'MP4 a MP3',
    'nav.brandAria': 'Inicio del Convertidor de MP4 a MP3 Gratis',
    'nav.langSelectAria': 'Seleccionar idioma',
    'nav.themeToggleAria': 'Cambiar entre modo claro y oscuro',
    'nav.themeLight': 'Modo Claro',
    'nav.themeDark': 'Modo Oscuro',
    'nav.installApp': 'Añadir a Inicio',
    'nav.installAppAria': 'Instalar aplicación MP4 a MP3 para uso sin conexión',
    'nav.supportDev': 'Apoyar al Desarrollador',
    'nav.supportDevAria': 'Apoyar al desarrollador en Ko-fi',

    'pwa.toastReady': '¡Modo sin conexión listo! Convierte MP4 a MP3 sin internet.',
    'pwa.toastInstalled': '¡Aplicación instalada! Abre MP4 a MP3 desde tu pantalla de inicio.',
    'pwa.workspaceInstallBtn': 'Añadir a Inicio (App 100% Offline)',
    'pwa.iosTooltipTitle': 'Instalar en iPhone / iPad (Safari)',
    'pwa.iosTooltipStep': 'Toca Compartir → Añadir a la pantalla de inicio',
    'pwa.modalTitle': 'Instalar Aplicación MP4 a MP3 Offline',
    'pwa.modalDesc':
      'Instala este converter mp4 to mp3 gratis offline en tu pantalla de inicio para convertir videos sin conexión a internet.',
    'pwa.iosStep': 'En iPhone/iPad (Safari): Toca Compartir → Añadir a la pantalla de inicio.',
    'pwa.desktopStep': 'En Escritorio/Android (Chrome/Edge): Haz clic en el icono de instalar en la barra de direcciones.',
    'pwa.installNowBtn': 'Instalar Ahora',
    'pwa.closeBtn': 'Entendido',

    'hero.badge': '100% En tu Navegador • Cero Subidas • Privacidad Total',
    'hero.title': 'Convertidor de MP4 a MP3',
    'hero.subtitle': 'Extrae audio MP3 con calidad de estudio de tus videos directamente en tu navegador.',

    'dropzone.title': 'Arrastra y suelta tus archivos MP4 o videos aquí',
    'dropzone.subtitle': 'o haz clic en cualquier parte de este recuadro para elegir archivos de tu dispositivo',
    'dropzone.formats': 'Soporta .MP4, .MOV, .WEBM, .MKV • Conversión por Lotes Lista',
    'dropzone.browseBtn': 'Seleccionar Archivos de Video',
    'dropzone.sampleBtn': 'Probar Video de Demostración',
    'dropzone.privacyNote': 'Tus archivos nunca salen de tu dispositivo — procesados localmente con Web Audio y WebAssembly',

    'controls.selectedFiles': 'Archivos de Video Seleccionados',
    'controls.addMoreFiles': '+ Añadir Más Videos',
    'controls.clearAll': 'Limpiar Todo',
    'controls.qualityLabel': 'Selecciona la Calidad de Bitrate MP3',
    'controls.bitrate128': '128 kbps (Estándar)',
    'controls.bitrate128Desc': 'Tamaño compacto, ideal para voz y podcasts',
    'controls.bitrate192': '192 kbps (Alta)',
    'controls.bitrate192Desc': 'Equilibrio perfecto entre claridad y tamaño',
    'controls.bitrate320': '320 kbps (Estudio Master)',
    'controls.bitrate320Desc': 'Máxima fidelidad para música y audio profesional',
    'controls.trimToggle': 'Controles de Recorte y Fundido de Audio',
    'controls.trimStart': 'Inicio (seg)',
    'controls.trimEnd': 'Fin (seg)',
    'controls.trimFullHint': 'Deja el Fin en 0 para conservar toda la duración',
    'controls.fadeIn': 'Fundido de Entrada (2s)',
    'controls.fadeOut': 'Fundido de Salida (2s)',
    'controls.convertBtn': 'Convertir a MP3 Ahora',
    'controls.convertBatchBtn': 'Convertir Todos a MP3',

    'progress.extractingTitle': 'Extrayendo Audio MP3 de Alta Fidelidad...',
    'progress.decodingAudio': 'Decodificando pista de audio mediante Web Audio Engine...',
    'progress.encodingMp3': 'Codificando cuadros MP3 localmente en tu navegador...',
    'progress.wasmFallback': 'Ejecutando motor WebAssembly FFmpeg...',
    'progress.fileCounter': 'Procesando archivo',
    'progress.privacyReminder': 'Procesamiento 100% Local — Cero bytes subidos a ningún servidor',
    'progress.cancelBtn': 'Cancelar Conversión',

    'result.successTitle': '¡Tu Audio MP3 está Listo!',
    'result.successSubtitle': 'Escucha una vista previa instantánea o guarda tu archivo MP3.',
    'result.previewLabel': 'Reproductor de Vista Previa',
    'result.downloadBtn': 'Descargar MP3',
    'result.downloadAllBtn': 'Descargar Todos los MP3',
    'result.convertAnotherBtn': 'Convertir Otro Archivo',
    'result.fileSize': 'Tamaño Final',
    'result.duration': 'Duración',
    'result.bitrateBadge': 'Bitrate',
    'result.errorTitle': 'No se pudo extraer el audio de este archivo',
    'result.errorDesc': 'Asegúrate de que el archivo de video contenga una pista de audio válida y no esté dañado.',
    'result.tryAgainBtn': 'Probar Otro Archivo',

    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': 'Inicio',
    'breadcrumb.converter': 'Convertidor de MP4 a MP3 Gratis',

    'howto.sectionBadge': 'Guía Visual en 3 Pasos',
    'howto.title': 'Cómo Usar Nuestro Convertidor MP4 a MP3 Gratis en 3 Pasos',
    'howto.subtitle':
      'Disfruta del flujo converter mp4 to mp3 free más rápido sin colas en la nube ni registros.',
    'howto.step1Title': '1. Suelta tus Videos MP4',
    'howto.step1Desc':
      'Arrastra archivos .mp4, .mov, .webm o .mkv al recuadro. Nuestro mp4 to mp3 free converter los lee al instante en tu navegador.',
    'howto.step2Title': '2. Elige 320kbps y Recorte',
    'howto.step2Desc':
      'Selecciona 128, 192 o 320 kbps en este free mp3 converter, ajusta el inicio/fin y activa el fundido suave.',
    'howto.step3Title': '3. Escucha y Descarga MP3 Offline',
    'howto.step3Desc':
      'Previsualiza el audio en el reproductor integrado yt to mp3 player converter y descarga tu MP3 al instante.',

    'compare.sectionBadge': 'Comparativa Tecnológica',
    'compare.title': 'Por Qué la Conversión 100% Local y Offline Supera a la Nube',
    'compare.subtitle':
      'Descubre por qué nuestro free converter mp4 to mp3 y converter mp4 to mp3 gratis offline protege tu privacidad al 100%.',
    'compare.card1Title': 'Cero Subidas vs. Riesgos en la Nube',
    'compare.card1Cloud': 'Los sitios tradicionales suben tus videos privados a servidores externos.',
    'compare.card1Local':
      'Nuestro free mp4 to mp3 converter procesa todo localmente con Web Audio API y WebAssembly.',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline (PWA)',
    'compare.card2Cloud': 'Las herramientas web fallan si pierdes la conexión Wi-Fi.',
    'compare.card2Local':
      'Instala la app en tu pantalla de inicio para tener un verdadero converter mp4 to mp3 gratis offline sin internet.',
    'compare.card3Title': 'Velocidad Instantánea por Lotes',
    'compare.card3Cloud': 'Colas lentas de subida y límites de tamaño de archivo.',
    'compare.card3Local':
      'Este mp3 converter free convierte múltiples videos MP4 pesados en segundos.',
    'compare.card4Title': 'Reproductor YT to MP3 Player Converter y 320kbps',
    'compare.card4Cloud': 'Descargas a ciegas en baja calidad con anuncios molestos.',
    'compare.card4Local':
      'Ideal como alternativa local de youtube to mp3 converter para tus clips MP4 guardados, con vista previa en el yt to mp3 player converter.',

    'faq.sectionBadge': 'Preguntas Frecuentes',
    'faq.title': 'Preguntas Frecuentes — Convertidor MP4 a MP3 Gratis Offline',
    'faq.subtitle': 'Todo sobre nuestro extractor de audio local, privado y de calidad de estudio.',
    'faq.q1': '¿Cómo funciona este converter mp4 to mp3 free sin subir mis archivos?',
    'faq.a1':
      'Nuestro converter mp4 to mp3 free ejecuta la decodificación y codificación MP3 al 100% dentro de tu navegador mediante Web Audio API y WebAssembly. Tus videos jamás salen de tu dispositivo.',
    'faq.q2': '¿Por qué es el mp4 to mp3 free converter más rápido para videos grandes?',
    'faq.a2':
      'Al no subir gigabytes de datos a un servidor remoto, nuestro mp4 to mp3 free converter procesa el audio directamente desde la memoria local en pocos segundos.',
    'faq.q3': '¿Funciona realmente como converter mp4 to mp3 gratis offline sin internet?',
    'faq.a3':
      '¡Sí! Nuestro Service Worker guarda la aplicación en caché para que uses el converter mp4 to mp3 gratis offline desde tu móvil o PC sin Wi-Fi.',
    'faq.q4': '¿Qué calidades de audio ofrece este free mp3 converter?',
    'faq.a4':
      'Este free mp3 converter permite elegir entre 128 kbps (voz/podcasts), 192 kbps (alta calidad) y 320 kbps (calidad Estudio Master).',
    'faq.q5': '¿Puedo usar este free converter mp4 to mp3 con videos MP4 descargados?',
    'faq.a5':
      'Sí, si tienes videos MP4 o WebM guardados en tu equipo y buscas un flujo tipo youtube to mp3 converter local, suéltalos en nuestro free converter mp4 to mp3 para extraer el audio en privado.',
    'faq.q6': '¿El yt to mp3 player converter integrado permite recortar y previsualizar?',
    'faq.a6':
      'Por supuesto. Recorta segundos exactos de inicio y fin, añade fundidos de 2s y escucha el resultado en nuestro yt to mp3 player converter antes de guardar.',
    'faq.q7': '¿Es un mp3 converter free sin límites ni marcas de agua?',
    'faq.a7':
      'Sí, nuestro free mp4 to mp3 converter y mp3 converter free es 100% gratuito, ilimitado y sin marcas de agua.',

    'footer.tagline': 'Convertidor MP4 a MP3 100% en tu Navegador • Impulsado por Web Audio API y WebAssembly.',
    'footer.privacyBadge': 'Cero Subidas al Servidor • Privacidad Offline 100% Garantizada',
    'footer.copyright': 'MP4 to MP3 Converter. Todos los derechos reservados.',
    'footer.supportText': '¿Te gusta convertir tus audios rápido y en privado?',
  },

  pt: {
    'meta.title': 'Conversor MP4 para MP3 Grátis — 100% Offline e Privado (Sem Upload)',
    'meta.description':
      'Use nosso free mp4 to mp3 converter e converter mp4 to mp3 gratis offline para extrair áudio MP3 320kbps direto no navegador. Zero uploads, 100% privado.',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter, conversor mp4 para mp3 grátis',

    'nav.brand': 'MP4 para MP3',
    'nav.brandAria': 'Início do Conversor de MP4 para MP3 Grátis',
    'nav.langSelectAria': 'Selecionar idioma',
    'nav.themeToggleAria': 'Alternar entre modo claro e escuro',
    'nav.themeLight': 'Modo Claro',
    'nav.themeDark': 'Modo Escuro',
    'nav.installApp': 'Adicionar à Tela Inicial',
    'nav.installAppAria': 'Instalar aplicativo MP4 para MP3 para uso offline',
    'nav.supportDev': 'Apoiar o Desenvolvedor',
    'nav.supportDevAria': 'Apoiar o desenvolvedor no Ko-fi',

    'pwa.toastReady': 'Modo offline pronto! Converta MP4 para MP3 sem internet.',
    'pwa.toastInstalled': 'App instalado! Abra o MP4 para MP3 na sua tela inicial.',
    'pwa.workspaceInstallBtn': 'Adicionar à Tela Inicial (100% Offline)',
    'pwa.iosTooltipTitle': 'Instalar no iPhone / iPad (Safari)',
    'pwa.iosTooltipStep': 'Toque em Compartilhar → Adicionar à Tela de Início',
    'pwa.modalTitle': 'Instalar Aplicativo MP4 para MP3 Offline',
    'pwa.modalDesc':
      'Instale este converter mp4 to mp3 gratis offline na sua tela inicial para converter vídeos sem precisar de internet.',
    'pwa.iosStep': 'No iPhone/iPad (Safari): Toque em Compartilhar → Adicionar à Tela de Início.',
    'pwa.desktopStep': 'No Computador/Android (Chrome/Edge): Clique no ícone de instalação na barra de endereços.',
    'pwa.installNowBtn': 'Instalar Agora',
    'pwa.closeBtn': 'Entendi',

    'hero.badge': '100% no Navegador • Zero Uploads • Privacidade Instantânea',
    'hero.title': 'Conversor de MP4 para MP3',
    'hero.subtitle': 'Extraia áudio MP3 com qualidade de estúdio dos seus vídeos diretamente no seu navegador.',

    'dropzone.title': 'Arraste e solte seus arquivos MP4 ou vídeos aqui',
    'dropzone.subtitle': 'ou clique em qualquer lugar desta caixa para escolher arquivos do seu dispositivo',
    'dropzone.formats': 'Suporta .MP4, .MOV, .WEBM, .MKV • Conversão em Lote Pronta',
    'dropzone.browseBtn': 'Selecionar Arquivos de Vídeo',
    'dropzone.sampleBtn': 'Testar Vídeo de Demonstração',
    'dropzone.privacyNote': 'Seus arquivos nunca saem do dispositivo — processados localmente via Web Audio e WebAssembly',

    'controls.selectedFiles': 'Arquivos de Vídeo Selecionados',
    'controls.addMoreFiles': '+ Adicionar Mais Vídeos',
    'controls.clearAll': 'Limpar Tudo',
    'controls.qualityLabel': 'Selecione a Qualidade de Bitrate do MP3',
    'controls.bitrate128': '128 kbps (Padrão)',
    'controls.bitrate128Desc': 'Tamanho compacto, ótimo para voz e podcasts',
    'controls.bitrate192': '192 kbps (Alta)',
    'controls.bitrate192Desc': 'Clareza e tamanho equilibrados para o dia a dia',
    'controls.bitrate320': '320 kbps (Estúdio Master)',
    'controls.bitrate320Desc': 'Fidelidade máxima para músicas e áudio profissional',
    'controls.trimToggle': 'Controles de Corte e Fade de Áudio',
    'controls.trimStart': 'Tempo Inicial (s)',
    'controls.trimEnd': 'Tempo Final (s)',
    'controls.trimFullHint': 'Defina o Tempo Final como 0 para o áudio completo',
    'controls.fadeIn': 'Fade In Suave (2s)',
    'controls.fadeOut': 'Fade Out Suave (2s)',
    'controls.convertBtn': 'Converter para MP3 Agora',
    'controls.convertBatchBtn': 'Converter Todos para MP3',

    'progress.extractingTitle': 'Extraindo Áudio MP3 de Alta Fidelidade...',
    'progress.decodingAudio': 'Decodificando fluxo de áudio via Web Audio Engine...',
    'progress.encodingMp3': 'Codificando quadros MP3 localmente no navegador...',
    'progress.wasmFallback': 'Executando motor WebAssembly FFmpeg...',
    'progress.fileCounter': 'Processando arquivo',
    'progress.privacyReminder': 'Processamento 100% Local — Zero bytes enviados para servidores',
    'progress.cancelBtn': 'Cancelar Conversão',

    'result.successTitle': 'Seu Áudio MP3 está Pronto!',
    'result.successSubtitle': 'Ouça uma prévia instantânea abaixo ou baixe seu arquivo MP3.',
    'result.previewLabel': 'Player de Prévia de Áudio',
    'result.downloadBtn': 'Baixar MP3',
    'result.downloadAllBtn': 'Baixar Todos os MP3s',
    'result.convertAnotherBtn': 'Converter Outro Arquivo',
    'result.fileSize': 'Tamanho Final',
    'result.duration': 'Duração',
    'result.bitrateBadge': 'Bitrate',
    'result.errorTitle': 'Não foi possível extrair o áudio deste arquivo',
    'result.errorDesc': 'Certifique-se de que o vídeo possui uma faixa de áudio válida e não está corrompido.',
    'result.tryAgainBtn': 'Tentar Outro Arquivo',

    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': 'Início',
    'breadcrumb.converter': 'Conversor de MP4 para MP3 Grátis',

    'howto.sectionBadge': 'Guia Visual em 3 Passos',
    'howto.title': 'Como Usar Nosso Conversor MP4 para MP3 Grátis em 3 Passos',
    'howto.subtitle':
      'Experimente o fluxo converter mp4 to mp3 free mais rápido, sem filas na nuvem e sem cadastro.',
    'howto.step1Title': '1. Solte seus Vídeos MP4',
    'howto.step1Desc':
      'Arraste arquivos .mp4, .mov, .webm ou .mkv para a caixa. Nosso mp4 to mp3 free converter carrega tudo instantaneamente na memória local.',
    'howto.step2Title': '2. Escolha 320kbps e Corte',
    'howto.step2Desc':
      'Selecione 128, 192 ou 320 kbps neste free mp3 converter, defina o corte de tempo e ative o efeito fade.',
    'howto.step3Title': '3. Ouça e Baixe o MP3 Offline',
    'howto.step3Desc':
      'Escute no player integrado yt to mp3 player converter e clique em Baixar MP3 imediatamente.',

    'compare.sectionBadge': 'Comparação de Arquitetura',
    'compare.title': 'Por Que a Conversão 100% Local e Offline Supera Conversores na Nuvem',
    'compare.subtitle':
      'Veja por que nosso free converter mp4 to mp3 e converter mp4 to mp3 gratis offline garante máxima velocidade e privacidade.',
    'compare.card1Title': 'Zero Uploads vs. Riscos de Privacidade',
    'compare.card1Cloud': 'Conversores online enviam seus vídeos pessoais para servidores remotos.',
    'compare.card1Local':
      'Nosso free mp4 to mp3 converter processa tudo localmente no navegador via Web Audio API e WebAssembly.',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline (PWA)',
    'compare.card2Cloud': 'Sites comuns param de funcionar quando a internet cai.',
    'compare.card2Local':
      'Adicione à tela inicial e tenha um verdadeiro converter mp4 to mp3 gratis offline sempre disponível.',
    'compare.card3Title': 'Velocidade de Hardware em Lote',
    'compare.card3Cloud': 'Uploads demorados e limites de tamanho de arquivo.',
    'compare.card3Local':
      'Este mp3 converter free converte múltiplos vídeos MP4 pesados em poucos segundos.',
    'compare.card4Title': 'Player YT to MP3 Player Converter e 320kbps',
    'compare.card4Cloud': 'Downloads sem prévia e áudio comprimido.',
    'compare.card4Local':
      'Perfeito como alternativa local de youtube to mp3 converter para vídeos MP4 já salvos no seu dispositivo, com prévia no yt to mp3 player converter.',

    'faq.sectionBadge': 'Perguntas Frequentes',
    'faq.title': 'Perguntas Frequentes — Conversor MP4 para MP3 Grátis',
    'faq.subtitle': 'Tudo sobre extração de áudio MP3 offline, privada e em qualidade de estúdio.',
    'faq.q1': 'Como este converter mp4 to mp3 free funciona sem enviar meus arquivos?',
    'faq.a1':
      'Nosso converter mp4 to mp3 free realiza 100% da extração de áudio e codificação MP3 dentro do seu navegador com Web Audio API e WebAssembly.',
    'faq.q2': 'Por que este é o mp4 to mp3 free converter mais rápido?',
    'faq.a2':
      'Como não há upload para servidores, o mp4 to mp3 free converter lê o vídeo direto do seu aparelho e gera o MP3 em segundos.',
    'faq.q3': 'Funciona mesmo como converter mp4 to mp3 gratis offline sem internet?',
    'faq.a3':
      'Sim! Nosso Service Worker armazena o app em cache, funcionando como um converter mp4 to mp3 gratis offline completo no celular ou PC.',
    'faq.q4': 'Quais opções de bitrate existem neste free mp3 converter?',
    'faq.a4':
      'O free mp3 converter oferece 128 kbps (padrão), 192 kbps (alta qualidade) e 320 kbps (Estúdio Master).',
    'faq.q5': 'Posso usar este free converter mp4 to mp3 para vídeos MP4 baixados?',
    'faq.a5':
      'Sim! Se você possui vídeos MP4 salvos localmente e procura uma solução estilo youtube to mp3 converter offline, basta soltar o arquivo no nosso free converter mp4 to mp3.',
    'faq.q6': 'O yt to mp3 player converter integrado permite cortar e ouvir antes de baixar?',
    'faq.a6':
      'Com certeza. Corte o início e o fim, aplique fade in/out de 2s e ouça no yt to mp3 player converter integrado.',
    'faq.q7': 'Este mp3 converter free é totalmente gratuito e sem limites?',
    'faq.a7':
      'Sim, nosso free mp4 to mp3 converter e mp3 converter free é 100% gratuito, ilimitado e sem marcas d’água.',

    'footer.tagline': 'Conversor de Áudio MP4 para MP3 100% Local • Desenvolvido com Web Audio API e WebAssembly.',
    'footer.privacyBadge': 'Zero Uploads • Privacidade Offline 100% Garantida',
    'footer.copyright': 'MP4 to MP3 Converter. Todos os direitos reservados.',
    'footer.supportText': 'Gostou da conversão rápida e privada?',
  },

  de: {
    'meta.title': 'MP4 zu MP3 Konverter Kostenlos — 100% Offline & Privat (Ohne Upload)',
    'meta.description':
      'Nutzen Sie unseren free mp4 to mp3 converter, um 320kbps MP3 direkt im Browser zu extrahieren. 100% privater converter mp4 to mp3 gratis offline ohne Server-Upload.',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter, mp4 zu mp3 konverter kostenlos',

    'nav.brand': 'MP4 zu MP3',
    'nav.brandAria': 'MP4 zu MP3 Konverter Kostenlos Startseite',
    'nav.langSelectAria': 'Sprache auswählen',
    'nav.themeToggleAria': 'Hell- oder Dunkelmodus umschalten',
    'nav.themeLight': 'Hellmodus',
    'nav.themeDark': 'Dunkelmodus',
    'nav.installApp': 'Zum Startbildschirm',
    'nav.installAppAria': 'MP4 zu MP3 App für Offline-Nutzung installieren',
    'nav.supportDev': 'Entwickler unterstützen',
    'nav.supportDevAria': 'Unterstütze den Entwickler auf Ko-fi',

    'pwa.toastReady': 'Offline-Modus bereit! Sie können MP4 ohne Internet in MP3 umwandeln.',
    'pwa.toastInstalled': 'App installiert! Starten Sie MP4 zu MP3 über Ihren Startbildschirm.',
    'pwa.workspaceInstallBtn': 'Zum Startbildschirm (100% Offline-App)',
    'pwa.iosTooltipTitle': 'Installation auf iPhone / iPad (Safari)',
    'pwa.iosTooltipStep': 'Tippen Sie auf Teilen → Zum Home-Bildschirm',
    'pwa.modalTitle': 'MP4 zu MP3 Offline-App installieren',
    'pwa.modalDesc':
      'Installieren Sie diesen converter mp4 to mp3 gratis offline direkt auf Ihrem Gerät für eine 100% internetfreie Nutzung.',
    'pwa.iosStep': 'Auf iPhone/iPad (Safari): Tippen Sie auf Teilen → Zum Home-Bildschirm.',
    'pwa.desktopStep': 'Auf Desktop/Android (Chrome/Edge): Klicken Sie auf das Installationssymbol in der Adressleiste.',
    'pwa.installNowBtn': 'App jetzt installieren',
    'pwa.closeBtn': 'Verstanden',

    'hero.badge': '100% Client-Seitig • Keine Uploads • Sofortiger Datenschutz',
    'hero.title': 'MP4 zu MP3 Konverter',
    'hero.subtitle': 'Extrahieren Sie MP3-Audio in Studioqualität direkt in Ihrem Browser aus Ihren Videos.',

    'dropzone.title': 'MP4- oder Videodateien hier ablegen',
    'dropzone.subtitle': 'oder klicken Sie in dieses Feld, um Dateien von Ihrem Gerät auszuwählen',
    'dropzone.formats': 'Unterstützt .MP4, .MOV, .WEBM, .MKV • Stapelverarbeitung bereit',
    'dropzone.browseBtn': 'Videodateien auswählen',
    'dropzone.sampleBtn': 'Demo-Video testen',
    'dropzone.privacyNote': 'Dateien verlassen niemals Ihr Gerät — lokale Verarbeitung über Web Audio & WebAssembly',

    'controls.selectedFiles': 'Ausgewählte Videodateien',
    'controls.addMoreFiles': '+ Weitere Videos hinzufügen',
    'controls.clearAll': 'Alle löschen',
    'controls.qualityLabel': 'MP3-Audio-Bitrate wählen',
    'controls.bitrate128': '128 kbps (Standard)',
    'controls.bitrate128Desc': 'Kompakte Dateigröße, ideal für Sprache & Podcasts',
    'controls.bitrate192': '192 kbps (Hoch)',
    'controls.bitrate192Desc': 'Ausgewogene Klarheit & Größe für den Alltag',
    'controls.bitrate320': '320 kbps (Studio Master)',
    'controls.bitrate320Desc': 'Maximale Klangtreue für Musik & Studio-Audio',
    'controls.trimToggle': 'Audio-Zuschnitt & Ein-/Ausblenden',
    'controls.trimStart': 'Startzeit (Sek.)',
    'controls.trimEnd': 'Endzeit (Sek.)',
    'controls.trimFullHint': 'Endzeit auf 0 lassen für volle Audiolänge',
    'controls.fadeIn': 'Sanftes Einblenden (2s)',
    'controls.fadeOut': 'Sanftes Ausblenden (2s)',
    'controls.convertBtn': 'Jetzt in MP3 umwandeln',
    'controls.convertBatchBtn': 'Alle in MP3 umwandeln',

    'progress.extractingTitle': 'Hochwertiges MP3-Audio wird extrahiert...',
    'progress.decodingAudio': 'Audiostream wird über Web Audio Engine dekodiert...',
    'progress.encodingMp3': 'MP3-Frames werden lokal im Browser kodiert...',
    'progress.wasmFallback': 'WebAssembly FFmpeg-Engine wird ausgeführt...',
    'progress.fileCounter': 'Verarbeite Datei',
    'progress.privacyReminder': '100% lokale Verarbeitung — Null Bytes werden auf Server hochgeladen',
    'progress.cancelBtn': 'Abbrechen',

    'result.successTitle': 'Ihr MP3-Audio ist fertig!',
    'result.successSubtitle': 'Hören Sie sich unten eine Vorschau an oder speichern Sie Ihre MP3-Datei.',
    'result.previewLabel': 'Audio-Vorschau-Player',
    'result.downloadBtn': 'MP3 herunterladen',
    'result.downloadAllBtn': 'Alle MP3s herunterladen',
    'result.convertAnotherBtn': 'Weitere Datei umwandeln',
    'result.fileSize': 'Dateigröße',
    'result.duration': 'Dauer',
    'result.bitrateBadge': 'Bitrate',
    'result.errorTitle': 'Audio konnte aus dieser Datei nicht extrahiert werden',
    'result.errorDesc': 'Bitte stellen Sie sicher, dass die Videodatei eine gültige Tonspur enthält.',
    'result.tryAgainBtn': 'Andere Datei versuchen',

    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': 'Startseite',
    'breadcrumb.converter': 'MP4 zu MP3 Konverter Kostenlos',

    'howto.sectionBadge': 'Visuelle 3-Schritte-Anleitung',
    'howto.title': 'So nutzen Sie unseren kostenlosen MP4 zu MP3 Konverter in 3 Schritten',
    'howto.subtitle':
      'Erleben Sie den schnellsten converter mp4 to mp3 free Workflow ohne Cloud-Warteschlangen und ohne Registrierung.',
    'howto.step1Title': '1. MP4-Videos ablegen',
    'howto.step1Desc':
      'Ziehen Sie .mp4-, .mov-, .webm- oder .mkv-Dateien in das Feld. Unser mp4 to mp3 free converter liest diese sofort lokal ein.',
    'howto.step2Title': '2. 320kbps Bitrate & Zuschnitt wählen',
    'howto.step2Desc':
      'Wählen Sie 128, 192 oder 320 kbps in diesem free mp3 converter und nutzen Sie bei Bedarf den Audio-Zuschnitt.',
    'howto.step3Title': '3. Vorschau & Offline-Download',
    'howto.step3Desc':
      'Hören Sie den Track im integrierten yt to mp3 player converter Probe und laden Sie Ihre MP3-Datei sofort herunter.',

    'compare.sectionBadge': 'Architektur-Vergleich',
    'compare.title': 'Warum 100% lokale Offline-Konvertierung Cloud-Konverter schlägt',
    'compare.subtitle':
      'Erfahren Sie, warum unser free converter mp4 to mp3 und converter mp4 to mp3 gratis offline kompromisslosen Datenschutz bietet.',
    'compare.card1Title': 'Null Server-Uploads vs. Cloud-Risiken',
    'compare.card1Cloud': 'Cloud-Dienste laden Ihre privaten Videos auf fremde Server hoch.',
    'compare.card1Local':
      'Unser free mp4 to mp3 converter verarbeitet alle Audiodaten zu 100% lokal im Browser über Web Audio API & WebAssembly.',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline (PWA)',
    'compare.card2Cloud': 'Online-Konverter funktionieren ohne Internetverbindung nicht.',
    'compare.card2Local':
      'Installieren Sie unsere PWA für einen echten converter mp4 to mp3 gratis offline auf Desktop und Smartphone.',
    'compare.card3Title': 'Hardware-Geschwindigkeit ohne Upload-Wartezeit',
    'compare.card3Cloud': 'Langsame Uploads, Dateigrößenlimits und Warteschlangen.',
    'compare.card3Local':
      'Diese mp3 converter free Engine konvertiert selbst große Videos in Sekunden im Stapelmodus.',
    'compare.card4Title': 'YT to MP3 Player Converter Vorschau & 320kbps',
    'compare.card4Cloud': 'Downloads ohne Vorschau und reduzierte Bitraten.',
    'compare.card4Local':
      'Ideal als lokaler youtube to mp3 converter Workflow für gespeicherte MP4-Clips inklusive yt to mp3 player converter Vorschau.',

    'faq.sectionBadge': 'Häufig gestellte Fragen',
    'faq.title': 'Häufige Fragen — Kostenloser MP4 zu MP3 Konverter',
    'faq.subtitle': 'Alles über private, lokale Offline-MP3-Extraktion in Studioqualität.',
    'faq.q1': 'Wie funktioniert dieser converter mp4 to mp3 free ohne Datei-Upload?',
    'faq.a1':
      'Unser converter mp4 to mp3 free nutzt die HTML5 Web Audio API und WebAssembly direkt in Ihrem Browser. Es werden keinerlei Daten ins Internet übertragen.',
    'faq.q2': 'Warum ist dies der schnellste mp4 to mp3 free converter für große Dateien?',
    'faq.a2':
      'Da der zeitaufwendige Cloud-Upload komplett entfällt, dekodiert unser mp4 to mp3 free converter Ihre Videodateien direkt von Ihrer Festplatte in wenigen Sekunden.',
    'faq.q3': 'Funktioniert das Tool als converter mp4 to mp3 gratis offline ohne WLAN?',
    'faq.a3':
      'Ja! Nach dem ersten Laden speichert der Service Worker alle Dateien lokal, sodass Sie einen vollwertigen converter mp4 to mp3 gratis offline nutzen können.',
    'faq.q4': 'Welche Bitraten bietet dieser free mp3 converter?',
    'faq.a4':
      'Unser free mp3 converter unterstützt 128 kbps (Standard), 192 kbps (Hoch) und 320 kbps (Studio Master Qualität).',
    'faq.q5': 'Kann ich diesen free converter mp4 to mp3 für gespeicherte YouTube-MP4s nutzen?',
    'faq.a5':
      'Ja, wenn Sie eigene oder heruntergeladene MP4-Videos lokal vorliegen haben und eine sichere youtube to mp3 converter Alternative suchen, wandelt unser free converter mp4 to mp3 diese lokal um.',
    'faq.q6': 'Bietet der integrierte yt to mp3 player converter Zuschnitt und Vorschau?',
    'faq.a6':
      'Ja, Sie können Start- und Endzeit exakt zuschneiden, 2s Fade-In/Out aktivieren und das Ergebnis direkt im yt to mp3 player converter anhören.',
    'faq.q7': 'Ist dieser mp3 converter free komplett kostenlos und unbegrenzt?',
    'faq.a7':
      'Ja, dieser free mp4 to mp3 converter und mp3 converter free ist zu 100% kostenlos, ohne Limits und ohne Wasserzeichen.',

    'footer.tagline': '100% Client-seitiger MP4 zu MP3 Konverter • Angetrieben von Web Audio API & WebAssembly.',
    'footer.privacyBadge': 'Keine Server-Uploads • 100% lokaler Offline-Datenschutz',
    'footer.copyright': 'MP4 to MP3 Converter. Alle Rechte vorbehalten.',
    'footer.supportText': 'Gefällt Ihnen die blitzschnelle, private Umwandlung?',
  },

  fr: {
    'meta.title': 'Convertisseur MP4 en MP3 Gratuit — 100% Hors Ligne & Privé (Sans Upload)',
    'meta.description':
      'Utilisez notre free mp4 to mp3 converter et converter mp4 to mp3 gratis offline pour extraire de l’audio MP3 320kbps dans votre navigateur. Zéro upload serveur.',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter, convertisseur mp4 en mp3 gratuit',

    'nav.brand': 'MP4 en MP3',
    'nav.brandAria': 'Accueil Convertisseur MP4 en MP3 Gratuit',
    'nav.langSelectAria': 'Choisir la langue',
    'nav.themeToggleAria': 'Basculer entre le mode clair et sombre',
    'nav.themeLight': 'Mode Clair',
    'nav.themeDark': 'Mode Sombre',
    'nav.installApp': 'Ajouter à l’écran d’accueil',
    'nav.installAppAria': 'Installer l’application MP4 en MP3 pour un usage hors ligne',
    'nav.supportDev': 'Soutenir le Développeur',
    'nav.supportDevAria': 'Soutenir le développeur sur Ko-fi',

    'pwa.toastReady': 'Mode hors ligne prêt ! Convertissez vos MP4 en MP3 sans internet.',
    'pwa.toastInstalled': 'Application installée ! Lancez MP4 en MP3 depuis votre écran d’accueil.',
    'pwa.workspaceInstallBtn': 'Ajouter à l’écran d’accueil (100% Hors Ligne)',
    'pwa.iosTooltipTitle': 'Installer sur iPhone / iPad (Safari)',
    'pwa.iosTooltipStep': 'Appuyez sur Partager → Sur l’écran d’accueil',
    'pwa.modalTitle': 'Installer l’Application MP4 en MP3 Hors Ligne',
    'pwa.modalDesc':
      'Installez ce converter mp4 to mp3 gratis offline sur votre bureau ou mobile pour convertir vos vidéos sans connexion internet.',
    'pwa.iosStep': 'Sur iPhone/iPad (Safari) : Appuyez sur Partager → Sur l’écran d’accueil.',
    'pwa.desktopStep': 'Sur Ordinateur/Android (Chrome/Edge) : Cliquez sur l’icône d’installation dans la barre d’adresse.',
    'pwa.installNowBtn': 'Installer Maintenant',
    'pwa.closeBtn': 'Compris',

    'hero.badge': '100% Côté Client • Zéro Upload • Confidentialité Totale',
    'hero.title': 'Convertisseur MP4 en MP3',
    'hero.subtitle': 'Extrayez un son MP3 de qualité studio depuis vos vidéos directement dans votre navigateur.',

    'dropzone.title': 'Glissez et déposez vos fichiers MP4 ou vidéos ici',
    'dropzone.subtitle': 'ou cliquez n’importe où dans ce cadre pour sélectionner des fichiers',
    'dropzone.formats': 'Compatible .MP4, .MOV, .WEBM, .MKV • Conversion par Lots Incluse',
    'dropzone.browseBtn': 'Sélectionner des Vidéos',
    'dropzone.sampleBtn': 'Essayer une Vidéo Démo',
    'dropzone.privacyNote': 'Vos fichiers ne quittent jamais votre appareil — traitement local via Web Audio & WebAssembly',

    'controls.selectedFiles': 'Fichiers Vidéo Sélectionnés',
    'controls.addMoreFiles': '+ Ajouter d’autres vidéos',
    'controls.clearAll': 'Tout effacer',
    'controls.qualityLabel': 'Choisir la Qualité Audio MP3 (Bitrate)',
    'controls.bitrate128': '128 kbps (Standard)',
    'controls.bitrate128Desc': 'Taille réduite, idéal pour la voix et les podcasts',
    'controls.bitrate192': '192 kbps (Haute)',
    'controls.bitrate192Desc': 'Équilibre parfait entre clarté et taille de fichier',
    'controls.bitrate320': '320 kbps (Studio Master)',
    'controls.bitrate320Desc': 'Fidélité maximale pour la musique et l’audio pro',
    'controls.trimToggle': 'Découpage Audio et Fondus (Fade)',
    'controls.trimStart': 'Début (sec)',
    'controls.trimEnd': 'Fin (sec)',
    'controls.trimFullHint': 'Laissez la Fin à 0 pour conserver toute la durée',
    'controls.fadeIn': 'Fondu d’entrée doux (2s)',
    'controls.fadeOut': 'Fondu de sortie doux (2s)',
    'controls.convertBtn': 'Convertir en MP3 Maintenant',
    'controls.convertBatchBtn': 'Tout Convertir en MP3',

    'progress.extractingTitle': 'Extraction de l’Audio MP3 Haute Fidélité...',
    'progress.decodingAudio': 'Décodage du flux audio via Web Audio Engine...',
    'progress.encodingMp3': 'Encodage des trames MP3 localement dans votre navigateur...',
    'progress.wasmFallback': 'Exécution du moteur WebAssembly FFmpeg...',
    'progress.fileCounter': 'Traitement du fichier',
    'progress.privacyReminder': 'Traitement 100% Local — Zéro octet envoyé vers un serveur',
    'progress.cancelBtn': 'Annuler la Conversion',

    'result.successTitle': 'Votre Audio MP3 est Prêt !',
    'result.successSubtitle': 'Écoutez un aperçu instantané ci-dessous ou téléchargez votre fichier MP3.',
    'result.previewLabel': 'Lecteur d’Aperçu Audio',
    'result.downloadBtn': 'Télécharger le MP3',
    'result.downloadAllBtn': 'Télécharger Tous les MP3',
    'result.convertAnotherBtn': 'Convertir un Autre Fichier',
    'result.fileSize': 'Taille du Fichier',
    'result.duration': 'Durée',
    'result.bitrateBadge': 'Débit',
    'result.errorTitle': 'Impossible d’extraire l’audio de ce fichier',
    'result.errorDesc': 'Veuillez vérifier que le fichier vidéo contient une piste audio valide.',
    'result.tryAgainBtn': 'Essayer un Autre Fichier',

    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': 'Accueil',
    'breadcrumb.converter': 'Convertisseur MP4 en MP3 Gratuit',

    'howto.sectionBadge': 'Guide Visuel en 3 Étapes',
    'howto.title': 'Comment Utiliser Notre Convertisseur MP4 en MP3 Gratuit en 3 Étapes',
    'howto.subtitle':
      'Profitez du flux converter mp4 to mp3 free le plus rapide, sans attente serveur ni inscription.',
    'howto.step1Title': '1. Déposez vos Vidéos MP4',
    'howto.step1Desc':
      'Glissez vos fichiers .mp4, .mov, .webm ou .mkv. Notre mp4 to mp3 free converter les charge immédiatement en mémoire locale.',
    'howto.step2Title': '2. Choisissez 320kbps et Découpage',
    'howto.step2Desc':
      'Sélectionnez 128, 192 ou 320 kbps dans ce free mp3 converter, ajustez le découpage et les fondus.',
    'howto.step3Title': '3. Écoutez et Téléchargez Hors Ligne',
    'howto.step3Desc':
      'Prévisualisez dans le lecteur yt to mp3 player converter intégré et téléchargez votre MP3.',

    'compare.sectionBadge': 'Comparaison Technique',
    'compare.title': 'Pourquoi la Conversion 100% Locale Hors Ligne Surpasse le Cloud',
    'compare.subtitle':
      'Découvrez pourquoi notre free converter mp4 to mp3 et converter mp4 to mp3 gratis offline protège intégralement vos fichiers.',
    'compare.card1Title': 'Zéro Upload vs. Risques Cloud',
    'compare.card1Cloud': 'Les convertisseurs cloud envoient vos vidéos privées sur des serveurs distants.',
    'compare.card1Local':
      'Notre free mp4 to mp3 converter traite 100% de l’audio localement via Web Audio API et WebAssembly.',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline (PWA)',
    'compare.card2Cloud': 'Les outils en ligne échouent dès que la connexion Wi-Fi se coupe.',
    'compare.card2Local':
      'Installez la PWA pour disposer d’un véritable converter mp4 to mp3 gratis offline sans internet.',
    'compare.card3Title': 'Vitesse Matérielle & Conversion par Lots',
    'compare.card3Cloud': 'Files d’attente lentes et limites de taille.',
    'compare.card3Local':
      'Ce moteur mp3 converter free convertit plusieurs vidéos MP4 volumineuses en quelques secondes.',
    'compare.card4Title': 'Lecteur YT to MP3 Player Converter & 320kbps',
    'compare.card4Cloud': 'Téléchargements sans écoute préalable et qualité réduite.',
    'compare.card4Local':
      'Parfait comme solution locale youtube to mp3 converter pour vos fichiers MP4 enregistrés, avec écoute dans le yt to mp3 player converter.',

    'faq.sectionBadge': 'Questions Fréquentes',
    'faq.title': 'Questions Fréquentes — Convertisseur MP4 en MP3 Gratuit',
    'faq.subtitle': 'Tout savoir sur l’extraction MP3 locale, privée et hors ligne.',
    'faq.q1': 'Comment ce converter mp4 to mp3 free fonctionne-t-il sans envoyer mes fichiers ?',
    'faq.a1':
      'Notre converter mp4 to mp3 free exécute l’extraction audio et l’encodage MP3 à 100% dans votre navigateur grâce à Web Audio API et WebAssembly.',
    'faq.q2': 'Pourquoi est-ce le mp4 to mp3 free converter le plus rapide ?',
    'faq.a2':
      'Sans téléversement vers un serveur, notre mp4 to mp3 free converter lit directement vos vidéos locales et génère le MP3 en quelques secondes.',
    'faq.q3': 'Fonctionne-t-il comme converter mp4 to mp3 gratis offline sans internet ?',
    'faq.a3':
      'Oui ! Grâce au Service Worker intégré, vous disposez d’un converter mp4 to mp3 gratis offline complet sur ordinateur et mobile.',
    'faq.q4': 'Quels débits audio propose ce free mp3 converter ?',
    'faq.a4':
      'Ce free mp3 converter propose 128 kbps (Standard), 192 kbps (Haute qualité) et 320 kbps (Studio Master).',
    'faq.q5': 'Puis-je utiliser ce free converter mp4 to mp3 pour des vidéos MP4 sauvegardées ?',
    'faq.a5':
      'Oui, si vous avez des fichiers MP4 locaux et cherchez une alternative locale à un youtube to mp3 converter, glissez-les dans notre free converter mp4 to mp3.',
    'faq.q6': 'Le lecteur yt to mp3 player converter permet-il de découper et prévisualiser ?',
    'faq.a6':
      'Absolument. Définissez le début et la fin, ajoutez un fondu de 2s et écoutez le résultat dans le yt to mp3 player converter.',
    'faq.q7': 'Ce mp3 converter free est-il vraiment gratuit et illimité ?',
    'faq.a7':
      'Oui, notre free mp4 to mp3 converter et mp3 converter free est 100% gratuit, sans limite de fichiers ni filigrane.',

    'footer.tagline': 'Convertisseur Audio MP4 en MP3 100% Local • Propulsé par Web Audio API & WebAssembly.',
    'footer.privacyBadge': 'Zéro Upload Serveur • Confidentialité Hors Ligne 100% Garantie',
    'footer.copyright': 'MP4 to MP3 Converter. Tous droits réservés.',
    'footer.supportText': 'Vous appréciez ces conversions rapides et privées ?',
  },

  ja: {
    'meta.title': 'MP4 MP3 変換 無料 — 100%オフライン＆プライベート（アップロード不要）',
    'meta.description':
      'ブラウザ内で直接320kbpsのMP3を抽出できるfree mp4 to mp3 converter。サーバー送信ゼロのconverter mp4 to mp3 gratis offline＆yt to mp3 player converterプレビュー搭載。',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter, mp4 mp3 変換 無料 オフライン',

    'nav.brand': 'MP4 to MP3',
    'nav.brandAria': 'MP4 MP3 変換 無料 ホーム',
    'nav.langSelectAria': '言語を選択',
    'nav.themeToggleAria': 'ライトモードとダークモードを切り替え',
    'nav.themeLight': 'ライトモード',
    'nav.themeDark': 'ダークモード',
    'nav.installApp': 'ホーム画面に追加',
    'nav.installAppAria': 'オフライン利用のためにMP4 to MP3アプリをホーム画面に追加',
    'nav.supportDev': '開発者を支援する',
    'nav.supportDevAria': 'Ko-fiで開発者をサポートする',

    'pwa.toastReady': 'オフラインモード準備完了！インターネットなしでMP4をMP3に変換できます。',
    'pwa.toastInstalled': 'アプリがインストールされました！ホーム画面からいつでも起動できます。',
    'pwa.workspaceInstallBtn': 'ホーム画面に追加 (100% オフライン対応)',
    'pwa.iosTooltipTitle': 'iPhone / iPad (Safari) での追加方法',
    'pwa.iosTooltipStep': '「共有」をタップ → 「ホーム画面に追加」',
    'pwa.modalTitle': 'MP4 to MP3 オフラインアプリをインストール',
    'pwa.modalDesc':
      'この converter mp4 to mp3 gratis offline をPCやスマホのホーム画面に追加して、ネット接続なしで瞬時に変換できます。',
    'pwa.iosStep': 'iPhone/iPad (Safari): 「共有」をタップ → 「ホーム画面に追加」を選択。',
    'pwa.desktopStep': 'PC/Android (Chrome/Edge): アドレスバーのインストールアイコンをクリック。',
    'pwa.installNowBtn': '今すぐインストール',
    'pwa.closeBtn': '閉じる',

    'hero.badge': '100% ブラウザ内処理 • サーバー送信ゼロ • 完全なプライバシー保護',
    'hero.title': 'MP4 MP3 変換ツール',
    'hero.subtitle': '動画をサーバーにアップロードせず、ブラウザ内で直接スタジオ品質のMP3音声を抽出します。',

    'dropzone.title': 'MP4または動画ファイルをここにドロップ',
    'dropzone.subtitle': 'またはこのボックス内をクリックして端末からファイルを選択',
    'dropzone.formats': '.MP4, .MOV, .WEBM, .MKV 対応 • 複数ファイルの一括変換対応',
    'dropzone.browseBtn': '動画ファイルを選択',
    'dropzone.sampleBtn': 'サンプル動画で試す',
    'dropzone.privacyNote': 'ファイルが外部へ送信されることはありません — Web Audio & WebAssemblyで端末内処理',

    'controls.selectedFiles': '選択された動画ファイル',
    'controls.addMoreFiles': '+ 動画を追加',
    'controls.clearAll': 'すべてクリア',
    'controls.qualityLabel': 'MP3 オーディオ音質（ビットレート）を選択',
    'controls.bitrate128': '128 kbps (標準)',
    'controls.bitrate128Desc': '軽量サイズ・音声やポッドキャストに最適',
    'controls.bitrate192': '192 kbps (高音質)',
    'controls.bitrate192Desc': '音質とファイルサイズのバランスが優れた標準高音質',
    'controls.bitrate320': '320 kbps (スタジオマスター)',
    'controls.bitrate320Desc': '音楽やスタジオ音源向けの最高音質',
    'controls.trimToggle': '音声トリミング＆フェード設定',
    'controls.trimStart': '開始時間 (秒)',
    'controls.trimEnd': '終了時間 (秒)',
    'controls.trimFullHint': '最後まで変換する場合は終了時間を0にしてください',
    'controls.fadeIn': 'スムーズ・フェードイン (2秒)',
    'controls.fadeOut': 'スムーズ・フェードアウト (2秒)',
    'controls.convertBtn': '今すぐ MP3 に変換',
    'controls.convertBatchBtn': 'すべて MP3 に一括変換',

    'progress.extractingTitle': '高音質 MP3 オーディオを抽出中...',
    'progress.decodingAudio': 'Web Audio エンジンで音声ストリームをデコード中...',
    'progress.encodingMp3': 'ブラウザ内で MP3 フレームをローカルエンコード中...',
    'progress.wasmFallback': 'WebAssembly FFmpeg エンジンを実行中...',
    'progress.fileCounter': '処理中のファイル',
    'progress.privacyReminder': '100% ローカル処理 — サーバーへのデータ送信はゼロです',
    'progress.cancelBtn': '変換をキャンセル',

    'result.successTitle': 'MP3 音声の準備が完了しました！',
    'result.successSubtitle': '下のプレーヤーですぐに試聴するか、MP3ファイルを保存してください。',
    'result.previewLabel': 'オーディオ試聴プレーヤー',
    'result.downloadBtn': 'MP3 をダウンロード',
    'result.downloadAllBtn': 'すべての MP3 を保存',
    'result.convertAnotherBtn': '別のファイルを変換',
    'result.fileSize': '出力サイズ',
    'result.duration': '再生時間',
    'result.bitrateBadge': '音質',
    'result.errorTitle': 'このファイルから音声を抽出できませんでした',
    'result.errorDesc': '動画ファイルに有効な音声トラックが含まれているかご確認ください。',
    'result.tryAgainBtn': '別のファイルを試す',

    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': 'ホーム',
    'breadcrumb.converter': 'MP4 MP3 無料変換ツール',

    'howto.sectionBadge': '3ステップ・ビジュアルガイド',
    'howto.title': '無料 MP4 MP3 変換ツールの使い方（簡単3ステップ）',
    'howto.subtitle':
      'クラウドへのアップロード待ち時間ゼロ、登録不要で使える最速の converter mp4 to mp3 free ワークフロー。',
    'howto.step1Title': '1. MP4動画を選択またはドロップ',
    'howto.step1Desc':
      '.mp4、.mov、.webm、.mkv ファイルをドロップゾーンへ。当 mp4 to mp3 free converter が端末メモリ内で即座に読み込みます。',
    'howto.step2Title': '2. 320kbps音質とトリミング設定',
    'howto.step2Desc':
      'この free mp3 converter で 128 / 192 / 320 kbps を選択し、必要に応じて開始・終了時間やフェードを設定します。',
    'howto.step3Title': '3. 試聴してオフラインでMP3保存',
    'howto.step3Desc':
      '内蔵の yt to mp3 player converter プレビューで音質を確認し、「MP3をダウンロード」で即座に保存できます。',

    'compare.sectionBadge': 'アーキテクチャ比較',
    'compare.title': '100%ローカル＆オフライン変換がクラウド型より優れている理由',
    'compare.subtitle':
      '当サイトの free converter mp4 to mp3 および converter mp4 to mp3 gratis offline が選ばれる理由。',
    'compare.card1Title': 'サーバー送信ゼロ vs クラウドの情報漏洩リスク',
    'compare.card1Cloud': '従来の変換サイトはプライベートな動画を外部サーバーへアップロードします。',
    'compare.card1Local':
      '当 free mp4 to mp3 converter は Web Audio API と WebAssembly によりブラウザ内で100%完結します。',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline (PWA対応)',
    'compare.card2Cloud': 'クラウド型ツールはWi-Fiや通信が切れると使えません。',
    'compare.card2Local':
      'ホーム画面に追加すれば、インターネット不要の converter mp4 to mp3 gratis offline としていつでも動作します。',
    'compare.card3Title': '待ち時間ゼロのハードウェア高速一括処理',
    'compare.card3Cloud': '遅いアップロード時間やファイルサイズ制限、順番待ち。',
    'compare.card3Local':
      'この mp3 converter free エンジンは大容量MP4も数秒で一括変換します。',
    'compare.card4Title': '内蔵 YT to MP3 Player Converter 試聴＆320kbps',
    'compare.card4Cloud': 'ダウンロードするまで音が確認できず、低音質になりがち。',
    'compare.card4Local':
      '端末に保存済みのMP4動画を変換するローカルな youtube to mp3 converter 代替としても最適で、yt to mp3 player converter で即座に試聴できます。',

    'faq.sectionBadge': 'よくある質問 (FAQ)',
    'faq.title': 'よくある質問 — 無料 MP4 MP3 変換ツール',
    'faq.subtitle': '完全プライベート・オフライン・320kbps高音質抽出に関するすべて。',
    'faq.q1': 'この converter mp4 to mp3 free はなぜアップロード不要で変換できるのですか？',
    'faq.a1':
      '当 converter mp4 to mp3 free は HTML5 Web Audio API と WebAssembly エンコーダーをお使いのブラウザ内で直接実行するため、外部サーバーへ動画データを一切送信しません。',
    'faq.q2': '大容量の動画でも最速の mp4 to mp3 free converter である理由は？',
    'faq.a2':
      'ギガバイト単位の動画をインターネット経由でアップロードする時間がゼロになるため、当 mp4 to mp3 free converter は端末内で数秒のうちに音声を抽出します。',
    'faq.q3': 'ネットなしの converter mp4 to mp3 gratis offline として使えますか？',
    'faq.a3':
      'はい！Service Worker がアプリ全体をキャッシュするため、「ホーム画面に追加」すれば完全な converter mp4 to mp3 gratis offline としてオフライン利用できます。',
    'faq.q4': 'この free mp3 converter で選べる音質（ビットレート）は？',
    'faq.a4':
      '当 free mp3 converter は 128 kbps（標準）、192 kbps（高音質）、320 kbps（スタジオマスター最高音質）の3段階に対応しています。',
    'faq.q5': '保存済みの動画に対して youtube to mp3 converter のように使えますか？',
    'faq.a5':
      'ご自身の端末に保存されているMP4やWebM動画から音声を抽出したい場合、安全なローカル youtube to mp3 converter 代替として当 free converter mp4 to mp3 をご利用いただけます。',
    'faq.q6': '内蔵の yt to mp3 player converter でカットや試聴はできますか？',
    'faq.a6':
      'はい、開始・終了秒数のトリミングや2秒間のフェードイン・アウトを設定し、保存前に内蔵 yt to mp3 player converter で試聴できます。',
    'faq.q7': 'この mp3 converter free は完全無料で制限はありませんか？',
    'faq.a7':
      'はい、当 free mp4 to mp3 converter / mp3 converter free は完全無料・無制限で、音声透かしや会員登録も一切ありません。',

    'footer.tagline': '100% ブラウザ完結型 MP4-MP3 無料音声抽出ツール • Web Audio API & WebAssembly 搭載',
    'footer.privacyBadge': 'サーバー送信ゼロ • 100% ローカル＆オフラインプライバシー保証',
    'footer.copyright': 'MP4 to MP3 Converter. All rights reserved.',
    'footer.supportText': '高速＆安全な変換ツールを気に入っていただけましたか？',
  },

  zh: {
    'meta.title': 'MP4 转 MP3 免费转换器 — 100% 离线与隐私安全（无需上传）',
    'meta.description':
      '使用我们的 free mp4 to mp3 converter 直接在浏览器中提取 320kbps MP3 音频。100% 隐私安全的 converter mp4 to mp3 gratis offline，零服务器上传，内置 yt to mp3 player converter 预览。',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter, mp4转mp3免费离线转换器',

    'nav.brand': 'MP4 转 MP3',
    'nav.brandAria': 'MP4 转 MP3 免费转换器首页',
    'nav.langSelectAria': '选择语言',
    'nav.themeToggleAria': '切换浅色或深色模式',
    'nav.themeLight': '浅色模式',
    'nav.themeDark': '深色模式',
    'nav.installApp': '添加到主屏幕',
    'nav.installAppAria': '安装 MP4 转 MP3 离线应用到主屏幕',
    'nav.supportDev': '支持开发者',
    'nav.supportDevAria': '在 Ko-fi 上支持开发者',

    'pwa.toastReady': '离线模式已缓存就绪！无需联网即可将 MP4 转换为 MP3。',
    'pwa.toastInstalled': '应用已安装！您可随时从主屏幕启动 MP4 转 MP3。',
    'pwa.workspaceInstallBtn': '添加到主屏幕 (100% 离线应用)',
    'pwa.iosTooltipTitle': '在 iPhone / iPad (Safari) 上安装',
    'pwa.iosTooltipStep': '点击“分享” → “添加到主屏幕”',
    'pwa.modalTitle': '安装 MP4 转 MP3 离线应用',
    'pwa.modalDesc':
      '将此 converter mp4 to mp3 gratis offline 安装到您的电脑桌面或手机主屏幕，无需网络即可一键转换音频。',
    'pwa.iosStep': 'iPhone/iPad (Safari)：点击“分享” → “添加到主屏幕”。',
    'pwa.desktopStep': '电脑/Android (Chrome/Edge)：点击浏览器地址栏右侧的安装图标。',
    'pwa.installNowBtn': '立即安装应用',
    'pwa.closeBtn': '知道了',

    'hero.badge': '100% 本地浏览器运行 • 零服务器上传 • 极致隐私保护',
    'hero.title': 'MP4 转 MP3 转换器',
    'hero.subtitle': '无需上传视频，直接在您的浏览器内极速提取录音室级 MP3 音频。',

    'dropzone.title': '将您的 MP4 或视频文件拖放到此处',
    'dropzone.subtitle': '或点击此区域任意位置从您的设备中选择文件',
    'dropzone.formats': '支持 .MP4, .MOV, .WEBM, .MKV • 支持多文件批量转换',
    'dropzone.browseBtn': '选择视频文件',
    'dropzone.sampleBtn': '试用即时演示视频',
    'dropzone.privacyNote': '文件绝不离开您的设备 — 通过 Web Audio 与 WebAssembly 在本地完成处理',

    'controls.selectedFiles': '已选择的视频文件',
    'controls.addMoreFiles': '+ 添加更多视频',
    'controls.clearAll': '清空全部',
    'controls.qualityLabel': '选择 MP3 音频比特率音质',
    'controls.bitrate128': '128 kbps (标准)',
    'controls.bitrate128Desc': '体积小巧，非常适合人声、课程与播客',
    'controls.bitrate192': '192 kbps (高音质)',
    'controls.bitrate192Desc': '清晰度与文件大小完美平衡，适合日常聆听',
    'controls.bitrate320': '320 kbps (母带级)',
    'controls.bitrate320Desc': '音乐与专业音频的最高保真度标准',
    'controls.trimToggle': '音频裁剪与淡入淡出控制',
    'controls.trimStart': '开始时间 (秒)',
    'controls.trimEnd': '结束时间 (秒)',
    'controls.trimFullHint': '将结束时间设为 0 即转换完整音频长度',
    'controls.fadeIn': '平滑淡入效果 (2秒)',
    'controls.fadeOut': '平滑淡出效果 (2秒)',
    'controls.convertBtn': '立即转换为 MP3',
    'controls.convertBatchBtn': '全部批量转换为 MP3',

    'progress.extractingTitle': '正在提取高保真 MP3 音频...',
    'progress.decodingAudio': '正在通过 Web Audio 引擎解码音频流...',
    'progress.encodingMp3': '正在浏览器本地编码 MP3 数据帧...',
    'progress.wasmFallback': '正在运行 WebAssembly FFmpeg 备用引擎...',
    'progress.fileCounter': '正在处理文件',
    'progress.privacyReminder': '100% 本地处理 — 零字节上传至任何服务器',
    'progress.cancelBtn': '取消转换',

    'result.successTitle': '您的 MP3 音频已准备就绪！',
    'result.successSubtitle': '在下方播放器立即试听，或直接保存您的 MP3 文件。',
    'result.previewLabel': '内置音频预览播放器',
    'result.downloadBtn': '下载 MP3',
    'result.downloadAllBtn': '下载全部 MP3',
    'result.convertAnotherBtn': '转换另一个文件',
    'result.fileSize': '输出大小',
    'result.duration': '音频时长',
    'result.bitrateBadge': '比特率',
    'result.errorTitle': '无法从此文件中提取音频',
    'result.errorDesc': '请确保该视频文件包含有效的音轨且文件未损坏。',
    'result.tryAgainBtn': '尝试其他文件',

    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': '首页',
    'breadcrumb.converter': 'MP4 转 MP3 免费转换器',

    'howto.sectionBadge': '3 步可视化指南',
    'howto.title': '如何通过 3 个简单步骤使用免费 MP4 转 MP3 转换器',
    'howto.subtitle':
      '体验极速 converter mp4 to mp3 free 工作流，无需云端排队、无需注册账号，100% 本地硬件加速。',
    'howto.step1Title': '1. 拖入或选择 MP4 视频',
    'howto.step1Desc':
      '将 .mp4、.mov、.webm 或 .mkv 文件拖入虚线框。我们的 mp4 to mp3 free converter 直接在本地内存读取文件，零上传等待。',
    'howto.step2Title': '2. 选择 320kbps 音质与裁剪',
    'howto.step2Desc':
      '在这款 free mp3 converter 中选择 128、192 或 320 kbps 母带级音质，按需设定起止时间与 2 秒淡入淡出。',
    'howto.step3Title': '3. 试听并离线下载 MP3',
    'howto.step3Desc':
      '在内置 yt to mp3 player converter 预览播放器中即刻试听，并点击“下载 MP3”保存到本地。',

    'compare.sectionBadge': '技术架构对比',
    'compare.title': '为什么 100% 客户端离线转换远胜传统云端转换器',
    'compare.subtitle':
      '了解为什么我们的 free converter mp4 to mp3 与 converter mp4 to mp3 gratis offline 能够兼顾极致隐私与瞬时速度。',
    'compare.card1Title': '零服务器上传 vs 云端隐私泄露风险',
    'compare.card1Cloud': '传统在线转换网站会将您的私人视频上传并暂存在第三方服务器上。',
    'compare.card1Local':
      '我们的 free mp4 to mp3 converter 通过 Web Audio API 和 WebAssembly 100% 在本地浏览器沙盒内运行，文件绝不外传。',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline 离线应用',
    'compare.card2Cloud': '一旦断网或 Wi-Fi 不稳定，传统网页工具立刻失效。',
    'compare.card2Local':
      '一键添加到主屏幕即可拥有真正的 converter mp4 to mp3 gratis offline，无网环境照常转换。',
    'compare.card3Title': '硬件级瞬时速度与批量转换',
    'compare.card3Cloud': '漫长的上传进度条、文件大小限制和排队等待。',
    'compare.card3Local':
      '这款 mp3 converter free 引擎可在数秒内解码数 GB 的大视频，并支持无限批量转换。',
    'compare.card4Title': '内置 YT to MP3 Player Converter 预览与 320kbps',
    'compare.card4Cloud': '下载前无法试听，且音质常被压缩。',
    'compare.card4Local':
      '非常适合需要本地 youtube to mp3 converter 替代方案来处理已保存 MP4 视频的创作者，并可通过 yt to mp3 player converter 实时试听。',

    'faq.sectionBadge': '常见问题解答 (FAQ)',
    'faq.title': '常见问题 — 免费 MP4 转 MP3 离线转换器',
    'faq.subtitle': '关于客户端本地隐私保护、离线运行与 320kbps 母带级提取的完整解答。',
    'faq.q1': '这款 converter mp4 to mp3 free 是如何在不上传文件的情况下工作的？',
    'faq.a1':
      '我们的 converter mp4 to mp3 free 完全依托浏览器内置的 HTML5 Web Audio API 与 WebAssembly 技术在本地解码和编码 MP3，零字节上传服务器。',
    'faq.q2': '为什么它是处理大体积视频最快的 mp4 to mp3 free converter？',
    'faq.a2':
      '省去了将几个 GB 视频上传到云端服务器的漫长过程，我们的 mp4 to mp3 free converter 直接从您的本地磁盘读取并提取音轨，仅需几秒。',
    'faq.q3': '它真的可以作为 converter mp4 to mp3 gratis offline 在断网时使用吗？',
    'faq.a3':
      '是的！Service Worker 会自动缓存完整应用，点击“添加到主屏幕”后即可作为 converter mp4 to mp3 gratis offline 在无网络环境下使用。',
    'faq.q4': '这款 free mp3 converter 支持哪些音频比特率？',
    'faq.a4':
      '本 free mp3 converter 提供 128 kbps（标准人声）、192 kbps（高音质立体声）与 320 kbps（Studio Master 母带级最高音质）。',
    'faq.q5': '我可以用这款 free converter mp4 to mp3 转换已下载的 YouTube MP4 视频吗？',
    'faq.a5':
      '如果您已在设备本地保存了合法的 MP4 或 WebM 视频，并寻找安全的本地 youtube to mp3 converter 替代工具，只需将文件拖入我们的 free converter mp4 to mp3 即可离线提取音频。',
    'faq.q6': '内置的 yt to mp3 player converter 支持裁剪和试听吗？',
    'faq.a6':
      '完全支持。您可以精确设置起止秒数、开启 2 秒淡入淡出，并在内置 yt to mp3 player converter 中试听确认后再下载。',
    'faq.q7': '这款 mp3 converter free 完全免费且无任何限制吗？',
    'faq.a7':
      '是的，这款 free mp4 to mp3 converter 与 mp3 converter free 100% 免费开源，无文件数量限制、无水印、无需注册。',

    'footer.tagline': '100% 本地浏览器 MP4 转 MP3 免费转换器 • 由 Web Audio API 与 WebAssembly 驱动',
    'footer.privacyBadge': '零服务器上传 • 100% 本地离线隐私保障',
    'footer.copyright': 'MP4 转 MP3 转换器。保留所有权利。',
    'footer.supportText': '喜欢这款极速又保护隐私的转换工具吗？',
  },

  ru: {
    'meta.title': 'Конвертер MP4 в MP3 Бесплатно — 100% Офлайн и Приватно (Без Загрузки)',
    'meta.description':
      'Используйте наш free mp4 to mp3 converter и converter mp4 to mp3 gratis offline для извлечения MP3 320 кбит/с прямо в браузере. Без загрузки на сервер, 100% приватно.',
    'meta.keywords':
      'converter mp4 to mp3 free, free mp3 converter, mp4 to mp3 free converter, free mp4 to mp3 converter, free converter mp4 to mp3, mp3 converter free, youtube to mp3 converter, converter mp4 to mp3 gratis offline, yt to mp3 player converter, конвертер mp4 в mp3 бесплатно',

    'nav.brand': 'MP4 в MP3',
    'nav.brandAria': 'Главная страница бесплатного конвертера MP4 в MP3',
    'nav.langSelectAria': 'Выбрать язык',
    'nav.themeToggleAria': 'Переключить светлую или тёмную тему',
    'nav.themeLight': 'Светлая тема',
    'nav.themeDark': 'Тёмная тема',
    'nav.installApp': 'На главный экран',
    'nav.installAppAria': 'Установить приложение MP4 в MP3 на главный экран для работы офлайн',
    'nav.supportDev': 'Поддержать автора',
    'nav.supportDevAria': 'Поддержать разработчика на Ko-fi',

    'pwa.toastReady': 'Офлайн-режим готов! Конвертируйте MP4 в MP3 без интернета.',
    'pwa.toastInstalled': 'Приложение установлено! Запускайте MP4 в MP3 с главного экрана.',
    'pwa.workspaceInstallBtn': 'На главный экран (100% Офлайн-приложение)',
    'pwa.iosTooltipTitle': 'Установка на iPhone / iPad (Safari)',
    'pwa.iosTooltipStep': 'Нажмите «Поделиться» → «На экран „Домой“»',
    'pwa.modalTitle': 'Установить офлайн-приложение MP4 в MP3',
    'pwa.modalDesc':
      'Установите этот converter mp4 to mp3 gratis offline на рабочий стол или смартфон для мгновенной работы без интернета.',
    'pwa.iosStep': 'На iPhone/iPad (Safari): Нажмите «Поделиться» → «На экран „Домой“».',
    'pwa.desktopStep': 'На ПК/Android (Chrome/Edge): Нажмите значок установки в адресной строке браузера.',
    'pwa.installNowBtn': 'Установить сейчас',
    'pwa.closeBtn': 'Понятно',

    'hero.badge': '100% в Браузере • Без Загрузки на Сервер • Полная Приватность',
    'hero.title': 'Конвертер MP4 в MP3',
    'hero.subtitle': 'Извлекайте аудио MP3 студийного качества из ваших видео прямо в браузере.',

    'dropzone.title': 'Перетащите файлы MP4 или видео сюда',
    'dropzone.subtitle': 'или нажмите в любом месте этой области, чтобы выбрать файлы на устройстве',
    'dropzone.formats': 'Поддержка .MP4, .MOV, .WEBM, .MKV • Пакетная конвертация',
    'dropzone.browseBtn': 'Выбрать видеофайлы',
    'dropzone.sampleBtn': 'Попробовать демо-видео',
    'dropzone.privacyNote': 'Файлы никогда не покидают ваше устройство — локальная обработка через Web Audio и WebAssembly',

    'controls.selectedFiles': 'Выбранные видеофайлы',
    'controls.addMoreFiles': '+ Добавить ещё видео',
    'controls.clearAll': 'Очистить всё',
    'controls.qualityLabel': 'Выберите качество аудио MP3 (битрейт)',
    'controls.bitrate128': '128 кбит/с (Стандарт)',
    'controls.bitrate128Desc': 'Компактный размер, отлично для речи и подкастов',
    'controls.bitrate192': '192 кбит/с (Высокое)',
    'controls.bitrate192Desc': 'Оптимальный баланс чистоты звука и размера файла',
    'controls.bitrate320': '320 кбит/с (Студийное)',
    'controls.bitrate320Desc': 'Максимальная точность звучания для музыки',
    'controls.trimToggle': 'Обрезка аудио и плавное затухание (Fade)',
    'controls.trimStart': 'Начало (сек)',
    'controls.trimEnd': 'Конец (сек)',
    'controls.trimFullHint': 'Оставьте Конец = 0 для конвертации всей длины',
    'controls.fadeIn': 'Плавное нарастание (2 с)',
    'controls.fadeOut': 'Плавное затухание (2 с)',
    'controls.convertBtn': 'Конвертировать в MP3',
    'controls.convertBatchBtn': 'Конвертировать все в MP3',

    'progress.extractingTitle': 'Извлечение высококачественного MP3 аудио...',
    'progress.decodingAudio': 'Декодирование аудиопотока через Web Audio Engine...',
    'progress.encodingMp3': 'Локальное кодирование MP3-фреймов в браузере...',
    'progress.wasmFallback': 'Запуск резервного движка WebAssembly FFmpeg...',
    'progress.fileCounter': 'Обработка файла',
    'progress.privacyReminder': '100% локальная обработка — ноль байт отправлено на сервер',
    'progress.cancelBtn': 'Отменить',

    'result.successTitle': 'Ваш MP3-файл готов!',
    'result.successSubtitle': 'Прослушайте аудио в плеере ниже или сразу скачайте MP3.',
    'result.previewLabel': 'Аудиоплеер предпрослушивания',
    'result.downloadBtn': 'Скачать MP3',
    'result.downloadAllBtn': 'Скачать все MP3',
    'result.convertAnotherBtn': 'Конвертировать другой файл',
    'result.fileSize': 'Размер файла',
    'result.duration': 'Длительность',
    'result.bitrateBadge': 'Битрейт',
    'result.errorTitle': 'Не удалось извлечь аудио из этого файла',
    'result.errorDesc': 'Убедитесь, что видеофайл содержит корректную звуковую дорожку и не повреждён.',
    'result.tryAgainBtn': 'Попробовать другой файл',

    'breadcrumb.ariaLabel': 'Breadcrumb',
    'breadcrumb.home': 'Главная',
    'breadcrumb.converter': 'Бесплатный Конвертер MP4 в MP3',

    'howto.sectionBadge': 'Наглядное руководство за 3 шага',
    'howto.title': 'Как использовать бесплатный конвертер MP4 в MP3 за 3 простых шага',
    'howto.subtitle':
      'Самый быстрый процесс converter mp4 to mp3 free без облачных очередей и регистрации.',
    'howto.step1Title': '1. Перетащите видео MP4',
    'howto.step1Desc':
      'Добавьте файлы .mp4, .mov, .webm или .mkv. Наш mp4 to mp3 free converter мгновенно открывает их локально.',
    'howto.step2Title': '2. Выберите 320 кбит/с и обрезку',
    'howto.step2Desc':
      'Укажите 128, 192 или 320 кбит/с в этом free mp3 converter и настройте время обрезки и затухания.',
    'howto.step3Title': '3. Прослушайте и скачайте MP3 офлайн',
    'howto.step3Desc':
      'Оцените звук во встроенном плеере yt to mp3 player converter и нажмите «Скачать MP3».',

    'compare.sectionBadge': 'Сравнение технологий',
    'compare.title': 'Почему 100% локальная офлайн-конвертация лучше облачных сервисов',
    'compare.subtitle':
      'Узнайте, почему наш free converter mp4 to mp3 и converter mp4 to mp3 gratis offline гарантирует полную безопасность.',
    'compare.card1Title': 'Ноль загрузок на сервер vs Облачные риски',
    'compare.card1Cloud': 'Облачные сайты загружают ваши личные видео на сторонние серверы.',
    'compare.card1Local':
      'Наш free mp4 to mp3 converter обрабатывает звук на 100% внутри браузера через Web Audio API и WebAssembly.',
    'compare.card2Title': 'Converter MP4 to MP3 Gratis Offline (PWA)',
    'compare.card2Cloud': 'Обычные онлайн-сервисы не работают без интернета.',
    'compare.card2Local':
      'Установите PWA на главный экран и используйте полноценный converter mp4 to mp3 gratis offline без сети.',
    'compare.card3Title': 'Аппаратная скорость и пакетный режим',
    'compare.card3Cloud': 'Долгие загрузки гигабайтных файлов и лимиты.',
    'compare.card3Local':
      'Движок mp3 converter free конвертирует несколько больших видео за считанные секунды.',
    'compare.card4Title': 'Плеер YT to MP3 Player Converter и 320 кбит/с',
    'compare.card4Cloud': 'Скачивание вслепую и сжатый звук.',
    'compare.card4Local':
      'Отличная локальная альтернатива youtube to mp3 converter для уже сохранённых на устройстве MP4-роликов с предпрослушиванием в yt to mp3 player converter.',

    'faq.sectionBadge': 'Часто задаваемые вопросы',
    'faq.title': 'Частые вопросы — Бесплатный Конвертер MP4 в MP3',
    'faq.subtitle': 'Всё о приватном офлайн-извлечении MP3 в студийном качестве 320 кбит/с.',
    'faq.q1': 'Как этот converter mp4 to mp3 free работает без загрузки файлов на сервер?',
    'faq.a1':
      'Наш converter mp4 to mp3 free выполняет декодирование и кодирование MP3 на 100% внутри вашего браузера с помощью Web Audio API и WebAssembly.',
    'faq.q2': 'Почему это самый быстрый mp4 to mp3 free converter для больших видео?',
    'faq.a2':
      'Вам не нужно тратить время на отправку гигабайтов видео в облако — mp4 to mp3 free converter читает файл прямо с вашего диска за секунды.',
    'faq.q3': 'Работает ли он как converter mp4 to mp3 gratis offline без интернета?',
    'faq.a3':
      'Да! Service Worker кэширует приложение, превращая его в полноценный converter mp4 to mp3 gratis offline для ПК и смартфонов.',
    'faq.q4': 'Какой битрейт поддерживает этот free mp3 converter?',
    'faq.a4':
      'Наш free mp3 converter поддерживает 128 кбит/с (Стандарт), 192 кбит/с (Высокое) и 320 кбит/с (Студийный мастер).',
    'faq.q5': 'Можно ли использовать этот free converter mp4 to mp3 для сохранённых видео с YouTube?',
    'faq.a5':
      'Да, если у вас на устройстве сохранены видео MP4 или WebM и вам нужен локальный инструмент по типу youtube to mp3 converter, просто перетащите их в наш free converter mp4 to mp3.',
    'faq.q6': 'Позволяет ли встроенный yt to mp3 player converter обрезать и прослушать трек?',
    'faq.a6':
      'Конечно. Вы можете обрезать начало и конец, включить плавное затухание 2 с и сразу прослушать MP3 во встроенном yt to mp3 player converter.',
    'faq.q7': 'Этот mp3 converter free полностью бесплатный и без ограничений?',
    'faq.a7':
      'Да, наш free mp4 to mp3 converter и mp3 converter free на 100% бесплатен, без лимитов, без регистрации и без водяных знаков.',

    'footer.tagline': '100% Клиентский Конвертер MP4 в MP3 • На базе Web Audio API и WebAssembly.',
    'footer.privacyBadge': 'Без Загрузки на Сервер • 100% Офлайн-Гарантия Приватности',
    'footer.copyright': 'MP4 to MP3 Converter. Все права защищены.',
    'footer.supportText': 'Нравится быстрая и приватная конвертация?',
  },
} as const;

export type TranslationKey = keyof typeof ui['en'];

export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) {
    return lang as SupportedLocale;
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLocale) {
  return function t(key: TranslationKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: SupportedLocale, path = ''): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  if (lang === defaultLang) {
    return cleanPath ? `/${cleanPath}/` : '/';
  }
  return cleanPath ? `/${lang}/${cleanPath}/` : `/${lang}/`;
}

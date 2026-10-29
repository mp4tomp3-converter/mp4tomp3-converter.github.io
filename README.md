# MP4 to MP3 Converter — 100% Client-Side, Offline & Private

[![Live Demo](https://img.shields.io/badge/Live_Demo-mp4tomp3--converter.github.io-31AAA9?style=for-the-badge&logo=githubpages&logoColor=white)](https://mp4tomp3-converter.github.io/)
[![Astro](https://img.shields.io/badge/Astro_5-Static_Islands-A82020?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![100% Client-Side Privacy](https://img.shields.io/badge/Privacy-100%25_Client--Side_(Zero_Uploads)-6C1A1A?style=for-the-badge&logo=shield&logoColor=F8E0A4)](https://mp4tomp3-converter.github.io/)
[![PWA Offline Ready](https://img.shields.io/badge/PWA-100%25_Offline_Ready-31AAA9?style=for-the-badge&logo=pwa&logoColor=white)](https://mp4tomp3-converter.github.io/)
[![MIT License](https://img.shields.io/badge/License-MIT-F8E0A4?style=for-the-badge&labelColor=6C1A1A&color=F8E0A4)](./LICENSE)
[![Support on Ko-fi](https://img.shields.io/badge/Support_on_Ko--fi-kishara-A82020?style=for-the-badge&logo=ko-fi&logoColor=F8E0A4)](https://ko-fi.com/kishara)

> **Production Live App:** [https://mp4tomp3-converter.github.io/](https://mp4tomp3-converter.github.io/)

---

## Overview & Zero-Server Privacy Architecture

**MP4 to MP3 Converter** is an ultra-fast, distraction-free web application that extracts studio-quality MP3 audio from `.mp4`, `.mov`, `.webm`, and `.mkv` video files **100% inside the user's browser**.

Unlike traditional cloud converters that upload gigabytes of personal video recordings to remote third-party servers, our architecture processes every byte locally in browser memory:

1. **Local File Stream Ingestion:** Video files are read directly from local disk memory via the File & `ArrayBuffer` APIs—zero network requests or upload queues.
2. **Primary Web Audio Engine:** The browser's native hardware-accelerated `AudioContext.decodeAudioData` decodes stereo/mono PCM audio tracks, applies optional sample-accurate timestamp trimming and 2-second linear fade-in/fade-out envelopes, and feeds chunked 16-bit PCM frames into an ESM `Mp3Encoder` (`@breezystack/lamejs`) while yielding to the main thread for smooth 60fps soundwave animations.
3. **WebAssembly FFmpeg Fallback:** If a container uses an uncommon audio codec not natively supported by the host browser's `AudioContext`, the engine seamlessly falls back to `@ffmpeg/ffmpeg` (WebAssembly) to transcode the audio track locally.
4. **Offline Service Worker Sandbox:** Once visited or installed via **Add to Home Screen**, `sw.js` caches all HTML language routes and hashed JS/CSS/WASM bundles so conversions work **100% offline** without an internet connection.

---

## Key Features

- **Instant Local MP4 to MP3 Extraction:** Supports `.mp4`, `.mov`, `.webm`, and `.mkv` containers with multi-file **Batch Conversion** and a 1-click **Instant Demo Video** synthesizer.
- **Selectable CBR Audio Bitrates:**
  - `128 kbps (Standard)` — Compact size tailored for voice, lectures, and podcasts.
  - `192 kbps (High)` — Balanced stereo clarity and file size for daily listening.
  - `320 kbps (Studio Master)` — Maximum MP3 fidelity for music and production audio.
- **Built-In Audio Trimming & Smooth Fades:** Slice exact start and end timestamps (in seconds) and toggle smooth 2-second Fade In / Fade Out transitions prior to encoding.
- **Instant HTML5 Audio Preview Player:** Audition extracted MP3 tracks immediately inside the workspace before saving to disk.
- **100% Offline PWA ("Add to Home Screen"):** Full Web App Manifest + Service Worker offline caching, native `beforeinstallprompt` integration on Chrome/Edge/Android, and a 1-step visual tooltip (`Tap Share → Add to Home Screen`) on iOS Safari.
- **8-Language Internationalization (i18n):** Complete native UI, metadata, How-To guide, comparison cards, and FAQ translations across:
  - English (`/`), Español (`/es/`), Português (`/pt/`), Deutsch (`/de/`), Français (`/fr/`), 日本語 (`/ja/`), 中文 (`/zh/`), and Русский (`/ru/`).
- **Big Minimal First-Fold UI & Light/Dark Themes:** `100dvh` above-the-fold workspace dedicated strictly to converting files, paired with an ultra-minimal icon-only mobile & tablet navbar (`48x48px` square icon touch targets across all viewports `< 1280px`).

---

## UI/UX Color System

| Token Name | Hex Code | Role in Light Mode (Default) | Role in Dark Mode |
| :--- | :--- | :--- | :--- |
| **Teal Accent** | `#31AAA9` | Dashed dropzone border, primary card borders, active equalizer bars, secondary badges | Primary action button, secondary text highlights, dropzone border |
| **Warm Cream** | `#F8E0A4` | Surface cards, Ko-fi support button background, icon containers (`#FFFDF7` page base) | Primary high-contrast foreground typography |
| **Crimson Red** | `#A82020` | Primary action CTA buttons (`Convert to MP3`, `Download MP3`), secondary text, equalizer bars | Primary card borders, button hover state |
| **Deep Burgundy** | `#6C1A1A` | Primary high-contrast body & heading typography, primary CTA hover state | Surface card background (`#1A0909` page base, `#2B0E0E` workspace box) |

---

## Tech Stack & Technical SEO Highlights

- **Framework:** [Astro 5](https://astro.build/) (Static Output Mode for GitHub Pages, zero unnecessary runtime overhead)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Semantic CSS Custom Properties (`src/styles/global.css`)
- **Client-Side Audio Engine:** Web Audio API (`AudioContext.decodeAudioData`) + `@breezystack/lamejs` + `@ffmpeg/ffmpeg` WebAssembly fallback (`src/utils/audioEngine.ts`)
- **100/100 Technical SEO & Accessibility Architecture:**
  - **Bidirectional Hreflang Matrix:** Self-referencing `<link rel="canonical">` and full `<link rel="alternate" hreflang="...">` tags for all 8 locales plus `x-default`.
  - **Google-Compliant JSON-LD Structured Data:** Dynamic `WebApplication`, `BreadcrumbList`, and localized `FAQPage` schemas (100% compliant with Google Rich Result guidelines—zero fake ratings or reviews).
  - **Automated XML Sitemaps:** Powered by `@astrojs/sitemap`, generating `sitemap-index.xml` and `sitemap-0.xml` with full i18n locale mappings, referenced in `public/robots.txt`.
  - **GitHub Pages Optimization:** Includes `public/.nojekyll` so `/_astro/*` hashed assets serve cleanly without Jekyll interference, deployed automatically via `.github/workflows/deploy.yml` (`withastro/action@v3` & `actions/deploy-pages@v4`).
  - **WCAG AA/AAA Accessibility:** Full `aria-label` coverage on all controls and icon-only mobile navbar buttons, `role="radiogroup"` bitrate pills, and `aria-live="polite"` conversion progress announcements.

---

## Local Development & Build Instructions

### Prerequisites
- **Node.js** `v20+` (tested on `v22` / `v24`)
- **npm** `v10+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:4321/` in your browser (`http://localhost:4321/es/`, `/ja/`, etc. for localized routes).

### 3. Build Static Production Bundle
```bash
npm run build
```
Generates the complete static site, localized HTML pages, `sitemap-index.xml`, `sitemap-0.xml`, `.nojekyll`, and PWA assets inside `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## Support the Developer

If **MP4 to MP3 Converter** saves you time and protects your privacy with instant, ad-free, 100% local conversions, consider supporting ongoing open-source development:

- **Ko-fi:** [https://ko-fi.com/kishara](https://ko-fi.com/kishara)

---

## License

Released under the [MIT License](./LICENSE) — Copyright (c) 2026 **Kishara Dilshan / PixelPieStudio**.

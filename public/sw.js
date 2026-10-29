const CACHE_VERSION = 'mp4tomp3-offline-v2';
const PRECACHE_ROUTES = [
  '/',
  '/es/',
  '/pt/',
  '/de/',
  '/fr/',
  '/ja/',
  '/zh/',
  '/ru/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/og-image.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) =>
        Promise.allSettled(
          PRECACHE_ROUTES.map((url) =>
            fetch(url, { cache: 'reload' }).then((res) => {
              if (res.ok) return cache.put(url, res);
            })
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
            .map((oldKey) => caches.delete(oldKey))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Warm hashed Astro JS/CSS/WASM bundles discovered by the active document
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_ASSETS' && Array.isArray(event.data.urls)) {
    event.waitUntil(
      caches.open(CACHE_VERSION).then((cache) =>
        Promise.allSettled(
          event.data.urls.map(async (assetUrl) => {
            const existing = await cache.match(assetUrl);
            if (!existing) {
              const res = await fetch(assetUrl);
              if (res.ok) await cache.put(assetUrl, res);
            }
          })
        )
      )
    );
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Never intercept Google Analytics or third-party origin beacons
  if (url.origin !== self.location.origin) {
    // Allow caching WASM core files if loaded from CDN fallback, otherwise passthrough
    if (url.pathname.endsWith('.wasm') || url.pathname.includes('@ffmpeg')) {
      event.respondWith(
        caches.match(request).then(
          (cached) =>
            cached ||
            fetch(request).then((networkRes) => {
              if (networkRes.ok) {
                const clone = networkRes.clone();
                caches.open(CACHE_VERSION).then((c) => c.put(request, clone));
              }
              return networkRes;
            })
        )
      );
    }
    return;
  }

  // Immutable hashed Astro bundles (/_astro/*), WASM, CSS, JS, and icons: Cache-First
  if (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.wasm') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.webmanifest')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((networkRes) => {
          if (networkRes && networkRes.ok) {
            const clone = networkRes.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return networkRes;
        });
      })
    );
    return;
  }

  // HTML Navigation Routes: Network-First with Offline Cache Fallback
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkRes) => {
          if (networkRes && networkRes.ok) {
            const clone = networkRes.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
          }
          return networkRes;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_VERSION);
          const exactMatch = await cache.match(request);
          if (exactMatch) return exactMatch;

          // Normalize trailing slash lookup
          const normalizedPath = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
          const slashMatch = await cache.match(normalizedPath);
          if (slashMatch) return slashMatch;

          return (await cache.match('/')) || Response.error();
        })
    );
  }
});

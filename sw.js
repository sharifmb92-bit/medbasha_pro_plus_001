const CACHE_NAME = 'tmsa-pro-v1';

// Instalación: No hace nada pero es obligatorio que esté el evento
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activación
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetch: Obligatorio para que Chrome active el botón de instalar
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

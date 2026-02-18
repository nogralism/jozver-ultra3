const CACHE_NAME = 'jozve-v1';
const ASSETS = [
  '/jozver-ultra3/',
  '/jozver-ultra3/index.html',
  '/jozver-ultra3/icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching assets...');
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('thoughts-deleter-v1').then(function(cache) {
      return cache.addAll([
        '/thoughts-deleter/',
        '/thoughts-deleter/index.html',
        '/thoughts-deleter/manifest.json',
        '/thoughts-deleter/images/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

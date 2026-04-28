self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    // 簡單的 offline-first 範例：先嘗試 cache，再 network
    event.respondWith(
        caches.match(event.request).then(resp => resp || fetch(event.request))
    );
});

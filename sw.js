self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('a-button-cache')
              .then(function(cache) {
                  return cache.addAll([
                      '/',
                      '/restart.svg',
                      '/fonts/audiowide-v4-latin-regular.eot',
                      '/fonts/audiowide-v4-latin-regular.woff2',
                      '/fonts/audiowide-v4-latin-regular.woff',
                      '/fonts/audiowide-v4-latin-regular.ttf',
                      '/fonts/audiowide-v4-latin-regular.svg',
                      '/dist/vue.min.js',
                      '/index.html',
                      '/index.js',
                      '/index.css'
                  ]);
              })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});

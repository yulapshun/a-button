self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('a-button-cache-2')
              .then(function(cache) {
                  return cache.addAll([
                      '/a-button/',
                      '/a-button/restart.svg',
                      '/a-button/fonts/audiowide-v4-latin-regular.eot',
                      '/a-button/fonts/audiowide-v4-latin-regular.woff2',
                      '/a-button/fonts/audiowide-v4-latin-regular.woff',
                      '/a-button/fonts/audiowide-v4-latin-regular.ttf',
                      '/a-button/fonts/audiowide-v4-latin-regular.svg',
                      '/a-button/dist/vue.min.js',
                      '/a-button/index.html',
                      '/a-button/index.js',
                      '/a-button/index.css',
                      '/a-button/j/index.html'
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

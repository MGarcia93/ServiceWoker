self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('static-v1').then(function(cache) {
        return cache.addAll([
          '/img/',
          '/img/benelli3.jpg',
          '/img/descarga.jpg',
          '/img/desert.jpg',
          '/img/landscape-nature-forest-fog-sunrise-sunset-556576-pxhere.com.jpg'
        ]);
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || event.default();
      })
    );
  }); 

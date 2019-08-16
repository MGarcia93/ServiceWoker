    
const site='/serviceWoker';
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('static-v1').then(function(cache) {
        return cache.addAll([
          site+'/img/',
          site+'/img/benelli3.jpg',
          site+'/img/descarga.jpg',
          site+'/img/desert.jpg',
          site+'/img/landscape-nature-forest-fog-sunrise-sunset-556576-pxhere.com.jpg'
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

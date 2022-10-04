// The name of the cache
const memberCache = "cache-member";

// On first load, create the cache - Når websitet indlæses
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(memberCache).then(function (cache) {
      // Fetch data & add fetch result to cache
      return cache.addAll([
        "/members/",
        "/members/index.html",
        "/members/morten.png",
        "/members/nina.png",
        "/members/olivia.png",
      ]);
    })
  );
});

// If a file is not available online (if offline)
// open the cache, and look for a match
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
});

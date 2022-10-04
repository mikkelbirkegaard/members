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
        "/members/mystyle.css",
        "/members/javascript.js",
        "/members/members.json",
        "/members/morten.png",
        "/members/olivia.png",
        "/members/nina.png",
        "/members/mikkel.png",
      ]);
    })
  );
});

// If a file is not available online (if offline)
// open the cache, and look for a match
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(memberCache).then((cache) => cache.match(event.request))
    )
  );
});

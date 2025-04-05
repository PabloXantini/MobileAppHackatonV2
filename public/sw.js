const staticDevLocator = "dev-locator-site-v1"
const assets = [
  "/",
  "/index.html",
  "/dashboard_lideres.html",
  "/css/style.css",
  "/js/app.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevLocator).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
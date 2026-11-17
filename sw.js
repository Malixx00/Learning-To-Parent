// Service worker: makes the app work offline.
// Network first, so friends always get the latest content when online; falls back to the cache offline.
// Bump VERSION when you add or rename files in FILES.
const VERSION = "v1";
const CACHE = "parenting-toolkit-" + VERSION;
const FILES = [
  "./", "index.html", "style.css", "app.js", "manifest.webmanifest",
  "content/situations.js", "content/kids-extra.js", "content/early-years.js", "content/teens.js", "content/young-adults.js",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return; // external links go straight to the network
  e.respondWith(
    fetch(req)
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});

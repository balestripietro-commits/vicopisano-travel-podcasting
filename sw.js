/* Service worker di pulizia: chi aveva attivato la guida in cammino (tolta) lo ritrova qui e lo disattiva. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.registration.unregister()); });

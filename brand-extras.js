/* Travel Podcasting · extra di identità per i siti dei Comuni
   Tappe ascoltate, collezione di forme, "percorso completato", anello del play,
   animazione di cambio forma. Richiede app.js (tappe, getStopShape, STOP_ARTWORKS). */
(function () {
  "use strict";
  var KEY = "tp-" + (document.documentElement.dataset.tpTheme || "sito") + "-ascoltate";
  var heard = new Set();
  try { heard = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (e) { /* senza memoria locale */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(Array.from(heard))); } catch (e) { /* ignora */ } }

  var collection = null;
  var overlay = null;

  function art(t) { return STOP_ARTWORKS[t.numero] || ""; }

  function renderCollection() {
    var panel = document.querySelector(".stops-panel");
    var list = document.getElementById("stops-list");
    if (!panel || !list || typeof tappe === "undefined") return;
    if (!collection) {
      collection = document.createElement("section");
      collection.className = "stop-collection";
      collection.setAttribute("aria-label", "Le tue tappe ascoltate");
      list.parentNode.insertBefore(collection, list);
    }
    var items = tappe.map(function (t) {
      var on = heard.has(t.numero);
      return '<img class="col-thumb' + (on ? " is-heard" : "") + '" data-shape="' + getStopShape(t.titolo) +
        '" src="' + art(t) + '" alt="' + (on ? "Tappa " + t.numero + " ascoltata" : "Tappa " + t.numero + " da ascoltare") + '" loading="lazy" decoding="async">';
    }).join("");
    collection.innerHTML = '<div class="stop-collection-head"><strong>Le tue tappe</strong><span>' + heard.size + " di " + tappe.length +
      '</span></div><div class="stop-collection-row">' + items + "</div>";
  }

  function applyHeard() {
    var buttons = document.querySelectorAll(".stops-list .stop-button");
    buttons.forEach(function (b, i) {
      if (tappe[i]) b.classList.toggle("is-heard", heard.has(tappe[i].numero));
    });
    document.querySelectorAll(".map-marker[data-stop]").forEach(function (m) {
      m.classList.toggle("is-heard", heard.has(Number(m.dataset.stop)));
    });
    renderCollection();
  }

  function share() {
    var url = new URL("./", window.location.href).href;
    var data = { title: "Ho ascoltato tutto il percorso di Vicopisano", text: "Travel Podcasting · Vicopisano", url: url };
    if (navigator.share) { navigator.share(data).catch(function () {}); return; }
    try { navigator.clipboard.writeText(url); alert("Link copiato"); } catch (e) { window.prompt("Copia il link", url); }
  }

  function showComplete() {
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "tp-complete";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-labelledby", "tp-complete-title");
      overlay.hidden = true;
      var mosaic = tappe.map(function (t) {
        return '<img class="tp-complete-thumb" data-shape="' + getStopShape(t.titolo) + '" src="' + art(t) + '" alt="">';
      }).join("");
      overlay.innerHTML = '<div class="tp-complete-card"><h2 id="tp-complete-title">Hai ascoltato tutto il percorso</h2>' +
        '<div class="tp-complete-mosaic">' + mosaic + "</div>" +
        '<div class="tp-complete-actions"><button type="button" class="tp-complete-share">Condividi il percorso</button>' +
        '<button type="button" class="tp-complete-close">Chiudi</button></div>' +
        '<p class="tp-complete-promo">Vuoi un percorso così nel tuo Comune? <a href="https://balestripietro-commits.github.io/landing-page-travel-podcasting/" target="_blank" rel="noopener">Parliamone</a></p></div>';
      document.body.appendChild(overlay);
      overlay.querySelector(".tp-complete-share").addEventListener("click", share);
      overlay.querySelector(".tp-complete-close").addEventListener("click", function () { overlay.hidden = true; });
      overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.hidden = true; });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") overlay.hidden = true; });
    }
    overlay.hidden = false;
    var close = overlay.querySelector(".tp-complete-close");
    if (close) close.focus();
  }

  function mark(stop) {
    if (stop == null || heard.has(stop)) return;
    heard.add(stop);
    save();
    applyHeard();
    if (typeof tappe !== "undefined" && heard.size === tappe.length) showComplete();
  }

  function setRing(ratio) {
    var deg = Math.round(Math.max(0, Math.min(1, ratio || 0)) * 360) + "deg";
    ["player-play-button", "mini-player-toggle"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.style.setProperty("--ring", deg);
    });
  }

  window.TPExtras = {
    progress: function (stop, ratio) {
      setRing(ratio);
      if (ratio >= 0.9) mark(stop);
    },
    ended: function (stop) { mark(stop); },
  };

  /* Cambio forma: piccola animazione quando cambiano foto o forma */
  function watchShapes() {
    var ids = ["stop-preview-image", "detail-artwork-image", "mini-player-artwork"];
    var obs = new MutationObserver(function (list) {
      list.forEach(function (m) {
        var el = m.target;
        el.classList.remove("shape-swap");
        void el.offsetWidth;
        el.classList.add("shape-swap");
        setTimeout(function () { el.classList.remove("shape-swap"); }, 700);
      });
    });
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el, { attributes: true, attributeFilter: ["data-shape"] });
    });
  }

  function start() {
    applyHeard();
    watchShapes();
    var list = document.getElementById("stops-list");
    if (list) new MutationObserver(applyHeard).observe(list, { childList: true });
    var pane = document.querySelector(".leaflet-marker-pane");
    if (pane) new MutationObserver(function () { applyHeard(); }).observe(pane, { childList: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();

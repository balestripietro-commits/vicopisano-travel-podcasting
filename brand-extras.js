/* Travel Podcasting · extra di identità per i siti dei Comuni
   Tappe ascoltate, collezione di forme, "percorso completato", anello del play,
   animazione di cambio forma. Richiede app.js (tappe, getStopShape, STOP_ARTWORKS). */
(function () {
  "use strict";
  var KEY = "tp-" + (document.documentElement.dataset.tpTheme || "sito") + "-ascoltate";
  var heard = new Set();
  try { heard = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (e) { /* senza memoria locale */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(Array.from(heard))); } catch (e) { /* ignora */ } }

  var LANDING = "https://balestripietro-commits.github.io/landing-page-travel-podcasting/";
  var T = {
    it: { coll: "Le tue tappe", of: "di", heard: "Tappa {n} ascoltata", todo: "Tappa {n} da ascoltare", done: "Hai ascoltato tutto il percorso", share: "Condividi il percorso", close: "Chiudi", shareTitle: "Ho ascoltato tutto il percorso di Vicopisano", copied: "Link copiato", copy: "Copia il link", logo: "Travel Podcasting: scopri il progetto (si apre in una nuova scheda)" },
    en: { coll: "Your stops", of: "of", heard: "Stop {n} listened", todo: "Stop {n} not yet listened", done: "You have listened to the whole route", share: "Share the route", close: "Close", shareTitle: "I listened to the whole Vicopisano route", copied: "Link copied", copy: "Copy the link", logo: "Travel Podcasting: discover the project (opens in a new tab)" },
    de: { coll: "Deine Stationen", of: "von", heard: "Station {n} gehört", todo: "Station {n} noch nicht gehört", done: "Du hast die ganze Route gehört", share: "Route teilen", close: "Schließen", shareTitle: "Ich habe die ganze Route durch Vicopisano gehört", copied: "Link kopiert", copy: "Link kopieren", logo: "Travel Podcasting: das Projekt entdecken (öffnet in neuem Tab)" },
    fr: { coll: "Vos étapes", of: "sur", heard: "Étape {n} écoutée", todo: "Étape {n} pas encore écoutée", done: "Vous avez écouté tout le parcours", share: "Partager le parcours", close: "Fermer", shareTitle: "J'ai écouté tout le parcours de Vicopisano", copied: "Lien copié", copy: "Copier le lien", logo: "Travel Podcasting : découvrir le projet (s'ouvre dans un nouvel onglet)" },
    es: { coll: "Tus etapas", of: "de", heard: "Etapa {n} escuchada", todo: "Etapa {n} por escuchar", done: "Has escuchado todo el recorrido", share: "Compartir el recorrido", close: "Cerrar", shareTitle: "He escuchado todo el recorrido de Vicopisano", copied: "Enlace copiado", copy: "Copiar el enlace", logo: "Travel Podcasting: conoce el proyecto (se abre en una pestaña nueva)" },
    pt: { coll: "As suas etapas", of: "de", heard: "Etapa {n} ouvida", todo: "Etapa {n} por ouvir", done: "Ouviu todo o percurso", share: "Partilhar o percurso", close: "Fechar", shareTitle: "Ouvi todo o percurso de Vicopisano", copied: "Ligação copiada", copy: "Copiar a ligação", logo: "Travel Podcasting: conheça o projeto (abre num novo separador)" },
    ru: { coll: "Ваши остановки", of: "из", heard: "Остановка {n} прослушана", todo: "Остановка {n} ещё не прослушана", done: "Вы прослушали весь маршрут", share: "Поделиться маршрутом", close: "Закрыть", shareTitle: "Я прослушал(а) весь маршрут по Викопизано", copied: "Ссылка скопирована", copy: "Скопировать ссылку", logo: "Travel Podcasting: узнать о проекте (откроется в новой вкладке)" }
  };
  function tr() {
    var code = String((typeof currentLanguage !== "undefined" ? currentLanguage : document.documentElement.lang) || "it").toLowerCase();
    return T[code] || T.it;
  }

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
        '" src="' + art(t) + '" alt="' + (on ? tr().heard : tr().todo).replace("{n}", t.numero) + '" loading="lazy" decoding="async">';
    }).join("");
    collection.innerHTML = '<div class="stop-collection-head"><strong>' + tr().coll + '</strong><span>' + heard.size + " " + tr().of + " " + tappe.length +
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
    var data = { title: tr().shareTitle, text: "Travel Podcasting · Vicopisano", url: url };
    if (navigator.share) { navigator.share(data).catch(function () {}); return; }
    try { navigator.clipboard.writeText(url); alert(tr().copied); } catch (e) { window.prompt(tr().copy, url); }
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
      overlay.innerHTML = '<div class="tp-complete-card"><h2 id="tp-complete-title"></h2>' +
        '<div class="tp-complete-mosaic">' + mosaic + "</div>" +
        '<div class="tp-complete-actions"><button type="button" class="tp-complete-share"></button>' +
        '<button type="button" class="tp-complete-close"></button></div></div>';
      document.body.appendChild(overlay);
      overlay.querySelector(".tp-complete-share").addEventListener("click", share);
      overlay.querySelector(".tp-complete-close").addEventListener("click", function () { overlay.hidden = true; });
      overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.hidden = true; });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") overlay.hidden = true; });
    }
    overlay.querySelector("#tp-complete-title").textContent = tr().done;
    overlay.querySelector(".tp-complete-share").textContent = tr().share;
    overlay.querySelector(".tp-complete-close").textContent = tr().close;
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

  function applyLang() {
    var link = document.getElementById("brand-link");
    if (link) { link.setAttribute("aria-label", tr().logo); link.title = tr().logo; }
    renderCollection();
  }

  function start() {
    applyHeard();
    applyLang();
    new MutationObserver(applyLang).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    watchShapes();
    var list = document.getElementById("stops-list");
    if (list) new MutationObserver(applyHeard).observe(list, { childList: true });
    var pane = document.querySelector(".leaflet-marker-pane");
    if (pane) new MutationObserver(function () { applyHeard(); }).observe(pane, { childList: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();

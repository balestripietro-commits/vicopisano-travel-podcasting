/* Travel Podcasting · guida in cammino (direzione, distanza, notifica di arrivo), lettura facile,
   icone dei salti con il segno. Richiede app.js e brand-extras.js. */
(function () {
  "use strict";
  var T = {
    it: { easy: "Lettura facile", gTitle: "Guida in cammino", gText: "Ti avviso con una notifica quando arrivi a una tappa e ti mostro direzione e distanza.", on: "Attiva", off: "Disattiva", toward: "Verso la tappa {n}", aTitle: "Sei arrivato: {t}", aBody: "Tocca per ascoltare la tappa {n}.", denied: "Per usare la guida attiva posizione e notifiche dalle impostazioni del browser.", north: "Freccia rispetto al nord" },
    en: { easy: "Easy reading", gTitle: "Walking guide", gText: "I'll notify you when you reach a stop and show you the direction and distance.", on: "Turn on", off: "Turn off", toward: "Towards stop {n}", aTitle: "You have arrived: {t}", aBody: "Tap to listen to stop {n}.", denied: "To use the guide, allow location and notifications in your browser settings.", north: "Arrow points relative to north" },
    de: { easy: "Leichtes Lesen", gTitle: "Begleitung unterwegs", gText: "Ich benachrichtige dich, wenn du an einer Station ankommst, und zeige Richtung und Entfernung.", on: "Einschalten", off: "Ausschalten", toward: "Richtung Station {n}", aTitle: "Du bist angekommen: {t}", aBody: "Tippe, um Station {n} zu hören.", denied: "Erlaube Standort und Benachrichtigungen in den Browsereinstellungen.", north: "Pfeil relativ zu Norden" },
    fr: { easy: "Lecture facile", gTitle: "Guide en chemin", gText: "Je vous préviens par une notification quand vous arrivez à une étape et j'indique direction et distance.", on: "Activer", off: "Désactiver", toward: "Vers l'étape {n}", aTitle: "Vous êtes arrivé : {t}", aBody: "Touchez pour écouter l'étape {n}.", denied: "Autorisez la position et les notifications dans les réglages du navigateur.", north: "Flèche par rapport au nord" },
    es: { easy: "Lectura fácil", gTitle: "Guía en ruta", gText: "Te aviso con una notificación cuando llegues a una etapa y te muestro dirección y distancia.", on: "Activar", off: "Desactivar", toward: "Hacia la etapa {n}", aTitle: "Has llegado: {t}", aBody: "Toca para escuchar la etapa {n}.", denied: "Permite la ubicación y las notificaciones en los ajustes del navegador.", north: "Flecha respecto al norte" },
    pt: { easy: "Leitura fácil", gTitle: "Guia a caminho", gText: "Aviso-o com uma notificação quando chegar a uma etapa e mostro direção e distância.", on: "Ativar", off: "Desativar", toward: "Rumo à etapa {n}", aTitle: "Chegou: {t}", aBody: "Toque para ouvir a etapa {n}.", denied: "Permita a localização e as notificações nas definições do navegador.", north: "Seta em relação ao norte" },
    ru: { easy: "Простое чтение", gTitle: "Гид в пути", gText: "Я пришлю уведомление, когда вы дойдёте до остановки, и покажу направление и расстояние.", on: "Включить", off: "Выключить", toward: "К остановке {n}", aTitle: "Вы пришли: {t}", aBody: "Нажмите, чтобы прослушать остановку {n}.", denied: "Разрешите геолокацию и уведомления в настройках браузера.", north: "Стрелка относительно севера" },
    zh: { easy: "轻松阅读", gTitle: "沿途向导", gText: "到达站点时会通知你，并显示方向和距离。", on: "开启", off: "关闭", toward: "前往第{n}站", aTitle: "你已到达：{t}", aBody: "点按收听第{n}站。", denied: "请在浏览器设置中允许定位和通知。", north: "箭头相对于正北" },
    ar: { easy: "قراءة ميسّرة", gTitle: "مرشد الطريق", gText: "سأنبّهك بإشعار عند وصولك إلى محطة وأعرض لك الاتجاه والمسافة.", on: "تشغيل", off: "إيقاف", toward: "نحو المحطة {n}", aTitle: "لقد وصلت: {t}", aBody: "اضغط للاستماع إلى المحطة {n}.", denied: "اسمح بالموقع والإشعارات من إعدادات المتصفح.", north: "السهم بالنسبة للشمال" }
  };
  function code() { return String((typeof currentLanguage !== "undefined" ? currentLanguage : document.documentElement.lang) || "it").toLowerCase(); }
  function L() { return T[code()] || T.it; }
  function f(s, o) { return String(s).replace(/\{(\w+)\}/g, function (m, k) { return o[k] != null ? o[k] : m; }); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---- icone dei salti: attributo data-icon per poterle disegnare con il segno ---- */
  function watchIcons() {
    ["player-prev-button", "player-next-button", "mini-player-prev", "mini-player-next"].forEach(function (id) {
      var b = document.getElementById(id), s = b && b.querySelector(".material-symbols-rounded");
      if (!s) return;
      function tag() { s.setAttribute("data-icon", s.textContent.trim()); }
      tag();
      new MutationObserver(tag).observe(s, { childList: true, characterData: true, subtree: true });
    });
  }

  /* ---- lettura facile ---- */
  var easy = store("tp-easy") === "1";
  function applyEasy() {
    document.documentElement.classList.toggle("easy-read", easy);
    var b = document.getElementById("easy-read-button");
    if (b) { b.setAttribute("aria-pressed", easy ? "true" : "false"); b.setAttribute("aria-label", L().easy); b.title = L().easy; }
    document.querySelectorAll("audio").forEach(function (a) { try { a.playbackRate = easy ? 0.9 : (a.dataset.tpRate ? Number(a.dataset.tpRate) : a.playbackRate); } catch (e) { /* ignora */ } });
  }
  function addEasyButton() {
    var box = document.querySelector(".header-actions");
    if (!box || document.getElementById("easy-read-button")) return;
    var b = document.createElement("button");
    b.type = "button"; b.id = "easy-read-button"; b.className = "easy-read-button tp-icon-button";
    b.innerHTML = '<span aria-hidden="true">A+</span>';
    b.addEventListener("click", function () { easy = !easy; store("tp-easy", easy ? "1" : "0"); applyEasy(); });
    box.insertBefore(b, box.firstChild);
    applyEasy();
  }
  document.addEventListener("playing", function (e) { if (easy && e.target && e.target.tagName === "AUDIO") { try { e.target.playbackRate = 0.9; } catch (x) { /* ignora */ } } }, true);

  /* ---- guida in cammino: direzione, distanza, notifica di arrivo ---- */
  var guideOn = store("tp-guida") === "1";
  var watchId = null, pos = null, heading = null, notified = {}, card = null, deniedMsg = false;

  function rad(x) { return x * Math.PI / 180; }
  function dist(a, b) {
    var R = 6371000, dla = rad(b.lat - a.lat), dlo = rad(b.lon - a.lon);
    var h = Math.sin(dla / 2) * Math.sin(dla / 2) + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dlo / 2) * Math.sin(dlo / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function bearing(a, b) {
    var y = Math.sin(rad(b.lon - a.lon)) * Math.cos(rad(b.lat));
    var x = Math.cos(rad(a.lat)) * Math.sin(rad(b.lat)) - Math.sin(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.cos(rad(b.lon - a.lon));
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
  }
  function heard(n) { return window.TPExtras && window.TPExtras.isHeard ? window.TPExtras.isHeard(n) : false; }
  function target() {
    var cur = typeof activeStopNumber !== "undefined" && activeStopNumber ? activeStopNumber : 0, i, t;
    for (i = 0; i < tappe.length; i++) { t = tappe[i]; if (t.numero > cur && !heard(t.numero)) return t; }
    for (i = 0; i < tappe.length; i++) { t = tappe[i]; if (!heard(t.numero)) return t; }
    return null;
  }
  function fmt(m) { return m < 1000 ? Math.round(m / 5) * 5 + " m" : (m / 1000).toLocaleString(code(), { maximumFractionDigits: 1, minimumFractionDigits: 1 }) + " km"; }
  var CHEV = '<svg viewBox="0 0 200 200" width="44" height="44" aria-hidden="true"><g class="walk-arrow-g"><path d="M62 150 L100 52 L138 150" fill="none" stroke="currentColor" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';

  function ensureCard() {
    if (card && card.isConnected) return card;
    var list = document.getElementById("stops-list");
    if (!list) return null;
    card = document.createElement("section");
    card.className = "walk-card";
    card.setAttribute("aria-label", L().gTitle);
    list.parentNode.insertBefore(card, document.querySelector(".stop-collection") || list);
    return card;
  }
  function renderGuide() {
    var c = ensureCard();
    if (!c) return;
    var tg = target(), s = L();
    c.setAttribute("aria-label", s.gTitle);
    if (!guideOn) {
      c.className = "walk-card";
      c.innerHTML = '<div><strong>' + s.gTitle + '</strong><p>' + s.gText + '</p></div><button type="button" class="walk-toggle">' + s.on + "</button>" + (deniedMsg ? '<p class="walk-denied">' + s.denied + "</p>" : "");
    } else {
      c.className = "walk-card is-on";
      var info = "";
      if (tg && pos) {
        var d = dist(pos, { lat: tg.latitudine, lon: tg.longitudine });
        info = '<div class="walk-dir">' + CHEV + '<div><strong>' + f(s.toward, { n: tg.numero }) + '</strong><span class="walk-dist">' + fmt(d) + "</span></div></div>" + (heading == null ? '<p class="walk-note">' + s.north + "</p>" : "");
      } else if (tg) {
        info = '<div class="walk-dir"><div><strong>' + f(s.toward, { n: tg.numero }) + '</strong><span class="walk-dist">…</span></div></div>';
      }
      c.innerHTML = info + '<button type="button" class="walk-toggle is-off">' + s.off + "</button>" + (deniedMsg ? '<p class="walk-denied">' + s.denied + "</p>" : "");
      updateArrow();
    }
    var btn = c.querySelector(".walk-toggle");
    if (btn) btn.addEventListener("click", function () { guideOn ? stopGuide() : startGuide(); });
  }
  function updateArrow() {
    if (!card) return;
    var g = card.querySelector(".walk-arrow-g"), tg = target();
    if (!g || !pos || !tg) return;
    var b = bearing(pos, { lat: tg.latitudine, lon: tg.longitudine });
    var ang = heading == null ? b : b - heading;
    g.setAttribute("transform", "rotate(" + Math.round(ang) + " 100 100)");
    var d = card.querySelector(".walk-dist");
    if (d) d.textContent = fmt(dist(pos, { lat: tg.latitudine, lon: tg.longitudine }));
  }
  function notify(stop) {
    if (!("Notification" in window) || Notification.permission !== "granted" || notified[stop.numero]) return;
    notified[stop.numero] = true;
    var s = L();
    var title = f(s.aTitle, { t: typeof getStopTitle === "function" ? getStopTitle(stop) : stop.titolo });
    var opt = { body: f(s.aBody, { n: stop.numero }), icon: "assets/lock/tappa-" + stop.numero + ".png", tag: "tp-stop-" + stop.numero, data: { url: "./?tappa=" + stop.numero + "&lang=" + code() } };
    var fallback = function () { try { new Notification(title, opt); } catch (e) { /* ignora */ } };
    if (navigator.serviceWorker && navigator.serviceWorker.getRegistration) {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        if (reg && reg.showNotification) reg.showNotification(title, opt).catch(fallback); else fallback();
      }).catch(fallback);
    } else { fallback(); }
  }
  function onPos(p) {
    pos = { lat: p.coords.latitude, lon: p.coords.longitude };
    tappe.forEach(function (t) {
      if (!heard(t.numero) && dist(pos, { lat: t.latitudine, lon: t.longitudine }) <= 30) notify(t);
    });
    renderGuide();
  }
  function onOrient(e) {
    var h = e.webkitCompassHeading != null ? e.webkitCompassHeading : (e.absolute && e.alpha != null ? 360 - e.alpha : null);
    if (h == null || isNaN(h)) return;
    heading = h;
    updateArrow();
  }
  function startWatch() {
    if (watchId != null || !navigator.geolocation) return;
    watchId = navigator.geolocation.watchPosition(onPos, function () { deniedMsg = true; guideOn = false; store("tp-guida", "0"); stopWatch(); renderGuide(); }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 30000 });
    window.addEventListener("deviceorientationabsolute", onOrient, true);
    window.addEventListener("deviceorientation", onOrient, true);
  }
  function stopWatch() {
    if (watchId != null && navigator.geolocation) navigator.geolocation.clearWatch(watchId);
    watchId = null;
    window.removeEventListener("deviceorientationabsolute", onOrient, true);
    window.removeEventListener("deviceorientation", onOrient, true);
  }
  function startGuide() {
    deniedMsg = false;
    var asks = [];
    if ("Notification" in window && Notification.permission === "default") asks.push(Notification.requestPermission());
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") asks.push(DeviceOrientationEvent.requestPermission().catch(function () { return "denied"; }));
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(function () { /* senza notifiche in sfondo */ });
    guideOn = true; store("tp-guida", "1");
    startWatch();
    Promise.all(asks).then(function () { renderGuide(); });
    renderGuide();
  }
  function stopGuide() { guideOn = false; store("tp-guida", "0"); stopWatch(); pos = null; renderGuide(); }

  function start() {
    watchIcons();
    addEasyButton();
    renderGuide();
    if (guideOn && navigator.permissions && navigator.permissions.query) {
      navigator.permissions.query({ name: "geolocation" }).then(function (r) { if (r.state === "granted") startWatch(); else { guideOn = false; renderGuide(); } }).catch(function () { guideOn = false; });
    } else if (guideOn) { guideOn = false; }
    new MutationObserver(function () { applyEasy(); renderGuide(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    setInterval(function () { if (guideOn) renderGuide(); }, 20000);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(start, 50); });
  else setTimeout(start, 50);
})();

/* Travel Podcasting · lettura facile e icone dei salti con il segno. Richiede app.js. */
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

  /* ---- icone nel brand: sostituisce le icone Material con quelle del segno ---- */
  var BRAND_ICONS = ["help", "language", "expand_more", "my_location", "location_on", "fullscreen", "fullscreen_exit", "open_in_full", "map", "headphones", "article", "swap_horiz", "photo", "close", "arrow_back", "arrow_forward"];
  function tagIcon(s) {
    var name = s.textContent.trim();
    s.setAttribute("data-icon", name);
    var on = BRAND_ICONS.indexOf(name) >= 0 && !s.classList.contains("playback-icon");
    s.classList.toggle("brand-icon", on);
    if (on && !s.style.getPropertyValue("--ic-size")) {
      var fs = parseFloat(getComputedStyle(s).fontSize);
      if (fs > 0) s.style.setProperty("--ic-size", fs + "px");
    }
  }
  function watchIcons() {
    document.querySelectorAll(".material-symbols-rounded").forEach(function (s) {
      // la dimensione si legge prima di nascondere il testo
      if (!s.classList.contains("brand-icon")) {
        var name = s.textContent.trim();
        if (BRAND_ICONS.indexOf(name) >= 0 && !s.classList.contains("playback-icon")) {
          var fs = parseFloat(getComputedStyle(s).fontSize);
          if (fs > 0) s.style.setProperty("--ic-size", fs + "px");
        }
      }
      tagIcon(s);
      new MutationObserver(function () { tagIcon(s); }).observe(s, { childList: true, characterData: true, subtree: true });
    });
  }

  /* ---- lettura facile ---- */
  var saved = store("tp-easy");
  var easy = saved === null ? window.matchMedia("(max-width: 640px)").matches : saved === "1";
  function applyEasy() {
    document.documentElement.classList.toggle("easy-read", easy);
    var b = document.getElementById("easy-read-button");
    if (b) { b.setAttribute("aria-pressed", easy ? "true" : "false"); b.setAttribute("aria-label", L().easy); b.title = L().easy; }
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

  function start() {
    watchIcons();
    addEasyButton();
    new MutationObserver(function () { applyEasy(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(start, 50); });
  else setTimeout(start, 50);
})();

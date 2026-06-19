const tappe = [
  {
    numero: 1,
    titolo: "Torre delle Quattro Porte",
    latitudine: 43.700429,
    longitudine: 10.5863858,
    fileAudio: "audio/01_torre_quattro_porte.mp3",
    audioDisponibile: true,
    audioVarianti: [
      {
        codice: "IT",
        lingua: "Italiano",
        bandiera: "🇮🇹",
        fileAudio: "audio/01_torre_quattro_porte.mp3",
        audioDisponibile: true,
        trascrizione:
          "Fermatevi qui. Prima di entrare a Vicopisano, guardate questa torre. Io sono Filippo Brunelleschi. Forse mi conoscete per Firenze, per la cupola di Santa Maria del Fiore, per l’arte e per le proporzioni. Ma qui, a Vicopisano, non vi chiederò di guardare verso il cielo. Vi chiederò di guardare una porta. Questa è la Torre delle Quattro Porte. Oggi tutto intorno sembra quieto: la pietra chiara, il verde, le strade curate, il silenzio di un borgo che accoglie. Ma una torre come questa non nacque per decorare il paesaggio. Nacque per controllarlo.",
      },
      {
        codice: "EN",
        lingua: "Inglese",
        bandiera: "🇬🇧",
        fileAudio: "audio/01_torre_quattro_porte_en.mp3",
        audioDisponibile: true,
        trascrizione:
          "Stop here. Before entering Vicopisano, look at this tower. I am Filippo Brunelleschi. Perhaps you know me for Florence, for the dome of Santa Maria del Fiore, for art and for proportions. But here, in Vicopisano, I will not ask you to look up at the sky. I will ask you to look at a gate.",
      },
      {
        codice: "DE",
        lingua: "Tedesco",
        bandiera: "🇩🇪",
        fileAudio: "audio/01_torre_quattro_porte_de.mp3",
        audioDisponibile: true,
        trascrizione:
          "Bleiben Sie hier stehen. Bevor Sie Vicopisano betreten, betrachten Sie diesen Turm. Ich bin Filippo Brunelleschi. Vielleicht kennen Sie mich wegen Florenz, wegen der Kuppel von Santa Maria del Fiore, wegen der Kunst und der Proportionen. Aber hier, in Vicopisano, werde ich Sie nicht bitten, zum Himmel hinaufzuschauen. Ich werde Sie bitten, ein Tor zu betrachten.",
      },
      {
        codice: "FR",
        lingua: "Francese",
        bandiera: "🇫🇷",
        fileAudio: "audio/01_torre_quattro_porte_fr.mp3",
        audioDisponibile: true,
        trascrizione:
          "Arrêtez-vous ici. Avant d’entrer dans Vicopisano, regardez cette tour. Je suis Filippo Brunelleschi. Peut-être me connaissez-vous pour Florence, pour le dôme de Santa Maria del Fiore, pour l’art et pour les proportions. Mais ici, à Vicopisano, je ne vous demanderai pas de regarder vers le ciel. Je vous demanderai de regarder une porte.",
      },
      {
        codice: "ES",
        lingua: "Spagnolo",
        bandiera: "🇪🇸",
        fileAudio: "audio/01_torre_quattro_porte_es.mp3",
        audioDisponibile: true,
        trascrizione:
          "Deténganse aquí. Antes de entrar en Vicopisano, observen esta torre. Soy Filippo Brunelleschi. Tal vez me conozcan por Florencia, por la cúpula de Santa Maria del Fiore, por el arte y por las proporciones. Pero aquí, en Vicopisano, no les pediré que miren hacia el cielo. Les pediré que miren una puerta.",
      },
      {
        codice: "PT",
        lingua: "Portoghese",
        bandiera: "🇵🇹",
        fileAudio: "audio/01_torre_quattro_porte_pt.mp3",
        audioDisponibile: true,
        trascrizione:
          "Parem aqui. Antes de entrar em Vicopisano, observem esta torre. Eu sou Filippo Brunelleschi. Talvez me conheçam por Florença, pela cúpula de Santa Maria del Fiore, pela arte e pelas proporções. Mas aqui, em Vicopisano, não vou pedir que olhem para o céu. Vou pedir que olhem para uma porta.",
      },
      {
        codice: "RU",
        lingua: "Russo",
        bandiera: "🇷🇺",
        fileAudio: "audio/01_torre_quattro_porte_ru.mp3",
        audioDisponibile: true,
        trascrizione:
          "Остановитесь здесь. Перед тем как войти в Викописано, посмотрите на эту башню. Я — Филиппо Брунеллески. Возможно, вы знаете меня по Флоренции, по куполу Санта-Мария-дель-Фьоре, по искусству и пропорциям. Но здесь, в Викописано, я не попрошу вас смотреть в небо. Я попрошу вас посмотреть на ворота.",
      },
    ],
    durata: "",
    descrizione:
      "Punto di ingresso simbolico al borgo e apertura dell'itinerario. La torre introduce il tema del percorso: Vicopisano come luogo accogliente oggi, ma nato per controllare, difendere e sorvegliare.",
  },
  {
    numero: 2,
    titolo: "Torre e Camminamento del Soccorso",
    latitudine: 43.6998788,
    longitudine: 10.5873698,
    fileAudio: "audio/02_torre_camminamento_soccorso.mp3",
    audioDisponibile: false,
    durata: "",
    descrizione:
      "Tappa dedicata al sistema difensivo collegato alla Rocca e alla possibilità di rifornire o soccorrere la fortezza in caso di assedio.",
  },
  {
    numero: 3,
    titolo: "Palazzo Pretorio",
    latitudine: 43.6992056,
    longitudine: 10.5867826,
    fileAudio: "audio/03_palazzo_pretorio.mp3",
    audioDisponibile: false,
    durata: "",
    descrizione:
      "Luogo del potere civile e amministrativo. Dopo la guerra e la conquista, il controllo del borgo passa anche attraverso istituzioni, giustizia e governo.",
  },
  {
    numero: 4,
    titolo: "Rocca del Brunelleschi",
    latitudine: 43.6994864,
    longitudine: 10.5863793,
    fileAudio: "audio/04_rocca_brunelleschi.mp3",
    audioDisponibile: false,
    durata: "",
    descrizione:
      "Cuore militare dell'itinerario. Qui il racconto si concentra su Brunelleschi, sulla trasformazione del borgo in fortezza e sulla logica della resistenza.",
  },
  {
    numero: 5,
    titolo: "Torri Gemelle",
    latitudine: 43.6999256,
    longitudine: 10.5842514,
    fileAudio: "audio/05_torri_gemelle.mp3",
    audioDisponibile: false,
    durata: "",
    descrizione:
      "Tappa dedicata alla presenza diffusa delle torri nel borgo e al ruolo delle strutture verticali come elementi di prestigio, osservazione e difesa.",
  },
  {
    numero: 6,
    titolo: "Parrocchia di Santa Maria Addolorata e San Giovanni Apostolo",
    latitudine: 43.7002026,
    longitudine: 10.5833924,
    fileAudio: "audio/06_parrocchia_santa_maria_san_giovanni.mp3",
    audioDisponibile: false,
    durata: "",
    descrizione:
      "Tappa di respiro dedicata alla dimensione religiosa e comunitaria di Vicopisano, oltre la sola narrazione militare.",
  },
  {
    numero: 7,
    titolo: "Palazzo Comunale Vicopisano",
    latitudine: 43.6998526,
    longitudine: 10.5844138,
    fileAudio: "audio/07_comune_info_point_vicopisano.mp3",
    audioDisponibile: false,
    durata: "",
    descrizione:
      "Chiusura contemporanea del percorso: dal borgo fortificato al Comune che oggi accoglie, racconta e valorizza la propria storia.",
  },
];

const stopDescriptions = {
  1: {
    IT: "Punto di ingresso simbolico al borgo e apertura dell'itinerario. La torre introduce il tema del percorso: Vicopisano come luogo accogliente oggi, ma nato per controllare, difendere e sorvegliare.",
    EN: "Symbolic gateway to the village and opening stop of the itinerary. The tower introduces the theme of the route: Vicopisano as a welcoming place today, but originally built to control, defend and watch over the territory.",
    DE: "Symbolischer Zugang zum Ort und Auftakt der Route. Der Turm führt in das zentrale Thema ein: Vicopisano ist heute ein gastfreundlicher Ort, wurde jedoch geschaffen, um zu kontrollieren, zu verteidigen und zu überwachen.",
    FR: "Point d’entrée symbolique du bourg et ouverture de l’itinéraire. La tour introduit le thème du parcours : Vicopisano est aujourd’hui un lieu accueillant, mais il est né pour contrôler, défendre et surveiller.",
    ES: "Punto de entrada simbólico al pueblo y apertura del itinerario. La torre introduce el tema del recorrido: Vicopisano es hoy un lugar acogedor, pero nació para controlar, defender y vigilar.",
    PT: "Ponto de entrada simbólico da vila e abertura do itinerário. A torre introduz o tema do percurso: Vicopisano é hoje um lugar acolhedor, mas nasceu para controlar, defender e vigiar.",
    RU: "Simvolicheskiy vhod v poselok i nachalo marshruta. Bashnya vvodit v osnovnuyu temu puti: segodnya Vicopisano vstrechaet gostey, no kogda-to eto mesto bylo sozdano dlya kontrolya, zashchity i nablyudeniya.",
  },
  2: {
    IT: "Tappa dedicata al sistema difensivo collegato alla Rocca e alla possibilità di rifornire o soccorrere la fortezza in caso di assedio.",
    EN: "Stop dedicated to the defensive system linked to the Rocca and to the possibility of supplying or relieving the fortress during a siege.",
    DE: "Station über das Verteidigungssystem der Rocca und die Möglichkeit, die Festung im Fall einer Belagerung zu versorgen oder zu unterstützen.",
    FR: "Etape consacree au systeme defensif lie a la Rocca et a la possibilite de ravitailler ou de secourir la forteresse en cas de siege.",
    ES: "Etapa dedicada al sistema defensivo vinculado a la Rocca y a la posibilidad de abastecer o socorrer la fortaleza en caso de asedio.",
    PT: "Etapa dedicada ao sistema defensivo ligado a Rocca e a possibilidade de abastecer ou socorrer a fortaleza em caso de cerco.",
    RU: "Ostanovka posvyashchena oboronitelnoy sisteme, svyazannoy s Krepostyu, i vozmozhnosti snabzhat ili podderzhivat ee vo vremya osady.",
  },
  3: {
    IT: "Luogo del potere civile e amministrativo. Dopo la guerra e la conquista, il controllo del borgo passa anche attraverso istituzioni, giustizia e governo.",
    EN: "Place of civil and administrative power. After war and conquest, control of the village also passes through institutions, justice and government.",
    DE: "Ort der zivilen und administrativen Macht. Nach Krieg und Eroberung verläuft die Kontrolle über den Ort auch über Institutionen, Justiz und Regierung.",
    FR: "Lieu du pouvoir civil et administratif. Apres la guerre et la conquete, le controle du bourg passe aussi par les institutions, la justice et le gouvernement.",
    ES: "Lugar del poder civil y administrativo. Despues de la guerra y la conquista, el control del pueblo pasa tambien por las instituciones, la justicia y el gobierno.",
    PT: "Lugar do poder civil e administrativo. Depois da guerra e da conquista, o controle da vila passa tambem por instituicoes, justica e governo.",
    RU: "Mesto grazhdanskoy i administrativnoy vlasti. Posle voyny i zavoevaniya kontrol nad poselkom osushchestvlyalsya takzhe cherez instituty, pravosudie i upravlenie.",
  },
  4: {
    IT: "Cuore militare dell'itinerario. Qui il racconto si concentra su Brunelleschi, sulla trasformazione del borgo in fortezza e sulla logica della resistenza.",
    EN: "Military heart of the itinerary. Here the story focuses on Brunelleschi, on the transformation of the village into a fortress, and on the logic of resistance.",
    DE: "Militarisches Herz der Route. Hier konzentriert sich die Erzahlung auf Brunelleschi, auf die Verwandlung des Ortes in eine Festung und auf die Logik des Widerstands.",
    FR: "Cœur militaire de l’itinéraire. Ici, le récit se concentre sur Brunelleschi, sur la transformation du bourg en forteresse et sur la logique de la résistance.",
    ES: "Corazon militar del itinerario. Aqui el relato se centra en Brunelleschi, en la transformacion del pueblo en fortaleza y en la logica de la resistencia.",
    PT: "Coracao militar do itinerario. Aqui a narrativa se concentra em Brunelleschi, na transformacao da vila em fortaleza e na logica da resistencia.",
    RU: "Voennoye serdtse marshruta. Zdes povestvovanie sosredotocheno na Brunelleschi, prevrashchenii poselka v krepost i logike soprotivleniya.",
  },
  5: {
    IT: "Tappa dedicata alla presenza diffusa delle torri nel borgo e al ruolo delle strutture verticali come elementi di prestigio, osservazione e difesa.",
    EN: "Stop dedicated to the widespread presence of towers in the village and to the role of vertical structures as symbols of prestige, observation and defense.",
    DE: "Station über die weit verbreitete Präsenz von Türmen im Ort und über die Rolle vertikaler Bauwerke als Zeichen von Prestige, Beobachtung und Verteidigung.",
    FR: "Etape consacree a la presence diffuse des tours dans le bourg et au role des structures verticales comme elements de prestige, d'observation et de defense.",
    ES: "Etapa dedicada a la presencia extendida de las torres en el pueblo y al papel de las estructuras verticales como elementos de prestigio, observacion y defensa.",
    PT: "Etapa dedicada a presenca difundida das torres na vila e ao papel das estruturas verticais como elementos de prestigio, observacao e defesa.",
    RU: "Ostanovka posvyashchena rasprostranennomu prisutstviyu bashen v poselke i roli vertikalnykh sooruzheniy kak simvolov prestizha, nablyudeniya i zashchity.",
  },
  6: {
    IT: "Tappa di respiro dedicata alla dimensione religiosa e comunitaria di Vicopisano, oltre la sola narrazione militare.",
    EN: "A breathing-space stop dedicated to the religious and community dimension of Vicopisano, beyond the purely military narrative.",
    DE: "Eine ruhigere Station über die religiöse und gemeinschaftliche Dimension von Vicopisano, jenseits der rein militärischen Erzählung.",
    FR: "Étape de respiration consacrée à la dimension religieuse et communautaire de Vicopisano, au-delà du seul récit militaire.",
    ES: "Etapa de respiro dedicada a la dimensión religiosa y comunitaria de Vicopisano, más allá del relato militar.",
    PT: "Etapa de respiro dedicada à dimensão religiosa e comunitária de Vicopisano, para além da narrativa militar.",
    RU: "Spokoynaya ostanovka, posvyashchennaya religioznomu i obshchinnomu izmereniyu Vicopisano, za predelami tolko voennogo rasskaza.",
  },
  7: {
    IT: "Chiusura contemporanea del percorso: dal borgo fortificato al Comune che oggi accoglie, racconta e valorizza la propria storia.",
    EN: "Contemporary conclusion of the route: from the fortified village to the Municipality that today welcomes visitors, tells its story and enhances its heritage.",
    DE: "Zeitgenossischer Abschluss der Route: vom befestigten Ort zur heutigen Gemeinde, die ihre Geschichte empfängt, erzahlt und aufwertet.",
    FR: "Conclusion contemporaine du parcours : du bourg fortifie a la Commune qui aujourd'hui accueille, raconte et valorise son histoire.",
    ES: "Cierre contemporaneo del recorrido: del pueblo fortificado al Ayuntamiento que hoy acoge, cuenta y pone en valor su historia.",
    PT: "Encerramento contemporaneo do percurso: da vila fortificada ao Municipio que hoje acolhe, conta e valoriza a propria historia.",
    RU: "Sovremennoe zavershenie marshruta: ot ukreplennogo poselka k kommunalitetu, kotoryy segodnya prinimaet gostey, rasskazyvaet i tsenit svoyu istoriyu.",
  },
};

const routeGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Percorso Vicopisano",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [10.5863858, 43.700429],
          [10.586608, 43.700366],
          [10.586932, 43.700222],
          [10.587198, 43.700041],
          [10.5873698, 43.6998788],
          [10.587321, 43.699765],
          [10.587262, 43.699661],
          [10.587182, 43.69955],
          [10.587082, 43.699437],
          [10.586963, 43.699335],
          [10.586845, 43.699257],
          [10.5867826, 43.6992056],
          [10.586692, 43.699235],
          [10.586598, 43.699286],
          [10.586503, 43.699344],
          [10.586432, 43.699401],
          [10.58639, 43.699421],
          [10.5863793, 43.6994864],
          [10.586253, 43.699532],
          [10.586098, 43.699584],
          [10.585905, 43.699637],
          [10.585706, 43.699695],
          [10.585484, 43.69975],
          [10.585214, 43.699805],
          [10.584962, 43.699853],
          [10.584741, 43.699886],
          [10.5842514, 43.6999256],
          [10.584134, 43.699954],
          [10.583985, 43.699999],
          [10.58382, 43.700043],
          [10.583677, 43.70008],
          [10.583537, 43.700132],
          [10.5833924, 43.7002026],
          [10.583517, 43.70015],
          [10.58366, 43.700091],
          [10.583817, 43.700041],
          [10.583981, 43.699998],
          [10.584145, 43.69995],
          [10.584275, 43.69991],
          [10.5844138, 43.6998526],
        ],
      },
    },
  ],
};

const map = L.map("map", {
  scrollWheelZoom: true,
  attributionControl: false,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

const openStreetMapInfoControl = L.control({ position: "bottomright" });

openStreetMapInfoControl.onAdd = () => {
  const container = L.DomUtil.create("div", "osm-info-control");
  container.innerHTML = `
    <details class="osm-info-details">
      <summary class="osm-info-summary" aria-label="Informazioni su OpenStreetMap">i</summary>
      <div class="osm-info-panel">
        <p class="osm-info-copy">
          Mappa basata su
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
            OpenStreetMap contributors
          </a>
        </p>
      </div>
    </details>
  `;

  L.DomEvent.disableClickPropagation(container);
  L.DomEvent.disableScrollPropagation(container);
  return container;
};

openStreetMapInfoControl.addTo(map);

const stopsList = document.getElementById("stops-list");
const detailNumber = document.getElementById("detail-number");
const detailTitle = document.getElementById("detail-title");
const detailStatus = document.getElementById("detail-status");
const detailDuration = document.getElementById("detail-duration");
const detailCopyBox = document.getElementById("detail-copy-box");
const detailCopyTitle = document.getElementById("detail-copy-title");
const detailDescription = document.getElementById("detail-description");
const audioWrapper = document.getElementById("audio-wrapper");
const detailArtworkImage = document.getElementById("detail-artwork-image");
const eyebrowText = document.getElementById("eyebrow-text");
const introText = document.getElementById("intro-text");
const instructionsTitle = document.getElementById("instructions-title");
const instructionsText = document.getElementById("instructions-text");
const stopsTitle = document.getElementById("stops-title");
const stopsSubtitle = document.getElementById("stops-subtitle");
const platformsEyebrow = document.getElementById("platforms-eyebrow");
const shareTitle = document.getElementById("share-title");
const shareFacebook = document.getElementById("share-facebook");
const shareX = document.getElementById("share-x");
const shareLinkedin = document.getElementById("share-linkedin");
const shareWhatsapp = document.getElementById("share-whatsapp");
const shareMail = document.getElementById("share-mail");
const announcementTrack = document.getElementById("announcement-track");
const brandNameEl = document.getElementById("brand-name");
const brandTagEl = document.getElementById("brand-tag");
const landingTitle = document.getElementById("landing-title");
const mapStageNote = document.getElementById("map-stage-note");
const locateMeButton = document.getElementById("locate-me-button");
const locateMeStatus = document.getElementById("locate-me-status");
const mapFullscreenButton = document.getElementById("map-fullscreen-button");
const mapStageFrame = document.querySelector(".map-stage-frame");
const globalLanguageChips = document.getElementById("global-language-chips");
const playerLanguageSelector = document.getElementById("player-language-selector");
const playerLanguageLabel = document.getElementById("player-language-label");
const playerLanguageChips = document.getElementById("player-language-chips");
const miniPlayer = document.getElementById("mini-player");
const miniPlayerOpen = document.getElementById("mini-player-open");
const miniPlayerToggle = document.getElementById("mini-player-toggle");
const miniPlayerPrev = document.getElementById("mini-player-prev");
const miniPlayerNext = document.getElementById("mini-player-next");
const miniPlayerRepeat = document.getElementById("mini-player-repeat");
const miniPlayerTitle = document.getElementById("mini-player-title");
const miniPlayerSubtitle = document.getElementById("mini-player-subtitle");
const miniPlayerArtwork = document.getElementById("mini-player-artwork");
const miniPlayerProgressBar = document.getElementById("mini-player-progress-bar");
const miniPlayerCurrentTime = document.getElementById("mini-player-current-time");
const miniPlayerDurationTotal = document.getElementById("mini-player-duration-total");
const miniPlayerVolume = document.getElementById("mini-player-volume");
const playerOverlay = document.getElementById("player-overlay");
const playerBackdrop = document.getElementById("player-backdrop");
const playerCloseButton = document.getElementById("player-close-button");
const playerPrevButton = document.getElementById("player-prev-button");
const playerPlayButton = document.getElementById("player-play-button");
const playerNextButton = document.getElementById("player-next-button");
const playerRepeatButton = document.getElementById("player-repeat-button");
const playerCurrentTime = document.getElementById("player-current-time");
const playerDurationTotal = document.getElementById("player-duration-total");
const playerProgressInput = document.getElementById("player-progress-input");
const playerVolume = document.getElementById("player-volume");

let currentAudio = null;
let activeStopNumber = null;
let currentLanguage = "IT";
let userLocationMarker = null;
let userLocationAccuracyCircle = null;
let overlayOpen = false;
let currentSelectedOption = null;
let repeatEnabled = false;
let currentVolume = 0.85;
let isSeekingFromOverlay = false;
let lastPrevInteractionAt = 0;

const markersByStop = new Map();
const buttonsByStop = new Map();
const selectedLanguageByStop = new Map();

const siteLanguages = ["IT", "EN", "DE", "FR", "ES", "PT", "RU"];
const WHITE_ARTWORK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><rect width="1200" height="1200" fill="#ffffff"/><rect x="24" y="24" width="1152" height="1152" rx="48" fill="none" stroke="#edf0f2" stroke-width="18"/></svg>'
  );
const STOP_ARTWORKS = {
  1: "tappa_1_torre_delle_quattro_porte.jpg",
  2: "tappa_2_torre_e_camminamento_del_soccorso.jpg",
  3: "tappa_3_palazzo_pretorio.webp",
  4: "tappa_4_rocca_del_brunelleschi.jpeg",
  5: "tappa_5_torri_gemelle.jpg",
  6: "tappa_6_parrocchia_di_santa_maria_addolorata_e_san_giovanni_apostolo.jpg",
  7: "tappa_7_palazzo_comunale.jpg",
};

const stopTitles = {
  1: {
    IT: "Torre delle Quattro Porte",
    EN: "Tower of the Four Gates",
    DE: "Turm der Vier Tore",
    FR: "Tour des Quatre Portes",
    ES: "Torre de las Cuatro Puertas",
    PT: "Torre das Quatro Portas",
    RU: "Bashnya chetyrekh vorot",
  },
  2: {
    IT: "Torre e Camminamento del Soccorso",
    EN: "Soccorso Tower and Walkway",
    DE: "Turm und Wehrgang del Soccorso",
    FR: "Tour et chemin de ronde del Soccorso",
    ES: "Torre y camino de ronda del Soccorso",
    PT: "Torre e caminho de ronda del Soccorso",
    RU: "Bashnya i boevoy khod del Soccorso",
  },
  3: {
    IT: "Palazzo Pretorio",
    EN: "Praetorian Palace",
    DE: "Praetorischer Palast",
    FR: "Palais prétorien",
    ES: "Palacio Pretorio",
    PT: "Palácio Pretório",
    RU: "Pretorskiy dvorets",
  },
  4: {
    IT: "Rocca del Brunelleschi",
    EN: "Brunelleschi Fortress",
    DE: "Brunelleschi-Festung",
    FR: "Forteresse de Brunelleschi",
    ES: "Fortaleza de Brunelleschi",
    PT: "Fortaleza de Brunelleschi",
    RU: "Krepost Brunelleski",
  },
  5: {
    IT: "Torri Gemelle",
    EN: "Twin Towers",
    DE: "Zwillingstürme",
    FR: "Tours jumelles",
    ES: "Torres Gemelas",
    PT: "Torres Gémeas",
    RU: "Bashni-bliznetsy",
  },
  6: {
    IT: "Parrocchia di Santa Maria Addolorata e San Giovanni Apostolo",
    EN: "Parish of Santa Maria Addolorata and Saint John the Apostle",
    DE: "Pfarrkirche Santa Maria Addolorata und Sankt Johannes Apostel",
    FR: "Paroisse de Santa Maria Addolorata et Saint Jean Apôtre",
    ES: "Parroquia de Santa Maria Addolorata y San Juan Apóstol",
    PT: "Paróquia de Santa Maria Addolorata e São João Apóstolo",
    RU: "Prikhod Santa Mariya Addolorata i Svyatogo Ioanna Apostola",
  },
  7: {
    IT: "Palazzo Comunale Vicopisano",
    EN: "Vicopisano Town Hall",
    DE: "Rathaus von Vicopisano",
    FR: "Hôtel de ville de Vicopisano",
    ES: "Ayuntamiento de Vicopisano",
    PT: "Prefeitura de Vicopisano",
    RU: "Munitsipalitet Vikopizano",
  },
};

const uiStrings = {
  IT: {
    prototype: "",
    introLead: "Sono Filippo Brunelleschi.",
    intro:
      "Un tempo ho osservato queste mura per immaginare difese, passaggi e punti di vista. Ora ti accompagno tra le storie del borgo, tappa dopo tappa. Seguimi tra torri, camminamenti e scorci del borgo: ogni tappa apre una voce, una storia, un frammento di Vicopisano.",
    instructionsTitle: "Istruzioni",
    instructionsText:
      "La mappa mostra l’intero percorso, con le tappe da 1 a 7. Puoi selezionare una tappa dalla lista oppure cliccare direttamente sulla mappa: il sito evidenzierà il punto scelto, centrerà la visuale e aprirà i contenuti dedicati.",
    routeTitle: "Tappe del percorso",
    routeSubtitle: "7 punti di ascolto lungo il borgo.",
    platformsEyebrow: 'Trovi "il travel podcasting di Vicopisano" anche su:',
    shareTitle: "Condividi con i tuoi amici",
    locateMe: "Trova la mia posizione",
    locatingMe: "Sto cercando la tua posizione...",
    locationFound: "Posizione trovata sulla mappa.",
    geolocationUnsupported: "Geolocalizzazione non supportata da questo browser.",
    geolocationDenied: "Permesso posizione negato.",
    geolocationUnavailable: "Posizione non disponibile.",
    geolocationTimeout: "Tempo scaduto durante la ricerca della posizione.",
    geolocationHttpsHint: "Da smartphone serve HTTPS per usare bene la geolocalizzazione.",
    detailEmptyTitle: "Seleziona una tappa",
    detailEmptyText:
      "Apri una tappa dalla lista o dalla mappa per vedere titolo, descrizione e player audio.",
    durationUnavailable: "Durata non disponibile",
    audioAvailable: "Audio disponibile",
    audioUnavailable: "Audio non ancora disponibile",
    audioAvailableInLanguages: (count) => `Audio disponibile in ${count} lingue`,
    listAudioAvailableInLanguages: (count) => `${count} lingue disponibili`,
    languageSelectorTitle: "Lingua disponibile per la Tappa 1",
    descriptiveText: "Testo descrittivo",
    transcriptTitle: "Trascrizione",
    playerPrevious: "Torna alla tappa precedente",
    playerPlay: "Riproduci audio",
    playerPause: "Metti in pausa audio",
    playerNext: "Vai alla tappa successiva",
    playerRepeat: "Ripeti traccia",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Tocca i marker o usa le tappe sotto per aprire il player audio del percorso.",
    highlightTitle: "Durante l'ascolto",
    highlightText: "La mappa resta al centro dell’esperienza, mentre il player fisso in basso ti accompagna durante l’ascolto senza interrompere la navigazione. Così puoi continuare a esplorare il percorso in modo semplice e intuitivo.",
    languageNames: {
      IT: "Italiano",
      EN: "Inglese",
      DE: "Tedesco",
      FR: "Francese",
      ES: "Spagnolo",
      PT: "Portoghese",
      RU: "Russo",
    },
  },
  EN: {
    prototype: "",
    introLead: "I am Filippo Brunelleschi.",
    intro:
      "Once I studied these walls to imagine defenses, passages, and viewpoints. Now I guide you through the village's stories, stop by stop. Follow me through towers, walkways, and glimpses of the borgo: each stop opens a voice, a story, a fragment of Vicopisano.",
    instructionsTitle: "Instructions",
    instructionsText:
      "The map shows the full route, with stops from 1 to 7. You can select a stop from the list or click directly on the map: the site will highlight the chosen point, center the view, and open the dedicated content.",
    routeTitle: "Route Stops",
    routeSubtitle: "7 listening points in the village.",
    platformsEyebrow: 'You can also find "Travel Podcasting Vicopisano" on:',
    shareTitle: "Share with your friends",
    locateMe: "Find my location",
    locatingMe: "Looking for your location...",
    locationFound: "Location found on the map.",
    geolocationUnsupported: "Geolocation is not supported by this browser.",
    geolocationDenied: "Location permission denied.",
    geolocationUnavailable: "Location unavailable.",
    geolocationTimeout: "Timed out while searching for your location.",
    geolocationHttpsHint: "On smartphones, HTTPS is needed for reliable geolocation.",
    detailEmptyTitle: "Select a stop",
    detailEmptyText:
      "Open a stop from the list or the map to view the title, description and audio player.",
    durationUnavailable: "Duration not available",
    audioAvailable: "Audio available",
    audioUnavailable: "Audio not yet available",
    audioAvailableInLanguages: (count) => `Audio available in ${count} languages`,
    listAudioAvailableInLanguages: (count) => `${count} languages available`,
    languageSelectorTitle: "Language available for Stop 1",
    descriptiveText: "Descriptive text",
    transcriptTitle: "Transcript",
    playerPrevious: "Go to previous stop",
    playerPlay: "Play audio",
    playerPause: "Pause audio",
    playerNext: "Go to next stop",
    playerRepeat: "Repeat track",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Touch the markers or use the stops below to open the route's audio player.",
    highlightTitle: "During listening",
    highlightText: "The map stays at the center of the experience, while the fixed player at the bottom accompanies you during listening without interrupting navigation. That way you can keep exploring the route in a simple, intuitive way.",
    languageNames: {
      IT: "Italian",
      EN: "English",
      DE: "German",
      FR: "French",
      ES: "Spanish",
      PT: "Portuguese",
      RU: "Russian",
    },
  },
  DE: {
    prototype: "",
    introLead: "Ich bin Filippo Brunelleschi.",
    intro:
      "Einst betrachtete ich diese Mauern, um Verteidigungen, Übergänge und Blickpunkte zu erahnen. Jetzt begleite ich Sie Schritt für Schritt durch die Geschichten des Ortes. Folgen Sie mir durch Türme, Wehrgänge und Ausblicke: Jede Station öffnet eine Stimme, eine Geschichte, ein Stück Vicopisano.",
    instructionsTitle: "Anleitung",
    instructionsText:
      "Die Karte zeigt die gesamte Route mit den Stationen 1 bis 7. Sie können eine Station aus der Liste wählen oder direkt auf die Karte klicken: Die Website hebt den gewählten Punkt hervor, zentriert die Ansicht und öffnet die zugehörigen Inhalte.",
    routeTitle: "Stationen der Route",
    routeSubtitle: "7 Hörstationen im Ort.",
    platformsEyebrow: 'Du findest "Travel Podcasting Vicopisano" auch auf:',
    shareTitle: "Teile es mit deinen Freunden",
    locateMe: "Meinen Standort finden",
    locatingMe: "Standort wird gesucht...",
    locationFound: "Standort auf der Karte gefunden.",
    geolocationUnsupported: "Geolokalisierung wird von diesem Browser nicht unterstützt.",
    geolocationDenied: "Standortfreigabe verweigert.",
    geolocationUnavailable: "Standort nicht verfügbar.",
    geolocationTimeout: "Zeitüberschreitung bei der Standortsuche.",
    geolocationHttpsHint: "Auf dem Smartphone ist HTTPS für eine zuverlässige Geolokalisierung nötig.",
    detailEmptyTitle: "Wählen Sie eine Station",
    detailEmptyText:
      "Öffnen Sie eine Station aus der Liste oder der Karte, um Titel, Beschreibung und Audioplayer zu sehen.",
    durationUnavailable: "Dauer nicht verfügbar",
    audioAvailable: "Audio verfügbar",
    audioUnavailable: "Audio noch nicht verfügbar",
    audioAvailableInLanguages: (count) => `Audio in ${count} Sprachen verfügbar`,
    listAudioAvailableInLanguages: (count) => `${count} Sprachen verfügbar`,
    languageSelectorTitle: "Verfügbare Sprache für Station 1",
    descriptiveText: "Beschreibungstext",
    transcriptTitle: "Transkription",
    playerPrevious: "Zur vorherigen Station",
    playerPlay: "Audio abspielen",
    playerPause: "Audio pausieren",
    playerNext: "Zur nächsten Station",
    playerRepeat: "Titel wiederholen",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Tippen Sie auf die Marker oder nutzen Sie die Stationen unten, um den Audioplayer der Route zu öffnen.",
    highlightTitle: "Während des Hörens",
    highlightText: "Die Karte bleibt das Zentrum des Erlebnisses, während der feste Player unten Sie beim Hören begleitet, ohne die Navigation zu unterbrechen. So können Sie die Route einfach und intuitiv weiter erkunden.",
    languageNames: {
      IT: "Italienisch",
      EN: "Englisch",
      DE: "Deutsch",
      FR: "Französisch",
      ES: "Spanisch",
      PT: "Portugiesisch",
      RU: "Russisch",
    },
  },
  FR: {
    prototype: "",
    introLead: "Je suis Filippo Brunelleschi.",
    intro:
      "Autrefois, j’observais ces murailles pour imaginer défenses, passages et points de vue. Aujourd’hui, je vous accompagne à travers les histoires du bourg, étape après étape. Suivez-moi entre tours, cheminements et aperçus du village : chaque étape ouvre une voix, une histoire, un fragment de Vicopisano.",
    instructionsTitle: "Instructions",
    instructionsText:
      "La carte montre l’itinéraire complet de 1 à 7. Lorsque vous choisissez une étape, le site la met en évidence, centre la carte sur le point correspondant et ouvre les détails.",
    routeTitle: "Étapes du parcours",
    routeSubtitle: "7 points d’écoute dans le bourg.",
    platformsEyebrow: 'Retrouvez "Travel Podcasting Vicopisano" aussi sur :',
    shareTitle: "Partagez avec vos amis",
    locateMe: "Trouver ma position",
    locatingMe: "Recherche de votre position...",
    locationFound: "Position trouvée sur la carte.",
    geolocationUnsupported: "La géolocalisation n’est pas prise en charge par ce navigateur.",
    geolocationDenied: "Autorisation de localisation refusée.",
    geolocationUnavailable: "Position non disponible.",
    geolocationTimeout: "Délai dépassé pendant la recherche de la position.",
    geolocationHttpsHint: "Sur smartphone, HTTPS ést nécessaire pour une géolocalisation fiable.",
    detailEmptyTitle: "Sélectionnez une étape",
    detailEmptyText:
      "Ouvrez une étape depuis la liste ou la carte pour voir le titre, la description et le lecteur audio.",
    durationUnavailable: "Durée non disponible",
    audioAvailable: "Audio disponible",
    audioUnavailable: "Audio pas encore disponible",
    audioAvailableInLanguages: (count) => `Audio disponible en ${count} langues`,
    listAudioAvailableInLanguages: (count) => `${count} langues disponibles`,
    languageSelectorTitle: "Langue disponible pour l’étape 1",
    descriptiveText: "Texte descriptif",
    transcriptTitle: "Transcription",
    playerPrevious: "Revenir à l’étape précédente",
    playerPlay: "Lire l’audio",
    playerPause: "Mettre l’audio en pause",
    playerNext: "Aller à l’étape suivante",
    playerRepeat: "Répéter la piste",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Touchez les marqueurs ou utilisez les étapes ci-dessous pour ouvrir le lecteur audio du parcours.",
    highlightTitle: "Expérience plein écran",
    highlightText: "La carte reste le cœur de l'expérience, tandis que le lecteur fixe en bas vous accompagne pendant l'écoute sans encombrer l'espace de navigation.",
    languageNames: {
      IT: "Italien",
      EN: "Anglais",
      DE: "Allemand",
      FR: "Français",
      ES: "Espagnol",
      PT: "Portugais",
      RU: "Russe",
    },
  },
  ES: {
    prototype: "",
    introLead: "Soy Filippo Brunelleschi.",
    intro:
      "Alguna vez observé estas murallas para imaginar defensas, pasajes y puntos de vista. Ahora te acompaño por las historias del pueblo, etapa tras etapa. Sígueme entre torres, pasarelas y rincones del borgo: cada etapa abre una voz, una historia, un fragmento de Vicopisano.",
    instructionsTitle: "Instrucciones",
    instructionsText:
      "El mapa muestra el recorrido completo del 1 al 7. Cuando eliges una etapa, el sitio la resalta, centra el mapa en el punto correspondiente y abre los detalles.",
    routeTitle: "Etapas del recorrido",
    routeSubtitle: "7 puntos de escucha en el pueblo.",
    platformsEyebrow: 'Tambien encuentras "Travel Podcasting Vicopisano" en:',
    shareTitle: "Compártelo con tus amigos",
    locateMe: "Encontrar mi posición",
    locatingMe: "Buscando tu posición...",
    locationFound: "Posición encontrada en el mapa.",
    geolocationUnsupported: "La geolocalización no es compatible con este navegador.",
    geolocationDenied: "Permiso de ubicación denegado.",
    geolocationUnavailable: "Posición no disponible.",
    geolocationTimeout: "Se agotó el tiempo al buscar la posición.",
    geolocationHttpsHint: "En smartphone hace falta HTTPS para una geolocalización fiable.",
    detailEmptyTitle: "Selecciona una etapa",
    detailEmptyText:
      "Abre una etapa desde la lista o el mapa para ver el título, la descripción y el reproductor de audio.",
    durationUnavailable: "Duración no disponible",
    audioAvailable: "Audio disponible",
    audioUnavailable: "Audio aún no disponible",
    audioAvailableInLanguages: (count) => `Audio disponible en ${count} idiomas`,
    listAudioAvailableInLanguages: (count) => `${count} idiomas disponibles`,
    languageSelectorTitle: "Idioma disponible para la Etapa 1",
    descriptiveText: "Texto descriptivo",
    transcriptTitle: "Transcripción",
    playerPrevious: "Volver a la etapa anterior",
    playerPlay: "Reproducir audio",
    playerPause: "Pausar audio",
    playerNext: "Ir a la etapa siguiente",
    playerRepeat: "Repetir pista",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Toca los marcadores o usa las etapas a continuación para abrir el reproductor de audio de la ruta.",
    highlightTitle: "Experiencia a pantalla completa",
    highlightText: "El mapa sigue siendo el corazón de la experiencia, mientras que el reproductor fijo en la parte inferior te acompaña durante la escucha sin restar espacio a la navegación.",
    languageNames: {
      IT: "Italiano",
      EN: "Inglés",
      DE: "Alemán",
      FR: "Francés",
      ES: "Español",
      PT: "Portugués",
      RU: "Ruso",
    },
  },
  PT: {
    prototype: "",
    introLead: "Sou Filippo Brunelleschi.",
    intro:
      "Em tempos observei estas muralhas para imaginar defesas, passagens e pontos de vista. Agora acompanho-o pelas histórias da vila, etapa após etapa. Siga-me entre torres, passadiços e recantos do borgo: cada etapa abre uma voz, uma história, um fragmento de Vicopisano.",
    instructionsTitle: "Instruções",
    instructionsText:
      "O mapa mostra o percurso completo de 1 a 7. Quando você escolhe uma etapa, o site a destaca, centraliza o mapa no ponto correspondente e abre os detalhes.",
    routeTitle: "Etapas do percurso",
    routeSubtitle: "7 pontos de escuta na vila.",
    platformsEyebrow: 'Tambem encontras "Travel Podcasting Vicopisano" em:',
    shareTitle: "Partilha com os teus amigos",
    locateMe: "Encontrar minha localização",
    locatingMe: "Buscando sua localização...",
    locationFound: "Localização encontrada no mapa.",
    geolocationUnsupported: "Geolocalização não suportada por este navegador.",
    geolocationDenied: "Permissão de localização negada.",
    geolocationUnavailable: "Localização indisponível.",
    geolocationTimeout: "Tempo esgotado ao procurar a localização.",
    geolocationHttpsHint: "No smartphone, HTTPS é necessário para geolocalização confiável.",
    detailEmptyTitle: "Selecione uma etapa",
    detailEmptyText:
      "Abra uma etapa na lista ou no mapa para ver o título, a descrição e o player de áudio.",
    durationUnavailable: "Duração não disponível",
    audioAvailable: "Áudio disponível",
    audioUnavailable: "Áudio ainda não disponível",
    audioAvailableInLanguages: (count) => `Audio disponivel em ${count} idiomas`,
    listAudioAvailableInLanguages: (count) => `${count} idiomas disponiveis`,
    languageSelectorTitle: "Idioma disponivel para a Etapa 1",
    descriptiveText: "Texto descritivo",
    transcriptTitle: "Transcrição",
    playerPrevious: "Voltar para a etapa anterior",
    playerPlay: "Reproduzir áudio",
    playerPause: "Pausar áudio",
    playerNext: "Ir para a próxima etapa",
    playerRepeat: "Repetir faixa",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Toque nos marcadores ou use as etapas abaixo para abrir o reprodutor de áudio do percurso.",
    highlightTitle: "Experiência em ecrã inteiro",
    highlightText: "O mapa continua a ser o coração da experiência, enquanto o leitor fixo na parte inferior acompanha-o durante a audição sem ocupar espaço de navegação.",
    languageNames: {
      IT: "Italiano",
      EN: "Inglês",
      DE: "Alemão",
      FR: "Francês",
      ES: "Espanhol",
      PT: "Português",
      RU: "Russo",
    },
  },
  RU: {
    prototype: "",
    introLead: "Ya Filippo Brunelleschi.",
    intro:
      "Когда-то я изучал эти стены, чтобы представить оборону, проходы и точки обзора. Теперь я веду вас по историям поселка, остановка за остановкой. Следуйте за мной через башни, переходы и виды борго: каждая остановка открывает голос, историю, частицу Vicopisano.",
    instructionsTitle: "Instruktsii",
    instructionsText:
      "Karta pokazyvaet polnyy marshrut ot 1 do 7. Kogda vy vybiraete ostanovku, sayt vydelyaet ee, tsentriruet kartu na nuzhnoy tochke i otkryvaet podrobnosti.",
    routeTitle: "Ostanovki marshruta",
    routeSubtitle: "7 tochek dlya proslushivaniya v poselke.",
    platformsEyebrow: 'Ty takzhe naydesh "Travel Podcasting Vicopisano" na:',
    shareTitle: "Podelis s druzyami",
    locateMe: "Nayti moe mesto",
    locatingMe: "Poisk vashego mestopolozheniya...",
    locationFound: "Mestopolozhenie naydeno na karte.",
    geolocationUnsupported: "Geolokatsiya ne podderzhivayetsya etim brauzerom.",
    geolocationDenied: "Dostup к mestopolozheniyu zapreshchen.",
    geolocationUnavailable: "Mestopolozhenie nedostupno.",
    geolocationTimeout: "Vyshlo vremya poiska mestopolozheniya.",
    geolocationHttpsHint: "Na smartfone dlya nadezhnoy geolokatsii nuzhen HTTPS.",
    detailEmptyTitle: "Vyberite ostanovku",
    detailEmptyText:
      "Otkroyte ostanovku iz spiska ili na karte, chtoby uvidet nazvanie, opisanie i audiopleer.",
    durationUnavailable: "Dlitelnost nedostupna",
    audioAvailable: "Audio dostupno",
    audioUnavailable: "Audio eshche nedostupno",
    audioAvailableInLanguages: (count) => `Audio dostupno na ${count} yazykakh`,
    listAudioAvailableInLanguages: (count) => `${count} yazykov dostupno`,
    languageSelectorTitle: "Dostupnyy yazyk dlya ostanovki 1",
    descriptiveText: "Opisatelnyy tekst",
    transcriptTitle: "Transkriptsiya",
    playerPrevious: "Vernutsya k predydushchey ostanovke",
    playerPlay: "Vosproizvesti audio",
    playerPause: "Postavit audio na pauzu",
    playerNext: "Pereyti k sleduyushchey ostanovke",
    playerRepeat: "Povtoryat trek",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Nazhmite na markery ili ispolzuyte shagi nizhe, chtoby otkryt audiopleer marshruta.",
    highlightTitle: "Polnoekrannyy rezhim",
    highlightText: "Karta ostaetsya serdtsem prilozheniya, a fiksirovannyy pleer vnimu soprovozhdaet vas vo vremya proslushivaniya, ne zanimaya mesto dlya navigatsii.",
    languageNames: {
      IT: "Italyanskiy",
      EN: "Angliyskiy",
      DE: "Nemetskiy",
      FR: "Frantsuzskiy",
      ES: "Ispanskiy",
      PT: "Portugalskiy",
      RU: "Russkiy",
    },
  },
};

function getUiStrings(languageCode = "IT") {
  return uiStrings[languageCode] || uiStrings.IT;
}

function getStopTitle(tappa, languageCode = currentLanguage) {
  const titles = stopTitles[tappa.numero];
  if (!titles) {
    return tappa.titolo;
  }

  if (languageCode === "IT") {
    return titles.IT || tappa.titolo;
  }

  const translatedTitle = titles[languageCode] || titles.IT || tappa.titolo;
  return `${titles.IT || tappa.titolo} / ${translatedTitle}`;
}

function setCurrentLanguage(languageCode) {
  currentLanguage = languageCode;

  tappe.forEach((tappa) => {
    const option = getAudioOptions(tappa).find((audioOption) => audioOption.codice === languageCode);
    if (option) {
      selectedLanguageByStop.set(tappa.numero, languageCode);
    }
  });

  stopCurrentAudio();
  renderStaticTexts();
  renderGlobalLanguageSelector();
  renderStopsList();
  refreshMarkerPopups();

  if (activeStopNumber !== null) {
    const activeStop = tappe.find((tappa) => tappa.numero === activeStopNumber);
    if (activeStop) {
      focusStop(activeStop, { skipFly: true, preservePlayback: true });
    }
  }
}

function setLocateStatus(message = "") {
  locateMeStatus.textContent = message;
}

function setUserLocation(latitude, longitude, accuracy) {
  const latLng = L.latLng(latitude, longitude);

  if (!userLocationMarker) {
    userLocationMarker = L.marker(latLng, {
      icon: L.divIcon({
        className: "",
        html: '<div class="user-location-marker"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      }),
      title: "La tua posizione",
    }).addTo(map);
  } else {
    userLocationMarker.setLatLng(latLng);
  }

  if (!userLocationAccuracyCircle) {
    userLocationAccuracyCircle = L.circle(latLng, {
      radius: accuracy,
      color: "#1f9bd8",
      weight: 1.5,
      opacity: 0.45,
      fillColor: "#1f9bd8",
      fillOpacity: 0.12,
    }).addTo(map);
  } else {
    userLocationAccuracyCircle.setLatLng(latLng);
    userLocationAccuracyCircle.setRadius(accuracy);
  }

  const selectedStop =
    activeStopNumber !== null ? tappe.find((tappa) => tappa.numero === activeStopNumber) : null;

  if (selectedStop) {
    map.fitBounds(
      L.latLngBounds([
        [latitude, longitude],
        [selectedStop.latitudine, selectedStop.longitudine],
      ]),
      { padding: [50, 50] }
    );
    return;
  }

  map.flyTo([latitude, longitude], Math.max(map.getZoom(), 16), {
    animate: true,
    duration: 0.8,
  });
}

function locateUser() {
  const strings = getUiStrings(currentLanguage);
  const secureContext =
    window.isSecureContext ||
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  if (!("geolocation" in navigator)) {
    setLocateStatus(strings.geolocationUnsupported);
    return;
  }

  setLocateStatus(strings.locatingMe);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserLocation(
        position.coords.latitude,
        position.coords.longitude,
        position.coords.accuracy || 25
      );

      setLocateStatus(
        secureContext
          ? strings.locationFound
          : `${strings.locationFound} ${strings.geolocationHttpsHint}`
      );
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        setLocateStatus(
          secureContext
            ? strings.geolocationDenied
            : `${strings.geolocationDenied} ${strings.geolocationHttpsHint}`
        );
        return;
      }

      if (error.code === error.TIMEOUT) {
        setLocateStatus(strings.geolocationTimeout);
        return;
      }

      setLocateStatus(strings.geolocationUnavailable);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 30000,
    }
  );
}

function bindLocateButton() {
  locateMeButton.addEventListener("click", locateUser);
}

function isMapFullscreenActive() {
  return mapStageFrame?.classList.contains("is-expanded");
}

function updateMapFullscreenButton() {
  if (!mapFullscreenButton) {
    return;
  }

  const isFullscreen = isMapFullscreenActive();
  mapFullscreenButton.setAttribute(
    "aria-label",
    isFullscreen ? "Chiudi mappa a tutto schermo" : "Apri la mappa a tutto schermo"
  );
  mapFullscreenButton.title = isFullscreen ? "Chiudi mappa a tutto schermo" : "Apri la mappa a tutto schermo";
}

async function toggleMapFullscreen() {
  if (!mapStageFrame) {
    return;
  }

  mapStageFrame.classList.toggle("is-expanded");
  updateMapFullscreenButton();
  setTimeout(() => map.invalidateSize(), 150);
}

function bindMapFullscreenButton() {
  if (!mapFullscreenButton || !mapStageFrame) {
    return;
  }

  updateMapFullscreenButton();
  mapFullscreenButton.addEventListener("click", toggleMapFullscreen);
}

function getLanguageDisplayName(languageCode, uiLanguage = currentLanguage) {
  const strings = getUiStrings(uiLanguage);
  return strings.languageNames?.[languageCode] || languageCode;
}

function buildLanguageChips(container, { languageTitle, includeLabel = false } = {}) {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const strings = getUiStrings(currentLanguage);

  if (includeLabel && playerLanguageLabel) {
    playerLanguageLabel.textContent =
      languageTitle || strings.languageSelectorTitle || "Lingua disponibile";
  }

  siteLanguages.forEach((languageCode) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "language-chip";
    chip.textContent =
      getAudioOptions(tappe[0]).find((option) => option.codice === languageCode)?.bandiera ||
      languageCode;
    chip.classList.toggle("is-active", languageCode === currentLanguage);
    chip.setAttribute("aria-pressed", languageCode === currentLanguage ? "true" : "false");
    chip.setAttribute("aria-label", getLanguageDisplayName(languageCode, currentLanguage));
    chip.title = getLanguageDisplayName(languageCode, currentLanguage);
    chip.addEventListener("click", () => {
      if (languageCode === currentLanguage) {
        return;
      }

      setCurrentLanguage(languageCode);
    });
    fragment.appendChild(chip);
  });

  container.appendChild(fragment);
}

function renderAnnouncementTrack() {
  const labels = siteLanguages.map((languageCode) => {
    const strings = getUiStrings(languageCode);
    return `${strings.intro}`;
  });

  const buildSegment = () => {
    const segment = document.createElement("div");
    segment.className = "announcement-segment";

    labels.forEach((label) => {
      const item = document.createElement("span");
      item.className = "announcement-item";
      item.textContent = label;
      segment.appendChild(item);
    });

    return segment;
  };

  announcementTrack.innerHTML = "";
  announcementTrack.appendChild(buildSegment());
  announcementTrack.appendChild(buildSegment());
}

function hasMeaningfulDuration(durationText) {
  return Boolean(durationText && durationText.trim());
}

function stopCurrentAudio(exceptAudio = null) {
  if (currentAudio && currentAudio !== exceptAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

function formatPlayerTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  const rounded = Math.floor(seconds);
  const minutes = Math.floor(rounded / 60);
  const remainingSeconds = rounded % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updateMiniPlayerPlayback() {
  const strings = getUiStrings(currentLanguage);
  if (!currentAudio) {
    miniPlayerToggle.textContent = "▶";
    miniPlayerToggle.setAttribute("aria-label", strings.playerPlay);
    playerPlayButton.textContent = "▶";
    playerPlayButton.setAttribute("aria-label", strings.playerPlay);
    miniPlayerProgressBar.style.width = "0%";
    playerRepeatButton.classList.toggle("is-active", repeatEnabled);
    miniPlayerRepeat.classList.toggle("is-active", repeatEnabled);
    miniPlayerCurrentTime.textContent = "00:00";
    miniPlayerDurationTotal.textContent = "00:00";
    playerCurrentTime.textContent = "00:00";
    playerDurationTotal.textContent = "00:00";
    playerProgressInput.value = "0";
    return;
  }

  const isPlaying = !currentAudio.paused && !currentAudio.ended;
  miniPlayerToggle.textContent = isPlaying ? "❚❚" : "▶";
  miniPlayerToggle.setAttribute(
    "aria-label",
    isPlaying ? strings.playerPause : strings.playerPlay
  );
  playerPlayButton.textContent = isPlaying ? "❚❚" : "▶";
  playerPlayButton.setAttribute(
    "aria-label",
    isPlaying ? strings.playerPause : strings.playerPlay
  );
  playerRepeatButton.classList.toggle("is-active", repeatEnabled);
  playerRepeatButton.setAttribute("aria-label", strings.playerRepeat);
  miniPlayerRepeat.classList.toggle("is-active", repeatEnabled);
  miniPlayerRepeat.setAttribute("aria-label", strings.playerRepeat);

  const progress =
    currentAudio.duration && Number.isFinite(currentAudio.duration)
      ? (currentAudio.currentTime / currentAudio.duration) * 100
      : 0;
  miniPlayerProgressBar.style.width = `${Math.max(0, Math.min(progress, 100))}%`;
  miniPlayerCurrentTime.textContent = formatPlayerTime(currentAudio.currentTime);
  miniPlayerDurationTotal.textContent = formatPlayerTime(currentAudio.duration);
  playerCurrentTime.textContent = formatPlayerTime(currentAudio.currentTime);
  playerDurationTotal.textContent = formatPlayerTime(currentAudio.duration);
  if (!isSeekingFromOverlay) {
    playerProgressInput.value = `${Math.max(0, Math.min(progress, 100))}`;
  }
}

function bindAudioLifecycle(audio) {
  audio.addEventListener("play", () => {
    stopCurrentAudio(audio);
    currentAudio = audio;
    updateMiniPlayerPlayback();
  });

  audio.addEventListener("pause", () => {
    if (currentAudio === audio) {
      updateMiniPlayerPlayback();
    }
  });

  audio.addEventListener("timeupdate", updateMiniPlayerPlayback);
  audio.addEventListener("loadedmetadata", updateMiniPlayerPlayback);

  audio.addEventListener("ended", () => {
    if (currentAudio === audio) {
      audio.currentTime = 0;
      updateMiniPlayerPlayback();
    }
  });
}

function createMarkerIcon(stopNumber) {
  return L.divIcon({
    className: "",
    html: `<div class="map-marker" aria-hidden="true"><span class="map-marker-number">${stopNumber}</span></div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -18],
  });
}

function getAudioOptions(tappa) {
  if (Array.isArray(tappa.audioVarianti) && tappa.audioVarianti.length > 0) {
    return tappa.audioVarianti;
  }

  if (!tappa.fileAudio) {
    return [];
  }

  return [
    {
      codice: "IT",
      lingua: "Italiano",
      bandiera: "🇮🇹",
      fileAudio: tappa.fileAudio,
      audioDisponibile: tappa.audioDisponibile,
    },
  ];
}

function getSelectedAudioOption(tappa) {
  const audioOptions = getAudioOptions(tappa);
  const savedLanguage = selectedLanguageByStop.get(tappa.numero);
  return (
    audioOptions.find((option) => option.codice === savedLanguage) || audioOptions[0] || null
  );
}

function getDetailCopy(tappa, selectedOption) {
  const strings = getUiStrings(currentLanguage);
  if (selectedOption && selectedOption.trascrizione) {
    return {
      title: strings.transcriptTitle,
      text: selectedOption.trascrizione,
    };
  }

  return {
    title: strings.descriptiveText,
    text: stopDescriptions[tappa.numero]?.[currentLanguage] || tappa.descrizione,
  };
}

function renderGlobalLanguageSelector() {
  buildLanguageChips(globalLanguageChips);
}

function renderPlayerLanguageSelector(tappa = null) {
  if (!playerLanguageSelector || !playerLanguageChips) {
    return;
  }

  const targetStop = tappa || tappe.find((item) => item.numero === activeStopNumber) || tappe[0];
  const audioOptions = targetStop ? getAudioOptions(targetStop) : [];
  const availableLanguages = audioOptions.filter((option) => option.audioDisponibile);
  const shouldShowSelector = availableLanguages.length > 1;

  playerLanguageSelector.hidden = !shouldShowSelector;

  if (!shouldShowSelector) {
    playerLanguageChips.innerHTML = "";
    if (playerLanguageLabel) {
      playerLanguageLabel.hidden = true;
    }
    return;
  }

  buildLanguageChips(playerLanguageChips, {
    includeLabel: false,
  });

  if (playerLanguageLabel) {
    playerLanguageLabel.hidden = true;
  }
}

function renderDetailCopy(tappa) {
  const selectedOption = getSelectedAudioOption(tappa);
  const detailCopy = getDetailCopy(tappa, selectedOption);
  detailCopyTitle.textContent = detailCopy.title;
  detailDescription.textContent = detailCopy.text;
  detailCopyBox.open = false;
}

function popupHtml(tappa) {
  return `
    <div class="popup-content">
      <h3 class="popup-title">${tappa.numero}. ${getStopTitle(tappa)}</h3>
      ${hasMeaningfulDuration(tappa.durata) ? `<p class="popup-meta">${tappa.durata}</p>` : ""}
    </div>
  `;
}

function renderAudioContent(tappa) {
  audioWrapper.innerHTML = "";
  const selectedOption = getSelectedAudioOption(tappa);
  const strings = getUiStrings(currentLanguage);
  currentSelectedOption = selectedOption;

  if (!selectedOption || !selectedOption.audioDisponibile) {
    currentAudio = null;
    updateMiniPlayerPlayback();
    return;
  }

  const audio = document.createElement("audio");
  audio.controls = false;
  audio.preload = "none";
  audio.src = selectedOption.fileAudio;
  audio.loop = repeatEnabled;
  audio.volume = currentVolume;
  audio.setAttribute(
    "aria-label",
    `${strings.audioAvailable} ${tappa.numero} ${getLanguageDisplayName(
      selectedOption.codice
    ).toLowerCase()}`
  );
  bindAudioLifecycle(audio);
  audioWrapper.appendChild(audio);
  currentAudio = audio;
  updateMiniPlayerPlayback();
}

function focusStopByOffset(offset) {
  if (activeStopNumber === null) {
    return;
  }

  const currentIndex = tappe.findIndex((tappa) => tappa.numero === activeStopNumber);
  if (currentIndex === -1) {
    return;
  }

  const nextIndex = (currentIndex + offset + tappe.length) % tappe.length;
  focusStop(tappe[nextIndex], { autoplay: true, openOverlay: overlayOpen });
}

function handlePreviousAction() {
  const now = Date.now();
  const audio = audioWrapper.querySelector("audio");

  if (lastPrevInteractionAt && now - lastPrevInteractionAt < 450) {
    lastPrevInteractionAt = 0;
    focusStopByOffset(-1);
    return;
  }

  lastPrevInteractionAt = now;

  if (audio && audio.currentTime > 0.25) {
    audio.currentTime = 0;
    updateMiniPlayerPlayback();
    return;
  }

  focusStopByOffset(-1);
}

function toggleRepeatMode() {
  repeatEnabled = !repeatEnabled;
  if (currentAudio) {
    currentAudio.loop = repeatEnabled;
  }
  updateMiniPlayerPlayback();
}

function playCurrentRenderedAudio() {
  const audio = audioWrapper.querySelector("audio");
  if (!audio) {
    return;
  }

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function updateActiveListItem(stopNumber) {
  buttonsByStop.forEach((button, numero) => {
    button.classList.toggle("is-active", numero === stopNumber);
    button.setAttribute("aria-pressed", numero === stopNumber ? "true" : "false");
  });
}

function openPlayerOverlay() {
  overlayOpen = true;
  playerOverlay.classList.remove("is-hidden");
  playerOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("player-open");
}

function closePlayerOverlay() {
  overlayOpen = false;
  playerOverlay.classList.add("is-hidden");
  playerOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("player-open");
}

function updateMiniPlayer(tappa, selectedOption) {
  miniPlayer.classList.remove("is-hidden");
  miniPlayerTitle.textContent = getStopTitle(tappa);
  miniPlayerSubtitle.textContent = "";
  const artworkSrc = STOP_ARTWORKS[tappa.numero] || WHITE_ARTWORK;
  miniPlayerArtwork.src = artworkSrc;
  miniPlayerArtwork.alt = `Artwork tappa ${tappa.numero}`;
  detailArtworkImage.src = artworkSrc;
  detailArtworkImage.alt = `Immagine tappa ${tappa.numero}`;
  updateMiniPlayerPlayback();
}

function toggleMiniPlayerPlayback() {
  const audio = audioWrapper.querySelector("audio");
  if (!audio) {
    if (activeStopNumber !== null) {
      openPlayerOverlay();
    }
    return;
  }

  if (audio.paused) {
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
    return;
  }

  audio.pause();
}

function bindPlayerControls() {
  miniPlayer.addEventListener("click", (event) => {
    if (event.target.closest("button, input")) {
      return;
    }
    openPlayerOverlay();
  });
  miniPlayerOpen.addEventListener("click", openPlayerOverlay);
  miniPlayerToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMiniPlayerPlayback();
  });
  miniPlayerPrev.addEventListener("click", (event) => {
    event.stopPropagation();
    handlePreviousAction();
  });
  miniPlayerNext.addEventListener("click", (event) => {
    event.stopPropagation();
    focusStopByOffset(1);
  });
  miniPlayerRepeat.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleRepeatMode();
  });
  playerPrevButton.addEventListener("click", () => {
    handlePreviousAction();
  });
  playerPlayButton.addEventListener("click", () => {
    toggleMiniPlayerPlayback();
  });
  playerNextButton.addEventListener("click", () => {
    focusStopByOffset(1);
  });
  playerRepeatButton.addEventListener("click", () => {
    toggleRepeatMode();
  });
  playerBackdrop.addEventListener("click", closePlayerOverlay);
  playerCloseButton.addEventListener("click", closePlayerOverlay);
  miniPlayerVolume.addEventListener("input", () => {
    currentVolume = Number(miniPlayerVolume.value);
    playerVolume.value = String(currentVolume);
    if (currentAudio) {
      currentAudio.volume = currentVolume;
    }
  });
  playerVolume.addEventListener("input", () => {
    currentVolume = Number(playerVolume.value);
    miniPlayerVolume.value = String(currentVolume);
    if (currentAudio) {
      currentAudio.volume = currentVolume;
    }
  });
  playerProgressInput.addEventListener("input", () => {
    if (!currentAudio || !Number.isFinite(currentAudio.duration)) {
      return;
    }
    isSeekingFromOverlay = true;
    const nextTime = (Number(playerProgressInput.value) / 100) * currentAudio.duration;
    playerCurrentTime.textContent = formatPlayerTime(nextTime);
  });
  playerProgressInput.addEventListener("change", () => {
    if (!currentAudio || !Number.isFinite(currentAudio.duration)) {
      isSeekingFromOverlay = false;
      return;
    }
    currentAudio.currentTime = (Number(playerProgressInput.value) / 100) * currentAudio.duration;
    isSeekingFromOverlay = false;
    updateMiniPlayerPlayback();
  });
}

function updateShareLinks() {
  const strings = getUiStrings(currentLanguage);
  const pageUrl = window.location.href;
  const shareText = `${document.title} - ${strings.intro}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(shareText);
  const encodedTitle = encodeURIComponent(document.title);

  shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  shareX.href = `https://x.com/intent/post?url=${encodedUrl}&text=${encodedText}`;
  shareLinkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  shareWhatsapp.href = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
  shareMail.href = `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
}

function renderStaticTexts() {
  const strings = getUiStrings(currentLanguage);
  document.documentElement.lang = currentLanguage.toLowerCase();
  renderAnnouncementTrack();
  eyebrowText.textContent = strings.prototype;
  if (introLeadText) introLeadText.textContent = strings.introLead;
  introText.textContent = strings.intro;
  stopsTitle.textContent = strings.routeTitle;
  stopsSubtitle.textContent = strings.routeSubtitle;
  platformsEyebrow.textContent = strings.platformsEyebrow;
  shareTitle.textContent = strings.shareTitle;
  locateMeButton.setAttribute("aria-label", strings.locateMe);
  detailCopyTitle.textContent = strings.descriptiveText;
  stopsList.setAttribute("aria-label", strings.routeTitle);
  playerPrevButton.setAttribute("aria-label", strings.playerPrevious);
  playerPlayButton.setAttribute("aria-label", strings.playerPlay);
  playerNextButton.setAttribute("aria-label", strings.playerNext);
  playerRepeatButton.setAttribute("aria-label", strings.playerRepeat);
  miniPlayerPrev.setAttribute("aria-label", strings.playerPrevious);
  miniPlayerToggle.setAttribute("aria-label", strings.playerPlay);
  miniPlayerNext.setAttribute("aria-label", strings.playerNext);
  miniPlayerRepeat.setAttribute("aria-label", strings.playerRepeat);
  
  // Newly translated static text elements
  if (brandNameEl) brandNameEl.textContent = strings.brandName;
  if (brandTagEl) brandTagEl.textContent = strings.brandTag;
  if (landingTitle) landingTitle.textContent = strings.mainTitle;
  if (mapStageNote) mapStageNote.textContent = strings.mapStageNote;
  updateShareLinks();
  updateMiniPlayerPlayback();
  renderPlayerLanguageSelector(activeStopNumber ? tappe.find((tappa) => tappa.numero === activeStopNumber) : tappe[0]);
}

function refreshMarkerPopups() {
  tappe.forEach((tappa) => {
    const marker = markersByStop.get(tappa.numero);
    if (marker) {
      marker.setPopupContent(popupHtml(tappa));
    }
  });
}

function focusStop(tappa, options = {}) {
  const marker = markersByStop.get(tappa.numero);
  const audioOptions = getAudioOptions(tappa).filter((option) => option.audioDisponibile);
  const selectedOption = getSelectedAudioOption(tappa);
  const strings = getUiStrings(currentLanguage);
  const shouldOpenOverlay = options.openOverlay === true;
  const shouldAutoplay = options.autoplay === true;
  const preservePlayback = options.preservePlayback === true;
  const previousCurrentTime = currentAudio?.currentTime || 0;
  const previousWasPlaying = currentAudio ? !currentAudio.paused : false;

  activeStopNumber = tappa.numero;
  updateActiveListItem(tappa.numero);

  detailNumber.textContent = tappa.numero;
  detailTitle.textContent = getStopTitle(tappa);
  detailDuration.textContent = hasMeaningfulDuration(tappa.durata) ? tappa.durata : "";
  detailDuration.hidden = !hasMeaningfulDuration(tappa.durata);
  detailStatus.textContent = "";
  detailStatus.hidden = true;
  renderDetailCopy(tappa);
  updateMiniPlayer(tappa, selectedOption);
  renderPlayerLanguageSelector(tappa);

  stopCurrentAudio();
  renderAudioContent(tappa);

  const renderedAudio = audioWrapper.querySelector("audio");

  if (
    preservePlayback &&
    renderedAudio &&
    selectedOption?.audioDisponibile
  ) {
    renderedAudio.currentTime = previousCurrentTime;
    if (previousWasPlaying) {
      const playPromise = renderedAudio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    } else {
      updateMiniPlayerPlayback();
    }
  }

  if (shouldAutoplay && renderedAudio && selectedOption?.audioDisponibile) {
    playCurrentRenderedAudio();
  }

  if (shouldOpenOverlay) {
    openPlayerOverlay();
  }

  if (marker) {
    if (!options.skipFly) {
      map.flyTo([tappa.latitudine, tappa.longitudine], Math.max(map.getZoom(), 17), {
        animate: true,
        duration: 0.8,
      });
    }
    marker.openPopup();
  }
}

function renderStopsList() {
  stopsList.innerHTML = "";
  buttonsByStop.clear();
  const fragment = document.createDocumentFragment();

  tappe.forEach((tappa) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stop-button";
    button.setAttribute("aria-pressed", "false");

    button.innerHTML = `
      <span class="stop-index">${tappa.numero}</span>
      <span>
        <strong class="stop-title">${getStopTitle(tappa)}</strong>
        ${hasMeaningfulDuration(tappa.durata) ? `<span class="stop-meta">${tappa.durata}</span>` : ""}
      </span>
    `;

    button.addEventListener("click", () => {
      focusStop(tappa, { autoplay: true, openOverlay: false });
    });

    item.appendChild(button);
    fragment.appendChild(item);
    buttonsByStop.set(tappa.numero, button);
  });

  stopsList.appendChild(fragment);
  if (activeStopNumber !== null) {
    updateActiveListItem(activeStopNumber);
  }
}

function renderMap() {
  const routeLayer = L.geoJSON(routeGeoJson, {
    style: {
      color: "#a44c24",
      weight: 4,
      opacity: 0.8,
      dashArray: "8 8",
      lineCap: "round",
      lineJoin: "round",
    },
  }).addTo(map);

  tappe.forEach((tappa) => {
    const marker = L.marker([tappa.latitudine, tappa.longitudine], {
      icon: createMarkerIcon(tappa.numero),
      title: `${tappa.numero}. ${getStopTitle(tappa)}`,
    })
      .addTo(map)
      .bindPopup(popupHtml(tappa));

    marker.on("click", () => {
      focusStop(tappa, { skipFly: true, autoplay: true, openOverlay: false });
    });

    marker.on("popupopen", () => {
      if (activeStopNumber !== tappa.numero) {
        focusStop(tappa, { skipFly: true });
      }
    });

    markersByStop.set(tappa.numero, marker);
  });

  map.fitBounds(routeLayer.getBounds(), {
    padding: [40, 40],
  });
}

renderStopsList();
renderMap();
renderStaticTexts();
renderGlobalLanguageSelector();
bindLocateButton();
bindMapFullscreenButton();
bindPlayerControls();
focusStop(tappe[0], { skipFly: true });

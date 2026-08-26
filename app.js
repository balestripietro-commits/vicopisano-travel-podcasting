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
    fileAudio: "audio/01_torre_quattro_porte.mp3",
    audioDisponibile: true,
    durata: "",
    descrizione:
      "Tappa dedicata al sistema difensivo collegato alla Rocca e alla possibilità di rifornire o soccorrere la fortezza in caso di assedio.",
  },
  {
    numero: 3,
    titolo: "Palazzo Pretorio",
    latitudine: 43.6992056,
    longitudine: 10.5867826,
    fileAudio: "audio/01_torre_quattro_porte.mp3",
    audioDisponibile: true,
    durata: "",
    descrizione:
      "Luogo del potere civile e amministrativo. Dopo la guerra e la conquista, il controllo del borgo passa anche attraverso istituzioni, giustizia e governo.",
  },
  {
    numero: 4,
    titolo: "Rocca del Brunelleschi",
    latitudine: 43.6994864,
    longitudine: 10.5863793,
    fileAudio: "audio/01_torre_quattro_porte.mp3",
    audioDisponibile: true,
    durata: "",
    descrizione:
      "Cuore militare dell'itinerario. Qui il racconto si concentra su Brunelleschi, sulla trasformazione del borgo in fortezza e sulla logica della resistenza.",
  },
  {
    numero: 5,
    titolo: "Torri Gemelle",
    latitudine: 43.6999256,
    longitudine: 10.5842514,
    fileAudio: "audio/01_torre_quattro_porte.mp3",
    audioDisponibile: true,
    durata: "",
    descrizione:
      "Tappa dedicata alla presenza diffusa delle torri nel borgo e al ruolo delle strutture verticali come elementi di prestigio, osservazione e difesa.",
  },
  {
    numero: 6,
    titolo: "Parrocchia di Santa Maria Addolorata e San Giovanni Apostolo",
    latitudine: 43.7002026,
    longitudine: 10.5833924,
    fileAudio: "audio/01_torre_quattro_porte.mp3",
    audioDisponibile: true,
    durata: "",
    descrizione:
      "Tappa di respiro dedicata alla dimensione religiosa e comunitaria di Vicopisano, oltre la sola narrazione militare.",
  },
  {
    numero: 7,
    titolo: "Palazzo Comunale Vicopisano",
    latitudine: 43.6998526,
    longitudine: 10.5844138,
    fileAudio: "audio/01_torre_quattro_porte.mp3",
    audioDisponibile: true,
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
    RU: "Символический вход в поселок и начало маршрута. Башня вводит в главную тему пути: сегодня Vicopisano встречает гостей, но когда-то это место было создано для контроля, защиты и наблюдения.",
  },
  2: {
    IT: "Tappa dedicata al sistema difensivo collegato alla Rocca e alla possibilità di rifornire o soccorrere la fortezza in caso di assedio.",
    EN: "Stop dedicated to the defensive system linked to the Rocca and to the possibility of supplying or relieving the fortress during a siege.",
    DE: "Station über das Verteidigungssystem der Rocca und die Möglichkeit, die Festung im Fall einer Belagerung zu versorgen oder zu unterstützen.",
    FR: "Étape consacrée au système défensif lié à la Rocca et à la possibilité de ravitailler ou de secourir la forteresse en cas de siège.",
    ES: "Etapa dedicada al sistema defensivo vinculado a la Rocca y a la posibilidad de abastecer o socorrer la fortaleza en caso de asedio.",
    PT: "Etapa dedicada ao sistema defensivo ligado à Rocca e à possibilidade de abastecer ou socorrer a fortaleza em caso de cerco.",
    RU: "Остановка посвящена оборонительной системе, связанной с Роккой, и возможности снабжать или поддерживать крепость во время осады.",
  },
  3: {
    IT: "Luogo del potere civile e amministrativo. Dopo la guerra e la conquista, il controllo del borgo passa anche attraverso istituzioni, giustizia e governo.",
    EN: "Place of civil and administrative power. After war and conquest, control of the village also passes through institutions, justice and government.",
    DE: "Ort der zivilen und administrativen Macht. Nach Krieg und Eroberung verläuft die Kontrolle über den Ort auch über Institutionen, Justiz und Regierung.",
    FR: "Lieu du pouvoir civil et administratif. Après la guerre et la conquête, le contrôle du bourg passe aussi par les institutions, la justice et le gouvernement.",
    ES: "Lugar del poder civil y administrativo. Después de la guerra y la conquista, el control del pueblo pasa también por las instituciones, la justicia y el gobierno.",
    PT: "Lugar do poder civil e administrativo. Depois da guerra e da conquista, o controlo da vila passa também por instituições, justiça e governo.",
    RU: "Место гражданской и административной власти. После войны и завоевания контроль над поселком осуществлялся также через институты, правосудие и управление.",
  },
  4: {
    IT: "Cuore militare dell'itinerario. Qui il racconto si concentra su Brunelleschi, sulla trasformazione del borgo in fortezza e sulla logica della resistenza.",
    EN: "Military heart of the itinerary. Here the story focuses on Brunelleschi, on the transformation of the village into a fortress, and on the logic of resistance.",
    DE: "Militärisches Herz der Route. Hier konzentriert sich die Erzählung auf Brunelleschi, auf die Verwandlung des Ortes in eine Festung und auf die Logik des Widerstands.",
    FR: "Cœur militaire de l’itinéraire. Ici, le récit se concentre sur Brunelleschi, sur la transformation du bourg en forteresse et sur la logique de la résistance.",
    ES: "Corazón militar del itinerario. Aquí el relato se centra en Brunelleschi, en la transformación del pueblo en fortaleza y en la lógica de la resistencia.",
    PT: "Coração militar do itinerário. Aqui a narrativa concentra-se em Brunelleschi, na transformação da vila em fortaleza e na lógica da resistência.",
    RU: "Военное сердце маршрута. Здесь повествование сосредоточено на Брунеллески, превращении поселка в крепость и логике сопротивления.",
  },
  5: {
    IT: "Tappa dedicata alla presenza diffusa delle torri nel borgo e al ruolo delle strutture verticali come elementi di prestigio, osservazione e difesa.",
    EN: "Stop dedicated to the widespread presence of towers in the village and to the role of vertical structures as symbols of prestige, observation and defense.",
    DE: "Station über die weit verbreitete Präsenz von Türmen im Ort und über die Rolle vertikaler Bauwerke als Zeichen von Prestige, Beobachtung und Verteidigung.",
    FR: "Étape consacrée à la présence diffuse des tours dans le bourg et au rôle des structures verticales comme éléments de prestige, d’observation et de défense.",
    ES: "Etapa dedicada a la presencia extendida de las torres en el pueblo y al papel de las estructuras verticales como elementos de prestigio, observación y defensa.",
    PT: "Etapa dedicada à presença generalizada das torres na vila e ao papel das estruturas verticais como elementos de prestígio, observação e defesa.",
    RU: "Остановка посвящена многочисленным башням в поселке и роли вертикальных сооружений как символов престижа, наблюдения и защиты.",
  },
  6: {
    IT: "Tappa di respiro dedicata alla dimensione religiosa e comunitaria di Vicopisano, oltre la sola narrazione militare.",
    EN: "A breathing-space stop dedicated to the religious and community dimension of Vicopisano, beyond the purely military narrative.",
    DE: "Eine ruhigere Station über die religiöse und gemeinschaftliche Dimension von Vicopisano, jenseits der rein militärischen Erzählung.",
    FR: "Étape de respiration consacrée à la dimension religieuse et communautaire de Vicopisano, au-delà du seul récit militaire.",
    ES: "Etapa de respiro dedicada a la dimensión religiosa y comunitaria de Vicopisano, más allá del relato militar.",
    PT: "Etapa de respiro dedicada à dimensão religiosa e comunitária de Vicopisano, para além da narrativa militar.",
    RU: "Спокойная остановка, посвященная религиозной и общественной жизни Vicopisano за пределами военной истории.",
  },
  7: {
    IT: "Chiusura contemporanea del percorso: dal borgo fortificato al Comune che oggi accoglie, racconta e valorizza la propria storia.",
    EN: "Contemporary conclusion of the route: from the fortified village to the Municipality that today welcomes visitors, tells its story and enhances its heritage.",
    DE: "Zeitgenössischer Abschluss der Route: vom befestigten Ort zur heutigen Gemeinde, die ihre Geschichte empfängt, erzählt und aufwertet.",
    FR: "Conclusion contemporaine du parcours : du bourg fortifié à la commune qui accueille aujourd’hui les visiteurs, raconte son histoire et la met en valeur.",
    ES: "Cierre contemporáneo del recorrido: del pueblo fortificado al Ayuntamiento que hoy acoge, cuenta y pone en valor su historia.",
    PT: "Encerramento contemporâneo do percurso: da vila fortificada ao Município que hoje acolhe, conta e valoriza a sua história.",
    RU: "Современное завершение маршрута: от укрепленного поселка к муниципалитету, который сегодня принимает гостей, рассказывает и бережно хранит свою историю.",
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
        coordinates: [[10.58639,43.700434],[10.586355,43.700447],[10.586374,43.700472],[10.586421,43.700526],[10.586465,43.700564],[10.586531,43.700592],[10.58663,43.700563],[10.586752,43.700497],[10.586952,43.700408],[10.587042,43.700356],[10.587123,43.700305],[10.587231,43.700206],[10.587296,43.700128],[10.587358,43.70003],[10.587405,43.699929],[10.587419,43.699888],[10.587479,43.699719],[10.587482,43.699705],[10.587512,43.699593],[10.587534,43.699509],[10.587461,43.699463],[10.587434,43.699459],[10.587401,43.699446],[10.587378,43.699419],[10.587363,43.699392],[10.587358,43.699338],[10.587354,43.699303],[10.587347,43.699262],[10.587335,43.699225],[10.587323,43.699196],[10.587299,43.699164],[10.58728,43.69915],[10.58726,43.699154],[10.587232,43.699168],[10.587204,43.69917],[10.58716,43.699162],[10.587127,43.699139],[10.587114,43.699123],[10.587084,43.699121],[10.587075,43.699134],[10.587067,43.699144],[10.587062,43.699149],[10.587056,43.699153],[10.58705,43.699157],[10.587037,43.699156],[10.587033,43.69915],[10.587035,43.699136],[10.587043,43.699116],[10.587047,43.699104],[10.587041,43.699103],[10.58702,43.699106],[10.586958,43.699088],[10.586902,43.699126],[10.586958,43.699088],[10.58702,43.699106],[10.587041,43.699103],[10.587047,43.699104],[10.587043,43.699116],[10.587035,43.699136],[10.587033,43.69915],[10.587037,43.699156],[10.58705,43.699157],[10.587056,43.699153],[10.587062,43.699149],[10.587067,43.699144],[10.587075,43.699134],[10.587084,43.699121],[10.587091,43.699091],[10.587097,43.699047],[10.587088,43.699021],[10.587061,43.698995],[10.587032,43.698983],[10.586965,43.698961],[10.586949,43.698944],[10.586942,43.698875],[10.586941,43.698853],[10.586941,43.698813],[10.586941,43.698771],[10.586941,43.698728],[10.586883,43.698729],[10.58684,43.698729],[10.586724,43.698737],[10.586618,43.698763],[10.586532,43.698789],[10.586469,43.698809],[10.586479,43.698816],[10.586492,43.698823],[10.586507,43.698828],[10.58652,43.698832],[10.586536,43.698835],[10.586551,43.69884],[10.586559,43.698844],[10.586565,43.698848],[10.586571,43.698853],[10.586576,43.698858],[10.586579,43.698868],[10.586589,43.698908],[10.586623,43.69904],[10.586633,43.699083],[10.586634,43.699093],[10.586616,43.699096],[10.586598,43.699101],[10.586596,43.699112],[10.586598,43.699124],[10.586596,43.699112],[10.586598,43.699101],[10.586616,43.699096],[10.586634,43.699093],[10.586633,43.699083],[10.586623,43.69904],[10.586589,43.698908],[10.586486,43.698919],[10.586406,43.698928],[10.586304,43.698937],[10.586211,43.698947],[10.586172,43.698965],[10.586106,43.698993],[10.586051,43.699002],[10.586012,43.699],[10.585969,43.698989],[10.585893,43.698986],[10.585784,43.699017],[10.585695,43.699053],[10.585637,43.69908],[10.585592,43.699103],[10.58554,43.699129],[10.585451,43.699182],[10.585395,43.699203],[10.585337,43.699209],[10.58526,43.699203],[10.585232,43.699206],[10.585159,43.699238],[10.585097,43.699275],[10.585072,43.699304],[10.585065,43.699318],[10.58505,43.69935],[10.585004,43.699375],[10.58484,43.699456],[10.584673,43.699539],[10.584538,43.699623],[10.584512,43.699651],[10.584505,43.69968],[10.584503,43.699704],[10.584508,43.699737],[10.584519,43.699764],[10.584457,43.699779],[10.584406,43.699787],[10.584339,43.699797],[10.584267,43.699804],[10.584241,43.699808],[10.584216,43.699829],[10.584174,43.699881],[10.584149,43.699904],[10.584106,43.699919],[10.584002,43.699925],[10.583942,43.699928],[10.583888,43.699942],[10.58384,43.700072],[10.583821,43.70017],[10.583557,43.70015],[10.5834,43.70014],[10.583557,43.70015],[10.583821,43.70017],[10.58384,43.700072],[10.583888,43.699942],[10.583942,43.699928],[10.584002,43.699925],[10.584106,43.699919],[10.584149,43.699904],[10.58418,43.699876],[10.584216,43.699829],[10.584241,43.699808],[10.584267,43.699804],[10.584339,43.699797],[10.584396,43.699789]],
      },
    },
  ],
};

// The route doubles back after stop 6, so stop 5 must stay anchored to the outbound branch.
const ROUTE_STOP_ANCHORS = new Map([
  [1, 0],
  [2, 15],
  [3, 52],
  [4, 103],
  [5, 150],
  [6, 160],
  [7, 174],
]);

const map = L.map("map", {
  scrollWheelZoom: true,
  attributionControl: false,
});

const baseTileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
});
baseTileLayer.addTo(map);

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
const detailTitleText = document.getElementById("detail-title-text");
const detailStatus = document.getElementById("detail-status");
const detailDuration = document.getElementById("detail-duration");
const detailCopyBox = document.getElementById("detail-copy-box");
const detailCopyTitle = document.getElementById("detail-copy-title");
const detailCopyLabel = document.getElementById("detail-copy-label");
const detailCopyPanel = document.getElementById("detail-copy-panel");
const playerTranscriptDock = document.getElementById("player-transcript-dock");
const detailDescription = document.getElementById("detail-description");
const audioWrapper = document.getElementById("audio-wrapper");
const playerArtwork = document.getElementById("player-artwork");
const detailArtworkImage = document.getElementById("detail-artwork-image");
const detailMascotImage = document.getElementById("detail-mascot-image");
const artworkFlipToggle = document.getElementById("artwork-flip-toggle");
const eyebrowText = document.getElementById("eyebrow-text");
const introLeadText = document.getElementById("intro-lead-text");
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
const brandNameEl = document.getElementById("brand-name");
const brandTagEl = document.getElementById("brand-tag");
const landingTitle = document.getElementById("landing-title");
const mapStageNote = document.getElementById("map-stage-note");
const locateMeButton = document.getElementById("locate-me-button");
const locateMeStatus = document.getElementById("locate-me-status");
const mapDirectionsButton = document.getElementById("map-directions-button");
const mapFullscreenButton = document.getElementById("map-fullscreen-button");
const mapStageFrame = document.querySelector(".map-stage-frame");
const mapLoadStatus = document.getElementById("map-load-status");
const mapExploreStop = document.getElementById("map-explore-stop");
const mapExploreStopNumber = document.getElementById("map-explore-stop-number");
const mapExploreStopTitle = document.getElementById("map-explore-stop-title");
const mapExploreStopAudio = document.getElementById("map-explore-stop-audio");
const mapExploreOpenPlayer = document.getElementById("map-explore-open-player");
const stopPreview = document.getElementById("stop-preview");
const stopPreviewNumber = document.getElementById("stop-preview-number");
const stopPreviewTitle = document.getElementById("stop-preview-title");
const stopPreviewImage = document.getElementById("stop-preview-image");
const globalLanguageChips = document.getElementById("global-language-chips");
const globalLanguageSelector = document.querySelector(".global-language-selector");
const globalLanguageCurrent = document.getElementById("global-language-current");
const globalLanguageCurrentLabel = document.getElementById("global-language-current-label");
const helpButton = document.getElementById("help-button");
const onboardingOverlay = document.getElementById("onboarding-overlay");
const onboardingTitle = document.getElementById("onboarding-title");
const onboardingHint = document.getElementById("onboarding-hint");
const onboardingLanguageChips = document.getElementById("onboarding-language-chips");
const guideLayer = document.getElementById("guide-layer");
const guideCard = document.getElementById("guide-card");
const guideStepText = document.getElementById("guide-step-text");
const guideSkipButton = document.getElementById("guide-skip-button");
const guidePrevButton = document.getElementById("guide-prev-button");
const guideNextButton = document.getElementById("guide-next-button");
const playerLanguageSelector = document.getElementById("player-language-selector");
const playerLanguageLabel = document.getElementById("player-language-label");
const playerLanguageCurrent = document.getElementById("player-language-current");
const playerLanguageCurrentLabel = document.getElementById("player-language-current-label");
const playerLanguageChips = document.getElementById("player-language-chips");
const miniPlayer = document.getElementById("mini-player");
const miniPlayerToggle = document.getElementById("mini-player-toggle");
const miniPlayerPrev = document.getElementById("mini-player-prev");
const miniPlayerNext = document.getElementById("mini-player-next");
const miniPlayerRepeat = document.getElementById("mini-player-repeat");
const miniPlayerExpand = document.getElementById("mini-player-expand");
const miniPlayerTitle = document.getElementById("mini-player-title");
const miniPlayerSubtitle = document.getElementById("mini-player-subtitle");
const miniPlayerArtwork = document.getElementById("mini-player-artwork");
const miniPlayerProgressBar = document.getElementById("mini-player-progress-bar");
const miniPlayerCurrentTime = document.getElementById("mini-player-current-time");
const miniPlayerDurationTotal = document.getElementById("mini-player-duration-total");
const miniPlayerSeekFeedback = document.getElementById("mini-player-seek-feedback");
const miniPlayerMute = document.getElementById("mini-player-mute");
const miniPlayerVolume = document.getElementById("mini-player-volume");
const playerOverlay = document.getElementById("player-overlay");
const playerBackdrop = document.getElementById("player-backdrop");
const playerCloseButton = document.getElementById("player-close-button");
const playerShareButton = document.getElementById("player-share-button");
const playerShareIcon = playerShareButton?.querySelector(".player-share-icon");
const playerShareStatus = document.getElementById("player-share-status");
const playerPrevButton = document.getElementById("player-prev-button");
const playerPlayButton = document.getElementById("player-play-button");
const playerNextButton = document.getElementById("player-next-button");
const playerSpeedButton = document.getElementById("player-speed-button");
const playerSpeedLabel = document.getElementById("player-speed-label");
const playerCurrentTime = document.getElementById("player-current-time");
const playerDurationTotal = document.getElementById("player-duration-total");
const playerSeekFeedback = document.getElementById("player-seek-feedback");
const playerProgressInput = document.getElementById("player-progress-input");
const playerMute = document.getElementById("player-mute");
const playerVolume = document.getElementById("player-volume");
const audioFeedback = document.getElementById("audio-feedback");
const playerNextPreview = document.getElementById("player-next-preview");
const playerNextPreviewLabel = document.getElementById("player-next-preview-label");
const playerNextPreviewTitle = document.getElementById("player-next-preview-title");
const playerNextPreviewImage = document.getElementById("player-next-preview-image");
const playerNextStopButton = document.getElementById("player-next-stop-button");
const playerPreviousPreview = document.getElementById("player-previous-preview");
const playerPreviousPreviewLabel = document.getElementById("player-previous-preview-label");
const playerPreviousPreviewTitle = document.getElementById("player-previous-preview-title");
const playerPreviousPreviewImage = document.getElementById("player-previous-preview-image");
const playerPreviousStopButton = document.getElementById("player-previous-stop-button");
const playerStopNavigation = document.querySelector(".player-stop-navigation");
const heroMascot = document.getElementById("hero-mascot");
const appShell = document.querySelector(".app-shell");
const playerSheet = document.querySelector(".player-sheet");

const PLAYBACK_RATES = [1, 1.5, 2];
const VOLUME_UI_ANIMATION_DURATION = 220;

let currentAudio = null;
let activeStopNumber = null;
let currentLanguage = "IT";
let userLocationMarker = null;
let userLocationAccuracyCircle = null;
let overlayOpen = false;
let currentSelectedOption = null;
let repeatEnabled = false;
let currentPlaybackRate = PLAYBACK_RATES[0];
let currentVolume = 0.85;
let lastAudibleVolume = currentVolume;
let volumeMuted = false;
let audioHasEnded = false;
let isSeekingFromOverlay = false;
let detailArtworkMode = "photo";
let lastPrevInteractionAt = 0;
let miniPlayerResizeObserver = null;
let currentMapStatusKey = "";
let currentAudioStatusKey = "";
let hasMapLoadedTiles = false;
let tileErrorCount = 0;
let lastPlayerTrigger = null;
let playerTitleOverflowFrame = null;
let volumeSliderAnimationFrame = null;
let volumeIconAnimationTimer = null;
let detailCopyAnimationTimer = null;
let seekFeedbackTimer = null;
let seekFeedbackHideTimer = null;
let geolocationFeedbackTimer = null;
let playerOpenTransitionTimer = null;
let playerCloseTransitionTimer = null;
let playerShareFeedbackTimer = null;

const markersByStop = new Map();
const buttonsByStop = new Map();
const selectedLanguageByStop = new Map();
const routeCoordinateIndexByStop = new Map();
let displayRouteCoordinates = [];
let activeRouteLayer = null;

const MASCOT_ASSET_VERSION = "20260816";
const MASCOT_FRAME_BASE_PATH = "assets/mascotte-mouth";
const MASCOT_REST_FRAME = `${MASCOT_FRAME_BASE_PATH}/mascotte_X.webp?v=${MASCOT_ASSET_VERSION}`;
const MASCOT_FRAME_PATHS = {
  A: `${MASCOT_FRAME_BASE_PATH}/mascotte_A.webp?v=${MASCOT_ASSET_VERSION}`,
  B: `${MASCOT_FRAME_BASE_PATH}/mascotte_B.webp?v=${MASCOT_ASSET_VERSION}`,
  C: `${MASCOT_FRAME_BASE_PATH}/mascotte_C.webp?v=${MASCOT_ASSET_VERSION}`,
  D: `${MASCOT_FRAME_BASE_PATH}/mascotte_D.webp?v=${MASCOT_ASSET_VERSION}`,
  E: `${MASCOT_FRAME_BASE_PATH}/mascotte_E.webp?v=${MASCOT_ASSET_VERSION}`,
  F: `${MASCOT_FRAME_BASE_PATH}/mascotte_F.webp?v=${MASCOT_ASSET_VERSION}`,
  G: `${MASCOT_FRAME_BASE_PATH}/mascotte_G.webp?v=${MASCOT_ASSET_VERSION}`,
  H: `${MASCOT_FRAME_BASE_PATH}/mascotte_H.webp?v=${MASCOT_ASSET_VERSION}`,
  X: MASCOT_REST_FRAME,
};

const mascotCueCache = new Map();
const mascotFrameImages = new Map();
let mascotAnimationFrame = null;
let routeScrollAnimationFrame = null;
let routeSelectionTimers = [];
let mapDirectionsCueTimer = null;
let mascotActiveAudio = null;
let mascotActiveCues = [];
let mascotCueIndex = 0;
let mascotSyncToken = 0;
let currentMascotFrame = "X";
let mascotMotionController = null;
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const mascotTapQuery = window.matchMedia("(max-width: 860px)");

const siteLanguages = ["IT", "EN", "DE", "FR", "ES", "PT", "RU"];
const LANGUAGE_STORAGE_KEY = "vicopisano-language";
const LAST_STOP_STORAGE_KEY = "vicopisano-last-stop";
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
    platformsEyebrow: "Scopri Vicopisano anche su:",
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
    playerRewind: "Indietro di 10 secondi",
    playerForward: "Avanti di 10 secondi",
    playerRepeat: "Ripeti traccia",
    playerSpeed: "Velocità di riproduzione",
    playerExpand: "Apri player a schermo intero",
    playerClose: "Chiudi player",
    playerShare: "Condividi questa tappa",
    shareCopied: "Link copiato",
    playerVolume: "Volume del player",
    playerMute: "Disattiva audio",
    playerUnmute: "Riattiva audio",
    playerProgress: "Posizione della traccia",
    mapOpenFullscreen: "Apri la mappa a tutto schermo",
    mapCloseFullscreen: "Chiudi la mappa a tutto schermo",
    languageSelector: "Selettore lingua",
    currentLanguage: (language) => `Lingua corrente: ${language}`,
    showMascot: "Mostra mascotte animata",
    showPhoto: "Mostra foto della tappa",
    animateMascot: "Anima mascotte",
    shareFacebook: "Condividi su Facebook",
    shareX: "Condividi su X",
    shareLinkedin: "Condividi su LinkedIn",
    shareWhatsapp: "Condividi su WhatsApp",
    shareEmail: "Condividi via email",
    nextStopPreview: "Prossima tappa",
    openNextStop: "Apri prossima tappa",
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
    platformsEyebrow: "You can also find Travel Podcasting Vicopisano on:",
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
    playerRewind: "Go back 10 seconds",
    playerForward: "Go forward 10 seconds",
    playerRepeat: "Repeat track",
    playerSpeed: "Playback speed",
    playerExpand: "Open full-screen player",
    playerClose: "Close player",
    playerShare: "Share this stop",
    shareCopied: "Link copied",
    playerVolume: "Player volume",
    playerMute: "Mute audio",
    playerUnmute: "Unmute audio",
    playerProgress: "Track position",
    mapOpenFullscreen: "Open map in full screen",
    mapCloseFullscreen: "Close full-screen map",
    languageSelector: "Language selector",
    currentLanguage: (language) => `Current language: ${language}`,
    showMascot: "Show animated mascot",
    showPhoto: "Show stop photo",
    animateMascot: "Animate mascot",
    shareFacebook: "Share on Facebook",
    shareX: "Share on X",
    shareLinkedin: "Share on LinkedIn",
    shareWhatsapp: "Share on WhatsApp",
    shareEmail: "Share by email",
    nextStopPreview: "Next stop",
    openNextStop: "Open next stop",
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
    platformsEyebrow: "Du findest Travel Podcasting Vicopisano auch auf:",
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
    playerRewind: "10 Sekunden zurück",
    playerForward: "10 Sekunden vor",
    playerRepeat: "Titel wiederholen",
    playerSpeed: "Wiedergabegeschwindigkeit",
    playerExpand: "Player im Vollbild öffnen",
    playerClose: "Player schließen",
    playerShare: "Diese Etappe teilen",
    shareCopied: "Link kopiert",
    playerVolume: "Player-Lautstärke",
    playerMute: "Audio stummschalten",
    playerUnmute: "Audio einschalten",
    playerProgress: "Wiedergabeposition",
    mapOpenFullscreen: "Karte im Vollbild öffnen",
    mapCloseFullscreen: "Vollbildkarte schließen",
    languageSelector: "Sprachauswahl",
    currentLanguage: (language) => `Aktuelle Sprache: ${language}`,
    showMascot: "Animiertes Maskottchen anzeigen",
    showPhoto: "Foto der Station anzeigen",
    animateMascot: "Maskottchen animieren",
    shareFacebook: "Auf Facebook teilen",
    shareX: "Auf X teilen",
    shareLinkedin: "Auf LinkedIn teilen",
    shareWhatsapp: "Über WhatsApp teilen",
    shareEmail: "Per E-Mail teilen",
    nextStopPreview: "Nächste Station",
    openNextStop: "Nächste Station öffnen",
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
    geolocationHttpsHint: "Sur smartphone, HTTPS est nécessaire pour une géolocalisation fiable.",
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
    playerRewind: "Reculer de 10 secondes",
    playerForward: "Avancer de 10 secondes",
    playerRepeat: "Répéter la piste",
    playerSpeed: "Vitesse de lecture",
    playerExpand: "Ouvrir le lecteur en plein écran",
    playerClose: "Fermer le lecteur",
    playerShare: "Partager cette étape",
    shareCopied: "Lien copié",
    playerVolume: "Volume du lecteur",
    playerMute: "Couper le son",
    playerUnmute: "Réactiver le son",
    playerProgress: "Position de lecture",
    mapOpenFullscreen: "Ouvrir la carte en plein écran",
    mapCloseFullscreen: "Fermer la carte en plein écran",
    languageSelector: "Sélecteur de langue",
    currentLanguage: (language) => `Langue actuelle : ${language}`,
    showMascot: "Afficher la mascotte animée",
    showPhoto: "Afficher la photo de l’étape",
    animateMascot: "Animer la mascotte",
    shareFacebook: "Partager sur Facebook",
    shareX: "Partager sur X",
    shareLinkedin: "Partager sur LinkedIn",
    shareWhatsapp: "Partager sur WhatsApp",
    shareEmail: "Partager par e-mail",
    nextStopPreview: "Prochaine étape",
    openNextStop: "Ouvrir l’étape suivante",
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
    platformsEyebrow: "También encuentras Travel Podcasting Vicopisano en:",
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
    playerRewind: "Retroceder 10 segundos",
    playerForward: "Avanzar 10 segundos",
    playerRepeat: "Repetir pista",
    playerSpeed: "Velocidad de reproducción",
    playerExpand: "Abrir reproductor a pantalla completa",
    playerClose: "Cerrar reproductor",
    playerShare: "Compartir esta etapa",
    shareCopied: "Enlace copiado",
    playerVolume: "Volumen del reproductor",
    playerMute: "Silenciar audio",
    playerUnmute: "Reactivar audio",
    playerProgress: "Posición de reproducción",
    mapOpenFullscreen: "Abrir el mapa a pantalla completa",
    mapCloseFullscreen: "Cerrar el mapa a pantalla completa",
    languageSelector: "Selector de idioma",
    currentLanguage: (language) => `Idioma actual: ${language}`,
    showMascot: "Mostrar mascota animada",
    showPhoto: "Mostrar foto de la etapa",
    animateMascot: "Animar la mascota",
    shareFacebook: "Compartir en Facebook",
    shareX: "Compartir en X",
    shareLinkedin: "Compartir en LinkedIn",
    shareWhatsapp: "Compartir en WhatsApp",
    shareEmail: "Compartir por correo electrónico",
    nextStopPreview: "Siguiente parada",
    openNextStop: "Abrir la siguiente parada",
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
    platformsEyebrow: "Também encontras Travel Podcasting Vicopisano em:",
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
    audioAvailableInLanguages: (count) => `Áudio disponível em ${count} idiomas`,
    listAudioAvailableInLanguages: (count) => `${count} idiomas disponíveis`,
    languageSelectorTitle: "Idioma disponível para a Etapa 1",
    descriptiveText: "Texto descritivo",
    transcriptTitle: "Transcrição",
    playerPrevious: "Voltar para a etapa anterior",
    playerPlay: "Reproduzir áudio",
    playerPause: "Pausar áudio",
    playerNext: "Ir para a próxima etapa",
    playerRewind: "Retroceder 10 segundos",
    playerForward: "Avançar 10 segundos",
    playerRepeat: "Repetir faixa",
    playerSpeed: "Velocidade de reprodução",
    playerExpand: "Abrir leitor em ecrã inteiro",
    playerClose: "Fechar leitor",
    playerShare: "Partilhar esta etapa",
    shareCopied: "Ligação copiada",
    playerVolume: "Volume do leitor",
    playerMute: "Silenciar áudio",
    playerUnmute: "Reativar áudio",
    playerProgress: "Posição de reprodução",
    mapOpenFullscreen: "Abrir o mapa em ecrã inteiro",
    mapCloseFullscreen: "Fechar o mapa em ecrã inteiro",
    languageSelector: "Seletor de idioma",
    currentLanguage: (language) => `Idioma atual: ${language}`,
    showMascot: "Mostrar mascote animada",
    showPhoto: "Mostrar fotografia da etapa",
    animateMascot: "Animar a mascote",
    shareFacebook: "Partilhar no Facebook",
    shareX: "Partilhar no X",
    shareLinkedin: "Partilhar no LinkedIn",
    shareWhatsapp: "Partilhar no WhatsApp",
    shareEmail: "Partilhar por e-mail",
    nextStopPreview: "Próxima paragem",
    openNextStop: "Abrir a próxima paragem",
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
    introLead: "Я Филиппо Брунеллески.",
    intro:
      "Когда-то я изучал эти стены, чтобы представить оборону, проходы и точки обзора. Теперь я веду вас по историям поселка, остановка за остановкой. Следуйте за мной через башни, переходы и виды борго: каждая остановка открывает голос, историю, частицу Vicopisano.",
    instructionsTitle: "Инструкции",
    instructionsText:
      "Карта показывает полный маршрут с остановками от 1 до 7. Выберите остановку в списке или нажмите на маркер: сайт выделит точку, отцентрирует карту и откроет соответствующие материалы.",
    routeTitle: "Остановки маршрута",
    routeSubtitle: "7 точек прослушивания в поселке.",
    platformsEyebrow: "Travel Podcasting Vicopisano также доступен на:",
    shareTitle: "Поделиться с друзьями",
    locateMe: "Найти мое местоположение",
    locatingMe: "Поиск вашего местоположения...",
    locationFound: "Местоположение найдено на карте.",
    geolocationUnsupported: "Этот браузер не поддерживает геолокацию.",
    geolocationDenied: "Доступ к местоположению запрещен.",
    geolocationUnavailable: "Местоположение недоступно.",
    geolocationTimeout: "Время поиска местоположения истекло.",
    geolocationHttpsHint: "Для надежной геолокации на смартфоне требуется HTTPS.",
    detailEmptyTitle: "Выберите остановку",
    detailEmptyText:
      "Откройте остановку из списка или на карте, чтобы увидеть название, описание и аудиоплеер.",
    durationUnavailable: "Продолжительность недоступна",
    audioAvailable: "Аудио доступно",
    audioUnavailable: "Аудио пока недоступно",
    audioAvailableInLanguages: (count) => `Аудио доступно на ${count} языках`,
    listAudioAvailableInLanguages: (count) => `Доступно языков: ${count}`,
    languageSelectorTitle: "Доступный язык для остановки 1",
    descriptiveText: "Описание",
    transcriptTitle: "Расшифровка",
    playerPrevious: "Вернуться к предыдущей остановке",
    playerPlay: "Воспроизвести аудио",
    playerPause: "Приостановить аудио",
    playerNext: "Перейти к следующей остановке",
    playerRewind: "Назад на 10 секунд",
    playerForward: "Вперед на 10 секунд",
    playerRepeat: "Повторить дорожку",
    playerSpeed: "Скорость воспроизведения",
    playerExpand: "Открыть проигрыватель на весь экран",
    playerClose: "Закрыть проигрыватель",
    playerShare: "Поделиться этой остановкой",
    shareCopied: "Ссылка скопирована",
    playerVolume: "Громкость проигрывателя",
    playerMute: "Выключить звук",
    playerUnmute: "Включить звук",
    playerProgress: "Позиция воспроизведения",
    mapOpenFullscreen: "Открыть карту на весь экран",
    mapCloseFullscreen: "Закрыть полноэкранную карту",
    languageSelector: "Выбор языка",
    currentLanguage: (language) => `Текущий язык: ${language}`,
    showMascot: "Показать анимированного персонажа",
    showPhoto: "Показать фотографию остановки",
    animateMascot: "Запустить анимацию персонажа",
    shareFacebook: "Поделиться в Facebook",
    shareX: "Поделиться в X",
    shareLinkedin: "Поделиться в LinkedIn",
    shareWhatsapp: "Поделиться в WhatsApp",
    shareEmail: "Поделиться по электронной почте",
    nextStopPreview: "Следующая остановка",
    openNextStop: "Открыть следующую остановку",
    brandName: "Travel podcasting",
    brandTag: "Comune di Vicopisano",
    mainTitle: "Buon dì!",
    mapStageNote: "Нажмите на маркеры или используйте список остановок ниже, чтобы открыть аудиоплеер маршрута.",
    highlightTitle: "Полноэкранный режим",
    highlightText: "Карта остается центром приложения, а закрепленный внизу проигрыватель сопровождает прослушивание, не мешая навигации.",
    languageNames: {
      IT: "Итальянский",
      EN: "Английский",
      DE: "Немецкий",
      FR: "Французский",
      ES: "Испанский",
      PT: "Португальский",
      RU: "Русский",
    },
  },
};

const statusMessages = {
  IT: {
    offlineStatus: "Sei offline o la connessione è instabile.",
    mapLoadError: "La mappa non si sta caricando bene. Riprova tra un attimo.",
    audioLoading: "Caricamento audio...",
    audioBuffering: "Buffering audio...",
    audioLoadError: "L'audio non è disponibile in questo momento. Riprova tra poco.",
  },
  EN: {
    offlineStatus: "You are offline or the connection is unstable.",
    mapLoadError: "The map is not loading correctly. Please try again in a moment.",
    audioLoading: "Loading audio...",
    audioBuffering: "Buffering audio...",
    audioLoadError: "Audio is not available right now. Please try again shortly.",
  },
  DE: {
    offlineStatus: "Sie sind offline oder die Verbindung ist instabil.",
    mapLoadError: "Die Karte wird nicht richtig geladen. Bitte versuchen Sie es gleich erneut.",
    audioLoading: "Audio wird geladen...",
    audioBuffering: "Audio wird gepuffert...",
    audioLoadError: "Das Audio ist im Moment nicht verfügbar. Bitte versuchen Sie es in Kürze erneut.",
  },
  FR: {
    offlineStatus: "Vous êtes hors ligne ou la connexion est instable.",
    mapLoadError: "La carte ne se charge pas correctement. Réessayez dans un instant.",
    audioLoading: "Chargement de l'audio...",
    audioBuffering: "Mise en mémoire tampon...",
    audioLoadError: "L’audio n’est pas disponible pour le moment. Réessayez dans un instant.",
  },
  ES: {
    offlineStatus: "Estás sin conexión o la red es inestable.",
    mapLoadError: "El mapa no se está cargando correctamente. Vuelve a intentarlo en un momento.",
    audioLoading: "Cargando audio...",
    audioBuffering: "Cargando el audio...",
    audioLoadError: "El audio no está disponible en este momento. Vuelve a intentarlo dentro de poco.",
  },
  PT: {
    offlineStatus: "Estás offline ou a ligação está instável.",
    mapLoadError: "O mapa não está a carregar corretamente. Tenta novamente dentro de instantes.",
    audioLoading: "A carregar áudio...",
    audioBuffering: "A preparar o áudio...",
    audioLoadError: "O áudio não está disponível neste momento. Tenta novamente daqui a pouco.",
  },
  RU: {
    offlineStatus: "Вы не в сети или соединение нестабильно.",
    mapLoadError: "Карта загружается с ошибкой. Повторите попытку через несколько секунд.",
    audioLoading: "Загрузка аудио...",
    audioBuffering: "Буферизация аудио...",
    audioLoadError: "Аудио сейчас недоступно. Повторите попытку немного позже.",
  },
};

const onboardingUiStrings = {
  IT: {
    onboardingTitle: "Scegli la lingua per iniziare il percorso",
    onboardingHint: "Potrai cambiarla in ogni momento.",
    helpButton: "Aiuto",
    guideSkip: "Chiudi",
    guideBack: "Indietro",
    guideNext: "Avanti",
    guideDone: "Fine",
    guideMap: "Tocca un numero sulla mappa per aprire una tappa e ascoltare il racconto.",
    guideDirections: "Da qui apri Google Maps con le indicazioni a piedi verso la tappa selezionata.",
    guideStops: "Puoi scegliere una tappa anche dalla lista.",
    guidePlayer: "Il player resta sempre disponibile in basso. Toccalo per aprire la vista completa.",
    guideFullPlayer: "Questa è la vista completa del player: controlli l'audio, apri la trascrizione e passi alle tappe vicine.",
  },
  EN: {
    onboardingTitle: "Choose your language to start the route",
    onboardingHint: "You can change it at any time.",
    helpButton: "Help",
    guideSkip: "Close",
    guideBack: "Back",
    guideNext: "Next",
    guideDone: "Done",
    guideMap: "The map shows the route stops. Tap a number to open the stop and start the player.",
    guideDirections: "This button opens Google Maps with walking directions to the selected stop.",
    guideStops: "You can also choose a stop from the list: the site centers the map and prepares the audio.",
    guidePlayer: "The player stays at the bottom during the visit. Click or tap the player bar to open the full view.",
    guideFullPlayer: "This is the full player view: control the audio, open the transcript and move between nearby stops.",
  },
  DE: {
    onboardingTitle: "Wähle deine Sprache, um die Route zu starten",
    onboardingHint: "Du kannst sie jederzeit ändern.",
    helpButton: "Hilfe",
    guideSkip: "Schließen",
    guideBack: "Zurück",
    guideNext: "Weiter",
    guideDone: "Fertig",
    guideMap: "Die Karte zeigt die Stationen der Route. Tippe auf eine Nummer, um die Station zu öffnen und den Player zu starten.",
    guideDirections: "Diese Taste öffnet Google Maps mit Fußweg-Hinweisen zur ausgewählten Station.",
    guideStops: "Du kannst eine Station auch aus der Liste wählen: Die Karte wird zentriert und das Audio vorbereitet.",
    guidePlayer: "Der Player bleibt während des Besuchs unten sichtbar. Tippe oder klicke auf die Player-Leiste, um die Vollansicht zu öffnen.",
    guideFullPlayer: "Das ist die Vollansicht des Players: Steuere das Audio, öffne die Transkription und wechsle zu nahen Stationen.",
  },
  FR: {
    onboardingTitle: "Choisissez la langue pour commencer le parcours",
    onboardingHint: "Vous pourrez la changer à tout moment.",
    helpButton: "Aide",
    guideSkip: "Fermer",
    guideBack: "Retour",
    guideNext: "Suivant",
    guideDone: "Terminer",
    guideMap: "La carte affiche les étapes du parcours. Touchez un numéro pour ouvrir l’étape et lancer le lecteur.",
    guideDirections: "Ce bouton ouvre Google Maps avec l’itinéraire à pied vers l’étape sélectionnée.",
    guideStops: "Vous pouvez aussi choisir une étape dans la liste : le site centre la carte et prépare l’audio.",
    guidePlayer: "Le lecteur reste en bas pendant la visite. Touchez ou cliquez sur la barre du lecteur pour ouvrir la vue complète.",
    guideFullPlayer: "Voici la vue complète du lecteur : contrôlez l’audio, ouvrez la transcription et passez aux étapes voisines.",
  },
  ES: {
    onboardingTitle: "Elige el idioma para iniciar el recorrido",
    onboardingHint: "Podrás cambiarlo en cualquier momento.",
    helpButton: "Ayuda",
    guideSkip: "Cerrar",
    guideBack: "Atrás",
    guideNext: "Siguiente",
    guideDone: "Fin",
    guideMap: "El mapa muestra las paradas del recorrido. Toca un número para abrir la parada e iniciar el reproductor.",
    guideDirections: "Este botón abre Google Maps con indicaciones a pie hacia la parada seleccionada.",
    guideStops: "También puedes elegir una parada desde la lista: el sitio centra el mapa y prepara el audio.",
    guidePlayer: "El reproductor permanece abajo durante la visita. Haz clic o toca la barra del reproductor para abrir la vista completa.",
    guideFullPlayer: "Esta es la vista completa del reproductor: controla el audio, abre la transcripción y pasa a las paradas cercanas.",
  },
  PT: {
    onboardingTitle: "Escolhe o idioma para iniciar o percurso",
    onboardingHint: "Podes alterá-lo a qualquer momento.",
    helpButton: "Ajuda",
    guideSkip: "Fechar",
    guideBack: "Voltar",
    guideNext: "Seguinte",
    guideDone: "Fim",
    guideMap: "O mapa mostra as paragens do percurso. Toca num número para abrir a paragem e iniciar o leitor.",
    guideDirections: "Este botão abre o Google Maps com indicações a pé até à paragem selecionada.",
    guideStops: "Também podes escolher uma paragem na lista: o site centra o mapa e prepara o áudio.",
    guidePlayer: "O leitor fica em baixo durante a visita. Clica ou toca na barra do leitor para abrir a vista completa.",
    guideFullPlayer: "Esta é a vista completa do leitor: controla o áudio, abre a transcrição e passa para as paragens próximas.",
  },
  RU: {
    onboardingTitle: "Выберите язык, чтобы начать маршрут",
    onboardingHint: "Язык можно изменить в любой момент.",
    helpButton: "Помощь",
    guideSkip: "Закрыть",
    guideBack: "Назад",
    guideNext: "Далее",
    guideDone: "Готово",
    guideMap: "Карта показывает остановки маршрута. Нажмите на номер, чтобы открыть остановку и запустить проигрыватель.",
    guideDirections: "Эта кнопка открывает Google Maps с пешим маршрутом до выбранной остановки.",
    guideStops: "Остановку также можно выбрать в списке: сайт отцентрирует карту и подготовит аудио.",
    guidePlayer: "Проигрыватель остается внизу во время прогулки. Нажмите на панель проигрывателя, чтобы открыть полный вид.",
    guideFullPlayer: "Это полный вид проигрывателя: управляйте аудио, открывайте расшифровку и переходите к соседним остановкам.",
  },
};

function getUiStrings(languageCode = "IT") {
  const baseStrings = uiStrings[languageCode] || uiStrings.IT;
  const onboardingStrings = onboardingUiStrings[languageCode] || onboardingUiStrings.EN;
  return { ...baseStrings, ...onboardingStrings };
}

function getStopTitle(tappa, languageCode = currentLanguage) {
  const titles = stopTitles[tappa.numero];
  if (!titles) {
    return tappa.titolo;
  }

  return titles.IT || tappa.titolo;
}

function getUrlState() {
  const params = new URLSearchParams(window.location.search);
  const rawStop = params.get("tappa") || params.get("stop");
  const stopNumber = Number.parseInt(rawStop || "", 10);
  const storedStop = Number.parseInt(getStoredValue(LAST_STOP_STORAGE_KEY), 10);
  const linkedStop = tappe.find((tappa) => tappa.numero === stopNumber) ||
    tappe.find((tappa) => tappa.numero === storedStop) || null;
  const rawLanguage = params.get("lang") || params.get("lingua");
  const linkedLanguage = rawLanguage ? rawLanguage.trim().toUpperCase() : null;

  return {
    stop: linkedStop,
    language: siteLanguages.includes(linkedLanguage) ? linkedLanguage : null,
  };
}

function normalizeLanguageCode(value) {
  if (!value) {
    return null;
  }

  const normalized = String(value).trim().slice(0, 2).toUpperCase();
  return siteLanguages.includes(normalized) ? normalized : null;
}

function getStoredValue(key) {
  try {
    return window.localStorage?.getItem(key) || "";
  } catch (error) {
    return "";
  }
}

function setStoredValue(key, value) {
  try {
    window.localStorage?.setItem(key, value);
  } catch (error) {
    // Local storage can be unavailable in private browsing or strict contexts.
  }
}

function getBrowserLanguage() {
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of browserLanguages) {
    const normalized = normalizeLanguageCode(language);
    if (normalized) {
      return normalized;
    }
  }

  return "EN";
}

function getInitialLanguage(urlLanguage) {
  return (
    normalizeLanguageCode(urlLanguage) ||
    normalizeLanguageCode(getStoredValue(LANGUAGE_STORAGE_KEY)) ||
    getBrowserLanguage() ||
    "EN"
  );
}

function syncSelectedLanguagesForCurrentLanguage() {
  tappe.forEach((tappa) => {
    const option = getAudioOptions(tappa).find((audioOption) => audioOption.codice === currentLanguage);
    if (option) {
      selectedLanguageByStop.set(tappa.numero, currentLanguage);
    }
  });
}

function syncUrlState({ replace = false } = {}) {
  if (!window.history || !activeStopNumber) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  params.set("tappa", String(activeStopNumber));
  params.set("lang", currentLanguage.toLowerCase());

  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  const currentUrl = `${window.location.pathname}${window.location.search}`;

  if (nextUrl === currentUrl) {
    return;
  }

  const method = replace ? "replaceState" : "pushState";
  window.history[method]({ tappa: activeStopNumber, lang: currentLanguage }, "", nextUrl);
}

function setCurrentLanguage(languageCode, options = {}) {
  currentLanguage = normalizeLanguageCode(languageCode) || "EN";
  syncSelectedLanguagesForCurrentLanguage();
  closeGlobalLanguageMenu();

  if (options.persist !== false) {
    setStoredValue(LANGUAGE_STORAGE_KEY, currentLanguage);
  }

  renderStaticTexts();
  renderGlobalLanguageSelector();
  renderOnboardingTexts();
  renderOnboardingLanguageSelector();
  renderStopsList();
  refreshMarkerPopups();

  // Keep an already open help guide aligned with the newly selected UI language.
  if (guideLayer && !guideLayer.classList.contains("is-hidden")) {
    renderGuideStep();
  }

  if (activeStopNumber !== null) {
    const activeStop = tappe.find((tappa) => tappa.numero === activeStopNumber);
    if (activeStop) {
      focusStop(activeStop, {
        skipFly: true,
        preservePlayback: true,
        replaceUrl: true,
        syncUrl: options.syncUrl,
      });
    }
  } else if (options.syncUrl !== false) {
    syncUrlState({ replace: true });
  }

  pulseActiveLanguageChips();
  if (options.animate !== false) {
    animateTranslatedContent();
  }
}

function setLocateStatus(message = "") {
  locateMeStatus.textContent = message;
}

function setLocateButtonState(state = "idle", message = "") {
  if (!locateMeButton) {
    return;
  }

  window.clearTimeout(geolocationFeedbackTimer);
  locateMeButton.classList.remove("is-locating", "is-location-success", "is-location-error");
  locateMeButton.disabled = state === "locating";
  locateMeButton.setAttribute("aria-busy", String(state === "locating"));

  const icon = locateMeButton.querySelector(".material-symbols-rounded");
  if (icon) {
    icon.textContent = state === "success"
      ? "check"
      : state === "error"
        ? "location_disabled"
        : "my_location";
  }

  if (state !== "idle") {
    locateMeButton.classList.add(
      state === "locating"
        ? "is-locating"
        : state === "success"
          ? "is-location-success"
          : "is-location-error",
    );
  }

  const strings = getUiStrings(currentLanguage);
  const accessibleLabel = message || (state === "locating" ? strings.locatingMe : strings.locateMe);
  locateMeButton.setAttribute("aria-label", accessibleLabel);
  locateMeButton.title = accessibleLabel;

  if (state === "success" || state === "error") {
    geolocationFeedbackTimer = window.setTimeout(() => {
      setLocateButtonState("idle");
    }, reducedMotionQuery.matches ? 500 : 1100);
  }
}

function replayAnimationClass(element, className, duration = 420) {
  if (!element) {
    return;
  }

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);

  window.setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}

function getRouteSelectionDuration() {
  return Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--tp-motion-route-selection"),
  ) || 620;
}

function scrollRouteIntoView() {
  const routeExperience = document.querySelector(".route-experience");
  if (!routeExperience) {
    return;
  }

  const targetTop = Math.max(
    0,
    Math.min(
      window.scrollY + routeExperience.getBoundingClientRect().top - 20,
      document.documentElement.scrollHeight - window.innerHeight,
    ),
  );

  if (reducedMotionQuery.matches || Math.abs(targetTop - window.scrollY) < 2) {
    window.scrollTo({ top: targetTop, behavior: "auto" });
    return;
  }

  if (routeScrollAnimationFrame !== null) {
    window.cancelAnimationFrame(routeScrollAnimationFrame);
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const duration = getRouteSelectionDuration();
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 4);
    window.scrollTo({ top: startTop + distance * easedProgress, behavior: "auto" });

    if (progress < 1) {
      routeScrollAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    routeScrollAnimationFrame = null;
  };

  routeScrollAnimationFrame = window.requestAnimationFrame(step);
}

function scrollMapStageIntoView() {
  if (!mapStageFrame) {
    return;
  }

  const targetTop = Math.max(
    0,
    Math.min(
      window.scrollY + mapStageFrame.getBoundingClientRect().top - 12,
      document.documentElement.scrollHeight - window.innerHeight,
    ),
  );

  if (reducedMotionQuery.matches || Math.abs(targetTop - window.scrollY) < 2) {
    window.scrollTo({ top: targetTop, behavior: "auto" });
    return;
  }

  if (routeScrollAnimationFrame !== null) {
    window.cancelAnimationFrame(routeScrollAnimationFrame);
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const duration = getRouteSelectionDuration();
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 4);
    window.scrollTo({ top: startTop + distance * easedProgress, behavior: "auto" });

    if (progress < 1) {
      routeScrollAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    routeScrollAnimationFrame = null;
  };

  routeScrollAnimationFrame = window.requestAnimationFrame(step);
}

function scrollPageToTop() {
  if (reducedMotionQuery.matches || window.scrollY < 2) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  if (routeScrollAnimationFrame !== null) {
    window.cancelAnimationFrame(routeScrollAnimationFrame);
  }

  const startTop = window.scrollY;
  const duration = getRouteSelectionDuration();
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 4);
    window.scrollTo({ top: startTop * (1 - easedProgress), behavior: "auto" });

    if (progress < 1) {
      routeScrollAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    routeScrollAnimationFrame = null;
  };

  routeScrollAnimationFrame = window.requestAnimationFrame(step);
}

function animateTranslatedContent() {
  const textTargets = [
    eyebrowText,
    introLeadText,
    introText,
    stopsTitle,
    stopsSubtitle,
    platformsEyebrow,
    shareTitle,
    detailTitle,
    detailDescription,
    miniPlayerTitle,
    miniPlayerSubtitle,
    brandNameEl,
    brandTagEl,
    landingTitle,
    mapStageNote,
    detailCopyTitle,
  ];

  textTargets.forEach((element) => {
    replayAnimationClass(element, "is-translating");
  });

  if (stopsList) {
    stopsList.querySelectorAll(".stop-title, .stop-meta, .stop-availability").forEach((element) => {
      replayAnimationClass(element, "is-translating");
    });
  }
}

function pulseActiveLanguageChips() {
  document.querySelectorAll(".language-chip.is-active").forEach((chip) => {
    replayAnimationClass(chip, "is-pulsing", 500);
  });
}

function pulseActiveStopCard(stopNumber = activeStopNumber) {
  const activeButton = buttonsByStop.get(stopNumber);
  replayAnimationClass(activeButton, "is-pulsing", Math.min(getRouteSelectionDuration(), 560));
}

function clearRouteSelectionTimers() {
  routeSelectionTimers.forEach((timer) => window.clearTimeout(timer));
  routeSelectionTimers = [];
}

function scheduleRouteSelection(callback, delay) {
  const timer = window.setTimeout(() => {
    routeSelectionTimers = routeSelectionTimers.filter((item) => item !== timer);
    callback();
  }, delay);
  routeSelectionTimers.push(timer);
}

function animateRouteSelectionCard(stopNumber = activeStopNumber) {
  const activeButton = buttonsByStop.get(stopNumber);
  replayAnimationClass(activeButton, "is-route-selecting", getRouteSelectionDuration());
  pulseActiveStopCard(stopNumber);
}

function reactToTransport(group, reaction) {
  replayAnimationClass(group, `is-transport-${reaction}`, 420);
}

function highlightActiveMarker(stopNumber = activeStopNumber) {
  markersByStop.forEach((marker, numero) => {
    const isSelected = numero === stopNumber;
    marker.setZIndexOffset(isSelected ? 1000 : 0);

    const markerElement = marker.getElement()?.querySelector(".map-marker");
    if (!markerElement) {
      return;
    }

    markerElement.classList.toggle("is-selected", isSelected);
    markerElement.classList.remove("is-highlighted");

    if (isSelected) {
      void markerElement.offsetWidth;
      markerElement.classList.add("is-highlighted");
      window.setTimeout(() => {
        markerElement.classList.remove("is-highlighted");
      }, getRouteSelectionDuration() + 80);
    }
  });
}

function getStatusMessage(statusKey) {
  if (!statusKey) {
    return "";
  }

  const localizedStatusMessages = statusMessages[currentLanguage] || statusMessages.IT;
  return localizedStatusMessages[statusKey] || statusMessages.IT[statusKey] || "";
}

function setMapLoadStatusByKey(statusKey = "") {
  currentMapStatusKey = statusKey;

  if (!mapLoadStatus) {
    return;
  }

  if (!statusKey) {
    mapLoadStatus.textContent = "";
    mapLoadStatus.classList.remove("is-visible");
    return;
  }

  mapLoadStatus.textContent = getStatusMessage(statusKey);
  mapLoadStatus.classList.add("is-visible");
}

function setAudioFeedbackByKey(statusKey = "") {
  currentAudioStatusKey = statusKey;

  if (!audioFeedback) {
    return;
  }

  if (!statusKey) {
    audioFeedback.textContent = "";
    audioFeedback.classList.remove("is-visible");
    return;
  }

  audioFeedback.textContent = getStatusMessage(statusKey);
  audioFeedback.classList.add("is-visible");
}

function bindMapLoadFeedback(tileLayer) {
  if (!tileLayer) {
    return;
  }

  tileLayer.on("load", () => {
    hasMapLoadedTiles = true;
    tileErrorCount = 0;

    if (currentMapStatusKey === "mapLoadError" || currentMapStatusKey === "offlineStatus") {
      setMapLoadStatusByKey("");
    }
  });

  tileLayer.on("tileerror", () => {
    tileErrorCount += 1;

    if (tileErrorCount >= 2 || !hasMapLoadedTiles) {
      setMapLoadStatusByKey(navigator.onLine ? "mapLoadError" : "offlineStatus");
    }
  });

  window.addEventListener("offline", () => {
    setMapLoadStatusByKey("offlineStatus");
    if (currentAudio) {
      setAudioFeedbackByKey("offlineStatus");
    }
  });

  window.addEventListener("online", () => {
    if (currentMapStatusKey === "offlineStatus") {
      setMapLoadStatusByKey("");
    }

    if (currentAudioStatusKey === "offlineStatus") {
      setAudioFeedbackByKey("");
    }
  });
}

function consumeControlEvent(event) {
  if (!event) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
}

function stopControlPropagation(event) {
  if (!event) {
    return;
  }

  event.stopPropagation();
}

function syncMiniPlayerReservedSpace() {
  const root = document.documentElement;
  const safeBuffer = 24;

  if (!miniPlayer || miniPlayer.classList.contains("is-hidden")) {
    root.style.setProperty("--mini-player-reserved-space", `${118 + safeBuffer}px`);
    return;
  }

  const measuredHeight = Math.ceil(miniPlayer.getBoundingClientRect().height);
  const reservedSpace = Math.max(118, measuredHeight + safeBuffer);
  root.style.setProperty("--mini-player-reserved-space", `${reservedSpace}px`);
}

function bindMiniPlayerLayoutSync() {
  syncMiniPlayerReservedSpace();

  if (typeof ResizeObserver === "function" && miniPlayer && !miniPlayerResizeObserver) {
    miniPlayerResizeObserver = new ResizeObserver(() => {
      syncMiniPlayerReservedSpace();
      if (mapStageFrame.classList.contains("is-expanded")) {
        requestAnimationFrame(() => map.invalidateSize());
      }
    });
    miniPlayerResizeObserver.observe(miniPlayer);
  }

  window.addEventListener("resize", syncMiniPlayerReservedSpace);
  window.addEventListener("orientationchange", syncMiniPlayerReservedSpace);
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
    setLocateButtonState("error", strings.geolocationUnsupported);
    return;
  }

  setLocateStatus(strings.locatingMe);
  setLocateButtonState("locating", strings.locatingMe);

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
      setLocateButtonState("success", strings.locationFound);
    },
    (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        const message = secureContext
          ? strings.geolocationDenied
          : `${strings.geolocationDenied} ${strings.geolocationHttpsHint}`;
        setLocateStatus(message);
        setLocateButtonState("error", message);
        return;
      }

      if (error.code === error.TIMEOUT) {
        setLocateStatus(strings.geolocationTimeout);
        setLocateButtonState("error", strings.geolocationTimeout);
        return;
      }

      setLocateStatus(strings.geolocationUnavailable);
      setLocateButtonState("error", strings.geolocationUnavailable);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 30000,
    }
  );
}

function bindLocateButton() {
  if (!locateMeButton) {
    return;
  }

  L.DomEvent.disableClickPropagation(locateMeButton);
  L.DomEvent.disableScrollPropagation(locateMeButton);

  locateMeButton.addEventListener("click", (event) => {
    consumeControlEvent(event);
    locateUser();
  });
}

function isMapFullscreenActive() {
  return mapStageFrame?.classList.contains("is-expanded");
}

function updateMapExploreStop(tappa = activeStopNumber ? tappe.find((item) => item.numero === activeStopNumber) : null) {
  if (!mapExploreStop) {
    return;
  }

  const shouldShow = Boolean(isMapFullscreenActive() && tappa);
  mapExploreStop.hidden = !shouldShow;
  if (!shouldShow || !tappa) {
    return;
  }

  const selectedOption = getSelectedAudioOption(tappa);
  const strings = getUiStrings(currentLanguage);
  const hasAudio = Boolean(selectedOption?.audioDisponibile);
  mapExploreStopNumber.textContent = tappa.numero;
  mapExploreStopTitle.textContent = getStopTitle(tappa);
  mapExploreStopAudio.textContent = hasAudio ? "headphones" : "headphones_off";
  mapExploreStop.setAttribute(
    "aria-label",
    `${tappa.numero}. ${getStopTitle(tappa)}${hasAudio ? `, ${strings.audioAvailable.toLowerCase()}` : ""}`,
  );
  mapExploreOpenPlayer?.setAttribute("aria-label", strings.playerExpand);
}

function getDirectionsLabel() {
  const labels = {
    IT: "Apri indicazioni",
    EN: "Open directions",
    DE: "Route öffnen",
    FR: "Ouvrir l'itinéraire",
    ES: "Abrir indicaciones",
    PT: "Abrir direções",
    RU: "Открыть маршрут",
  };

  return labels[currentLanguage] || labels.IT;
}

function updateMapDirectionsButton(tappa = activeStopNumber ? tappe.find((item) => item.numero === activeStopNumber) : null) {
  if (!mapDirectionsButton) {
    return;
  }

  mapDirectionsButton.hidden = !tappa;
  if (!tappa) {
    return;
  }

  const label = getDirectionsLabel();
  const title = getStopTitle(tappa);
  const destination = encodeURIComponent(`${tappa.latitudine},${tappa.longitudine}`);
  mapDirectionsButton.href = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=walking`;
  mapDirectionsButton.setAttribute("aria-label", `${label}: ${title}`);
  mapDirectionsButton.title = `${label}: ${title}`;
}

function cueMapDirectionsButton() {
  if (!mapDirectionsButton || mapDirectionsButton.hidden) {
    return;
  }

  if (mapDirectionsCueTimer !== null) {
    window.clearTimeout(mapDirectionsCueTimer);
  }

  mapDirectionsButton.classList.remove("is-directions-cued");
  void mapDirectionsButton.offsetWidth;
  mapDirectionsButton.classList.add("is-directions-cued");
  mapDirectionsCueTimer = window.setTimeout(() => {
    mapDirectionsButton.classList.remove("is-directions-cued");
    mapDirectionsCueTimer = null;
  }, 1100);
}

function updateStopPreview(tappa, { animate = false } = {}) {
  if (!stopPreview || !tappa) {
    return;
  }

  const isDesktopRoute = window.matchMedia("(min-width: 1024px)").matches;
  const routeExperience = document.querySelector(".route-experience");
  const activeStopItem = buttonsByStop.get(tappa.numero)?.closest("li");
  if (isDesktopRoute && routeExperience && stopPreview.parentElement !== routeExperience) {
    routeExperience.insertBefore(stopPreview, document.querySelector(".stops-panel"));
  } else if (!isDesktopRoute && activeStopItem && stopPreview.parentElement !== activeStopItem) {
    activeStopItem.appendChild(stopPreview);
  }

  const title = getStopTitle(tappa);

  stopPreview.hidden = false;
  stopPreviewNumber.textContent = tappa.numero;
  stopPreviewTitle.textContent = title;
  stopPreviewImage.src = STOP_ARTWORKS[tappa.numero] || WHITE_ARTWORK;
  stopPreviewImage.alt = `Immagine ${title}`;

  if (animate && !reducedMotionQuery.matches) {
    replayAnimationClass(stopPreview, "is-entering", getRouteSelectionDuration());
  }
}

function updateMapFullscreenButton() {
  if (!mapFullscreenButton) {
    return;
  }

  const isFullscreen = isMapFullscreenActive();
  const strings = getUiStrings(currentLanguage);
  const label = isFullscreen ? strings.mapCloseFullscreen : strings.mapOpenFullscreen;
  const fullscreenIcon = mapFullscreenButton.querySelector(".material-symbols-rounded");
  if (fullscreenIcon) {
    fullscreenIcon.textContent = isFullscreen ? "fullscreen_exit" : "fullscreen";
  }
  mapFullscreenButton.setAttribute("aria-label", label);
  mapFullscreenButton.title = label;
}

async function toggleMapFullscreen() {
  if (!mapStageFrame) {
    return;
  }

  mapStageFrame.classList.toggle("is-expanded");
  document.body.classList.toggle("is-map-fullscreen", isMapFullscreenActive());
  updateMapFullscreenButton();
  updateMapExploreStop();
  setTimeout(() => map.invalidateSize(), 240);
}

function bindMapFullscreenButton() {
  if (!mapFullscreenButton || !mapStageFrame) {
    return;
  }

  L.DomEvent.disableClickPropagation(mapFullscreenButton);
  L.DomEvent.disableScrollPropagation(mapFullscreenButton);
  updateMapFullscreenButton();
  mapFullscreenButton.addEventListener("click", (event) => {
    consumeControlEvent(event);
    toggleMapFullscreen();
  });

  mapExploreOpenPlayer?.addEventListener("click", (event) => {
    consumeControlEvent(event);
    openPlayerOverlay(event.currentTarget);
  });

}

function getLanguageDisplayName(languageCode, uiLanguage = currentLanguage) {
  const strings = getUiStrings(uiLanguage);
  return strings.languageNames?.[languageCode] || languageCode;
}

function buildLanguageChips(
  container,
  { languageTitle, includeLabel = false, onSelect = null } = {},
) {
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
    const languageName = getLanguageDisplayName(languageCode, languageCode);
    const isRuntimeGlobal = container === globalLanguageChips;
    const isOnboarding = container === onboardingLanguageChips;
    chip.type = "button";
    chip.className = "language-chip tp-chip";
    chip.classList.toggle("runtime-language-option", isRuntimeGlobal);
    chip.classList.toggle("onboarding-language-option", isOnboarding);
    chip.textContent = isRuntimeGlobal || isOnboarding ? `${languageCode} · ${languageName}` : languageCode;
    chip.classList.toggle("is-active", languageCode === currentLanguage);
    if (container === playerLanguageChips || container === globalLanguageChips) {
      chip.setAttribute("role", "option");
    }
    chip.setAttribute("aria-pressed", languageCode === currentLanguage ? "true" : "false");
    chip.setAttribute("aria-selected", languageCode === currentLanguage ? "true" : "false");
    chip.setAttribute("aria-label", languageName);
    chip.title = languageName;
    chip.addEventListener("click", () => {
      if (onSelect) {
        onSelect(languageCode, chip);
        return;
      }

      if (languageCode === currentLanguage) {
        if (isRuntimeGlobal) {
          closeGlobalLanguageMenu();
        }
        replayAnimationClass(chip, "is-pulsing", 460);
        return;
      }

      setCurrentLanguage(languageCode);
    });
    fragment.appendChild(chip);
  });

  container.appendChild(fragment);
}

function hasMeaningfulDuration(durationText) {
  return Boolean(durationText && durationText.trim());
}

function preloadMascotFrames() {
  Object.entries(MASCOT_FRAME_PATHS).forEach(([frame, src]) => {
    if (mascotFrameImages.has(frame)) {
      return;
    }

    const image = new Image();
    image.decoding = "async";
    image.loading = "eager";
    image.src = src;
    mascotFrameImages.set(frame, image);

    if (image.decode) {
      image.decode().catch(() => {});
    }
  });
}

function getMascotTargets() {
  return [heroMascot, detailMascotImage].filter(Boolean);
}

function getMascotMotionShells() {
  return getMascotTargets()
    .map((target) => target.closest(".mascot-motion-shell"))
    .filter(Boolean);
}

function getMascotBreathingShells() {
  return getMascotTargets()
    .map((target) => target.closest(".mascot-breathing-shell"))
    .filter(Boolean);
}

function supportsMascotDirectInteraction(shell) {
  return mascotTapQuery.matches || shell.classList.contains("mascot-motion-shell--hero");
}

function syncMascotTapSemantics() {
  const strings = getUiStrings(currentLanguage);
  getMascotMotionShells().forEach((shell) => {
    if (supportsMascotDirectInteraction(shell)) {
      shell.setAttribute("role", "button");
      shell.setAttribute("tabindex", "0");
      shell.setAttribute("aria-label", strings.animateMascot);
      return;
    }

    shell.removeAttribute("role");
    shell.removeAttribute("tabindex");
    shell.removeAttribute("aria-label");
  });
}

function createMascotMotionController() {
  const timedClasses = [
    "is-idle-sway",
    "is-play-reaction",
    "is-pause-reaction",
    "is-end-reaction",
    "is-speaking-emphasis",
    "is-stop-transition",
  ];
  let idleTimer = null;
  let emphasisTimer = null;
  let reactionTimer = null;
  let state = "idle";
  let visible = detailArtworkMode === "mascot";
  let playing = false;
  let reduced = reducedMotionQuery.matches;

  const randomBetween = (min, max) => min + Math.random() * (max - min);

  const shells = () => getMascotMotionShells();

  const clearTimer = (timer) => {
    if (timer) {
      window.clearTimeout(timer);
    }
    return null;
  };

  const clearReactiveClasses = () => {
    shells().forEach((shell) => {
      timedClasses.forEach((className) => shell.classList.remove(className));
    });
  };

  const runClass = (className, duration) => {
    if (reduced) {
      return;
    }

    clearReactiveClasses();
    shells().forEach((shell) => {
      void shell.offsetWidth;
      shell.classList.add(className);
    });
    reactionTimer = clearTimer(reactionTimer);
    reactionTimer = window.setTimeout(() => {
      shells().forEach((shell) => shell.classList.remove(className));
      reactionTimer = null;
    }, duration);
  };

  const canUseDetailMascot = () =>
    visible ||
    window.matchMedia("(min-width: 1024px)").matches ||
    !playerArtwork ||
    !overlayOpen;

  const scheduleIdle = () => {
    idleTimer = clearTimer(idleTimer);

    if (reduced || playing || state !== "idle") {
      return;
    }

    idleTimer = window.setTimeout(() => {
      if (reduced || playing || state !== "idle") {
        scheduleIdle();
        return;
      }

      shells().forEach((shell) => {
        shell.style.setProperty("--mascot-idle-rotate", `${randomBetween(-0.75, 0.75).toFixed(2)}deg`);
        shell.style.setProperty("--mascot-idle-x", `${randomBetween(-2.5, 2.5).toFixed(1)}px`);
        shell.style.setProperty("--mascot-idle-y", `${randomBetween(-2.5, 1.6).toFixed(1)}px`);
        shell.style.setProperty("--mascot-idle-duration", `${Math.round(randomBetween(900, 1500))}ms`);
      });
      runClass("is-idle-sway", 1450);
      scheduleIdle();
    }, randomBetween(4000, 9000));
  };

  const scheduleEmphasis = () => {
    emphasisTimer = clearTimer(emphasisTimer);

    if (reduced || !playing) {
      return;
    }

    emphasisTimer = window.setTimeout(() => {
      if (!reduced && playing && state === "playing") {
        runClass("is-speaking-emphasis", 520);
      }
      scheduleEmphasis();
    }, randomBetween(4000, 10000));
  };

  const updateBreathing = () => {
    getMascotBreathingShells().forEach((shell) => {
      shell.classList.toggle("is-speaking", playing && !reduced);
      shell.classList.toggle("is-idle", !playing && !reduced);
      shell.classList.toggle("is-paused", state === "paused" && !reduced);
    });
  };

  const setState = (nextState) => {
    state = nextState;
    updateBreathing();
    scheduleIdle();
  };

  return {
    start() {
      updateBreathing();
      scheduleIdle();
    },
    setVisible(nextVisible) {
      visible = Boolean(nextVisible);
      setState(visible ? (playing ? "playing" : "idle") : "hidden");
    },
    play() {
      const wasPlaying = playing;
      playing = true;
      idleTimer = clearTimer(idleTimer);
      setState("playing");
      if (!wasPlaying && canUseDetailMascot()) {
        runClass("is-play-reaction", 340);
      }
      scheduleEmphasis();
    },
    pause() {
      if (!playing) {
        setState("paused");
        return;
      }

      playing = false;
      emphasisTimer = clearTimer(emphasisTimer);
      setState("paused");
      if (canUseDetailMascot()) {
        runClass("is-pause-reaction", 460);
      }
    },
    tapReaction() {
      runClass(playing ? "is-play-reaction" : "is-pause-reaction", playing ? 340 : 460);
    },
    end() {
      playing = false;
      emphasisTimer = clearTimer(emphasisTimer);
      setState("ending");
      if (canUseDetailMascot()) {
        runClass("is-end-reaction", 680);
      }
      window.setTimeout(() => {
        if (state === "ending") {
          setState("idle");
        }
      }, reduced ? 80 : 700);
    },
    stopTransition() {
      if (
        reduced ||
        (!visible && !window.matchMedia("(min-width: 1024px)").matches && overlayOpen)
      ) {
        return;
      }

      state = "entering";
      idleTimer = clearTimer(idleTimer);
      runClass("is-stop-transition", 460);
      window.setTimeout(() => {
        if (state === "entering") {
          setState(playing ? "playing" : "idle");
        }
      }, 480);
    },
    updateReducedMotion() {
      reduced = reducedMotionQuery.matches;
      clearReactiveClasses();
      updateBreathing();
      if (reduced) {
        idleTimer = clearTimer(idleTimer);
        emphasisTimer = clearTimer(emphasisTimer);
        return;
      }
      scheduleIdle();
      scheduleEmphasis();
    },
  };
}

function setMascotFrame(frame) {
  const mascotTargets = getMascotTargets();

  if (!mascotTargets.length) {
    return;
  }

  const normalizedFrame = MASCOT_FRAME_PATHS[frame] ? frame : "X";
  const nextSrc = MASCOT_FRAME_PATHS[normalizedFrame];
  const cachedImage = mascotFrameImages.get(normalizedFrame);
  const resolvedSrc = cachedImage?.src || nextSrc;

  currentMascotFrame = normalizedFrame;
  mascotTargets.forEach((target) => {
    target.dataset.mouthFrame = normalizedFrame;

    if (target.getAttribute("src") !== resolvedSrc) {
      target.src = resolvedSrc;
    }
  });
}

function setMascotSpeakingState(isSpeaking) {
  getMascotTargets().forEach((target) => {
    target.classList.toggle("is-speaking", Boolean(isSpeaking));
  });
  getMascotBreathingShells().forEach((target) => {
    target.classList.toggle("is-speaking", Boolean(isSpeaking) && !reducedMotionQuery.matches);
    target.classList.toggle("is-idle", !isSpeaking && !reducedMotionQuery.matches);
  });
}

function setDetailArtworkMode(mode) {
  detailArtworkMode = mode === "mascot" ? "mascot" : "photo";

  if (playerArtwork) {
    playerArtwork.classList.toggle("is-mascot-mode", detailArtworkMode === "mascot");
  }

  if (artworkFlipToggle) {
    const isMascotMode = detailArtworkMode === "mascot";
    const strings = getUiStrings(currentLanguage);
    artworkFlipToggle.setAttribute("aria-pressed", String(isMascotMode));
    artworkFlipToggle.setAttribute(
      "aria-label",
      isMascotMode ? strings.showPhoto : strings.showMascot,
    );
    artworkFlipToggle.title = isMascotMode ? strings.showPhoto : strings.showMascot;
  }

  mascotMotionController?.setVisible(detailArtworkMode === "mascot");
}

function syncDetailCopyPanel() {
  const isOpen = Boolean(detailCopyBox?.open);
  window.clearTimeout(detailCopyAnimationTimer);

  if (detailCopyPanel && isOpen) {
    detailCopyPanel.hidden = false;
    detailCopyPanel.classList.remove("is-visible");
    void detailCopyPanel.offsetWidth;
    detailCopyPanel.classList.add("is-visible");
  } else if (detailCopyPanel) {
    detailCopyPanel.classList.remove("is-visible");
    if (reducedMotionQuery.matches) {
      detailCopyPanel.hidden = true;
    } else {
      detailCopyAnimationTimer = window.setTimeout(() => {
        if (!detailCopyBox?.open) {
          detailCopyPanel.hidden = true;
        }
      }, 190);
    }
  }
  playerArtwork?.classList.toggle("is-transcript-open", isOpen);
}

function getMouthCuePath(audioPath) {
  if (!audioPath) {
    return "";
  }

  const fileName = audioPath.split("/").pop();

  if (!fileName) {
    return "";
  }

  return `audio/cues/${fileName.replace(/\.[^.]+$/, ".json")}`;
}

function loadMascotCues(cuePath) {
  if (!cuePath) {
    return Promise.resolve([]);
  }

  if (mascotCueCache.has(cuePath)) {
    return mascotCueCache.get(cuePath);
  }

  const cuePromise = fetch(cuePath)
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => (Array.isArray(data?.mouthCues) ? data.mouthCues : []))
    .catch(() => []);

  mascotCueCache.set(cuePath, cuePromise);
  return cuePromise;
}

function stopMascotLipSync(resetFrame = true) {
  mascotSyncToken += 1;

  if (mascotAnimationFrame) {
    cancelAnimationFrame(mascotAnimationFrame);
    mascotAnimationFrame = null;
  }

  mascotActiveAudio = null;
  mascotActiveCues = [];
  mascotCueIndex = 0;
  setMascotSpeakingState(false);

  if (resetFrame) {
    setMascotFrame("X");
  }
}

function findMascotCue(time) {
  if (!mascotActiveCues.length) {
    return null;
  }

  while (
    mascotCueIndex < mascotActiveCues.length - 1 &&
    time >= mascotActiveCues[mascotCueIndex].end
  ) {
    mascotCueIndex += 1;
  }

  while (mascotCueIndex > 0 && time < mascotActiveCues[mascotCueIndex].start) {
    mascotCueIndex -= 1;
  }

  const cue = mascotActiveCues[mascotCueIndex];
  return cue && time >= cue.start && time < cue.end ? cue : null;
}

function tickMascotLipSync(token) {
  if (
    token !== mascotSyncToken ||
    !mascotActiveAudio ||
    mascotActiveAudio.paused ||
    mascotActiveAudio.ended
  ) {
    setMascotSpeakingState(false);
    setMascotFrame("X");
    mascotAnimationFrame = null;
    return;
  }

  const cue = findMascotCue(mascotActiveAudio.currentTime);
  setMascotFrame(cue?.value || "X");
  mascotAnimationFrame = requestAnimationFrame(() => tickMascotLipSync(token));
}

function startMascotLipSync(audio) {
  if (!heroMascot || !audio) {
    return;
  }

  const cuePath = audio.dataset.mouthCues;
  if (!cuePath) {
    setMascotSpeakingState(false);
    setMascotFrame("X");
    return;
  }

  stopMascotLipSync(false);
  setMascotSpeakingState(true);
  const token = mascotSyncToken;

  loadMascotCues(cuePath).then((cues) => {
    if (
      token !== mascotSyncToken ||
      !audio ||
      audio.paused ||
      audio.ended ||
      cues.length === 0
    ) {
      setMascotSpeakingState(false);
      setMascotFrame("X");
      return;
    }

    setMascotSpeakingState(true);
    mascotActiveAudio = audio;
    mascotActiveCues = cues;
    mascotCueIndex = 0;
    tickMascotLipSync(token);
  });
}

function stopCurrentAudio(exceptAudio = null) {
  if (currentAudio && currentAudio !== exceptAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    stopMascotLipSync();
  }

  if (!exceptAudio) {
    setAudioFeedbackByKey("");
    stopMascotLipSync();
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

function setPlaybackButtonIcon(button, icon, isPlaying = false) {
  if (!button) {
    return;
  }

  const iconEl = button.querySelector(".playback-icon");

  if (!iconEl) {
    button.textContent = icon;
    button.classList.toggle("is-playing", isPlaying);
    return;
  }

  if (iconEl.textContent === icon) {
    button.classList.toggle("is-playing", isPlaying);
    return;
  }

  button.classList.add("is-morphing");
  window.setTimeout(() => {
    iconEl.textContent = icon;
    button.classList.toggle("is-playing", isPlaying);
    requestAnimationFrame(() => {
      button.classList.remove("is-morphing");
    });
  }, 110);
}

function updateMediaSession(tappa, selectedOption) {
  if (!("mediaSession" in navigator) || !window.MediaMetadata || !tappa) {
    return;
  }

  navigator.mediaSession.metadata = new MediaMetadata({
    title: getStopTitle(tappa),
    artist: "Travel Podcasting Vicopisano",
    album: "Percorso di Vicopisano",
    artwork: [
      {
        src: STOP_ARTWORKS[tappa.numero] || WHITE_ARTWORK,
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  });

  const audio = currentAudio;
  const actions = {
    play: () => audio?.play(),
    pause: () => audio?.pause(),
    seekbackward: () => seekCurrentAudio(-10),
    seekforward: () => seekCurrentAudio(10),
  };

  Object.entries(actions).forEach(([action, handler]) => {
    try {
      navigator.mediaSession.setActionHandler(action, handler);
    } catch (error) {
      // Some browsers expose Media Session but omit individual actions.
    }
  });
}

function seekCurrentAudio(offset) {
  if (!currentAudio || !Number.isFinite(currentAudio.duration)) {
    return;
  }

  currentAudio.currentTime = Math.max(
    0,
    Math.min(currentAudio.duration, currentAudio.currentTime + offset),
  );
  updateMiniPlayerPlayback();
  showSeekFeedback(offset);
}

function showSeekFeedback(offset) {
  const target = overlayOpen ? playerSeekFeedback : miniPlayerSeekFeedback;
  const inactiveTarget = overlayOpen ? miniPlayerSeekFeedback : playerSeekFeedback;
  if (!target) {
    return;
  }

  window.clearTimeout(seekFeedbackTimer);
  window.clearTimeout(seekFeedbackHideTimer);
  [target, inactiveTarget].forEach((feedback) => {
    feedback?.classList.remove("is-visible");
    if (feedback && feedback !== target) {
      feedback.hidden = true;
    }
  });

  target.textContent = `${offset > 0 ? "+" : "−"}${Math.abs(offset)}s`;
  target.hidden = false;

  if (reducedMotionQuery.matches) {
    target.classList.add("is-visible");
  } else {
    void target.offsetWidth;
    target.classList.add("is-visible");
  }

  seekFeedbackTimer = window.setTimeout(() => {
    target.classList.remove("is-visible");
    seekFeedbackHideTimer = window.setTimeout(() => {
      target.hidden = true;
    }, reducedMotionQuery.matches ? 0 : 150);
  }, reducedMotionQuery.matches ? 500 : 720);
}

function isCurrentStopWithoutAudio() {
  return Boolean(currentSelectedOption && !currentSelectedOption.audioDisponibile);
}

function setControlIcon(button, iconName) {
  const icon = button?.querySelector(".material-symbols-rounded");
  if (icon) {
    icon.textContent = iconName;
  }
}

function updateStopNavigationControls() {
  const isNoAudioStop = isCurrentStopWithoutAudio();
  const strings = getUiStrings(currentLanguage);
  const playerTransport = document.querySelector(".player-transport-group");
  const miniTransport = document.querySelector(".mini-player-transport-group");
  const playerTimeline = document.querySelector(".player-timeline");

  playerTimeline.hidden = isNoAudioStop;
  playerTransport?.classList.toggle("is-stop-navigation", isNoAudioStop);
  miniTransport?.classList.toggle("is-stop-navigation", isNoAudioStop);
  playerTimeline.classList.toggle("is-no-audio-control-hidden", isNoAudioStop);
  playerPlayButton.classList.toggle("is-no-audio-control-hidden", isNoAudioStop);
  playerSpeedButton.classList.toggle("is-no-audio-control-hidden", isNoAudioStop);
  miniPlayerToggle.classList.toggle("is-no-audio-control-hidden", isNoAudioStop);
  miniPlayerRepeat.classList.toggle("is-no-audio-control-hidden", isNoAudioStop);
  playerPlayButton.hidden = isNoAudioStop;
  playerSpeedButton.hidden = isNoAudioStop;
  miniPlayerToggle.hidden = isNoAudioStop;
  miniPlayerRepeat.hidden = isNoAudioStop;

  if (isNoAudioStop) {
    setControlIcon(playerPrevButton, "skip_previous");
    setControlIcon(playerNextButton, "skip_next");
    setControlIcon(miniPlayerPrev, "skip_previous");
    setControlIcon(miniPlayerNext, "skip_next");
    playerPrevButton.setAttribute("aria-label", strings.playerPrevious);
    playerNextButton.setAttribute("aria-label", strings.playerNext);
    miniPlayerPrev.setAttribute("aria-label", strings.playerPrevious);
    miniPlayerNext.setAttribute("aria-label", strings.playerNext);
    return;
  }

  setControlIcon(playerPrevButton, "replay_10");
  setControlIcon(playerNextButton, "forward_10");
  setControlIcon(miniPlayerPrev, "replay_10");
  setControlIcon(miniPlayerNext, "forward_10");
  playerPrevButton.setAttribute("aria-label", strings.playerRewind);
  playerNextButton.setAttribute("aria-label", strings.playerForward);
  miniPlayerPrev.setAttribute("aria-label", strings.playerRewind);
  miniPlayerNext.setAttribute("aria-label", strings.playerForward);
}

function updateNextStopPreview(tappa) {
  if (!playerNextPreview || !tappa) {
    return;
  }

  const currentIndex = tappe.findIndex((item) => item.numero === tappa.numero);
  const nextStop = currentIndex >= 0 ? tappe[currentIndex + 1] : null;
  playerNextPreview.hidden = !nextStop;
  playerNextPreview.classList.toggle("is-completion-prominent", Boolean(nextStop && audioHasEnded));

  if (nextStop) {
    const strings = getUiStrings(currentLanguage);
    playerNextPreviewLabel.textContent = strings.nextStopPreview || "Prossima tappa";
    playerNextPreviewTitle.textContent = `${nextStop.numero}. ${getStopTitle(nextStop)}`;
    playerNextPreviewImage.src = STOP_ARTWORKS[nextStop.numero] || WHITE_ARTWORK;
    playerNextPreviewImage.alt = `Immagine ${getStopTitle(nextStop)}`;
    playerNextStopButton?.setAttribute("aria-label", strings.openNextStop || "Apri prossima tappa");
    playerNextStopButton.title = strings.openNextStop || "Apri prossima tappa";
  }
}

function updatePreviousStopPreview(tappa) {
  if (!playerPreviousPreview || !tappa) {
    return;
  }

  const currentIndex = tappe.findIndex((item) => item.numero === tappa.numero);
  const previousStop = currentIndex > 0 ? tappe[currentIndex - 1] : null;
  playerPreviousPreview.hidden = !previousStop;

  if (previousStop) {
    const strings = getUiStrings(currentLanguage);
    playerPreviousPreviewLabel.textContent = strings.playerPrevious;
    playerPreviousPreviewTitle.textContent = `${previousStop.numero}. ${getStopTitle(previousStop)}`;
    playerPreviousPreviewImage.src = STOP_ARTWORKS[previousStop.numero] || WHITE_ARTWORK;
    playerPreviousPreviewImage.alt = `Immagine ${getStopTitle(previousStop)}`;
    playerPreviousStopButton?.setAttribute("aria-label", strings.playerPrevious);
    playerPreviousStopButton.title = strings.playerPrevious;
  }
}

function updateStopNavigationPreviews(tappa) {
  updateNextStopPreview(tappa);
  updatePreviousStopPreview(tappa);
  playerStopNavigation?.classList.toggle(
    "has-two-stops",
    Boolean(!playerPreviousPreview?.hidden && !playerNextPreview?.hidden),
  );
}

function resetPlayerTitleOverflow() {
  if (!detailTitle) {
    return;
  }

  detailTitle.classList.remove("is-overflowing");
  detailTitle.style.removeProperty("--player-title-travel");
  detailTitle.style.removeProperty("--player-title-duration");
}

function updatePlayerTitleOverflow() {
  playerTitleOverflowFrame = null;
  resetPlayerTitleOverflow();

  if (!overlayOpen || !detailTitle || !detailTitleText) {
    return;
  }

  const overflowDistance = Math.ceil(detailTitleText.scrollWidth - detailTitle.clientWidth);
  if (overflowDistance <= 1) {
    return;
  }

  const duration = Math.max(8, Math.min(20, 8 + overflowDistance / 45));
  detailTitle.style.setProperty("--player-title-travel", `${overflowDistance}px`);
  detailTitle.style.setProperty("--player-title-duration", `${duration}s`);
  detailTitle.classList.add("is-overflowing");
}

function schedulePlayerTitleOverflow() {
  if (playerTitleOverflowFrame !== null) {
    window.cancelAnimationFrame(playerTitleOverflowFrame);
  }

  playerTitleOverflowFrame = window.requestAnimationFrame(updatePlayerTitleOverflow);
}

function updateMiniPlayerPlayback() {
  const strings = getUiStrings(currentLanguage);
  updateStopNavigationControls();
  updatePlaybackRateControl();
  playerNextPreview?.classList.toggle("is-completion-prominent", audioHasEnded);
  if (!currentAudio) {
    setPlaybackButtonIcon(miniPlayerToggle, "play_arrow", false);
    miniPlayerToggle.setAttribute("aria-label", strings.playerPlay);
    setPlaybackButtonIcon(playerPlayButton, "play_arrow", false);
    playerPlayButton.setAttribute("aria-label", strings.playerPlay);
    miniPlayerProgressBar.style.width = "0%";
    miniPlayerRepeat.classList.toggle("is-active", repeatEnabled);
    miniPlayerRepeat.setAttribute("aria-pressed", String(repeatEnabled));
    if (miniPlayerExpand) {
      miniPlayerExpand.setAttribute("aria-label", strings.playerExpand);
      miniPlayerExpand.title = strings.playerExpand;
    }
    miniPlayerCurrentTime.textContent = "00:00";
    miniPlayerDurationTotal.textContent = "--:--";
    playerCurrentTime.textContent = "00:00";
    playerDurationTotal.textContent = "00:00";
    playerProgressInput.value = "0";
    return;
  }

  const isPlaying = !currentAudio.paused && !currentAudio.ended;
  setPlaybackButtonIcon(miniPlayerToggle, isPlaying ? "pause" : "play_arrow", isPlaying);
  miniPlayerToggle.setAttribute(
    "aria-label",
    isPlaying ? strings.playerPause : strings.playerPlay
  );
  setPlaybackButtonIcon(playerPlayButton, isPlaying ? "pause" : "play_arrow", isPlaying);
  playerPlayButton.setAttribute(
    "aria-label",
    isPlaying ? strings.playerPause : strings.playerPlay
  );
  miniPlayerRepeat.classList.toggle("is-active", repeatEnabled);
  miniPlayerRepeat.setAttribute("aria-label", strings.playerRepeat);
  miniPlayerRepeat.setAttribute("aria-pressed", String(repeatEnabled));
  if (miniPlayerExpand) {
    miniPlayerExpand.setAttribute("aria-label", strings.playerExpand);
    miniPlayerExpand.title = strings.playerExpand;
  }

  const progress =
    currentAudio.duration && Number.isFinite(currentAudio.duration)
      ? (currentAudio.currentTime / currentAudio.duration) * 100
      : 0;
  miniPlayerProgressBar.style.width = `${Math.max(0, Math.min(progress, 100))}%`;
  miniPlayerCurrentTime.textContent = formatPlayerTime(currentAudio.currentTime);
  miniPlayerDurationTotal.textContent = Number.isFinite(currentAudio.duration)
    ? formatPlayerTime(currentAudio.duration)
    : "--:--";
  playerCurrentTime.textContent = formatPlayerTime(currentAudio.currentTime);
  playerDurationTotal.textContent = formatPlayerTime(currentAudio.duration);
  if (!isSeekingFromOverlay) {
    playerProgressInput.value = `${Math.max(0, Math.min(progress, 100))}`;
  }
  playerProgressInput.style.setProperty("--seek-progress", `${Math.max(0, Math.min(progress, 100))}%`);

  if ("mediaSession" in navigator) {
    navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";
  }
}

function bindAudioLifecycle(audio) {
  const startAudioAndMascot = () => {
    stopCurrentAudio(audio);
    currentAudio = audio;
    audioHasEnded = false;
    startMascotLipSync(audio);
    mascotMotionController?.play();
    setAudioFeedbackByKey("");
    updateMiniPlayerPlayback();
  };

  audio.addEventListener("play", startAudioAndMascot);
  audio.addEventListener("playing", startAudioAndMascot);
  audio.addEventListener("seeked", () => {
    if (currentAudio === audio && !audio.paused && !audio.ended) {
      startMascotLipSync(audio);
    }
  });

  audio.addEventListener("pause", () => {
    if (currentAudio === audio) {
      stopMascotLipSync();
      if (!audio.ended) {
        mascotMotionController?.pause();
      }
      updateMiniPlayerPlayback();
    }
  });

  audio.addEventListener("timeupdate", updateMiniPlayerPlayback);
  audio.addEventListener("loadedmetadata", () => {
    setAudioFeedbackByKey("");
    updateMiniPlayerPlayback();
  });
  audio.addEventListener("waiting", () => {
    if (!audio.paused) {
      setAudioFeedbackByKey("audioBuffering");
    }
  });
  audio.addEventListener("loadeddata", () => {
    setAudioFeedbackByKey("");
    updateMiniPlayerPlayback();
  });
  audio.addEventListener("canplay", () => {
    setAudioFeedbackByKey("");
    updateMiniPlayerPlayback();
  });
  audio.addEventListener("stalled", () => {
    setAudioFeedbackByKey(navigator.onLine ? "audioLoadError" : "offlineStatus");
  });
  audio.addEventListener("error", () => {
    stopMascotLipSync();
    mascotMotionController?.pause();
    setAudioFeedbackByKey(navigator.onLine ? "audioLoadError" : "offlineStatus");
    updateMiniPlayerPlayback();
  });

  audio.addEventListener("ended", () => handleAudioEnded(audio));
}

function handleAudioEnded(audio) {
  if (currentAudio !== audio) {
    return;
  }

  stopMascotLipSync();
  mascotMotionController?.end();

  if (repeatEnabled) {
    audio.currentTime = 0;
    playCurrentRenderedAudio();
    return;
  }

  const currentIndex = tappe.findIndex((tappa) => tappa.numero === activeStopNumber);
  const nextStop = currentIndex >= 0 ? tappe[currentIndex + 1] : null;

  if (nextStop) {
    focusStop(nextStop, {
      autoplay: true,
      animateRoute: true,
      openOverlay: false,
      skipFly: overlayOpen,
    });
    return;
  }

  audioHasEnded = true;
  setAudioFeedbackByKey("");
  updateMiniPlayerPlayback();
}

function createMarkerIcon(stopNumber) {
  return L.divIcon({
    className: "",
    html: `<div class="map-marker tp-map-marker" aria-hidden="true"><span class="map-marker-number">${stopNumber}</span></div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -18],
  });
}

function getDisplayRouteData(coordinates) {
  const routeCoordinates = coordinates.map(([longitude, latitude]) => [longitude, latitude]);
  const coordinateIndexByStop = new Map();

  tappe.forEach((tappa) => {
    const anchorIndex = ROUTE_STOP_ANCHORS.get(tappa.numero);
    if (anchorIndex === undefined || !routeCoordinates[anchorIndex]) {
      return;
    }

    routeCoordinates[anchorIndex] = [tappa.longitudine, tappa.latitudine];
    coordinateIndexByStop.set(tappa.numero, anchorIndex);
  });

  return { routeCoordinates, coordinateIndexByStop };
}

function updateActiveRouteSegment(stopNumber, options = {}) {
  if (!activeRouteLayer || displayRouteCoordinates.length === 0) {
    return;
  }

  activeRouteLayer.getElement()?.classList.remove("is-revealing");

  const stopIndex = tappe.findIndex((tappa) => tappa.numero === stopNumber);
  if (stopIndex <= 0) {
    activeRouteLayer.setLatLngs([]);
    return;
  }

  const previousStop = tappe[stopIndex - 1];
  const previousCoordinateIndex = routeCoordinateIndexByStop.get(previousStop.numero);
  const activeCoordinateIndex = routeCoordinateIndexByStop.get(stopNumber);
  if (previousCoordinateIndex === undefined || activeCoordinateIndex === undefined) {
    activeRouteLayer.setLatLngs([]);
    return;
  }

  const segmentCoordinates = displayRouteCoordinates
    .slice(previousCoordinateIndex, activeCoordinateIndex + 1)
    .map(([longitude, latitude]) => [latitude, longitude]);

  activeRouteLayer.setLatLngs(segmentCoordinates);
  activeRouteLayer.bringToFront();

  const path = activeRouteLayer.getElement();
  const shouldAnimate = options.animate === true && !reducedMotionQuery.matches;
  if (!path || !shouldAnimate) {
    return;
  }

  const pathLength = Math.max(1, Math.ceil(path.getTotalLength()));
  path.style.setProperty("--active-route-length", String(pathLength));
  void path.getBoundingClientRect();
  path.classList.add("is-revealing");
  path.addEventListener("animationend", () => path.classList.remove("is-revealing"), {
    once: true,
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
  const descriptiveText = stopDescriptions[tappa.numero]?.[currentLanguage] || tappa.descrizione;

  if (!selectedOption?.audioDisponibile) {
    return {
      title: strings.transcriptTitle,
      text: descriptiveText,
    };
  }

  if (selectedOption && selectedOption.trascrizione) {
    return {
      title: strings.transcriptTitle,
      text: selectedOption.trascrizione,
    };
  }

  return {
    title: strings.transcriptTitle,
    text: descriptiveText,
  };
}

function renderGlobalLanguageSelector() {
  const strings = getUiStrings(currentLanguage);
  buildLanguageChips(globalLanguageChips, {
    onSelect: (languageCode) => {
      if (languageCode === currentLanguage) {
        closeGlobalLanguageMenu();
        return;
      }

      setCurrentLanguage(languageCode);
      startGuide();
    },
  });
  if (globalLanguageCurrentLabel) {
    globalLanguageCurrentLabel.textContent = getLanguageDisplayName(currentLanguage, currentLanguage);
  }
  globalLanguageCurrent?.setAttribute(
    "aria-label",
    strings.currentLanguage(getLanguageDisplayName(currentLanguage, currentLanguage)),
  );
  globalLanguageSelector?.setAttribute("aria-label", strings.languageSelector);
}

function closeGlobalLanguageMenu() {
  globalLanguageSelector?.classList.remove("is-open");
  globalLanguageCurrent?.setAttribute("aria-expanded", "false");
}

function toggleGlobalLanguageMenu() {
  if (!globalLanguageSelector || !globalLanguageCurrent) {
    return;
  }

  const isOpen = globalLanguageSelector.classList.toggle("is-open");
  globalLanguageCurrent.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    globalLanguageChips.querySelector('[aria-selected="true"]')?.focus();
  }
}

function bindGlobalLanguageSelector() {
  globalLanguageCurrent?.addEventListener("click", (event) => {
    consumeControlEvent(event);
    toggleGlobalLanguageMenu();
  });

  document.addEventListener("pointerdown", (event) => {
    if (
      globalLanguageSelector?.classList.contains("is-open") &&
      !globalLanguageSelector.contains(event.target)
    ) {
      closeGlobalLanguageMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && globalLanguageSelector?.classList.contains("is-open")) {
      closeGlobalLanguageMenu();
      globalLanguageCurrent?.focus();
    }
  });
}

function renderOnboardingTexts() {
  const strings = getUiStrings(currentLanguage);
  if (onboardingTitle) {
    onboardingTitle.textContent = strings.onboardingTitle;
  }
  if (onboardingHint) {
    onboardingHint.textContent = strings.onboardingHint;
  }
  if (onboardingLanguageChips) {
    onboardingLanguageChips.setAttribute("aria-label", strings.onboardingTitle);
  }
  if (helpButton) {
    helpButton.setAttribute("aria-label", strings.helpButton);
    helpButton.title = strings.helpButton;
  }
}

function renderOnboardingLanguageSelector() {
  buildLanguageChips(onboardingLanguageChips, {
    onSelect: (languageCode, chip) => {
      setCurrentLanguage(languageCode);
      replayAnimationClass(chip, "is-pulsing", 460);
      closeOnboarding({ startGuide: true });
    },
  });
}

function shouldShowOnboarding() {
  return true;
}

function showOnboardingIfNeeded() {
  if (!onboardingOverlay || !shouldShowOnboarding()) {
    return;
  }

  renderOnboardingTexts();
  renderOnboardingLanguageSelector();
  onboardingOverlay.classList.remove("is-hidden");
  document.body.classList.add("onboarding-open");
}

function closeOnboarding({ startGuide: shouldStartGuide = false } = {}) {
  if (!onboardingOverlay) {
    return;
  }

  onboardingOverlay.classList.add("is-hidden");
  document.body.classList.remove("onboarding-open");
  animateTranslatedContent();

  if (shouldStartGuide) {
    window.requestAnimationFrame(startGuide);
  }
}

function clearGuideHighlight() {
  document.querySelectorAll(".is-guide-highlighted").forEach((element) => {
    element.classList.remove("is-guide-highlighted");
  });
  document.documentElement.style.removeProperty("--guide-spotlight-x");
  document.documentElement.style.removeProperty("--guide-spotlight-y");
}

let activeGuideStepIndex = 0;
let guideOpenedPlayerOverlay = false;
const guidePointerClasses = [
  "is-pointing-left",
  "is-pointing-right",
  "is-pointing-up",
  "is-pointing-down",
];

function clearGuidePointer() {
  guideCard?.classList.remove(...guidePointerClasses);
}

function getStopsGuideTarget() {
  return buttonsByStop.get(1) || stopsList?.querySelector(".stop-button") || document.querySelector(".stops-panel");
}

function getFullPlayerGuideTarget() {
  return document.querySelector(".player-command-row") || playerSheet || playerOverlay || document.body;
}

function getGuideSteps() {
  const strings = getUiStrings(currentLanguage);
  return [
    { target: mapStageFrame, text: strings.guideMap },
    { target: mapDirectionsButton, text: strings.guideDirections },
    { target: getStopsGuideTarget(), text: strings.guideStops },
    { target: miniPlayer, text: strings.guidePlayer },
    {
      target: getFullPlayerGuideTarget(),
      text: strings.guideFullPlayer,
      opensFullPlayer: true,
      highlight: false,
      floatingPlacement: "fullPlayerTop",
    },
  ];
}

function getGuideSafeBottom() {
  if (overlayOpen) {
    return window.innerHeight - 18;
  }

  const miniPlayerTop = miniPlayer?.getBoundingClientRect().top;
  if (Number.isFinite(miniPlayerTop)) {
    return miniPlayerTop - 18;
  }

  return window.innerHeight - 18;
}

function scrollGuideTargetIntoView(target) {
  if (!target || target === document.body) {
    return;
  }

  if (
    target === miniPlayer ||
    target === playerOverlay ||
    target === playerSheet ||
    target.closest?.("#player-overlay")
  ) {
    return;
  }

  const rect = target.getBoundingClientRect();
  const safeTop = 18;
  const safeBottom = Math.max(180, getGuideSafeBottom());
  const targetTop = rect.top + window.scrollY;
  const isSectionGuideOnMobile =
    target.matches?.(".stops-panel, .platforms-panel, .share-panel") &&
    window.matchMedia("(max-width: 760px)").matches;

  if (isSectionGuideOnMobile) {
    const nextScrollTop = Math.max(0, targetTop - safeTop);
    if (Math.abs(nextScrollTop - window.scrollY) > 10) {
      window.scrollTo({ top: nextScrollTop, behavior: "smooth" });
    }
    return;
  }

  const targetCenter = targetTop + rect.height / 2;
  const safeCenter = safeTop + (safeBottom - safeTop) / 2;
  const nextScrollTop = Math.max(0, targetCenter - safeCenter);

  if (Math.abs(nextScrollTop - window.scrollY) > 10) {
    window.scrollTo({ top: nextScrollTop, behavior: "smooth" });
  }
}

function positionFullPlayerGuideCard() {
  if (!guideCard) {
    return;
  }

  clearGuidePointer();
  guideCard.classList.remove("is-above-guide-target");
  guideCard.style.removeProperty("--guide-card-mobile-top");

  const sheetRect = (playerSheet || playerOverlay || document.body).getBoundingClientRect();
  const safeLeft = Math.max(16, sheetRect.left + 16);
  const safeRight = Math.min(window.innerWidth - 16, sheetRect.right - 16);
  const cardWidth = Math.min(420, window.innerWidth - 32);
  const cardHeight = guideCard.offsetHeight || 190;
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const availableWidth = Math.max(cardWidth, safeRight - safeLeft);
  const preferredLeft = isMobile
    ? safeLeft + (availableWidth - cardWidth) / 2
    : safeLeft + Math.max(0, (availableWidth - cardWidth) * 0.58);
  const left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, preferredLeft));
  const preferredTop = Math.max(16, sheetRect.top + 16);
  const top = Math.max(16, Math.min(window.innerHeight - cardHeight - 16, preferredTop));

  guideCard.style.setProperty("--guide-floating-left", `${left}px`);
  guideCard.style.setProperty("--guide-floating-top", `${top}px`);
  guideCard.style.left = `${left}px`;
  guideCard.style.top = `${top}px`;
}

function positionGuideCard(target, step = null) {
  if (!guideCard || !target) {
    return;
  }

  guideCard.classList.remove("is-mobile-directions-guide");
  const isFloatingFullPlayerStep = step?.floatingPlacement === "fullPlayerTop";
  guideCard.classList.toggle("is-floating-guide-card", isFloatingFullPlayerStep);
  if (isFloatingFullPlayerStep) {
    positionFullPlayerGuideCard();
    return;
  }

  guideCard.style.removeProperty("--guide-floating-left");
  guideCard.style.removeProperty("--guide-floating-top");

  const rect = target.getBoundingClientRect();
  const cardWidth = Math.min(360, window.innerWidth - 32);
  const cardHeight = guideCard.offsetHeight || 190;
  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const isMiniPlayerGuideTarget = target === miniPlayer;
  const isDirectionsGuideTarget = target === mapDirectionsButton;
  guideCard.classList.toggle("is-mobile-directions-guide", isMobile && isDirectionsGuideTarget);

  if (isMiniPlayerGuideTarget) {
    const safeGap = 16;
    const availableAbovePlayer = Math.max(0, rect.top - safeGap * 2);
    const top = availableAbovePlayer >= cardHeight
      ? Math.max(safeGap, rect.top - cardHeight - safeGap)
      : safeGap;
    const preferredLeft = rect.left + Math.min(rect.width * 0.58, rect.width - cardWidth);
    const left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, preferredLeft));
    guideCard.classList.add("is-above-guide-target");
    guideCard.style.setProperty("--guide-card-mobile-top", `${top}px`);
    guideCard.style.left = `${left}px`;
    guideCard.style.top = `${top}px`;
    updateGuidePointer(target, "down");
    return;
  }

  const shouldPlaceAboveTarget =
    target.matches?.(".platforms-panel, .share-panel") &&
    isMobile;

  guideCard.classList.toggle("is-above-guide-target", shouldPlaceAboveTarget);
  if (shouldPlaceAboveTarget) {
    guideCard.style.setProperty(
      "--guide-card-mobile-top",
      `${Math.max(16, rect.top - cardHeight - 16)}px`,
    );
    updateGuidePointer(target);
    return;
  }

  guideCard.style.removeProperty("--guide-card-mobile-top");
  const safeBottom = Math.max(190, getGuideSafeBottom());
  if (isDirectionsGuideTarget) {
    const preferredLeft = rect.left - cardWidth - 16;
    const left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, preferredLeft));
    const maxTop = Math.max(16, safeBottom - cardHeight);
    const preferredTop = isMobile ? rect.bottom + 12 : rect.top;
    const top = Math.max(16, Math.min(maxTop, preferredTop));
    if (isMobile) {
      guideCard.style.setProperty("--guide-card-mobile-top", `${top}px`);
    }
    guideCard.style.left = `${left}px`;
    guideCard.style.top = `${top}px`;
    updateGuidePointer(target, isMobile ? "up" : null, isMobile);
    return;
  }

  const preferredLeft = rect.left + Math.min(rect.width * 0.58, rect.width - cardWidth);
  const left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, preferredLeft));
  const maxTop = Math.max(16, safeBottom - cardHeight);
  const preferredTop = rect.top + Math.min(24, Math.max(0, rect.height * 0.15));
  const top = Math.max(16, Math.min(maxTop, preferredTop));
  guideCard.style.left = `${left}px`;
  guideCard.style.top = `${top}px`;
  updateGuidePointer(target);
}

function updateGuidePointer(target, forcedDirection = null, alignPointerToTarget = false) {
  if (!guideCard || !target) {
    return;
  }

  const cardRect = guideCard.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;
  const targetCenterX = targetRect.left + targetRect.width / 2;
  const targetCenterY = targetRect.top + targetRect.height / 2;
  const deltaX = targetCenterX - cardCenterX;
  const deltaY = targetCenterY - cardCenterY;
  clearGuidePointer();
  guideCard.style.removeProperty("--guide-pointer-x");
  document.documentElement.style.setProperty("--guide-spotlight-x", `${targetCenterX}px`);
  document.documentElement.style.setProperty("--guide-spotlight-y", `${targetCenterY}px`);

  if (alignPointerToTarget && (forcedDirection === "up" || forcedDirection === "down")) {
    const pointerX = Math.max(18, Math.min(cardRect.width - 18, targetCenterX - cardRect.left));
    guideCard.style.setProperty("--guide-pointer-x", `${pointerX}px`);
  }

  if (forcedDirection) {
    guideCard.classList.add(`is-pointing-${forcedDirection}`);
    return;
  }

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    guideCard.classList.add(deltaX > 0 ? "is-pointing-right" : "is-pointing-left");
    return;
  }

  guideCard.classList.add(deltaY > 0 ? "is-pointing-down" : "is-pointing-up");
}

function renderGuideStep() {
  if (!guideLayer || !guideStepText || !guideSkipButton || !guidePrevButton || !guideNextButton) {
    return;
  }

  const steps = getGuideSteps();
  const step = steps[activeGuideStepIndex];
  if (step?.opensFullPlayer && !overlayOpen) {
    guideOpenedPlayerOverlay = true;
    openPlayerOverlay(miniPlayer || helpButton || document.activeElement, { keepGuideOpen: true });
  }
  const guideTarget = step?.opensFullPlayer ? getFullPlayerGuideTarget() : step.target || document.body;
  const strings = getUiStrings(currentLanguage);
  clearGuideHighlight();
  guideCard.classList.toggle("is-floating-guide-card", Boolean(step?.floatingPlacement));
  if (step?.highlight !== false) {
    guideTarget?.classList.add("is-guide-highlighted");
  }
  guideStepText.textContent = step.text;
  const isFirstGuideStep = activeGuideStepIndex === 0;
  const isLastGuideStep = activeGuideStepIndex === steps.length - 1;
  const prevGuideLabel = strings.guideBack || "Indietro";
  const nextGuideLabel = isLastGuideStep ? strings.guideDone : strings.guideNext;
  guideSkipButton.textContent = "×";
  guideSkipButton.setAttribute("aria-label", strings.guideSkip);
  guideSkipButton.title = strings.guideSkip;
  guidePrevButton.textContent = "←";
  guidePrevButton.disabled = isFirstGuideStep;
  guidePrevButton.classList.toggle("is-disabled", isFirstGuideStep);
  guidePrevButton.setAttribute("aria-label", prevGuideLabel);
  guidePrevButton.title = prevGuideLabel;
  guideNextButton.textContent = isLastGuideStep ? "✓" : "→";
  guideNextButton.setAttribute("aria-label", nextGuideLabel);
  guideNextButton.title = nextGuideLabel;
  guideLayer.classList.remove("is-hidden");
  document.body.classList.add("guide-open");
  scrollGuideTargetIntoView(guideTarget);
  requestAnimationFrame(() => {
    positionGuideCard(guideTarget, step);
    window.setTimeout(() => positionGuideCard(guideTarget, step), 280);
    window.setTimeout(() => positionGuideCard(guideTarget, step), 720);
  });
}

function closeGuide() {
  if (!guideLayer) {
    return;
  }

  const shouldCloseGuidePlayer = guideOpenedPlayerOverlay && overlayOpen;
  guideOpenedPlayerOverlay = false;
  guideLayer.classList.add("is-hidden");
  document.body.classList.remove("guide-open");
  clearGuideHighlight();
  if (shouldCloseGuidePlayer) {
    closePlayerOverlay();
  }
  scrollPageToTop();
}

function startGuide() {
  const firstStop = tappe[0];

  if (firstStop && activeStopNumber !== firstStop.numero) {
    focusStop(firstStop, {
      skipFly: true,
      autoplay: false,
      openOverlay: false,
      replaceUrl: true,
    });
  }

  activeGuideStepIndex = 0;
  renderGuideStep();
}

function bindHelpControls() {
  helpButton?.addEventListener("click", startGuide);
  guideSkipButton?.addEventListener("click", closeGuide);
  guidePrevButton?.addEventListener("click", () => {
    if (activeGuideStepIndex <= 0) {
      return;
    }

    const steps = getGuideSteps();
    if (steps[activeGuideStepIndex]?.opensFullPlayer && guideOpenedPlayerOverlay && overlayOpen) {
      closePlayerOverlay();
      guideOpenedPlayerOverlay = false;
    }
    activeGuideStepIndex -= 1;
    renderGuideStep();
  });
  guideNextButton?.addEventListener("click", () => {
    const steps = getGuideSteps();
    if (activeGuideStepIndex >= steps.length - 1) {
      closeGuide();
      scrollPageToTop();
      return;
    }

    activeGuideStepIndex += 1;
    renderGuideStep();
  });
  window.addEventListener("resize", () => {
    if (!guideLayer || guideLayer.classList.contains("is-hidden")) {
      return;
    }
    renderGuideStep();
  });

  const preventGuideScroll = (event) => {
    if (!guideLayer || guideLayer.classList.contains("is-hidden")) {
      return;
    }
    event.preventDefault();
  };

  window.addEventListener("wheel", preventGuideScroll, { passive: false });
  window.addEventListener("touchmove", preventGuideScroll, { passive: false });
  window.addEventListener("keydown", (event) => {
    if (!guideLayer || guideLayer.classList.contains("is-hidden")) {
      return;
    }

    const scrollKeys = [" ", "PageDown", "PageUp", "ArrowDown", "ArrowUp", "Home", "End"];
    if (scrollKeys.includes(event.key) && !event.target.closest("button")) {
      event.preventDefault();
    }
  });
}

function renderPlayerLanguageSelector(tappa = null) {
  if (!playerLanguageSelector || !playerLanguageChips) {
    return;
  }

  const targetStop = tappa || tappe.find((item) => item.numero === activeStopNumber) || tappe[0];
  const strings = getUiStrings(currentLanguage);
  const audioOptions = targetStop ? getAudioOptions(targetStop) : [];
  const availableLanguages = audioOptions.filter((option) => option.audioDisponibile);
  const shouldShowSelector = false;

  playerLanguageSelector.hidden = !shouldShowSelector;
  playerLanguageSelector.classList.remove("is-open");
  playerLanguageCurrent?.setAttribute("aria-expanded", "false");
  playerLanguageChips.classList.add("is-menu-hidden");

  if (!shouldShowSelector) {
    playerLanguageChips.innerHTML = "";
    if (playerLanguageLabel) {
      playerLanguageLabel.hidden = true;
    }
    return;
  }

  const selectedCode = selectedLanguageByStop.get(targetStop.numero) || availableLanguages[0]?.codice;
  const selectedOption = availableLanguages.find((option) => option.codice === selectedCode) || availableLanguages[0];
  if (playerLanguageCurrentLabel) {
    playerLanguageCurrentLabel.textContent = getLanguageDisplayName(
      selectedOption?.codice || currentLanguage,
      selectedOption?.codice || currentLanguage,
    );
  }
  if (playerLanguageCurrent) {
    playerLanguageCurrent.setAttribute(
      "aria-label",
      strings.currentLanguage(getLanguageDisplayName(
        selectedOption?.codice || currentLanguage,
        selectedOption?.codice || currentLanguage,
      )),
    );
  }

  playerLanguageChips.innerHTML = "";
  availableLanguages.forEach((option) => {
    const languageCode = option.codice;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "language-chip tp-chip player-language-option";
    chip.setAttribute("role", "option");
    chip.setAttribute("aria-selected", String(languageCode === selectedOption?.codice));
    chip.textContent = `${languageCode} · ${getLanguageDisplayName(languageCode, languageCode)}`;
    chip.addEventListener("click", () => {
      closePlayerLanguageMenu();
      setCurrentLanguage(languageCode);
      replayAnimationClass(chip, "is-pulsing", 460);
    });
    playerLanguageChips.appendChild(chip);
  });

  if (playerLanguageLabel) {
    playerLanguageLabel.hidden = true;
  }
}

function closePlayerLanguageMenu() {
  playerLanguageSelector?.classList.remove("is-open");
  playerOverlay?.classList.remove("is-language-menu-open");
  playerLanguageChips?.classList.add("is-menu-hidden");
  playerLanguageCurrent?.setAttribute("aria-expanded", "false");
}

function syncPlayerLanguageMenuSurface() {
  if (!playerLanguageChips || !playerLanguageSelector || !playerOverlay) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 859px)").matches;
  const destination = isMobile ? playerOverlay : playerLanguageSelector;
  if (playerLanguageChips.parentElement !== destination) {
    destination.appendChild(playerLanguageChips);
  }
}

function togglePlayerLanguageMenu() {
  if (!playerLanguageSelector || playerLanguageSelector.hidden) {
    return;
  }

  syncPlayerLanguageMenuSurface();
  const isOpen = playerLanguageSelector.classList.toggle("is-open");
  playerOverlay?.classList.toggle("is-language-menu-open", isOpen);
  playerLanguageChips.classList.toggle("is-menu-hidden", !isOpen);
  playerLanguageCurrent?.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    playerLanguageChips.querySelector("[aria-selected=\"true\"]")?.focus();
  }
}

function renderDetailCopy(tappa) {
  const selectedOption = getSelectedAudioOption(tappa);
  const detailCopy = getDetailCopy(tappa, selectedOption);
  detailCopyTitle.setAttribute("aria-label", detailCopy.title);
  detailCopyTitle.title = detailCopy.title;
  detailDescription.textContent = detailCopy.text;
  detailCopyBox.open = false;
  syncDetailCopyPanel();
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
  setAudioFeedbackByKey("");
  const selectedOption = getSelectedAudioOption(tappa);
  const strings = getUiStrings(currentLanguage);
  currentSelectedOption = selectedOption;
  audioHasEnded = false;
  updateStopNavigationPreviews(tappa);

  if (!selectedOption || !selectedOption.audioDisponibile) {
    stopMascotLipSync();
    currentAudio = null;
    updateMiniPlayerPlayback();
    return;
  }

  const audio = document.createElement("audio");
  audio.controls = false;
  audio.preload = "metadata";
  audio.src = selectedOption.fileAudio;
  audio.dataset.mouthCues = getMouthCuePath(selectedOption.fileAudio);
  audio.loop = repeatEnabled;
  audio.defaultPlaybackRate = currentPlaybackRate;
  audio.playbackRate = currentPlaybackRate;
  audio.volume = currentVolume;
  audio.muted = volumeMuted;
  audio.setAttribute(
    "aria-label",
    `${strings.audioAvailable} ${tappa.numero} ${getLanguageDisplayName(
      selectedOption.codice
    ).toLowerCase()}`
  );
  bindAudioLifecycle(audio);
  audioWrapper.appendChild(audio);
  currentAudio = audio;
  updateMediaSession(tappa, selectedOption);
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
  miniPlayerRepeat.setAttribute("aria-pressed", String(repeatEnabled));
  updateMiniPlayerPlayback();
}

function formatPlaybackRate(rate) {
  const value = Number.isInteger(rate) ? String(rate) : rate.toFixed(1);
  return `x${value}`;
}

function updatePlaybackRateControl() {
  if (!playerSpeedButton || !playerSpeedLabel) {
    return;
  }

  const label = formatPlaybackRate(currentPlaybackRate);
  const accessibleLabel = `${getUiStrings(currentLanguage).playerSpeed}: ${label}`;
  playerSpeedLabel.textContent = label;
  playerSpeedButton.dataset.rate = String(currentPlaybackRate);
  playerSpeedButton.classList.toggle("is-active", currentPlaybackRate !== PLAYBACK_RATES[0]);
  playerSpeedButton.setAttribute("aria-label", accessibleLabel);
  playerSpeedButton.title = accessibleLabel;
}

function cyclePlaybackRate() {
  const currentIndex = PLAYBACK_RATES.indexOf(currentPlaybackRate);
  currentPlaybackRate = PLAYBACK_RATES[(currentIndex + 1) % PLAYBACK_RATES.length];
  if (currentAudio) {
    currentAudio.defaultPlaybackRate = currentPlaybackRate;
    currentAudio.playbackRate = currentPlaybackRate;
  }
  updatePlaybackRateControl();
}

function setDisplayedVolume(value) {
  const nextValue = Math.max(0, Math.min(1, Number(value)));
  miniPlayerVolume.value = String(nextValue);
  playerVolume.value = String(nextValue);
}

function animateDisplayedVolume(targetValue) {
  if (volumeSliderAnimationFrame !== null) {
    window.cancelAnimationFrame(volumeSliderAnimationFrame);
    volumeSliderAnimationFrame = null;
  }

  const nextValue = Math.max(0, Math.min(1, Number(targetValue)));
  const startValue = Number(miniPlayerVolume.value);
  if (reducedMotionQuery.matches || Math.abs(nextValue - startValue) < 0.001) {
    setDisplayedVolume(nextValue);
    return;
  }

  const startedAt = performance.now();
  const step = (now) => {
    const progress = Math.min(1, (now - startedAt) / VOLUME_UI_ANIMATION_DURATION);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    setDisplayedVolume(startValue + (nextValue - startValue) * easedProgress);

    if (progress < 1) {
      volumeSliderAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    setDisplayedVolume(nextValue);
    volumeSliderAnimationFrame = null;
  };

  volumeSliderAnimationFrame = window.requestAnimationFrame(step);
}

function animateVolumeIcons() {
  if (reducedMotionQuery.matches) {
    return;
  }

  if (volumeIconAnimationTimer !== null) {
    window.clearTimeout(volumeIconAnimationTimer);
  }

  [miniPlayerMute, playerMute].forEach((button) => {
    if (!button) {
      return;
    }
    button.classList.remove("is-volume-changing");
    void button.offsetWidth;
    button.classList.add("is-volume-changing");
  });

  volumeIconAnimationTimer = window.setTimeout(() => {
    [miniPlayerMute, playerMute].forEach((button) => button?.classList.remove("is-volume-changing"));
    volumeIconAnimationTimer = null;
  }, VOLUME_UI_ANIMATION_DURATION + 40);
}

function updateVolumeControls({ animateSlider = false } = {}) {
  const isSilent = volumeMuted || currentVolume <= 0;
  const displayedVolume = isSilent ? 0 : currentVolume;
  const iconName = isSilent ? "volume_off" : currentVolume < 0.5 ? "volume_down" : "volume_up";
  const strings = getUiStrings(currentLanguage);
  const accessibleLabel = isSilent ? strings.playerUnmute : strings.playerMute;

  [miniPlayerMute, playerMute].forEach((button) => {
    const icon = button?.querySelector(".material-symbols-rounded");
    if (icon) {
      icon.textContent = iconName;
    }
    button?.setAttribute("aria-label", accessibleLabel);
    button?.setAttribute("aria-pressed", String(isSilent));
    if (button) {
      button.title = accessibleLabel;
    }
  });

  if (animateSlider) {
    animateDisplayedVolume(displayedVolume);
    animateVolumeIcons();
  } else {
    if (volumeSliderAnimationFrame !== null) {
      window.cancelAnimationFrame(volumeSliderAnimationFrame);
      volumeSliderAnimationFrame = null;
    }
    setDisplayedVolume(displayedVolume);
  }
  if (currentAudio) {
    currentAudio.volume = currentVolume;
    currentAudio.muted = volumeMuted;
  }
}

function setVolumeFromControl(value) {
  currentVolume = Math.max(0, Math.min(1, Number(value)));
  volumeMuted = currentVolume <= 0;
  if (currentVolume > 0) {
    lastAudibleVolume = currentVolume;
  }
  updateVolumeControls();
}

function toggleMuted() {
  if (volumeMuted || currentVolume <= 0) {
    volumeMuted = false;
    if (currentVolume <= 0) {
      currentVolume = lastAudibleVolume || 0.85;
    }
  } else {
    lastAudibleVolume = currentVolume;
    volumeMuted = true;
  }
  updateVolumeControls({ animateSlider: true });
}

function playCurrentRenderedAudio() {
  const audio = audioWrapper.querySelector("audio");
  if (!audio) {
    return;
  }

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      setAudioFeedbackByKey(navigator.onLine ? "audioLoadError" : "offlineStatus");
    });
  }
}

function updateActiveListItem(stopNumber) {
  buttonsByStop.forEach((button, numero) => {
    button.classList.toggle("is-active", numero === stopNumber);
    button.setAttribute("aria-pressed", numero === stopNumber ? "true" : "false");
    button.setAttribute("aria-current", numero === stopNumber ? "true" : "false");
  });
}

function setPlayerBackgroundInert(isInert) {
  [appShell, miniPlayer].filter(Boolean).forEach((element) => {
    if ("inert" in element) {
      element.inert = isInert;
      return;
    }

    if (isInert) {
      element.setAttribute("aria-hidden", "true");
    } else {
      element.removeAttribute("aria-hidden");
    }
    element.classList.toggle("is-player-background-inert", isInert);
  });
}

function getPlayerFocusableElements() {
  if (!playerSheet) {
    return [];
  }

  return Array.from(
    playerSheet.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), summary, [href], [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hidden && element.offsetParent !== null);
}

function handlePlayerKeydown(event) {
  if (event.key === "Escape") {
    if (playerLanguageSelector?.classList.contains("is-open")) {
      closePlayerLanguageMenu();
      playerLanguageCurrent?.focus();
      return;
    }

    if (overlayOpen) {
      event.preventDefault();
      closePlayerOverlay();
    }
    return;
  }

  if (!overlayOpen || event.key !== "Tab") {
    return;
  }

  const focusable = getPlayerFocusableElements();
  if (!focusable.length) {
    event.preventDefault();
    playerSheet?.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openPlayerOverlay(trigger = document.activeElement, options = {}) {
  if (!options.keepGuideOpen) {
    closeGuide();
  }
  window.clearTimeout(playerOpenTransitionTimer);
  window.clearTimeout(playerCloseTransitionTimer);
  playerCloseTransitionTimer = null;
  playerOverlay.classList.remove("is-opening-from-mini");
  if (options.animateFromMini === true && !reducedMotionQuery.matches) {
    playerOverlay.classList.add("is-opening-from-mini");
    playerOpenTransitionTimer = window.setTimeout(() => {
      playerOverlay.classList.remove("is-opening-from-mini");
    }, 440);
  }
  lastPlayerTrigger = trigger instanceof HTMLElement ? trigger : null;
  overlayOpen = true;
  playerOverlay.classList.remove("is-closing");
  playerOverlay.classList.remove("is-hidden");
  playerOverlay.setAttribute("aria-hidden", "false");
  setPlayerBackgroundInert(true);
  document.body.classList.add("player-open");
  document.addEventListener("keydown", handlePlayerKeydown);
  schedulePlayerTitleOverflow();
  window.setTimeout(() => {
    if (!overlayOpen) {
      return;
    }

    const focusTarget = playerCloseButton || playerSheet;
    focusTarget?.focus({ preventScroll: true });
    if (document.activeElement !== focusTarget) {
      playerSheet?.focus({ preventScroll: true });
    }
    schedulePlayerTitleOverflow();
  }, 80);
  syncMiniPlayerReservedSpace();
}

function clearPlayerSharedTransitionNames() {
  [miniPlayerArtwork, miniPlayerTitle, detailArtworkImage, detailTitle].forEach((element) => {
    if (element) {
      element.style.viewTransitionName = "";
    }
  });
}

function openPlayerOverlayFromMini(trigger) {
  if (overlayOpen) {
    return;
  }

  if (reducedMotionQuery.matches || typeof document.startViewTransition !== "function") {
    openPlayerOverlay(trigger, { animateFromMini: !reducedMotionQuery.matches });
    return;
  }

  clearPlayerSharedTransitionNames();
  miniPlayerArtwork.style.viewTransitionName = "tp-player-artwork";
  miniPlayerTitle.style.viewTransitionName = "tp-player-title";

  try {
    const transition = document.startViewTransition(() => {
      miniPlayerArtwork.style.viewTransitionName = "";
      miniPlayerTitle.style.viewTransitionName = "";
      detailArtworkImage.style.viewTransitionName = "tp-player-artwork";
      detailTitle.style.viewTransitionName = "tp-player-title";
      openPlayerOverlay(trigger);
    });

    transition.finished.then(
      clearPlayerSharedTransitionNames,
      clearPlayerSharedTransitionNames,
    );
  } catch (error) {
    clearPlayerSharedTransitionNames();
    openPlayerOverlay(trigger, { animateFromMini: true });
  }
}

function closePlayerOverlay() {
  if (!overlayOpen) {
    return;
  }
  overlayOpen = false;
  window.clearTimeout(playerOpenTransitionTimer);
  window.clearTimeout(playerCloseTransitionTimer);
  playerOverlay.classList.remove("is-opening-from-mini");
  clearPlayerSharedTransitionNames();
  closePlayerLanguageMenu();
  playerOverlay.classList.add("is-closing");
  playerOverlay.setAttribute("aria-hidden", "true");
  document.removeEventListener("keydown", handlePlayerKeydown);

  const finishClose = () => {
    playerOverlay.classList.add("is-hidden");
    playerOverlay.classList.remove("is-closing");
    setPlayerBackgroundInert(false);
    document.body.classList.remove("player-open");
    lastPlayerTrigger?.focus({ preventScroll: true });
    syncMiniPlayerReservedSpace();
    playerCloseTransitionTimer = null;
  };

  if (reducedMotionQuery.matches) {
    finishClose();
    return;
  }

  playerCloseTransitionTimer = window.setTimeout(finishClose, 340);
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

  if (detailMascotImage) {
    detailMascotImage.src = MASCOT_FRAME_PATHS[currentMascotFrame] || MASCOT_REST_FRAME;
    detailMascotImage.alt = `Mascotte animata di Brunelleschi per tappa ${tappa.numero}`;
  }

  updateMiniPlayerPlayback();
  requestAnimationFrame(syncMiniPlayerReservedSpace);
}

function toggleMiniPlayerPlayback() {
  const audio = audioWrapper.querySelector("audio");
  if (!audio) {
    if (activeStopNumber !== null) {
      openPlayerOverlay(miniPlayerToggle);
    }
    return;
  }

  if (audio.paused) {
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        setAudioFeedbackByKey(navigator.onLine ? "audioLoadError" : "offlineStatus");
      });
    }
    return;
  }

  audio.pause();
}

function bindPlayerControls() {
  if (detailCopyBox) {
    detailCopyBox.addEventListener("toggle", syncDetailCopyPanel);
  }

  syncMascotTapSemantics();
  mascotTapQuery.addEventListener("change", syncMascotTapSemantics);

  getMascotMotionShells().forEach((shell) => {
    shell.addEventListener("click", (event) => {
      if (!supportsMascotDirectInteraction(shell)) {
        return;
      }

      event.stopPropagation();
      mascotMotionController?.tapReaction();
    });
    shell.addEventListener("keydown", (event) => {
      if (!supportsMascotDirectInteraction(shell) || (event.key !== "Enter" && event.key !== " ")) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      mascotMotionController?.tapReaction();
    });
  });

  if (artworkFlipToggle) {
    artworkFlipToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setDetailArtworkMode(detailArtworkMode === "mascot" ? "photo" : "mascot");
    });
  }

  if (miniPlayerExpand) {
    miniPlayerExpand.addEventListener("click", (event) => {
      consumeControlEvent(event);
      openPlayerOverlayFromMini(event.currentTarget);
    });
  }
  miniPlayerToggle.addEventListener("click", (event) => {
    consumeControlEvent(event);
    reactToTransport(document.querySelector(".mini-player-transport-group"), "play");
    toggleMiniPlayerPlayback();
  });
  miniPlayerPrev.addEventListener("click", (event) => {
    consumeControlEvent(event);
    reactToTransport(document.querySelector(".mini-player-transport-group"), "prev");
    if (isCurrentStopWithoutAudio()) {
      focusStopByOffset(-1);
      return;
    }
    seekCurrentAudio(-10);
  });
  miniPlayerNext.addEventListener("click", (event) => {
    consumeControlEvent(event);
    reactToTransport(document.querySelector(".mini-player-transport-group"), "next");
    if (isCurrentStopWithoutAudio()) {
      focusStopByOffset(1);
      return;
    }
    seekCurrentAudio(10);
  });
  miniPlayerRepeat.addEventListener("click", (event) => {
    consumeControlEvent(event);
    toggleRepeatMode();
  });
  playerPrevButton.addEventListener("click", (event) => {
    consumeControlEvent(event);
    reactToTransport(document.querySelector(".player-transport-group"), "prev");
    if (isCurrentStopWithoutAudio()) {
      focusStopByOffset(-1);
      return;
    }
    seekCurrentAudio(-10);
  });
  playerPlayButton.addEventListener("click", (event) => {
    consumeControlEvent(event);
    reactToTransport(document.querySelector(".player-transport-group"), "play");
    toggleMiniPlayerPlayback();
  });
  playerNextButton.addEventListener("click", (event) => {
    consumeControlEvent(event);
    reactToTransport(document.querySelector(".player-transport-group"), "next");
    if (isCurrentStopWithoutAudio()) {
      focusStopByOffset(1);
      return;
    }
    seekCurrentAudio(10);
  });
  playerSpeedButton.addEventListener("click", (event) => {
    consumeControlEvent(event);
    cyclePlaybackRate();
  });
  playerBackdrop.addEventListener("click", (event) => {
    consumeControlEvent(event);
    closePlayerOverlay();
  });
  playerCloseButton.addEventListener("click", (event) => {
    consumeControlEvent(event);
    closePlayerOverlay();
  });
  playerShareButton?.addEventListener("click", (event) => {
    consumeControlEvent(event);
    shareCurrentStop();
  });
  playerLanguageCurrent?.addEventListener("click", (event) => {
    consumeControlEvent(event);
    togglePlayerLanguageMenu();
  });
  document.addEventListener("pointerdown", (event) => {
    if (
      playerLanguageSelector?.classList.contains("is-open") &&
      !playerLanguageSelector.contains(event.target) &&
      !playerLanguageChips.contains(event.target)
    ) {
      closePlayerLanguageMenu();
    }
  });
  window.addEventListener("resize", () => {
    if (playerLanguageSelector?.classList.contains("is-open")) {
      syncPlayerLanguageMenuSurface();
    }
    schedulePlayerTitleOverflow();
  });
  document.fonts?.ready.then(schedulePlayerTitleOverflow);
  reducedMotionQuery.addEventListener("change", schedulePlayerTitleOverflow);
  playerNextStopButton?.addEventListener("click", (event) => {
    consumeControlEvent(event);
    focusStopByOffset(1);
  });
  playerPreviousStopButton?.addEventListener("click", (event) => {
    consumeControlEvent(event);
    focusStopByOffset(-1);
  });
  [miniPlayerMute, miniPlayerVolume, playerMute, playerVolume, playerProgressInput].forEach((control) => {
    control.addEventListener("click", stopControlPropagation);
    control.addEventListener("pointerdown", stopControlPropagation);
  });
  [miniPlayerMute, playerMute].forEach((button) => {
    button.addEventListener("click", (event) => {
      consumeControlEvent(event);
      toggleMuted();
    });
  });
  miniPlayerVolume.addEventListener("input", () => {
    setVolumeFromControl(miniPlayerVolume.value);
  });
  playerVolume.addEventListener("input", () => {
    setVolumeFromControl(playerVolume.value);
  });
  playerProgressInput.addEventListener("input", () => {
    if (!currentAudio || !Number.isFinite(currentAudio.duration)) {
      return;
    }
    isSeekingFromOverlay = true;
    const nextTime = (Number(playerProgressInput.value) / 100) * currentAudio.duration;
    playerCurrentTime.textContent = formatPlayerTime(nextTime);
    playerProgressInput.style.setProperty("--seek-progress", `${playerProgressInput.value}%`);
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

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function showPlayerShareFeedback() {
  const strings = getUiStrings(currentLanguage);
  window.clearTimeout(playerShareFeedbackTimer);
  if (playerShareStatus) {
    playerShareStatus.textContent = strings.shareCopied;
  }
  if (playerShareIcon) {
    playerShareIcon.textContent = "check";
  }
  playerShareButton?.classList.add("is-shared");
  playerShareFeedbackTimer = window.setTimeout(() => {
    if (playerShareIcon) {
      playerShareIcon.textContent = "share";
    }
    playerShareButton?.classList.remove("is-shared");
    if (playerShareStatus) {
      playerShareStatus.textContent = "";
    }
  }, 1400);
}

async function shareCurrentStop() {
  const activeStop = tappe.find((tappa) => tappa.numero === activeStopNumber) || tappe[0];
  const stopTitle = getStopTitle(activeStop);
  const shareData = {
    title: `${activeStop.numero}. ${stopTitle}`,
    text: `${stopTitle} - ${document.title}`,
    url: window.location.href,
  };

  if (typeof navigator.share === "function") {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
    }
  }

  try {
    await copyTextToClipboard(shareData.url);
    showPlayerShareFeedback();
  } catch (error) {
    window.location.href = shareMail?.href || `mailto:?body=${encodeURIComponent(shareData.url)}`;
  }
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
  eyebrowText.textContent = strings.prototype;
  if (introLeadText) introLeadText.textContent = strings.introLead;
  introText.textContent = strings.intro;
  stopsTitle.textContent = strings.routeTitle;
  stopsSubtitle.textContent = "";
  stopsSubtitle.hidden = true;
  platformsEyebrow.textContent = strings.platformsEyebrow;
  shareTitle.textContent = strings.shareTitle;
  locateMeButton.setAttribute("aria-label", strings.locateMe);
  locateMeButton.title = strings.locateMe;
  detailCopyTitle.setAttribute("aria-label", strings.transcriptTitle);
  detailCopyTitle.title = strings.transcriptTitle;
  if (detailCopyLabel) detailCopyLabel.textContent = strings.transcriptTitle;
  playerTranscriptDock?.setAttribute("aria-label", strings.transcriptTitle);
  stopsList.setAttribute("aria-label", strings.routeTitle);
  playerPrevButton.setAttribute("aria-label", strings.playerRewind);
  playerPlayButton.setAttribute("aria-label", strings.playerPlay);
  playerNextButton.setAttribute("aria-label", strings.playerForward);
  updatePlaybackRateControl();
  miniPlayerPrev.setAttribute("aria-label", strings.playerRewind);
  miniPlayerToggle.setAttribute("aria-label", strings.playerPlay);
  miniPlayerNext.setAttribute("aria-label", strings.playerForward);
  miniPlayerRepeat.setAttribute("aria-label", strings.playerRepeat);
  if (miniPlayerExpand) {
    miniPlayerExpand.setAttribute("aria-label", strings.playerExpand);
    miniPlayerExpand.title = strings.playerExpand;
  }

  playerBackdrop?.setAttribute("aria-label", strings.playerClose);
  playerCloseButton?.setAttribute("aria-label", strings.playerClose);
  playerCloseButton.title = strings.playerClose;
  playerShareButton?.setAttribute("aria-label", strings.playerShare);
  if (playerShareButton) playerShareButton.title = strings.playerShare;
  miniPlayerVolume?.setAttribute("aria-label", strings.playerVolume);
  playerVolume?.setAttribute("aria-label", strings.playerVolume);
  updateVolumeControls();
  playerProgressInput?.setAttribute("aria-label", strings.playerProgress);
  shareFacebook?.setAttribute("aria-label", strings.shareFacebook);
  shareX?.setAttribute("aria-label", strings.shareX);
  shareLinkedin?.setAttribute("aria-label", strings.shareLinkedin);
  shareWhatsapp?.setAttribute("aria-label", strings.shareWhatsapp);
  shareMail?.setAttribute("aria-label", strings.shareEmail);
  const playerHelpCloseButton = document.getElementById("player-help-close-button");
  const playerHelpPrevButton = document.getElementById("player-help-prev-button");
  const playerHelpNextButton = document.getElementById("player-help-next-button");
  playerHelpCloseButton?.setAttribute("aria-label", strings.guideSkip);
  playerHelpPrevButton?.setAttribute("aria-label", strings.guideBack);
  playerHelpNextButton?.setAttribute("aria-label", strings.guideNext);
  if (playerHelpCloseButton) playerHelpCloseButton.title = strings.guideSkip;
  if (playerHelpPrevButton) playerHelpPrevButton.title = strings.guideBack;
  if (playerHelpNextButton) playerHelpNextButton.title = strings.guideNext;
  updateMapFullscreenButton();
  setDetailArtworkMode(detailArtworkMode);
  syncMascotTapSemantics();
  updateMapDirectionsButton();
  
  // Newly translated static text elements
  if (brandNameEl) brandNameEl.textContent = strings.brandName;
  if (brandTagEl) brandTagEl.textContent = strings.brandTag;
  if (landingTitle) landingTitle.textContent = strings.mainTitle;
  if (mapStageNote) mapStageNote.textContent = strings.mapStageNote;
  updateShareLinks();
  updateMiniPlayerPlayback();
  renderPlayerLanguageSelector(activeStopNumber ? tappe.find((tappa) => tappa.numero === activeStopNumber) : tappe[0]);

  if (currentMapStatusKey) {
    setMapLoadStatusByKey(currentMapStatusKey);
  }

  if (currentAudioStatusKey) {
    setAudioFeedbackByKey(currentAudioStatusKey);
  }
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
  const shouldSyncUrl = options.syncUrl !== false;
  const shouldReplaceUrl = options.replaceUrl === true;
  const previousCurrentTime = currentAudio?.currentTime || 0;
  const previousWasPlaying = currentAudio ? !currentAudio.paused : false;
  const isChangingStop = activeStopNumber !== null && activeStopNumber !== tappa.numero;

  activeStopNumber = tappa.numero;
  setStoredValue(LAST_STOP_STORAGE_KEY, String(tappa.numero));
  updateActiveListItem(tappa.numero);
  updateActiveRouteSegment(tappa.numero, { animate: options.animateRoute === true });

  detailNumber.textContent = tappa.numero;
  const stopTitle = getStopTitle(tappa);
  detailTitleText.textContent = stopTitle;
  detailTitle.title = stopTitle;
  if (overlayOpen) {
    schedulePlayerTitleOverflow();
  }
  detailDuration.textContent = hasMeaningfulDuration(tappa.durata) ? tappa.durata : "";
  detailDuration.hidden = !hasMeaningfulDuration(tappa.durata);
  detailStatus.textContent = "";
  detailStatus.hidden = true;
  renderDetailCopy(tappa);
  updateMiniPlayer(tappa, selectedOption);
  renderPlayerLanguageSelector(tappa);

  if (isChangingStop) {
    mascotMotionController?.stopTransition();
  }

  if (shouldSyncUrl) {
    syncUrlState({ replace: shouldReplaceUrl });
  }

  stopCurrentAudio();
  renderAudioContent(tappa);

  const renderedAudio = audioWrapper.querySelector("audio");

  if (
    preservePlayback &&
    renderedAudio &&
    selectedOption?.audioDisponibile
  ) {
    const restoreCurrentTime = () => {
      const maximumTime = Number.isFinite(renderedAudio.duration)
        ? Math.max(0, renderedAudio.duration - 0.01)
        : previousCurrentTime;
      renderedAudio.currentTime = Math.min(previousCurrentTime, maximumTime);
    };

    if (renderedAudio.readyState >= HTMLMediaElement.HAVE_METADATA) {
      restoreCurrentTime();
    } else {
      renderedAudio.addEventListener("loadedmetadata", restoreCurrentTime, { once: true });
    }

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

  updateMapExploreStop(tappa);
  updateMapDirectionsButton(tappa);
  updateStopPreview(tappa, { animate: false });

  const shouldAnimateRoute = options.animateRoute === true && !reducedMotionQuery.matches;
  const focusMap = () => {
    if (marker) {
      if (!options.skipFly) {
        map.flyTo([tappa.latitudine, tappa.longitudine], Math.max(map.getZoom(), 17), {
          animate: true,
          duration: 0.8,
        });
      }
      marker.closePopup();
    }
    highlightActiveMarker(tappa.numero);
  };
  const scrollToRoute = () => {
    if (!options.scrollRouteIntoView) {
      return;
    }

    if (window.matchMedia("(min-width: 1024px)").matches) {
      scrollRouteIntoView();
      return;
    }

    if (window.matchMedia("(max-width: 860px)").matches) {
      scrollMapStageIntoView();
    }
  };

  clearRouteSelectionTimers();
  if (shouldAnimateRoute) {
    animateRouteSelectionCard(tappa.numero);
    scheduleRouteSelection(() => {
      focusMap();
      scrollToRoute();
    }, 120);
    scheduleRouteSelection(() => {
      updateStopPreview(tappa, { animate: true });
    }, 260);
    return;
  }

  focusMap();
  pulseActiveStopCard(tappa.numero);
  updateStopPreview(tappa, { animate: options.animatePreview === true });
  scrollToRoute();
}

function renderStopsList() {
  stopsList.innerHTML = "";
  buttonsByStop.clear();
  const fragment = document.createDocumentFragment();

  tappe.forEach((tappa) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stop-button tp-stop-card";
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-current", "false");

    button.innerHTML = `
      <span class="stop-index">${tappa.numero}</span>
      <span>
        <strong class="stop-title">${getStopTitle(tappa)}</strong>
        ${hasMeaningfulDuration(tappa.durata) ? `<span class="stop-meta">${tappa.durata}</span>` : ""}
      </span>
    `;

    button.addEventListener("click", () => {
      focusStop(tappa, {
        autoplay: true,
        openOverlay: false,
        scrollRouteIntoView: true,
        animatePreview: true,
        animateRoute: true,
      });
      cueMapDirectionsButton();
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
  const routeData = getDisplayRouteData(routeGeoJson.features[0].geometry.coordinates);
  displayRouteCoordinates = routeData.routeCoordinates;
  routeCoordinateIndexByStop.clear();
  routeData.coordinateIndexByStop.forEach((coordinateIndex, stopNumber) => {
    routeCoordinateIndexByStop.set(stopNumber, coordinateIndex);
  });

  const routeLayer = L.polyline(displayRouteCoordinates.map(([longitude, latitude]) => [latitude, longitude]), {
    color: "#216f62",
    weight: 5,
    opacity: 0.8,
    lineCap: "round",
    lineJoin: "round",
    smoothFactor: 2,
  }).addTo(map);

  activeRouteLayer = L.polyline([], {
    className: "map-route-active",
    color: "#f4d85a",
    weight: 9,
    opacity: 0.98,
    lineCap: "round",
    lineJoin: "round",
    smoothFactor: 2,
    interactive: false,
  }).addTo(map);

  tappe.forEach((tappa) => {
    const marker = L.marker([tappa.latitudine, tappa.longitudine], {
      icon: createMarkerIcon(tappa.numero),
      title: `${tappa.numero}. ${getStopTitle(tappa)}`,
    })
      .addTo(map)
      .bindPopup(popupHtml(tappa));

    marker.on("click", () => {
      focusStop(tappa, {
        autoplay: true,
        animateRoute: true,
        openOverlay: false,
      });
      cueMapDirectionsButton();
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

function protectMaterialSymbolsFromTranslation(root = document) {
  root.querySelectorAll?.(".material-symbols-rounded").forEach((icon) => {
    icon.setAttribute("translate", "no");
    icon.classList.add("notranslate");
  });
}

protectMaterialSymbolsFromTranslation();
const initialUrlState = getUrlState();
currentLanguage = getInitialLanguage(initialUrlState.language);
syncSelectedLanguagesForCurrentLanguage();

preloadMascotFrames();
setMascotFrame("X");
mascotMotionController = createMascotMotionController();
mascotMotionController.start();
reducedMotionQuery.addEventListener("change", () => {
  mascotMotionController?.updateReducedMotion();
});
setDetailArtworkMode("photo");
renderStopsList();
renderMap();
renderStaticTexts();
renderGlobalLanguageSelector();
bindGlobalLanguageSelector();
renderOnboardingTexts();
renderOnboardingLanguageSelector();
bindMapLoadFeedback(baseTileLayer);
bindLocateButton();
bindMapFullscreenButton();
bindPlayerControls();
bindMiniPlayerLayoutSync();
bindHelpControls();
focusStop(initialUrlState.stop || tappe[0], { skipFly: true, replaceUrl: true });
showOnboardingIfNeeded();

if (!navigator.onLine) {
  setMapLoadStatusByKey("offlineStatus");
}

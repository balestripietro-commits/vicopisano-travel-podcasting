/* Travel Podcasting · lingue aggiuntive: cinese semplificato (ZH) e arabo (AR).
   Si carica prima di app.js; app.js chiama TPLangExtra.apply() quando le tabelle dei testi sono pronte.
   Testi dell'interfaccia tradotti da bozza: da far rivedere a un madrelingua. */
(function () {
  "use strict";

  var NAMES = {
    IT: { ZH: "Cinese", AR: "Arabo" },
    EN: { ZH: "Chinese", AR: "Arabic" },
    DE: { ZH: "Chinesisch", AR: "Arabisch" },
    FR: { ZH: "Chinois", AR: "Arabe" },
    ES: { ZH: "Chino", AR: "Árabe" },
    PT: { ZH: "Chinês", AR: "Árabe" },
    RU: { ZH: "Китайский", AR: "Арабский" }
  };
  var OWN = { IT: "Italiano", EN: "English", DE: "Deutsch", FR: "Français", ES: "Español", PT: "Português", RU: "Русский", ZH: "中文", AR: "العربية" };

  var ZH = {
    prototype: "",
    introLead: "我是菲利波·布鲁内莱斯基。",
    intro: "来探索维科皮萨诺吧。\n我会带你穿过塔楼、巡逻通道\n和隐藏的故事，一站一站地走下去。",
    instructionsTitle: "使用说明",
    instructionsText: "地图显示完整路线，共1至8个站点。你可以从列表中选择站点，也可以直接点按地图：网站会突出显示所选地点，将其居中，并打开对应内容。",
    routeTitle: "路线站点",
    stopLabel: "站点",
    routeSubtitle: "村中的8个收听点。",
    shareTitle: "分享给朋友",
    locateMe: "定位我的位置",
    locatingMe: "正在查找你的位置…",
    locationFound: "已在地图上找到你的位置。",
    locationOutsideRoute: "你不在路线区域内。这里是维科皮萨诺的站点。",
    geolocationUnsupported: "此浏览器不支持定位。",
    geolocationDenied: "定位权限被拒绝。",
    geolocationUnavailable: "无法获取位置。",
    geolocationTimeout: "查找位置超时。",
    geolocationHttpsHint: "在智能手机上，需要 HTTPS 才能可靠定位。",
    detailEmptyTitle: "请选择站点",
    detailEmptyText: "从列表或地图中打开站点，查看标题、介绍和音频播放器。",
    durationUnavailable: "暂无时长",
    audioAvailable: "有音频",
    audioUnavailable: "音频暂未提供",
    audioAvailableInLanguages: function (count) { return "提供" + count + "种语言的音频"; },
    listAudioAvailableInLanguages: function (count) { return "提供" + count + "种语言"; },
    languageSelectorTitle: "导览语言",
    descriptiveText: "文字介绍",
    transcriptTitle: "文字稿",
    playerPrevious: "上一站",
    playerPlay: "播放音频",
    playerPause: "暂停音频",
    playerNext: "下一站",
    playerRewind: "后退10秒",
    playerForward: "前进10秒",
    playerSpeed: "播放速度",
    playerExpand: "打开全屏播放器",
    playerClose: "关闭播放器",
    playerShare: "分享此站",
    shareCopied: "链接已复制",
    playerProgress: "播放位置",
    mapOpenFullscreen: "全屏打开地图",
    mapCloseFullscreen: "关闭全屏地图",
    playerSwitchToMap: "显示地图和播放器",
    playerSwitchToListen: "打开完整音频播放器",
    mapRecenter: "居中显示所有站点",
    languageSelector: "语言选择",
    currentLanguage: function (language) { return "当前语言：" + language; },
    showMascot: "显示动画吉祥物",
    showPhoto: "显示站点照片",
    animateMascot: "让吉祥物动起来",
    shareFacebook: "分享到 Facebook",
    shareX: "分享到 X",
    shareLinkedin: "分享到 LinkedIn",
    shareWhatsapp: "分享到 WhatsApp",
    shareEmail: "通过电子邮件分享",
    nextStopPreview: "下一站",
    openNextStop: "打开下一站",
    firstStopPreview: "返回第一站",
    openFirstStop: "返回第一站",
    mapStageNote: "点按标记，或使用下方站点，打开路线音频播放器。",
    highlightTitle: "收听时",
    highlightText: "地图始终是体验的中心，底部固定的播放器在你收听时陪伴你，不会打断导航。这样你可以简单、直观地继续探索路线。"
  };

  var AR = {
    prototype: "",
    introLead: "أنا فيليبو برونليسكي.",
    intro: "تعالوا نستكشف فيكوبيزانو.\nسأرافقكم بين الأبراج والممرات\nوالحكايات الخفية، محطةً بعد محطة.",
    instructionsTitle: "التعليمات",
    instructionsText: "تعرض الخريطة المسار كاملاً، بمحطاته من 1 إلى 8. يمكنكم اختيار محطة من القائمة أو الضغط عليها مباشرة على الخريطة: سيبرز الموقع المختار ويتوسّط العرض ويفتح محتواه.",
    routeTitle: "محطات المسار",
    stopLabel: "محطة",
    routeSubtitle: "8 نقاط استماع في البلدة.",
    shareTitle: "شاركوا مع أصدقائكم",
    locateMe: "حدّد موقعي",
    locatingMe: "جارٍ البحث عن موقعكم…",
    locationFound: "تم العثور على موقعكم على الخريطة.",
    locationOutsideRoute: "أنتم خارج منطقة المسار. هذه محطات فيكوبيزانو.",
    geolocationUnsupported: "هذا المتصفح لا يدعم تحديد الموقع.",
    geolocationDenied: "تم رفض إذن الموقع.",
    geolocationUnavailable: "الموقع غير متاح.",
    geolocationTimeout: "انتهت مهلة البحث عن الموقع.",
    geolocationHttpsHint: "على الهواتف الذكية يلزم HTTPS لتحديد الموقع بشكل موثوق.",
    detailEmptyTitle: "اختاروا محطة",
    detailEmptyText: "افتحوا محطة من القائمة أو من الخريطة لعرض العنوان والوصف ومشغّل الصوت.",
    durationUnavailable: "المدة غير متاحة",
    audioAvailable: "الصوت متاح",
    audioUnavailable: "الصوت غير متاح بعد",
    audioAvailableInLanguages: function (count) { return "الصوت متاح بـ" + count + " لغات"; },
    listAudioAvailableInLanguages: function (count) { return count + " لغات متاحة"; },
    languageSelectorTitle: "لغة الجولة",
    descriptiveText: "نص وصفي",
    transcriptTitle: "النص المكتوب",
    playerPrevious: "المحطة السابقة",
    playerPlay: "تشغيل الصوت",
    playerPause: "إيقاف الصوت مؤقتاً",
    playerNext: "المحطة التالية",
    playerRewind: "رجوع 10 ثوانٍ",
    playerForward: "تقديم 10 ثوانٍ",
    playerSpeed: "سرعة التشغيل",
    playerExpand: "فتح المشغّل بملء الشاشة",
    playerClose: "إغلاق المشغّل",
    playerShare: "شاركوا هذه المحطة",
    shareCopied: "تم نسخ الرابط",
    playerProgress: "موضع المقطع",
    mapOpenFullscreen: "فتح الخريطة بملء الشاشة",
    mapCloseFullscreen: "إغلاق الخريطة بملء الشاشة",
    playerSwitchToMap: "عرض الخريطة والمشغّل",
    playerSwitchToListen: "فتح مشغّل الصوت الكامل",
    mapRecenter: "توسيط كل المحطات",
    languageSelector: "اختيار اللغة",
    currentLanguage: function (language) { return "اللغة الحالية: " + language; },
    showMascot: "إظهار التميمة المتحركة",
    showPhoto: "إظهار صورة المحطة",
    animateMascot: "تحريك التميمة",
    shareFacebook: "مشاركة على Facebook",
    shareX: "مشاركة على X",
    shareLinkedin: "مشاركة على LinkedIn",
    shareWhatsapp: "مشاركة على WhatsApp",
    shareEmail: "مشاركة بالبريد الإلكتروني",
    nextStopPreview: "المحطة التالية",
    openNextStop: "فتح المحطة التالية",
    firstStopPreview: "العودة إلى المحطة الأولى",
    openFirstStop: "العودة إلى المحطة الأولى",
    mapStageNote: "المسوا العلامات أو استخدموا المحطات أدناه لفتح مشغّل صوت المسار.",
    highlightTitle: "أثناء الاستماع",
    highlightText: "تبقى الخريطة في قلب التجربة، بينما يرافقكم المشغّل الثابت في الأسفل أثناء الاستماع دون أن يقطع التنقل. هكذا تواصلون استكشاف المسار ببساطة وسلاسة."
  };

  var ONB = {
    ZH: {
      onboardingTitle: "选择语言，开始路线", onboardingHint: "你可以随时更改。",
      languageUnavailable: "该语言暂未提供。目前只有意大利语可用。", languageUnavailableTitle: "语言不可用", languageUnavailableClose: "关闭",
      helpButton: "帮助", guideSkip: "关闭", guideBack: "返回", guideNext: "下一步", guideDone: "完成",
      guideExitConfirm: "要退出教程吗？", guideExitContinue: "继续", guideExitAccept: "退出",
      guideMap: "地图显示路线站点。点按数字即可打开站点并启动播放器。",
      guideLocation: "用这个按钮让地图重新居中到各站点，重新找到路线。",
      guideDirections: "这个按钮会打开 Google 地图，显示前往所选站点的步行路线。",
      guideStops: "你也可以从列表中选择站点：网站会将地图居中并准备好音频。",
      guidePlayer: "游览期间，播放器始终停留在底部。",
      guideExplore: "在电脑上，用这个按钮打开扩展地图，音频控制和站点列表在一旁。",
      guideExploreView: "这是扩展视图：地图占据可用空间，播放器位于右侧面板。",
      guideCloseExplore: "用这个按钮关闭扩展视图并返回首页。",
      guideFullPlayer: "这是完整播放器视图：控制音频、跟随文字稿，并切换到附近的站点。",
      guidePlayerMapToggle: "用这个按钮打开全屏音频播放器，同时不关闭路线。",
      guideListeningView: "这是全屏音频播放器：这里有照片、控制按钮和完整的同步文字稿。",
      guideReturnToMap: "用这个按钮回到“地图＋播放器”，停留在同一站点。",
      guideClosePlayer: "点按 X 关闭完整播放器并返回首页。"
    },
    AR: {
      onboardingTitle: "اختاروا اللغة لبدء المسار", onboardingHint: "يمكنكم تغييرها في أي وقت.",
      languageUnavailable: "هذه اللغة غير متاحة بعد. حالياً الإيطالية فقط متاحة.", languageUnavailableTitle: "اللغة غير متاحة", languageUnavailableClose: "إغلاق",
      helpButton: "مساعدة", guideSkip: "إغلاق", guideBack: "رجوع", guideNext: "التالي", guideDone: "تم",
      guideExitConfirm: "هل تريدون إيقاف الشرح؟", guideExitContinue: "متابعة", guideExitAccept: "إيقاف",
      guideMap: "تعرض الخريطة محطات المسار. المسوا رقماً لفتح المحطة وتشغيل المشغّل.",
      guideLocation: "استخدموا هذا الزر لإعادة توسيط الخريطة على المحطات والعثور على المسار من جديد.",
      guideDirections: "يفتح هذا الزر خرائط Google مع اتجاهات المشي إلى المحطة المختارة.",
      guideStops: "يمكنكم أيضاً اختيار محطة من القائمة: سيوسّط الموقع الخريطة ويجهّز الصوت.",
      guidePlayer: "يبقى المشغّل متاحاً في الأسفل طوال زيارتكم.",
      guideExplore: "على الحاسوب، استخدموا هذا الزر لفتح الخريطة الموسّعة مع أزرار الصوت والمحطات بجانبها.",
      guideExploreView: "هذا هو العرض الموسّع: تستغل الخريطة المساحة المتاحة بينما يبقى المشغّل في اللوحة الجانبية.",
      guideCloseExplore: "استخدموا هذا الزر لإغلاق العرض الموسّع والعودة إلى الصفحة الرئيسية.",
      guideFullPlayer: "هذا هو عرض المشغّل الكامل: تحكّموا بالصوت وتابعوا النص المكتوب وانتقلوا إلى المحطات القريبة.",
      guidePlayerMapToggle: "استخدموا هذا الزر لفتح مشغّل الصوت بملء الشاشة دون إغلاق المسار.",
      guideListeningView: "هذا هو مشغّل الصوت بملء الشاشة: تجدون هنا الصورة وأزرار التحكم والنص المكتوب المتزامن كاملاً.",
      guideReturnToMap: "استخدموا هذا الزر للعودة إلى «الخريطة + المشغّل» عند المحطة نفسها.",
      guideClosePlayer: "استخدموا X لإغلاق المشغّل الكامل والعودة إلى الصفحة الرئيسية."
    }
  };

  var STATUS = {
    ZH: { offlineStatus: "你已离线，或网络不稳定。", mapLoadError: "地图加载不正常，请稍后重试。", mapLocalServerRequired: "要查看地图，请运行 npm run dev 并打开 http://localhost:8000，而不是直接打开 index.html 文件。", audioLoading: "正在加载音频…", audioBuffering: "正在缓冲音频…", audioLoadError: "音频暂时无法播放，请稍后再试。" },
    AR: { offlineStatus: "أنتم غير متصلين أو أن الاتصال غير مستقر.", mapLoadError: "الخريطة لا تُحمَّل بشكل صحيح. حاولوا مرة أخرى بعد قليل.", mapLocalServerRequired: "لعرض الخريطة، شغّلوا npm run dev وافتحوا http://localhost:8000 بدلاً من فتح ملف index.html مباشرة.", audioLoading: "جارٍ تحميل الصوت…", audioBuffering: "جارٍ تخزين الصوت مؤقتاً…", audioLoadError: "الصوت غير متاح حالياً. حاولوا مرة أخرى بعد قليل." }
  };

  var GUIDE = {
    ZH: {
      map: ["用一根手指拖动地图，用两根手指捏合缩放。点按数字打开站点；音频字幕显示在下方。", "允许定位后，这个按钮会在地图上找到你的位置。", "这个按钮会在 Google 地图中打开步行路线。", "这个按钮切换到完整音频播放器。", "X 会关闭完整播放器并返回页面。关闭本引导不会触发它。"],
      listen: ["这是完整音频播放器：收听站点并阅读完整文字稿。较长的标题会滚动一次，方便你读完。", "这个按钮会回到地图和播放器，音频不会中断。", "X 会关闭完整播放器并返回页面。关闭本引导不会触发它。"],
      mapHelp: "地图和播放器引导", listenHelp: "完整音频播放器引导", close: "关闭引导", previous: "返回", next: "下一步", finish: "结束引导"
    },
    AR: {
      map: ["حرّكوا الخريطة بإصبع واحد وقرّبوا أو بعّدوا بإصبعين. تفتح الأرقام المحطات، وتظهر ترجمة الصوت في الأسفل.", "يحدّد هذا الزر موقعكم على الخريطة إذا سمحتم بالوصول إلى الموقع.", "يفتح هذا الزر اتجاهات المشي في خرائط Google.", "يبدّل هذا الزر إلى مشغّل الصوت الكامل.", "يغلق X المشغّل الكامل ويعيدكم إلى الصفحة. إغلاق هذا الدليل لا يضغط عليه."],
      listen: ["هذا هو مشغّل الصوت الكامل: استمعوا إلى المحطة واقرأوا النص كاملاً. يتحرك العنوان الطويل مرة واحدة لتقرأوه كله.", "يعيدكم هذا الزر إلى الخريطة والمشغّل دون إيقاف الصوت.", "يغلق X المشغّل الكامل ويعيدكم إلى الصفحة. إغلاق هذا الدليل لا يضغط عليه."],
      mapHelp: "دليل الخريطة والمشغّل", listenHelp: "دليل مشغّل الصوت الكامل", close: "إغلاق الدليل", previous: "رجوع", next: "التالي", finish: "إنهاء الدليل"
    }
  };

  var TITLES = {
    1: { ZH: "四门塔", AR: "برج الأبواب الأربعة" },
    2: { ZH: "救援塔与救援通道", AR: "برج وممر سوكورسو" },
    3: { ZH: "法官宫", AR: "القصر البريتوري" },
    4: { ZH: "布鲁内莱斯基要塞", AR: "قلعة برونليسكي" },
    5: { ZH: "钟楼", AR: "برج الساعة" },
    6: { ZH: "圣玛丽亚教区教堂", AR: "كنيسة سانتا ماريا" },
    7: { ZH: "双塔", AR: "البرجان التوأمان" },
    8: { ZH: "维科皮萨诺市政厅", AR: "دار بلدية فيكوبيزانو" }
  };

  var DESC = {
    1: { ZH: "进入村庄的象征性入口，也是路线的开篇。这座塔点出路线的主题：维科皮萨诺如今是热情好客的地方，但最初的建造是为了控制、防御和守望这片土地。", AR: "البوابة الرمزية إلى القرية ومحطة افتتاح المسار. يقدّم البرج موضوع الجولة: فيكوبيزانو مكان مضياف اليوم، لكنها بُنيت في الأصل للسيطرة والدفاع ومراقبة الأرض." },
    2: { ZH: "这一站讲的是与要塞相连的防御系统，以及围城时向要塞补给或增援的可能。", AR: "محطة مخصصة لمنظومة الدفاع المرتبطة بالقلعة، وإمكانية تموين الحصن أو إسناده أثناء الحصار." },
    3: { ZH: "民事与行政权力的所在。经历战争与征服之后，对村庄的控制也要通过机构、司法和治理来实现。", AR: "مقرّ السلطة المدنية والإدارية. بعد الحرب والفتح، صار الحكم على القرية يمر أيضاً عبر المؤسسات والقضاء والإدارة." },
    4: { ZH: "路线的军事核心。这里的叙述围绕布鲁内莱斯基、村庄如何变成要塞，以及抵抗的逻辑。", AR: "القلب العسكري للمسار. هنا تتركز الحكاية على برونليسكي وتحويل القرية إلى حصن ومنطق المقاومة." },
    5: { ZH: "兰特街上的中世纪塔楼，由军事建筑改成钟楼，后来又装上了时钟。", AR: "برج من العصور الوسطى في شارع لانتي، تحوّل من منشأة عسكرية إلى برج أجراس ثم زُوِّد بساعة." },
    6: { ZH: "这座罗曼式教堂自934年起便有文献记载，讲述村庄的宗教生活，并保存着一组十三世纪的木雕《下十字架》。", AR: "الكنيسة الرومانسكية الموثّقة منذ عام 934 تروي الحياة الدينية للقرية وتحفظ مجموعة خشبية من القرن الثالث عشر تصوّر إنزال المسيح عن الصليب." },
    7: { ZH: "两座十二世纪的塔，属于早先比萨人的防御工事；砖石砌体记录了后来的改建，市政厅如今包含了其中一部分。", AR: "برجان من القرن الثاني عشر من التحصينات البيزية القديمة؛ يسجّل بناؤهما التعديلات اللاحقة، وتضم دار البلدية اليوم جزءاً منهما." },
    8: { ZH: "村中心的最后一站：昔日的文书厅如今是市政厅，依然是维科皮萨诺日常生活的一部分。", AR: "المحطة الأخيرة في قلب القرية: الديوان القديم صار اليوم دار البلدية، وما زال جزءاً من الحياة اليومية في فيكوبيزانو." }
  };

  function copy(o) { var r = {}, k; for (k in o) r[k] = o[k]; return r; }

  window.TPLangExtra = {
    names: NAMES,
    apply: function (t) {
      ["ZH", "AR"].forEach(function (c) {
        if (t.siteLanguages.indexOf(c) < 0) t.siteLanguages.push(c);
        var base = copy(t.uiStrings.EN);
        var own = c === "ZH" ? ZH : AR, k;
        for (k in own) base[k] = own[k];
        base.brandName = t.uiStrings.EN.brandName;
        base.brandTag = t.uiStrings.EN.brandTag;
        base.mainTitle = "\u200E" + t.uiStrings.EN.mainTitle + "\u200E";
        base.languageNames = {};
        Object.keys(OWN).forEach(function (l) { base.languageNames[l] = OWN[l]; });
        t.uiStrings[c] = base;
        t.onboardingUiStrings[c] = ONB[c];
        t.statusMessages[c] = STATUS[c];
        if (t.playerContextGuideCopy) t.playerContextGuideCopy[c] = GUIDE[c];
        Object.keys(TITLES).forEach(function (n) { t.stopTitles[n][c] = TITLES[n][c]; });
        Object.keys(DESC).forEach(function (n) { t.stopDescriptions[n][c] = DESC[n][c]; });
      });
      Object.keys(NAMES).forEach(function (l) {
        if (t.uiStrings[l] && t.uiStrings[l].languageNames) { t.uiStrings[l].languageNames.ZH = NAMES[l].ZH; t.uiStrings[l].languageNames.AR = NAMES[l].AR; }
      });
    }
  };
})();

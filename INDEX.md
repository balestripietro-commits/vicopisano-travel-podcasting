# INDEX


## Root locale master del progetto

- `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`
## Contenuto

- `index.html`: pagina principale del prototipo statico.
- Il pulsante Google Maps usa un pin `location_on` nel controllo desktop della mappa e l'icona `map` nel full player.
- Il player esteso ripropone lo stesso pulsante Google Maps tra `+10` e `x1`, con destinazione sincronizzata alla tappa attiva.
- Il pulsante Google Maps usa sempre il simbolo `location_on`, senza l'icona a mappa con riga orizzontale, sia nella mappa normale sia nel full player su desktop e mobile; il localizzatore è leggermente ingrandito.
- Nel full player desktop i controlli `-10`, play, `+10`, Google Maps e `x1` restano sulla stessa riga; su iPhone SE il riquadro della foto mantiene dimensioni quadrate compatte e centrate.
- Il cambio tappa usa una durata condivisa per card, marker e tratto attivo del percorso, con easing lineare verso lo stato finale per evitare lo scatto di rientro.
- Il pulsante dedicato alla traccia precedente rispetta il comportamento audio standard: primo clic oltre l'inizio = ritorno a `00:00`, secondo clic ravvicinato o clic già a zero = tappa precedente; il comando tappa successiva passa sempre direttamente alla tappa seguente senza attivare l'avanzamento automatico di fine traccia. Il rewind `-10` resta separato.
- Quando il mini-player mobile cambia davvero tappa con precedente/successiva, la pagina torna alla mappa e centra la nuova tappa; il semplice ritorno a `00:00` non sposta la mappa.
- La guida italiana indica esplicitamente la lista con il testo: `Puoi scegliere una tappa anche da questa lista.`
- La guida italiana separa la frase sul player dopo `basso` con un punto per migliorarne la leggibilità.
- Nella prima schermata solo l'italiano avvia il sito; le altre lingue mostrano un avviso nella lingua selezionata perché non sono ancora disponibili.
- La guida italiana descrive l'apertura della mappa estesa senza il prefisso `Su desktop`.
- Nel tutorial desktop il fumetto della vista estesa è l'ultimo: il passo successivo mostra il cursore che clicca la `X`, chiude la vista e riporta alla home.
- Le animazioni del cursore tutorial sono state velocizzate del 15%, inclusi arrivo, clic e tempi di completamento JavaScript.
- Nel player mobile i cinque comandi audio e indicazioni restano sempre sulla stessa riga.
- Il mini-player include anche i comandi dedicati per traccia precedente e traccia successiva, separati dal riavvolgimento/avanzamento di 10 secondi.
- Dopo la chiusura del full player desktop, la vista torna con la mappa allineata in alto, come nella composizione principale desiderata.
- Su mobile, se la posizione già rilevata dell'utente è fuori dall'inquadratura, il pulsante di localizzazione riporta prima alla vista del percorso come su desktop; la geolocalizzazione viene richiesta solo quando non esiste ancora una posizione disponibile.
- L'anteprima della tappa successiva mantiene uno spazio più leggibile tra fotografia e testo, anche nella vista mappa/player.
- Su mobile il blocco finale del player mostra soltanto il segmento di trascrizione attualmente pronunciato, sincronizzato al tempo dell'audio e senza icona blu.
- La trascrizione mobile compare durante il play e, dopo una pausa, scompare con ritardo e animazione come il caption desktop.
- Il frame base della mascotte è `B`; durante il play il lip-sync continua a usare i cue `A–H` e `X` disponibili.
- Su mobile la mappa mantiene come zoom minimo l'inquadratura stretta necessaria a contenere il percorso, evitando di allargarsi eccessivamente sull'area geografica circostante.
- `style.css`: stile full-page editoriale con hero ampio, mappa dominante, sezione tappe in card grid, mini-player fisso, player esteso con dock trascrizione, controlli mobile su griglia a spaziatura uniforme e motion system leggero della mascotte.
- `app.js`: sorgente unica dei dati delle 7 tappe e logica interattiva per mappa, lingue, mini-player, overlay audio mobile, condivisione tappa, guida contestuale adattiva ancorata ai titoli o controlli evidenziati, incluso il pulsante di apertura mappa estesa, e protetta da riposizionamenti ritardati degli step precedenti, e stati motion della mascotte.
- `README.md`: istruzioni operative minime per esecuzione e manutenzione.
- `package.json` e `package-lock.json`: dipendenze versionate Playwright e Netlify CLI, comandi della suite E2E e deploy riproducibile.
- `playwright.config.mjs`: configurazione E2E desktop, mobile standard e mobile basso `375x667` con Chrome locale, un worker e server statico dedicato; esclude il controllo remoto settimanale dalla suite ordinaria.
- `playwright.external-links.config.mjs`: configurazione Playwright isolata per il monitoraggio dei link sul dominio Netlify pubblico.
- `tests/e2e/`: test automatici per tutorial, player, mappa, responsive, localizzazione, reduced motion, viewport mobile bassa, smoke test e controllo remoto delle piattaforme/condivisioni.
- `.github/workflows/e2e.yml`: workflow GitHub Actions che ignora modifiche esclusivamente Markdown ed esegue la suite sull'artefatto `dist/` per gli altri push e pull request verso `main`; non pubblica mai automaticamente.
- `.github/workflows/deploy.yml`: workflow GitHub Actions manuale e confermato che ricostruisce, esegue gli E2E, pubblica su Netlify e verifica il dominio pubblico solo quando viene richiesta una pubblicazione di produzione.
- `.github/workflows/external-links.yml`: controllo settimanale e manuale del sito pubblico per link di piattaforme, condivisioni e email, con riepilogo GitHub e artifact diagnostico conservato per 14 giorni.
- `build-static.mjs`: build Netlify a whitelist che prepara in `dist/` soltanto i file necessari al sito pubblico.
- `netlify.toml`: configurazione versionata del build `npm run build`, publish directory `dist/` e Node.js 22.
- `logo_vicopisano.png`: stemma usato nell'intestazione del sito.
- `mascotte_vicopisano.webp`: immagine mascotte ottimizzata per il runtime.
- `assets/mascotte-mouth/`: frame mascotte Rhubarb `A-H` + `X` in WebP 2048×2048 ad alta qualità, usati nella home e nel player per sincronizzare la bocca con l'audio; la versione asset `20260921-mascot-hd` forza il rinnovo della cache mobile.
- Motion mascotte: wrapper annidati in `index.html`, animazioni CSS in `style.css` e controller deterministico in `app.js` separano movimento, breathing e mouth layer Rhubarb; i cue sono precaricati alla selezione della traccia e usano un anticipo visivo di 80 ms.
- `tappa_1_torre_delle_quattro_porte.jpg`: foto reale associata alla Tappa 1.
- `tappa_2_torre_e_camminamento_del_soccorso.jpg`: foto reale associata alla Tappa 2.
- `tappa_3_palazzo_pretorio.jpg`: foto reale associata alla Tappa 3.
- `tappa_4_rocca_del_brunelleschi.jpeg`: foto reale associata alla Tappa 4.
- `audio/.gitkeep`: placeholder della cartella audio.
- `audio/01_torre_quattro_porte.mp3`: nuova traccia italiana Tappa 1 (228,911 secondi).
- `audio/02_torre_camminamento_soccorso.mp3`: nuova traccia italiana Tappa 2 (165,016 secondi).
- `audio/03_palazzo_pretorio.mp3`: nuova traccia italiana Tappa 3 (251,220 secondi).
- `audio/04_rocca_brunelleschi.mp3`: nuova traccia italiana Tappa 4 (211,096 secondi).
- `audio/05_torri_gemelle.mp3`: nuova traccia italiana Tappa 5 (179,670 secondi).
- `audio/06_parrocchia_santa_maria_san_giovanni.mp3`: nuova traccia italiana Tappa 6 (225,933 secondi).
- `audio/07_comune_info_point_vicopisano.mp3`: nuova traccia italiana Tappa 7 (270,524 secondi).
- `audio/01_torre_quattro_porte_en.mp3`: audio Tappa 1 in inglese.
- `audio/01_torre_quattro_porte_de.mp3`: audio Tappa 1 in tedesco.
- `audio/01_torre_quattro_porte_fr.mp3`: audio Tappa 1 in francese.
- `audio/01_torre_quattro_porte_es.mp3`: audio Tappa 1 in spagnolo.
- `audio/01_torre_quattro_porte_pt.mp3`: audio Tappa 1 in portoghese.
- `audio/01_torre_quattro_porte_ru.mp3`: audio Tappa 1 in russo.
- `audio/cues/`: cue JSON generati con Rhubarb per sincronizzare la bocca della mascotte; ora sono presenti e verificati per tutte le sette tracce italiane nuove, oltre alle varianti straniere della Tappa 1.
- `audio/transcripts/`: sette trascrizioni italiane sincronizzate alle nuove tracce; il testo deriva dal copione DOCX e sono inclusi solo i segmenti del copione riconosciuti nel parlato. Gli intervalli automatici restano da verificare all'ascolto.
- `outputs/`: cartella riservata a deliverable utente.
- `work/`: cartella di lavoro temporanea.
- `dist/`: output locale temporaneo del build Netlify, escluso da Git.

## Design system Phase 1, Phase 2 e Phase 3

- `DESIGN_SYSTEM.md` - documento guida del design system Travel Podcasting, con architettura Core/Theme, token, component vocabulary, accessibilita, legacy exceptions e roadmap.
- Fase 3 audio: `TPMiniPlayer` e `TPPlayerSheet` sono implementati in `index.html`/`style.css`; entrambi usano il pulsante velocità ciclico `x1 → x1,5 → x2`, mentre `app.js` mantiene una sola source of truth `<audio>`, seek Material 3, stati audio, Media Session feature-detected, CTA precedente/prossima tappa, condivisione della tappa e persistence lingua/ultima tappa.
- Refinement full player: la condivisione della tappa resta nella topbar mobile, mentre su desktop è nascosta; la chiusura usa il controllo X e la trascrizione vive in un dock inferiore espandibile e scrollabile.
- Refinement corrente: il player esteso usa un solo layer full-screen verde scuro, senza selettore lingua interno; i nomi delle tappe restano in italiano anche quando cambia la lingua dell'interfaccia.
- Refinement mobile: il selettore lingua home e compatto sotto 860px; il player mantiene i quattro controlli su una riga e la foto resta artwork predefinito fino allo switch manuale della mascotte.
- Fase 4 mappa: `TPMapMarker` e `TPMapControl` sono implementati nel runtime Leaflet esistente; la route usa il verde Vicopisano, marker/card condividono lo stato selected e la fullscreen fornisce Explore mode: su desktop la mappa occupa tutta l'altezza libera a sinistra, ricentratura e indicazioni restano nell'angolo alto destro e la mascotte animata compare in basso a sinistra senza coprire il percorso. Il controllo di espansione/riduzione viene nascosto in Explore perché il pulsante X del pannello chiude la vista. Nel pannello destro restano immagine quadrata, nome della tappa, timeline, comandi audio e navigazione. La trascrizione resta nel player mobile.
- `design-system.css` - token CSS core `--tp-*`, primitive UI, `TPChip`, `TPIconButton`, `TPStopCard`, Typography Lab e token di confronto identificatore tappa.
- `theme-vicopisano.css` - tema Vicopisano con palette verde, blu stemma, oro, superfici crema, alias legacy controllati e token per identificatore Vicopisano vs viola Travel Podcasting.
- `design-system.html` - pagina playground statica con componenti Fase 2, Typography Lab Georgia/Fraunces/Cormorant Garamond e confronto identificatore tappa.
- Fase 2 produzione: `index.html` importa `design-system.css -> theme-vicopisano.css -> style.css`; `style.css` mantiene il livello runtime specifico Vicopisano.
- Fase 2 componenti runtime: selettore lingua migrato a `TPChip`, Help/ricentratura/fullscreen a `TPIconButton`, card tappe a `TPStopCard` con stato selected evidente.

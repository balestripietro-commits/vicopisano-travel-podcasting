# INDEX


## Root locale master del progetto

- `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`
## Contenuto

- `index.html`: pagina principale del prototipo statico.
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
- `assets/mascotte-mouth/`: frame mascotte Rhubarb `A-H` + `X` in WebP ottimizzato, usati nella home e nel player per sincronizzare la bocca con l'audio.
- Motion mascotte: wrapper annidati in `index.html`, animazioni CSS in `style.css` e controller deterministico in `app.js` separano movimento, breathing e mouth layer Rhubarb; i cue sono precaricati alla selezione della traccia e usano un anticipo visivo di 80 ms.
- `tappa_1_torre_delle_quattro_porte.jpg`: foto reale associata alla Tappa 1.
- `tappa_2_torre_e_camminamento_del_soccorso.jpg`: foto reale associata alla Tappa 2.
- `tappa_3_palazzo_pretorio.jpg`: foto reale associata alla Tappa 3.
- `tappa_4_rocca_del_brunelleschi.jpeg`: foto reale associata alla Tappa 4.
- `audio/.gitkeep`: placeholder della cartella audio.
- `audio/01_torre_quattro_porte.mp3`: audio definitivo Tappa 1 in italiano (231,549 secondi).
- `audio/01_torre_quattro_porte_en.mp3`: audio Tappa 1 in inglese.
- `audio/01_torre_quattro_porte_de.mp3`: audio Tappa 1 in tedesco.
- `audio/01_torre_quattro_porte_fr.mp3`: audio Tappa 1 in francese.
- `audio/01_torre_quattro_porte_es.mp3`: audio Tappa 1 in spagnolo.
- `audio/01_torre_quattro_porte_pt.mp3`: audio Tappa 1 in portoghese.
- `audio/01_torre_quattro_porte_ru.mp3`: audio Tappa 1 in russo.
- `audio/cues/`: cue JSON generati con Rhubarb per sincronizzare la bocca della mascotte sugli audio disponibili.
- `audio/transcripts/01_torre_quattro_porte_it.json`: prima bozza della trascrizione italiana sincronizzata della Tappa 1; conserva il testo editoriale e gli intervalli generati automaticamente, ora usati dalla fascia sottotitoli nella parte bassa della mappa durante l'ascolto e da revisionare prima della pubblicazione.
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

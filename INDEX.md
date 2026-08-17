# INDEX


## Root locale master del progetto

- `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`
## Contenuto

- `index.html`: pagina principale del prototipo statico.
- `style.css`: stile full-page editoriale con hero ampio, mappa dominante, sezione tappe in card grid, mini-player fisso, player esteso e motion system leggero della mascotte.
- `app.js`: sorgente unica dei dati delle 7 tappe e logica interattiva per mappa, lingue, mini-player, overlay audio, share links, geolocalizzazione, guida contestuale e stati motion della mascotte.
- `README.md`: istruzioni operative minime per esecuzione e manutenzione.
- `logo_vicopisano.png`: stemma usato nell'intestazione del sito.
- `mascotte_vicopisano.webp`: immagine mascotte ottimizzata per il runtime.
- `assets/mascotte-mouth/`: frame mascotte Rhubarb `A-H` + `X` in WebP ottimizzato, usati nella home e nel player per sincronizzare la bocca con l'audio.
- Motion mascotte: wrapper annidati in `index.html`, animazioni CSS in `style.css` e controller deterministico in `app.js` separano movimento, breathing e mouth layer Rhubarb.
- `tappa_1_torre_delle_quattro_porte.jpg`: foto reale associata alla Tappa 1.
- `tappa_2_torre_e_camminamento_del_soccorso.jpg`: foto reale associata alla Tappa 2.
- `tappa_3_palazzo_pretorio.jpg`: foto reale associata alla Tappa 3.
- `tappa_4_rocca_del_brunelleschi.jpeg`: foto reale associata alla Tappa 4.
- `audio/.gitkeep`: placeholder della cartella audio.
- `audio/01_torre_quattro_porte.mp3`: audio Tappa 1 in italiano.
- `audio/01_torre_quattro_porte_en.mp3`: audio Tappa 1 in inglese.
- `audio/01_torre_quattro_porte_de.mp3`: audio Tappa 1 in tedesco.
- `audio/01_torre_quattro_porte_fr.mp3`: audio Tappa 1 in francese.
- `audio/01_torre_quattro_porte_es.mp3`: audio Tappa 1 in spagnolo.
- `audio/01_torre_quattro_porte_pt.mp3`: audio Tappa 1 in portoghese.
- `audio/01_torre_quattro_porte_ru.mp3`: audio Tappa 1 in russo.
- `audio/cues/`: cue JSON generati con Rhubarb per sincronizzare la bocca della mascotte sugli audio disponibili.
- `outputs/`: cartella riservata a deliverable utente.
- `work/`: cartella di lavoro temporanea.

## Design system Phase 1, Phase 2 e Phase 3

- `DESIGN_SYSTEM.md` - documento guida del design system Travel Podcasting, con architettura Core/Theme, token, component vocabulary, accessibilita, legacy exceptions e roadmap.
- Fase 3 audio: `TPMiniPlayer` e `TPPlayerSheet` sono implementati in `index.html`/`style.css`; `app.js` mantiene una sola source of truth `<audio>`, seek Material 3, stati audio, Media Session feature-detected, CTA precedente/prossima tappa e persistence lingua/ultima tappa.
- Refinement corrente: il player esteso usa un solo layer full-screen verde scuro, senza selettore lingua interno; i nomi delle tappe restano in italiano anche quando cambia la lingua dell'interfaccia.
- Refinement mobile: il selettore lingua home e compatto sotto 860px; il player mantiene i quattro controlli su una riga e la foto resta artwork predefinito fino allo switch manuale della mascotte.
- Fase 4 mappa: `TPMapMarker` e `TPMapControl` sono implementati nel runtime Leaflet esistente; la route usa il verde Vicopisano, marker/card condividono lo stato selected, e la fullscreen fornisce Explore mode con card contestuale e mini-player accessibile.
- `design-system.css` - token CSS core `--tp-*`, primitive UI, `TPChip`, `TPIconButton`, `TPStopCard`, Typography Lab e token di confronto identificatore tappa.
- `theme-vicopisano.css` - tema Vicopisano con palette verde, blu stemma, oro, superfici crema, alias legacy controllati e token per identificatore Vicopisano vs viola Travel Podcasting.
- `design-system.html` - pagina playground statica con componenti Fase 2, Typography Lab Georgia/Fraunces/Cormorant Garamond e confronto identificatore tappa.
- Fase 2 produzione: `index.html` importa `design-system.css -> theme-vicopisano.css -> style.css`; `style.css` mantiene il livello runtime specifico Vicopisano.
- Fase 2 componenti runtime: selettore lingua migrato a `TPChip`, Help/geolocalizzazione/fullscreen a `TPIconButton`, card tappe a `TPStopCard` con stato selected evidente.

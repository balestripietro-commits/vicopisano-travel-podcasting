# Travel Podcasting Vicopisano

Progetto locale master: `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`

Prototipo minimo funzionante di sito web statico con mappa Leaflet.js + OpenStreetMap per 7 tappe nel borgo di Vicopisano.

## Architettura attuale dell'interfaccia

- Landing full-page ispirata a directory editoriali/mappe immersive:
  - strip superiore in evidenza: marquee visibile su mobile e banda verde pulita su desktop;
  - header arioso con brand, selettore lingua e menu;
  - hero tipografico ampio con titolo e introduzione;
  - mappa dominante a tutta larghezza del contenuto con caption sovrapposta;
  - sezione tappe separata sotto la mappa, in card grid;
  - sezioni editoriali di supporto sotto la mappa;
  - sezione finale share con link reali per Facebook, LinkedIn, X, WhatsApp e mail.
- Mini-player fisso in basso sempre visibile quando esiste una tappa attiva.
- Mini-player fisso in basso in stile audio-bar: artwork, metadati, precedente/play-successiva, repeat, timeline e volume.
- Player audio esteso aperto da click su marker mappa, tappa lista o qualunque punto del mini-player non occupato da pulsanti o slider.
- Nella schermata estesa restano sempre disponibili play/pausa, +/-10 secondi, repeat, barra seek trascinabile, volume desktop, trascrizione cliccabile e navigazione tra tappe.
- Il player esteso usa una superficie full-screen verde scuro senza livelli sottostanti visibili; i nomi delle tappe restano in italiano in tutte le lingue dell'interfaccia.
- Geolocalizzazione utente tramite pulsante dedicato sopra la mappa.
- Traduzione globale del sito nelle 7 lingue supportate quando cambia la lingua attiva.

## File del progetto

- `index.html`: struttura della pagina.
- `style.css`: layout e stile.
- `app.js`: dati delle tappe, mappa, lista interattiva, mini-player, overlay audio con seek custom, traduzioni, geolocalizzazione e associazione immagini per tappa.
- `audio/`: cartella degli MP3.
- Per la Tappa 1 sono attive piu lingue selezionabili direttamente nell'interfaccia.
- Le tappe 1-4 hanno una foto dedicata mostrata nel mini-player e nel player esteso; le tappe senza foto usano ancora il placeholder bianco.

## Come avviare il sito in locale

1. Apri il Terminale nella cartella del progetto.
2. Avvia un piccolo server locale:

```bash
python3 -m http.server 8000
```

3. Apri Chrome e visita:

```text
http://localhost:8000
```

Per prova da smartphone sulla stessa rete locale puoi usare anche:

```text
http://<IP-del-computer>:8000
```

Nota: per geolocalizzazione affidabile su smartphone è preferibile pubblicare poi il sito in HTTPS.



## Primo accesso, lingua e aiuto

- A ogni apertura il sito mostra una schermata pulita di scelta lingua prima di entrare nell'esperienza.
- La lingua iniziale viene scelta da URL se presente, poi dalla lingua salvata nel browser, poi dalla lingua di sistema; se non e supportata, il fallback e inglese.
- Dopo la scelta lingua parte la guida contestuale tradotta nella lingua attiva.
- Il tasto `Aiuto` nell'header riapre la guida contestuale, che spiega mappa, indicazioni Google Maps, lista tappe, piattaforme, condivisione e player.
- La lingua resta modificabile dal selettore compatto in alto.

## Link diretti a tappe e lingue

Il sito supporta parametri URL condivisibili:

- `?tappa=1` apre e centra la tappa indicata.
- `?lang=en` imposta la lingua iniziale.
- I parametri sono combinabili, per esempio `?tappa=3&lang=fr`.
- Eventuali parametri tecnici gia presenti, come `refresh`, vengono preservati quando il sito aggiorna l'URL.

## Mascotte animata con Rhubarb

- La mascotte nella home usa i frame WebP ottimizzati in `assets/mascotte-mouth/`.
- I frame richiesti da Rhubarb sono presenti: `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H` e `X` per la bocca a riposo.
- La mascotte usa wrapper separati per motion, breathing e mouth frame: Rhubarb continua a cambiare solo lo sprite della bocca, mentre `style.css` e `app.js` gestiscono micro-movimenti deterministici.
- Il motion system resta sobrio: breathing quasi impercettibile, micro-sway idle occasionale, reazioni leggere a play/pausa/fine traccia, transizione foto/mascotte e micro transizione al cambio tappa.
- Con `prefers-reduced-motion: reduce` il sito riduce drasticamente breathing, idle, reazioni e transizioni, mantenendo la funzionalita e la sincronizzazione Rhubarb.
- Rhubarb e installato localmente in `/Users/pietrobalestri/.local/bin/rhubarb`.
- I cue di sincronizzazione sono salvati in `audio/cues/` e vengono caricati automaticamente quando parte un audio.
- La logica del sito associa ogni file `audio/nome_file.mp3` al cue `audio/cues/nome_file.json`.
- Al momento sono stati generati i cue per la Tappa 1 in tutte le lingue disponibili.
- Le tappe senza audio attivo non animano la mascotte: quando aggiungeremo nuovi MP3, andra generato anche il relativo JSON Rhubarb.

Workflow per una nuova tappa o una nuova lingua:

1. Copia l'MP3 definitivo dentro `audio/`.
2. Converti temporaneamente l'MP3 in WAV con `ffmpeg`.
3. Esegui Rhubarb sul WAV.
4. Salva il JSON in `audio/cues/` con lo stesso nome base dell'MP3.
5. Verifica che in `app.js` la tappa punti al file audio corretto e abbia `audioDisponibile: true`.

## Dove mettere i file audio

- Inserisci gli MP3 dentro la cartella `audio/`.
- Il file della prima tappa deve chiamarsi:
  - `audio/01_torre_quattro_porte.mp3` per l'italiano
  - `audio/01_torre_quattro_porte_en.mp3` per l'inglese
  - `audio/01_torre_quattro_porte_de.mp3` per il tedesco
  - `audio/01_torre_quattro_porte_fr.mp3` per il francese
  - `audio/01_torre_quattro_porte_es.mp3` per lo spagnolo
  - `audio/01_torre_quattro_porte_pt.mp3` per il portoghese
  - `audio/01_torre_quattro_porte_ru.mp3` per il russo

- Le altre tappe sono gia predisposte con questi nomi:
  - `audio/02_torre_camminamento_soccorso.mp3`
  - `audio/03_palazzo_pretorio.mp3`
  - `audio/04_rocca_brunelleschi.mp3`
  - `audio/05_torri_gemelle.mp3`
  - `audio/06_parrocchia_santa_maria_san_giovanni.mp3`
  - `audio/07_comune_info_point_vicopisano.mp3`

## Come aggiungere o modificare una tappa

- Apri `app.js`.
- Modifica l'array `tappe`.
- Ogni oggetto contiene:
  - `numero`
  - `titolo`
  - `latitudine`
  - `longitudine`
  - `fileAudio`
  - `audioDisponibile`
  - `durata`
  - `descrizione`

## Come attivare l'audio per le tappe 2-7

1. Copia l'MP3 corretto dentro `audio/`.
2. In `app.js`, trova la tappa desiderata.
3. Cambia:

```js
audioDisponibile: false
```

in:

```js
audioDisponibile: true
```

## Come sostituire le descrizioni provvisorie con trascrizioni complete

- In `app.js`, aggiorna il campo `descrizione` della tappa.
- Lo stesso testo viene mostrato nel pannello dettagli come testo descrittivo o trascrizione provvisoria.

## Nota sul prototipo attuale

- La Tappa 1 supporta 7 lingue selezionabili: italiano, inglese, tedesco, francese, spagnolo, portoghese e russo.
- Le lingue vengono cambiate dal selettore globale sotto il titolo e anche dal selettore aggiunto nel player esteso.
- Il click su una tappa o su un marker apre il player esteso e prova ad avviare l'audio quando disponibile.
- Le tappe 2-7 restano predisposte ma senza audio attivo finche non vengono aggiunti gli MP3 e attivato `audioDisponibile: true`.

## Design system Phase 1, Phase 2 e Phase 3

Sono stati aggiunti i file di fondazione del design system:

- `DESIGN_SYSTEM.md`: principi, architettura Core/Theme, token, accessibilita, component vocabulary e roadmap.
- `design-system.css`: token core `--tp-*`, primitive CSS, componenti playground `TP*`, stati `TPChip`, `TPIconButton` e `TPStopCard`.
- `theme-vicopisano.css`: override cromatici e identitari del tema Vicopisano, inclusi token per confronto identificatore tappa.
- `design-system.html`: playground statico per verificare tipografia, colori, forme, controlli, card, marker e player; include Typography Lab con Georgia, Fraunces e Cormorant Garamond.

La Fase 2 importa il design system nella pagina principale con questa cascade:

```text
design-system.css -> theme-vicopisano.css -> style.css
```

`style.css` resta il livello runtime specifico del prototipo Vicopisano durante la migrazione. La produzione usa ancora Georgia come serif principale; le alternative del Typography Lab non sono applicate al sito live.

Nella Fase 2 sono migrati in modo additivo:

- selettore lingua a `TPChip`;
- Help, geolocalizzazione e fullscreen a `TPIconButton` con Material Symbols Rounded;
- card tappe a `TPStopCard`, con stato selected molto evidente tramite bordo, barra laterale, superficie e ring;
- attributi semantici `aria-selected` sui chip lingua e `aria-current` sulle tappe.

La Fase 3 aggiorna esclusivamente l'esperienza audio:

- `TPMiniPlayer`: player flottante mobile con artwork, progress essenziale e Play/Pause dominante.
- `TPPlayerSheet`: bottom sheet immersivo mobile e split layout desktop con foto della tappa come artwork predefinito.
- Un solo `<audio>` attivo controlla mini-player, sheet, seek e Media Session quando disponibile.
- Seek Material 3 con target touch da 44px, `-10 / Play-Pause / +10` con icone Material Symbols Rounded, repeat secondario, volume desktop, trascrizione collassata e CTA per la tappa successiva.
- Il selettore lingua del player mostra solo le tracce disponibili: bottom sheet compatto sotto 860px e popover ancorato al controllo su desktop. Il player sheet gestisce focus, Escape, background inerte e ritorno del focus all'apertura.
- Sotto 860px il selettore lingua della home mostra solo la lingua corrente e apre le opzioni al tap; nel player la foto resta artwork predefinito e la mascotte si apre solo tramite lo switch manuale.
- Stati loading, buffering, errore, audio non disponibile e ascolto concluso senza autoplay della tappa seguente.
- Rhubarb, breathing e micro-motion della mascotte restano attivi; lo switch foto/mascotte resta manuale.
- Lingua e ultima tappa vengono ricordate con `localStorage`.

Marker Leaflet, hero, contenuti, coordinate, immagini, audio sorgenti e mappa restano fuori scope della Fase 3.

La Fase 4 aggiorna esclusivamente mappa e composizione:

- Home mobile in ordine intro compatta, mappa protagonista e tappe; desktop con split view sticky tra mappa e lista.
- `TPMapMarker` mantiene il viola Travel Podcasting per gli identificatori e usa il verde Vicopisano per la route; card e marker condividono lo stato selected.
- La selezione da card centra la mappa senza popup automatico; il tap su marker mantiene apertura diretta del player.
- La fullscreen diventa Explore mode con controlli Material, mini-player disponibile e una card contestuale compatta per la tappa selezionata.

Per vedere il playground quando il server locale e attivo:

```bash
python3 -m http.server 8000
```

Poi aprire `http://127.0.0.1:8000/design-system.html`.

Non sono state aggiunte dipendenze o framework. Material 3 Expressive e Spectrum 2 sono usati come direzione progettuale, non come librerie installate.

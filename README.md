# Travel Podcasting Vicopisano

Progetto locale master: `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`

Prototipo minimo funzionante di sito web statico con mappa Leaflet.js + OpenStreetMap per 7 tappe nel borgo di Vicopisano.

## Architettura attuale dell'interfaccia

- Landing full-page ispirata a directory editoriali/mappe immersive:
  - strip superiore in evidenza con marquee continua e testi generati dalle lingue selezionabili;
  - header arioso con brand, selettore lingua e menu;
  - hero tipografico ampio con titolo e introduzione;
  - mappa dominante a tutta larghezza del contenuto con caption sovrapposta;
  - sezione tappe separata sotto la mappa, in card grid;
  - sezioni editoriali di supporto sotto la mappa;
  - sezione finale share con link reali per Facebook, LinkedIn, X, WhatsApp e mail.
- Mini-player fisso in basso sempre visibile quando esiste una tappa attiva.
- Mini-player fisso in basso in stile audio-bar: artwork, metadati, precedente/play-successiva, repeat, timeline e volume.
- Player audio esteso aperto da click su marker mappa, tappa lista o qualunque punto del mini-player non occupato da pulsanti o slider.
- Nella schermata estesa restano sempre disponibili precedente, play/pausa, successiva, repeat, barra seek trascinabile, volume e trascrizione cliccabile.
- Il player esteso replica anche il selettore lingua della home, posizionandolo tra il titolo della tappa e i controlli audio.
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

- Al primo accesso il sito mostra una schermata pulita di scelta lingua prima di entrare nell'esperienza.
- La lingua iniziale viene scelta da URL se presente, poi dalla lingua salvata nel browser, poi dalla lingua di sistema; se non e supportata, il fallback e inglese.
- Dopo la prima scelta la preferenza viene salvata in `localStorage`, quindi la schermata iniziale non ricompare a ogni visita.
- Per rivedere la schermata iniziale in fase di test si puo aprire il sito con `?welcome=1`.
- Il tasto `Aiuto` nell'header apre una guida breve in 3 step, tradotta nella lingua attiva, che spiega mappa, lista tappe e player.
- La lingua resta comunque modificabile dai chip in alto e dal selettore del player esteso.

## Link diretti a tappe e lingue

Il sito supporta parametri URL condivisibili:

- `?tappa=1` apre e centra la tappa indicata.
- `?lang=en` imposta la lingua iniziale.
- I parametri sono combinabili, per esempio `?tappa=3&lang=fr`.
- Eventuali parametri tecnici gia presenti, come `refresh`, vengono preservati quando il sito aggiorna l'URL.

## Mascotte animata con Rhubarb

- La mascotte nella home usa i frame in `assets/mascotte-mouth/`.
- I frame richiesti da Rhubarb sono presenti: `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H` e `X` per la bocca a riposo.
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

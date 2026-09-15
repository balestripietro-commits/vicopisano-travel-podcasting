# Travel Podcasting Vicopisano

Progetto locale master: `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`

Prototipo minimo funzionante di sito web statico con mappa Leaflet.js + OpenStreetMap per 7 tappe nel borgo di Vicopisano.

## Architettura attuale dell'interfaccia

- Landing full-page ispirata a directory editoriali/mappe immersive:
  - banda verde superiore sottile e vuota su desktop e mobile;
  - header arioso con stemma e brand affiancati, selettore lingua e menu anche su mobile;
  - hero tipografico ampio con titolo e introduzione;
  - mappa dominante a tutta larghezza del contenuto con caption sovrapposta;
  - sezione tappe separata sotto la mappa, in card grid;
  - sezioni editoriali di supporto sotto la mappa;
  - blocco finale con piattaforme e share affiancati su desktop; su mobile resta soltanto la sezione piattaforme. I link desktop sono reali per Facebook, LinkedIn, X, WhatsApp e mail.
- Mini-player fisso in basso sempre visibile quando esiste una tappa attiva.
- Mini-player fisso in basso in stile audio-bar: precedente/play-successiva, pulsante velocità ciclico x1/x1,5/x2, timeline Material orizzontale con tempi ai lati, barra allungata e pallino seek trascinabile. Su desktop la timeline occupa tutta la colonna libera tra i comandi e il pulsante di espansione. L'audio è sempre al volume pieno del browser e segue i controlli di sistema di computer, cuffie o telefono. Nella mappa estesa desktop viene nascosto: tutti i controlli restano nel pannello contestuale a destra, mentre la mappa usa l'intera altezza disponibile. La trascrizione resta disponibile nel full player mobile.
- Su mobile, il full player si apre toccando un'area libera del mini-player; su desktop la stessa azione apre la mappa estesa con il pannello contestuale. Pulsanti, slider e link mantengono invece la propria azione senza cambiare vista.
- Il tap su marker o tappa seleziona la traccia e avvia l'audio nel mini-player senza aprire il player esteso.
- Nella schermata estesa restano sempre disponibili play/pausa, +/-10 secondi, velocità ciclica x1/x1,5/x2, barra seek trascinabile, trascrizione cliccabile e navigazione precedente/successiva coerente con la posizione nel percorso. Su mobile i quattro controlli audio sono su una griglia con centri e spaziatura orizzontale identici.
- Alla fine di una traccia il percorso passa alla tappa successiva e ne avvia automaticamente l'audio; l'ultima tappa resta nello stato concluso.
- Nel full player numero tappa e condivisione sono in alto a sinistra; il controllo in alto a destra chiude la vista con una transizione verso il basso.
- La trascrizione è in un dock inferiore espandibile, resta separata da foto e mascotte e usa uno scroll interno quando il testo supera l'altezza disponibile.
- Lo scroll della trascrizione usa una traccia discreta con cursore giallo arrotondato, sincronizzato alla posizione di lettura e senza dipendere dalla scrollbar nativa del browser.
- Dal pannello della trascrizione, il pulsante con icona libro attiva la modalità lettura: il testo occupa quasi tutta la vista, mentre foto e mascotte si riducono temporaneamente. In Explore desktop il pannello destro diventa una superficie di lettura e la mappa resta libera fino al bordo inferiore.
- I seek di 10 secondi mostrano un riscontro numerico temporaneo sopra il controllo usato, senza coprire il titolo; l'apertura dal mini-player coordina artwork e titolo con il full player quando il browser supporta View Transitions e usa un fallback CSS negli altri browser.
- Tutti questi feedback diventano immediati e privi di movimento con `prefers-reduced-motion: reduce`.
- Il player esteso usa una superficie full-screen verde scuro senza livelli sottostanti visibili; i nomi delle tappe restano in italiano in tutte le lingue dell'interfaccia.
- Il pulsante di espansione del mini-player apre direttamente la mappa estesa; il click sull'area libera del mini-player continua ad aprire il player a pagina intera.
- Su mobile, il controllo mappa con icona posizione ricentra tutte le tappe del percorso; su desktop resta nascosto in ogni vista.
- Traduzione globale del sito nelle 7 lingue supportate quando cambia la lingua attiva.

## File del progetto

- `index.html`: struttura della pagina.
- `style.css`: layout e stile.
- `app.js`: dati delle tappe, mappa, lista interattiva, mini-player, overlay audio con seek custom, traduzioni e associazione immagini per tappa.
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



## Primo accesso, lingua e aiuto

- A ogni apertura il sito mostra una schermata pulita di scelta lingua prima di entrare nell'esperienza.
- La lingua iniziale viene scelta da URL se presente, poi dalla lingua salvata nel browser, poi dalla lingua di sistema; se non e supportata, il fallback e inglese.
- Dopo la scelta lingua parte la guida contestuale tradotta nella lingua attiva.
- Il tasto `Aiuto` nell'header riapre la guida contestuale. Su desktop illustra mappa, indicazioni Google Maps, lista tappe, mini-player, il pulsante di apertura e la vista Explore effettivamente aperta; su mobile conclude con la vista completa del player.
- La lingua resta modificabile dal selettore compatto in alto.
- Il cambio lingua conserva posizione e stato di riproduzione della traccia attiva.
- Pulsanti, tooltip e nomi accessibili dei controlli di mappa, tutorial, mini-player, full player e condivisione usano lo stesso dizionario localizzato nelle sette lingue; francese, spagnolo, portoghese e tedesco mantengono i propri diacritici e il russo usa il cirillico. Durante il tutorial, l'interfaccia esterna è resa inerte e il layer guida intercetta i tocchi: restano attivi solo chiudi, indietro e avanti. Il layer guida resta sempre sopra mappa e player, così il fumetto e il cursore di chiusura sono visibili anche nella vista Explore. Il fumetto si dispone accanto o sopra/sotto al controllo evidenziato senza coprirlo e, quando e' laterale, la punta si allinea al centro del controllo. Nello step Indicazioni desktop il fumetto privilegia il lato destro del pulsante pedonale e punta dal proprio lato sinistro. Nello step Explore desktop, la mappa e' il bersaglio: il suo perimetro usa l'evidenziazione gialla del tutorial e il fumetto e' centrato sul suo bordo inferiore. Fumetto e punta condividono sempre la stessa superficie bianca opaca e lo stesso bordo, senza dipendere dal colore dello sfondo. A ogni cambio step, il fumetto precedente svanisce in 220 ms, il nuovo layout viene calcolato a opacita' zero e il fumetto rientra nella sola posizione finale con una dissolvenza e scala da `0,955` a `1` in 420 ms, senza passaggi intermedi o scroll animato. Su desktop il passaggio della lista e' ancorato sopra il titolo `Tappe del percorso`, lasciando libere tutte le card; il passaggio successivo punta dall'alto al pulsante di apertura nel mini-player: il cursore arriva in 2 s, resta fermo 2 s, simula un click di 1,05 s e avvia Explore a 5,05 s. La mappa si espande o si richiude in 850 ms; all'apertura il pannello destro entra dopo 200 ms con dissolvenza e spostamento di 24 px per 650 ms, alla chiusura esce verso destra negli stessi 650 ms. Il fumetto Explore appare soltanto al termine. Il tutorial resta aperto e prosegue nel pannello Explore/full player. Alla fine, lo stesso gesto lento e senza ripple punta alla X e la vista torna alla home. Con movimento ridotto le dimostrazioni restano statiche e rapide. Su mobile il passaggio Indicazioni usa una variante piu' compatta.

## Suite E2E Playwright

La suite usa Chrome gia installato sul Mac, un solo worker e avvia automaticamente un server statico locale dedicato. Non scarica un browser Playwright aggiuntivo.

```bash
npm install
npm run test:e2e
npm run test:e2e:desktop
npm run test:e2e:mobile
npm run test:e2e:mobile-low
npm run test:e2e:dist
E2E_BASE_URL=https://transcendent-meerkat-166cbe.netlify.app npm run test:e2e:smoke
```

I test coprono:

- il valore corretto di `html[lang]` e l'assenza di fallback italiani nelle lingue non italiane;
- le etichette di Aiuto, ricentratura della mappa, indicazioni, fullscreen mappa, play/pausa, seek, velocità, apertura/chiusura full player e condivisione;
- i controlli del tutorial avanti, indietro, chiusura e fine;
- la conservazione dei diacritici con parole sentinella come `También`, `Atrás`, `Sélecteur`, `Zurück`, `Também` e `Áudio`;
- l'uso del cirillico per i controlli e i messaggi russi;
- marker e lista tappe, avvio audio, navigazione precedente/successiva, autoplay, seek, velocita, trascrizione, condivisione e chiusura del full player;
- contenimento nella viewport desktop/mobile e comportamento con `prefers-reduced-motion`.
- viewport mobile bassa `375x667`: full player in una schermata, controlli e navigazione visibili, tutorial mini-player senza sovrapposizioni.

### E2E e deploy su GitHub Actions

La workflow `.github/workflows/e2e.yml` esegue automaticamente `npm run test:e2e:dist` a ogni push e pull request verso `main`, oltre a supportare l'avvio manuale. Se un commit modifica esclusivamente file Markdown (`**/*.md`), i test non partono. Il runner usa Node.js 22, installa Chromium nel solo ambiente CI e mantiene un worker per stabilità. In caso di errore allega report, screenshot e trace Playwright come artifact per 14 giorni. Non esegue mai un deploy Netlify.

La pubblicazione è intenzionalmente separata nella workflow `.github/workflows/deploy.yml`: si avvia manualmente dalla pagina Actions di GitHub, selezionando il branch `main` e confermando `Confirm deployment of main to the public Netlify site`. Prima di pubblicare, ricostruisce `dist/`, esegue gli E2E e, solo se sono verdi, pubblica su Netlify. Subito dopo apre il dominio pubblico su desktop, mobile standard e mobile basso `375x667` e verifica titolo, mappa, marker, mini-player, errori runtime e overflow orizzontale. Il job usa i repository secret `NETLIFY_AUTH_TOKEN` e `NETLIFY_SITE_ID`, che non sono salvati nei sorgenti.

La pipeline usa `netlify-cli` `27.4.0` come dipendenza di sviluppo esatta, registrata nel `package-lock.json`. Il deploy richiama il binario gia installato da `npm ci`, senza scaricare dinamicamente una versione della CLI durante lo step Netlify.

Il check pubblicato da GitHub si chiama `Playwright E2E`. Sul repository privato con GitHub Free il check non puo bloccare i merge, ma una regressione impedisce comunque la pubblicazione Netlify. La versione di produzione precedente resta online finche una nuova esecuzione non termina correttamente.

### Controllo settimanale dei link esterni

La workflow `.github/workflows/external-links.yml` controlla il dominio Netlify pubblico ogni lunedi alle 08:17 nel fuso `Europe/Madrid` e puo essere avviata manualmente dalla sezione Actions di GitHub. Non parte sui push, non esegue deploy e usa soltanto il test dedicato `tests/e2e/external-links.spec.mjs`, escluso dalla suite E2E ordinaria.

Il controllo verifica izi.TRAVEL, Loquis, Spotify, Facebook, X, LinkedIn, WhatsApp e il link email realmente renderizzati dal sito. Le risposte HTTP `200-399` sono valide; `401`, `403` e `429` diventano avvisi per evitare falsi allarmi su servizi protetti o limitati; `404`, `410`, errori `5xx`, DNS, TLS e timeout fanno fallire il job. Per le condivisioni vengono verificati anche dominio e parametri, mentre il link `mailto:` viene validato senza richieste di rete.

Esecuzione locale contro la produzione:

```bash
npm run test:external-links
```

Ogni esecuzione pubblica un riepilogo nella pagina della GitHub Action e conserva per 14 giorni un artifact `external-links-report-*` con report Markdown, JSON e diagnostica Playwright. In caso di errore il job prova una seconda volta le condizioni di rete transitorie prima di segnalare il guasto.

## Deploy Netlify

Il deploy di produzione usa la configurazione versionata in `netlify.toml`:

- comando di build: `npm run build`;
- cartella pubblicata: `dist/`;
- runtime: Node.js 22;
- branch di produzione atteso nel pannello Netlify: `main`.

La build copia in `dist/` soltanto HTML, JavaScript, CSS, immagini, audio e cue della mascotte. Test, documentazione, `node_modules` e cartelle di lavoro non vengono pubblicati.

I build Git automatici del progetto Netlify devono restare nello stato `Stopped builds`: la produzione viene aggiornata esclusivamente dalla workflow GitHub manuale, dopo il superamento degli E2E. Riattivare i build automatici aggirerebbe questo controllo.

Verifica locale dell'artefatto destinato a Netlify:

```bash
npm run build
npm run test:e2e:dist
```

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
- Click desktop, tastiera e tap mobile sulla mascotte della home attivano un salto di conferma con lieve inclinazione e micro-rimbalzo all'atterraggio, senza animazioni al semplice hover.
- Con `prefers-reduced-motion: reduce` il sito riduce drasticamente breathing, idle, reazioni e transizioni, mantenendo la funzionalita e la sincronizzazione Rhubarb.
- Rhubarb e installato localmente in `/Users/pietrobalestri/.local/bin/rhubarb`.
- I cue di sincronizzazione sono salvati in `audio/cues/` e vengono caricati automaticamente quando parte un audio.
- La logica del sito associa ogni file `audio/nome_file.mp3` al cue `audio/cues/nome_file.json`, lo precarica quando si seleziona la traccia e applica un anticipo visivo di 80 ms alla bocca; l'audio resta invariato e pausa, seek e salti mantengono l'allineamento.
- Al momento sono stati generati i cue per la Tappa 1 in tutte le lingue disponibili.
- Le tappe senza audio attivo non animano la mascotte: quando aggiungeremo nuovi MP3, andra generato anche il relativo JSON Rhubarb.

### Trascrizione sincronizzata

- Le trascrizioni editoriali con timestamp vivono in `audio/transcripts/` e non sostituiscono i cue Rhubarb della mascotte.
- `01_torre_quattro_porte_it.json` e' una bozza ottenuta sull'MP3 definitivo `audio/01_torre_quattro_porte.mp3` (231,549 secondi): il testo e' editoriale, mentre i tempi sono stati generati automaticamente e richiedono un controllo all'ascolto prima della pubblicazione.
- Per la sola Tappa 1 italiana, la mappa mostra la frase corrente in una fascia semitrasparente durante l'ascolto. La fascia usa `audio.currentTime`, quindi resta sincronizzata con pausa, seek e salti di 10 secondi; in pausa svanisce dopo circa 2,6 secondi. Da tablet/desktop usa una riga singola compatta; su mobile può andare su più righe per conservare leggibilità. Le altre tappe e lingue non mostrano sottotitoli finché non avranno il proprio file con timestamp approvati.
- Per una pubblicazione: usare l'MP3 definitivo, generare gli intervalli parola/frase, correggere nomi propri e punteggiatura dal testo approvato, riascoltare i confini di frase e infine sostituire l'audio del sito se la sua durata differisce dal master allineato.

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

- In `app.js`, aggiorna il campo `trascrizione` della variante audio della lingua corretta.
- Per la Tappa 1 italiana il testo editoriale completo e' nel campo `trascrizione` della variante `IT`; gli intervalli di sincronizzazione sono in `audio/transcripts/01_torre_quattro_porte_it.json`.

## Nota sul prototipo attuale

- La Tappa 1 supporta 7 lingue selezionabili: italiano, inglese, tedesco, francese, spagnolo, portoghese e russo.
- Le lingue vengono cambiate dal selettore globale sotto il titolo e anche dal selettore aggiunto nel player esteso.
- Il click su una tappa o su un marker seleziona la traccia e prova ad avviare l'audio nel mini-player senza aprire il player esteso.
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
- Help, ricentratura mappa e fullscreen a `TPIconButton` con Material Symbols Rounded;
- card tappe a `TPStopCard`, con stato selected molto evidente tramite bordo, barra laterale, superficie e ring;
- attributi semantici `aria-selected` sui chip lingua e `aria-current` sulle tappe.

La Fase 3 aggiorna esclusivamente l'esperienza audio:

- `TPMiniPlayer`: player flottante mobile con artwork, progress essenziale e Play/Pause dominante.
- `TPPlayerSheet`: bottom sheet immersivo mobile e split layout desktop con foto della tappa come artwork predefinito.
- Un solo `<audio>` attivo controlla mini-player, sheet, seek e Media Session quando disponibile.
- Seek Material 3 con target touch da 44px, `-10 / Play-Pause / +10` con icone Material Symbols Rounded, selettore diretto x1/x1,5/x2 nel mini-player e velocità ciclica nel full player, trascrizione collassata e CTA compatte per la tappa precedente e/o successiva. Il volume resta in carico ai controlli di sistema del dispositivo.
- Il selettore lingua del player mostra solo le tracce disponibili: bottom sheet compatto sotto 860px e popover ancorato al controllo su desktop. Il player sheet gestisce focus, Escape, background inerte e ritorno del focus all'apertura.
- Sotto 860px il selettore lingua della home mostra solo la lingua corrente e apre le opzioni al tap; nel player la foto resta artwork predefinito e la mascotte si apre solo tramite lo switch manuale.
- Stati loading, buffering, errore, audio non disponibile e ascolto concluso senza autoplay della tappa seguente.
- Rhubarb, breathing e micro-motion della mascotte restano attivi; lo switch foto/mascotte resta manuale.
- Lingua e ultima tappa vengono ricordate con `localStorage`.

Marker Leaflet, hero, contenuti, coordinate, immagini, audio sorgenti e mappa restano fuori scope della Fase 3.

La Fase 4 aggiorna esclusivamente mappa e composizione:

- Home mobile in ordine intro compatta, mappa protagonista e tappe; desktop con split view sticky tra mappa e lista, con la mappa che usa tutta l'altezza libera della viewport tra il margine superiore e il mini-player fisso.
- `TPMapMarker` mantiene il viola Travel Podcasting per gli identificatori e usa il verde Vicopisano per la route; card e marker condividono lo stato selected.
- La selezione da card centra la mappa senza popup automatico; il tap su marker seleziona e avvia la traccia nel mini-player senza aprire il full player. Su mobile, il controllo con icona posizione riporta in ogni momento la vista sull'intero percorso e sulle sette tappe: quando la vista contiene già tutte le tappe mantiene il suo aspetto standard; quando il percorso non è più interamente visibile dopo una selezione, uno zoom o un trascinamento, passa a un richiamo giallo discreto, ridotto a un alone statico con `prefers-reduced-motion`. Lo zoom minimo mantiene un solo livello di contesto oltre al percorso e il trascinamento resta delimitato alle immediate vicinanze dell'itinerario, evitando di allontanarsi fino all'area geografica estesa. Su desktop il controllo è nascosto sia nella vista normale sia in Explore; le tappe selezionate mantengono comunque la mappa centrata automaticamente.
- Dalla Tappa 2 in poi, la selezione evidenzia in giallo il tratto reale percorso dalla tappa precedente; l'intero itinerario resta visibile in verde e la Tappa 1 non mostra un segmento precedente.
- Il marker selezionato resta sopra gli altri marker sovrapposti; la selezione da marker o dalla lista delle tappe richiama il pulsante Google Maps con un doppio halo giallo, sostituito da un richiamo statico quando è attivo `prefers-reduced-motion`.
- La fullscreen diventa Explore mode con controlli Material e una card contestuale compatta per la tappa selezionata. Su desktop, l'apertura della mappa estesa nasconde il mini-player inferiore: timeline completa gialla e trascinabile, controlli di ascolto nel pannello destro, insieme a foto quadrata, titolo e navigazione precedente/successiva con miniature. La mascotte animata si sposta nell'angolo basso sinistro della mappa; la centratura riserva un piccolo margine a sinistra per lasciarla libera. Il controllo di ricentratura resta nascosto su desktop, mentre le indicazioni restano nell'angolo alto destro; il pulsante di espansione/riduzione della mappa viene nascosto perché il pulsante X del pannello chiude già Explore mode. La mappa usa l'intera altezza libera fino al bordo inferiore; il dock della trascrizione non e' presente in questa modalità. La condivisione della tappa resta disponibile nel full player mobile. Il pulsante X del pannello chiude interamente Explore mode e riporta la home alla mappa normale. In questa sola modalità desktop, la vista del percorso è anche lo zoom minimo e il trascinamento è limitato a un margine vicino alle tappe. Su mobile il full player sostituisce Explore mode, evitando sovrapposizioni e preservando spazio per i controlli.

Per vedere il playground quando il server locale e attivo:

```bash
python3 -m http.server 8000
```

Poi aprire `http://127.0.0.1:8000/design-system.html`.

Non sono state aggiunte dipendenze o framework. Material 3 Expressive e Spectrum 2 sono usati come direzione progettuale, non come librerie installate.

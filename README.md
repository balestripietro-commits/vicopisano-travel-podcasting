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
  - blocco finale a tutta larghezza per izi.TRAVEL, Loquis e Spotify: i badge restano visibili, ma non aprono collegamenti finché le destinazioni non sono pronte; i pulsanti Condividi non sono più presenti.
- La linea del percorso è decorativa e non intercetta i clic: passando sopra il tracciato non appare la manina, e trascinamento/clic raggiungono la mappa. La selezione delle tappe avviene dai marker o dalla lista.
- Mini-player fisso in basso sempre visibile quando esiste una tappa attiva. Su desktop si estende quasi per tutta la larghezza della pagina, lasciando 24 px ai lati; su mobile mantiene il layout compatto.
- I controlli zoom `+ / −` della mappa sono nascosti su mobile, sia nella home sia nel full player, dove si usa il pinch con le dita; su desktop restano presenti.
- I controlli zoom desktop hanno un'area cliccabile di 44 px. Nel mini-player mobile skip, seek, Play/Pausa e velocità restano tutti all'interno anche a 320 px di larghezza, con area attiva di almeno 44 px; lo slider di avanzamento ha un'area verticale di 44 px. I pulsanti Aiuto e lingua nell'header mantengono la stessa altezza minima sui telefoni stretti. Il link di attribuzione OpenStreetMap conserva l'aspetto compatto ma ha un'area cliccabile alta almeno 24 px.
- Il testo secondario verde è stato scurito per mantenere almeno 4,5:1 anche sulle superfici crema più scure; il viola dei numeri di tappa è stato uniformato a una variante che mantiene lo stesso rapporto con i numeri bianchi. I marker non selezionati non riducono più l'opacità dei numeri: la selezione resta distinguibile tramite dimensione, anello e ombra. I test verificano i rapporti dei token di testo e dei badge.
- In Full player audio mobile le frasi circostanti della trascrizione restano leggibili (bianco attenuato senza un'ulteriore opacità del blocco); la frase attiva si distingue per peso e bianco pieno. Il testo cresce a circa 15 px, o 14 px sui telefoni stretti e bassi, e continua a scorrere dentro il box senza uscire dal player.
- Con `prefers-reduced-motion`, i titoli lunghi del full player non vanno più a capo sotto una riga con altezza bloccata: restano su una sola riga e possono essere scorsi orizzontalmente con dito o tastiera; il focus appare solo quando il titolo eccede lo spazio disponibile.
- Nel mini-player il titolo lungo scorre automaticamente solo se non entra nell'area disponibile; il calcolo si aggiorna quando cambia tappa o dimensione del viewport. Con `prefers-reduced-motion` non parte l'animazione e il titolo rimane scorribile orizzontalmente.
- Su desktop esistono solo la home normale e la vista Explore con mappa estesa e pannello player a destra. Qualunque apertura programmatica del player viene ricondotta a Explore; non esiste una schermata desktop separata di lettura. Su mobile il full player si apre per impostazione predefinita nella vista Mappa + player, con mappa interattiva sopra e controlli audio compatti fissati sotto; l'interruttore con icona cuffie nella topbar passa a Full player audio senza chiudere il percorso. Mappa + player mostra la didascalia sincronizzata a due righe accanto alla mascotte e sopra il dock; la trascrizione completa è nella fascia dedicata di Full player audio.
- Mini-player fisso in basso in stile audio-bar: precedente/play-successiva, pulsante velocità ciclico x1/x1,25/x1,5, timeline Material orizzontale con tempi ai lati, barra allungata e pallino seek trascinabile. Su desktop occupa quasi tutta la larghezza della pagina con margini di circa 24 px, mantenendo altezza e ordine dei controlli; la timeline usa tutta la colonna libera tra i comandi e il pulsante di espansione. Su mobile ha una riga autonoma tra informazioni della tappa e controlli, così resta leggibile anche su iPhone SE. L'audio è sempre al volume pieno del browser e segue i controlli di sistema di computer, cuffie o telefono. Nella mappa estesa desktop viene nascosto: tutti i controlli restano nel pannello contestuale a destra, mentre la mappa usa l'intera altezza disponibile. La trascrizione resta disponibile nel full player mobile.
- Play, testo della velocità selezionata, progresso e cursore seek condividono il giallo del tema (`--tp-color-accent`, alias di `--tp-color-tertiary`). In tutti i mini-player e full player, le velocità diverse da `x1` colorano solo il testo: il controllo mantiene area touch e posizione, senza riempimento o alone giallo; il focus tastiera usa un contorno distinto.
- Il pulsante `Skip precedente` al primo tocco riavvia la traccia corrente; un secondo tocco entro 650 ms passa alla tappa precedente. Il rewind `-10` resta separato. Il comando `Skip successiva` passa alla traccia seguente senza navigazione circolare: dalla prima non si va indietro e dalla settima non si va avanti. Su mobile, quando precedente/successiva cambia davvero tappa dal mini-player, la pagina torna alla mappa e la centra sulla nuova tappa.
- Le pose della mascotte `A-H` + `X` sono mantenute a 2048×2048 in WebP ad alta qualità per evitare l'effetto sgranato nel full player mobile; l'identificativo cache `20260921-mascot-hd` viene aggiornato quando cambiano gli asset.
- In Explore desktop la mascotte non viene sovrapposta alla foto della tappa ed è visibile in basso a sinistra come guida del percorso; resta disponibile anche nel player mobile.
- Nel pannello Explore desktop la X resta ferma nella topbar; la riga della foto ha la stessa altezza dell'artwork, così foto e contenuti audio iniziano sotto il pulsante senza sovrapporsi anche nelle viewport desktop più strette.
- Su mobile, il full player si apre toccando un'area libera del mini-player; su desktop la stessa azione apre la mappa estesa con il pannello contestuale. Pulsanti, slider e link mantengono invece la propria azione senza cambiare vista.
- Nel full player mobile i cinque comandi di trasporto sono disposti in una riga intorno a Play/Pausa: tappa precedente, `-10`, Play/Pausa, `+10`, tappa successiva; la velocità occupa l'ultima posizione. In Mappa + player la barra superiore del dock contiene nell'ordine Cambia schermata, Geolocalizzazione e Google Maps a sinistra, e il `?` della guida accanto alla X a destra. Tra barra e titolo della tappa resta spazio per distinguere le due righe. In Full player audio il `?` è accanto al pulsante per tornare alla mappa. Entrambi gli aiuti riprendono il simbolo e lo stile del pulsante della home. Il mini-player mantiene la propria disposizione e un pulsante abbastanza largo da contenere tutte le velocità. `Skip precedente` riavvia prima la traccia e, con un secondo tocco entro 650 ms, passa alla precedente; `Skip successiva` non supera l'ultima tappa. `-10/+10` restano invece sulla traccia corrente. La trascrizione sincronizzata non anticipa mai il segmento successivo durante le pause dell'audio. Le card di navigazione mostrano solo le tappe realmente adiacenti, quindi la card successiva è nascosta sulla tappa 7.
- Nel Full player audio mobile tutte le tappe usano lo stile di trascrizione della Tappa 4: scorrimento verticale con frasi circostanti visibili, transizione morbida verso la frase attiva e box persistente durante la riproduzione. Il box resta sopra la navigazione. Passando da Mappa + player a Full player audio durante la riproduzione, la frase corrente viene ricalcolata dal tempo audio e portata subito in vista, anche quando il cue è lo stesso selezionato mentre la trascrizione completa era nascosta; non serve attendere la frase successiva.
- Nel full player mobile l'interruttore alterna `Mappa + player` e `Full player audio` senza chiudere il player: mostra l'icona cuffie nella vista mappa e l'icona mappa nella vista Full player audio, con etichette accessibili localizzate in tutte le lingue dell'interfaccia. Il full player mobile si apre in Mappa + player; la mappa resta utilizzabile, la mascotte compatta è in basso a sinistra appena sopra il dock senza intercettare i tocchi, e il dock inferiore mostra titolo, timeline e tutti i comandi audio con lo stesso verde scuro uniforme della vista Full player audio (`#092f2c`). L'altezza del dock segue il contenuto e non aumenta inutilmente sui telefoni alti; la mascotte si riallinea alla sua altezza effettiva. Cambiare tappa con i comandi precedente/successiva, con le anteprime o dopo l'intermezzo di fine traccia mantiene la vista mobile corrente: Full player audio resta Full player audio e Mappa + player resta Mappa + player. In Full player audio restano artwork, anteprime delle tappe e trascrizione completa nella fascia dedicata. Solo nella mappa estesa mobile lo zoom minimo è un livello più ampio e i limiti di trascinamento concedono un ampio margine attorno al percorso: ogni tappa torna al proprio preset di zoom anche dopo uno zoom manuale, senza essere forzata troppo vicino dai limiti della mappa.
- La modalità mappa estesa mobile non espone più un pulsante fullscreen direttamente sulla mappa; l'accesso resta nel flusso del player, evitando un controllo duplicato sopra la cartografia.
- I controlli Play/Pausa sono centrati con una griglia esplicita, evitando che la diversa spaziatura laterale del glifo `pause` lo faccia apparire spostato.
- Il tap su marker o tappa seleziona la traccia e avvia l'audio nel mini-player senza aprire il player esteso. Le immagini delle tappe usano sempre un ritaglio quadrato, comprese mini-player, anteprime, lista e full player mobile. Nella home desktop, l'anteprima della tappa usa una foto quadrata sotto al titolo e la colonna della mappa e' più ampia.
- Ogni tap su un marker inquadra e colora in giallo il tratto del percorso fino alla tappa; ripetere il tap mantiene lo stesso criterio d'inquadratura e non centra solo il numero.
- Dopo la selezione compare una label temporanea vicino al marker: su desktop mostra miniatura, numero e titolo localizzati per intero sempre su una riga, con larghezza responsiva fino a 760 px; su mobile, sia nella home sia in Mappa + player, mostra soltanto la foto, con il titolo come testo alternativo accessibile. Resta visibile per circa quattro secondi, poi sfuma; un nuovo tap la sostituisce subito.
- La selezione dalla lista usa una sola transizione coordinata: card, marker, camera e contenuti del player cambiano nello stesso ciclo di rendering, senza ritardi separati tra i componenti.
- Le 7 tappe usano preset camera fissi per mantenere il tratto nel contesto; la vista mobile compensa il dock inferiore e non applica un secondo tap speciale sul solo marker. Lo zoom già raggiunto non viene ridotto e la camera non ripete l'animazione quando è già nella posizione corretta.
- La camera dei marker usa un `flyTo` più naturale da 580 ms con decelerazione enfatizzata, senza rimbalzo né riallineamento finale; se centro e zoom sono già corretti non anima, mentre `prefers-reduced-motion` disattiva il movimento.
- Il centro della camera viene compensato rispetto all'area realmente visibile della mappa: mini-player, dock inferiore, caption, mascotte e pannello laterale non possono coprire il marker selezionato. In Mappa + player mobile viene escluso dal calcolo l'overlay full-screen e si considerano dock, caption e mascotte. Lo zoom resta invariato quando non serve modificarlo.
- I preset camera normalizzano sia coordinate-array sia `L.LatLng` prima della proiezione, senza dipendere da un secondo tap dedicato. Il target viene calcolato al livello di zoom effettivamente usato da Leaflet (dopo lo snap) e viene ricentrato sulla tappa se il preset la porterebbe fuori dall'area libera; se il clamp ai `maxBounds` può riportare una tappa di bordo sotto il margine della mappa, il centro offset viene ricalcolato ai livelli di zoom successivi prima dell'animazione. La tappa 5 usa le proprie coordinate reali anche quando viene selezionata dal marker; gli E2E verificano tutte e sette le tappe nella home desktop/mobile, in Explore desktop e nella mappa del full player mobile.
- Nella schermata estesa restano sempre disponibili play/pausa, +/-10 secondi, velocità ciclica x1/x1,25/x1,5, barra seek trascinabile e navigazione precedente/successiva coerente con la posizione nel percorso. Il pulsante Google Maps resta nella mappa normale e, su mobile, anche nella barra del full player Mappa + player; non viene duplicato nel pannello Explore desktop. La didascalia sincronizzata è una chip nella home desktop e anche sulla mappa Explore, in uno spazio dedicato sotto la mascotte; su mobile la trascrizione resta nel player. Nel pannello Explore i sei comandi condividono l'allineamento del mini-player desktop: tasti secondari leggibili, aree da almeno 44 px e Play/Pausa dominante. In entrambe le viste mobile del full player, i quattro comandi secondari di trasporto (tappa precedente/successiva e seek) restano leggeri senza contenitori visibili; la velocità occupa un pulsante separato nella riga dei comandi e Play resta l'unico comando pieno della riga di trasporto.
- Nelle due viste del full player mobile, anche i glifi tappa precedente/successiva sono centrati dentro le proprie aree touch: la griglia, i simboli e i tasti ±10 sono speculari rispetto a Play, verificati a 375 e 320 px.
- Alla fine di una traccia il percorso passa alla tappa successiva e ne avvia automaticamente l'audio; l'ultima tappa resta nello stato concluso.
- Alla fine naturale di una tappa parte `transition_between_stops.mp3` come segmento conclusivo della sessione della tappa corrente, non skippabile e non velocizzabile. Durante il segmento mini-player e full player mostrano il titolo `In cammino verso la prossima tappa` e lo stemma di Vicopisano; il titolo si adatta allo spazio senza scorrimento automatico. L'accesso al full player resta disponibile e i controlli Play/Pausa sono centrati nel proprio spazio e nel relativo cerchio. Seek, velocità e navigazione sono disabilitati. Quando termina, la tappa successiva viene selezionata e resta in pausa; i comandi manuali non attivano l'intermezzo.
- Nel full player il numero della tappa è mostrato in un badge circolare semplice accanto al titolo. Nessuna vista contiene più pulsanti Condividi; la X resta a destra.
- Non esiste una modalità desktop separata dedicata alla lettura della trascrizione: la home e Explore sono le sole viste desktop, e in Explore il dock non viene mostrato. Nel full player mobile la trascrizione sincronizzata appare in una fascia; senza cue temporali mostra il testo descrittivo della tappa.
- Lo scroll della trascrizione usa una traccia discreta con cursore giallo arrotondato, sincronizzato alla posizione di lettura e senza dipendere dalla scrollbar nativa del browser.
- La didascalia iniziale non compare al solo caricamento della traccia, neppure se il primo cue inizia a `00:00`: si mostra dopo l'avvio effettivo dell'audio. La persistenza di 2,6 secondi resta attiva solo dopo aver messo in pausa una traccia già avviata, senza lampeggiare fra onboarding e tutorial.
- Su desktop il sottotitolo sincronizzato è una fascia larga quasi quanto la pagina nella home, allineata ai margini di 24 px del mini-player, e quasi quanto la mappa in Explore, senza invadere il pannello destro. Il carattere desktop è circa il 30% più grande. Nella home desktop/mobile, in Explore e in Mappa + player mobile, i segmenti lunghi vengono distribuiti nel tempo in porzioni di massimo due righe calcolate sulla larghezza reale della fascia: nessuna parola viene nascosta con ellissi o tagliata al bordo. Nella home la fascia resta separata dal mini-player; in Mappa + player sta accanto alla mascotte e sopra il dock. Conserva l'ultima porzione in pausa e non appare quando manca una trascrizione sincronizzata o prima dell'avvio dell'audio. La pagina e l'attribuzione della mappa riservano lo spazio necessario durante lo scroll della home. In Full player audio la trascrizione completa resta nella fascia dedicata.
- I seek di 10 secondi mantengono un riscontro temporaneo nel live-region accessibile, senza aggiungere badge grafici sopra i controlli; sul desktop l'apertura dal mini-player coordina artwork e titolo con il full player quando il browser supporta View Transitions. Su mobile usa una sola entrata CSS del player, evitando la sovrapposizione delle copie durante la transizione.
- La barra audio usa la stessa logica in mini-player e full player: aggiorna il tempo durante il drag, chiude il gesto anche su `pointerup`/`pointercancel`/perdita di focus e torna coerente con ±10. Se un salto viene premuto prima dei metadati dell'MP3, viene conservato e applicato appena l'audio è pronto; lo slider non promette un seek percentuale quando la durata non è ancora nota.
- Nel full player mobile Play/Pausa occupa la colonna centrale reale di una griglia a cinque comandi, senza la colonna vuota che rendeva asimmetrici gli spazi. La velocità è nella riga dei comandi e conserva la stessa azione e gli stessi stati. La griglia lingua dell'onboarding non eredita lo scorrimento orizzontale mobile: l'alone del focus non viene tagliato e i tasti mantengono una sagoma a pillola anche dopo il click, con focus tastiera arrotondato.
- Tutti questi feedback diventano immediati e privi di movimento con `prefers-reduced-motion: reduce`.
- Il player mobile usa una superficie full-screen verde scuro; su desktop il pannello player compare soltanto in Explore accanto alla mappa. I nomi delle tappe restano in italiano in tutte le lingue dell'interfaccia.
- Il pulsante di espansione del mini-player apre direttamente la mappa estesa su desktop; su mobile apre invece il player a pagina intera. Il tasto fullscreen della mappa è nascosto e anche il click sull'area libera del mini-player apre il player a pagina intera. Nella home mobile la chip sincronizzata resta sopra al mini-player; in Mappa + player mobile compare sopra il dock, mentre Full player audio mostra la trascrizione completa senza duplicare la chip.
- Nel passaggio del tutorial dedicato alle tappe, viene evidenziato il pannello `Tappe del percorso` solo fino all'inizio dell'area audio: il ritaglio si aggiorna con lo scroll, il layout e la comparsa/scomparsa della didascalia sincronizzata, senza sovrapporsi né alla didascalia né al mini-player fisso.
- Nel tutorial mobile il controllo di geolocalizzazione viene spiegato prima delle indicazioni Google Maps; un'apertura trasparente centrata sul controllo mantiene nitido il pulsante indicato. Il velo della guida attenua la pagina senza applicare blur; nel full player mobile il fumetto introduttivo è posizionato in alto.
- Nel primo passaggio del tutorial desktop, l'intero frame della mappa resta sopra il velo: cartografia, percorso e marker non vengono oscurati né sfocati.
- Nel passaggio Explore del tutorial desktop, mappa e pannello player restano nel contesto della home; su mobile la guida mostra il full player e un passo dedicato al toggle tra Mappa + player e Full player audio.
- Il controllo mappa con icona posizione ricentra tutte le tappe nella mappa normale desktop e resta disponibile anche in Explore desktop. Su mobile chiede la geolocalizzazione reale: se il punto è dentro i limiti geografici della mappa, lo mostra anche quando era fuori dall'inquadratura corrente e conferma `Posizione trovata sulla mappa.`; se è fuori dall'area coperta dal percorso, mantiene la vista delle tappe e avvisa `Sei fuori dall'area del percorso. Ti mostro le tappe di Vicopisano.`. Il messaggio resta coerente anche ai tocchi successivi sul controllo.
- L'interfaccia contiene traduzioni per sette lingue, ma i due selettori di ingresso e intestazione consentono per ora solo l'italiano. Scegliendo EN, DE, FR, ES, PT o RU compare lo stesso dialogo breve nella lingua richiesta; tappa, audio, URL e schermata restano invariati e alla chiusura il focus torna all'opzione scelta.
- Il dialogo per le lingue non disponibili localizza titolo, messaggio e nome accessibile della chiusura. Il pulsante visibile è una X centrata in un cerchio da 52 px, con focus tastiera evidente.
- I pulsanti di condivisione della home e del full player sono stati rimossi. I tre badge izi.TRAVEL, Loquis e Spotify non hanno per ora un URL: al clic mostrano un avviso nella pagina e non cambiano scheda, tappa o audio. La sezione li distribuisce in una riga unica su desktop.
- Se in futuro si configura un URL HTTPS per un badge tramite `data-platform-url`, il clic lo apre in una nuova scheda; URL assenti o malformati e assenza di rete mostrano un messaggio senza navigare. Il browser non può verificare in modo affidabile la risposta HTTP di una destinazione esterna al clic: quel controllo resta affidato alla suite periodica dei link.
- Su desktop i pulsanti flottanti di ricentratura e indicazioni sono nascosti per ridurre il rumore visivo; su mobile restano disponibili.
- I controlli geografici sono nascosti su desktop; il pulsante fullscreen non viene più mostrato sulla mappa mobile e l'estensione resta accessibile dal player.
- Nella home mobile ricentratura e indicazioni sono raccolte in un unico gruppo verticale Material, con pulsanti da 48 px, distanza uniforme, contenitore condiviso e margini compatibili con le safe area. Nel full player Mappa + player si trovano invece nella barra inferiore accanto al cambio schermata.
- I controlli della mappa mostrano il tooltip soltanto con hover da mouse, non durante il touch, e il ricentramento comunica uno stato premuto coerente anche tramite `aria-pressed`.
- Il player mantiene una gerarchia visiva esplicita: artwork e titolo prima, timeline leggibile subito sotto, Play/Pausa dominante e comandi secondari `-10`, `+10`, `x1` più discreti. Il cambio Play/Pausa usa una transizione breve solo sull'icona; non anima più forma e dimensione del gruppo e gli aggiornamenti rapidi sostituiscono quelli obsoleti.
- Nel full player mobile e desktop restano disponibili le stesse sei azioni del mini-player: tappa precedente, `-10`, Play/Pausa, `+10`, tappa successiva e velocità. Su mobile le prime cinque formano una riga speculare, con velocità nella topbar; su desktop tutte e sei restano nella riga dei comandi. Nel pannello desktop gli skip e i seek usano pulsanti Material compatti, il Play resta l'azione primaria e la velocità mantiene un controllo dedicato; la timeline rimane sopra i comandi e le card delle tappe restano disponibili come anteprime.
- La trascrizione mobile è un overlay interno al full player che segue il blocco di navigazione: sulla prima tappa resta visibile una sola card reale, ma il box mantiene l'altezza equivalente a due card per coerenza visiva; sulle tappe intermedie mostra due card e sull'ultima solo la precedente. La misura viene aggiornata dopo il wrapping dei titoli e non usa offset fissi; il box resta sotto titolo, timeline e Play e il testo scorre internamente quando supera l'altezza disponibile.
- Skip, `-10`, `+10` e velocità usano lo stile secondario del mini-player, senza cerchi/pillole; Play resta il comando visivamente dominante.

## File del progetto

- `index.html`: struttura della pagina.
- `style.css`: layout e stile.
- `app.js`: dati delle tappe, mappa, lista interattiva, mini-player, overlay audio con seek custom, traduzioni e associazione immagini per tappa.
- `audio/`: cartella degli MP3.
- Per ora il contenuto è fruibile in italiano; gli altri codici lingua mostrati nei selettori aprono un avviso di non disponibilità senza cambiare la lingua del percorso.
- Le immagini delle tappe, quando presenti, sono mostrate nel mini-player, nelle anteprime e nel player esteso.

## Come avviare il sito in locale

1. Apri il Terminale nella cartella del progetto.
2. Avvia il server locale con supporto alle richieste parziali degli MP3 (necessario per seek e ±10 affidabili):

```bash
npm run dev
```

3. Apri Chrome e visita:

```text
http://localhost:8000
```

Non aprire `index.html` direttamente da Finder/Chrome come `file://`: i server delle tessere OpenStreetMap richiedono un `Referer` web valido. In quella modalità il sito non richiede le tessere e mostra un avviso sulla mappa. Usa sempre l'indirizzo HTTP del server locale sopra; se la mappa mostra ancora un blocco, controlla in Chrome DevTools → Network la risposta delle richieste a `tile.openstreetmap.org` e il loro header `Referer`.

La mappa usa l'URL canonico delle tessere OSM e mantiene visibile l'etichetta cliccabile `© OpenStreetMap` con collegamento alla pagina copyright. La scritta è compatta (11 px su desktop, 10 px su mobile), mentre il link conserva un'altezza cliccabile di almeno 24 px. La cornice della home e quella di Explore desktop condividono il colore `--tp-color-surface-container-low`, così come lo sfondo dell'etichetta, centrata sul bordo inferiore della mappa; la didascalia e la mascotte Explore restano separate dall'etichetta. Nel full player Mappa + player mobile l'attribuzione resta nell'angolo alto sinistro come sola scritta semitrasparente, senza sfondo, bordo o ombra della targhetta, fuori dal dock audio e lontano dalla mascotte. Il controllo Leaflet cambia posizione quando si apre il full player mobile; lo zoom resta nell'angolo alto sinistro su desktop e su mobile è nascosto. Per la pubblicazione, rispettare la [policy delle tessere OSM](https://operations.osmfoundation.org/policies/tiles/); se serve disponibilità garantita o l'uso cresce, valutare un fornitore di tessere con condizioni adatte al progetto.

Per prova da smartphone sulla stessa rete locale puoi usare anche:

```text
http://<IP-del-computer>:8000
```

Per provarlo da smartphone, avvia il server con `HOST=0.0.0.0 npm run dev` su una rete privata fidata. Non usare `python3 -m http.server`: risponde `200` alle richieste `Range` e può impedire il seek preciso su audio non ancora scaricato.



## Primo accesso, lingua e aiuto

- A ogni apertura il sito mostra una schermata pulita di scelta lingua prima di entrare nell'esperienza.
- Nella schermata iniziale è attivo solo l'italiano; se si seleziona un'altra lingua, il sito mostra un avviso localizzato e resta nella schermata di scelta.
- La stessa limitazione vale per il selettore lingua globale nell'intestazione: solo l'italiano cambia lingua, le altre opzioni mostrano un avviso localizzato.
- La lingua iniziale viene scelta da URL se presente, poi dalla lingua salvata nel browser, poi dalla lingua di sistema; se non e supportata, il fallback e inglese.
- Dopo la scelta lingua parte la guida contestuale tradotta nella lingua attiva.
- Il tasto `Aiuto` nell'header riapre la guida contestuale. Su desktop illustra mappa, indicazioni Google Maps, lista tappe, mini-player e la vista Explore con mappa estesa e pannello player; su mobile mostra Mappa + player, indica il tasto con cuffie per aprire Full player audio, apre davvero la vista senza mappa, indica il tasto per tornare alla mappa e chiude il full player con la X nell'ultimo step. Tornando indietro fra questi step viene ripristinata la vista corretta senza perdere la tappa.
- I due `?` del full player mobile aprono guide indipendenti da quella iniziale, senza cambiare vista, tappa, posizione o audio. Mappa + player: cinque passi numerati 1/5–5/5 (gesti sulla mappa e didascalia senza spotlight, geolocalizzazione, Google Maps, cambio schermata, X). Full player audio: tre passi 1/3–3/3 (trascrizione completa e titolo senza spotlight, ritorno alla mappa, X). Un solo controllo alla volta è evidenziato, senza essere azionato; fumetto e velo non coprono il controllo né il player. I `?` riusano l'icona della home e la freccia verde Avanti riusa la stessa animazione della guida iniziale; con `prefers-reduced-motion` l'alone non si anima. Indietro, Avanti, Chiudi ed Esc ripristinano la schermata di partenza. I titoli lunghi di Full player audio scorrono una sola volta con pausa, tornando poi all'inizio; la misura viene aggiornata al cambio di tappa, dimensione o modalità.
- Nel tutorial desktop il fumetto sulla vista estesa è l'ultimo: con Avanti la vista si chiude direttamente, senza animazione del cursore, e il tutorial termina in home.
- L'apertura della mappa estesa parte direttamente con Avanti, senza manina simulata; restano le transizioni effettive della mappa e del pannello. La chiusura usa una sequenza coordinata senza doppio movimento.
- La lingua resta modificabile dal selettore compatto in alto.
- Il cambio lingua conserva posizione e stato di riproduzione della traccia attiva.
- Pulsanti, tooltip e nomi accessibili dei controlli di mappa, tutorial, mini-player e full player usano lo stesso dizionario localizzato nelle sette lingue; francese, spagnolo, portoghese e tedesco mantengono i propri diacritici e il russo usa il cirillico. Durante il tutorial iniziale, l'interfaccia esterna è resa inerte e il layer guida intercetta i tocchi: restano attivi solo chiudi, indietro e avanti. Un click o tap sul backdrop apre una conferma centrale, con overlay semitrasparente senza blur; onboarding, fumetto e conferma restano superfici bianche opache e nitide: `Continua` riprende lo stesso step, `Interrompi` chiude tutorial ed eventuale player e riporta alla home. La X del fumetto resta una chiusura immediata.
- Il layer guida resta sempre sopra mappa e player, così il fumetto resta visibile anche nella vista Explore. Il fumetto si dispone accanto o sopra/sotto al controllo evidenziato senza coprirlo e, quando è laterale, la punta si allinea al centro del controllo. Nello step Indicazioni desktop privilegia il lato destro del pulsante pedonale e punta dal proprio lato sinistro. Nello step Explore desktop la mappa è il bersaglio: il perimetro usa l'evidenziazione gialla del tutorial e il fumetto è centrato sul bordo inferiore; nello step precedente il pulsante per aprire la mappa estesa resta nitido attraverso un'apertura trasparente nel velo. Fumetto e punta condividono la stessa superficie bianca opaca e lo stesso bordo.
- A ogni cambio step, il fumetto precedente svanisce in 220 ms; il nuovo layout viene calcolato a opacità zero e il fumetto rientra nella posizione finale con dissolvenza e scala da `0,955` a `1` in 420 ms, senza passaggi intermedi o scroll animato. L'apertura Explore parte dalla freccia Avanti: la mappa si espande in 595 ms e il pannello destro entra dopo 140 ms, con dissolvenza e spostamento di 24 px in 455 ms. Alla fine dell'ultimo step desktop, il fumetto si dissolve e il velo con l'evidenziazione resta attivo durante il rientro congiunto di mappa e pannello (595 ms); lo scroll torna subito in cima mentre Explore copre la pagina, così la mappa anima direttamente verso la posizione finale senza un secondo movimento. Al termine del rientro Leaflet viene ridimensionato, poi spariscono evidenziazione e velo. Con movimento ridotto le transizioni restano statiche e rapide; su mobile il passaggio Indicazioni usa una variante più compatta.

## Suite E2E Playwright

La suite include `@axe-core/playwright` in `tests/e2e/accessibility.spec.mjs`: controlla onboarding e full player su desktop e mobile con regole WCAG strutturali per nomi accessibili, ARIA, titoli, immagini, link e landmark. La superficie Leaflet dinamica viene esclusa dalla scansione Axe, mentre i suoi controlli accessibili restano verificati dal DOM e dagli E2E della mappa. I test della mappa verificano la miniatura della label, la stabilità dell'inquadratura ai tap ripetuti, la visibilità dei marker sopra il dock e gli stati visivi percorso/marker.

La stessa suite controlla anche il contrasto colore con la regola Axe `color-contrast`, inclusi tappa e velocità selezionate, il layout a viewport equivalenti a zoom 200–400% e il percorso tastiera completo: onboarding, tutorial, selezione tappa, apertura/chiusura player, play/pausa, slider e focus di ritorno. A 320 px verifica che i contorni di focus di mappa, player e guida restino visibili; a 320 e 375 px, con movimento ridotto, controlla che il titolo lungo del Full player audio rimanga contenuto e raggiungibile per intero. Verifica inoltre che su desktop il player si apra sempre come pannello Explore e che il pulsante della modalità di lettura non sia presente. Il contrasto del pulsante WhatsApp è stato corretto usando un verde più scuro per il testo bianco. Il blocco principale del mini-player è un controllo tastiera con `Enter` e `Spazio`, non più un contenitore non interattivo.

Quando l'onboarding è aperto, home e mini-player diventano `inert`, così VoiceOver legge solo il box di scelta lingua.

I tempi visivi del player non vengono annunciati a ogni tick: VoiceOver mantiene il focus sui controlli senza ripetere `00:00` durante la riproduzione.

Mini-player e full player non sono contenitori `aria-live`, per evitare annunci duplicati del cambio Play/Pausa; i messaggi dinamici restano confinati alle live region dedicate.

La suite usa Chrome gia installato sul Mac, un solo worker e avvia automaticamente un server statico locale dedicato. Non scarica un browser Playwright aggiuntivo.

```bash
npm install
npm run test:e2e
npm run test:e2e:desktop
npm run test:e2e:mobile
npm run test:e2e:mobile-low
npm run test:e2e:a11y
npm run test:e2e:dist
E2E_BASE_URL=https://transcendent-meerkat-166cbe.netlify.app npm run test:e2e:smoke
```

### Test manuale VoiceOver

Su macOS avviare VoiceOver con `⌘ + F5`, aprire il sito locale e verificare nell'ordine:

1. il dialog iniziale annuncia titolo, istruzione e i sette pulsanti lingua;
2. con `VO + Freccia destra/sinistra` il cursore attraversa i controlli senza entrare nella pagina sottostante;
3. `VO + Spazio` su `IT · Italiano` chiude l'onboarding e porta al tutorial;
4. il tutorial annuncia il testo dello step e i controlli `Chiudi`, `Indietro`, `Avanti`;
5. dopo `Avanti`, il mini-player annuncia titolo, stato Play/Pausa, tempi e posizione della traccia;
6. aprendo il full player, VoiceOver annuncia il dialog, il titolo della tappa, i comandi audio, la trascrizione e il pulsante di chiusura;
7. `VO + Shift + Freccia su` esce dal contenitore corrente e `VO + Freccia destra` raggiunge i controlli successivi.

Al termine disattivare VoiceOver con `⌘ + F5`. Per il test da tastiera senza VoiceOver usare `Tab`, `Shift + Tab`, `Invio` ed `Esc`.

I test coprono:

- il valore corretto di `html[lang]` e l'assenza di fallback italiani nelle lingue non italiane;
- le etichette di Aiuto, ricentratura della mappa, indicazioni, fullscreen mappa, play/pausa, seek, velocità e apertura/chiusura full player;
- i controlli del tutorial avanti, indietro, chiusura e fine;
- la conservazione dei diacritici con parole sentinella come `También`, `Atrás`, `Sélecteur`, `Zurück`, `Também` e `Áudio`;
- l'uso del cirillico per i controlli e i messaggi russi;
- marker e lista tappe, avvio audio, navigazione precedente/successiva, autoplay, seek, velocita, trascrizione e chiusura del full player;
- contenimento nella viewport desktop/mobile e comportamento con `prefers-reduced-motion`.
- viewport mobile bassa `375x667`: full player in una schermata, controlli e navigazione visibili, tutorial mini-player senza sovrapposizioni.

### E2E e deploy su GitHub Actions

La workflow `.github/workflows/e2e.yml` esegue automaticamente `npm run test:e2e:dist` a ogni push e pull request verso `main`, oltre a supportare l'avvio manuale. Se un commit modifica esclusivamente file Markdown (`**/*.md`), i test non partono. Il runner usa Node.js 22, installa Chromium nel solo ambiente CI e mantiene un worker per stabilità. In caso di errore prova ad allegare report, screenshot e trace Playwright come artifact per 14 giorni; se GitHub rifiuta l'upload (per esempio per quota esaurita), questo non cambia l'esito dei test. Non esegue mai un deploy Netlify.

La pubblicazione è intenzionalmente separata nella workflow `.github/workflows/deploy.yml`: si avvia manualmente dalla pagina Actions di GitHub, selezionando il branch `main` e confermando `Confirm deployment of main to the public Netlify site`. Prima di pubblicare, ricostruisce `dist/`, esegue gli E2E e, solo se sono verdi, pubblica su Netlify. Subito dopo apre il dominio pubblico su desktop, mobile standard e mobile basso `375x667` e verifica titolo, mappa, marker, mini-player, errori runtime e overflow orizzontale. I report diagnostici in caso di errore sono best-effort e non bloccano il job se GitHub non può archiviarli. Il job usa i repository secret `NETLIFY_AUTH_TOKEN` e `NETLIFY_SITE_ID`, che non sono salvati nei sorgenti.

La pipeline usa `netlify-cli` `27.4.0` come dipendenza di sviluppo esatta, registrata nel `package-lock.json`. Il deploy richiama il binario gia installato da `npm ci`, senza scaricare dinamicamente una versione della CLI durante lo step Netlify.

Il check pubblicato da GitHub si chiama `Playwright E2E`. Sul repository privato con GitHub Free il check non puo bloccare i merge, ma una regressione impedisce comunque la pubblicazione Netlify. La versione di produzione precedente resta online finche una nuova esecuzione non termina correttamente.

### Controllo settimanale dei link esterni

La workflow `.github/workflows/external-links.yml` controlla il dominio Netlify pubblico ogni lunedi alle 08:17 nel fuso `Europe/Madrid` e puo essere avviata manualmente dalla sezione Actions di GitHub. Non parte sui push, non esegue deploy e usa soltanto il test dedicato `tests/e2e/external-links.spec.mjs`, escluso dalla suite E2E ordinaria.

Il controllo verifica gli URL delle piattaforme izi.TRAVEL, Loquis e Spotify realmente configurati nel sito. I badge senza URL risultano `PENDING` e non sono sondati; URL configurati ma malformati fanno fallire il job. Le risposte HTTP `200-399` sono valide; `401`, `403` e `429` diventano avvisi per evitare falsi allarmi su servizi protetti o limitati; `404`, `410`, errori `5xx`, DNS, TLS e timeout fanno fallire il job.

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

La build copia in `dist/` soltanto HTML, JavaScript, CSS, immagini, audio e cue della mascotte. Le foto delle tappe e il logo runtime sono WebP; i JPEG/PNG sorgente sono conservati nel master locale ma esclusi dal deploy. Test, documentazione, `node_modules` e cartelle di lavoro non vengono pubblicati.

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
- Click desktop, tastiera e tap mobile sulla mascotte della home attivano un salto di conferma con lieve inclinazione e micro-rimbalzo all'atterraggio, senza animazioni al semplice hover. L'attivazione passa da un solo evento `click` (che copre mouse, touch e tastiera) e i tap ripetuti durante il salto non lo riavviano a metà.
- Con `prefers-reduced-motion: reduce` il sito riduce drasticamente breathing, idle, reazioni e transizioni, mantenendo la funzionalita e la sincronizzazione Rhubarb.
- Rhubarb e installato localmente in `/Users/pietrobalestri/.local/bin/rhubarb`.
- I cue di sincronizzazione sono salvati in `audio/cues/` e vengono caricati automaticamente quando parte un audio.
- La logica del sito associa ogni file `audio/nome_file.mp3` al cue `audio/cues/nome_file.json`, lo precarica quando si seleziona la traccia e applica un anticipo visivo di 80 ms alla bocca; l'audio resta invariato e pausa, seek e salti mantengono l'allineamento.
- I cue italiani sono stati rigenerati con Rhubarb sulle sette nuove tracce (`01`–`07`) usando il recognizer `phonetic`; ogni JSON copre l'intera durata del relativo MP3 e usa solo i valori bocca `A-H` e `X`.
- Le varianti straniere disponibili restano coperte dai cue esistenti della Tappa 1. Le tappe senza audio attivo non animano la mascotte: quando aggiungeremo nuovi MP3, andra generato anche il relativo JSON Rhubarb.

### Trascrizione sincronizzata

- Le trascrizioni editoriali con timestamp vivono in `audio/transcripts/` e non sostituiscono i cue Rhubarb della mascotte.
- I file `*_it.json` in `audio/transcripts/` sono sincronizzati alle nuove tracce italiane: il testo deriva dal copione DOCX e sono inclusi solo i segmenti del copione riconosciuti nel parlato. I timestamp sono automatici e richiedono un controllo all'ascolto prima della pubblicazione definitiva.
- Per le sette tappe italiane, il sottotitolo usa `audio.currentTime`, quindi resta sincronizzato con pausa, seek e salti di 10 secondi. I cue troppo lunghi per la larghezza disponibile vengono paginati a parole in porzioni di due righe, ripartite all'interno della durata del cue; il dimensionamento si ricalcola al cambio viewport o font. Nelle viste con chip mantiene l'ultima porzione per 2,6 secondi dopo la pausa, poi sfuma in circa 280 ms; alla ripresa torna subito visibile. Su desktop nella vista normale è una chip sopra al mini-player; in Explore la stessa chip viene resa sopra il livello della mappa, sotto la mascotte e fuori dal pannello destro. Su mobile appare sopra al mini-player nella home e accanto alla mascotte sopra il dock in Mappa + player; Full player audio usa invece la fascia della trascrizione completa. I brevi vuoti tra i cue non anticipano la frase successiva.
- Anche la traccia transitoria tra tappe ha due segmenti sincronizzati in `app.js`: la didascalia appare nei normali punti live su mappa e il testo completo è disponibile nel dock del Full player audio. Al cambio sorgente il pannello mobile viene azzerato e ridisegnato anche se il nuovo audio riparte dallo stesso indice di frase, evitando residui della trascrizione precedente. Durante l'intermezzo, in entrambe le viste mobile sono nascosti i pulsanti guida; in Mappa + player spariscono anche geolocalizzazione e Google Maps. Il Play occupa tutta la larghezza della timeline nella home mobile e tutta quella dei controlli in Mappa + player sia mobile sia desktop; nel player mobile a schermo intero resta un margine verticale percepibile tra timeline e Play. Nel mini-player desktop il titolo si dimensiona sul contenuto e Play mantiene lo stesso spazio vuoto tra titolo e timeline, senza aumentare l'altezza del dock. I controlli ricompaiono al termine della traccia. I cue Rhubarb restano separati e continuano a controllare solo la mascotte.
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
- Salva la foto runtime della tappa in WebP (`tappa_<numero>_<nome>.webp`); i file `.webp` delle tappe vengono inclusi nella build, mentre gli originali JPEG/PNG non vengono pubblicati.
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
- `TPPlayerSheet`: bottom sheet immersivo mobile; su desktop appare esclusivamente come pannello destro nella vista Explore affiancata alla mappa.
- Un solo `<audio>` attivo controlla mini-player, sheet, seek e Media Session quando disponibile. Ogni cambio tappa sostituisce la sessione audio: gli eventi degli elementi rimossi vengono ignorati e tutti i controlli risolvono sempre l'elemento audio realmente presente nel DOM.
- Timeline e comandi `-10`/`+10` usano lo stesso riferimento verificato; la timeline applica il seek già durante `input`, mentre le richieste Play concorrenti vengono annullate quando cambia traccia, evitando reset a `00:00` dopo una selezione. La transizione di fine traccia resta attiva anche quando il browser segnala già `ended` sull'elemento audio precedente, e una pausa esplicita invalida i Play ancora pendenti per evitare riavvii tardivi. L'apertura del full player conserva inoltre il focus tastiera già portato su Play o sugli altri controlli.
- Seek Material 3 con target touch da 44px, `-10 / Play-Pause / +10` con icone Material Symbols Rounded, selettore diretto x1/x1,25/x1,5 nel mini-player e velocità ciclica nel full player, trascrizione collassata e CTA compatte per la tappa precedente e/o successiva. Il volume resta in carico ai controlli di sistema del dispositivo.
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
- Quando si seleziona un marker, la mappa verifica i limiti dell'inquadratura e sceglie il primo zoom utile che consente di mantenere la tappa realmente al centro; il passaggio usa un unico `flyTo`, senza lo scatto finale causato dal clamp dei limiti.
- Dalla Tappa 2 in poi, la selezione evidenzia in giallo il tratto reale percorso dalla tappa precedente; l'intero itinerario resta visibile in verde e la Tappa 1 non mostra un segmento precedente.
- Il marker selezionato resta sopra gli altri marker sovrapposti; la selezione da marker o dalla lista delle tappe richiama il pulsante Google Maps con un doppio halo giallo, sostituito da un richiamo statico quando è attivo `prefers-reduced-motion`.
- La fullscreen diventa Explore mode con controlli Material e una card contestuale compatta per la tappa selezionata. Su desktop, l'apertura della mappa estesa nasconde il mini-player inferiore: timeline completa gialla e trascinabile, controlli di ascolto nel pannello destro, insieme a foto quadrata, titolo e navigazione precedente/successiva con miniature. Il pannello destro usa una griglia compatta senza scroll interno, così tutti i contenuti restano visibili nella viewport; le indicazioni Google Maps restano nella mappa normale e non vengono duplicate qui. La mascotte animata si sposta nell'angolo basso sinistro della mappa; la centratura riserva un piccolo margine a sinistra per lasciarla libera. Il controllo di ricentratura, le indicazioni e il pulsante di espansione/riduzione della mappa restano nascosti in Explore; il pulsante X del pannello chiude già la vista. La mappa usa l'intera altezza libera fino al bordo inferiore; il dock della trascrizione non e' presente in questa modalità. Il pulsante X del pannello chiude interamente Explore mode e riporta la home alla mappa normale. In questa sola modalità desktop, la vista del percorso è anche lo zoom minimo e il trascinamento è limitato a un margine vicino alle tappe. Su mobile il full player sostituisce Explore mode, evitando sovrapposizioni e preservando spazio per i controlli.

Per vedere il playground quando il server locale e attivo:

```bash
npm run dev
```

Poi aprire `http://127.0.0.1:8000/design-system.html`.

Non sono state aggiunte dipendenze o framework. Material 3 Expressive e Spectrum 2 sono usati come direzione progettuale, non come librerie installate.

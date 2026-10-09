# Playbook siti comunali — Travel Podcasting

Stato: prima versione operativa, verificata sul progetto Vicopisano il 9 ottobre 2026.
Prossimo progetto previsto: **Calci**. Le scelte specifiche di Calci restano da raccogliere e approvare.

## A cosa serve

Questo playbook rende replicabile il lavoro tra Comuni e lascia nel repository le ragioni delle scelte, le fonti dei contenuti e i collegamenti tra master audio, trascrizioni e file pubblicati. Non è un consuntivo di ore o iterazioni.

## Fonte autorevole e collocazione

- Il progetto eseguibile e i documenti maestri vivono nel repository locale: `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`.
- Le decisioni e i cambiamenti vanno registrati in Git insieme al codice e ai documenti interessati.
- Google Drive può contenere materiali ricevuti o consegne e, se serve, una copia leggera di consultazione. Non è la root di esecuzione né la fonte del codice.
- I master audio e i documenti esterni vanno identificati con un link o percorso Drive preciso e con la versione/data ricevuta. Non basta annotare “nella cartella condivisa”.

## Come leggere le informazioni

Nel playbook e nelle schede di progetto distinguere sempre:

- **Verificato nel runtime**: presente nei file caricati o nei dati correnti.
- **Regola di prodotto**: comportamento o principio pensato per tutti i Comuni.
- **Adattamento locale**: identità, luoghi, testi e materiali del singolo Comune.
- **Da decidere / verificare**: ipotesi o informazione mancante; non va copiata come fatto.

Ogni scelta grafica o funzionale che non sia ovvia dovrebbe indicare: decisione, ragione per l’utente, ambito (prodotto o Comune), fonte/prova, eccezioni e data di verifica. Se si modifica una regola, aggiornare anche il motivo e i Comuni coinvolti.

## Audit del design system di Vicopisano

### Cosa è già documentato e verificabile

- `DESIGN_SYSTEM.md` definisce un prodotto mobile-first per la visita sul posto, con mappa come riferimento spaziale e audio fruibile senza frizione.
- La separazione dichiarata è **design system Travel Podcasting** + **tema del territorio**. Il documento copre token, tipografia, spaziatura, forme, movimento, accessibilità, componenti, mappa, player e cinque fasi di consegna.
- `index.html` carica, nell’ordine, `design-system.css`, `theme-vicopisano.css` e `style.css`. È quindi una cascata attiva del sito, non solo un playground.
- `design-system.css` contiene i token `--tp-*` e primitive riusabili; `theme-vicopisano.css` sovrascrive i token e contiene regole locali; `style.css` conserva layout e integrazione runtime, oltre a regole legacy.
- La documentazione operativa e `INDEX.md` registrano molte scelte concrete del sito, soprattutto su mappe, audio, responsive e accessibilità.

### Dove il confine non è ancora pulito

- `design-system.css` assegna valori di palette che sembrano già vicopisani e include alias `--vico-*`; il tema locale ridefinisce poi gli stessi ruoli sotto `:root`. Il sito corrente funziona grazie all’ordine dei fogli, ma il foglio “core” non è neutro e un futuro tema potrebbe ereditare valori locali per errore.
- Il viola degli identificatori tappa è descritto come identificatore Travel Podcasting, ma il tema locale lo definisce fra le eccezioni legacy. La sua appartenenza al prodotto o a Vicopisano va decisa esplicitamente prima di riutilizzarlo a Calci.
- `style.css` è ancora un livello d’integrazione ampio. La presenza di un token o di una sezione nel design system non garantisce che tutte le schermate runtime la usino.
- La lista “Accessibility debt / migration notes” in `DESIGN_SYSTEM.md` non ha data né stato per punto. Alcuni controlli sono oggi coperti da test e README, altri richiedono ancora verifica manuale: la lista va riconciliata prima di considerarla debito aperto o risolto.
- Il documento design system è stato introdotto il 14 agosto 2026; Git registra le ultime modifiche al documento il 16 agosto. Il sito ha ricevuto aggiornamenti successivi, quindi il documento resta un buon fondamento ma non una fotografia completa del runtime attuale.

### Stato del documento

**Giudizio:** utile e ancora coerente nei principi; parzialmente aggiornato rispetto all’implementazione. Non va copiato per Calci senza la verifica del confine core/tema, dei valori di fallback e degli stati di accessibilità. Questo audit è un primo riscontro documentale, non una verifica visiva completa di ogni viewport.

## Regole di prodotto da riusare

Sono regole generali già dichiarate e/o implementate a Vicopisano; per ogni nuovo Comune verificare che il contesto non richieda eccezioni:

- Progettare prima per smartphone e per l’uso all’aperto, senza perdere l’esperienza desktop.
- Rendere la mappa un modo chiaro per orientarsi fra luoghi reali; non aggiungere marker, tappe o coordinate senza fonte e validazione.
- Tenere audio, comandi e trascrizione collegati e comprensibili anche con pausa, seek e cambio tappa.
- Conservare target touch, focus, nomi accessibili e comportamento con movimento ridotto.
- Tenere il tema locale separabile: palette, stemma, immagini, nomi, mascotte e tono non devono diventare dipendenze nascoste del core.
- Documentare le eccezioni dove vivono e perché sono necessarie.

Queste sono regole di progetto da verificare sul nuovo Comune, non una prescrizione che ogni sito debba avere esattamente sette tappe, una mascotte, sette lingue o la stessa palette.

## Scheda da compilare per ogni Comune

### Identità e scopo

- Comune e referente che valida:
- Obiettivo per il visitatore:
- Pubblico e contesto d’uso:
- Nome del percorso e tono narrativo approvati:
- Identità locale: stemma, colori con fonte, immagini, eventuale mascotte:
- Cosa resta Travel Podcasting e cosa cambia per questo Comune:

### Luoghi e copy

Per ogni tappa mantenere una scheda con identificativo stabile, nome ufficiale, coordinate e fonte, ordine nel percorso, testo italiano approvato, responsabile della verifica, stato di approvazione e versione/data. Per ogni affermazione storica o dato pratico registrare la fonte e, quando serve, la pagina o il passaggio preciso.

Prima di scrivere: raccogliere materiali comunali e fonti attendibili, separare fatti verificati da interpretazioni narrative, identificare nomi propri/dubbi, controllare coerenza e pronuncia. Scrivere e far validare il master italiano prima di derivare traduzioni, registrazioni o sintesi vocale. Le traduzioni vanno adattate al parlato e controllate da una persona competente; la traduzione automatica è una bozza, non un’approvazione.

Campi per la scheda di ogni tappa:

| Campo | Valore |
|---|---|
| ID e nome ufficiale | Da compilare |
| Nome breve per card/player | Da compilare |
| Coordinate e fonte | Da compilare |
| Fonti storiche/pratiche | Da compilare |
| Testo italiano, versione e stato | Da compilare |
| Pronunce/note per voce | Da compilare |
| Audio master e versione | Da compilare |
| Trascrizione sincronizzata | Da compilare |
| Foto e diritti/attribuzione | Da compilare |
| Validazione e data | Da compilare |

### Audio, contenuti e sottotitoli

Per ogni lingua e tappa tracciare separatamente questi asset, senza confonderli:

1. **Copione editoriale** approvato: documento sorgente, versione, data, approvatore e percorso/link preciso.
2. **Audio master ricevuto**: file WAV, lingua, tappa, versione, data, autore/fornitore, durata e link Drive preciso. Il WAV consegnato è l’input diretto per Rhubarb: non va ricavato una seconda volta dall’MP3 se appartiene alla stessa versione.
3. **Audio runtime**: file effettivamente caricato nel sito e corrispondenza col master.
4. **Trascrizione sincronizzata**: generata in locale con Whisper `large-v3-turbo` nella lingua effettivamente parlata; file JSON in `audio/transcripts/`, testo confrontato col copione approvato e con la trascrizione precedente, timestamp controllati all’ascolto e corrispondenza con quella specifica versione audio.
5. **Cue mascotte Rhubarb**, se usati: generati direttamente dal WAV ricevuto e salvati in `audio/cues/`, distinti dalla trascrizione editoriale; rigenerarli quando cambia il master audio.
6. **Stato di validazione**: testo, nomi propri, pronuncia, completezza, sincronizzazione, approvazione e data.

Ordine consigliato per una nuova traccia o una revisione: identificare il copione approvato e confrontarlo con la versione precedente; ricevere e versionare WAV e progetto audio; produrre una trascrizione locale Whisper `large-v3-turbo` nella lingua della traccia; confrontare **testo nuovo, testo precedente e parlato riconosciuto**, annotando aggiunte, tagli, riscritture, nomi e discrepanze senza “correggere” la trascrizione per farla coincidere col copione; riascoltare e validare testo e timestamp; generare i cue Rhubarb direttamente dal WAV; esportare o ricevere l’MP3 della stessa versione; verificare che WAV e MP3 corrispondano per contenuto e durata; aggiornare i file runtime in locale; provare riproduzione, pausa, seek e cambio lingua; aggiornare il registro e Git.

Nel sito, tenere gli MP3 runtime in sottocartelle con codici lingua ISO 639-1 (`audio/it/`, `audio/en/`, `audio/de/`, `audio/es/`, `audio/fr/`, `audio/pt/`, `audio/ru/`). Cue e trascrizioni restano nelle rispettive cartelle comuni (`audio/cues/`, `audio/transcripts/`); il nome base del file mantiene il collegamento fra audio e cue. Non attivare una lingua nel prodotto solo perché esiste un file: disponibilità e contenuti devono essere verificati per lingua e tappa.

Per la revisione italiana del 9 ottobre, il WAV PCM ricevuto è il master. Un MP3 codificato una sola volta dal WAV lossless non introduce una perdita udibile rispetto a un export MP3 da Logic con la stessa catena e impostazioni; le differenze dipendono dalla lavorazione sorgente e dal codificatore. Gli MP3 italiani runtime correnti sono per lo più stereo, 44,1 kHz, 192 kbps. I sette WAV nuovi sono PCM 16 bit, stereo, 44,1 kHz; usare come preset iniziale 192 kbps stereo a 44,1 kHz, verificando ascolto, picco e loudness prima della sostituzione. Evitare sempre MP3→MP3.

Per questo progetto, quando si parla di Travel Podcasting il riferimento è **Iacopo Piccaluga** (I iniziale). Se Iacopo consegna una nuova versione italiana sopra una precedente, non sovrascrivere senza registrare la sostituzione: annotare vecchio e nuovo nome/versione, quale testo è stato aggiornato, quali trascrizioni e cue vanno rigenerati e quale audio il runtime sta usando. La versione vecchia si conserva solo secondo la politica concordata per gli originali; non va resa attiva per errore.

### Registro asset audio per tappa/lingua

| Tappa | Lingua | Copione approvato | Master ricevuto (link/versione) | File runtime | Trascrizione verificata | Cue Rhubarb | Stato |
|---|---|---|---|---|---|---|---|
| Da compilare | IT | — | — | — | — | — | — |

## Ciò che recuperiamo oggi da Vicopisano

- Il runtime contiene sette tappe con titoli, testi introduttivi/localizzati, dati geografici e associazioni ai file in `app.js`.
- Le trascrizioni italiane sincronizzate sono in `audio/transcripts/`. La Tappa 1 è stata rigenerata da WAV con Whisper `large-v3-turbo`; le trascrizioni 2–7 restano quelle precedenti. Timestamp automatici da controllare all’ascolto.
- I cue Rhubarb sono in `audio/cues/` e hanno uno scopo diverso: sincronizzano la bocca della mascotte, non forniscono i sottotitoli.
- Il README locale documentava in precedenza la conversione MP3→WAV prima di Rhubarb. La procedura è stata corretta: quando è disponibile, si usa il WAV originale ricevuto; la conversione è solo una compatibilità per consegne prive di WAV. La trascrizione richiesta per questa revisione è Whisper `large-v3-turbo` locale nella lingua della traccia.
- Il copione sorgente recuperato su Drive è [Travel_Podcasting_Vicopisano_Itinerario_7_Tappe_CON_BIBLIOGRAFIA.docx](https://docs.google.com/document/d/1oFyFKo8T5tyMboP4RfcmVvIXmr4bYTTG/edit), aggiornato l’8 ottobre 2026. Contiene sette tappe marcate “Testo definitivo”, coordinate e bibliografia, con una nota esplicita che le fonti riguardano Vicopisano e non Calci. È un riferimento editoriale cloud, non la root di esecuzione del sito.
- Il DOCX non è presente nel repository locale. La fonte Drive corrente è ora collegata in README e playbook, ma non è ancora confermato che sia la versione approvata associata a ciascun nuovo WAV e alle trascrizioni runtime.
- Sono stati individuati i nuovi WAV e i progetti Logic di **Iacopo Piccaluga** nella cartella Drive indicata; resta da associare ogni WAV alla corretta esportazione MP3 runtime.
- Il copione recuperato usa Brunelleschi come narratore in prima persona, con tono divulgativo, ironia misurata, passaggi fra osservazione architettonica e vita attuale e inviti a proseguire verso la tappa successiva. È un modello di voce utile; fatti, battute, narratore e struttura devono essere ripensati per Calci e verificati sulle fonti locali.
- La [proposta di collaborazione per Vicopisano del 22 settembre 2026](https://docs.google.com/document/d/1Kmr5PSyCCp2P0WCs4s3jpp_0bzO0p71PagB4pFQzRqo/edit) descrive Brunelleschi come figura guida, sette tappe indicate come provvisorie da validare, testi italiani poi adattati alle lingue concordate e momenti di validazione comunale. È una fonte di progetto utile, non sostituisce le approvazioni o le fonti storiche dei singoli contenuti e non va trasferita a Calci.
- `app.js` contiene interfaccia e copy del runtime; i testi promozionali o storici non devono essere riutilizzati come fonti fattuali senza verificarne l’origine.
- Il comando `whisper` locale è installato nell’ambiente Miniforge; il pacchetto espone `large-v3-turbo` e il relativo modello risulta già presente nella cache locale al 9 ottobre 2026. La disponibilità del modello va verificata sulle altre workstation.

### Consegna audio italiana ricevuta il 9 ottobre 2026

La cartella segnalata da Pietro è [Delivering/Vicopisano/Audio def per demo](https://drive.google.com/drive/folders/1ELMOWUWqDt3whK2D5EJ8fAcmPrfDtZfF), con una sottocartella [Italiano](https://drive.google.com/drive/folders/1jq1-Z4wMeaLKAs67Df-E2PdbuF1JLzRm). L’inventario Drive mostra sette WAV, uno per tappa, più sette progetti Logic `.band`; la cartella separata per cambio/fine tappa contiene un MP3. Nell’elenco della cartella consegnata non compare un MP3 esportato per ciascuna delle sette nuove tracce. I WAV restano nella cartella di consegna e vengono letti localmente; gli MP3 runtime del progetto sono suddivisi in cartelle ISO. In questa cartella Drive non risultano file audio delle altre lingue.

| Tappa | WAV ricevuto | Progetto Logic `.band` | Stato di associazione all’MP3 runtime |
|---|---|---|---|
| 1 | [Tappa 1_MIGLIORATA - 07:10:26, 18.31.wav](https://drive.google.com/file/d/1DASllkSK6Nje4F_CGdmXQOyvHB1O-1Qs/view) | [Tappa 1_MIGLIORATA.band](https://drive.google.com/drive/folders/1M1NW0Gte5PZJNNgDBIjB9JCDX2nw2xee) | Aggiornato: MP3 192 kbps, trascrizione Whisper, cue Rhubarb dal WAV; verifica d’ascolto da fare |
| 2 | [TAPPA 2_MIGLIORATA - 08:10:26, 15.09.wav](https://drive.google.com/file/d/1DfDzgf07f-1NSZhJ47lKoV9XIOCedzIZ/view) | [TAPPA 2_MIGLIORATA.band](https://drive.google.com/drive/folders/1BB-rP_uqMDv_GE9JkUELp9fN2KhoHZy7) | Rinviata al 10 ottobre 2026; MP3, trascrizione e cue runtime invariati |
| 3 | [TAPPA 3_MIGLIORATA - 08:10:26, 12.46.wav](https://drive.google.com/file/d/1MjW2t8viI1BBIpiXBvpjuosN6Rta2hgX/view) | [TAPPA 3_MIGLIORATA.band](https://drive.google.com/drive/folders/1UQEwHpGsKO45L6I0-xYWx41RauE1L8lK) | Rinviata al 10 ottobre 2026; MP3, trascrizione e cue runtime invariati |
| 4 | [Tappa 4_MIGLIORATA - 08:10:26, 14.23.wav](https://drive.google.com/file/d/18uCx3lmkPA5DMcI8IyOUh-YvklnDhxK8/view) | [Tappa 4_MIGLIORATA.band](https://drive.google.com/drive/folders/1S3Fkb4VDMhc8LogMw7WrXTd_KfM2U03l) | Rinviata al 10 ottobre 2026; MP3, trascrizione e cue runtime invariati |
| 5 | [TAPPA 5_MIGLIORATA - 08:10:26, 14.33.wav](https://drive.google.com/file/d/1yk3E5_MTabLvNvqtYYPV2uY57wYo7E-P/view) | [TAPPA 5_MIGLIORATA.band](https://drive.google.com/drive/folders/1Xn4DMjMldS_zFvHMaXTnT_YwG2NVdz8O) | Rinviata al 10 ottobre 2026; MP3, trascrizione e cue runtime invariati |
| 6 | [TAPPA 6_MIGLIORATA - 08:10:26, 14.40.wav](https://drive.google.com/file/d/1g4cisa8DmQ6eUTddg-VeE3hv0PKWEzkm/view) | [TAPPA 6_MIGLIORATA.band](https://drive.google.com/drive/folders/1ClB1x4gt6R4oM7lU7-8st9BMjdzhbzYS) | Rinviata al 10 ottobre 2026; MP3, trascrizione e cue runtime invariati |
| 7 | [TAPPA 7_MIGLIORATA - 08:10:26, 14.53.wav](https://drive.google.com/file/d/1j81hnrCKaqSuttcUZiZeIFN7aXghbKFY/view) | [TAPPA 7_MIGLIORATA.band](https://drive.google.com/drive/folders/1V9TuyRHfGKBO7ADu1kHHzBt7yylmcGUV) | Rinviata al 10 ottobre 2026; MP3, trascrizione e cue runtime invariati |

La cartella [Audio per cambio tappa e fine tappa](https://drive.google.com/drive/folders/1cJx4JphQoFrDatG5uKAexEF1qU_Jcvnj) contiene un MP3 separato; per ora non è una nuova traccia di tappa e non è incluso nella sostituzione qui descritta.

## Prime attività per Calci

Calci è il prossimo Comune. Al momento non ci sono nel progetto esaminato una scheda Calci, un tema `theme-calci.css`, contenuti, tappe o coordinate verificati. Prima di creare il tema o trasferire il copy:

1. Definire chi approva e raccogliere fonti, materiali e vincoli del Comune.
2. Delimitare percorso, tappe, ordine e coordinate con fonti.
3. Decidere quali invarianti del prodotto restano e quale identità locale si applica.
4. Fare l’audit dei CSS core/tema di Vicopisano; risolvere la fuga dei fallback locali nel core prima di assumere il tema come modello pulito.
5. Raccogliere e validare il testo italiano; poi collegare audio, sottotitoli, lingue, immagini e diritti con il registro asset.
6. Verificare il sito risultante su telefono e desktop, accessibilità, flussi di onboarding e caricamento audio; aggiornare questa scheda con le decisioni motivate.

## Registro decisioni

Aggiungere una riga quando si decide una regola destinata a restare o un’eccezione importante.

| Data | Ambito | Decisione | Motivo e prova | Fonte/approvatore | Applicazione |
|---|---|---|---|---|---|
| 2026-10-09 | Prodotto / processo | Questo playbook è il punto di partenza per il confronto fra prodotto comune e adattamento comunale. | L’audit ha trovato il design system separato solo in parte dal tema e la catena copione → audio → trascrizione non completamente tracciata. | Audit locale di `DESIGN_SYSTEM.md`, CSS, `README.md`, `INDEX.md` e cronologia Git. | Vicopisano; da applicare a Calci |

## Questioni da chiudere prima di applicare le regole a Calci

- L’identificatore viola numerato è un segno del prodotto Travel Podcasting oppure un’eccezione ereditata da Vicopisano?
- La mascotte Brunelleschi appartiene solo al racconto di Vicopisano? Per Calci si prevede una figura guida locale, la mascotte del prodotto o nessuna mascotte?
- Quale repository conterrà Calci e come si condivide il core: stesso repository con temi separati o repository comunale derivato? Non duplicare né creare root finché la scelta non è fatta.
- Per questa consegna il DOCX aggiornato l’8 ottobre è il copione nuovo approvato; la revisione riguarda le sette tracce italiane, non l’intermezzo né le registrazioni nelle altre lingue.
- Dopo la Tappa 1, continuare il 10 ottobre dalla Tappa 2, verificando per ciascuna tappa WAV, testo precedente e approvato, MP3, trascrizione e cue prima della sostituzione.

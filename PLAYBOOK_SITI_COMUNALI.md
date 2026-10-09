# Registro specifico del sito Vicopisano

Questo documento raccoglie l’audit e le informazioni locali del sito Vicopisano. Le procedure valide per tutti i Comuni sono nel playbook centrale: [Playbook Siti Comunali — Travel Podcasting](https://github.com/balestripietro-commits/LocalDev/blob/main/Travel%20podcasting/github-sites/Playbook-Siti-Comunali/PLAYBOOK_SITI_COMUNALI.md).

Repository locale del sito: `/Users/pietrobalestri/LocalDev/Travel podcasting/github-sites/Vicopisano`. Questo progetto è una repository annidata e indipendente, esclusa dalla macro-repository `LocalDev`.

## Ambito e stato

Audit documentale eseguito il 9 ottobre 2026. Le osservazioni sotto descrivono Vicopisano e non sono approvazioni per altri Comuni. La documentazione specifica del runtime è anche in `README.md`, `INDEX.md` e `DESIGN_SYSTEM.md`.

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

## Ciò che recuperiamo oggi da Vicopisano

- Il runtime contiene sette tappe con titoli, testi introduttivi/localizzati, dati geografici e associazioni ai file in `app.js`.
- Le trascrizioni italiane sincronizzate sono in `audio/transcripts/`. La Tappa 1 è stata rigenerata da WAV con Whisper `large-v3-turbo`; le trascrizioni 2–7 restano quelle precedenti. Timestamp automatici da controllare all’ascolto.
- I cue Rhubarb sono in `audio/cues/` e hanno uno scopo diverso: sincronizzano la bocca della mascotte, non forniscono i sottotitoli.
- Il README locale documentava in precedenza la conversione MP3→WAV prima di Rhubarb. La procedura è stata corretta: quando è disponibile, si usa il WAV originale ricevuto; la conversione è solo una compatibilità per consegne prive di WAV. La trascrizione richiesta per questa revisione è Whisper `large-v3-turbo` locale nella lingua della traccia.
- Il copione sorgente recuperato su Drive è [Travel_Podcasting_Vicopisano_Itinerario_7_Tappe_CON_BIBLIOGRAFIA.docx](https://docs.google.com/document/d/1oFyFKo8T5tyMboP4RfcmVvIXmr4bYTTG/edit), aggiornato l’8 ottobre 2026. Contiene sette tappe marcate “Testo definitivo”, coordinate e bibliografia, con una nota esplicita che le fonti riguardano Vicopisano e non Calci. È un riferimento editoriale cloud, non la root di esecuzione del sito.
- Il DOCX non è presente nel repository locale. Pietro ha confermato che la versione Drive aggiornata l’8 ottobre è il nuovo copione approvato. Per la Tappa 1 il parlato del nuovo WAV è stato confrontato con il copione; per le tappe 2–7 il confronto resta da fare prima di sostituire gli asset runtime.
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
## Questioni emerse dall’audit da risolvere prima di usare Vicopisano come modello

- L’identificatore viola numerato è un segno del prodotto Travel Podcasting oppure un’eccezione ereditata da Vicopisano?
- La mascotte Brunelleschi appartiene solo al racconto di Vicopisano? Per Calci si prevede una figura guida locale, la mascotte del prodotto o nessuna mascotte?
- Calci avrà una repository autonoma per il deploy. La strategia di partenza del codice resta rinviata; la preferenza attuale è arrivare a un modello neutro, senza assumere che il runtime Vicopisano sia già separato dal tema locale.
- Per questa consegna il DOCX aggiornato l’8 ottobre è il copione nuovo approvato; la revisione riguarda le sette tracce italiane, non l’intermezzo né le registrazioni nelle altre lingue.
- Dopo la Tappa 1, continuare il 10 ottobre dalla Tappa 2, verificando per ciascuna tappa WAV, testo precedente e approvato, MP3, trascrizione e cue prima della sostituzione.


## Decisione di tracciamento

| Data | Ambito | Decisione | Motivo e prova | Applicazione |
|---|---|---|---|---|
| 2026-10-09 | Processo | Spostare le regole comuni nel playbook tracciato dalla macro-repo `LocalDev`; mantenere qui audit e asset specifici di Vicopisano. | Evitare che procedure comuni e dettagli del sito si confondano o divergano. | Vicopisano e futuri progetti comunali |

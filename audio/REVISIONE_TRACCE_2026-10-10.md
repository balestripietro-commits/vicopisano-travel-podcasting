# Revisione delle tracce italiane — 10 ottobre 2026

## Risultato

Nella versione locale sono stati sostituiti i sette MP3 italiani in `audio/it/`, rigenerati i sette cue Rhubarb in `audio/cues/` direttamente dai WAV originali e rigenerate le sette trascrizioni sincronizzate in `audio/transcripts/`. I nuovi MP3 sono stereo, 44,1 kHz e 192 kbps. Durate MP3 e cue risultano allineate entro pochi millisecondi.

Le trascrizioni seguono il parlato effettivo e non sono state completate con parole presenti nel copione ma non riconosciute automaticamente. Sono marcate `ready-for-review` con `reviewRequired: true`: serve ancora ascolto editoriale per sciogliere i punti aperti qui sotto e convalidare i timestamp. Audio stranieri, intermezzo e altre tappe non italiane non sono stati modificati.

## Fonti e metodo

- WAV e progetti Logic `.band`: cartella di consegna Drive indicizzata in [`PLAYBOOK_SITI_COMUNALI.md`](../PLAYBOOK_SITI_COMUNALI.md), sezione “Consegna audio italiana ricevuta il 9 ottobre 2026”. I WAV sono stati usati come sorgente per trascrizione e cue; i file di lavoro sono stati elaborati nella repository locale.
- Copione di riferimento: [Travel Podcasting Vicopisano, itinerario 7 tappe](https://docs.google.com/document/d/1oFyFKo8T5tyMboP4RfcmVvIXmr4bYTTG/edit), versione confermata da Pietro come definitiva dell’8 ottobre 2026.
- Tappa 1: trascrizione esistente da OpenAI Whisper `large-v3-turbo`; tappe 2–7: Faster-Whisper `large-v3-turbo`, CTranslate2, inferenza locale `int8`. Timestamp a livello di parola raggruppati in segmenti di frase.
- Cue mascotte: Rhubarb Lip Sync 1.14.0, modalità `phonetic`, sul WAV originale.
- Confronto: testo riconosciuto confrontato sia con il copione aggiornato sia con la trascrizione runtime precedente. Normalizzazioni di toponimi, numeri e ortografia annotate nei rispettivi JSON. I valori di somiglianza sotto sono indicativi e non sostituiscono l’ascolto.

## Confronto testo

| Tappa | Copione | Trascrizione precedente rispetto al copione | Nuova trascrizione rispetto al copione | Note da verificare all’ascolto |
|---|---:|---:|---:|---|
| 1 | 462 parole | 99,6% | 97,9% | Normalizzati `600 → seicento`, `Vico Pisano → Vicopisano` e apostrofi. Verifica editoriale già segnalata nel rapporto del 9 ottobre. |
| 2 | 306 parole | 99,7% | 96,8% (98,2% normalizzando il toponimo) | Whisper rileva anche “Devo essere sincero, è un miglioramento che approvo pienamente”, frase assente dal copione ma confermata da una seconda trascrizione indipendente. Mantenuta come parlato. Verificare “preferì/preferii”. |
| 3 | 459 parole | 92,1% | 99,3% (99,7% normalizzando il toponimo) | Normalizzato `50 → cinquanta`. Una possibile omissione dell’articolo “i” resta da ascoltare; non è stato inserito nel testo. |
| 4 | 408 parole | 97,8% | 99,5% | Normalizzato il nome “Rocca’n’Roll”, riconosciuto automaticamente come “rock and roll”. |
| 5 | 360 parole | 97,9% | 99,6% | Normalizzato `19 → diciannove`. L’apertura “Eccole” sembra assente dalla trascrizione automatica: verificare sul WAV prima di correggere. |
| 6 | 501 parole | 99,8% | 99,0% (99,6% dopo normalizzazioni) | Normalizzati `Vico Pisano → Vicopisano`, `200 → duecento` e `linei → lignei`. |
| 7 | 585 parole di testo principale | 96,7% | 98,4% | Normalizzati `600 → seicento` e `800 → ottocento`. Whisper non rileva “All’inizio di questo percorso, appena tornato a Vicopisano”: verificare sul WAV. L’outro generico del DOCX non è presente né nella vecchia né nella nuova registrazione ed è escluso dal confronto. |

## Controlli tecnici eseguiti

- I sette nomi audio e trascrizione corrispondono alle associazioni in `app.js`.
- I timestamp sono ordinati e non superano la durata dell’MP3 corrispondente; eventuale silenzio finale non è rappresentato da testo.
- I cue sono stati generati dai WAV della stessa consegna e le durate corrispondono agli MP3 entro 10 ms circa.
- `npm run build` completato con esito positivo; la build contiene i sette audio, le trascrizioni e i cue aggiornati.
- Verifica HTTP su `127.0.0.1:8000`: pagina, sette MP3, JSON delle trascrizioni e cue rispondono `200`; una richiesta audio con `Range` risponde `206 Partial Content` per 100 byte.
- `git diff --check` non segnala errori di whitespace. La suite E2E completa non è stata eseguita, come richiesto per questa revisione rapida.

## Follow-up editoriale

1. Ascoltare i punti segnalati in tabella e correggere le trascrizioni solo in base al parlato.
2. Fare un ascolto di controllo delle sette tracce e un controllo visivo della sincronizzazione cue/mascotte.
3. Per le prossime modifiche, seguire la suite E2E e il workflow di deploy documentati nel README.

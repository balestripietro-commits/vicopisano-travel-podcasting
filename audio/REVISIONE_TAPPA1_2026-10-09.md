# Revisione audio italiana — Tappa 1

Data: 9 ottobre 2026
Responsabile della voce: Iacopo Piccaluga
Stato: aggiornamento applicato al runtime; trascrizione automatica pronta per controllo d’ascolto.

## Fonti e versione

- Copione approvato: [Travel Podcasting Vicopisano — itinerario in sette tappe con bibliografia](https://docs.google.com/document/d/1oFyFKo8T5tyMboP4RfcmVvIXmr4bYTTG/edit), aggiornato l’8 ottobre 2026.
- WAV master: [Tappa 1_MIGLIORATA - 07:10:26, 18.31.wav](https://drive.google.com/file/d/1DASllkSK6Nje4F_CGdmXQOyvHB1O-1Qs/view), lasciato nella cartella di consegna Drive.
- Sessione Logic: [Tappa 1_MIGLIORATA.band](https://drive.google.com/drive/folders/1M1NW0Gte5PZJNNgDBIjB9JCDX2nw2xee).
- Asset runtime: `audio/it/01_torre_quattro_porte.mp3`.

## Confronto del testo

| Confronto | Esito |
|---|---|
| Trascrizione runtime precedente → copione approvato 8 ottobre | 458 → 462 parole; similarità sequenziale 99,6%. Il copione aggiunge «Quattro archi. Quattro direzioni.», presente anche nel parlato riconosciuto del nuovo WAV. |
| Copione approvato → Whisper sul nuovo WAV | 462 → 463 parole; similarità 97,9% prima delle normalizzazioni. Le differenze rilevate sono ortografiche: `600`/`seicento`, apostrofi e `Vico Pisano`/`Vicopisano`. |

La trascrizione attiva deriva dal parlato del WAV, non dal solo copione. Whisper `large-v3-turbo` è stato eseguito localmente in italiano con timestamp a livello di parola; gli scarti lessicali rispetto al copione vanno verificati all’ascolto prima di rimuovere `reviewRequired` dal JSON.

## Audio e cue

- Il WAV ricevuto è PCM 16 bit, stereo, 44,1 kHz; durata 228,85288 secondi.
- L’MP3 runtime è stato codificato una sola volta dal WAV a 192 kbps stereo, 44,1 kHz; durata 228,85288 secondi. È lo stesso profilo usato dalla maggior parte delle tracce italiane attuali.
- Rhubarb `phonetic` è stato eseguito direttamente sul WAV. Il cue ha 1.514 shape e durata 228,85 secondi, coerente con l’MP3 runtime.
- WAV e sessione Logic originali non sono stati modificati. Gli MP3, le trascrizioni e i cue delle tappe 2–7 mantengono il contenuto precedente; sono cambiati solo i loro percorsi di runtime secondo la suddivisione per lingua.

## Verifiche e limite residuo

- JSON della trascrizione e cue validi; tutti i percorsi audio configurati in `app.js` e i cue associati esistono.
- Build statico completato correttamente.
- Il controllo puntuale d’ascolto della trascrizione automatica non è ancora stato svolto; per questo il JSON conserva `status: ready-for-review` e `reviewRequired: true`.
- La revisione delle tappe 2–7 è rinviata; i relativi asset audio non sono stati ricodificati né sovrascritti.

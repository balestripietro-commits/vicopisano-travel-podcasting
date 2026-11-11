# Audio multilingua — novembre 2026

Il sito comprende italiano e sei versioni aggiuntive: inglese, francese,
tedesco, spagnolo, portoghese europeo e russo. Ogni nuova lingua ha otto
narrazioni e due soli messaggi istituzionali, senza rigenerazioni delle voci.

## File e comportamento del player

- `audio/<lingua>/01_…mp3`–`08_…mp3`: narrazione della singola tappa.
- `transition_between_stops_<lingua>.mp3`: stesso file dopo le tappe 1–7.
- `transition_final_<lingua>.mp3`: messaggio conclusivo dopo la tappa 8.
- `audio/transcripts/…_<lingua>.json`: testo approvato con tempi locali.
- `audio/cues/…_<lingua>.json`: animazione della bocca basata sull'energia
  della voce; non è un allineamento fonetico Rhubarb.
- `multilingual-data.js`: catalogo dei pacchetti completi. Una lingua viene
  abilitata solo se contiene tutte le narrazioni, i sottotitoli e i due incisi.

Dopo la narrazione parte il messaggio nella lingua selezionata. Al termine
del messaggio intermedio il player seleziona la tappa successiva in pausa,
così il visitatore può raggiungerla. Dopo il messaggio conclusivo torna
alla tappa 8 in pausa, pronta per essere riascoltata. Passando a una lingua
diversa la narrazione riparte dall'inizio: tempi assoluti di lingue diverse
non corrispondono necessariamente allo stesso contenuto.

## Separazione degli incisi e sottotitoli

Le tracce pilota 1–2 contenevano già il messaggio istituzionale. Nelle copie
web è stato rimosso in una pausa misurata, dopo confronto tra copione,
riconoscimento locale e forma d'onda; i master originali sono conservati
fuori dal repository. Gli MP3 web sono esportati a 192 kbit/s. I WAV di
produzione non vengono duplicati sul sito.

I sottotitoli derivano dai copioni approvati, non dal testo riconosciuto
automaticamente. Whisper.cpp eseguito sul Mac fornisce gli ancoraggi
temporali. Le date scritte in lettere, riconosciute come cifre, e quattro
confini temporali imprecisi sono stati controllati separatamente. Non sono
stati inviati audio a servizi di allineamento esterni né consumati crediti
ElevenLabs per questa lavorazione.

Il riconoscimento automatico non è una certificazione di esattezza né una
revisione madrelingua: i metadati conservano questa distinzione. Restano
raccomandati un ascolto editoriale finale e un riscontro dei revisori delle
singole lingue. Nessuna chiave API, WAV master o percorso privato locale
deve essere inserito in questo repository pubblico.

## Verifica prima di pubblicare

```sh
npm ci
npm run build
npx playwright test tests/e2e/multilingual-audio.spec.mjs
```

Il test controlla gli asset delle sei lingue, le otto tappe, i due incisi,
il player, i sottotitoli e il mantenimento della lingua nei link diretti.
Le tracce italiane e i relativi sottotitoli non sono stati modificati.

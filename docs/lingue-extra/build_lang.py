#!/usr/bin/env python3
"""Prepara audio, sottotitoli e cue di una lingua aggiuntiva del sito (da audio di revisione + riconoscimento Whisper locale)."""
import json, os, re, subprocess, sys
import numpy as np

REPO = sys.argv[1]
WORK = sys.argv[2]
SLUGS = ["torre_quattro_porte","torre_camminamento_soccorso","palazzo_pretorio","rocca_brunelleschi","torre_orologio","pieve_santa_maria","torri_gemelle","palazzo_comunale"]
LANGS = {"zh": ("ZH", "中文", r"[。！？!?]", r"[，,、；;：:]", 38), "ar": ("AR", "العربية", r"[.!؟?]", r"[،,؛;:]", 85)}
VER = "20261117-zhar"

def segments_from_asr(asr_segs, sent_re, comma_re, maxlen):
    """Divide ogni segmento riconosciuto in frasi e distribuisce il tempo in proporzione ai caratteri."""
    out = []
    for sg in asr_segs:
        text = sg["text"].strip()
        if not text: continue
        parts, cur = [], ""
        for ch in text:
            cur += ch
            if re.search(sent_re, ch) or (len(cur.strip()) >= maxlen and re.search(comma_re, ch)):
                parts.append(cur); cur = ""
        if cur.strip(): parts.append(cur)
        weights = [max(1, len(re.sub(r"[\s\W_]+", "", p))) for p in parts]
        total = float(sum(weights)); t = sg["start"]; dur = max(0.01, sg["end"] - sg["start"])
        for p, w in zip(parts, weights):
            e = t + dur * w / total
            out.append({"start": round(t, 2), "end": round(e, 2), "text": p.strip()})
            t = e
    return out


def load_script(path):
    stops, cur = {}, None
    for line in open(path, encoding="utf-8"):
        line = line.strip()
        if not line: continue
        if line.startswith("#"): cur = int(line[1:]); stops[cur] = []
        else: stops[cur].append(line)
    return stops

def clen(t): return len(re.sub(r"[\s\W_]+", "", t))

def split_long(line, limit, comma_re):
    if clen(line) <= limit: return [line]
    mid = len(line) // 2
    cands = [m.end() for m in re.finditer(comma_re, line)]
    if not cands: return [line]
    cut = min(cands, key=lambda i: abs(i - mid))
    return split_long(line[:cut].strip(), limit, comma_re) + split_long(line[cut:].strip(), limit, comma_re)

def align_script(lines, asr_segs, limit, comma_re):
    """Assegna un tempo a ogni frase del copione approvato, in proporzione ai caratteri riconosciuti dall'audio."""
    sents = []
    for ln in lines: sents += split_long(ln, limit, comma_re)
    pts = [(0.0, asr_segs[0]["start"])]; cum = 0.0
    for sg in asr_segs:
        a = clen(sg["text"])
        if a == 0: continue
        pts.append((cum, sg["start"])); cum += a; pts.append((cum, sg["end"]))
    A = cum; S = float(sum(clen(x) for x in sents))
    def tm(f):
        c = f * A
        for (c0, t0), (c1, t1) in zip(pts, pts[1:]):
            if c0 <= c <= c1 and c1 > c0: return t0 + (t1 - t0) * (c - c0) / (c1 - c0)
        return pts[-1][1]
    out, done = [], 0.0
    for x in sents:
        f0 = done / S; done += clen(x); f1 = done / S
        out.append({"start": round(tm(f0), 2), "end": round(tm(f1), 2), "text": x})
    return out

def cues(path):
    raw = subprocess.run(["ffmpeg", "-v", "quiet", "-i", path, "-f", "s16le", "-ac", "1", "-ar", "16000", "-"], capture_output=True).stdout
    a = np.frombuffer(raw, dtype=np.int16).astype(float) / 32768
    W = 1280
    out, dur = [], round(len(a) / 16000, 2)
    for i in range(0, len(a) - W, W):
        r = float(np.sqrt(np.mean(a[i:i + W] ** 2)))
        v = "B" if r < 0.012 else ("C" if r < 0.095 else "D")
        s, e = round(i / 16000, 2), round((i + W) / 16000, 2)
        if out and out[-1]["value"] == v: out[-1]["end"] = e
        else: out.append({"start": s, "end": e, "value": v})
    if out: out[-1]["end"] = dur
    return out, dur

tracks = []
SCRIPTS = {"zh": load_script(f"{WORK}/script_zh.txt"), "ar": load_script(f"{WORK}/script_ar.txt")}
for lang, (code, name, sent_re, comma_re, maxlen) in LANGS.items():
    os.makedirs(f"{REPO}/audio/{lang}", exist_ok=True)
    for n in range(1, 9):
        slug = SLUGS[n - 1]; base = f"{n:02d}_{slug}_{lang}"
        src = f"{WORK}/work/{lang}_{n:02d}.mp3"; dst = f"{REPO}/audio/{lang}/{base}.mp3"
        if not os.path.exists(dst): subprocess.run(["ffmpeg", "-v", "quiet", "-y", "-i", src, "-ac", "1", "-b:a", "128k", dst], check=True)
        asr = json.load(open(f"{WORK}/asr/{lang}_{n:02d}.json"))
        segs = align_script(SCRIPTS[lang][n], asr["segments"], maxlen + 14 if lang == "zh" else 150, comma_re)
        cu, dur = cues(dst)
        json.dump({"version": 1, "status": "aligned-local-asr-review-required", "language": lang, "stop": n,
                   "audio": {"duration": dur, "source": f"audio/{lang}/{base}.mp3"},
                   "alignment": {"engine": "Approved script text; sentence timing from Whisper large-v3-turbo local recognition (proportional to characters)", "reviewRequired": True, "external_audio_transfer": False},
                   "segments": segs},
                  open(f"{REPO}/audio/transcripts/{base}.json", "w"), ensure_ascii=False)
        json.dump({"metadata": {"soundFile": f"audio/{lang}/{base}.mp3", "duration": dur, "engine": "local speech-energy animation, not phonetic lip sync"}, "mouthCues": cu},
                  open(f"{REPO}/audio/cues/{base}.json", "w"), ensure_ascii=False)
        sep = "" if lang == "zh" else " "
        tracks.append({"stop": n, "code": code, "language": name, "ready": True, "text": "\n".join(s["text"] for s in segs),
                       "audio": f"audio/{lang}/{base}.mp3?v={VER}", "subtitleSource": f"audio/transcripts/{base}.json?v={VER}", "pilotTrimVerified": False})
        print(lang, n, len(segs), dur, flush=True)

js = "/* Cinese (ZH) e arabo (AR): audio di revisione v01 con sottotitoli da riconoscimento locale. Da rivedere con madrelingua prima della diffusione. */\n(function () {\n  var m = window.VICOPISANO_MULTILINGUAL;\n  if (!m) return;\n  var extra = " + json.dumps(tracks, ensure_ascii=False) + ";\n  extra.forEach(function (t) { m.tracks.push(t); });\n  [\"ZH\", \"AR\"].forEach(function (c) { if (m.readyLanguages.indexOf(c) < 0) m.readyLanguages.push(c); });\n})();\n"
open(f"{REPO}/multilingual-extra.js", "w").write(js)
print("ok")

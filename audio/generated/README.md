# Generated alternate gameplay music

These original chiptune loops are provisional alternatives to the existing gameplay tracks.

- **Neon Drift** — 128 BPM, 16 bars. A restrained pulse melody, rolling triangle bass, and light noise percussion intended as a relaxed alternative to Chill.
- **Neon Drift Clear** — 128 BPM, 4 bars. A brighter rising cadence using Neon Drift's pulse width, bass register, and harmonic palette.
- **Capsule Rush** — 168 BPM, 20 bars. A brighter, denser lead and faster rhythmic pattern intended as a high-energy alternative to Fever.
- **Capsule Rush Clear** — 168 BPM, 4 bars. A compact ascending fanfare using Capsule Rush's narrow pulse lead and denser arpeggio pattern.

Regenerate both MP3 files from the committed score and synthesizer with:

```sh
nix develop --command npm run audio:generate
```

The renderer is deterministic and writes mono 44.1 kHz, 192 kbps MP3 files into this directory.

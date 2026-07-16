# Generated alternate gameplay music

These original chiptune loops are provisional alternatives to the existing gameplay tracks.

- **Neon Drift** — 128 BPM, 16 bars. A restrained pulse melody, rolling triangle bass, and light noise percussion intended as a relaxed alternative to Chill.
- **Capsule Rush** — 168 BPM, 20 bars. A brighter, denser lead and faster rhythmic pattern intended as a high-energy alternative to Fever.

Regenerate both MP3 files from the committed score and synthesizer with:

```sh
nix develop --command npm run audio:generate
```

The renderer is deterministic and writes mono 44.1 kHz, 192 kbps MP3 files into this directory.

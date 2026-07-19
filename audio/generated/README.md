# Generated alternate gameplay music

These original chiptune loops are provisional alternatives to the existing gameplay tracks.

- **Neon Drift** — 128 BPM, 16 bars. A restrained pulse melody, rolling triangle bass, and light noise percussion intended as a relaxed alternative to Chill.
- **Neon Drift Clear** — 128 BPM, 4 bars. A brighter rising cadence using Neon Drift's pulse width, bass register, and harmonic palette.
- **Capsule Rush** — 168 BPM, 20 bars. A brighter, denser lead and faster rhythmic pattern intended as a high-energy alternative to Fever.
- **Capsule Rush Clear** — 168 BPM, 4 bars. A compact ascending fanfare using Capsule Rush's narrow pulse lead and denser arpeggio pattern.
- **Granite Promenade** — 132 BPM, 18 bars. An original modal procession influenced by the broad pacing, dark brass-like registers, and shifting harmonic colour associated with nineteenth-century Russian orchestral writing.
- **Granite Promenade Clear** — 132 BPM, 4 bars. A compact major-bright cadence derived from the Promenade's original interval vocabulary.
- **Snowbound Sabre** — 176 BPM, 20 bars. An original motor-rhythm piece influenced by the angular drive and brilliant orchestration associated with Russian modernism.
- **Snowbound Sabre Clear** — 176 BPM, 4 bars. A fast ascending answer built from Snowbound Sabre's original motif and pulse palette.
- **Prismatic Descent** — 144 BPM, 20 bars. A crystalline pulse melody, descending arpeggios, and steady race rhythm composed for the proposed Quarry Match game.
- **Prismatic Descent Clear** — 144 BPM, 4 bars. An upbeat completion cadence derived from Prismatic Descent's harmony, lead voice, and arpeggio shape.
- **Prismatic Descent Combo** — a 480 ms contrasting effects cue: sharp noise crack, descending pulse sweep, and low impact. It is intentionally non-melodic so cascades remain unmistakable over the Quarry score.
- **Prismatic Descent Reset** — a 700 ms disappointed reset cue built from a descending detuned tritone, unstable pulse wobble, noise scrape, and final low drop.

The Russian-classical influence is stylistic only. The scores do not quote or adapt an existing composition, including the traditional Tetris themes.

Regenerate all MP3 files from the committed score and synthesizer with:

```sh
nix develop --command npm run audio:generate
```

The renderer is deterministic and writes mono 44.1 kHz, 192 kbps MP3 files into this directory.

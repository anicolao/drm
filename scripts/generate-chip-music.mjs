import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const SAMPLE_RATE = 44100;
const OUTPUT = 'audio/generated';
const midi = (note) => 440 * 2 ** ((note - 69) / 12);
const pulse = (phase, duty = 0.5) => phase % 1 < duty ? 1 : -1;
const triangle = (phase) => 1 - 4 * Math.abs((phase % 1) - 0.5);
const noise = (sample, seed) => {
  let value = (sample + seed * 104729) | 0;
  value ^= value << 13; value ^= value >>> 17; value ^= value << 5;
  return ((value >>> 0) / 0xffffffff) * 2 - 1;
};
const clamp = (value) => Math.max(-1, Math.min(1, value));

const tracks = [
  {
    slug: 'neon-drift', title: 'Neon Drift', bpm: 128, bars: 16, root: 50,
    progression: [0, 5, 3, 7, 0, 8, 5, 7, 0, 5, 3, 10, 8, 5, 7, 7],
    melody: [12, null, 14, 15, null, 19, 17, null, 15, null, 14, 12, null, 10, 12, null,
      7, null, 10, 12, null, 14, 15, null, 14, null, 12, 10, null, 7, 10, null],
    arp: [0, 7, 12, 7, 3, 10, 15, 10], leadDuty: 0.25, swing: 0.08, energy: 0.72, seed: 31
  },
  {
    slug: 'capsule-rush', title: 'Capsule Rush', bpm: 168, bars: 20, root: 45,
    progression: [0, 3, 7, 5, 0, 8, 7, 10, 0, 3, 7, 5, 8, 10, 7, 7, 0, 5, 8, 7],
    melody: [12, 15, 19, 20, 19, 15, 12, 10, 12, 15, 17, 19, 22, 20, 19, 15,
      24, 22, 19, 17, 19, 20, 22, 19, 17, 15, 12, 15, 17, 19, 15, 10],
    arp: [0, 7, 12, 15, 19, 15, 12, 7], leadDuty: 0.125, swing: 0.02, energy: 1, seed: 73
  }
];

function envelope(position, length, attack = 0.025, release = 0.18) {
  return Math.min(1, position / attack, Math.max(0, (length - position) / release));
}

function render(track) {
  const beatSeconds = 60 / track.bpm;
  const stepSeconds = beatSeconds / 4;
  const totalSeconds = track.bars * 4 * beatSeconds;
  const samples = Math.round(totalSeconds * SAMPLE_RATE);
  const pcm = Buffer.alloc(samples * 2);

  for (let sample = 0; sample < samples; sample++) {
    const time = sample / SAMPLE_RATE;
    const rawStep = time / stepSeconds;
    const step = Math.floor(rawStep);
    const withinStep = rawStep - step;
    const bar = Math.floor(step / 16);
    const stepInBar = step % 16;
    const chord = track.progression[bar % track.progression.length];
    let mix = 0;

    const bassNote = track.root + chord + ([0, 0, 7, 0][Math.floor(stepInBar / 4)] ?? 0);
    const bassPhase = time * midi(bassNote);
    mix += triangle(bassPhase) * envelope(withinStep * stepSeconds, stepSeconds, 0.01, 0.12) * 0.24;

    const arpNote = track.root + 12 + chord + track.arp[step % track.arp.length];
    const arpPhase = time * midi(arpNote);
    mix += pulse(arpPhase, 0.5) * envelope(withinStep * stepSeconds, stepSeconds, 0.008, stepSeconds * 0.45) * 0.10;

    const melodyIndex = (step + Math.floor(bar / 4) * 3) % track.melody.length;
    const melodyOffset = track.melody[melodyIndex];
    if (melodyOffset !== null && (track.energy > 0.8 || stepInBar % 2 === 0)) {
      const leadNote = track.root + 12 + chord + melodyOffset;
      const leadPhase = time * midi(leadNote);
      mix += pulse(leadPhase, track.leadDuty) * envelope(withinStep * stepSeconds, stepSeconds, 0.012, stepSeconds * 0.62) * 0.18;
    }

    const beatPosition = (time % beatSeconds);
    const kickEnvelope = Math.exp(-beatPosition * 15);
    if (stepInBar % 4 === 0) mix += Math.sin(2 * Math.PI * (54 + 70 * kickEnvelope) * beatPosition) * kickEnvelope * 0.27;

    const eighthPosition = time % (beatSeconds / 2);
    if (stepInBar % 2 === 0) mix += noise(sample, track.seed) * Math.exp(-eighthPosition * 42) * 0.065 * track.energy;

    if (stepInBar === 4 || stepInBar === 12) {
      mix += noise(sample, track.seed + 9) * Math.exp(-beatPosition * 22) * 0.12 * track.energy;
    }

    const fade = Math.min(1, time / 0.015, (totalSeconds - time) / 0.015);
    pcm.writeInt16LE(Math.round(clamp(mix * Math.max(0, fade) * 0.82) * 32767), sample * 2);
  }
  return { pcm, totalSeconds };
}

function wav(pcm) {
  const header = Buffer.alloc(44);
  header.write('RIFF', 0); header.writeUInt32LE(36 + pcm.length, 4); header.write('WAVE', 8);
  header.write('fmt ', 12); header.writeUInt32LE(16, 16); header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22); header.writeUInt32LE(SAMPLE_RATE, 24); header.writeUInt32LE(SAMPLE_RATE * 2, 28);
  header.writeUInt16LE(2, 32); header.writeUInt16LE(16, 34); header.write('data', 36); header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

mkdirSync(OUTPUT, { recursive: true });
for (const track of tracks) {
  const { pcm, totalSeconds } = render(track);
  const temporary = join(OUTPUT, `.${track.slug}.wav`);
  const destination = join(OUTPUT, `${track.title}.mp3`);
  writeFileSync(temporary, wav(pcm));
  const encoded = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', temporary,
    '-codec:a', 'libmp3lame', '-b:a', '192k', '-metadata', `title=${track.title}`, destination], { stdio: 'inherit' });
  rmSync(temporary, { force: true });
  if (encoded.status !== 0) throw new Error(`FFmpeg failed while encoding ${track.title}.`);
  console.log(`${track.title}: ${track.bpm} BPM, ${track.bars} bars, ${totalSeconds.toFixed(2)} seconds`);
}

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
  },
  {
    slug: 'neon-drift-clear', title: 'Neon Drift Clear', bpm: 128, bars: 4, root: 50,
    progression: [0, 5, 7, 12],
    melody: [12, 14, 15, 19, 17, 19, 22, 24, 19, 22, 24, 27, 24, 27, 31, 36],
    arp: [0, 7, 12, 15, 19, 24, 19, 15], leadDuty: 0.25, swing: 0, energy: 0.9, seed: 41, fanfare: true
  },
  {
    slug: 'capsule-rush-clear', title: 'Capsule Rush Clear', bpm: 168, bars: 4, root: 45,
    progression: [0, 3, 7, 12],
    melody: [12, 15, 19, 24, 15, 19, 22, 27, 19, 22, 24, 31, 24, 27, 31, 36],
    arp: [0, 7, 12, 15, 19, 24, 19, 15], leadDuty: 0.125, swing: 0, energy: 1.08, seed: 83, fanfare: true
  },
  {
    slug: 'granite-promenade', title: 'Granite Promenade', bpm: 132, bars: 18, root: 45,
    progression: [0, 0, 5, 3, 0, 8, 7, 0, 5, 3, 10, 7, 0, 5, 8, 7, 3, 0],
    melody: [12, null, 15, 14, 12, null, 19, 17, 15, null, 14, 11, 12, null, 7, 11,
      12, 15, 17, null, 20, 19, 15, 14, 12, null, 11, 14, 15, 12, 7, null],
    arp: [0, 7, 12, 15, 12, 7, 3, 7], leadDuty: 0.25, swing: 0.045, energy: 0.78, seed: 109
  },
  {
    slug: 'snowbound-sabre', title: 'Snowbound Sabre', bpm: 176, bars: 20, root: 40,
    progression: [0, 7, 3, 8, 0, 10, 7, 5, 0, 3, 8, 7, 5, 10, 7, 0, 8, 5, 7, 0],
    melody: [12, 13, 16, 19, 16, 13, 12, 8, 12, 16, 19, 20, 19, 16, 13, 11,
      24, 23, 20, 19, 16, 19, 20, 23, 19, 16, 13, 16, 19, 13, 11, 8],
    arp: [0, 12, 7, 15, 3, 12, 10, 19], leadDuty: 0.125, swing: 0, energy: 1.08, seed: 127
  },
  {
    slug: 'granite-promenade-clear', title: 'Granite Promenade Clear', bpm: 132, bars: 4, root: 45,
    progression: [0, 5, 7, 12],
    melody: [12, 15, 14, 19, 15, 19, 20, 24, 19, 23, 24, 27, 24, 27, 31, 36],
    arp: [0, 7, 12, 15, 19, 24, 19, 15], leadDuty: 0.25, swing: 0, energy: 0.94, seed: 113, fanfare: true
  },
  {
    slug: 'snowbound-sabre-clear', title: 'Snowbound Sabre Clear', bpm: 176, bars: 4, root: 40,
    progression: [0, 3, 8, 12],
    melody: [12, 16, 19, 24, 16, 20, 23, 28, 19, 23, 24, 31, 24, 28, 31, 36],
    arp: [0, 12, 7, 15, 19, 24, 19, 12], leadDuty: 0.125, swing: 0, energy: 1.12, seed: 131, fanfare: true
  },
  {
    slug: 'prismatic-descent', title: 'Prismatic Descent', bpm: 144, bars: 20, root: 43,
    progression: [0, 5, 10, 7, 0, 3, 8, 7, 0, 5, 3, 10, 8, 5, 7, 0, 3, 10, 7, 0],
    melody: [12, null, 19, 17, 15, 12, 10, null, 12, 15, 17, 22, 19, 17, 15, null,
      24, 22, 19, 17, 15, 19, 20, 17, 15, 12, 10, 12, 15, 17, 19, null],
    arp: [0, 7, 12, 19, 15, 12, 7, 3], leadDuty: 0.25, swing: 0.035, energy: 0.88, seed: 149
  },
  {
    slug: 'prismatic-descent-clear', title: 'Prismatic Descent Clear', bpm: 144, bars: 4, root: 43,
    progression: [0, 5, 10, 12],
    melody: [12, 15, 19, 22, 17, 19, 22, 24, 19, 22, 27, 31, 24, 27, 31, 36],
    arp: [0, 7, 12, 15, 19, 24, 19, 12], leadDuty: 0.25, swing: 0, energy: 1.04, seed: 151, fanfare: true
  },
  {
    slug: 'prismatic-descent-combo', title: 'Prismatic Descent Combo', bpm: 144, bars: 1, root: 43,
    progression: [7], melody: [12, 15, 19, 22, 19, 22, 24, 27],
    arp: [0, 7, 12, 19, 15, 19, 24, 27], leadDuty: 0.25, swing: 0, energy: 1.02, seed: 153, combo: true
  },
  {
    slug: 'prismatic-descent-reset', title: 'Prismatic Descent Reset', bpm: 144, bars: 1, root: 43,
    progression: [0], melody: [], arp: [], leadDuty: 0.25, swing: 0, energy: 1, seed: 157, reset: true
  },
  {
    slug:'glacial-vault',title:'Glacial Vault',bpm:116,bars:20,root:38,
    progression:[0,5,2,7,0,8,5,3,0,10,7,5,2,8,7,0,5,3,10,0],
    melody:[12,null,19,null,17,14,12,null,24,null,22,19,17,null,14,10,12,17,19,null,22,19,17,14,12,null,10,14,17,null,19,null],
    arp:[0,12,7,19,5,12,10,17],leadDuty:.125,swing:.06,energy:.66,seed:173
  },
  {
    slug:'glacial-vault-clear',title:'Glacial Vault Clear',bpm:116,bars:4,root:38,
    progression:[0,5,10,12],melody:[12,17,19,24,17,22,24,29,19,24,29,31,24,29,31,36],
    arp:[0,7,12,19,24,19,12,7],leadDuty:.125,swing:0,energy:.92,seed:179,fanfare:true
  },
  {slug:'glacial-vault-shot',title:'Glacial Vault Shot',bpm:116,bars:1,root:38,progression:[0],melody:[],arp:[],leadDuty:.125,swing:0,energy:1,seed:181,canopyEffect:'shot'},
  {slug:'glacial-vault-triple',title:'Glacial Vault Triple',bpm:116,bars:1,root:38,progression:[0],melody:[],arp:[],leadDuty:.125,swing:0,energy:1,seed:191,canopyEffect:'triple'},
  {slug:'glacial-vault-reset',title:'Glacial Vault Reset',bpm:116,bars:1,root:38,progression:[0],melody:[],arp:[],leadDuty:.125,swing:0,energy:1,seed:193,canopyEffect:'reset'}
];

function envelope(position, length, attack = 0.025, release = 0.18) {
  return Math.min(1, position / attack, Math.max(0, (length - position) / release));
}

function render(track) {
  if(track.canopyEffect){
    const durations={shot:.18,triple:.52,reset:.72},totalSeconds=durations[track.canopyEffect],samples=Math.round(totalSeconds*SAMPLE_RATE),pcm=Buffer.alloc(samples*2);
    for(let sample=0;sample<samples;sample++){
      const time=sample/SAMPLE_RATE;let mix=0;
      if(track.canopyEffect==='shot')mix=pulse(time*(1250-520*time/totalSeconds),.12)*Math.exp(-time*22)*.55+noise(sample,track.seed)*Math.exp(-time*35)*.32;
      if(track.canopyEffect==='triple'){const step=Math.min(2,Math.floor(time/.14)),local=time-step*.14;mix=pulse(time*midi([74,79,86][step]),.18)*Math.exp(-Math.max(0,local)*15)*.42+triangle(time*midi([62,67,74][step]))*Math.exp(-Math.max(0,local)*12)*.2}
      if(track.canopyEffect==='reset'){const fall=Math.min(1,time/.6),frequency=330-230*fall;mix=(pulse(time*frequency,.4)*.3+pulse(time*frequency*Math.pow(2,-5/12),.22)*.34)*Math.exp(-time*3.6)+noise(sample,track.seed)*Math.exp(-time*8)*.2}
      const fade=Math.min(1,time/.004,(totalSeconds-time)/.025);pcm.writeInt16LE(Math.round(clamp(mix*Math.max(0,fade))*32767),sample*2);
    }
    return{pcm,totalSeconds};
  }
  if(track.reset){
    const totalSeconds=.7,samples=Math.round(totalSeconds*SAMPLE_RATE),pcm=Buffer.alloc(samples*2);
    for(let sample=0;sample<samples;sample++){
      const time=sample/SAMPLE_RATE,fall=Math.min(1,time/.55),decay=Math.exp(-time*3.8);
      const upper=390-205*fall,lower=upper*Math.pow(2,-6/12);
      const sour=pulse(time*upper,.3)*.34+pulse(time*lower,.47)*.31;
      const wobble=triangle(time*(7+5*fall))*.12;
      const scrape=noise(sample,track.seed)*Math.exp(-time*7)*.24;
      const drop=time>.43?Math.sin(2*Math.PI*68*(time-.43))*Math.exp(-(time-.43)*11)*.3:0;
      const fade=Math.min(1,time/.006,(totalSeconds-time)/.045);
      pcm.writeInt16LE(Math.round(clamp((sour*(1+wobble)*decay+scrape-drop)*Math.max(0,fade))*32767),sample*2);
    }
    return{pcm,totalSeconds};
  }
  if(track.combo){
    const totalSeconds=.48,samples=Math.round(totalSeconds*SAMPLE_RATE),pcm=Buffer.alloc(samples*2);
    for(let sample=0;sample<samples;sample++){
      const time=sample/SAMPLE_RATE,decay=Math.exp(-time*8.5),crack=Math.exp(-time*24);
      const sweepFrequency=1500-1050*Math.min(1,time/.34),sweep=pulse(time*sweepFrequency,.18)*decay;
      const grit=noise(sample,track.seed)*crack;
      const thump=Math.sin(2*Math.PI*(92-34*Math.min(1,time/.3))*time)*Math.exp(-time*12);
      const second=time>.19?Math.exp(-(time-.19)*30):0;
      const accent=second*(noise(sample,track.seed+17)*.65+pulse(time*880,.12)*.35);
      const fade=Math.min(1,time/.004,(totalSeconds-time)/.025);
      pcm.writeInt16LE(Math.round(clamp((sweep*.42+grit*.48+thump*.32+accent*.3)*Math.max(0,fade))*32767),sample*2);
    }
    return{pcm,totalSeconds};
  }
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

    if (track.fanfare && time >= totalSeconds - beatSeconds) {
      const finalPosition = time - (totalSeconds - beatSeconds);
      const finalPhase = time * midi(track.root + 48);
      mix += pulse(finalPhase, track.leadDuty) * envelope(finalPosition, beatSeconds, 0.012, 0.32) * 0.16;
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

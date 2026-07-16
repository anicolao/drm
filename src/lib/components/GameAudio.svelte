<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { BottleState } from '$lib/game/pill-bottle';
  import chill from '../../../audio/05. Chill.mp3?url';
  import chillClear from '../../../audio/06. Chill Clear.mp3?url';
  import fever from '../../../audio/03. Fever.mp3?url';
  import feverClear from '../../../audio/04. Fever Clear.mp3?url';
  import rainCue from '../../../audio/12. Combo Fanfare 1.mp3?url';

  export let state: BottleState | undefined;
  export let enabled = false;
  export let rainSignal = 0;

  let music: HTMLAudioElement | undefined;
  let clear: HTMLAudioElement | undefined;
  let playingLevel: number | undefined;
  let observedPhase: BottleState['phase'] | undefined;
  let observedRainSignal = 0;
  let rain: HTMLAudioElement | undefined;
  let pendingRain = false;
  let needsActivation = false;
  let muted = false;

  const tracks = (level: number) => level % 2 === 0
    ? { music: chill, clear: chillClear }
    : { music: fever, clear: feverClear };

  function stop(audio: HTMLAudioElement | undefined) {
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }

  async function play(audio: HTMLAudioElement) {
    try {
      await audio.play();
      needsActivation = false;
      return true;
    } catch {
      needsActivation = true;
      return false;
    }
  }

  function startMusic(level: number) {
    if (muted) return;
    if (playingLevel === level && music && !music.paused) return;
    stop(music);
    stop(clear);
    const source = tracks(level).music;
    music = new Audio(source);
    music.loop = true;
    music.preload = 'auto';
    music.volume = .42;
    playingLevel = level;
    void play(music);
  }

  function playClear(level: number) {
    if (muted) return;
    stop(music);
    stop(clear);
    clear = new Audio(tracks(level).clear);
    clear.preload = 'auto';
    clear.volume = .55;
    void play(clear);
  }

  function playRain() {
    if (muted) return;
    stop(rain);
    rain = new Audio(rainCue);
    rain.preload = 'auto';
    rain.volume = .65;
    pendingRain = true;
    void play(rain).then((played) => { if (played) pendingRain = false; });
  }

  async function activate() {
    if (!state || !enabled || muted) return;
    if (state.phase === 'playing') startMusic(state.level);
    else if (clear) await play(clear);
    if (pendingRain && rain && await play(rain)) pendingRain = false;
  }

  function update() {
    if (!enabled || !state || muted) {
      stop(music);
      stop(clear);
      stop(rain);
      playingLevel = undefined;
      observedPhase = state?.phase;
      needsActivation = false;
      observedRainSignal = rainSignal;
      pendingRain = false;
      return;
    }
    if (rainSignal > observedRainSignal) playRain();
    observedRainSignal = rainSignal;
    if (state.phase === 'countdown' && observedPhase === 'playing') playClear(state.level);
    else if (state.phase === 'playing' && (observedPhase !== 'playing' || playingLevel !== state.level)) startMusic(state.level);
    else if (state.phase === 'lost') { stop(music); stop(clear); }
    observedPhase = state.phase;
  }

  function toggleMute() {
    muted = !muted;
    localStorage.setItem('drm-audio-muted', muted ? 'true' : 'false');
    update();
  }

  $: enabled, state, rainSignal, update();
  onMount(() => {
    muted = localStorage.getItem('drm-audio-muted') === 'true';
    update();
    const unlock = () => { if (needsActivation) void activate(); };
    const externalRain = () => { if (enabled) playRain(); };
    const externalClear = (event: Event) => { if (enabled) playClear((event as CustomEvent<number>).detail); };
    window.addEventListener('pointerdown', unlock, true);
    window.addEventListener('keydown', unlock, true);
    window.addEventListener('drm-rain', externalRain);
    window.addEventListener('drm-clear', externalClear);
    return () => {
      window.removeEventListener('pointerdown', unlock, true);
      window.removeEventListener('keydown', unlock, true);
      window.removeEventListener('drm-rain', externalRain);
      window.removeEventListener('drm-clear', externalClear);
    };
  });
  onDestroy(() => { stop(music); stop(clear); stop(rain); });
</script>

{#if enabled}
  <button class="mute-control" on:click={toggleMute} aria-label={muted ? 'Unmute game audio' : 'Mute game audio'} aria-pressed={muted}>♫ {muted ? 'SOUND OFF' : 'SOUND ON'}</button>
{/if}
{#if enabled && needsActivation && !muted}
  <button class="sound-start" on:click={activate} aria-label="Enable game audio">♪ TAP FOR SOUND</button>
{/if}

<style>
  .mute-control{position:fixed;z-index:20;top:max(.55rem,env(safe-area-inset-top));left:50%;transform:translateX(-50%);background:rgba(8,9,13,.88);border:1px solid #4a4d60;color:var(--text);font-size:.55rem;padding:.42rem .55rem;box-shadow:2px 2px 0 var(--ink);white-space:nowrap}
  .mute-control:hover{transform:translateX(-50%)}
  .sound-start{position:fixed;z-index:20;top:max(2.8rem,calc(env(safe-area-inset-top) + 2.25rem));left:50%;transform:translateX(-50%);background:var(--yellow);font-size:.65rem;padding:.55rem .75rem;white-space:nowrap}
  .sound-start:hover{transform:translateX(-50%)}
</style>

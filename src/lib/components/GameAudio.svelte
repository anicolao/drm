<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { BottleState } from '$lib/game/pill-bottle';
  import chill from '../../../audio/05. Chill.mp3?url';
  import chillClear from '../../../audio/06. Chill Clear.mp3?url';
  import fever from '../../../audio/03. Fever.mp3?url';
  import feverClear from '../../../audio/04. Fever Clear.mp3?url';

  export let state: BottleState | undefined;
  export let enabled = false;

  let music: HTMLAudioElement | undefined;
  let clear: HTMLAudioElement | undefined;
  let playingLevel: number | undefined;
  let observedPhase: BottleState['phase'] | undefined;
  let needsActivation = false;

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
    } catch {
      needsActivation = true;
    }
  }

  function startMusic(level: number) {
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
    stop(music);
    stop(clear);
    clear = new Audio(tracks(level).clear);
    clear.preload = 'auto';
    clear.volume = .55;
    void play(clear);
  }

  async function activate() {
    if (!state || !enabled) return;
    if (state.phase === 'playing') startMusic(state.level);
    else if (clear) await play(clear);
  }

  function update() {
    if (!enabled || !state) {
      stop(music);
      stop(clear);
      playingLevel = undefined;
      observedPhase = state?.phase;
      needsActivation = false;
      return;
    }
    if (state.phase === 'countdown' && observedPhase === 'playing') playClear(state.level);
    else if (state.phase === 'playing' && (observedPhase !== 'playing' || playingLevel !== state.level)) startMusic(state.level);
    else if (state.phase === 'lost') { stop(music); stop(clear); }
    observedPhase = state.phase;
  }

  $: enabled, state, update();
  onMount(() => {
    const unlock = () => { if (needsActivation) void activate(); };
    window.addEventListener('pointerdown', unlock, true);
    window.addEventListener('keydown', unlock, true);
    return () => {
      window.removeEventListener('pointerdown', unlock, true);
      window.removeEventListener('keydown', unlock, true);
    };
  });
  onDestroy(() => { stop(music); stop(clear); });
</script>

{#if enabled && needsActivation}
  <button class="sound-start" on:click={activate} aria-label="Enable game audio">♪ TAP FOR SOUND</button>
{/if}

<style>
  .sound-start{position:fixed;z-index:20;top:max(1rem,env(safe-area-inset-top));left:50%;transform:translateX(-50%);background:var(--yellow);font-size:.65rem;padding:.55rem .75rem;white-space:nowrap}
  .sound-start:hover{transform:translateX(-50%)}
</style>

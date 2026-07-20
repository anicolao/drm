<script context="module" lang="ts">
  let activeMusic: { owner: symbol; audio: HTMLAudioElement } | undefined;
</script>

<script lang="ts">
  import { browser } from '$app/environment';
  import { onDestroy, onMount } from 'svelte';

  export let enabled = false;
  export let showControls: boolean | undefined = undefined;
  export let inline = false;
  export let loopUrl: string | undefined = undefined;
  export let loopKey = '';
  export let cueUrl: string | undefined = undefined;
  export let cueSignal = 0;

  const owner = Symbol('audio-host');
  let loop: HTMLAudioElement | undefined;
  let cue: HTMLAudioElement | undefined;
  let masterMuted = false;
  let musicMuted = false;
  let effectsMuted = false;
  let musicVolume = 42;
  let effectsVolume = 62;
  let needsActivation = false;
  let settingsOpen = false;
  let playingKey = '';
  let observedCue = 0;
  let mounted = false;
  $: controlsVisible = showControls ?? enabled;

  function stop(audio: HTMLAudioElement | undefined) {
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }

  function releaseMusic() {
    stop(loop);
    if (activeMusic?.owner === owner) activeMusic = undefined;
    loop = undefined;
    playingKey = '';
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

  function claimMusic(audio: HTMLAudioElement) {
    if (activeMusic && activeMusic.owner !== owner) stop(activeMusic.audio);
    activeMusic = { owner, audio };
  }

  function saveSettings() {
    localStorage.setItem('drm-audio-muted', String(masterMuted));
    localStorage.setItem('drm-audio-settings', JSON.stringify({ musicMuted, effectsMuted, musicVolume, effectsVolume }));
  }

  function update() {
    if (!browser || !mounted) return;
    if (!enabled || masterMuted) {
      releaseMusic();
      stop(cue);
      cue = undefined;
      needsActivation = false;
      observedCue = cueSignal;
      return;
    }

    if (!musicMuted && loopUrl) {
      if (playingKey !== loopKey || !loop) {
        releaseMusic();
        loop = new Audio(loopUrl);
        loop.loop = true;
        loop.preload = 'auto';
        loop.volume = musicVolume / 100;
        playingKey = loopKey;
        claimMusic(loop);
        void play(loop);
      } else {
        loop.volume = musicVolume / 100;
      }
    } else {
      releaseMusic();
    }

    if (!effectsMuted && cueUrl && cueSignal > observedCue) {
      stop(cue);
      cue = new Audio(cueUrl);
      cue.preload = 'auto';
      cue.volume = effectsVolume / 100;
      void play(cue);
    }
    observedCue = cueSignal;
  }

  async function activate() {
    if (loop) {
      claimMusic(loop);
      await play(loop);
    }
    if (cue) await play(cue);
  }

  function toggleMaster() {
    masterMuted = !masterMuted;
    saveSettings();
    update();
  }

  function changeSettings() {
    saveSettings();
    update();
  }

  $: enabled, loopUrl, loopKey, cueUrl, cueSignal, musicMuted, effectsMuted, musicVolume, effectsVolume, update();

  onMount(() => {
    masterMuted = localStorage.getItem('drm-audio-muted') === 'true';
    try {
      const saved = JSON.parse(localStorage.getItem('drm-audio-settings') ?? '{}');
      musicMuted = saved.musicMuted === true;
      effectsMuted = saved.effectsMuted === true;
      if (Number.isFinite(saved.musicVolume)) musicVolume = Math.max(0, Math.min(100, saved.musicVolume));
      if (Number.isFinite(saved.effectsVolume)) effectsVolume = Math.max(0, Math.min(100, saved.effectsVolume));
    } catch {
      // Ignore obsolete or damaged local preferences.
    }
    mounted = true;
    update();
    const unlock = () => { if (needsActivation) void activate(); };
    window.addEventListener('pointerdown', unlock, true);
    window.addEventListener('keydown', unlock, true);
    return () => {
      window.removeEventListener('pointerdown', unlock, true);
      window.removeEventListener('keydown', unlock, true);
    };
  });

  onDestroy(() => {
    releaseMusic();
    stop(cue);
  });
</script>

{#if controlsVisible}
  <div class="audio-controls" class:inline>
    <button class="mute" aria-label={masterMuted ? 'Unmute game audio' : 'Mute game audio'} aria-pressed={masterMuted} on:click={toggleMaster}>♫ <span>{masterMuted ? 'SOUND OFF' : 'SOUND ON'}</span></button>
    <button class="settings-toggle" aria-label="Audio settings" aria-expanded={settingsOpen} on:click={() => settingsOpen = !settingsOpen}>MIX</button>
    {#if enabled && needsActivation && !masterMuted}<button class="start" aria-label="Enable game audio" on:click={activate}>♪ <span>START</span></button>{/if}
    {#if settingsOpen}
      <section class="mixer" aria-label="Audio settings">
        <div><strong>MUSIC</strong><button aria-label={musicMuted ? 'Unmute music' : 'Mute music'} aria-pressed={musicMuted} on:click={() => { musicMuted = !musicMuted; changeSettings(); }}>{musicMuted ? 'OFF' : 'ON'}</button></div>
        <label>Music volume <input aria-label="Music volume" type="range" min="0" max="100" bind:value={musicVolume} on:input={changeSettings}></label>
        <div><strong>EFFECTS</strong><button aria-label={effectsMuted ? 'Unmute effects' : 'Mute effects'} aria-pressed={effectsMuted} on:click={() => { effectsMuted = !effectsMuted; changeSettings(); }}>{effectsMuted ? 'OFF' : 'ON'}</button></div>
        <label>Effects volume <input aria-label="Effects volume" type="range" min="0" max="100" bind:value={effectsVolume} on:input={changeSettings}></label>
      </section>
    {/if}
  </div>
{/if}

<style>
  .audio-controls{position:fixed;z-index:20;top:max(.55rem,env(safe-area-inset-top));right:max(.7rem,env(safe-area-inset-right));display:flex;gap:.25rem;align-items:start}.audio-controls.inline{position:relative;top:auto;right:auto;flex:none}.mute,.settings-toggle,.start{background:#08090ddd;border:1px solid #4a4d60;color:var(--text);font-size:.55rem;padding:.42rem .55rem;box-shadow:2px 2px 0 var(--ink);white-space:nowrap}.settings-toggle{color:var(--cyan)}.start{background:var(--yellow);color:var(--ink)}.mixer{position:absolute;top:2.2rem;right:0;width:min(88vw,17rem);display:grid;gap:.55rem;padding:.7rem;background:#0d0f16f2;border:1px solid #4a4d60;box-shadow:4px 4px 0 var(--ink)}.mixer div{display:flex;align-items:center;justify-content:space-between;color:var(--yellow);font-size:.6rem}.mixer button{padding:.25rem .4rem;font-size:.5rem}.mixer label{gap:.25rem;font-size:.52rem}.mixer input{width:100%;accent-color:var(--cyan)}
  @media(max-width:600px){.audio-controls .mute span,.audio-controls .start span{display:none}.audio-controls .mute,.audio-controls .settings-toggle,.audio-controls .start{min-width:2rem;padding:.42rem .4rem}}
</style>

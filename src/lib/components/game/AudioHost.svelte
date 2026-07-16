<script lang="ts">
  import{browser}from'$app/environment';import{onDestroy,onMount}from'svelte';
  export let enabled=false;export let loopUrl:string|undefined=undefined;export let loopKey='';export let cueUrl:string|undefined=undefined;export let cueSignal=0;
  let loop:HTMLAudioElement|undefined,cue:HTMLAudioElement|undefined,muted=false,needsActivation=false,playingKey='',observedCue=0;
  function stop(audio:HTMLAudioElement|undefined){if(!audio)return;audio.pause();audio.currentTime=0}
  async function play(audio:HTMLAudioElement){try{await audio.play();needsActivation=false;return true}catch{needsActivation=true;return false}}
  function update(){
    if(!browser||!enabled||muted){stop(loop);stop(cue);loop=cue=undefined;playingKey='';needsActivation=false;observedCue=cueSignal;return}
    if(loopUrl&&playingKey!==loopKey){stop(loop);loop=new Audio(loopUrl);loop.loop=true;loop.preload='auto';loop.volume=.42;playingKey=loopKey;void play(loop)}
    else if(!loopUrl){stop(loop);loop=undefined;playingKey=''}
    if(cueUrl&&cueSignal>observedCue){stop(cue);cue=new Audio(cueUrl);cue.preload='auto';cue.volume=.62;void play(cue)}
    observedCue=cueSignal;
  }
  async function activate(){if(loop)await play(loop);if(cue)await play(cue)}
  function toggle(){muted=!muted;localStorage.setItem('drm-audio-muted',String(muted));update()}
  $: enabled,loopUrl,loopKey,cueUrl,cueSignal,update();
  onMount(()=>{muted=localStorage.getItem('drm-audio-muted')==='true';update();const unlock=()=>{if(needsActivation)void activate()};window.addEventListener('pointerdown',unlock,true);window.addEventListener('keydown',unlock,true);return()=>{window.removeEventListener('pointerdown',unlock,true);window.removeEventListener('keydown',unlock,true)}});onDestroy(()=>{stop(loop);stop(cue)});
</script>
{#if enabled}<button class="mute" aria-label={muted?'Unmute game audio':'Mute game audio'} aria-pressed={muted} on:click={toggle}>♫ {muted?'SOUND OFF':'SOUND ON'}</button>{/if}
{#if enabled&&needsActivation&&!muted}<button class="start" aria-label="Enable game audio" on:click={activate}>♪ TAP FOR SOUND</button>{/if}
<style>.mute,.start{position:fixed;z-index:20;top:max(.55rem,env(safe-area-inset-top));left:50%;transform:translateX(-50%);background:#08090ddd;border:1px solid #4a4d60;color:var(--text);font-size:.55rem;padding:.42rem .55rem;box-shadow:2px 2px 0 var(--ink);white-space:nowrap}.start{top:max(2.8rem,calc(env(safe-area-inset-top) + 2.25rem));background:var(--yellow);color:var(--ink);font-size:.65rem}.mute:hover,.start:hover{transform:translateX(-50%)}</style>

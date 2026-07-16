<script lang="ts">
 import{browser}from'$app/environment';import{onDestroy,onMount}from'svelte';import granite from '../../../audio/generated/Granite Promenade.mp3?url';import sabre from '../../../audio/generated/Snowbound Sabre.mp3?url';
 export let enabled=false;export let level=0;let audio:HTMLAudioElement|undefined;let muted=false;let needsActivation=false;
 function stop(){audio?.pause();audio=undefined}async function begin(){stop();if(!browser||!enabled||muted)return;audio=new Audio(level%2?sabre:granite);audio.loop=true;audio.volume=.42;try{await audio.play();needsActivation=false}catch{needsActivation=true}}function update(){void begin()}function toggle(){muted=!muted;localStorage.setItem('drm-audio-muted',String(muted));update()}
 $: enabled,level,update();
 onMount(()=>{muted=localStorage.getItem('drm-audio-muted')==='true';update();const unlock=()=>{if(needsActivation)void begin()};window.addEventListener('pointerdown',unlock,true);window.addEventListener('keydown',unlock,true);return()=>{window.removeEventListener('pointerdown',unlock,true);window.removeEventListener('keydown',unlock,true)}});onDestroy(stop);
</script>
{#if enabled}<button class="mute" aria-label={muted?'Unmute game audio':'Mute game audio'} on:click={toggle}>♫ {muted?'SOUND OFF':'SOUND ON'}</button>{/if}
{#if enabled&&needsActivation&&!muted}<button class="start" aria-label="Enable game audio" on:click={begin}>♪ TAP FOR SOUND</button>{/if}
<style>.mute,.start{position:fixed;z-index:20;top:max(.55rem,env(safe-area-inset-top));left:50%;transform:translateX(-50%);background:#08090ddd;border:1px solid #4a4d60;color:var(--text);font-size:.55rem;padding:.42rem .55rem;box-shadow:2px 2px 0 var(--ink)}.start{top:2.8rem;background:var(--yellow);color:var(--ink)}.mute:hover,.start:hover{transform:translateX(-50%)}</style>

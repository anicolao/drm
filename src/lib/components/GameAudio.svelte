<script lang="ts">
  import{onMount}from'svelte';import AudioHost from'$lib/components/game/AudioHost.svelte';import type{BottleState}from'$lib/game/pill-bottle';
  import chill from '../../../audio/05. Chill.mp3?url';import chillClear from '../../../audio/06. Chill Clear.mp3?url';import fever from '../../../audio/03. Fever.mp3?url';import feverClear from '../../../audio/04. Fever Clear.mp3?url';import rain from '../../../audio/12. Combo Fanfare 1.mp3?url';
  export let state:BottleState|undefined;export let enabled=false;export let rainSignal=0;
  let observedPhase:BottleState['phase']|undefined,observedRain=0,cueSignal=0,cueUrl:string|undefined;
  const tracks=(level:number)=>level%2?{music:fever,clear:feverClear}:{music:chill,clear:chillClear};
  $: loopUrl=state?.phase==='playing'?tracks(state.level).music:undefined;
  $: loopKey=state?`pill:${state.level}`:'';
  $:{if(state){if(rainSignal>observedRain){cueUrl=rain;cueSignal++}else if(state.phase==='countdown'&&observedPhase==='playing'){cueUrl=tracks(state.level).clear;cueSignal++}observedRain=rainSignal;observedPhase=state.phase}}
  onMount(()=>{const rainCue=()=>{cueUrl=rain;cueSignal++};const clearCue=(event:Event)=>{cueUrl=tracks((event as CustomEvent<number>).detail).clear;cueSignal++};window.addEventListener('drm-rain',rainCue);window.addEventListener('drm-clear',clearCue);return()=>{window.removeEventListener('drm-rain',rainCue);window.removeEventListener('drm-clear',clearCue)}});
</script>
<AudioHost {enabled} {loopUrl} {loopKey} {cueUrl} {cueSignal}/>

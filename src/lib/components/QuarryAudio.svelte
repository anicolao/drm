<script lang="ts">
  import AudioHost from '$lib/components/game/AudioHost.svelte';
  import music from '../../../audio/generated/Prismatic Descent.mp3?url';
  import clear from '../../../audio/generated/Prismatic Descent Clear.mp3?url';
  import combo from '../../../audio/generated/Prismatic Descent Combo.mp3?url';
  export let enabled=false;
  export let phase:'playing'|'cleared'='playing';
  export let cascadeSignal=0;
  let observed:'playing'|'cleared'=phase,observedCascade=cascadeSignal,cueSignal=0,cueUrl=clear;
  $: loopUrl=phase==='playing'?music:undefined;
  $: if(cascadeSignal>observedCascade){cueUrl=combo;cueSignal++;observedCascade=cascadeSignal}
  $: if(phase!==observed){if(phase==='cleared'){cueUrl=clear;cueSignal++}observed=phase}
</script>
<AudioHost {enabled} {loopUrl} loopKey="quarry-match" {cueUrl} {cueSignal}/>

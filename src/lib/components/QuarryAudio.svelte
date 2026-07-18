<script lang="ts">
  import AudioHost from '$lib/components/game/AudioHost.svelte';
  import music from '../../../audio/generated/Prismatic Descent.mp3?url';
  import clear from '../../../audio/generated/Prismatic Descent Clear.mp3?url';
  export let enabled=false;
  export let phase:'playing'|'cleared'='playing';
  let observed:'playing'|'cleared'=phase,cueSignal=0;
  $: loopUrl=phase==='playing'?music:undefined;
  $: if(phase!==observed){if(phase==='cleared')cueSignal++;observed=phase}
</script>
<AudioHost {enabled} {loopUrl} loopKey="quarry-match" cueUrl={clear} {cueSignal}/>

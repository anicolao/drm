<script lang="ts">
  import AudioHost from '$lib/components/game/AudioHost.svelte';
  import music from '../../../audio/generated/Glacial Vault.mp3?url';
  import clear from '../../../audio/generated/Glacial Vault Clear.mp3?url';
  import shot from '../../../audio/generated/Glacial Vault Shot.mp3?url';
  import triple from '../../../audio/generated/Glacial Vault Triple.mp3?url';
  import reset from '../../../audio/generated/Glacial Vault Reset.mp3?url';
  export let enabled=false;export let phase:'playing'|'cleared'='playing';export let shotSignal=0;export let tripleSignal=0;export let resetSignal=0;
  let observedPhase=phase,observedShot=shotSignal,observedTriple=tripleSignal,observedReset=resetSignal,cueSignal=0,cueUrl=shot;
  $: loopUrl=phase==='playing'?music:undefined;
  $: if(shotSignal>observedShot){cueUrl=shot;cueSignal++;observedShot=shotSignal}
  $: if(tripleSignal>observedTriple){cueUrl=triple;cueSignal++;observedTriple=tripleSignal}
  $: if(resetSignal>observedReset){cueUrl=reset;cueSignal++;observedReset=resetSignal;observedShot=shotSignal;observedTriple=tripleSignal}
  $: if(phase!==observedPhase){if(phase==='cleared'){cueUrl=clear;cueSignal++}observedPhase=phase}
</script>
<AudioHost {enabled} {loopUrl} loopKey="crystal-canopy" {cueUrl} {cueSignal}/>

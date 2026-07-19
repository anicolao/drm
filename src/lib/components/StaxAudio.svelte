<script lang="ts">
 import AudioHost from '$lib/components/game/AudioHost.svelte';
 import music from '../../../audio/generated/Ivory Avalanche.mp3?url';import clear from '../../../audio/generated/Ivory Avalanche Clear.mp3?url';import caught from '../../../audio/generated/Ivory Avalanche Catch.mp3?url';import place from '../../../audio/generated/Ivory Avalanche Place.mp3?url';import thrown from '../../../audio/generated/Ivory Avalanche Throw.mp3?url';import chain from '../../../audio/generated/Ivory Avalanche Chain.mp3?url';import miss from '../../../audio/generated/Ivory Avalanche Miss.mp3?url';import failure from '../../../audio/generated/Ivory Avalanche Failure.mp3?url';import type{StaxPhase}from'$lib/game/stax';
 export let enabled=false;export let phase:StaxPhase='countdown';export let survived=0;export let placements=0;export let chains=0;export let misses=0;export let returns=0;
 let oldPhase=phase,oldSurvived=survived,oldPlacements=placements,oldChains=chains,oldMisses=misses,oldReturns=returns,cueSignal=0,cueUrl=caught;
 $: loopUrl=phase==='playing'?music:undefined;
 $: if(chains>oldChains){cueUrl=chain;cueSignal++;oldChains=chains}else if(placements>oldPlacements){cueUrl=place;cueSignal++;oldPlacements=placements}
 $: if(misses>oldMisses){cueUrl=miss;cueSignal++;oldMisses=misses}else if(survived>oldSurvived){cueUrl=caught;cueSignal++;oldSurvived=survived}
 $: if(returns>oldReturns){cueUrl=thrown;cueSignal++;oldReturns=returns}
 $: if(phase!==oldPhase){if(phase==='cleared'){cueUrl=clear;cueSignal++}else if(phase==='lost'){cueUrl=failure;cueSignal++}oldPhase=phase}
</script>
<AudioHost {enabled} {loopUrl} loopKey="stax" {cueUrl} {cueSignal}/>

<script lang="ts">
  import AudioHost from '$lib/components/game/AudioHost.svelte';
  import granite from '../../../audio/generated/Granite Promenade.mp3?url';
  import sabre from '../../../audio/generated/Snowbound Sabre.mp3?url';
  export let enabled=false;export let level=0;
  $: loopUrl=level%2?sabre:granite;
</script>
<AudioHost {enabled} {loopUrl} loopKey={`tetris:${level}`}/>

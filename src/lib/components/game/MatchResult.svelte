<script lang="ts">
  import {onMount} from 'svelte';
  import LevelPicker from './LevelPicker.svelte';
  export let title='GAME OVER';export let action='PLAY AGAIN';export let ready=0;export let total=0;export let disabled=false;export let interactive=true;
  export let level=0;export let changeLevel:(level:number)=>void=()=>{};
  export let activate:()=>void=()=>{};
  onMount(()=>{const key=(event:KeyboardEvent)=>{if(!disabled&&event.key.toLowerCase()==='a'&&!event.repeat){event.preventDefault();activate()}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)});
</script>
<div class="match-result" role="status" aria-live="polite">
  <h1>{title}</h1><slot/>
  {#if interactive}<LevelPicker {level} disabled={disabled} change={changeLevel}/>{/if}
  {#if interactive}<button on:click={activate} {disabled}>{action}</button>{/if}
  {#if total>0}<small>{ready}/{total} ready</small>{/if}
</div>
<style>.match-result{position:fixed;inset:0;z-index:20;background:rgba(8,9,13,.93);display:grid;place-content:center;justify-items:center;text-align:center;gap:1rem;padding:1rem}.match-result h1{margin:0;font-size:clamp(2rem,7vw,5rem);color:var(--yellow)}.match-result>button{font-size:1rem}.match-result small{color:var(--muted)}</style>

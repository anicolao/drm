<script lang="ts">
  export let title='GAME OVER';export let action='PLAY AGAIN';export let ready=0;export let total=0;export let disabled=false;export let interactive=true;
  export let activate:()=>void=()=>{};
</script>
<div class="match-result" role="status" aria-live="polite">
  <h1>{title}</h1><slot/>
  {#if interactive}<button on:click={activate} {disabled}>{action}</button>{/if}
  {#if total>0}<small>{ready}/{total} ready</small>{/if}
</div>
<style>.match-result{position:fixed;inset:0;z-index:20;background:rgba(8,9,13,.93);display:grid;place-content:center;justify-items:center;text-align:center;gap:1rem;padding:1rem}.match-result h1{margin:0;font-size:clamp(2rem,7vw,5rem);color:var(--yellow)}.match-result button{font-size:1rem}.match-result small{color:var(--muted)}</style>

<script lang="ts">
  export let level=0;
  export let disabled=false;
  export let change:(level:number)=>void=()=>{};
  const clamp=(value:number)=>Math.max(0,Math.min(20,value));
  function select(value:number){const next=clamp(value);level=next;change(next)}
  function keydown(event:KeyboardEvent){
    if(disabled)return;
    if(event.key!=='ArrowUp'&&event.key!=='ArrowDown')return;
    event.preventDefault();select(level+(event.key==='ArrowUp'?1:-1));
  }
</script>
<svelte:window on:keydown={keydown}/>
<div class="level-picker" aria-label="Starting level" role="group">
  <span>LEVEL</span>
  <button aria-label="Decrease level" disabled={disabled||level===0} on:click={()=>select(level-1)}>▼</button>
  <output aria-live="polite">{level}</output>
  <button aria-label="Increase level" disabled={disabled||level===20} on:click={()=>select(level+1)}>▲</button>
</div>
<style>
  .level-picker{display:grid;grid-template-columns:auto auto 3ch auto;align-items:center;justify-content:center;gap:.55rem;color:var(--muted);font-size:.65rem}
  button{padding:.45rem .6rem;min-width:2.25rem}output{color:var(--yellow);font-size:1.1rem;text-align:center;font-weight:bold}
</style>

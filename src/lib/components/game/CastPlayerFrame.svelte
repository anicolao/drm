<script lang="ts">
  export let name='Player';export let lost=false;export let lag:number|undefined=undefined;export let hashMatches=true;
</script>
<article class:lost><div class="player-heading"><h2>{name}</h2>{#if lag!==undefined}<span class="behind">BEHIND · ~{lag}t</span>{/if}</div><slot/>{#if !hashMatches}<p class="sync-error" role="alert">Replay hash mismatch</p>{/if}</article>
<style>article{text-align:center;transition:opacity .2s}article.lost{opacity:.45}.player-heading{display:flex;align-items:center;justify-content:center;gap:.6rem}.player-heading h2{margin:.25rem}.behind{display:inline-block;border:1px solid var(--pink);padding:.25rem .4rem;font-size:.55rem;color:var(--pink)}.sync-error{color:var(--pink);font-weight:bold}</style>

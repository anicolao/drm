<script lang="ts">export let opponents:unknown[]=[];export let label='Opponents';</script>
{#if opponents.length}<aside class="opponents" aria-label={label}>{#each opponents as opponent}<div class="opponent"><slot {opponent}/></div>{/each}</aside>{/if}
<style>
  .opponents{position:absolute;z-index:4;left:max(.55rem,env(safe-area-inset-left));top:max(3rem,calc(env(safe-area-inset-top) + 2.5rem));display:flex;gap:.45rem;align-items:start;max-width:38vw;overflow:hidden}
  .opponent{display:grid;justify-items:center;gap:.15rem;width:min(10vw,90px,calc((100dvh - min(58dvh,230px) - 5rem)/2.05));min-width:0;color:var(--muted);font-size:.42rem;text-align:center;text-transform:uppercase;overflow:hidden}
  .opponent :global(.tetris-shell),.opponent :global(.bottle-shell){width:100%;max-width:100%}
  .opponent :global(strong),.opponent :global(small),.opponent :global(span){max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  @media(orientation:portrait){.opponents{left:auto;right:max(.45rem,env(safe-area-inset-right));top:max(7rem,calc(env(safe-area-inset-top) + 6.5rem));display:grid;gap:.35rem;max-width:22vw;max-height:48dvh}.opponent{width:min(18vw,76px)}}
</style>

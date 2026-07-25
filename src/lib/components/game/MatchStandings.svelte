<script lang="ts">
  export let entries:Array<{playerId:string;name:string;score:number}>=[];
  export let title='RACE TO THREE';
  export let target=3;
</script>
<section class="match-standings" aria-label={title}>
  <h2>{title}</h2>
  <ol>{#each entries as entry,index}<li><span class="rank">{index+1}</span><strong>{entry.name}</strong><span class="win-track" aria-label={`${entry.score} of ${target} wins`}>{#each Array(target) as _,win}<span class:earned={win<entry.score} aria-hidden="true">{win<entry.score?'★':'☆'}</span>{/each}</span></li>{/each}</ol>
</section>
<style>
  .match-standings{width:min(88vw,28rem);text-align:center}.match-standings h2{margin:0 0 .55rem;color:var(--muted);font-size:.7rem;letter-spacing:.16em}ol{list-style:none;margin:0;padding:0;display:grid;gap:.35rem}li{display:grid;grid-template-columns:2rem 1fr auto;align-items:center;gap:.6rem;padding:.55rem .75rem;border:1px solid #3b3f50;background:#13151e;text-align:left;text-transform:uppercase}.rank{color:var(--muted)}strong{overflow:hidden;text-overflow:ellipsis}.win-track{display:flex;gap:.18rem;color:#5a5f72;font-size:1.2rem;letter-spacing:0}.win-track .earned{color:var(--yellow);filter:drop-shadow(0 0 .25rem color-mix(in srgb,var(--yellow) 55%,transparent))}li:first-child{border-color:var(--yellow)}li:first-child .rank{color:var(--yellow)}
</style>

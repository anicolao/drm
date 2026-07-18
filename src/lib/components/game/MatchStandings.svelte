<script lang="ts">
  export let entries:Array<{playerId:string;name:string;score:number}>=[];
</script>
<section class="match-standings" aria-label="Final standings">
  <h2>FINAL STANDINGS</h2>
  <ol>{#each entries as entry,index}<li><span class="rank">{index+1}</span><strong>{entry.name}</strong><b>{entry.score}</b></li>{/each}</ol>
</section>
<style>
  .match-standings{width:min(88vw,28rem);text-align:center}.match-standings h2{margin:0 0 .55rem;color:var(--muted);font-size:.7rem;letter-spacing:.16em}ol{list-style:none;margin:0;padding:0;display:grid;gap:.35rem}li{display:grid;grid-template-columns:2rem 1fr auto;align-items:center;gap:.6rem;padding:.55rem .75rem;border:1px solid #3b3f50;background:#13151e;text-align:left;text-transform:uppercase}.rank{color:var(--muted)}strong{overflow:hidden;text-overflow:ellipsis}b{color:var(--yellow)}li:first-child{border-color:var(--yellow)}li:first-child .rank{color:var(--yellow)}
</style>

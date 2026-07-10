<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import Logo from '$lib/components/Logo.svelte';
  let ruleset: 'tetris' | 'doctor' = 'tetris';
  $: code = $page.url.searchParams.get('code') ?? 'DEMO';
</script>
<div class="shell"><nav><Logo compact /><span>HOST CONSOLE</span></nav>
  <header><div><p class="eyebrow">Room code</p><h1>{code}</h1></div><div class="links"><a class="button secondary" href={`${base}/play?code=${code}`}>Open controller</a><a class="button secondary" href={`${base}/cast?code=${code}`}>Open cast view</a></div></header>
  <main><section class="card"><p class="eyebrow">Choose rules</p><div class="modes"><button class:chosen={ruleset==='tetris'} on:click={()=>ruleset='tetris'}>▦<strong>BLOCK STACK</strong><small>Clear complete rows</small></button><button class:chosen={ruleset==='doctor'} on:click={()=>ruleset='doctor'}>●<strong>COLOR CURE</strong><small>Match four colors</small></button></div></section>
  <section class="card roster"><p class="eyebrow">Players · 2/4</p><div><span class="avatar cyan">A</span><strong>Alex</strong><small>HOST · READY</small></div><div><span class="avatar pink">J</span><strong>Jo</strong><small>READY</small></div><div class="empty">+ Waiting for player</div><div class="empty">+ Waiting for player</div><a class="button" href={`${base}/cast?code=${code}`}>Start match</a></section></main>
</div>
<style>
  nav>span{font-size:.72rem;color:var(--muted)} header{display:flex;justify-content:space-between;align-items:end;margin:3rem 0}h1{font:900 5rem/1 'Arial Black';margin:0;color:var(--yellow);letter-spacing:.08em}.links{display:flex;gap:.7rem}main{display:grid;grid-template-columns:1.1fr .9fr;gap:1.5rem}.modes{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem}.modes button{background:#141620;color:var(--text);border:2px solid #343746;min-height:220px;display:flex;flex-direction:column;gap:.5rem;font-size:3rem}.modes button strong{font-size:1rem}.modes button small{font-size:.65rem;color:var(--muted)}.modes button.chosen{border-color:var(--cyan);box-shadow:5px 5px 0 var(--cyan)}.roster>div{display:grid;grid-template-columns:42px 1fr auto;align-items:center;gap:.7rem;border-bottom:1px solid #343746;padding:.8rem 0}.avatar{width:36px;height:36px;display:grid;place-items:center;color:var(--ink);font-weight:bold}.cyan{background:var(--cyan)}.pink{background:var(--pink)}.roster small{color:var(--muted)}.empty{color:#636575}.roster .button{margin-top:1.5rem;width:100%}@media(max-width:750px){header{align-items:start;flex-direction:column;gap:1rem}.links{flex-wrap:wrap}main{grid-template-columns:1fr}.modes{grid-template-columns:1fr 1fr}.modes button{min-height:150px}}
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import Logo from '$lib/components/Logo.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { getRoom, subscribeRoomPlayers, updateRoomRuleset, type RoomPlayer } from '$lib/firebase/rooms';
  let code = ''; let ruleset: 'tetris' | 'doctor' = 'tetris'; let players: RoomPlayer[] = [];
  let loading = true; let error = '';
  let unsubscribe: () => void = () => {};
  onMount(() => { load(); return () => unsubscribe(); });
  async function load() {
    code = new URL(window.location.href).searchParams.get('code') ?? '';
    try {
      if (!code) throw new Error('A room code is required.');
      if (!firebaseConfigured) throw new Error('Firebase configuration is required.');
      const room = await getRoom(code); ruleset = room.ruleset;
      unsubscribe = subscribeRoomPlayers(room.id, (next) => { players = next; }, (cause) => { error = cause.message; });
    } catch (cause) { error = cause instanceof Error ? cause.message : String(cause); }
    finally { loading = false; }
  }
  async function choose(next: 'tetris' | 'doctor') {
    try { await updateRoomRuleset(code, next); ruleset = next; }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); }
  }
</script>
<div class="shell"><nav><Logo compact /><span>ROOM</span></nav>
{#if loading}<p class="eyebrow">Loading room…</p>
{:else if error}<section class="card error"><h1>ROOM UNAVAILABLE</h1><p role="alert">{error}</p><a class="button secondary" href={`${base}/`}>Return home</a></section>
{:else}<header><div><p class="eyebrow">Room code</p><h1>{code}</h1></div><div class="links"><a class="button secondary" href={`${base}/play?code=${code}`}>Join on another device</a><a class="button secondary" href={`${base}/cast?code=${code}`}>Open shared display</a></div></header>
<main><section class="card"><p class="eyebrow">Game configuration</p><div class="modes"><button class:chosen={ruleset==='tetris'} on:click={()=>choose('tetris')}>▦<strong>BLOCK STACK</strong><small>Tetris-style rules</small></button><button class:chosen={ruleset==='doctor'} on:click={()=>choose('doctor')}>●<strong>COLOR CURE</strong><small>Dr. Mario-style rules</small></button></div><p class="notice">Starting a match is unavailable until the deterministic engine and RTDB event sequencer are implemented.</p></section>
<section class="card roster"><p class="eyebrow">Joined players · {players.length}</p>{#each players as player}<div><span class="avatar">●</span><strong>{player.displayName}</strong><small>{player.role.toUpperCase()}</small></div>{/each}{#if players.length === 0}<p>No players have joined.</p>{/if}</section></main>{/if}
</div>
<style>nav>span{font-size:.72rem;color:var(--muted)}header{display:flex;justify-content:space-between;align-items:end;margin:3rem 0}h1{font:900 5rem/1 'Arial Black';margin:0;color:var(--yellow);letter-spacing:.08em}.links{display:flex;gap:.7rem}main{display:grid;grid-template-columns:1.1fr .9fr;gap:1.5rem}.modes{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem}.modes button{background:#141620;color:var(--text);border:2px solid #343746;min-height:180px;display:flex;flex-direction:column;gap:.5rem;font-size:3rem}.modes strong{font-size:1rem}.modes small{font-size:.65rem;color:var(--muted)}.modes .chosen{border-color:var(--cyan);box-shadow:5px 5px 0 var(--cyan)}.notice{color:var(--muted);font-size:.75rem;line-height:1.6;margin-top:1.5rem}.roster>div{display:grid;grid-template-columns:52px 1fr auto;align-items:center;gap:.7rem;border-bottom:1px solid #343746;padding:.8rem 0}.avatar{font-size:.65rem;color:var(--cyan)}.roster small{color:var(--muted)}.error{margin-top:4rem}.error p{color:var(--pink)}@media(max-width:750px){header{align-items:start;flex-direction:column;gap:1rem}.links{flex-wrap:wrap}main{grid-template-columns:1fr}.modes{grid-template-columns:1fr}.modes button{min-height:120px}}</style>

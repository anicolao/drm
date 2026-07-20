<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import Logo from '$lib/components/Logo.svelte';
  import JoinQr from '$lib/components/JoinQr.svelte';
  import LevelPicker from '$lib/components/game/LevelPicker.svelte';
  import AudioHost from '$lib/components/game/AudioHost.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { ensureAnonymousUser, getRoom, subscribeRoomPlayers, updatePlayerLevel, updateRoomRuleset, type RoomPlayer } from '$lib/firebase/rooms';
  import { startRegisteredGame } from '$lib/runtime/game-registry';
  let code = ''; let ruleset: 'tetris' | 'doctor' | 'quarry' | 'canopy' | 'stax' = 'tetris'; let players: RoomPlayer[] = [];
  let roomId = ''; let activeGameId = ''; let loading = true; let starting = false; let choosing = false; let error = '';
  let currentUid='';
  let joinHref = '';
  let unsubscribe: () => void = () => {};
  $: hasControllerPlayer = players.some((player) => player.role === 'player');
  onMount(() => { load(); return () => unsubscribe(); });
  async function load() {
    code = new URL(window.location.href).searchParams.get('code') ?? '';
    joinHref = new URL(`${base}/play?code=${code}`, window.location.origin).href;
    try {
      if (!code) throw new Error('A room code is required.');
      if (!firebaseConfigured) throw new Error('Firebase configuration is required.');
      const user = await ensureAnonymousUser();
      const room = await getRoom(code);currentUid=user.uid;
      if (user.uid !== room.hostUid) { await goto(`${base}/play?code=${code}`, { replaceState: true }); return; }
      roomId = room.id; ruleset = room.ruleset; activeGameId = room.activeGameId ?? '';
      unsubscribe = subscribeRoomPlayers(room.id, (next) => { players = next; }, (cause) => { error = cause.message; });
    } catch (cause) { error = cause instanceof Error ? cause.message : String(cause); }
    finally { loading = false; }
  }
  async function choose(next: 'tetris' | 'doctor' | 'quarry' | 'canopy' | 'stax') {
    choosing=true;try { await updateRoomRuleset(code, next); ruleset = next; }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); }
    finally{choosing=false;}
  }
  async function startGame(destination: 'play' | 'cast') {
    starting = true; error = '';
    try { const hostMode=destination==='play'?'player':'display';activeGameId=await startRegisteredGame(ruleset,roomId,players,hostMode);await goto(`${base}/${destination}?code=${code}`); }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); }
    finally { starting = false; }
  }
  async function chooseLevel(level:number){try{await updatePlayerLevel(roomId,level)}catch(cause){error=cause instanceof Error?cause.message:String(cause)}}
</script>
<div class="shell"><nav><Logo compact /><div class="nav-tools"><span>ROOM</span><AudioHost enabled={false} showControls inline /></div></nav>
{#if loading}<p class="eyebrow">Loading room…</p>
{:else if error}<section class="card error"><h1>ROOM UNAVAILABLE</h1><p role="alert">{error}</p><a class="button secondary" href={`${base}/`}>Return home</a></section>
{:else}<header><div><p class="eyebrow">Room code</p><h1>{code}</h1></div><div class="join-tools">{#if joinHref}<JoinQr href={joinHref} label="Scan with a controller" />{/if}<div class="links"><a class="button secondary" href={`${base}/play?code=${code}`}>Join on another device</a><a class="button secondary" href={`${base}/cast?code=${code}`}>Open shared display</a></div></div></header>
<main><section class="card"><p class="eyebrow">Game configuration</p><div class="modes"><button disabled={Boolean(activeGameId)||choosing} class:chosen={ruleset==='tetris'} on:click={()=>choose('tetris')}>▦<strong>BLOCK STACK</strong><small>Tetris-style rules</small></button><button disabled={Boolean(activeGameId)||choosing} class:chosen={ruleset==='doctor'} on:click={()=>choose('doctor')}>●<strong>COLOR CURE</strong><small>Dr. Mario-style rules</small></button><button disabled={Boolean(activeGameId)||choosing} class:chosen={ruleset==='quarry'} on:click={()=>choose('quarry')}>◆<strong>QUARRY MATCH</strong><small>Cascading puzzle race</small></button><button disabled={Boolean(activeGameId)||choosing} class:chosen={ruleset==='canopy'} on:click={()=>choose('canopy')}>▼<strong>CRYSTAL CANOPY</strong><small>Ceiling-hung triple puzzle</small></button><button disabled={Boolean(activeGameId)||choosing} class:chosen={ruleset==='stax'} on:click={()=>choose('stax')}>▰<strong>STAX</strong><small>3D ramp stacking</small></button></div>{#if activeGameId}<p class="notice active" role="status">Game started · 60 ticks/second</p>{:else}<div class="starts"><button disabled={starting || choosing || players.length === 0} on:click={()=>startGame('play')}>{starting ? 'Starting…' : 'Play'}</button><button class="secondary" disabled={starting || choosing || !hasControllerPlayer} on:click={()=>startGame('cast')}>{starting ? 'Starting…' : 'I am the TV'}</button></div><p class="notice"><strong>Play</strong> uses this device as the host's controller. <strong>I am the TV</strong> keeps this device on the shared display for the other players.</p>{/if}</section>
<section class="card roster"><p class="eyebrow">Joined players · {players.length}</p>{#each players as player}<div><span class="avatar">●</span><strong>{player.displayName}</strong><small>{player.role.toUpperCase()} · LEVEL {player.level??0}</small>{#if player.uid===currentUid&&!activeGameId}<LevelPicker level={player.level??0} change={chooseLevel} activate={()=>startGame('play')}/>{/if}</div>{/each}{#if players.length === 0}<p>No players have joined.</p>{/if}</section></main>{/if}
</div>
<style>.nav-tools{display:flex;align-items:center;gap:.8rem}.nav-tools>span{font-size:.72rem;color:var(--muted)}header{display:flex;justify-content:space-between;align-items:center;gap:2rem;margin:2rem 0}h1{font:900 5rem/1 'Arial Black';margin:0;color:var(--yellow);letter-spacing:.08em}.join-tools{display:flex;align-items:center;gap:1.25rem}.links{display:grid;gap:.7rem}main{display:grid;grid-template-columns:1.1fr .9fr;gap:1.5rem}.modes{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:1.5rem}.modes button{background:#141620;color:var(--text);border:2px solid #343746;min-height:130px;display:flex;flex-direction:column;gap:.5rem;font-size:2.4rem}.modes strong{font-size:1rem}.modes small{font-size:.65rem;color:var(--muted)}.modes .chosen{border-color:var(--cyan);box-shadow:5px 5px 0 var(--cyan)}.starts{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem}.starts button{width:100%}.notice{color:var(--muted);font-size:.75rem;line-height:1.6;margin-top:1.5rem}.notice strong{color:var(--text)}.notice.active{color:var(--cyan)}.roster>div{display:grid;grid-template-columns:52px 1fr auto;align-items:center;gap:.7rem;border-bottom:1px solid #343746;padding:.8rem 0}.roster>div :global(.level-picker){grid-column:2/4}.avatar{font-size:.65rem;color:var(--cyan)}.roster small{color:var(--muted)}.error{margin-top:4rem}.error p{color:var(--pink)}@media(max-width:900px){.modes{grid-template-columns:1fr}.modes button{min-height:100px}}@media(max-width:750px){header{align-items:start;flex-direction:column;gap:1rem}.join-tools{width:100%;justify-content:space-between}.links{flex:1}.links .button{font-size:.7rem}main{grid-template-columns:1fr}.starts{grid-template-columns:1fr}}</style>

<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { createRoom, ensureAnonymousUser, roomExists } from '$lib/firebase/rooms';
  let code = '';
  let busy = false;
  let error = '';
  let authMessage = '';
  let hydrated = false;
  let playerName = '';
  let nameConfirmed = false;
  onMount(() => { playerName = localStorage.getItem('drm-player-name') ?? ''; nameConfirmed = Boolean(playerName); hydrated = true; });
  function saveName() {
    const name = playerName.trim();
    if (!name || name.length > 24) { error = 'Player name must be between 1 and 24 characters.'; return; }
    localStorage.setItem('drm-player-name', name); playerName = name; nameConfirmed = true; error = '';
  }
  const makeCode = () => {
    if (import.meta.env.VITE_E2E_ROOM_CODE) return import.meta.env.VITE_E2E_ROOM_CODE;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const values = crypto.getRandomValues(new Uint32Array(4));
    return Array.from(values, (value) => alphabet[value % alphabet.length]).join('');
  };
  async function newRoom() {
    if (!firebaseConfigured) { error = 'Firebase configuration is required.'; return; }
    busy = true; error = '';
    const roomCode = makeCode();
    try { await createRoom(roomCode, playerName); await goto(`${base}/room?code=${roomCode}`); }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); busy = false; }
  }
  async function join() {
    const roomCode = code.trim().toUpperCase(); if (!/^[A-Z]{4}$/.test(roomCode)) { error = 'Room code must be four letters.'; return; }
    busy = true; error = '';
    try { if (!firebaseConfigured) throw new Error('Firebase configuration is required.'); if (!(await roomExists(roomCode))) throw new Error('Room not found.'); await goto(`${base}/play?code=${roomCode}`); }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); busy = false; }
  }
  async function playAnonymous() {
    try { if (!firebaseConfigured) throw new Error('Firebase configuration is required.'); await ensureAnonymousUser(); authMessage = 'ANONYMOUS PLAYER READY'; }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); }
  }
</script>

<div class="shell">
  {#if hydrated && !nameConfirmed}<div class="name-gate"><form class="card" on:submit|preventDefault={saveName}><p class="eyebrow">Welcome to drm</p><h2>WHAT SHOULD PLAYERS CALL YOU?</h2><label>Player name<input aria-label="Player name" maxlength="24" autocomplete="nickname" bind:value={playerName} /></label><button>Continue</button>{#if error}<p role="alert">{error}</p>{/if}</form></div>{/if}
  <nav><Logo /><span class="status">{firebaseConfigured ? 'FIREBASE READY' : 'CONFIGURATION REQUIRED'} <i></i></span></nav>
  <main>
    <section class="hero">
      <p class="eyebrow">Two games. One block party.</p>
      <h1>DROP IN.<br /><span>DUKE IT OUT.</span></h1>
      <p class="lede">Fast falling-block battles for tablets, phones, and the biggest screen in the room.</p>
      <div class="actions"><button disabled={busy || !nameConfirmed} on:click={newRoom}>Create a room</button><a class="button secondary" href="#join">Join with code</a></div>
      <div class="auth"><button class="text" disabled={!hydrated} on:click={playAnonymous}>Play anonymously</button><button class="text" disabled title="Enabled with the production Firebase project">Sign in with Google</button></div>
      {#if authMessage}<p class="auth-message">{authMessage}</p>{/if}
      {#if error}<p role="alert">{error}</p>{/if}
    </section>
    <aside class="principles card"><p class="eyebrow">Implementation status</p><h2>ROOM COORDINATION</h2><p>Room creation and joining use Firebase. Gameplay will be exposed only after the deterministic engine and canonical event stream are implemented.</p></aside>
  </main>
  <section id="join" class="join card">
    <div><p class="eyebrow">Already invited?</p><h2>ENTER ROOM CODE</h2></div>
    <form on:submit|preventDefault={join} novalidate><input aria-label="Room code" maxlength="4" bind:value={code} placeholder="ABCD" /><button>Join game</button></form>
  </section>
</div>

<style>
  .status { color: var(--muted); font-size: .7rem; } .status i { display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--yellow); }
  .name-gate{position:fixed;inset:0;z-index:10;background:rgba(7,8,12,.9);display:grid;place-items:center;padding:1rem}.name-gate form{width:min(100%,520px);display:grid;gap:1.3rem}.name-gate h2{font-size:1.5rem}.name-gate button{width:100%}
  main { min-height: 610px; display:grid; grid-template-columns: 1.1fr .9fr; align-items:center; gap:3rem; }
  h1 { font: 900 clamp(3.4rem, 8vw, 7.5rem)/.84 'Arial Black', sans-serif; letter-spacing:-.08em; margin:.3rem 0 1.5rem; } h1 span { color:var(--cyan); }
  .lede { color:var(--muted); max-width:570px; font-size:1.05rem; line-height:1.7; }
  .actions { display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap; }
  .auth{display:flex;gap:1rem;margin-top:1rem}.auth .text{background:none;color:var(--muted);box-shadow:none;padding:.3rem;text-transform:none;font-size:.72rem}.auth .text:hover{transform:none;box-shadow:none;color:var(--text)}.auth-message{color:var(--cyan);font-size:.7rem}[role=alert]{color:var(--pink)}
  .principles{transform:rotate(1deg)}.principles h2{color:var(--cyan)}.principles p:last-child{color:var(--muted);line-height:1.7}
  .join { display:grid; grid-template-columns:1fr 1fr; align-items:center; margin-bottom:4rem; } h2 { margin:.3rem 0; } form { display:flex; gap:.7rem; } input { font-size:1.2rem; text-transform:uppercase; }
  @media(max-width:760px){ main{grid-template-columns:1fr;padding:4rem 0}.principles{display:none}.join{grid-template-columns:1fr;gap:1rem}form{flex-direction:column} }
</style>

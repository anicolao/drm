<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import Logo from '$lib/components/Logo.svelte';
  import DemoBoard from '$lib/components/DemoBoard.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { createRoom, ensureAnonymousUser, roomExists } from '$lib/firebase/rooms';
  let code = '';
  let busy = false;
  let error = '';
  let authMessage = '';
  const makeCode = () => import.meta.env.VITE_E2E_ROOM_CODE || Math.random().toString(36).slice(2, 6).toUpperCase();
  async function newRoom() {
    busy = true; error = '';
    const roomCode = makeCode();
    try { if (firebaseConfigured) await createRoom(roomCode); await goto(`${base}/room?code=${roomCode}`); }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); busy = false; }
  }
  async function join() {
    const roomCode = code.trim().toUpperCase(); if (!roomCode) return;
    busy = true; error = '';
    try { if (firebaseConfigured && !(await roomExists(roomCode))) throw new Error('Room not found.'); await goto(`${base}/play?code=${roomCode}`); }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); busy = false; }
  }
  async function playAnonymous() {
    try { if (firebaseConfigured) await ensureAnonymousUser(); authMessage = 'ANONYMOUS PLAYER READY'; }
    catch (cause) { error = cause instanceof Error ? cause.message : String(cause); }
  }
</script>

<div class="shell">
  <nav><Logo /><span class="status">{firebaseConfigured ? 'FIREBASE READY' : 'LOCAL PROTOTYPE'} <i></i></span></nav>
  <main>
    <section class="hero">
      <p class="eyebrow">Two games. One block party.</p>
      <h1>DROP IN.<br /><span>DUKE IT OUT.</span></h1>
      <p class="lede">Fast falling-block battles for tablets, phones, and the biggest screen in the room.</p>
      <div class="actions"><button disabled={busy} on:click={newRoom}>Create a room</button><a class="button secondary" href="#join">Join with code</a></div>
      <div class="auth"><button class="text" on:click={playAnonymous}>Play anonymously</button><button class="text" disabled title="Enabled with the production Firebase project">Sign in with Google</button></div>
      {#if authMessage}<p class="auth-message">{authMessage}</p>{/if}
      {#if error}<p role="alert">{error}</p>{/if}
    </section>
    <div class="boards"><DemoBoard label="P1" /><DemoBoard label="P2" variant="pink" /></div>
  </main>
  <section id="join" class="join card">
    <div><p class="eyebrow">Already invited?</p><h2>ENTER ROOM CODE</h2></div>
    <form on:submit|preventDefault={join}><input aria-label="Room code" maxlength="6" bind:value={code} placeholder="ABCD" /><button>Join game</button></form>
  </section>
</div>

<style>
  .status { color: var(--muted); font-size: .7rem; } .status i { display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--yellow); }
  main { min-height: 610px; display:grid; grid-template-columns: 1.1fr .9fr; align-items:center; gap:3rem; }
  h1 { font: 900 clamp(3.4rem, 8vw, 7.5rem)/.84 'Arial Black', sans-serif; letter-spacing:-.08em; margin:.3rem 0 1.5rem; } h1 span { color:var(--cyan); }
  .lede { color:var(--muted); max-width:570px; font-size:1.05rem; line-height:1.7; }
  .actions { display:flex; gap:1rem; margin-top:2rem; flex-wrap:wrap; }
  .auth{display:flex;gap:1rem;margin-top:1rem}.auth .text{background:none;color:var(--muted);box-shadow:none;padding:.3rem;text-transform:none;font-size:.72rem}.auth .text:hover{transform:none;box-shadow:none;color:var(--text)}.auth-message{color:var(--cyan);font-size:.7rem}[role=alert]{color:var(--pink)}
  .boards { display:flex; align-items:center; gap:1rem; transform:rotate(2deg); } .boards :global(section:first-child) { transform:translateY(-35px); }
  .join { display:grid; grid-template-columns:1fr 1fr; align-items:center; margin-bottom:4rem; } h2 { margin:.3rem 0; } form { display:flex; gap:.7rem; } input { font-size:1.2rem; text-transform:uppercase; }
  @media(max-width:760px){ main{grid-template-columns:1fr;padding:4rem 0}.boards{display:none}.join{grid-template-columns:1fr;gap:1rem}form{flex-direction:column} }
</style>

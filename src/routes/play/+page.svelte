<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { joinRoom } from '$lib/firebase/rooms';
  let code=''; let joined=false; let joining=false; let needsName=false; let playerName=''; let error='';
  onMount(async()=>{
    code=new URL(window.location.href).searchParams.get('code')?.toUpperCase()??'';
    if(!/^[A-Z]{4}$/.test(code)){error='A valid four-letter room code is required.';return;}
    if(!firebaseConfigured){error='Firebase configuration is required.';return;}
    playerName=localStorage.getItem('drm-player-name')??'';
    if(!playerName){needsName=true;return;}
    await performJoin();
  });
  async function performJoin(){
    joining=true;error='';
    try{await joinRoom(code,playerName);joined=true;needsName=false;}
    catch(cause){error=cause instanceof Error?cause.message:String(cause);}
    finally{joining=false;}
  }
  async function saveAndJoin(){
    const name=playerName.trim();
    if(!name||name.length>24){error='Player name must be between 1 and 24 characters.';return;}
    playerName=name;localStorage.setItem('drm-player-name',name);await performJoin();
  }
</script>
<div class="phone"><nav><Logo compact/><span>{code || 'NO ROOM'}</span></nav><main>
{#if needsName}<form class="card" on:submit|preventDefault={saveAndJoin}><p class="eyebrow">Joining room {code}</p><h1>WHAT SHOULD PLAYERS CALL YOU?</h1><label>Player name<input aria-label="Player name" maxlength="24" autocomplete="nickname" bind:value={playerName}/></label><button disabled={joining}>{joining?'Joining…':'Join room'}</button></form>
{:else if error}<p class="eyebrow">Unable to join</p><h1>{error}</h1>
{:else if !joined}<p class="eyebrow">Joining room…</p>
{:else}<p class="eyebrow">Joined room {code}</p><h1>WAITING FOR A GAME</h1><p>Controls will be enabled only after a canonical game event stream exists.</p>{/if}
{#if error&&needsName}<p role="alert">{error}</p>{/if}</main></div>
<style>.phone{width:min(100%,520px);margin:auto;padding:0 1rem;min-height:100vh}nav>span{font-weight:bold;color:var(--yellow)}main{text-align:center;padding-top:6rem}h1{font:900 2.2rem 'Arial Black'}main p:last-child{color:var(--muted);line-height:1.7}form{display:grid;gap:1.2rem;text-align:left}form h1{font-size:1.4rem}form button{width:100%}[role=alert]{color:var(--pink)}</style>

<script lang="ts">
  import { onMount } from 'svelte'; import Logo from '$lib/components/Logo.svelte';
  import { firebaseConfigured } from '$lib/firebase/config'; import { getRoom } from '$lib/firebase/rooms';
  let code='';let ruleset='';let loaded=false;let error='';
  onMount(async()=>{code=new URL(window.location.href).searchParams.get('code')??'';try{if(!code)throw new Error('A room code is required.');if(!firebaseConfigured)throw new Error('Firebase configuration is required.');const room=await getRoom(code);ruleset=room.ruleset;loaded=true;}catch(cause){error=cause instanceof Error?cause.message:String(cause)}});
</script>
<div class="display"><header><Logo compact/><span>{code ? `ROOM ${code}` : 'NO ROOM'}</span></header><main>{#if error}<h1>DISPLAY UNAVAILABLE</h1><p>{error}</p>{:else if !loaded}<p>Loading room…</p>{:else}<p class="eyebrow">{ruleset === 'tetris' ? 'BLOCK STACK' : 'COLOR CURE'}</p><h1>WAITING FOR A GAME</h1><p>The shared display will render only canonical state derived from the RTDB event stream.</p>{/if}</main></div>
<style>.display{min-height:100vh;padding:2rem 4vw}header{display:flex;justify-content:space-between;border-bottom:1px solid #343746;padding-bottom:1rem}main{min-height:70vh;display:grid;place-content:center;text-align:center}h1{font:900 clamp(2.5rem,7vw,6rem) 'Arial Black'}main p:last-child{color:var(--muted);max-width:42rem;line-height:1.7}</style>

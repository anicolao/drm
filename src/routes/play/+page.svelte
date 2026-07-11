<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { joinRoom } from '$lib/firebase/rooms';
  let code=''; let joined=false; let error='';
  onMount(async()=>{code=new URL(window.location.href).searchParams.get('code')??'';try{if(!code)throw new Error('A room code is required.');if(!firebaseConfigured)throw new Error('Firebase configuration is required.');const name=localStorage.getItem('drm-player-name')??'';if(!name)throw new Error('Choose your player name on the home page first.');await joinRoom(code,name);joined=true;}catch(cause){error=cause instanceof Error?cause.message:String(cause)}});
</script>
<div class="phone"><nav><Logo compact/><span>{code || 'NO ROOM'}</span></nav><main>{#if error}<p class="eyebrow">Unable to join</p><h1>{error}</h1>{:else if !joined}<p class="eyebrow">Joining room…</p>{:else}<p class="eyebrow">Joined room {code}</p><h1>WAITING FOR A GAME</h1><p>Controls will be enabled only after a canonical game event stream exists.</p>{/if}</main></div>
<style>.phone{width:min(100%,520px);margin:auto;padding:0 1rem;min-height:100vh}nav>span{font-weight:bold;color:var(--yellow)}main{text-align:center;padding-top:8rem}h1{font:900 2.2rem 'Arial Black'}main p:last-child{color:var(--muted);line-height:1.7}</style>

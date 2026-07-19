<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import PillCast from '$lib/components/game/PillCast.svelte';
  import TetrisCast from '$lib/components/game/TetrisCast.svelte';
  import QuarryCast from '$lib/components/game/QuarryCast.svelte';
  import JoinQr from '$lib/components/JoinQr.svelte';
  import { getRoom,subscribeRoom } from '$lib/firebase/rooms';
  let code='',ruleset:'doctor'|'tetris'|'quarry'|'canopy'|undefined,error='',loading=true,activeGameId='',joinHref='';let stopRoom=()=>{};
  onMount(()=>{void initialize();return()=>stopRoom()});
  async function initialize(){try{code=new URL(location.href).searchParams.get('code')?.toUpperCase()??'';if(!/^[A-Z]{4}$/.test(code))throw new Error('A valid four-letter room code is required.');joinHref=new URL(`${base}/play?code=${code}`,location.origin).href;const room=await getRoom(code);ruleset=room.ruleset;activeGameId=room.activeGameId??'';stopRoom=subscribeRoom(room.id,next=>{ruleset=next.ruleset;if(next.activeGameId)activeGameId=next.activeGameId},cause=>error=cause.message)}catch(cause){error=cause instanceof Error?cause.message:String(cause)}finally{loading=false}}
</script>
{#if error}<main><h1 role="alert">{error}</h1></main>{:else if loading}<main><p role="status">Loading display…</p></main>{:else if !activeGameId}<main><section><div><p class="eyebrow">{ruleset==='tetris'?'BLOCK STACK':ruleset==='quarry'?'QUARRY MATCH':ruleset==='canopy'?'CRYSTAL CANOPY':'COLOR CURE'}</p><h1>WAITING FOR A GAME</h1><p>Scan to join as a controller, or enter room code <strong>{code}</strong>. Every board shown here is reconstructed from immutable controller commands.</p></div>{#if joinHref}<JoinQr href={joinHref} label="Scan to join"/>{/if}</section><header>ROOM {code}</header></main>{:else if ruleset==='tetris'}<TetrisCast/>{:else if ruleset==='doctor'}<PillCast/>{:else if ruleset==='quarry'}<QuarryCast/>{:else if ruleset==='canopy'}<QuarryCast variant="canopy"/>{/if}
<style>main{min-height:100vh;display:grid;place-content:center;padding:2rem}section{display:flex;align-items:center;gap:4rem}section p:last-child{max-width:42rem;color:var(--muted);line-height:1.7}header{position:fixed;top:2rem;right:4vw;color:var(--yellow)}@media(max-width:700px){section{flex-direction:column;text-align:center}}</style>

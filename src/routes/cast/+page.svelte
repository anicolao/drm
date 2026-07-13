<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/Logo.svelte';
  import PillBottle from '$lib/components/PillBottle.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { getRoom, subscribeRoom, subscribeRoomPlayers, type RoomPlayer } from '$lib/firebase/rooms';
  import { subscribePillBottleProgress, type PlayerProgress } from '$lib/firebase/pill-bottle';

  let code='';let ruleset='';let hostUid='';let loaded=false;let error='';let gameId='';let players:RoomPlayer[]=[];let progress:PlayerProgress[]=[];
  let stopRoom=()=>{};let stopPlayers=()=>{};let stopProgress=()=>{};
  $: displays=progress.filter(entry=>entry.playerId!==hostUid).map(entry=>({...entry,name:players.find(player=>player.uid===entry.playerId)?.displayName??'Player'}));

  onMount(()=>{void load();return()=>{stopRoom();stopPlayers();stopProgress();};});
  async function load(){
    code=new URL(window.location.href).searchParams.get('code')??'';
    try{if(!code)throw new Error('A room code is required.');if(!firebaseConfigured)throw new Error('Firebase configuration is required.');const room=await getRoom(code);ruleset=room.ruleset;hostUid=room.hostUid;loaded=true;stopPlayers=subscribeRoomPlayers(room.id,next=>players=next,cause=>error=cause.message);if(room.activeGameId)watchGame(room.activeGameId);stopRoom=subscribeRoom(room.id,next=>{if(next.activeGameId)watchGame(next.activeGameId);},cause=>error=cause.message);}catch(cause){error=cause instanceof Error?cause.message:String(cause)}
  }
  function watchGame(next:string){if(gameId===next)return;gameId=next;stopProgress();progress=[];stopProgress=subscribePillBottleProgress(next,nextProgress=>progress=nextProgress,cause=>error=cause.message);}
</script>

<div class="display"><header><Logo compact/><span>{code ? `ROOM ${code}` : 'NO ROOM'}</span></header><main>{#if error}<section class="message"><h1>DISPLAY UNAVAILABLE</h1><p role="alert">{error}</p></section>{:else if !loaded}<p>Loading room…</p>{:else if !gameId}<section class="message"><p class="eyebrow">{ruleset === 'tetris' ? 'BLOCK STACK' : 'COLOR CURE'}</p><h1>WAITING FOR A GAME</h1><p>The shared display will render only canonical state derived from the RTDB event stream.</p></section>{:else if displays.length===0}<section class="message"><p class="eyebrow">COLOR CURE · GAME ACTIVE</p><h1>WAITING FOR PLAYERS</h1><p>Joined controllers will appear when they publish real game progress.</p></section>{:else}<section class="arena" aria-label="Shared game display">{#each displays as player (player.playerId)}<article><h2>{player.name}</h2><PillBottle state={player.state}/><p>{player.state.viruses} viruses · tick {player.tick}</p></article>{/each}</section>{/if}</main></div>

<style>.display{min-height:100vh;padding:2rem 4vw}header{display:flex;justify-content:space-between;border-bottom:1px solid #343746;padding-bottom:1rem}main{min-height:70vh;display:grid;place-content:center}.message{text-align:center}.message h1{font:900 clamp(2.5rem,7vw,6rem) 'Arial Black'}.message p:last-child{color:var(--muted);max-width:42rem;line-height:1.7}.arena{width:92vw;display:flex;justify-content:center;align-items:start;gap:clamp(1.5rem,5vw,5rem);flex-wrap:wrap}.arena article{text-align:center;min-width:180px}.arena h2{text-transform:uppercase}.arena p{color:var(--muted);text-transform:uppercase;font-size:.7rem}.arena :global(.bottle){width:min(20vw,230px)}</style>

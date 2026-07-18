<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import Logo from '$lib/components/Logo.svelte';
  import JoinQr from '$lib/components/JoinQr.svelte';
  import GameAudio from '$lib/components/GameAudio.svelte';
  import CastPlayerFrame from './CastPlayerFrame.svelte';
  import MatchResult from './MatchResult.svelte';
  import MatchStandings from './MatchStandings.svelte';
  import PillBottle from '$lib/components/PillBottle.svelte';
  import { gravityTicksForState } from '$lib/game/pill-bottle';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { getRoom, subscribeRoom, subscribeRoomPlayers, type RoomPlayer } from '$lib/firebase/rooms';
  import { subscribePillBottleAttacks, subscribePillBottleProgress, type PillMatchLifecycle, type PlayerProgress } from '$lib/firebase/pill-bottle';
  import { LagIndicator } from '$lib/presentation/lag';

  type DisplayProgress=PlayerProgress&{displayLag?:number};
  let code='';let ruleset='';let loaded=false;let error='';let gameId='';let players:RoomPlayer[]=[];let progress:DisplayProgress[]=[];
  let joinHref='';
  let audioOutput:'cast'|'controllers'|undefined;
  const lagIndicator=new LagIndicator();
  let lifecycle:PillMatchLifecycle|undefined;
  const observedPhases=new Map<string,string>();
  let stopRoom=()=>{};let stopPlayers=()=>{};let stopProgress=()=>{};let stopAttacks=()=>{};
  $: displays=progress.map(entry=>({...entry,name:players.find(player=>player.uid===entry.playerId)?.displayName??'Player'}));
  $: standings=[...displays].sort((a,b)=>(lifecycle?.scores[b.playerId]??0)-(lifecycle?.scores[a.playerId]??0)||a.name.localeCompare(b.name));
  $: audioState=displays[0]?.state;

  onMount(()=>{void load();return()=>{stopRoom();stopPlayers();stopProgress();stopAttacks();};});
  async function load(){
    code=new URL(window.location.href).searchParams.get('code')??'';joinHref=new URL(`${base}/play?code=${code}`,window.location.origin).href;
    try{if(!code)throw new Error('A room code is required.');if(!firebaseConfigured)throw new Error('Firebase configuration is required.');const room=await getRoom(code);ruleset=room.ruleset;loaded=true;stopPlayers=subscribeRoomPlayers(room.id,next=>players=next,cause=>error=cause.message);if(room.activeGameId){if(room.ruleset==='tetris'){window.location.assign(`${base}/cast?code=${code}`);return}watchGame(room.activeGameId)}stopRoom=subscribeRoom(room.id,next=>{if(next.activeGameId){if(next.ruleset==='tetris')window.location.assign(`${base}/cast?code=${code}`);else watchGame(next.activeGameId)}},cause=>error=cause.message);}catch(cause){error=cause instanceof Error?cause.message:String(cause)}
  }
  function smoothLag(entries:PlayerProgress[]){
    const now=performance.now();
    return entries.map((entry):DisplayProgress=>{
      const previous=observedPhases.get(entry.playerId);observedPhases.set(entry.playerId,entry.state.phase);
      if(previous==='playing'&&entry.state.phase==='countdown')window.dispatchEvent(new CustomEvent('drm-clear',{detail:entry.state.level}));
      return{...entry,displayLag:lagIndicator.sample(entry.playerId,entry.lag,now)};
    });
  }
  function watchGame(next:string){if(gameId===next)return;gameId=next;stopProgress();stopAttacks();progress=[];lifecycle=undefined;audioOutput=undefined;observedPhases.clear();lagIndicator.clear();stopProgress=subscribePillBottleProgress(next,nextProgress=>progress=smoothLag(nextProgress),cause=>error=cause.message,nextLifecycle=>lifecycle=nextLifecycle,start=>audioOutput=start.audioOutput);stopAttacks=subscribePillBottleAttacks(next,()=>window.dispatchEvent(new Event('drm-rain')),cause=>error=cause.message);}
</script>

<GameAudio state={audioState} enabled={audioOutput==='cast'}/><div class="display"><header><Logo compact/><div class="room-heading"><span class="live-dot" class:active={Boolean(gameId)} aria-hidden="true"></span><span>{code ? `ROOM ${code}` : 'NO ROOM'}</span></div></header><main>{#if error}<section class="message"><h1>DISPLAY UNAVAILABLE</h1><p role="alert">{error}</p></section>{:else if !loaded}<p role="status">Loading room…</p>{:else if !gameId}<section class="message waiting"><div><p class="eyebrow">{ruleset === 'tetris' ? 'BLOCK STACK' : 'COLOR CURE'}</p><h1>WAITING FOR A GAME</h1><p>Scan to join as a controller, or enter room code <strong>{code}</strong>. Every board shown here is reconstructed from immutable controller commands.</p></div>{#if joinHref}<JoinQr href={joinHref} label="Scan to join" />{/if}</section>{:else if displays.length===0}<section class="message"><p class="eyebrow">COLOR CURE · GAME ACTIVE</p><h1>WAITING FOR PLAYERS</h1><p role="status">Controllers will appear after their first progress command.</p></section>{:else}<section class="arena" aria-label="Shared game display">{#if lifecycle&&lifecycle.playerIds.length>1}<aside class="scoreboard"><strong>ROUND {lifecycle.round+1}/3</strong>{#each standings as player}<span>{player.name} <b>{lifecycle.scores[player.playerId]??0}</b>{#if lifecycle.roundPoints[player.playerId]} <small>+{lifecycle.roundPoints[player.playerId]}</small>{/if}</span>{/each}</aside>{/if}{#if lifecycle?.finished}<MatchResult title={lifecycle.playerIds.length===1?'GAME OVER':lifecycle.matchComplete?'MATCH COMPLETE':`ROUND ${lifecycle.round+1} COMPLETE`} interactive={false} ready={lifecycle.readyPlayerIds.length} total={lifecycle.playerIds.length}>{#if lifecycle.matchComplete&&standings.length>1}<MatchStandings entries={standings.map(player=>({playerId:player.playerId,name:player.name,score:lifecycle?.scores[player.playerId]??0}))}/>{/if}</MatchResult>{/if}{#each displays as player (player.playerId)}<CastPlayerFrame name={player.name} lost={lifecycle?.terminalPlayerIds.includes(player.playerId)} lag={player.displayLag} hashMatches={player.hashMatches}><PillBottle state={player.state}/><p>level {player.state.level} · {player.state.viruses} viruses</p><p>speed {gravityTicksForState(player.state)} ticks · display tick {player.tick}</p>{#if lifecycle?.terminalResults[player.playerId]==='cleared'}<strong class="countdown">LEVEL CLEAR · +{lifecycle.roundPoints[player.playerId]??0}</strong>{:else if lifecycle?.terminalPlayerIds.includes(player.playerId)}<strong class="eliminated">ELIMINATED</strong>{/if}{#if player.displayLag!==undefined}<p class="tick-detail">controller is significantly behind</p>{/if}</CastPlayerFrame>{/each}</section>{/if}</main></div>

<style>.display{min-height:100vh;padding:1rem 4vw}header{display:flex;justify-content:space-between;border-bottom:1px solid #343746;padding-bottom:.5rem}.room-heading{display:flex;align-items:center;gap:.55rem;font-weight:700}.live-dot{width:.65rem;height:.65rem;border-radius:50%;background:var(--yellow)}.live-dot.active{background:var(--cyan)}main{min-height:82dvh;display:grid;place-content:center}.message{text-align:center}.message.waiting{display:flex;align-items:center;justify-content:center;gap:clamp(2rem,7vw,7rem);text-align:left}.message h1{font:900 clamp(2.5rem,7vw,6rem) 'Arial Black'}.message p:last-child{color:var(--muted);max-width:42rem;line-height:1.7}.arena{width:92vw;display:flex;justify-content:center;align-items:start;gap:clamp(.75rem,3vw,3rem);flex-wrap:wrap}.arena :global(article){min-width:120px;flex:0 1 auto}.arena :global(p){margin:.25rem;color:var(--muted);text-transform:uppercase;font-size:.65rem}.arena :global(.bottle-shell){width:min(42vw,40dvh,460px)}.countdown{display:block;color:var(--yellow);font-size:.8rem}.eliminated{color:var(--pink)}.scoreboard{position:fixed;top:4.5rem;right:4vw;display:grid;gap:.35rem;text-align:right;text-transform:uppercase}.scoreboard span{color:var(--muted)}.scoreboard b,.scoreboard small{color:var(--yellow)}@media(max-width:700px){.message.waiting{flex-direction:column;text-align:center}.scoreboard{position:static;margin-bottom:.5rem}.arena{padding-top:.5rem}}</style>

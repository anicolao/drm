<script lang="ts">
  import { onMount } from 'svelte';
  import TetrisBoard from '$lib/components/TetrisBoard.svelte';
  import TetrisAudio from '$lib/components/TetrisAudio.svelte';
  import { getRoom,subscribeRoomPlayers,type RoomPlayer } from '$lib/firebase/rooms';
  import { subscribeTetrisLifecycle,subscribeTetrisProgress,type TetrisProgress } from '$lib/firebase/tetris';
  import type { PillMatchLifecycle } from '$lib/game/pill-bottle';
  import { LagIndicator } from '$lib/presentation/lag';
  import CastPlayerFrame from './CastPlayerFrame.svelte';
  import MatchResult from './MatchResult.svelte';
  import MatchStandings from './MatchStandings.svelte';
  type DisplayProgress=TetrisProgress&{displayLag?:number};
  let code='',error='',players:RoomPlayer[]=[],progress:DisplayProgress[]=[],lifecycle:PillMatchLifecycle|undefined;const lagIndicator=new LagIndicator();
  let stop=()=>{},stopPlayers=()=>{},stopLife=()=>{};
  onMount(()=>{void load();return()=>{stop();stopPlayers();stopLife()}});
  async function load(){try{code=new URL(location.href).searchParams.get('code')??'';const room=await getRoom(code);stopPlayers=subscribeRoomPlayers(room.id,p=>players=p,e=>error=e.message);if(!room.activeGameId)throw new Error('Waiting for a game.');stop=subscribeTetrisProgress(room.activeGameId,p=>progress=p.map(entry=>({...entry,displayLag:lagIndicator.sample(entry.playerId,entry.lag,performance.now())})),e=>error=e.message);stopLife=subscribeTetrisLifecycle(room.activeGameId,l=>lifecycle=l,e=>error=e.message)}catch(e){error=e instanceof Error?e.message:String(e)}}
  function name(id:string){return players.find(p=>p.uid===id)?.displayName??'Player'}
  $: standings=[...progress].map(player=>({playerId:player.playerId,name:name(player.playerId),score:player.state.score})).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
</script>
<TetrisAudio enabled={true} level={progress[0]?.state.level??0}/><main><header>BLOCK STACK · ROOM {code}</header>{#if error}<h1 role="alert">{error}</h1>{:else}<section>{#each progress as player}<CastPlayerFrame name={name(player.playerId)} lost={lifecycle?.terminalPlayerIds.includes(player.playerId)} lag={player.displayLag} hashMatches={player.hashMatches}><TetrisBoard state={player.state}/><p>LEVEL {player.state.level} · LINES {player.state.lines}</p><p>SCORE {player.state.score}</p></CastPlayerFrame>{/each}</section>{#if lifecycle?.finished}<MatchResult title={lifecycle.winnerId?`${name(lifecycle.winnerId)} WINS`:'GAME OVER'} interactive={false} ready={lifecycle.readyPlayerIds.length} total={lifecycle.playerIds.length}>{#if lifecycle.matchComplete&&standings.length>1}<MatchStandings entries={standings}/>{/if}</MatchResult>{/if}{/if}</main>
<style>main{min-height:100vh;padding:1rem 2vw}header{border-bottom:1px solid #343746;padding-bottom:.5rem;color:var(--yellow)}section{min-height:88dvh;display:flex;align-items:center;justify-content:center;gap:clamp(.75rem,3vw,3rem);flex-wrap:wrap}section :global(article){min-width:120px}section :global(article .tetris-shell){width:min(42vw,calc((82dvh - 2.4rem)/2),440px)}p{margin:.25rem;font-size:.65rem;color:var(--muted)}</style>

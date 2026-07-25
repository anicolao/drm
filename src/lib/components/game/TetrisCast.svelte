<script lang="ts">
  import { onMount } from 'svelte';
  import TetrisBoard from '$lib/components/TetrisBoard.svelte';
  import TetrisAudio from '$lib/components/TetrisAudio.svelte';
  import { getRoom,subscribeRoomPlayers,type RoomPlayer } from '$lib/firebase/rooms';
  import { subscribeTetrisLifecycle,subscribeTetrisProgress,type TetrisProgress } from '$lib/firebase/tetris';
  import { TETRIS_RULES, type TetrisLifecycle } from '$lib/game/tetris';
  import { LagIndicator } from '$lib/presentation/lag';
  import CastPlayerFrame from './CastPlayerFrame.svelte';
  import MatchResult from './MatchResult.svelte';
  import MatchStandings from './MatchStandings.svelte';
  type DisplayProgress=TetrisProgress&{displayLag?:number};
  let code='',error='',players:RoomPlayer[]=[],progress:DisplayProgress[]=[],lifecycle:TetrisLifecycle|undefined;const lagIndicator=new LagIndicator();
  let stop=()=>{},stopPlayers=()=>{},stopLife=()=>{};
  onMount(()=>{void load();return()=>{stop();stopPlayers();stopLife()}});
  async function load(){try{code=new URL(location.href).searchParams.get('code')??'';const room=await getRoom(code);stopPlayers=subscribeRoomPlayers(room.id,p=>players=p,e=>error=e.message);if(!room.activeGameId)throw new Error('Waiting for a game.');stop=subscribeTetrisProgress(room.activeGameId,p=>progress=p.map(entry=>({...entry,displayLag:lagIndicator.sample(entry.playerId,entry.lag,performance.now())})),e=>error=e.message);stopLife=subscribeTetrisLifecycle(room.activeGameId,l=>lifecycle=l,e=>error=e.message)}catch(e){error=e instanceof Error?e.message:String(e)}}
  function name(id:string){return players.find(p=>p.uid===id)?.displayName??'Player'}
  $: solo=lifecycle?.playerIds.length===1;
  $: boardWidth=Math.min(42,80/Math.max(progress.length,1));
  $: standings=(lifecycle?.playerIds??[]).map(playerId=>({playerId,name:name(playerId),score:lifecycle?.scores[playerId]??0})).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
</script>
<TetrisAudio enabled={true} level={progress[0]?.state.level??0}/><main><header>BLOCK STACK · ROOM {code}</header>{#if error}<h1 role="alert">{error}</h1>{:else}<section style={`--board-width:${boardWidth}vw`}>{#each progress as player}<CastPlayerFrame name={name(player.playerId)} lost={lifecycle?.terminalResults[player.playerId]==='lost'} lag={player.displayLag} hashMatches={player.hashMatches}><TetrisBoard state={player.state}/><p>LEVEL {player.state.level} / {player.state.startingLevel+TETRIS_RULES.levelsToWin} · LINES {player.state.lines}</p><p>SCORE {player.state.score}</p></CastPlayerFrame>{/each}</section>{#if lifecycle?.finished}<MatchResult title={solo?(lifecycle.winnerId?'LEVEL COMPLETE':'LEVEL LOST'):lifecycle.winnerId?`${name(lifecycle.winnerId)} WINS THE ROUND`:'ROUND DRAW'} interactive={false} ready={lifecycle.readyPlayerIds.length} total={lifecycle.playerIds.length}>{#if !solo&&standings.length>0}<MatchStandings entries={standings}/>{/if}</MatchResult>{/if}{/if}</main>
<style>main{min-height:100vh;padding:1rem 2vw}header{border-bottom:1px solid #343746;padding-bottom:.5rem;color:var(--yellow)}section{min-height:88dvh;display:flex;align-items:center;justify-content:center;gap:clamp(.5rem,1vw,1rem);flex-wrap:nowrap}section :global(article){min-width:0}section :global(article .tetris-shell){width:min(var(--board-width),calc((82dvh - 2.4rem)/2),440px)}p{margin:.25rem;font-size:.65rem;color:var(--muted)}</style>

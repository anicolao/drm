<script lang="ts">
  import { onMount } from 'svelte';
  import TetrisBoard from '$lib/components/TetrisBoard.svelte';
  import TetrisAudio from '$lib/components/TetrisAudio.svelte';
  import { getRoom,subscribeRoomPlayers,type RoomPlayer } from '$lib/firebase/rooms';
  import { subscribeTetrisLifecycle,subscribeTetrisProgress,type TetrisProgress } from '$lib/firebase/tetris';
  import type { PillMatchLifecycle } from '$lib/game/pill-bottle';
  let code='',error='',players:RoomPlayer[]=[],progress:TetrisProgress[]=[],lifecycle:PillMatchLifecycle|undefined;
  let stop=()=>{},stopPlayers=()=>{},stopLife=()=>{};
  onMount(()=>{void load();return()=>{stop();stopPlayers();stopLife()}});
  async function load(){try{code=new URL(location.href).searchParams.get('code')??'';const room=await getRoom(code);stopPlayers=subscribeRoomPlayers(room.id,p=>players=p,e=>error=e.message);if(!room.activeGameId)throw new Error('Waiting for a game.');stop=subscribeTetrisProgress(room.activeGameId,p=>progress=p,e=>error=e.message);stopLife=subscribeTetrisLifecycle(room.activeGameId,l=>lifecycle=l,e=>error=e.message)}catch(e){error=e instanceof Error?e.message:String(e)}}
  function name(id:string){return players.find(p=>p.uid===id)?.displayName??'Player'}
</script>
<TetrisAudio enabled={true} level={progress[0]?.state.level??0}/><main><header>BLOCK STACK · ROOM {code}</header>{#if error}<h1 role="alert">{error}</h1>{:else}<section>{#each progress as player}<article class:lost={lifecycle?.terminalPlayerIds.includes(player.playerId)}><h2>{name(player.playerId)}</h2><TetrisBoard state={player.state}/><p>LEVEL {player.state.level} · LINES {player.state.lines}</p><p>SCORE {player.state.score}</p>{#if !player.hashMatches}<b>REPLAY HASH MISMATCH</b>{/if}</article>{/each}</section>{#if lifecycle?.finished}<div class="result"><h1>{lifecycle.winnerId?`${name(lifecycle.winnerId)} WINS`:'GAME OVER'}</h1></div>{/if}{/if}</main>
<style>main{min-height:100vh;padding:2rem}header{border-bottom:1px solid #343746;padding-bottom:1rem;color:var(--yellow)}section{min-height:80vh;display:flex;align-items:center;justify-content:center;gap:4vw;flex-wrap:wrap}article{text-align:center}article.lost{opacity:.45}article :global(.tetris-shell){width:min(20vw,230px)}p{font-size:.7rem;color:var(--muted)}b{color:var(--pink)}.result{position:fixed;inset:0;background:#08090eee;display:grid;place-content:center}.result h1{font-size:7vw;color:var(--yellow)}</style>

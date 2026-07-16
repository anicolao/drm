<script lang="ts">
  import { onMount } from 'svelte';
  import TetrisBoard from '$lib/components/TetrisBoard.svelte';
  import TetrisAudio from '$lib/components/TetrisAudio.svelte';
  import ControllerStatus from './ControllerStatus.svelte';
  import MatchResult from './MatchResult.svelte';
  import OpponentList from './OpponentList.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { joinRoom,subscribeRoom } from '$lib/firebase/rooms';
  import { createTetrisController,requestTetrisRematch,type TetrisControllerState,type TetrisProgress } from '$lib/firebase/tetris';
  import type { TetrisInput } from '$lib/game/tetris';
  import { HeldActionRepeater } from '$lib/input/held-repeat';
  import { StandardGamepadControls,type GamepadControlAction } from '$lib/input/gamepad';
  import { commandForGamepadAction,commandForKey } from '$lib/runtime/core-input';
  let code='',name='',needsName=false,error='',gameId='',online=true,gamepadName='';
  let controller:ReturnType<typeof createTetrisController>|undefined,state:TetrisControllerState={tick:0,ready:false},stopRoom=()=>{},gamepadFrame=0;
  const gamepad=new StandardGamepadControls(),repeat=new HeldActionRepeater<-1|1>(dx=>send({type:'input/move',payload:{dx}}));
  $: enabled=Boolean(state.ready&&state.state?.phase==='playing'&&!state.lifecycle?.finished);
  onMount(()=>{online=navigator.onLine;void init();gamepadFrame=requestAnimationFrame(poll);
    const kd=(e:KeyboardEvent)=>{const command=commandForKey(e);if(command){e.preventDefault();send(command)}};
    const ku=(e:KeyboardEvent)=>{if(e.key==='ArrowDown')send({type:'input/soft-drop-end',payload:{}})};
    const network=()=>online=navigator.onLine;
    const visibility=()=>document.hidden?controller?.suspend():controller?.resume();
    window.addEventListener('keydown',kd);window.addEventListener('keyup',ku);window.addEventListener('online',network);window.addEventListener('offline',network);document.addEventListener('visibilitychange',visibility);
    return()=>{cancelAnimationFrame(gamepadFrame);stopRoom();controller?.destroy();window.removeEventListener('keydown',kd);window.removeEventListener('keyup',ku);window.removeEventListener('online',network);window.removeEventListener('offline',network);document.removeEventListener('visibilitychange',visibility)}
  });
  async function init(){code=new URL(location.href).searchParams.get('code')?.toUpperCase()??'';if(!firebaseConfigured){error='Firebase configuration is required.';return}name=localStorage.getItem('drm-player-name')??'';if(!name){needsName=true;return}await join()}
  async function join(){try{const room=await joinRoom(code,name);if(room.activeGameId)start(room.activeGameId);stopRoom=subscribeRoom(room.id,next=>{if(next.activeGameId)start(next.activeGameId)},e=>error=e.message)}catch(e){error=e instanceof Error?e.message:String(e)}}
  async function save(){if(!name.trim())return;localStorage.setItem('drm-player-name',name.trim());needsName=false;await join()}
  function start(id:string){if(id===gameId)return;gameId=id;error='';controller?.destroy();controller=createTetrisController(id,next=>{state=next;if(next.error)error=next.error})}
  function send(input:TetrisInput){if(enabled)controller?.command(input)}
  function gamepadInput(action:GamepadControlAction){send(commandForGamepadAction(action))}
  function poll(now:number){const pads=typeof navigator.getGamepads==='function'?Array.from(navigator.getGamepads()):[];gamepadName=pads.find(p=>p?.connected)?.id??'';if(enabled)for(const action of gamepad.sample(pads,now))gamepadInput(action);else gamepad.reset();gamepadFrame=requestAnimationFrame(poll)}
  async function nextRound(){if(gameId)await requestTetrisRematch(gameId).catch(e=>error=e instanceof Error?e.message:String(e))}
</script>
{#if needsName}<main class="join"><form class="card" on:submit|preventDefault={save}><h1>JOIN BLOCK STACK</h1><label>Player name<input aria-label="Player name" bind:value={name}/></label><button>Join room</button></form></main>
{:else if error}<main class="join"><h1 role="alert">{error}</h1>{#if state.ownershipConflict}<button on:click={()=>controller?.takeOver()}>Take over on this device</button>{/if}</main>
{:else if !state.state}<main class="join"><h1>WAITING FOR BLOCKS…</h1></main>
{:else}<main class="controller" aria-label="Block Stack controller">
  <TetrisAudio enabled={state.audioOutput==='controllers'} level={state.state.level}/><ControllerStatus {online} ready={state.ready} {gamepadName} room={code}/>
  <section class="game"><strong>{name}</strong><TetrisBoard state={state.state}/><span>LEVEL {state.state.level} · LINES {state.state.lines}</span><span>SCORE {state.state.score}</span><span class="tick">TICK {state.tick}</span>{#if state.lastCommand}<small class="command-status">{state.lastCommand}</small>{/if}</section>
  <OpponentList opponents={state.opponents??[]} let:opponent><TetrisBoard state={(opponent as TetrisProgress).state}/><small>SCORE {(opponent as TetrisProgress).state.score}</small></OpponentList>
  {#if state.lifecycle?.finished}<MatchResult title={state.lifecycle.winnerId===state.playerId?'ROUND WIN':'GAME OVER'} action={state.lifecycle.matchComplete?'PLAY AGAIN':'NEXT ROUND'} ready={state.lifecycle.readyPlayerIds.length} total={state.lifecycle.playerIds.length} disabled={state.lifecycle.readyPlayerIds.includes(state.playerId??'')} activate={nextRound}/>{/if}
  <section class="dpad"><button aria-label="Hard drop" disabled={!enabled} on:pointerdown={()=>send({type:'input/hard-drop',payload:{}})}>↑</button><button aria-label="Move left" disabled={!enabled} on:pointerdown={()=>repeat.start(-1)} on:pointerup={()=>repeat.stop()} on:pointercancel={()=>repeat.stop()}>←</button><button aria-label="Soft drop" disabled={!enabled} on:pointerdown={()=>send({type:'input/soft-drop-start',payload:{}})} on:pointerup={()=>send({type:'input/soft-drop-end',payload:{}})} on:pointercancel={()=>send({type:'input/soft-drop-end',payload:{}})}>↓</button><button aria-label="Move right" disabled={!enabled} on:pointerdown={()=>repeat.start(1)} on:pointerup={()=>repeat.stop()} on:pointercancel={()=>repeat.stop()}>→</button></section>
  <section class="rotate"><button aria-label="Rotate counterclockwise" disabled={!enabled} on:pointerdown={()=>send({type:'input/rotate',payload:{direction:'counterclockwise'}})}>↺</button><button aria-label="Rotate clockwise" disabled={!enabled} on:pointerdown={()=>send({type:'input/rotate',payload:{direction:'clockwise'}})}>↻</button></section>
</main>{/if}
<style>.join{width:min(520px,calc(100% - 2rem));margin:5rem auto}.join form{display:grid;gap:1rem}.controller{position:fixed;inset:0;overflow:hidden;background:radial-gradient(circle,#202640,transparent 55%),var(--bg);touch-action:none}.game{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:grid;justify-items:center;gap:.2rem;font-size:.6rem;color:var(--muted)}.game :global(.tetris-shell){width:min(24vw,38dvh,190px)}.tick{color:var(--yellow)}.dpad{position:absolute;left:3vw;bottom:3vh;width:min(34vw,280px);height:min(58vh,230px);display:grid;grid-template:repeat(2,1fr)/repeat(3,1fr);gap:.5rem}.dpad button:first-child{grid-area:1/2}.dpad button:nth-child(2){grid-area:2/1}.dpad button:nth-child(3){grid-area:2/2}.dpad button:nth-child(4){grid-area:2/3}.rotate{position:absolute;right:4vw;bottom:3vh;display:grid;grid-template-columns:repeat(2,min(14vw,130px));height:min(35vh,150px);gap:1rem}.dpad button,.rotate button{font-size:2rem;padding:0;background:#292c38;color:white}.controller :global(.opponents .tetris-shell){width:min(10vw,90px)}@media(orientation:portrait){.game{top:5rem;transform:translateX(-50%)}.game :global(.tetris-shell){width:min(44vw,20vh,160px)}.dpad{left:.5rem;bottom:.7rem;width:52vw;height:27vh}.rotate{right:.5rem;bottom:.7rem;grid-template-columns:repeat(2,20vw);height:16vh;gap:.5rem}.controller :global(.opponents .tetris-shell){width:min(13vw,60px)}}</style>

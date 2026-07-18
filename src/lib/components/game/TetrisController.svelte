<script lang="ts">
  import { onMount } from 'svelte';
  import TetrisBoard from '$lib/components/TetrisBoard.svelte';
  import TetrisAudio from '$lib/components/TetrisAudio.svelte';
  import ControllerStatus from './ControllerStatus.svelte';
  import MatchResult from './MatchResult.svelte';
  import LevelPicker from './LevelPicker.svelte';
  import OpponentList from './OpponentList.svelte';
  import { auth,firebaseConfigured } from '$lib/firebase/config';
  import { joinRoom,subscribeRoom,subscribeRoomPlayers,updatePlayerLevel } from '$lib/firebase/rooms';
  import { createTetrisController,requestTetrisRematch,type TetrisControllerState,type TetrisProgress } from '$lib/firebase/tetris';
  import type { TetrisInput } from '$lib/game/tetris';
  import { HeldActionRepeater } from '$lib/input/held-repeat';
  import { gamepadLayoutMode,StandardGamepadControls,type GamepadControlAction } from '$lib/input/gamepad';
  import { commandForGamepadAction,commandForKey,HeldInputGate } from '$lib/runtime/core-input';
  let code='',name='',needsName=false,error='',gameId='',roomId='',online=true,gamepadName='',gamepadActive=false,selectedLevel=0;
  let controller:ReturnType<typeof createTetrisController>|undefined,state:TetrisControllerState={tick:0,ready:false},stopRoom=()=>{},stopPlayers=()=>{},gamepadFrame=0;
  const gamepad=new StandardGamepadControls(),repeat=new HeldActionRepeater<-1|1>(dx=>send({type:'input/move',payload:{dx}})),hardDropKeys=new HeldInputGate<string>();
  $: enabled=Boolean(state.ready&&state.state?.phase==='playing'&&!state.lifecycle?.finished);
  onMount(()=>{online=navigator.onLine;void init();gamepadFrame=requestAnimationFrame(poll);
    const kd=(e:KeyboardEvent)=>{if(e.key==='ArrowUp'&&!hardDropKeys.press(e.key)){e.preventDefault();return}const command=commandForKey(e);if(command){e.preventDefault();send(command)}};
    const ku=(e:KeyboardEvent)=>{if(e.key==='ArrowUp')hardDropKeys.release(e.key);if(e.key==='ArrowDown')send({type:'input/soft-drop-end',payload:{}})};
    const network=()=>online=navigator.onLine;
    const release=()=>hardDropKeys.reset(),visibility=()=>{if(document.hidden){release();controller?.suspend()}else controller?.resume()};
    window.addEventListener('blur',release);window.addEventListener('keydown',kd);window.addEventListener('keyup',ku);window.addEventListener('online',network);window.addEventListener('offline',network);document.addEventListener('visibilitychange',visibility);
    return()=>{cancelAnimationFrame(gamepadFrame);stopRoom();stopPlayers();controller?.destroy();window.removeEventListener('blur',release);window.removeEventListener('keydown',kd);window.removeEventListener('keyup',ku);window.removeEventListener('online',network);window.removeEventListener('offline',network);document.removeEventListener('visibilitychange',visibility)}
  });
  async function init(){code=new URL(location.href).searchParams.get('code')?.toUpperCase()??'';if(!firebaseConfigured){error='Firebase configuration is required.';return}name=localStorage.getItem('drm-player-name')??'';if(!name){needsName=true;return}await join()}
  async function join(){try{const room=await joinRoom(code,name);roomId=room.id;stopPlayers=subscribeRoomPlayers(room.id,players=>selectedLevel=players.find(player=>player.uid===auth?.currentUser?.uid)?.level??selectedLevel,e=>error=e.message);if(room.activeGameId)start(room.activeGameId);stopRoom=subscribeRoom(room.id,next=>{if(next.activeGameId)start(next.activeGameId)},e=>error=e.message)}catch(e){error=e instanceof Error?e.message:String(e)}}
  async function save(){if(!name.trim())return;localStorage.setItem('drm-player-name',name.trim());needsName=false;await join()}
  function start(id:string){if(id===gameId)return;gameId=id;error='';controller?.destroy();controller=createTetrisController(id,next=>{state=next;if(next.error)error=next.error})}
  function send(input:TetrisInput){if(enabled)controller?.command(input)}
  function gamepadInput(action:GamepadControlAction){gamepadActive=true;send(commandForGamepadAction(action))}
  function poll(now:number){const pads=typeof navigator.getGamepads==='function'?Array.from(navigator.getGamepads()):[],active=pads.find(p=>p?.connected),actions=gamepad.sample(pads,now);gamepadName=active?.id??'';gamepadActive=gamepadLayoutMode(gamepadActive,Boolean(active),actions);if(enabled)for(const action of actions)gamepadInput(action);else if(state.lifecycle?.finished){if(actions.includes('rotate-clockwise'))void nextRound()}else gamepad.reset();gamepadFrame=requestAnimationFrame(poll)}
  function touch(input:TetrisInput){gamepadActive=false;send(input)}
  async function chooseLevel(level:number){selectedLevel=level;if(roomId)await updatePlayerLevel(roomId,level).catch(e=>error=e instanceof Error?e.message:String(e))}
  async function nextRound(){if(gameId)await requestTetrisRematch(gameId,selectedLevel).catch(e=>error=e instanceof Error?e.message:String(e))}
</script>
{#if needsName}<main class="join"><form class="card" on:submit|preventDefault={save}><h1>JOIN BLOCK STACK</h1><label>Player name<input aria-label="Player name" bind:value={name}/></label><button>Join room</button></form></main>
{:else if error}<main class="join"><h1 role="alert">{error}</h1>{#if state.ownershipConflict}<button on:click={()=>controller?.takeOver()}>Take over on this device</button>{/if}</main>
{:else if !state.state}<main class="join"><h1>WAITING FOR BLOCKS…</h1><p>Choose your starting level.</p><LevelPicker level={selectedLevel} change={chooseLevel}/></main>
{:else}<main class="controller" class:gamepad-mode={gamepadActive} aria-label="Block Stack controller">
  <TetrisAudio enabled={state.audioOutput==='controllers'} level={state.state.level}/><ControllerStatus {online} ready={state.ready} {gamepadName} room={code}/>
  <section class="game"><strong>{name}</strong><TetrisBoard state={state.state}/><span>LEVEL {state.state.level} · LINES {state.state.lines}</span><span>SCORE {state.state.score}</span><span class="tick">TICK {state.tick}</span>{#if state.lastCommand}<small class="command-status">{state.lastCommand}</small>{/if}</section>
  <OpponentList opponents={state.opponents??[]} let:opponent><TetrisBoard state={(opponent as TetrisProgress).state} label="Opponent Block Stack board" compact/><small>SCORE {(opponent as TetrisProgress).state.score}</small></OpponentList>
  {#if state.lifecycle?.finished}<MatchResult title={state.lifecycle.winnerId===state.playerId?'ROUND WIN':'GAME OVER'} action={state.lifecycle.matchComplete?'PLAY AGAIN':'NEXT ROUND'} ready={state.lifecycle.readyPlayerIds.length} total={state.lifecycle.playerIds.length} disabled={state.lifecycle.readyPlayerIds.includes(state.playerId??'')} level={selectedLevel} changeLevel={(level)=>selectedLevel=level} activate={nextRound}/>{/if}
  {#if !gamepadActive}<section class="dpad"><button aria-label="Hard drop" disabled={!enabled} on:pointerdown={()=>touch({type:'input/hard-drop',payload:{}})}>↑</button><button aria-label="Move left" disabled={!enabled} on:pointerdown={()=>{gamepadActive=false;repeat.start(-1)}} on:pointerup={()=>repeat.stop()} on:pointercancel={()=>repeat.stop()}>←</button><button aria-label="Soft drop" disabled={!enabled} on:pointerdown={()=>touch({type:'input/soft-drop-start',payload:{}})} on:pointerup={()=>touch({type:'input/soft-drop-end',payload:{}})} on:pointercancel={()=>touch({type:'input/soft-drop-end',payload:{}})}>↓</button><button aria-label="Move right" disabled={!enabled} on:pointerdown={()=>{gamepadActive=false;repeat.start(1)}} on:pointerup={()=>repeat.stop()} on:pointercancel={()=>repeat.stop()}>→</button></section>
  <section class="rotate"><button aria-label="Rotate counterclockwise" disabled={!enabled} on:pointerdown={()=>touch({type:'input/rotate',payload:{direction:'counterclockwise'}})}>↺</button><button aria-label="Rotate clockwise" disabled={!enabled} on:pointerdown={()=>touch({type:'input/rotate',payload:{direction:'clockwise'}})}>↻</button></section>{:else}<button class="input-mode-toggle" on:click={()=>gamepadActive=false}>SHOW TOUCH CONTROLS</button>{/if}
</main>{/if}
<style>
  .join{width:min(520px,calc(100% - 2rem));margin:5rem auto}.join form{display:grid;gap:1rem}.controller{position:fixed;inset:0;overflow:hidden;background:radial-gradient(circle,#202640,transparent 55%),var(--bg);touch-action:none}
  .game{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:grid;justify-items:center;gap:.1rem;font-size:clamp(.4rem,1.25dvh,.55rem);color:var(--muted)}.game :global(.tetris-shell){width:min(22vw,calc((90dvh - 3rem)/2),420px)}.tick{color:var(--yellow)}
  .dpad{position:absolute;left:3vw;bottom:3dvh;width:min(34vw,280px);height:min(58dvh,230px);display:grid;grid-template:repeat(2,1fr)/repeat(3,1fr);gap:.5rem}.dpad button:first-child{grid-area:1/2}.dpad button:nth-child(2){grid-area:2/1}.dpad button:nth-child(3){grid-area:2/2}.dpad button:nth-child(4){grid-area:2/3}.rotate{position:absolute;right:4vw;bottom:3dvh;display:grid;grid-template-columns:repeat(2,min(14vw,130px));height:min(35dvh,150px);gap:1rem}.dpad button,.rotate button{font-size:2rem;padding:0;background:#292c38;color:white}
  .input-mode-toggle{position:absolute;z-index:7;left:50%;bottom:max(.45rem,env(safe-area-inset-bottom));transform:translateX(-50%);padding:.4rem .65rem;border-color:#45495b;background:#171923;color:var(--muted);font-size:.48rem}.gamepad-mode .game :global(.tetris-shell){width:min(44vw,calc((94dvh - 3rem)/2),420px)}
  @media(orientation:portrait){.game{top:max(3.4rem,calc(env(safe-area-inset-top) + 3rem));transform:translateX(-50%);max-height:61dvh}.game :global(.tetris-shell){width:min(58vw,calc((58dvh - 3rem)/2),230px)}.dpad{left:.5rem;bottom:.7rem;width:52vw;height:27dvh}.rotate{right:.5rem;bottom:.7rem;grid-template-columns:repeat(2,20vw);height:16dvh;gap:.5rem}.gamepad-mode .game{max-height:90dvh}.gamepad-mode .game :global(.tetris-shell){width:min(68vw,calc((88dvh - 3rem)/2),300px)}.gamepad-mode :global(.opponent){width:54px}}
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/Logo.svelte';
  import PillBottle from '$lib/components/PillBottle.svelte';
  import { gravityTicksForState } from '$lib/game/pill-bottle';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { joinRoom, subscribeRoom, subscribeRoomPlayers, type RoomPlayer } from '$lib/firebase/rooms';
  import { createPillBottleController, type PillCommand, type ControllerState } from '$lib/firebase/pill-bottle';
  import { StandardGamepadControls, type GamepadControlAction } from '$lib/input/gamepad';

  let code=''; let joined=false; let joining=false; let needsName=false; let playerName=''; let error='';
  let roomId=''; let activeGameId=''; let controller: ReturnType<typeof createPillBottleController> | undefined;
  let roomUnsubscribe=()=>{}; let playersUnsubscribe=()=>{}; let players:RoomPlayer[]=[]; let state: ControllerState={tick:0,ready:false}; let downHeld=false;
  let gamepadFrame=0; let gamepadConnected=false; const gamepadControls=new StandardGamepadControls(); const dropSources=new Set<'pointer'|'keyboard'|'gamepad'>();
  $: controlsEnabled=Boolean(state.ready&&state.bottle?.phase==='playing'&&!state.lifecycle?.finished);
  $: standings=(state.lifecycle?.playerIds??[]).map((playerId,index)=>({
    playerId,
    name:players.find(player=>player.uid===playerId)?.displayName??(playerId===state.playerId?playerName:`Player ${index+1}`),
    score:state.lifecycle?.scores[playerId]??0,
    roundPoints:state.lifecycle?.roundPoints[playerId]??0
  })).sort((a,b)=>b.score-a.score);

  onMount(()=>{
    void initialize();
    gamepadFrame=requestAnimationFrame(pollGamepads);
    const release=()=>void releaseAllDown();
    const visibility=()=>{if(document.hidden){release();gamepadControls.reset();controller?.suspend();}else controller?.resume();};
    const pagehide=()=>{release();gamepadControls.reset();controller?.suspend();};
    window.addEventListener('blur',release);window.addEventListener('keydown',keyDown);window.addEventListener('keyup',keyUp);window.addEventListener('pagehide',pagehide);document.addEventListener('visibilitychange',visibility);
    return()=>{cancelAnimationFrame(gamepadFrame);roomUnsubscribe();playersUnsubscribe();controller?.destroy();window.removeEventListener('blur',release);window.removeEventListener('keydown',keyDown);window.removeEventListener('keyup',keyUp);window.removeEventListener('pagehide',pagehide);document.removeEventListener('visibilitychange',visibility);};
  });

  async function initialize(){
    code=new URL(window.location.href).searchParams.get('code')?.toUpperCase()??'';
    if(!/^[A-Z]{4}$/.test(code)){error='A valid four-letter room code is required.';return;}
    if(!firebaseConfigured){error='Firebase configuration is required.';return;}
    playerName=localStorage.getItem('drm-player-name')??'';
    if(!playerName){needsName=true;return;}
    await performJoin();
  }
  async function performJoin(){
    joining=true;error='';
    try{
      const room=await joinRoom(code,playerName);roomId=room.id;joined=true;needsName=false;
      playersUnsubscribe=subscribeRoomPlayers(room.id,next=>players=next,cause=>error=cause.message);
      if(room.activeGameId)startController(room.activeGameId);
      roomUnsubscribe=subscribeRoom(room.id,(next)=>{if(next.activeGameId)startController(next.activeGameId);},(cause)=>error=cause.message);
    }catch(cause){error=cause instanceof Error?cause.message:String(cause);}
    finally{joining=false;}
  }
  async function saveAndJoin(){
    const name=playerName.trim();if(!name||name.length>24){error='Player name must be between 1 and 24 characters.';return;}
    playerName=name;localStorage.setItem('drm-player-name',name);await performJoin();
  }
  function startController(gameId:string){
    if(controller&&activeGameId===gameId)return;controller?.destroy();activeGameId=gameId;state={tick:0,ready:false};error='';
    controller=createPillBottleController(gameId,(next)=>{state=next;if(next.error)error=next.error;});
  }
  function send(input:PillCommand){
    if(!controlsEnabled)return;
    navigator.vibrate?.(12);void controller?.command(input).catch((cause)=>error=cause instanceof Error?cause.message:String(cause));
  }
  function beginDown(source:'pointer'|'keyboard'|'gamepad'){
    if(dropSources.has(source))return;const start=dropSources.size===0;dropSources.add(source);downHeld=true;
    if(start)send({type:'input/soft-drop-start',payload:{}});
  }
  function endDown(source:'pointer'|'keyboard'|'gamepad'){if(!dropSources.delete(source))return;downHeld=dropSources.size>0;if(!downHeld)send({type:'input/soft-drop-end',payload:{}});}
  function releaseAllDown(){if(dropSources.size===0)return;dropSources.clear();downHeld=false;send({type:'input/soft-drop-end',payload:{}});}
  function pressDown(event:PointerEvent){
    beginDown('pointer');
    try{(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);}catch{/* Pointer capture is optional for synthetic and unsupported pointers. */}
  }
  function releasePointerDown(){endDown('pointer');}
  function gamepadAction(action:GamepadControlAction){
    if(action==='move-left')send({type:'input/move',payload:{dx:-1}});
    else if(action==='move-right')send({type:'input/move',payload:{dx:1}});
    else if(action==='hard-drop')send({type:'input/hard-drop',payload:{}});
    else if(action==='rotate-clockwise')send({type:'input/rotate',payload:{direction:'clockwise'}});
    else if(action==='rotate-counterclockwise')send({type:'input/rotate',payload:{direction:'counterclockwise'}});
    else if(action==='soft-drop-start')beginDown('gamepad');
    else endDown('gamepad');
  }
  function pollGamepads(now:number){
    const gamepads=typeof navigator.getGamepads==='function'?Array.from(navigator.getGamepads()):[];
    gamepadConnected=gamepads.some(gamepad=>Boolean(gamepad?.connected));
    const actions=gamepadControls.sample(gamepads,now);
    if(controlsEnabled)for(const action of actions)gamepadAction(action);
    else{gamepadControls.reset();endDown('gamepad');}
    gamepadFrame=requestAnimationFrame(pollGamepads);
  }
  function typingTarget(target:EventTarget|null){return target instanceof HTMLElement&&(target.matches('input,textarea,select')||target.isContentEditable);}
  function keyDown(event:KeyboardEvent){
    if(typingTarget(event.target)||!controlsEnabled)return;
    if(event.key==='ArrowDown'){event.preventDefault();if(!event.repeat)beginDown('keyboard');return;}
    const command = event.key==='ArrowLeft'?{type:'input/move',payload:{dx:-1}} as PillCommand
      :event.key==='ArrowRight'?{type:'input/move',payload:{dx:1}} as PillCommand
      :event.key==='ArrowUp'&&!event.repeat?{type:'input/hard-drop',payload:{}} as PillCommand
      :event.key.toLowerCase()==='r'&&!event.repeat?{type:'input/rotate',payload:{direction:'clockwise'}} as PillCommand
      :event.key.toLowerCase()==='t'&&!event.repeat?{type:'input/rotate',payload:{direction:'counterclockwise'}} as PillCommand:undefined;
    if(command){event.preventDefault();send(command);}
  }
  function keyUp(event:KeyboardEvent){if(event.key==='ArrowDown'){event.preventDefault();endDown('keyboard');}}
  async function nextRound(){try{await controller?.requestRematch();}catch(cause){error=cause instanceof Error?cause.message:String(cause);}}
</script>

<div class="controller-shell"><nav><Logo compact/><span>{code||'NO ROOM'}</span></nav>
{#if needsName}<main class="join"><form class="card" on:submit|preventDefault={saveAndJoin}><p class="eyebrow">Joining room {code}</p><h1>WHAT SHOULD PLAYERS CALL YOU?</h1><label>Player name<input aria-label="Player name" maxlength="24" autocomplete="nickname" bind:value={playerName}/></label><button disabled={joining}>{joining?'Joining…':'Join room'}</button></form>{#if error}<p role="alert">{error}</p>{/if}</main>
{:else if error}<main class="join"><p class="eyebrow">Controller error</p><h1>{error}</h1></main>
{:else if !joined}<main class="join"><p class="eyebrow">Joining room…</p></main>
{:else if !activeGameId}<main class="join"><p class="eyebrow">Joined room {code}</p><h1>WAITING FOR HOST</h1><p>The controller starts when the host publishes the game start record.</p></main>
{:else}<main class="landscape-controller" aria-label="Pill Bottle controller">
  {#if state.lifecycle&&state.lifecycle.playerIds.length>1}<aside class="controller-scoreboard" aria-label="Scores"><strong>ROUND {state.lifecycle.round+1}/3</strong>{#each standings as player}<span class:you={player.playerId===state.playerId}>{player.name} <b>{player.score}</b>{#if player.roundPoints>0}<small>+{player.roundPoints}</small>{/if}</span>{/each}</aside>{/if}
  <section class="session"><strong>{playerName}</strong><span>room {code}</span>{#if state.bottle}<PillBottle state={state.bottle}/><span>{state.lifecycle?.playerIds.length===1?`level ${state.bottle.level}`:`round ${(state.lifecycle?.round??state.bottle.level)+1}/3`} · {state.bottle.viruses} viruses</span><span>speed {gravityTicksForState(state.bottle)} ticks · {state.bottle.pills} pills</span>{#if state.lifecycle?.terminalResults[state.playerId??'']==='cleared'}<strong class="countdown">LEVEL CLEAR</strong>{:else if state.bottle.phase==='lost'&&!state.lifecycle?.finished}<strong class="result">ELIMINATED · WAITING</strong>{/if}{/if}<span class="tick">tick {state.tick}</span><small>{state.ready?'connected':'loading game…'}{gamepadConnected?' · gamepad connected':''}</small>{#if state.lastCommand}<small class="command-status">{state.lastCommand}</small>{/if}{#if state.lifecycle?.finished}<div class="match-result"><strong>{state.lifecycle.playerIds.length===1?'GAME OVER':state.lifecycle.matchComplete?'MATCH COMPLETE':`ROUND ${state.lifecycle.round+1} COMPLETE`}</strong><button on:click={nextRound} disabled={state.lifecycle.readyPlayerIds.includes(state.playerId??'')}>{state.lifecycle.matchComplete?'PLAY AGAIN':'NEXT LEVEL'}</button><small>{state.lifecycle.readyPlayerIds.length}/{state.lifecycle.playerIds.length} ready</small></div>{/if}</section>
  <section class="dpad" aria-label="Movement controls">
    <button class="up" aria-label="Hard drop" title="Arrow Up" disabled={!controlsEnabled} on:pointerdown={()=>send({type:'input/hard-drop',payload:{}})}>↑</button>
    <button class="left" aria-label="Move left" title="Arrow Left" disabled={!controlsEnabled} on:pointerdown={()=>send({type:'input/move',payload:{dx:-1}})}>←</button>
    <button class:held={downHeld} class="down" aria-label="Accelerate down" title="Arrow Down" disabled={!controlsEnabled} on:pointerdown={pressDown} on:pointerup={releasePointerDown} on:pointercancel={releasePointerDown} on:lostpointercapture={releasePointerDown}>↓</button>
    <button class="right" aria-label="Move right" title="Arrow Right" disabled={!controlsEnabled} on:pointerdown={()=>send({type:'input/move',payload:{dx:1}})}>→</button>
  </section>
  <section class="rotations" aria-label="Rotation controls">
    <button aria-label="Rotate counterclockwise" title="T" disabled={!controlsEnabled} on:pointerdown={()=>send({type:'input/rotate',payload:{direction:'counterclockwise'}})}>↺</button>
    <button aria-label="Rotate clockwise" title="R" disabled={!controlsEnabled} on:pointerdown={()=>send({type:'input/rotate',payload:{direction:'clockwise'}})}>↻</button>
  </section>
  <div class="portrait-warning">Rotate your phone to landscape to use the controller.</div>
</main>{/if}</div>

<style>
  .controller-shell{min-height:100vh;padding:0 1rem;overflow:hidden}.controller-shell nav>span{font-weight:bold;color:var(--yellow)}
  .join{width:min(100%,520px);margin:auto;text-align:center;padding-top:5rem}.join form{display:grid;gap:1.2rem;text-align:left}.join form h1{font-size:1.4rem}.join form button{width:100%}.join>p:last-child{color:var(--muted);line-height:1.7}[role=alert]{color:var(--pink)}
  .landscape-controller{position:fixed;inset:0;background:radial-gradient(circle at 50% 50%,#24203a 0,transparent 45%),var(--bg);touch-action:none;user-select:none}
  .session{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:grid;text-align:center;gap:.2rem;color:var(--muted);text-transform:uppercase;font-size:.58rem}.session :global(.bottle){width:min(15vw,112px)}.session strong{color:var(--text);font-size:.8rem}.session .tick{color:var(--yellow);font-size:.8rem}
  .session .countdown{color:var(--yellow)}.session .result{color:var(--pink)}.match-result{position:fixed;inset:0;z-index:5;background:rgba(8,9,13,.9);display:grid;place-content:center;gap:1rem}.match-result strong{font-size:clamp(2rem,7vw,5rem);color:var(--yellow)}.match-result button{font-size:1rem}
  .controller-scoreboard{position:absolute;z-index:6;top:1rem;right:1rem;display:grid;gap:.25rem;text-align:right;text-transform:uppercase;font-size:.65rem;color:var(--muted)}.controller-scoreboard strong{color:var(--text)}.controller-scoreboard b,.controller-scoreboard small,.controller-scoreboard .you{color:var(--yellow)}.controller-scoreboard small{margin-left:.25rem}
  .dpad{position:absolute;left:max(1rem,4vw);bottom:max(1rem,5vh);width:clamp(190px,34vw,280px);height:clamp(145px,64vh,230px);display:grid;grid-template:repeat(2,1fr)/repeat(3,1fr);gap:.55rem}.dpad button,.rotations button{font-size:clamp(1.8rem,5vw,3rem);background:#292c38;color:var(--text);border:1px solid #4a4d60;box-shadow:4px 4px 0 var(--ink);padding:0}.dpad button:active,.rotations button:active,.dpad .held{background:var(--cyan);color:var(--ink);transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
  .up{grid-area:1/2}.left{grid-area:2/1}.down{grid-area:2/2}.right{grid-area:2/3}
  .rotations{position:absolute;right:max(1rem,4vw);bottom:max(1rem,5vh);display:grid;grid-template-columns:repeat(2,clamp(82px,14vw,130px));gap:1rem;height:clamp(90px,35vh,150px)}.rotations button:first-child{background:color-mix(in srgb,var(--pink),#292c38 45%)}.rotations button:last-child{background:color-mix(in srgb,var(--cyan),#292c38 45%)}
  .portrait-warning{display:none}
  @media(orientation:portrait){.session,.dpad,.rotations{display:none}.session:has(.match-result){display:grid}.portrait-warning{position:absolute;inset:0;display:grid;place-items:center;padding:2rem;text-align:center;font-weight:bold;color:var(--yellow)}.landscape-controller:has(.match-result) .portrait-warning{display:none}}
</style>

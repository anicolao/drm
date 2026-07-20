<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import Logo from '$lib/components/Logo.svelte';
  import PillBottle from '$lib/components/PillBottle.svelte';
  import GameAudio from '$lib/components/GameAudio.svelte';
  import { gravityTicksForState } from '$lib/game/pill-bottle';
  import { auth, firebaseConfigured } from '$lib/firebase/config';
  import { joinRoom, subscribeRoom, subscribeRoomPlayers, updatePlayerLevel, type RoomPlayer } from '$lib/firebase/rooms';
  import { createPillBottleController, type PillCommand, type ControllerState, type PlayerProgress } from '$lib/firebase/pill-bottle';
  import ControllerStatus from './ControllerStatus.svelte';
  import MatchResult from './MatchResult.svelte';
  import MatchStandings from './MatchStandings.svelte';
  import OpponentList from './OpponentList.svelte';
  import LevelPicker from './LevelPicker.svelte';
  import { gamepadLayoutMode,StandardGamepadControls, type GamepadControlAction } from '$lib/input/gamepad';
  import { HeldActionRepeater } from '$lib/input/held-repeat';
  import { commandForGamepadAction,commandForKey,HeldInputGate } from '$lib/runtime/core-input';

  let code=''; let joined=false; let joining=false; let needsName=false; let playerName=''; let error='';
  let roomId=''; let activeGameId=''; let controller: ReturnType<typeof createPillBottleController> | undefined;
  let writerLeaseStatus:'pending'|'owned'|'conflict'='pending';
  let roomUnsubscribe=()=>{}; let playersUnsubscribe=()=>{}; let players:RoomPlayer[]=[]; let state: ControllerState={tick:0,ready:false}; let downHeld=false;
  let gamepadFrame=0; let gamepadConnected=false; let gamepadName=''; let gamepadActive=false; let online=true; const gamepadControls=new StandardGamepadControls(); const dropSources=new Set<'pointer'|'keyboard'|'gamepad'>();
  let selectedLevel=0;
  const touchMoveRepeater=new HeldActionRepeater<-1|1>((dx)=>send({type:'input/move',payload:{dx}}));
  const hardDropKeys=new HeldInputGate<string>();
  $: controlsEnabled=Boolean(state.ready&&state.bottle?.phase==='playing'&&!state.lifecycle?.finished);
  $: standings=(state.lifecycle?.playerIds??[]).map((playerId,index)=>({
    playerId,
    name:players.find(player=>player.uid===playerId)?.displayName??(playerId===state.playerId?playerName:`Player ${index+1}`),
    score:state.lifecycle?.scores[playerId]??0,
    roundPoints:state.lifecycle?.roundPoints[playerId]??0
  })).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
  $: opponentDisplays=(state.opponents??[]).map((opponent,index)=>({
    ...opponent,
    name:players.find(player=>player.uid===opponent.playerId)?.displayName??`Player ${index+1}`,
    score:state.lifecycle?.scores[opponent.playerId]??0
  }));

  onMount(()=>{
    void initialize();
    gamepadFrame=requestAnimationFrame(pollGamepads);
    const release=()=>void releaseAllControls();
    const visibility=()=>{if(document.hidden){release();gamepadControls.reset();controller?.suspend();}else controller?.resume();};
    const pagehide=()=>{release();gamepadControls.reset();controller?.suspend();};
    const network=()=>online=navigator.onLine;network();
    window.addEventListener('blur',release);window.addEventListener('keydown',keyDown);window.addEventListener('keyup',keyUp);window.addEventListener('pagehide',pagehide);window.addEventListener('online',network);window.addEventListener('offline',network);document.addEventListener('visibilitychange',visibility);
    return()=>{cancelAnimationFrame(gamepadFrame);roomUnsubscribe();playersUnsubscribe();controller?.destroy();window.removeEventListener('blur',release);window.removeEventListener('keydown',keyDown);window.removeEventListener('keyup',keyUp);window.removeEventListener('pagehide',pagehide);window.removeEventListener('online',network);window.removeEventListener('offline',network);document.removeEventListener('visibilitychange',visibility);};
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
      playersUnsubscribe=subscribeRoomPlayers(room.id,next=>{players=next;selectedLevel=next.find(player=>player.uid===auth?.currentUser?.uid)?.level??selectedLevel},cause=>error=cause.message);
      if(room.activeGameId){if(room.ruleset==='tetris'){window.location.assign(`${base}/play?code=${code}`);return}startController(room.activeGameId);}
      roomUnsubscribe=subscribeRoom(room.id,(next)=>{if(next.activeGameId){if(next.ruleset==='tetris')window.location.assign(`${base}/play?code=${code}`);else startController(next.activeGameId);}},(cause)=>error=cause.message);
    }catch(cause){error=cause instanceof Error?cause.message:String(cause);}
    finally{joining=false;}
  }
  async function saveAndJoin(){
    const name=playerName.trim();if(!name||name.length>24){error='Player name must be between 1 and 24 characters.';return;}
    playerName=name;localStorage.setItem('drm-player-name',name);await performJoin();
  }
  function startController(gameId:string){
    if(controller&&activeGameId===gameId)return;controller?.destroy();activeGameId=gameId;state={tick:0,ready:false};error='';writerLeaseStatus='pending';
    controller=createPillBottleController(gameId,(next)=>{const leaseStatus=next.ownershipConflict?'conflict':next.ready?'owned':'pending';if(leaseStatus!=='pending'&&leaseStatus!==writerLeaseStatus){writerLeaseStatus=leaseStatus;window.dispatchEvent(new CustomEvent('drm:writer-lease',{detail:leaseStatus}))}const justFinished=!state.lifecycle?.finished&&next.lifecycle?.finished;if(justFinished&&next.bottle)selectedLevel=next.lifecycle?.matchComplete?next.bottle.level:Math.min(20,next.bottle.level+1);state=next;if(next.error)error=next.error;});
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
  function releaseAllControls(){touchMoveRepeater.stop();releaseAllDown();hardDropKeys.reset();}
  function pressMove(event:PointerEvent,dx:-1|1){
    gamepadActive=false;
    touchMoveRepeater.start(dx);
    try{(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);}catch{/* Pointer capture is optional. */}
  }
  function pressDown(event:PointerEvent){
    gamepadActive=false;
    beginDown('pointer');
    try{(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);}catch{/* Pointer capture is optional for synthetic and unsupported pointers. */}
  }
  function releasePointerDown(){endDown('pointer');}
  function gamepadAction(action:GamepadControlAction){
    if(action==='soft-drop-start')beginDown('gamepad');else if(action==='soft-drop-end')endDown('gamepad');else send(commandForGamepadAction(action));
  }
  function pollGamepads(now:number){
    const gamepads=typeof navigator.getGamepads==='function'?Array.from(navigator.getGamepads()):[];
    const active=gamepads.find(gamepad=>Boolean(gamepad?.connected));const connected=Boolean(active);
    if(connected!==gamepadConnected){gamepadConnected=connected;gamepadName=active?.id??'';}
    const actions=gamepadControls.sample(gamepads,now);
    gamepadActive=gamepadLayoutMode(gamepadActive,connected,actions);
    if(controlsEnabled)for(const action of actions)gamepadAction(action);
    else{gamepadControls.reset();endDown('gamepad');}
    gamepadFrame=requestAnimationFrame(pollGamepads);
  }
  function typingTarget(target:EventTarget|null){return target instanceof HTMLElement&&(target.matches('input,textarea,select')||target.isContentEditable);}
  function keyDown(event:KeyboardEvent){
    if(typingTarget(event.target))return;
    if(!controlsEnabled)return;
    if(event.key==='ArrowDown'){event.preventDefault();if(!event.repeat)beginDown('keyboard');return;}
    if(event.key==='ArrowUp'&&!hardDropKeys.press(event.key)){event.preventDefault();return;}
    const command=commandForKey(event) as PillCommand|undefined;
    if(command){event.preventDefault();send(command);}
  }
  function keyUp(event:KeyboardEvent){if(event.key==='ArrowUp')hardDropKeys.release(event.key);if(event.key==='ArrowDown'){event.preventDefault();endDown('keyboard');}}
  async function chooseLevel(level:number){selectedLevel=level;if(roomId)try{await updatePlayerLevel(roomId,level)}catch(cause){error=cause instanceof Error?cause.message:String(cause)}}
  async function nextRound(){try{await controller?.requestRematch(selectedLevel);}catch(cause){error=cause instanceof Error?cause.message:String(cause);}}
</script>

<div class="controller-shell"><nav><Logo compact/><span>{code||'NO ROOM'}</span></nav>
{#if needsName}<main class="join"><form class="card" on:submit|preventDefault={saveAndJoin}><p class="eyebrow">Joining room {code}</p><h1>WHAT SHOULD PLAYERS CALL YOU?</h1><label>Player name<input aria-label="Player name" maxlength="24" autocomplete="nickname" bind:value={playerName}/></label><button disabled={joining}>{joining?'Joining…':'Join room'}</button></form>{#if error}<p role="alert">{error}</p>{/if}</main>
{:else if error}<main class="join"><p class="eyebrow">Controller error</p><h1>{error}</h1>{#if state.ownershipConflict}<button on:click={()=>controller?.takeOver()}>Take over on this device</button>{/if}</main>
{:else if !joined}<main class="join"><p class="eyebrow">Joining room…</p></main>
{:else if !activeGameId}<main class="join"><p class="eyebrow">Joined room {code}</p><h1>WAITING FOR HOST</h1><p role="status">You are in. Choose your level while the host gets the game ready.</p><LevelPicker level={selectedLevel} change={chooseLevel}/><div class="control-guide compact"><span>← → MOVE</span><span>↓ SOFT DROP</span><span>↑ HARD DROP</span><span>A / R ↻</span><span>B / T ↺</span></div></main>
{:else}<main class="landscape-controller" class:gamepad-mode={gamepadActive} aria-label="Pill Bottle controller"><GameAudio state={state.bottle} enabled={state.audioOutput==='controllers'} rainSignal={state.rainSignal??0}/>
  {#if state.lifecycle&&state.lifecycle.playerIds.length>1}<aside class="controller-scoreboard" aria-label="Scores"><strong>ROUND {state.lifecycle.round+1}/3</strong>{#each standings as player}<span class:you={player.playerId===state.playerId}>{player.name} <b>{player.score}</b>{#if player.roundPoints>0}<small>+{player.roundPoints}</small>{/if}</span>{/each}</aside>{/if}
  <OpponentList opponents={opponentDisplays} label="Opponent boards" let:opponent><strong>{(opponent as PlayerProgress&{name:string}).name}</strong><PillBottle state={(opponent as PlayerProgress).state} label={`${(opponent as PlayerProgress&{name:string}).name} opponent bottle`} showPreview={false}/><span>{(opponent as PlayerProgress).state.viruses} viruses</span></OpponentList>
  <ControllerStatus {online} ready={state.ready} gamepadName={gamepadConnected?gamepadName:''} room={code}/>
  <section class="session"><strong>{playerName}</strong><span>room {code}</span>{#if state.bottle}<PillBottle state={state.bottle}/><span>{state.lifecycle?.playerIds.length===1?`level ${state.bottle.level}`:`round ${(state.lifecycle?.round??state.bottle.level)+1}/3`} · {state.bottle.viruses} viruses</span><span>speed {gravityTicksForState(state.bottle)} ticks · {state.bottle.pills} pills</span>{#if state.lifecycle?.terminalResults[state.playerId??'']==='cleared'}<strong class="countdown">LEVEL CLEAR</strong>{:else if state.bottle.phase==='lost'&&!state.lifecycle?.finished}<strong class="result">ELIMINATED · WAITING</strong>{/if}{/if}<span class="tick">tick {state.tick}</span>{#if state.lastCommand}<small class="command-status">{state.lastCommand}</small>{/if}</section>
  {#if state.lifecycle?.finished}<MatchResult title={state.lifecycle.playerIds.length===1?'GAME OVER':state.lifecycle.matchComplete?'MATCH COMPLETE':`ROUND ${state.lifecycle.round+1} COMPLETE`} action={state.lifecycle.matchComplete?'PLAY AGAIN':'NEXT LEVEL'} ready={state.lifecycle.readyPlayerIds.length} total={state.lifecycle.playerIds.length} disabled={state.lifecycle.readyPlayerIds.includes(state.playerId??'')} level={selectedLevel} changeLevel={(level)=>selectedLevel=level} activate={nextRound}>{#if state.lifecycle.matchComplete&&standings.length>1}<MatchStandings entries={standings}/>{/if}</MatchResult>{/if}
  {#if !gamepadActive}<section class="dpad" aria-label="Movement controls">
    <button class="up" aria-label="Hard drop" title="Arrow Up" disabled={!controlsEnabled} on:pointerdown={()=>send({type:'input/hard-drop',payload:{}})}>↑</button>
    <button class="left" aria-label="Move left" title="Arrow Left" disabled={!controlsEnabled} on:pointerdown={(event)=>pressMove(event,-1)} on:pointerup={()=>touchMoveRepeater.stop()} on:pointercancel={()=>touchMoveRepeater.stop()} on:lostpointercapture={()=>touchMoveRepeater.stop()}>←</button>
    <button class:held={downHeld} class="down" aria-label="Accelerate down" title="Arrow Down" disabled={!controlsEnabled} on:pointerdown={pressDown} on:pointerup={releasePointerDown} on:pointercancel={releasePointerDown} on:lostpointercapture={releasePointerDown}>↓</button>
    <button class="right" aria-label="Move right" title="Arrow Right" disabled={!controlsEnabled} on:pointerdown={(event)=>pressMove(event,1)} on:pointerup={()=>touchMoveRepeater.stop()} on:pointercancel={()=>touchMoveRepeater.stop()} on:lostpointercapture={()=>touchMoveRepeater.stop()}>→</button>
  </section>
  <section class="rotations" aria-label="Rotation controls">
    <button aria-label="Rotate counterclockwise" title="T" disabled={!controlsEnabled} on:pointerdown={()=>{gamepadActive=false;send({type:'input/rotate',payload:{direction:'counterclockwise'}})}}>↺</button>
    <button aria-label="Rotate clockwise" title="R" disabled={!controlsEnabled} on:pointerdown={()=>{gamepadActive=false;send({type:'input/rotate',payload:{direction:'clockwise'}})}}>↻</button>
  </section>
  <div class="control-guide" aria-label="Control hints"><span>STICK / D-PAD · MOVE</span><span>A · CLOCKWISE</span><span>B · COUNTER</span></div>{:else}<button class="input-mode-toggle" on:click={()=>gamepadActive=false}>SHOW TOUCH CONTROLS</button>{/if}
</main>{/if}</div>

<style>
  .controller-shell{min-height:100vh;padding:0 1rem;overflow:hidden}.controller-shell nav>span{font-weight:bold;color:var(--yellow)}
  .join{width:min(100%,520px);margin:auto;text-align:center;padding-top:5rem}.join form{display:grid;gap:1.2rem;text-align:left}.join form h1{font-size:1.4rem}.join form button{width:100%}.join>p:last-child{color:var(--muted);line-height:1.7}[role=alert]{color:var(--pink)}
  .landscape-controller{position:fixed;left:0;top:0;width:100vw;width:100dvw;height:100vh;height:100dvh;max-width:100vw;max-height:100vh;overflow:hidden;background:radial-gradient(circle at 50% 50%,#24203a 0,transparent 45%),var(--bg);touch-action:none;user-select:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
  .session{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:grid;text-align:center;justify-items:center;gap:min(.12rem,.35dvh);color:var(--muted);text-transform:uppercase;font-size:clamp(.4rem,1.25dvh,.55rem);max-height:100dvh}.session :global(.bottle-shell){width:min(22vw,45dvh,420px)}.session strong{color:var(--text);font-size:clamp(.52rem,1.6dvh,.75rem)}.session .tick{color:var(--yellow);font-size:clamp(.5rem,1.6dvh,.75rem)}
  .session .countdown{color:var(--yellow)}.session .result{color:var(--pink)}
  .controller-scoreboard{position:absolute;z-index:6;top:max(.5rem,env(safe-area-inset-top));right:max(.55rem,env(safe-area-inset-right));display:grid;gap:min(.25rem,.7dvh);max-width:24vw;text-align:right;text-transform:uppercase;font-size:clamp(.45rem,1.6dvh,.65rem);color:var(--muted)}.controller-scoreboard span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.controller-scoreboard strong{color:var(--text)}.controller-scoreboard b,.controller-scoreboard small,.controller-scoreboard .you{color:var(--yellow)}.controller-scoreboard small{margin-left:.25rem}
  .dpad{position:absolute;left:max(.55rem,4vw,env(safe-area-inset-left));bottom:max(.55rem,3dvh,env(safe-area-inset-bottom));width:min(34vw,68dvh,280px);height:min(58dvh,230px);display:grid;grid-template:repeat(2,1fr)/repeat(3,1fr);gap:min(.55rem,1.5dvh)}.dpad button,.rotations button{font-size:min(5vw,10dvh,3rem);background:#292c38;color:var(--text);border:1px solid #4a4d60;box-shadow:4px 4px 0 var(--ink);padding:0}.dpad button:active,.rotations button:active,.dpad .held{background:var(--cyan);color:var(--ink);transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
  .up{grid-area:1/2}.left{grid-area:2/1}.down{grid-area:2/2}.right{grid-area:2/3}
  .rotations{position:absolute;right:max(.55rem,4vw,env(safe-area-inset-right));bottom:max(.55rem,3dvh,env(safe-area-inset-bottom));display:grid;grid-template-columns:repeat(2,min(14vw,28dvh,130px));gap:min(1rem,2.5dvh);height:min(35dvh,150px)}.rotations button:first-child{background:color-mix(in srgb,var(--pink),#292c38 45%)}.rotations button:last-child{background:color-mix(in srgb,var(--cyan),#292c38 45%)}
  .control-guide{position:absolute;left:50%;bottom:.6rem;transform:translateX(-50%);display:flex;gap:.6rem;color:#7f8291;font-size:.5rem;white-space:nowrap}.control-guide.compact{position:static;transform:none;justify-content:center;flex-wrap:wrap;margin-top:1.5rem;color:var(--muted);font-size:.65rem;white-space:normal}.control-guide.compact span{border:1px solid #3c3f50;padding:.45rem}
  .input-mode-toggle{position:absolute;z-index:7;left:50%;bottom:max(.45rem,env(safe-area-inset-bottom));transform:translateX(-50%);padding:.4rem .65rem;border-color:#45495b;background:#171923;color:var(--muted);font-size:.48rem}.gamepad-mode .session :global(.bottle-shell){width:min(44vw,46dvh,420px)}
  @media(orientation:portrait){
    .session{top:max(3.4rem,calc(env(safe-area-inset-top) + 3rem));transform:translateX(-50%);gap:.1rem;max-height:61dvh}
    .session :global(.bottle-shell){width:min(58vw,29dvh,230px)}
    .controller-scoreboard{top:max(3.2rem,calc(env(safe-area-inset-top) + 2.7rem));max-width:25vw;font-size:.45rem}
    .dpad{left:max(.45rem,env(safe-area-inset-left));bottom:max(.65rem,env(safe-area-inset-bottom));width:min(52vw,220px);height:min(27dvh,220px);gap:.4rem}
    .rotations{right:max(.45rem,env(safe-area-inset-right));bottom:max(.65rem,env(safe-area-inset-bottom));grid-template-columns:repeat(2,min(20vw,82px));height:min(16dvh,125px);gap:.5rem}
    .dpad button,.rotations button{font-size:clamp(1.4rem,8vw,2.4rem)}
    .landscape-controller>.control-guide{display:none}
    .gamepad-mode .session{top:max(3.4rem,calc(env(safe-area-inset-top) + 3rem));max-height:90dvh}
    .gamepad-mode .session :global(.bottle-shell){width:min(68vw,36dvh,300px)}
    .gamepad-mode :global(.opponent){width:54px}
  }
  @media(max-height:430px){.landscape-controller>.control-guide{display:none}}
</style>

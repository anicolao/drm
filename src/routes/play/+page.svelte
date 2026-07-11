<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/Logo.svelte';
  import PillBottle from '$lib/components/PillBottle.svelte';
  import { firebaseConfigured } from '$lib/firebase/config';
  import { joinRoom, subscribeRoom } from '$lib/firebase/rooms';
  import { createPillBottleController, type PillCommand, type ControllerState } from '$lib/firebase/pill-bottle';

  let code=''; let joined=false; let joining=false; let needsName=false; let playerName=''; let error='';
  let roomId=''; let activeGameId=''; let controller: ReturnType<typeof createPillBottleController> | undefined;
  let roomUnsubscribe=()=>{}; let state: ControllerState={tick:0,ready:false}; let downHeld=false;

  onMount(()=>{
    void initialize();
    const release=()=>void releaseDown();
    const visibility=()=>{if(document.hidden)release();};
    window.addEventListener('blur',release);document.addEventListener('visibilitychange',visibility);
    return()=>{roomUnsubscribe();controller?.destroy();window.removeEventListener('blur',release);document.removeEventListener('visibilitychange',visibility);};
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
    if(controller||activeGameId===gameId)return;activeGameId=gameId;
    controller=createPillBottleController(gameId,(next)=>{state=next;if(next.error)error=next.error;});
  }
  function send(input:PillCommand){
    if(!state.ready)return;
    navigator.vibrate?.(12);void controller?.command(input).catch((cause)=>error=cause instanceof Error?cause.message:String(cause));
  }
  function pressDown(event:PointerEvent){
    if(downHeld)return;downHeld=true;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    send({type:'input/soft-drop-start',payload:{}});
  }
  function releaseDown(){if(!downHeld)return;downHeld=false;send({type:'input/soft-drop-end',payload:{}});}
</script>

<div class="controller-shell"><nav><Logo compact/><span>{code||'NO ROOM'}</span></nav>
{#if needsName}<main class="join"><form class="card" on:submit|preventDefault={saveAndJoin}><p class="eyebrow">Joining room {code}</p><h1>WHAT SHOULD PLAYERS CALL YOU?</h1><label>Player name<input aria-label="Player name" maxlength="24" autocomplete="nickname" bind:value={playerName}/></label><button disabled={joining}>{joining?'Joining…':'Join room'}</button></form>{#if error}<p role="alert">{error}</p>{/if}</main>
{:else if error}<main class="join"><p class="eyebrow">Controller error</p><h1>{error}</h1></main>
{:else if !joined}<main class="join"><p class="eyebrow">Joining room…</p></main>
{:else if !activeGameId}<main class="join"><p class="eyebrow">Joined room {code}</p><h1>WAITING FOR HOST</h1><p>The controller starts when the host publishes the game start record.</p></main>
{:else}<main class="landscape-controller" aria-label="Pill Bottle controller">
  <section class="session"><strong>{playerName}</strong><span>room {code}</span>{#if state.bottle}<PillBottle state={state.bottle}/><span>{state.bottle.viruses} viruses · {state.bottle.phase}</span>{/if}<span class="tick">tick {state.tick}</span><small>{state.ready?'connected':'loading game…'}</small>{#if state.lastCommand}<small class="command-status">{state.lastCommand}</small>{/if}</section>
  <section class="dpad" aria-label="Movement controls">
    <button class="up" aria-label="Hard drop" disabled={!state.ready} on:pointerdown={()=>send({type:'input/hard-drop',payload:{}})}>↑</button>
    <button class="left" aria-label="Move left" disabled={!state.ready} on:pointerdown={()=>send({type:'input/move',payload:{dx:-1}})}>←</button>
    <button class:held={downHeld} class="down" aria-label="Accelerate down" disabled={!state.ready} on:pointerdown={pressDown} on:pointerup={releaseDown} on:pointercancel={releaseDown} on:lostpointercapture={releaseDown}>↓</button>
    <button class="right" aria-label="Move right" disabled={!state.ready} on:pointerdown={()=>send({type:'input/move',payload:{dx:1}})}>→</button>
  </section>
  <section class="rotations" aria-label="Rotation controls">
    <button aria-label="Rotate counterclockwise" disabled={!state.ready} on:pointerdown={()=>send({type:'input/rotate',payload:{direction:'counterclockwise'}})}>↺</button>
    <button aria-label="Rotate clockwise" disabled={!state.ready} on:pointerdown={()=>send({type:'input/rotate',payload:{direction:'clockwise'}})}>↻</button>
  </section>
  <div class="portrait-warning">Rotate your phone to landscape to use the controller.</div>
</main>{/if}</div>

<style>
  .controller-shell{min-height:100vh;padding:0 1rem;overflow:hidden}.controller-shell nav>span{font-weight:bold;color:var(--yellow)}
  .join{width:min(100%,520px);margin:auto;text-align:center;padding-top:5rem}.join form{display:grid;gap:1.2rem;text-align:left}.join form h1{font-size:1.4rem}.join form button{width:100%}.join>p:last-child{color:var(--muted);line-height:1.7}[role=alert]{color:var(--pink)}
  .landscape-controller{position:fixed;inset:0;background:radial-gradient(circle at 50% 50%,#24203a 0,transparent 45%),var(--bg);touch-action:none;user-select:none}
  .session{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:grid;text-align:center;gap:.2rem;color:var(--muted);text-transform:uppercase;font-size:.58rem}.session :global(.bottle){width:min(15vw,112px)}.session strong{color:var(--text);font-size:.8rem}.session .tick{color:var(--yellow);font-size:.8rem}
  .dpad{position:absolute;left:max(1rem,4vw);bottom:max(1rem,5vh);width:clamp(190px,34vw,280px);height:clamp(145px,64vh,230px);display:grid;grid-template:repeat(2,1fr)/repeat(3,1fr);gap:.55rem}.dpad button,.rotations button{font-size:clamp(1.8rem,5vw,3rem);background:#292c38;color:var(--text);border:1px solid #4a4d60;box-shadow:4px 4px 0 var(--ink);padding:0}.dpad button:active,.rotations button:active,.dpad .held{background:var(--cyan);color:var(--ink);transform:translate(2px,2px);box-shadow:2px 2px 0 var(--ink)}
  .up{grid-area:1/2}.left{grid-area:2/1}.down{grid-area:2/2}.right{grid-area:2/3}
  .rotations{position:absolute;right:max(1rem,4vw);bottom:max(1rem,5vh);display:grid;grid-template-columns:repeat(2,clamp(82px,14vw,130px));gap:1rem;height:clamp(90px,35vh,150px)}.rotations button:first-child{background:color-mix(in srgb,var(--pink),#292c38 45%)}.rotations button:last-child{background:color-mix(in srgb,var(--cyan),#292c38 45%)}
  .portrait-warning{display:none}
  @media(orientation:portrait){.session,.dpad,.rotations{display:none}.portrait-warning{position:absolute;inset:0;display:grid;place-items:center;padding:2rem;text-align:center;font-weight:bold;color:var(--yellow)}}
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import QuarryBoard from "$lib/components/QuarryBoard.svelte";
  import QuarryAudio from "$lib/components/QuarryAudio.svelte";
  import CanopyAudio from "$lib/components/CanopyAudio.svelte";
  import ControllerStatus from "./ControllerStatus.svelte";
  import MatchResult from "./MatchResult.svelte";
  import MatchStandings from "./MatchStandings.svelte";
  import LevelPicker from "./LevelPicker.svelte";
  import OpponentList from "./OpponentList.svelte";
  import { auth, firebaseConfigured } from "$lib/firebase/config";
  import {
    joinRoom,
    subscribeRoom,
    subscribeRoomPlayers,
    updatePlayerLevel,
    type RoomPlayer,
  } from "$lib/firebase/rooms";
  import {
    createQuarryController,
    requestQuarryRematch,
    type QuarryControllerState,
    type QuarryProgress,
  } from "$lib/firebase/quarry-match";
  import type { QuarryInput } from "$lib/game/quarry-match";
  import { HeldActionRepeater } from "$lib/input/held-repeat";
  import {
    gamepadLayoutMode,
    OneShotGamepadButton,
    StandardGamepadControls,
    type GamepadControlAction,
  } from "$lib/input/gamepad";
  import { HeldInputGate } from "$lib/runtime/core-input";
  import { matchPuzzleColumnActions } from "$lib/input/match-puzzle";
  export let variant:'quarry'|'canopy'='quarry';
  let code = "",
    name = "",
    error = "",
    gameId = "",
    roomId = "",
    online = true,
    gamepadName = "",
    gamepadActive = false,
    cascadeCueSignal = 0,
    presentationComplete = true,
    selectedLevel = 0,
    roomPlayers: RoomPlayer[] = [];
  let controller: ReturnType<typeof createQuarryController> | undefined,
    state: QuarryControllerState = { tick: 0, ready: false },
    stopRoom = () => {},
    stopPlayers = () => {},
    gamepadFrame = 0;
  let audioPhase: "playing" | "cleared" = "playing";
  const gamepad = new StandardGamepadControls(),
    restartButton = new OneShotGamepadButton(),
    repeat = new HeldActionRepeater<-1 | 1>((dx) =>
      send({ type: "input/move", payload: { dx } }),
    ),
    fireGate = new HeldInputGate<string>();
  $: movementEnabled = Boolean(
    state.ready &&
    state.state?.phase === "playing" &&
    !state.lifecycle?.finished,
  );
  $: actionEnabled = movementEnabled && (variant === "canopy" || presentationComplete);
  $: audioPhase = state.state?.phase === "cleared" && presentationComplete ? "cleared" : "playing";
  $: standings = (state.lifecycle?.playerIds ?? [])
    .map((playerId, index) => ({
      playerId,
      name:
        roomPlayers.find((player) => player.uid === playerId)?.displayName ??
        (playerId === state.playerId ? name : `Player ${index + 1}`),
      score: state.lifecycle?.scores[playerId] ?? 0,
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  onMount(() => {
    online = navigator.onLine;
    void init();
    gamepadFrame = requestAnimationFrame(poll);
    const kd = (e: KeyboardEvent) => {
      if ((e.key === "ArrowUp" || e.key === " ") && !fireGate.press(e.key)) {
        e.preventDefault();
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        send({
          type: "input/move",
          payload: { dx: e.key === "ArrowLeft" ? -1 : 1 },
        });
      } else if (e.key === "ArrowUp" || e.key === " ") {
        e.preventDefault();
        send({ type: "input/fire", payload: {} });
      } else if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        restart();
      }
    };
    const ku = (e: KeyboardEvent) => fireGate.release(e.key),
      network = () => (online = navigator.onLine),
      release = () => fireGate.reset(),
      visibility = () => {
        if (document.hidden) {
          release();
          controller?.suspend();
        } else controller?.resume();
      };
    window.addEventListener("blur", release);
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);
    window.addEventListener("online", network);
    window.addEventListener("offline", network);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelAnimationFrame(gamepadFrame);
      stopRoom();
      stopPlayers();
      controller?.destroy();
      window.removeEventListener("blur", release);
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
      window.removeEventListener("online", network);
      window.removeEventListener("offline", network);
      document.removeEventListener("visibilitychange", visibility);
    };
  });
  async function init() {
    code = new URL(location.href).searchParams.get("code")?.toUpperCase() ?? "";
    if (!firebaseConfigured) {
      error = "Firebase configuration is required.";
      return;
    }
    name = localStorage.getItem("drm-player-name") ?? "";
    try {
      const room = await joinRoom(code, name);
      roomId = room.id;
      stopPlayers = subscribeRoomPlayers(
        room.id,
        (players) => {
          roomPlayers = players;
          selectedLevel =
            players.find((player) => player.uid === auth?.currentUser?.uid)
              ?.level ?? selectedLevel;
        },
        (e) => (error = e.message),
      );
      if (room.activeGameId) start(room.activeGameId);
      stopRoom = subscribeRoom(
        room.id,
        (next) => {
          if (next.activeGameId) start(next.activeGameId);
        },
        (e) => (error = e.message),
      );
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    }
  }
  function start(id: string) {
    if (id === gameId) return;
    gameId = id;
    error = "";
    controller?.destroy();
    controller = createQuarryController(id, (next) => {
      if (next.state && state.state && next.state.cascades > state.state.cascades && next.state.lastCascadeWaves.length)
        presentationComplete = false;
      state = next;
      if (next.error) error = next.error;
    });
  }
  function send(input: QuarryInput) {
    if (input.type === "input/move" ? movementEnabled : actionEnabled)
      controller?.command(input);
  }
  function moveToColumn(column:number,fire=false){
    if(!movementEnabled||!state.state)return;
    for(const input of matchPuzzleColumnActions(state.state.cursor,column,fire))send(input);
  }
  function gamepadInput(action: GamepadControlAction) {
    gamepadActive = true;
    if(action==="jump-left"||action==="jump-right")moveToColumn(action==="jump-left"?0:4);
    else if (action === "move-left" || action === "move-right")
      send({
        type: "input/move",
        payload: { dx: action === "move-left" ? -1 : 1 },
      });
    else if (
      action === "hard-drop" ||
      action === "rotate-clockwise" ||
      action === "rotate-counterclockwise"
    )
      send({ type: "input/fire", payload: {} });
  }
  function poll(now: number) {
    const pads =
        typeof navigator.getGamepads === "function"
          ? Array.from(navigator.getGamepads())
          : [],
      active = pads.find((p) => p?.connected),
      actions = gamepad.sample(pads, now);
    gamepadName = active?.id ?? "";
    gamepadActive = gamepadLayoutMode(gamepadActive, Boolean(active), actions);
    if (movementEnabled) {
      if (restartButton.sample(pads)) restart(false);
      for (const action of actions) gamepadInput(action);
    } else {
      gamepad.reset();
      restartButton.reset();
    }
    gamepadFrame = requestAnimationFrame(poll);
  }
  function restart(confirmFirst = true) {
    if (
      !confirmFirst ||
      confirm("Restart this puzzle? Your opponents will continue racing.")
    )
      send({ type: "input/restart", payload: {} });
  }
  async function chooseLevel(level: number) {
    selectedLevel = level;
    if (roomId)
      await updatePlayerLevel(roomId, level).catch(
        (e) => (error = e instanceof Error ? e.message : String(e)),
      );
  }
  async function nextRound() {
    if (gameId)
      await requestQuarryRematch(gameId, selectedLevel).catch(
        (e) => (error = e instanceof Error ? e.message : String(e)),
      );
  }
</script>

{#if error}<main class="join">
    <h1 role="alert">{error}</h1>
    {#if state.ownershipConflict}<button on:click={() => controller?.takeOver()}
        >Take over on this device</button
      >{/if}
  </main>{:else if !state.state}<main class="join">
    <h1>WAITING FOR THE {variant==='canopy'?'CANOPY':'QUARRY'}…</h1>
    <LevelPicker level={selectedLevel} change={chooseLevel} />
  </main>{:else}<main
    class="controller"
    class:gamepad-mode={gamepadActive}
    aria-label={variant==='canopy'?'Crystal Canopy controller':'Quarry Match controller'}
  >
    {#if variant==='canopy'}<CanopyAudio enabled={state.audioOutput === "controllers"} phase={state.state.phase} shotSignal={state.state.removed} tripleSignal={state.state.groups} resetSignal={state.state.restarts}/>{:else}<QuarryAudio
      enabled={state.audioOutput === "controllers"}
      phase={audioPhase}
      cascadeSignal={cascadeCueSignal}
      resetSignal={state.state.restarts}
    />{/if}<ControllerStatus
      {online}
      ready={state.ready}
      {gamepadName}
      room={code}
    />
    <section class="game">
      <strong>{name}</strong><QuarryBoard state={state.state} label={variant==='canopy'?'Crystal Canopy board':'Quarry Match board'} selectColumn={(column)=>moveToColumn(column,true)} onCascadeCue={()=>cascadeCueSignal++} onPresentationChange={(complete)=>presentationComplete=complete}/><span
        >LEVEL {state.state.level} · {state.state.total - state.state.removed} STONES</span
      ><span
        >GROUP {state.state.groupCount}/3 · RESTARTS {state.state
          .restarts}</span
      ><span class="tick">TICK {state.tick}</span>{#if state.lastCommand}<small
          class="command-status">{state.lastCommand}</small
        >{/if}
    </section>
    <OpponentList opponents={state.opponents ?? []} let:opponent
      ><QuarryBoard
        state={(opponent as QuarryProgress).state}
        label={variant==='canopy'?"Opponent Crystal Canopy board":"Opponent Quarry Match board"}
        compact
      /><small>{(opponent as QuarryProgress).state.total - (opponent as QuarryProgress).state.removed} LEFT</small
      ></OpponentList
    >{#if state.lifecycle?.finished && presentationComplete}<MatchResult
        title={state.lifecycle.winnerId === state.playerId
          ? "ROUND WIN"
          : state.lifecycle.matchComplete
            ? "MATCH COMPLETE"
            : "ROUND COMPLETE"}
        action={state.lifecycle.matchComplete ? "PLAY AGAIN" : "NEXT ROUND"}
        ready={state.lifecycle.readyPlayerIds.length}
        total={state.lifecycle.playerIds.length}
        disabled={state.lifecycle.readyPlayerIds.includes(state.playerId ?? "")}
        level={selectedLevel}
        changeLevel={(level) => (selectedLevel = level)}
        activate={nextRound}
        >{#if state.lifecycle.matchComplete && standings.length > 1}<MatchStandings
            entries={standings}
          />{/if}</MatchResult
      >{/if}{#if !gamepadActive}<section class="controls">
        <button
          aria-label="Move left"
          disabled={!movementEnabled}
          on:pointerdown={() => repeat.start(-1)}
          on:pointerup={() => repeat.stop()}
          on:pointercancel={() => repeat.stop()}>←</button
        ><button
          class="fire"
          aria-label="Fire"
          disabled={!actionEnabled}
          on:pointerdown={() => send({ type: "input/fire", payload: {} })}
          >FIRE</button
        ><button
          aria-label="Move right"
          disabled={!movementEnabled}
          on:pointerdown={() => repeat.start(1)}
          on:pointerup={() => repeat.stop()}
          on:pointercancel={() => repeat.stop()}>→</button
        >
      </section>
      {:else}<button
        class="input-mode-toggle"
        on:click={() => (gamepadActive = false)}>SHOW TOUCH CONTROLS</button
      >{/if}<button class="restart" disabled={!actionEnabled} on:click={() => restart()}
      >RESTART · X</button>
  </main>{/if}

<style>
  .join {
    width: min(520px, calc(100% - 2rem));
    margin: 5rem auto;
  }
  .controller {
    position: fixed;
    inset: 0;
    overflow: hidden;
    background: radial-gradient(circle, #24213b, transparent 58%), var(--bg);
    touch-action: none;
  }
  .game {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    justify-items: center;
    gap: 0.12rem;
    font-size: clamp(0.42rem, 1.25dvh, 0.58rem);
    color: var(--muted);
  }
  .game :global(.quarry-shell) {
    width: min(32vw, 28dvh, 430px);
  }
  .tick {
    color: var(--yellow);
  }
  .controls {
    position: absolute;
    left: 3vw;
    right: 3vw;
    bottom: 3dvh;
    display: grid;
    grid-template-columns: 1fr 1.15fr 1fr;
    gap: 1rem;
  }
  .controls button {
    height: min(22dvh, 130px);
    font-size: 2rem;
    background: #292c38;
  }
  .controls .fire {
    color: var(--yellow);
    font-size: 1.2rem;
  }
  .restart {
    position: absolute;
    right: 1rem;
    top: 3.2rem;
    padding: 0.35rem 0.5rem;
    background: #171923;
    color: var(--muted);
    font-size: 0.5rem;
  }
  .input-mode-toggle {
    position: absolute;
    left: 50%;
    bottom: 0.5rem;
    transform: translateX(-50%);
    font-size: 0.5rem;
  }
  .gamepad-mode .game :global(.quarry-shell) {
    width: min(58vw, 32dvh, 500px);
  }
  @media (orientation: portrait) {
    .game {
      top: max(3.2rem, calc(env(safe-area-inset-top) + 3rem));
      transform: translateX(-50%);
    }
    .game :global(.quarry-shell) {
      width: min(60vw, 25dvh, 330px);
    }
    .controls {
      bottom: 0.7rem;
      gap: 0.5rem;
    }
    .controls button {
      height: 18dvh;
    }
    .gamepad-mode .game :global(.quarry-shell) {
      width: min(82vw, 34dvh, 430px);
    }
  }
</style>

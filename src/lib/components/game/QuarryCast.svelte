<script lang="ts">
  import { onMount } from "svelte";
  import QuarryBoard from "$lib/components/QuarryBoard.svelte";
  import QuarryAudio from "$lib/components/QuarryAudio.svelte";
  import CanopyAudio from "$lib/components/CanopyAudio.svelte";
  import {
    getRoom,
    subscribeRoomPlayers,
    type RoomPlayer,
  } from "$lib/firebase/rooms";
  import {
    getQuarryStart,
    subscribeQuarryLifecycle,
    subscribeQuarryProgress,
    type QuarryLifecycle,
    type QuarryProgress,
  } from "$lib/firebase/quarry-match";
  import { LagIndicator } from "$lib/presentation/lag";
  import CastPlayerFrame from "./CastPlayerFrame.svelte";
  import MatchResult from "./MatchResult.svelte";
  import MatchStandings from "./MatchStandings.svelte";
  export let variant:'quarry'|'canopy'='quarry';
  type Display = QuarryProgress & { displayLag?: number };
  let code = "",
    error = "",
    players: RoomPlayer[] = [],
    progress: Display[] = [],
    lifecycle: QuarryLifecycle | undefined,
    phase: "playing" | "cleared" = "playing",
    cascadeSignal = 0,
    shotSignal = 0,
    tripleSignal = 0,
    resetSignal = 0,
    audioEnabled = false,
    presentingPlayers = new Set<string>();
  const lag = new LagIndicator();
  let stop = () => {},
    stopPlayers = () => {},
    stopLife = () => {};
  let audioPhase: "playing" | "cleared" = "playing";
  onMount(() => {
    void load();
    return () => {
      stop();
      stopPlayers();
      stopLife();
    };
  });
  async function load() {
    try {
      code = new URL(location.href).searchParams.get("code") ?? "";
      const room = await getRoom(code);
      stopPlayers = subscribeRoomPlayers(
        room.id,
        (p) => (players = p),
        (e) => (error = e.message),
      );
      if (!room.activeGameId) throw new Error("Waiting for a game.");
      audioEnabled =
        (await getQuarryStart(room.activeGameId)).audioOutput === "cast";
      stop = subscribeQuarryProgress(
        room.activeGameId,
        receiveProgress,
        (e) => (error = e.message),
      );
      stopLife = subscribeQuarryLifecycle(
        room.activeGameId,
        (l) => (lifecycle = l),
        (e) => (error = e.message),
      );
    } catch (e) {
      error = e instanceof Error ? e.message : String(e);
    }
  }
  function name(id: string) {
    return players.find((p) => p.uid === id)?.displayName ?? "Player";
  }
  function receiveProgress(next: QuarryProgress[]) {
    const previous = new Map(progress.map((player) => [player.playerId, player.state.cascades])),
      presenting = new Set(presentingPlayers);
    for (const player of next)
      if (
        previous.has(player.playerId) &&
        player.state.cascades > (previous.get(player.playerId) ?? 0) &&
        player.state.lastCascadeWaves.length
      )
        presenting.add(player.playerId);
    presentingPlayers = presenting;
    progress = next.map((entry) => ({
      ...entry,
      displayLag: lag.sample(entry.playerId, entry.lag, performance.now()),
    }));
  }
  function presentationChanged(playerId: string, complete: boolean) {
    const next = new Set(presentingPlayers);
    if (complete) next.delete(playerId);
    else next.add(playerId);
    presentingPlayers = next;
  }
  $: standings = (lifecycle?.playerIds ?? [])
    .map((playerId) => ({
      playerId,
      name: name(playerId),
      score: lifecycle?.scores[playerId] ?? 0,
    }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  $: phase = progress.some((player) => player.state.phase === "cleared")
    ? "cleared"
    : "playing";
  $: audioPhase = phase === "cleared" && presentingPlayers.size === 0 ? "cleared" : "playing";
  $: resetSignal = progress.reduce((total, player) => total + player.state.restarts, 0);
  $: shotSignal = progress.reduce((total, player) => total + player.state.removed, 0);
  $: tripleSignal = progress.reduce((total, player) => total + player.state.groups, 0);
</script>

{#if variant==='canopy'}<CanopyAudio enabled={audioEnabled} {phase} {shotSignal} {tripleSignal} {resetSignal}/>{:else}<QuarryAudio enabled={audioEnabled} phase={audioPhase} {cascadeSignal} {resetSignal} />{/if}
<main>
  <header>{variant==='canopy'?'CRYSTAL CANOPY':'QUARRY MATCH'} · ROOM {code}</header>
  {#if error}<h1 role="alert">{error}</h1>{:else}<section>
      {#each progress as player}<CastPlayerFrame
          name={name(player.playerId)}
          lost={false}
          lag={player.displayLag}
          hashMatches={player.hashMatches}
          ><QuarryBoard state={player.state} label={variant==='canopy'?'Crystal Canopy board':'Quarry Match board'} onCascadeCue={()=>cascadeSignal++} onPresentationChange={(complete)=>presentationChanged(player.playerId,complete)}/>
          <p>
            {player.state.total - player.state.removed} STONES · GROUP {player.state
              .groupCount}/3
          </p>
          <p>
            ROUND WINS {lifecycle?.scores[player.playerId] ?? 0}
          </p></CastPlayerFrame
        >{/each}
    </section>
    {#if lifecycle?.finished && presentingPlayers.size===0}<MatchResult
        title={lifecycle.matchComplete
          ? `${name(lifecycle.winnerId ?? "")} WINS THE MATCH`
          : `${name(lifecycle.winnerId ?? "")} WINS THE ROUND`}
        interactive={false}
        ready={lifecycle.readyPlayerIds.length}
        total={lifecycle.playerIds.length}
        >{#if lifecycle.matchComplete && standings.length > 1}<MatchStandings
            entries={standings}
          />{/if}</MatchResult
      >{/if}{/if}
</main>

<style>
  main {
    min-height: 100vh;
    padding: 1rem 2vw;
  }
  header {
    border-bottom: 1px solid #343746;
    padding-bottom: 0.5rem;
    color: var(--yellow);
  }
  section {
    min-height: 88dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.75rem, 3vw, 3rem);
    flex-wrap: wrap;
  }
  section :global(article) {
    min-width: 120px;
  }
  section :global(article .quarry-shell) {
    width: min(22vw, 31dvh, 430px);
  }
  p {
    margin: 0.25rem;
    font-size: 0.65rem;
    color: var(--muted);
  }
</style>

import {
  get,
  onChildAdded,
  onValue,
  push,
  ref,
  runTransaction,
  serverTimestamp,
  set,
  type Unsubscribe,
} from "firebase/database";
import { auth, realtimeDatabase } from "./config";
import {
  advanceQuarry,
  applyQuarryInput,
  createQuarry,
  deriveQuarryLifecycle,
  hashQuarry,
  replayQuarry,
  QUARRY_RULES,
  type QuarryInput,
  type QuarryLifecycleState,
  type QuarryRecord,
  type QuarryState,
} from "$lib/game/quarry-match";
import {
  advanceCanopy,
  applyCanopyInput,
  createCanopy,
  hashCanopy,
  replayCanopy,
} from "$lib/game/crystal-canopy";
import { FixedTickClock } from "$lib/runtime/fixed-tick-clock";
import { ReplayObserver } from "$lib/runtime/replay-observer";
import {
  controllerStorageKey,
  loadStoredArray,
  saveStoredArray,
} from "$lib/runtime/local-store";
import { DurableOutbox } from "$lib/runtime/durable-outbox";
import { WriterLease } from "$lib/runtime/writer-lease";
import { requestRematchReady, startRematch } from "$lib/runtime/rematch";
import {
  parseQuarryRecord,
  parseQuarryStart,
  type QuarryStartRecord,
} from "$lib/protocol/quarry-match";

export type QuarryLifecycle = QuarryLifecycleState;
export interface QuarryProgress {
  playerId: string;
  tick: number;
  controllerTick?: number;
  lag?: number;
  state: QuarryState;
  hashMatches: boolean;
}
export interface QuarryControllerState {
  playerId?: string;
  tick: number;
  ready: boolean;
  state?: QuarryState;
  lifecycle?: QuarryLifecycle;
  audioOutput?: "cast" | "controllers";
  error?: string;
  lastCommand?: string;
  ownershipConflict?: boolean;
  opponents?: QuarryProgress[];
}
const parseStart = parseQuarryStart,
  parseRecord = parseQuarryRecord;
const isCanopy=(value:{rulesVersion:string})=>value.rulesVersion==='crystal-canopy/1';
const createPuzzle=(start:QuarryStartRecord,level:number)=>isCanopy(start)?createCanopy(start.seed,level):createQuarry(start.seed,level,start.rulesVersion as "quarry-match/2"|"quarry-match/3");
const advancePuzzle=(state:QuarryState)=>isCanopy(state)?advanceCanopy(state):advanceQuarry(state);
const applyPuzzle=(state:QuarryState,input:QuarryInput,seed:number)=>isCanopy(state)?applyCanopyInput(state,input,seed):applyQuarryInput(state,input,seed);
const hashPuzzle=(state:QuarryState)=>isCanopy(state)?hashCanopy(state):hashQuarry(state);
const replayPuzzle=(initial:QuarryState,target:number,records:QuarryRecord[],seed:number)=>isCanopy(initial)?replayCanopy(initial,target,records,seed):replayQuarry(initial,target,records,seed);
export async function getQuarryStart(gameId: string) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  return parseStart(
    (await get(ref(realtimeDatabase, `games/${gameId}/start`))).val(),
  );
}

export function subscribeQuarryLifecycle(
  gameId: string,
  receive: (value: QuarryLifecycle) => void,
  fail: (e: Error) => void,
) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  let start: QuarryStartRecord | undefined,
    winnerId: string | undefined,
    readyIds: string[] = [];
  const stops: Unsubscribe[] = [];
  const publish = () => {
    if (!start) return;
    receive(
      deriveQuarryLifecycle(
        Object.keys(start.players),
        start.scores ?? {},
        winnerId,
        readyIds,
        start.round,
        start.settings.targetWins,
      ),
    );
  };
  void get(ref(realtimeDatabase, `games/${gameId}/start`))
    .then((s) => {
      start = parseStart(s.val());
      stops.push(
        onValue(
          ref(realtimeDatabase!, `games/${gameId}/winner`),
          (snap) => {
            const value = snap.val();
            winnerId =
              value && Object.hasOwn(start!.players, value.playerId)
                ? value.playerId
                : undefined;
            publish();
          },
          fail,
        ),
        onValue(
          ref(realtimeDatabase!, `games/${gameId}/rematch/ready`),
          (snap) => {
            readyIds = [];
            snap.forEach((child) => {
              if (
                child.val()?.playerId === child.key &&
                Object.hasOwn(start!.players, child.key!)
              )
                readyIds.push(child.key!);
            });
            publish();
          },
          fail,
        ),
      );
      publish();
    })
    .catch((e) => fail(e instanceof Error ? e : new Error(String(e))));
  return () => stops.forEach((stop) => stop());
}
export const requestQuarryRematch = (gameId: string, level: number) =>
  requestRematchReady(gameId, level);
export async function startQuarryRematch(gameId: string) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  const [startSnap, winnerSnap] = await Promise.all([
    get(ref(realtimeDatabase, `games/${gameId}/start`)),
    get(ref(realtimeDatabase, `games/${gameId}/winner`)),
  ]);
  const start = parseStart(startSnap.val()),
    winnerId = winnerSnap.val()?.playerId as string | undefined;
  return startRematch(gameId, parseStart, (current) => {
    const scores = Object.fromEntries(
      Object.keys(current.players).map((id) => [
        id,
        (current.scores?.[id] ?? 0) + (id === winnerId ? 1 : 0),
      ]),
    );
    const complete = Boolean(
      winnerId && scores[winnerId] >= current.settings.targetWins,
    );
    return {
      advance: !complete,
      scores: complete
        ? Object.fromEntries(Object.keys(current.players).map((id) => [id, 0]))
        : scores,
    };
  });
}

export function createQuarryController(
  gameId: string,
  receive: (state: QuarryControllerState) => void,
) {
  if (!auth?.currentUser || !realtimeDatabase)
    throw new Error("Firebase unavailable.");
  const playerId = auth.currentUser.uid,
    clock = new FixedTickClock(QUARRY_RULES.tickRate),
    storageKey = controllerStorageKey("quarry", gameId, playerId, "outbox");
  let state: QuarryState | undefined,
    start: QuarryStartRecord | undefined,
    tick = 0,
    seq = 0,
    ready = false,
    destroyed = false,
    suspended = false,
    rematchStarting = false,
    frame = 0,
    lastProgress = -1,
    lastCommand: string | undefined,
    audioOutput: "cast" | "controllers" | undefined,
    lifecycle: QuarryLifecycle | undefined,
    ownershipConflict = false,
    opponents: QuarryProgress[] = [];
  let stopOpponents = () => {}, stopInteractions = () => {};
  const appliedAttacks = new Set<string>();
  const initialOutbox = loadStoredArray(localStorage, storageKey, (value) => {
    if (
      !value ||
      typeof value !== "object" ||
      typeof (value as { commandId?: unknown }).commandId !== "string"
    )
      throw new Error("Invalid Quarry Match outbox.");
    const { commandId, ...record } = value as QuarryRecord;
    return parseRecord(commandId, record, true);
  });
  const publish = (error?: string) =>
    receive({
      playerId,
      tick,
      ready,
      state: state ? structuredClone(state) : undefined,
      lifecycle,
      audioOutput,
      error,
      lastCommand,
      ownershipConflict,
      opponents: opponents.map((p) => ({
        ...p,
        state: structuredClone(p.state),
      })),
    });
  const lease = new WriterLease(
    realtimeDatabase,
    `games/${gameId}/players/${playerId}/writer`,
    () => {
      ownershipConflict = true;
      ready = false;
      cancelAnimationFrame(frame);
      publish("This controller was taken over by another tab.");
    },
  );
  const stopLife = subscribeQuarryLifecycle(
    gameId,
    (next) => {
      lifecycle = next;
      if (next.finished) cancelAnimationFrame(frame);
      if (next.allReady && !rematchStarting) {
        rematchStarting = true;
        void startQuarryRematch(gameId).catch((e) => {
          rematchStarting = false;
          publish(e instanceof Error ? e.message : String(e));
        });
      }
      publish();
    },
    (e) => publish(e.message),
  );
  const outbox = new DurableOutbox<QuarryRecord>({
    initial: initialOutbox,
    order: (a, b) => a.clientSeq - b.clientSeq,
    identify: (item) => item.commandId,
    persist: (items) => saveStoredArray(localStorage, storageKey, items),
    deliver: async (record) => {
      if (!ready) throw new Error("Controller is not ready.");
      const { commandId, ...data } = record;
      await set(
        ref(
          realtimeDatabase!,
          `games/${gameId}/players/${playerId}/records/${commandId}`,
        ),
        { ...data, serverTime: serverTimestamp() },
      );
    },
    failed: (e) => publish(e instanceof Error ? e.message : String(e)),
  });
  const write = (
    input:
      | QuarryInput
      | {
          type: "progress/tick";
          payload: { phase: "playing" | "cleared"; stateHash: string };
        },
  ) => {
    const item = push(
      ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`),
    );
    const record = {
      commandId: item.key!,
      playerId,
      epochId: lease.epochId,
      clientSeq: ++seq,
      tick,
      ...input,
    } as QuarryRecord;
    outbox.enqueue(record);
    return record;
  };
  const progress = (force = false) => {
    if (!state || (!force && tick - lastProgress < 15)) return;
    write({
      type: "progress/tick",
      payload: { phase: state.phase, stateHash: hashPuzzle(state) },
    });
    lastProgress = tick;
  };
  const claimWinner = () => {
    if (!state || state.phase !== "cleared") return;
    void runTransaction(
      ref(realtimeDatabase!, `games/${gameId}/winner`),
      (current) =>
        current === null
          ? {
              playerId,
              tick: state!.tick,
              stateHash: hashPuzzle(state!),
              serverTime: serverTimestamp(),
            }
          : undefined,
      { applyLocally: false },
    ).catch((e) => publish(e.message));
  };
  const loop = (now: number) => {
    if (
      destroyed ||
      suspended ||
      !ready ||
      !state ||
      state.phase === "cleared" ||
      lifecycle?.finished
    )
      return;
    for (let ticks = clock.consume(now); ticks > 0; ticks--) {
      advancePuzzle(state);
      tick = state.tick;
    }
    progress();
    publish();
    frame = requestAnimationFrame(loop);
  };
  const stopStart = onValue(
    ref(realtimeDatabase, `games/${gameId}/start`),
    async (snap) => {
      if (ready) return;
      try {
        start = parseStart(snap.val());
        if (!start.players[playerId])
          throw new Error("Player is not part of this Quarry Match game.");
        audioOutput = start.audioOutput;
        if (!(await lease.claim())) {
          ownershipConflict = true;
          throw new Error("This controller is already active in another tab.");
        }
        ownershipConflict = false;
        stopOpponents();
        stopOpponents = subscribeQuarryProgress(
          gameId,
          (next) => {
            opponents = next.filter((p) => p.playerId !== playerId);
            publish();
          },
          (e) => publish(e.message),
        );
        const history = await get(
            ref(
              realtimeDatabase!,
              `games/${gameId}/players/${playerId}/records`,
            ),
          ),
          byId = new Map<string, QuarryRecord>();
        history.forEach((child) => {
          const record = parseRecord(child.key!, child.val());
          byId.set(record.commandId, record);
          if (record.type === "attack/rain") appliedAttacks.add(record.payload.attackId);
        });
        for (const record of outbox.values())
          byId.set(record.commandId, record);
        const records = [...byId.values()].sort(
          (a, b) => a.clientSeq - b.clientSeq,
        );
        state = replayPuzzle(
          createPuzzle(start, start.players[playerId].level),
          Math.max(0, ...records.map((r) => r.tick)),
          records,
          start.seed,
        );
        tick = state.tick;
        seq = Math.max(0, ...records.map((r) => r.clientSeq));
        await set(
          ref(
            realtimeDatabase!,
            `games/${gameId}/players/${playerId}/epochs/${lease.epochId}`,
          ),
          {
            clientId: lease.clientId,
            startedFromTick: tick,
            startedFromCommandSeq: seq,
            serverTime: serverTimestamp(),
          },
        );
        ready = true;
        stopInteractions();
        stopInteractions = onChildAdded(
          ref(realtimeDatabase!, `games/${gameId}/interactions`),
          (child) => {
            const value = child.val() as {
              type?: string;
              attackId?: string;
              targetPlayerIds?: string[];
            };
            if (
              isCanopy(start!) ||
              value?.type !== "attack/generated" ||
              !value.attackId ||
              !value.targetPlayerIds?.includes(playerId) ||
              appliedAttacks.has(value.attackId)
            )
              return;
            appliedAttacks.add(value.attackId);
          },
          (e) => publish(e.message),
        );
        void outbox.flush();
        progress(true);
        publish();
        if (state.phase === "cleared") claimWinner();
        else frame = requestAnimationFrame(loop);
      } catch (e) {
        publish(e instanceof Error ? e.message : String(e));
      }
    },
    (e) => publish(e.message),
  );
  const online = () => void outbox.flush();
  window.addEventListener("online", online);
  return {
    command(input: QuarryInput) {
      if (!ready || !state || state.phase !== "playing" || !start) return;
      if (
        input.type === "input/fire" &&
        (!(isCanopy(state)?state.columns[state.cursor].at(-1):state.columns[state.cursor][0]) ||
          (state.groupColor &&
            (isCanopy(state)?state.columns[state.cursor].at(-1):state.columns[state.cursor][0]) !== state.groupColor))
      )
        return;
      write(input);
      const cascade = applyPuzzle(state, input, start.seed);
      void cascade;
      tick = state.tick;
      lastCommand = `${input.type} · tick ${tick}`;
      if ((state as QuarryState).phase === "cleared") {
        progress(true);
        claimWinner();
      }
      publish();
    },
    suspend() {
      if (!ready || suspended) return;
      suspended = true;
      cancelAnimationFrame(frame);
      clock.reset();
      progress(true);
    },
    resume() {
      if (!ready || !suspended) return;
      suspended = false;
      clock.reset();
      frame = requestAnimationFrame(loop);
    },
    async takeOver() {
      if (await lease.takeOver()) {
        ownershipConflict = false;
        ready = true;
        suspended = false;
        void outbox.flush();
        frame = requestAnimationFrame(loop);
        publish();
      }
    },
    destroy() {
      progress(true);
      destroyed = true;
      stopStart();
      stopLife();
      stopOpponents();
      stopInteractions();
      cancelAnimationFrame(frame);
      window.removeEventListener("online", online);
      outbox.destroy();
      void lease.release();
    },
  };
}

export function subscribeQuarryProgress(
  gameId: string,
  receive: (p: QuarryProgress[]) => void,
  fail: (e: Error) => void,
) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  let destroyed = false,
    frame = 0,
    start: QuarryStartRecord | undefined;
  const clock = new FixedTickClock(QUARRY_RULES.tickRate),
    histories = new Map<string, QuarryRecord[]>(),
    observers = new Map<string, ReplayObserver<QuarryState, QuarryRecord>>(),
    stops: Unsubscribe[] = [];
  const adapter = {
    clone: (state: QuarryState) => structuredClone(state),
    tick: (state: QuarryState) => state.tick,
    advanceTo: (state: QuarryState, target: number) => {
      while (state.tick < target && state.phase === "playing")
        advancePuzzle(state);
    },
    apply: (state: QuarryState, record: QuarryRecord) => {
      if (record.type !== "progress/tick")
        applyPuzzle(state, record, start!.seed);
    },
    hash: hashPuzzle,
    phase: (state: QuarryState) => state.phase,
    terminal: (state: QuarryState) => state.phase === "cleared",
    progress: (record: QuarryRecord) =>
      record.type === "progress/tick" ? record.payload : undefined,
  };
  const publish = () =>
    receive(
      [...observers].map(([playerId, observer]) => {
        const snapshot = observer.snapshot();
        return {
          playerId,
          tick: snapshot.displayTick,
          controllerTick: snapshot.controllerTick,
          lag: snapshot.lag,
          state: snapshot.state,
          hashMatches: snapshot.hashMatches,
        };
      }),
    );
  void get(ref(realtimeDatabase, `games/${gameId}/start`))
    .then(async (snap) => {
      start = parseStart(snap.val());
      let initialDisplayTick = 0;
      await Promise.all(
        Object.keys(start.players).map(async (id) => {
          const history = await get(
              ref(realtimeDatabase!, `games/${gameId}/players/${id}/records`),
            ),
            records: QuarryRecord[] = [];
          history.forEach((child) => {
            records.push(parseRecord(child.key!, child.val()));
          });
          records.sort((a, b) => a.clientSeq - b.clientSeq);
          histories.set(id, records);
          for (const record of records)
            if (record.type === "progress/tick")
              initialDisplayTick = Math.max(initialDisplayTick, record.tick);
        }),
      );
      if (destroyed) return;
      for (const id of Object.keys(start.players)) {
        const observer = new ReplayObserver(
          adapter,
          createPuzzle(start, start.players[id].level),
          initialDisplayTick,
        );
        observers.set(id, observer);
        for (const record of histories.get(id) ?? []) observer.receive(record);
        stops.push(
          onChildAdded(
            ref(realtimeDatabase!, `games/${gameId}/players/${id}/records`),
            (child) => {
              try {
                observer.receive(parseRecord(child.key!, child.val()));
                publish();
              } catch (e) {
                fail(e instanceof Error ? e : new Error(String(e)));
              }
            },
            fail,
          ),
        );
      }
      const loop = (now: number) => {
        if (destroyed) return;
        for (let ticks = clock.consume(now); ticks > 0; ticks--)
          for (const observer of observers.values()) observer.advance();
        publish();
        frame = requestAnimationFrame(loop);
      };
      publish();
      frame = requestAnimationFrame(loop);
    })
    .catch((e) => fail(e instanceof Error ? e : new Error(String(e))));
  return () => {
    destroyed = true;
    cancelAnimationFrame(frame);
    stops.forEach((stop) => stop());
  };
}

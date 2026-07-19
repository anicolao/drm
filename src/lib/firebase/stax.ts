import {
  get,
  onChildAdded,
  onValue,
  push,
  ref,
  serverTimestamp,
  set,
  type Unsubscribe,
} from "firebase/database";
import { auth, realtimeDatabase } from "./config";
import {
  advanceStax,
  applyStaxInput,
  createStax,
  deriveStaxLifecycle,
  hashStax,
  replayStax,
  STAX_RULES,
  type StaxInput,
  type StaxLifecycleState,
  type StaxTerminal,
  type StaxRecord,
  type StaxState,
} from "$lib/game/stax";
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
  parseStaxRecord,
  parseStaxStart,
  type StaxStartRecord,
} from "$lib/protocol/stax";

export type StaxLifecycle = StaxLifecycleState;
export interface StaxProgress {
  playerId: string;
  tick: number;
  controllerTick?: number;
  lag?: number;
  state: StaxState;
  hashMatches: boolean;
}
export interface StaxControllerState {
  playerId?: string;
  tick: number;
  ready: boolean;
  state?: StaxState;
  lifecycle?: StaxLifecycle;
  audioOutput?: "cast" | "controllers";
  error?: string;
  lastCommand?: string;
  ownershipConflict?: boolean;
  opponents?: StaxProgress[];
}
const parseStart = parseStaxStart,
  parseRecord = parseStaxRecord;
const createPuzzle=(start:StaxStartRecord,level:number)=>createStax(start.seed,level);
const advancePuzzle=advanceStax,applyPuzzle=applyStaxInput,hashPuzzle=hashStax;
const replayPuzzle=(initial:StaxState,target:number,records:StaxRecord[],seed:number)=>replayStax(initial,target,records,seed);
export async function getStaxStart(gameId: string) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  return parseStart(
    (await get(ref(realtimeDatabase, `games/${gameId}/start`))).val(),
  );
}

export function subscribeStaxLifecycle(
  gameId: string,
  receive: (value: StaxLifecycle) => void,
  fail: (e: Error) => void,
) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  let start: StaxStartRecord | undefined,
    terminals: StaxTerminal[] = [],
    readyIds: string[] = [];
  const stops: Unsubscribe[] = [];
  const publish = () => {
    if (!start) return;
    receive(
      deriveStaxLifecycle(
        Object.keys(start.players),
        start.scores ?? {},
        terminals,
        readyIds,
        start.round,
      ),
    );
  };
  void get(ref(realtimeDatabase, `games/${gameId}/start`))
    .then((s) => {
      start = parseStart(s.val());
      stops.push(
        onValue(
          ref(realtimeDatabase!, `games/${gameId}/terminals`),
          (snap) => {
            terminals=[];snap.forEach(child=>{const value=child.val();if(value?.type==='player/terminal'&&value.playerId===child.key&&Object.hasOwn(start!.players,child.key!))terminals.push(value)});
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
export const requestStaxRematch = (gameId: string, level: number) =>
  requestRematchReady(gameId, level);
export async function startStaxRematch(gameId: string) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  const [startSnap, terminalSnap] = await Promise.all([
    get(ref(realtimeDatabase, `games/${gameId}/start`)),
    get(ref(realtimeDatabase, `games/${gameId}/terminals`)),
  ]);
  const start = parseStart(startSnap.val());const terminals:StaxTerminal[]=[];terminalSnap.forEach(child=>{terminals.push(child.val())});const lifecycle=deriveStaxLifecycle(Object.keys(start.players),start.scores,terminals,[],start.round);
  return startRematch(gameId, parseStart, (current) => {
    const scores = Object.fromEntries(
      Object.keys(current.players).map((id) => [
        id,
        lifecycle.scores[id]??0,
      ]),
    );
    const complete = lifecycle.matchComplete;
    return {
      advance: !complete,
      scores: complete
        ? Object.fromEntries(Object.keys(current.players).map((id) => [id, 0]))
        : scores,
    };
  });
}

export function createStaxController(
  gameId: string,
  receive: (state: StaxControllerState) => void,
) {
  if (!auth?.currentUser || !realtimeDatabase)
    throw new Error("Firebase unavailable.");
  const playerId = auth.currentUser.uid,
    clock = new FixedTickClock(STAX_RULES.tickRate),
    storageKey = controllerStorageKey("stax", gameId, playerId, "outbox");
  let state: StaxState | undefined,
    start: StaxStartRecord | undefined,
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
    lifecycle: StaxLifecycle | undefined,
    ownershipConflict = false,
    opponents: StaxProgress[] = [];
  let stopOpponents = () => {};
  let terminalDeclared=false;
  const initialOutbox = loadStoredArray(localStorage, storageKey, (value) => {
    if (
      !value ||
      typeof value !== "object" ||
      typeof (value as { commandId?: unknown }).commandId !== "string"
    )
      throw new Error("Invalid Stax Match outbox.");
    const { commandId, ...record } = value as StaxRecord;
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
  const stopLife = subscribeStaxLifecycle(
    gameId,
    (next) => {
      lifecycle = next;
      if (next.finished) cancelAnimationFrame(frame);
      if (next.allReady && !rematchStarting) {
        rematchStarting = true;
        void startStaxRematch(gameId).catch((e) => {
          rematchStarting = false;
          publish(e instanceof Error ? e.message : String(e));
        });
      }
      publish();
    },
    (e) => publish(e.message),
  );
  const outbox = new DurableOutbox<StaxRecord>({
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
      | StaxInput
      | {
          type: "progress/tick";
          payload: { phase: StaxState['phase']; stateHash: string };
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
    } as StaxRecord;
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
  const declareTerminal=()=>{if(!state||terminalDeclared||!['cleared','lost'].includes(state.phase)||!start)return;terminalDeclared=true;void set(ref(realtimeDatabase!,`games/${gameId}/terminals/${playerId}`),{type:'player/terminal',playerId,tick:state.tick,result:state.phase,score:state.score,misses:state.misses,seat:start.players[playerId].seat,stateHash:hashStax(state),serverTime:serverTimestamp()}).catch(e=>{terminalDeclared=false;publish(e.message)})};
  const loop = (now: number) => {
    if (
      destroyed ||
      suspended ||
      !ready ||
      !state ||
      state.phase === "cleared" ||
      lifecycle?.terminalPlayerIds.includes(playerId)
    )
      return;
    for (let ticks = clock.consume(now); ticks > 0; ticks--) {
      advancePuzzle(state);
      tick = state.tick;
    }
    progress();
    declareTerminal();
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
          throw new Error("Player is not part of this Stax Match game.");
        audioOutput = start.audioOutput;
        if (!(await lease.claim())) {
          ownershipConflict = true;
          throw new Error("This controller is already active in another tab.");
        }
        ownershipConflict = false;
        stopOpponents();
        stopOpponents = subscribeStaxProgress(
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
          byId = new Map<string, StaxRecord>();
        history.forEach((child) => {
          const record = parseRecord(child.key!, child.val());
          byId.set(record.commandId, record);
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
        void outbox.flush();
        progress(true);
        publish();
        if (state.phase === "cleared"||state.phase==='lost') declareTerminal();
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
    command(input: StaxInput) {
      if (!ready || !state || state.phase !== "playing" || !start) return;
      write(input);
      applyPuzzle(state, input, start.seed);
      tick = state.tick;
      lastCommand = `${input.type} · tick ${tick}`;
      if ((state as StaxState).phase === "cleared") {
        progress(true);
        declareTerminal();
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
      cancelAnimationFrame(frame);
      window.removeEventListener("online", online);
      outbox.destroy();
      void lease.release();
    },
  };
}

export function subscribeStaxProgress(
  gameId: string,
  receive: (p: StaxProgress[]) => void,
  fail: (e: Error) => void,
) {
  if (!realtimeDatabase) throw new Error("Firebase unavailable.");
  let destroyed = false,
    frame = 0,
    start: StaxStartRecord | undefined;
  const clock = new FixedTickClock(STAX_RULES.tickRate),
    histories = new Map<string, StaxRecord[]>(),
    observers = new Map<string, ReplayObserver<StaxState, StaxRecord>>(),
    stops: Unsubscribe[] = [];
  const adapter = {
    clone: (state: StaxState) => structuredClone(state),
    tick: (state: StaxState) => state.tick,
    advanceTo: (state: StaxState, target: number) => {
      while (state.tick < target && state.phase !== "cleared" && state.phase !== "lost")
        advancePuzzle(state);
    },
    apply: (state: StaxState, record: StaxRecord) => {
      if (record.type !== "progress/tick")
        applyPuzzle(state, record, start!.seed);
    },
    hash: hashPuzzle,
    phase: (state: StaxState) => state.phase,
    terminal: (state: StaxState) => state.phase === "cleared"||state.phase==='lost',
    progress: (record: StaxRecord) =>
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
            records: StaxRecord[] = [];
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

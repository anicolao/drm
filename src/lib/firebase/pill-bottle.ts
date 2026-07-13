import { doc, serverTimestamp as firestoreTimestamp, updateDoc } from 'firebase/firestore';
import { get, onChildAdded, onValue, push, ref, serverTimestamp, set, type Unsubscribe } from 'firebase/database';
import { auth, firestore, realtimeDatabase } from './config';
import type { RoomPlayer } from './rooms';
import {
  advanceTick,
  advanceToTick,
  applyInput,
  createBottle,
  deserializeBottle,
  hashState,
  PillBottleObserver,
  PILL_BOTTLE_RULES,
  PILL_BOTTLE_RULES_VERSION,
  PILL_BOTTLE_SETTINGS,
  type BottleState,
  type ControllerRecord,
  type PillInput
} from '$lib/game/pill-bottle';
import {
  loadControllerCheckpoint,
  loadControllerOutbox,
  saveControllerCheckpoint,
  saveControllerOutbox
} from '$lib/local/pill-bottle';
import {
  parsePillControllerRecord,
  parsePillStart,
  type PendingPillControllerRecord
} from '$lib/protocol/pill-bottle';

export type PillCommand = PillInput;

export async function startPillBottleGame(roomId: string, members: RoomPlayer[], hostMode: 'player' | 'display') {
  if (!auth?.currentUser || !firestore || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  if (members.length < 1 || members.length > 4) throw new Error('Color Cure requires between one and four room members.');

  const hostUid = auth.currentUser.uid;
  const participants = members.filter((member) => hostMode === 'player' || member.uid !== hostUid)
    .sort((left, right) => left.uid.localeCompare(right.uid));
  if (participants.length === 0) throw new Error('A TV game requires at least one joined controller.');

  const gameId = crypto.randomUUID();
  const seed = Number(import.meta.env.VITE_E2E_GAME_SEED) || crypto.getRandomValues(new Uint32Array(1))[0];
  const players = Object.fromEntries(participants.map((player, seat) => [player.uid, { seat }]));
  const allowedMembers = Object.fromEntries(members.map((member) => [member.uid, true]));
  await set(ref(realtimeDatabase, `games/${gameId}/start`), {
    type: 'game/started', roomId, ruleset: 'pill-bottle', rulesVersion: PILL_BOTTLE_RULES_VERSION,
    seed, tickRate: PILL_BOTTLE_RULES.tickRate, hostUid, members: allowedMembers, players,
    settings: PILL_BOTTLE_SETTINGS, serverTime: serverTimestamp()
  });
  await updateDoc(doc(firestore, 'rooms', roomId), {
    status: 'active', activeGameId: gameId, startedAt: firestoreTimestamp()
  });
  return gameId;
}

export interface ControllerState {
  tick: number;
  ready: boolean;
  bottle?: BottleState;
  lastCommand?: string;
  error?: string;
}

export interface PlayerProgress {
  playerId: string;
  tick: number;
  controllerTick?: number;
  lag?: number;
  state: BottleState;
  stateHash: string;
  reportedStateHash?: string;
  hashMatches: boolean;
}

function withoutServerTime(record: ReturnType<typeof parsePillControllerRecord>): ControllerRecord {
  const { serverTime: _serverTime, ...controllerRecord } = record as ReturnType<typeof parsePillControllerRecord> & { serverTime?: number };
  return controllerRecord;
}

export function subscribePillBottleProgress(gameId: string, receive: (players: PlayerProgress[]) => void, fail: (error: Error) => void) {
  if (!realtimeDatabase) throw new Error('Firebase is unavailable.');
  let destroyed = false;
  let frame = 0;
  let lastTime: number | undefined;
  let accumulator = 0;
  const listeners: Unsubscribe[] = [];
  const observers = new Map<string, PillBottleObserver>();

  const publish = () => receive([...observers.entries()].map(([playerId, observer]) => {
    const snapshot = observer.snapshot();
    return { playerId, tick: snapshot.displayTick, ...snapshot };
  }));

  const loop = (now: number) => {
    if (destroyed) return;
    if (lastTime === undefined) lastTime = now;
    accumulator += Math.min(now - lastTime, 250);
    lastTime = now;
    while (accumulator >= 1000 / PILL_BOTTLE_RULES.tickRate) {
      for (const observer of observers.values()) observer.advance();
      accumulator -= 1000 / PILL_BOTTLE_RULES.tickRate;
    }
    publish();
    frame = requestAnimationFrame(loop);
  };

  void (async () => {
    try {
      const startSnapshot = await get(ref(realtimeDatabase!, `games/${gameId}/start`));
      if (destroyed || !startSnapshot.exists()) return;
      const start = parsePillStart(startSnapshot.val());
      const histories = new Map<string, ControllerRecord[]>();
      let initialDisplayTick = 0;

      await Promise.all(Object.keys(start.players).map(async (playerId) => {
        const snapshot = await get(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
        const records: ControllerRecord[] = [];
        snapshot.forEach((child) => {
          const record = withoutServerTime(parsePillControllerRecord(child.key!, child.val()));
          if (record.playerId === playerId) records.push(record);
        });
        records.sort((left, right) => left.clientSeq - right.clientSeq);
        for (const record of records) if (record.type === 'progress/tick') initialDisplayTick = Math.max(initialDisplayTick, record.tick);
        histories.set(playerId, records);
      }));

      if (destroyed) return;
      for (const [playerId, definition] of Object.entries(start.players)) {
        const observer = new PillBottleObserver(createBottle(start.seed, definition.seat), initialDisplayTick);
        observers.set(playerId, observer);
        for (const record of histories.get(playerId) ?? []) observer.receive(record);
        listeners.push(onChildAdded(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`), (snapshot) => {
          try {
            const record = withoutServerTime(parsePillControllerRecord(snapshot.key!, snapshot.val()));
            if (record.playerId === playerId) observer.receive(record);
            publish();
          } catch (cause) {
            fail(cause instanceof Error ? cause : new Error(String(cause)));
          }
        }, fail));
      }
      publish();
      frame = requestAnimationFrame(loop);
    } catch (cause) {
      fail(cause instanceof Error ? cause : new Error(String(cause)));
    }
  })();

  return () => {
    destroyed = true;
    cancelAnimationFrame(frame);
    for (const unsubscribe of listeners) unsubscribe();
  };
}

function installationId() {
  const existing = localStorage.getItem('drm-client-id');
  if (existing) return existing;
  const created = crypto.randomUUID();
  localStorage.setItem('drm-client-id', created);
  return created;
}

function applyRecord(state: BottleState, record: ControllerRecord) {
  advanceToTick(state, record.tick, []);
  if (record.type !== 'progress/tick') applyInput(state, record);
}

export function createPillBottleController(gameId: string, receive: (state: ControllerState) => void) {
  if (!auth?.currentUser || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const playerId = auth.currentUser.uid;
  const epochId = crypto.randomUUID();
  let tick = 0;
  let clientSeq = 0;
  let lastProgressTick = -1;
  let frame = 0;
  let lastTime: number | undefined;
  let accumulator = 0;
  let ready = false;
  let initializing = false;
  let destroyed = false;
  let suspended = false;
  let lastCommand: string | undefined;
  let bottle: BottleState | undefined;
  let outbox = loadControllerOutbox(gameId, playerId);
  let flushing = false;
  let retryTimer: ReturnType<typeof setTimeout> | undefined;

  const publish = (error?: string) => receive({
    tick, ready, bottle: bottle ? structuredClone(bottle) : undefined, lastCommand, error
  });

  const scheduleFlush = () => {
    if (retryTimer || destroyed) return;
    retryTimer = setTimeout(() => {
      retryTimer = undefined;
      void flushOutbox();
    }, 1000);
  };

  async function flushOutbox() {
    if (flushing || !realtimeDatabase || outbox.length === 0) return;
    flushing = true;
    try {
      for (;;) {
        const record = [...outbox].sort((left, right) => left.clientSeq - right.clientSeq)[0];
        if (!record) break;
        const { commandId, ...data } = record;
        await set(ref(realtimeDatabase, `games/${gameId}/players/${playerId}/records/${commandId}`), {
          ...data, serverTime: serverTimestamp()
        });
        outbox = outbox.filter((pending) => pending.commandId !== commandId);
        saveControllerOutbox(gameId, playerId, outbox);
      }
    } catch {
      scheduleFlush();
    } finally {
      flushing = false;
    }
  }

  function emitRecord(record: PendingPillControllerRecord) {
    if (!bottle) return;
    outbox.push(record);
    outbox.sort((left, right) => left.clientSeq - right.clientSeq);
    saveControllerOutbox(gameId, playerId, outbox);
    saveControllerCheckpoint(gameId, playerId, record, bottle);
    void flushOutbox();
  }

  function makeRecord(input: PillInput | { type: 'progress/tick'; payload: { phase: BottleState['phase']; stateHash: string } }) {
    if (tick < lastProgressTick) throw new Error('A controller record cannot precede its latest progress tick.');
    const commandRef = push(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
    if (!commandRef.key) throw new Error('Could not allocate a controller record identifier.');
    return { commandId: commandRef.key, playerId, epochId, clientSeq: ++clientSeq, tick, ...input } as PendingPillControllerRecord;
  }

  function publishProgress(force = false) {
    if (!bottle || (!force && tick - lastProgressTick < 15)) return;
    const record = makeRecord({ type: 'progress/tick', payload: { phase: bottle.phase, stateHash: hashState(bottle) } });
    lastProgressTick = tick;
    emitRecord(record);
  }

  function loop(now: number) {
    if (destroyed || !ready || suspended) return;
    if (lastTime === undefined) lastTime = now;
    accumulator += Math.min(now - lastTime, 250);
    lastTime = now;
    while (accumulator >= 1000 / PILL_BOTTLE_RULES.tickRate) {
      if (!bottle || bottle.phase !== 'playing') { accumulator = 0; break; }
      advanceTick(bottle);
      tick = bottle.tick;
      accumulator -= 1000 / PILL_BOTTLE_RULES.tickRate;
    }
    if (bottle && bottle.phase !== 'playing' && lastProgressTick !== tick) publishProgress(true);
    else publishProgress();
    publish();
    frame = requestAnimationFrame(loop);
  }

  const unsubscribe: Unsubscribe = onValue(ref(realtimeDatabase, `games/${gameId}/start`), async (snapshot) => {
    if (!snapshot.exists() || ready || initializing) return;
    initializing = true;
    try {
      const start = parsePillStart(snapshot.val());
      if (!start.players[playerId]) throw new Error('Player is not part of this pill-bottle/2 game.');
      const historySnapshot = await get(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
      const byId = new Map<string, ControllerRecord>();
      historySnapshot.forEach((child) => {
        const record = withoutServerTime(parsePillControllerRecord(child.key!, child.val()));
        if (record.playerId === playerId) byId.set(record.commandId, record);
      });
      for (const record of outbox) byId.set(record.commandId, record);
      const records = [...byId.values()].sort((left, right) => left.clientSeq - right.clientSeq);
      records.forEach((record, index) => {
        if (record.clientSeq !== index + 1) throw new Error('Controller record history has a sequence gap.');
        if (index > 0 && record.tick < records[index - 1].tick) throw new Error('Controller record ticks moved backward.');
      });

      const checkpoint = loadControllerCheckpoint(gameId, playerId);
      const checkpointRecord = checkpoint && records.find((record) => record.commandId === checkpoint.commandId
        && record.clientSeq === checkpoint.clientSeq && record.tick === checkpoint.tick);
      bottle = checkpointRecord ? deserializeBottle(checkpoint!.state) : createBottle(start.seed, start.players[playerId].seat);
      for (const record of records) {
        if (checkpointRecord && record.clientSeq <= checkpointRecord.clientSeq) continue;
        applyRecord(bottle, record);
      }
      clientSeq = records.at(-1)?.clientSeq ?? 0;
      tick = bottle.tick;
      lastProgressTick = records.reduce((latest, record) => record.type === 'progress/tick' ? Math.max(latest, record.tick) : latest, -1);
      if (records.length > 0) saveControllerCheckpoint(gameId, playerId, records.at(-1)!, bottle);

      await set(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/epochs/${epochId}`), {
        clientId: installationId(), startedFromTick: tick, startedFromCommandSeq: clientSeq,
        serverTime: serverTimestamp()
      });
      ready = true;
      publishProgress(true);
      publish();
      void flushOutbox();
      frame = requestAnimationFrame(loop);
    } catch (cause) {
      publish(cause instanceof Error ? cause.message : String(cause));
    } finally {
      initializing = false;
    }
  }, (error) => publish(error.message));

  const online = () => void flushOutbox();
  window.addEventListener('online', online);

  function suspend() {
    if (!ready || suspended) return;
    publishProgress(true);
    suspended = true;
    cancelAnimationFrame(frame);
    lastTime = undefined;
    accumulator = 0;
  }

  function resume() {
    if (!ready || !suspended || destroyed) return;
    suspended = false;
    lastTime = undefined;
    publishProgress(true);
    frame = requestAnimationFrame(loop);
  }

  async function command(input: PillCommand) {
    if (!ready || !bottle) return;
    applyInput(bottle, input);
    const record = makeRecord(input);
    emitRecord(record);
    if (bottle.phase !== 'playing') publishProgress(true);
    lastCommand = `${input.type} · tick ${tick}`;
    publish();
  }

  return {
    command,
    suspend,
    resume,
    destroy() {
      if (ready && !suspended) publishProgress(true);
      destroyed = true;
      unsubscribe();
      cancelAnimationFrame(frame);
      if (retryTimer) clearTimeout(retryTimer);
      window.removeEventListener('online', online);
    }
  };
}

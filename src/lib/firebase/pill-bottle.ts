import { doc, serverTimestamp as firestoreTimestamp, updateDoc } from 'firebase/firestore';
import { get, onChildAdded, onDisconnect, onValue, push, ref, runTransaction, serverTimestamp, set, type Unsubscribe } from 'firebase/database';
import { auth, firestore, realtimeDatabase } from './config';
import type { RoomPlayer } from './rooms';
import {
  advanceTick,
  advanceToTick,
  attackColors,
  attackColumns,
  applyInput,
  authoritativeScoringTick,
  createBottle,
  deserializeBottle,
  derivePillMatchLifecycle,
  hashState,
  PillBottleObserver,
  PILL_BOTTLE_RULES,
  PILL_BOTTLE_RULES_VERSION,
  PILL_BOTTLE_SETTINGS,
  type BottleState,
  type ControllerRecord,
  type PillClearEvent,
  type PillInput,
  type PillMatchLifecycle,
  type PillRainInput
} from '$lib/game/pill-bottle';
export type { PillMatchLifecycle } from '$lib/game/pill-bottle';
import {
  loadAttackOutbox,
  loadControllerCheckpoint,
  loadControllerOutbox,
  saveAttackOutbox,
  saveControllerCheckpoint,
  saveControllerOutbox,
  type PendingPillAttackInteraction
} from '$lib/local/pill-bottle';
import {
  parsePillControllerRecord,
  parsePillAttackInteraction,
  parsePillRematchReady,
  parsePillStart,
  parsePillTerminal,
  type PendingPillControllerRecord
} from '$lib/protocol/pill-bottle';

export type PillCommand = PillInput;

function gameSeed() {
  return Number(import.meta.env.VITE_E2E_GAME_SEED) || crypto.getRandomValues(new Uint32Array(1))[0];
}

export async function startPillBottleGame(roomId: string, members: RoomPlayer[], hostMode: 'player' | 'display') {
  if (!auth?.currentUser || !firestore || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  if (members.length < 1 || members.length > 4) throw new Error('Color Cure requires between one and four room members.');

  const hostUid = auth.currentUser.uid;
  const participants = members.filter((member) => hostMode === 'player' || member.uid !== hostUid)
    .sort((left, right) => left.uid.localeCompare(right.uid));
  if (participants.length === 0) throw new Error('A TV game requires at least one joined controller.');

  const gameId = crypto.randomUUID();
  const seed = gameSeed();
  const players = Object.fromEntries(participants.map((player, seat) => [player.uid, { seat }]));
  const allowedMembers = Object.fromEntries(members.map((member) => [member.uid, true]));
  await set(ref(realtimeDatabase, `games/${gameId}/start`), {
    type: 'game/started', roomId, ruleset: 'pill-bottle', rulesVersion: PILL_BOTTLE_RULES_VERSION,
    seed, tickRate: PILL_BOTTLE_RULES.tickRate, hostUid, members: allowedMembers, players,
    audioOutput: hostMode === 'display' ? 'cast' : 'controllers',
    settings: PILL_BOTTLE_SETTINGS, matchId: gameId, round: 0, serverTime: serverTimestamp()
  });
  await updateDoc(doc(firestore, 'rooms', roomId), {
    status: 'active', activeGameId: gameId, startedAt: firestoreTimestamp()
  });
  return gameId;
}

export interface ControllerState {
  playerId?: string;
  tick: number;
  ready: boolean;
  bottle?: BottleState;
  lastCommand?: string;
  error?: string;
  lifecycle?: PillMatchLifecycle;
  audioOutput?: 'cast' | 'controllers';
  rainSignal?: number;
  ownershipConflict?: boolean;
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

export function subscribePillBottleLifecycle(
  gameId: string,
  receive: (lifecycle: PillMatchLifecycle) => void,
  fail: (error: Error) => void
) {
  if (!realtimeDatabase) throw new Error('Firebase is unavailable.');
  let destroyed = false;
  let playerIds: string[] = [];
  let terminals: Array<{ playerId: string; result: 'cleared' | 'lost'; tick: number }> = [];
  let readyPlayerIds: string[] = [];
  let round = 0;
  let startDefinition: ReturnType<typeof parsePillStart> | undefined;
  let previousPoints: Record<string, number> = {};
  const histories = new Map<string, ControllerRecord[]>();
  const listeners: Unsubscribe[] = [];
  const publish = () => {
    if (playerIds.length === 0) return;
    const lifecycle = derivePillMatchLifecycle(playerIds, terminals, readyPlayerIds, round);
    if (!startDefinition) return receive(lifecycle);
    const roundPoints = deriveRoundPoints(startDefinition, lifecycle, histories);
    const scores = Object.fromEntries(playerIds.map((playerId) => [playerId, (previousPoints[playerId] ?? 0) + roundPoints[playerId]]));
    receive({ ...lifecycle, roundPoints, scores });
  };

  void (async () => {
    try {
      const snapshot = await get(ref(realtimeDatabase!, `games/${gameId}/start`));
      if (destroyed || !snapshot.exists()) return;
      const start = parsePillStart(snapshot.val());
      startDefinition = start;
      playerIds = Object.keys(start.players);
      round = start.round;
      previousPoints = await loadPreviousPillScores(start.previousGameId);
      await Promise.all(playerIds.map(async (playerId) => {
        const recordsSnapshot = await get(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
        const records: ControllerRecord[] = [];
        recordsSnapshot.forEach((child) => {
          const record = withoutServerTime(parsePillControllerRecord(child.key!, child.val()));
          if (record.playerId === playerId) records.push(record);
        });
        records.sort((left, right) => left.clientSeq - right.clientSeq);
        histories.set(playerId, records);
        listeners.push(onChildAdded(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`), (child) => {
          try {
            const record = withoutServerTime(parsePillControllerRecord(child.key!, child.val()));
            const history = histories.get(playerId) ?? [];
            if (record.playerId === playerId && !history.some((existing) => existing.commandId === record.commandId)) {
              history.push(record);
              history.sort((left, right) => left.clientSeq - right.clientSeq);
              histories.set(playerId, history);
              publish();
            }
          } catch (cause) {
            fail(cause instanceof Error ? cause : new Error(String(cause)));
          }
        }, fail));
      }));
      listeners.push(onValue(ref(realtimeDatabase!, `games/${gameId}/terminals`), (terminalSnapshot) => {
        try {
          terminals = [];
          terminalSnapshot.forEach((terminal) => {
            const value = parsePillTerminal(terminal.val());
            if (terminal.key === value.playerId && playerIds.includes(value.playerId)) terminals.push(value);
          });
          publish();
        } catch (cause) {
          fail(cause instanceof Error ? cause : new Error(String(cause)));
        }
      }, fail));
      listeners.push(onValue(ref(realtimeDatabase!, `games/${gameId}/rematch/ready`), (readiness) => {
        try {
          readyPlayerIds = [];
          readiness.forEach((ready) => {
            const value = parsePillRematchReady(ready.val());
            if (ready.key === value.playerId && playerIds.includes(value.playerId)) readyPlayerIds.push(value.playerId);
          });
          publish();
        } catch (cause) {
          fail(cause instanceof Error ? cause : new Error(String(cause)));
        }
      }, fail));
      publish();
    } catch (cause) {
      fail(cause instanceof Error ? cause : new Error(String(cause)));
    }
  })();

  return () => {
    destroyed = true;
    for (const unsubscribe of listeners) unsubscribe();
  };
}

export async function requestPillBottleRematch(gameId: string) {
  if (!auth?.currentUser || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const playerId = auth.currentUser.uid;
  const readyRef = ref(realtimeDatabase, `games/${gameId}/rematch/ready/${playerId}`);
  if ((await get(readyRef)).exists()) return;
  await set(readyRef, {
    playerId,
    serverTime: serverTimestamp()
  });
}

export async function startPillBottleRematch(gameId: string) {
  if (!auth?.currentUser || !firestore || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const startSnapshot = await get(ref(realtimeDatabase, `games/${gameId}/start`));
  if (!startSnapshot.exists()) throw new Error('The previous game no longer exists.');
  const start = parsePillStart(startSnapshot.val());
  if (start.hostUid !== auth.currentUser.uid) return;
  const readiness = await get(ref(realtimeDatabase, `games/${gameId}/rematch/ready`));
  const ready = new Set<string>();
  readiness.forEach((child) => { ready.add(parsePillRematchReady(child.val()).playerId); });
  if (!Object.keys(start.players).every((playerId) => ready.has(playerId))) return;

  const proposedGameId = crypto.randomUUID();
  const claim = await runTransaction(ref(realtimeDatabase, `games/${gameId}/rematch/nextGameId`), (current) => current ?? proposedGameId, {
    applyLocally: false
  });
  const nextGameId = claim.snapshot.val();
  if (typeof nextGameId !== 'string') throw new Error('Could not reserve the rematch.');
  const advanceRound = Object.keys(start.players).length > 1 && start.round + 1 < PILL_BOTTLE_RULES.matchRounds;
  const nextStart = ref(realtimeDatabase, `games/${nextGameId}/start`);
  try {
    await set(nextStart, {
      type: 'game/started', roomId: start.roomId, ruleset: start.ruleset, rulesVersion: start.rulesVersion,
      seed: gameSeed(), tickRate: start.tickRate, hostUid: start.hostUid, members: start.members,
      players: start.players, settings: start.settings,
      audioOutput: start.audioOutput,
      matchId: advanceRound ? start.matchId : nextGameId,
      round: advanceRound ? start.round + 1 : 0,
      ...(advanceRound ? { previousGameId: gameId } : {}),
      serverTime: serverTimestamp()
    });
  } catch (cause) {
    // Another host display may have completed the immutable start record first. Reading is
    // permitted once that record establishes membership; an empty reserved game remains
    // unreadable, so preserve the original failure in that case.
    try {
      const existingStart = await get(nextStart);
      const existing = existingStart.exists() ? parsePillStart(existingStart.val()) : undefined;
      if (!existing || existing.roomId !== start.roomId || existing.hostUid !== start.hostUid) throw cause;
    } catch {
      throw cause;
    }
  }
  await updateDoc(doc(firestore, 'rooms', start.roomId), {
    status: 'active', activeGameId: nextGameId, startedAt: firestoreTimestamp()
  });
  return nextGameId;
}

function withoutServerTime(record: ReturnType<typeof parsePillControllerRecord>): ControllerRecord {
  const { serverTime: _serverTime, ...controllerRecord } = record as ReturnType<typeof parsePillControllerRecord> & { serverTime?: number };
  return controllerRecord;
}

export function subscribePillBottleProgress(
  gameId: string,
  receive: (players: PlayerProgress[]) => void,
  fail: (error: Error) => void,
  receiveLifecycle?: (lifecycle: PillMatchLifecycle) => void,
  receiveStart?: (start: ReturnType<typeof parsePillStart>) => void
) {
  if (!realtimeDatabase) throw new Error('Firebase is unavailable.');
  let destroyed = false;
  let frame = 0;
  let lastTime: number | undefined;
  let accumulator = 0;
  let matchFinished = false;
  let terminalPlayerIds = new Set<string>();
  let rematchStarting = false;
  const listeners: Unsubscribe[] = [];
  const observers = new Map<string, PillBottleObserver>();
  const histories = new Map<string, ControllerRecord[]>();
  const stopLifecycle = subscribePillBottleLifecycle(gameId, (lifecycle) => {
    matchFinished = lifecycle.finished;
    terminalPlayerIds = new Set(lifecycle.terminalPlayerIds);
    receiveLifecycle?.(lifecycle);
    if (lifecycle.allReady && !rematchStarting) {
      rematchStarting = true;
      void startPillBottleRematch(gameId).catch((error) => {
        rematchStarting = false;
        fail(error);
      });
    }
  }, fail);

  const publish = () => {
    receive([...observers.entries()].map(([playerId, observer]) => {
    const snapshot = observer.snapshot();
    return { playerId, tick: snapshot.displayTick, ...snapshot };
    }));
  };

  const loop = (now: number) => {
    if (destroyed) return;
    if (lastTime === undefined) lastTime = now;
    accumulator += Math.min(now - lastTime, 250);
    lastTime = now;
    while (accumulator >= 1000 / PILL_BOTTLE_RULES.tickRate) {
      if (!matchFinished) for (const [playerId, observer] of observers) {
        if (!terminalPlayerIds.has(playerId)) observer.advance();
      }
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
      receiveStart?.(start);
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
        const observer = new PillBottleObserver(createBottle(start.seed, definition.seat, start.round), initialDisplayTick);
        observers.set(playerId, observer);
        for (const record of histories.get(playerId) ?? []) observer.receive(record);
        listeners.push(onChildAdded(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`), (snapshot) => {
          try {
            const record = withoutServerTime(parsePillControllerRecord(snapshot.key!, snapshot.val()));
            if (record.playerId === playerId) {
              const records = histories.get(playerId) ?? [];
              if (!records.some((existing) => existing.commandId === record.commandId)) {
                records.push(record);
                records.sort((left, right) => left.clientSeq - right.clientSeq);
                histories.set(playerId, records);
              }
              observer.receive(record);
            }
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
    stopLifecycle();
    for (const unsubscribe of listeners) unsubscribe();
  };
}

export function subscribePillBottleAttacks(gameId: string, receive: () => void, fail: (error: Error) => void) {
  if (!realtimeDatabase) throw new Error('Firebase is unavailable.');
  let destroyed = false;
  let unsubscribe = () => {};
  void (async () => {
    try {
      const interactions = ref(realtimeDatabase!, `games/${gameId}/interactions`);
      const existing = await get(interactions);
      const known = new Set<string>();
      existing.forEach((child) => { known.add(child.key!); });
      if (destroyed) return;
      unsubscribe = onChildAdded(interactions, (child) => {
        try {
          parsePillAttackInteraction(child.val());
          if (!known.delete(child.key!)) receive();
        } catch (cause) {
          fail(cause instanceof Error ? cause : new Error(String(cause)));
        }
      }, fail);
    } catch (cause) {
      fail(cause instanceof Error ? cause : new Error(String(cause)));
    }
  })();
  return () => { destroyed = true; unsubscribe(); };
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

function deriveRoundPoints(
  start: ReturnType<typeof parsePillStart>,
  lifecycle: PillMatchLifecycle,
  histories: Map<string, ControllerRecord[]>
) {
  const points = Object.fromEntries(lifecycle.playerIds.map((playerId) => [playerId, 0]));
  for (const playerId of lifecycle.playerIds) {
    if (lifecycle.terminalResults[playerId] !== 'cleared') continue;
    const scoringTick = lifecycle.terminalTicks[playerId];
    for (const opponentId of lifecycle.playerIds) {
      if (opponentId === playerId) continue;
      const records = histories.get(opponentId) ?? [];
      const targetTick = authoritativeScoringTick(records, scoringTick, lifecycle.terminalTicks[opponentId]);
      const definition = start.players[opponentId];
      if (!definition) continue;
      const state = createBottle(start.seed, definition.seat, start.round);
      for (const record of records) {
        if (record.tick > targetTick) break;
        applyRecord(state, record);
      }
      if (state.tick < targetTick && state.phase !== 'lost') advanceToTick(state, targetTick, []);
      points[playerId] += state.viruses;
    }
  }
  return points;
}

async function loadPreviousPillScores(previousGameId?: string) {
  const totals: Record<string, number> = {};
  let gameId = previousGameId;
  while (gameId && realtimeDatabase) {
    const startSnapshot = await get(ref(realtimeDatabase, `games/${gameId}/start`));
    if (!startSnapshot.exists()) break;
    const start = parsePillStart(startSnapshot.val());
    const terminalSnapshot = await get(ref(realtimeDatabase, `games/${gameId}/terminals`));
    const terminalRecords: Array<{ playerId: string; result: 'cleared' | 'lost'; tick: number }> = [];
    terminalSnapshot.forEach((child) => { terminalRecords.push(parsePillTerminal(child.val())); });
    const playerIds = Object.keys(start.players);
    const lifecycle = derivePillMatchLifecycle(playerIds, terminalRecords, [], start.round);
    const histories = new Map<string, ControllerRecord[]>();
    await Promise.all(playerIds.map(async (playerId) => {
      const recordSnapshot = await get(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
      const records: ControllerRecord[] = [];
      recordSnapshot.forEach((child) => { records.push(withoutServerTime(parsePillControllerRecord(child.key!, child.val()))); });
      records.sort((left, right) => left.clientSeq - right.clientSeq);
      histories.set(playerId, records);
    }));
    const points = deriveRoundPoints(start, lifecycle, histories);
    for (const playerId of playerIds) totals[playerId] = (totals[playerId] ?? 0) + points[playerId];
    gameId = start.previousGameId;
  }
  return totals;
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
  let matchFinished = false;
  let playerFinished = false;
  let terminalDeclared = false;
  let rematchStarting = false;
  let lastCommand: string | undefined;
  let bottle: BottleState | undefined;
  let lifecycle: PillMatchLifecycle | undefined;
  let audioOutput: 'cast' | 'controllers' | undefined;
  let rainSignal = 0;
  let ownershipConflict = false;
  let ownsWriter = false;
  let participantIds: string[] = [];
  let stopInteractions = () => {};
  let stopWriter = () => {};
  const appliedAttacks = new Set<string>();
  let outbox = loadControllerOutbox(gameId, playerId);
  let attackOutbox = loadAttackOutbox(gameId, playerId);
  let flushing = false;
  let flushingAttacks = false;
  let retryTimer: ReturnType<typeof setTimeout> | undefined;

  const publish = (error?: string) => receive({
    playerId, tick, ready, bottle: bottle ? structuredClone(bottle) : undefined, lastCommand, error, lifecycle, audioOutput, rainSignal, ownershipConflict
  });

  const stopLifecycle = subscribePillBottleLifecycle(gameId, (next) => {
    lifecycle = next;
    matchFinished = next.finished;
    playerFinished = next.terminalPlayerIds.includes(playerId);
    if (matchFinished) {
      cancelAnimationFrame(frame);
      accumulator = 0;
    }
    if (next.allReady && !rematchStarting) {
      rematchStarting = true;
      void startPillBottleRematch(gameId).catch((cause) => {
        rematchStarting = false;
        publish(cause instanceof Error ? cause.message : String(cause));
      });
    }
    publish();
  }, (error) => publish(error.message));

  const scheduleFlush = () => {
    if (retryTimer || destroyed) return;
    retryTimer = setTimeout(() => {
      retryTimer = undefined;
      void flushOutbox();
      void flushAttackOutbox();
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

  async function flushAttackOutbox() {
    if (flushingAttacks || !realtimeDatabase || attackOutbox.length === 0) return;
    flushingAttacks = true;
    try {
      for (;;) {
        const pending = attackOutbox[0];
        if (!pending) break;
        const { interactionId, ...interaction } = pending;
        await set(ref(realtimeDatabase, `games/${gameId}/interactions/${interactionId}`), {
          ...interaction, serverTime: serverTimestamp()
        });
        attackOutbox = attackOutbox.filter((candidate) => candidate.interactionId !== interactionId);
        saveAttackOutbox(gameId, playerId, attackOutbox);
      }
    } catch {
      scheduleFlush();
    } finally {
      flushingAttacks = false;
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

  function makeRecord(input: PillInput | PillRainInput | { type: 'progress/tick'; payload: { phase: BottleState['phase']; stateHash: string } }) {
    if (tick < lastProgressTick) throw new Error('A controller record cannot precede its latest progress tick.');
    const commandRef = push(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
    if (!commandRef.key) throw new Error('Could not allocate a controller record identifier.');
    return { commandId: commandRef.key, playerId, epochId, clientSeq: ++clientSeq, tick, ...input } as PendingPillControllerRecord;
  }

  function handleClearEvents(events: PillClearEvent[]) {
    for (const event of events) {
      const colors = attackColors(event);
      if (colors.length === 0) continue;
      const targets = participantIds.filter((candidate) => candidate !== playerId && !lifecycle?.terminalPlayerIds.includes(candidate));
      if (targets.length === 0) {
        rainSignal++;
        continue;
      }
      const attackId = `${playerId}-${epochId}-${event.tick}-${event.chain}`;
      const interactionRef = push(ref(realtimeDatabase!, `games/${gameId}/interactions`));
      if (!interactionRef.key) throw new Error('Could not allocate an attack interaction identifier.');
      const pending: PendingPillAttackInteraction = {
        interactionId: interactionRef.key,
        type: 'attack/generated', attackId, sourcePlayerId: playerId, sourceTick: event.tick,
        sourceChain: event.chain, targetPlayerIds: targets, colors
      };
      attackOutbox.push(pending);
      saveAttackOutbox(gameId, playerId, attackOutbox);
      void flushAttackOutbox();
    }
  }

  function publishProgress(force = false) {
    if (!bottle || (!force && tick - lastProgressTick < 15)) return;
    const record = makeRecord({ type: 'progress/tick', payload: { phase: bottle.phase, stateHash: hashState(bottle) } });
    lastProgressTick = tick;
    emitRecord(record);
  }

  async function declareTerminal() {
    if (!bottle || terminalDeclared) return;
    const multiplayer = (lifecycle?.playerIds.length ?? 0) > 1;
    const result = bottle.phase === 'lost' ? 'lost' : multiplayer && bottle.phase === 'countdown' ? 'cleared' : undefined;
    if (!result) return;
    terminalDeclared = true;
    try {
      const terminalRef = ref(realtimeDatabase!, `games/${gameId}/terminals/${playerId}`);
      if (!(await get(terminalRef)).exists()) {
        await set(terminalRef, {
          type: 'player/terminal', playerId, tick, result, stateHash: hashState(bottle),
          serverTime: serverTimestamp()
        });
      }
    } catch {
      terminalDeclared = false;
    }
  }

  function loop(now: number) {
    if (destroyed || !ready || suspended || matchFinished || playerFinished) return;
    if (lastTime === undefined) lastTime = now;
    accumulator += Math.min(now - lastTime, 250);
    lastTime = now;
    const phaseBefore = bottle?.phase;
    while (accumulator >= 1000 / PILL_BOTTLE_RULES.tickRate) {
      if (!bottle || bottle.phase === 'lost' || (bottle.phase === 'countdown' && (lifecycle?.playerIds.length ?? 0) > 1)) { accumulator = 0; break; }
      handleClearEvents(advanceTick(bottle));
      tick = bottle.tick;
      accumulator -= 1000 / PILL_BOTTLE_RULES.tickRate;
    }
    if (bottle?.phase !== phaseBefore || (bottle?.phase === 'lost' && lastProgressTick !== tick)) publishProgress(true);
    else publishProgress();
    void declareTerminal();
    publish();
    frame = requestAnimationFrame(loop);
  }

  const unsubscribe: Unsubscribe = onValue(ref(realtimeDatabase, `games/${gameId}/start`), async (snapshot) => {
    if (!snapshot.exists() || ready || initializing) return;
    initializing = true;
    try {
      const start = parsePillStart(snapshot.val());
      audioOutput = start.audioOutput;
      participantIds = Object.keys(start.players);
      if (!start.players[playerId]) throw new Error('Player is not part of this pill-bottle/3 game.');
      const writerRef = ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/writer`);
      const writerClaim = await runTransaction(writerRef, (current) => current === null || current?.epochId === epochId
        ? { epochId, clientId: installationId() }
        : undefined, { applyLocally: false });
      if (!writerClaim.committed || writerClaim.snapshot.val()?.epochId !== epochId) {
        ownershipConflict = true;
        throw new Error('This controller is already active in another tab.');
      }
      ownsWriter = true;
      await onDisconnect(writerRef).remove();
      stopWriter = onValue(writerRef, (writer) => {
        if (!ownsWriter || writer.val()?.epochId === epochId) return;
        ownsWriter = false;
        ownershipConflict = true;
        suspended = true;
        cancelAnimationFrame(frame);
        publish('Control moved to another tab or device.');
      });
      const historySnapshot = await get(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
      const byId = new Map<string, ControllerRecord>();
      historySnapshot.forEach((child) => {
        const record = withoutServerTime(parsePillControllerRecord(child.key!, child.val()));
        if (record.playerId === playerId) byId.set(record.commandId, record);
      });
      for (const record of outbox) byId.set(record.commandId, record);
      const records = [...byId.values()].sort((left, right) => left.clientSeq - right.clientSeq);
      for (const record of records) if (record.type === 'attack/rain') appliedAttacks.add(record.payload.attackId);
      records.forEach((record, index) => {
        if (record.clientSeq !== index + 1) throw new Error('Controller record history has a sequence gap.');
        if (index > 0 && record.tick < records[index - 1].tick) throw new Error('Controller record ticks moved backward.');
      });

      const checkpoint = loadControllerCheckpoint(gameId, playerId);
      const checkpointRecord = checkpoint && records.find((record) => record.commandId === checkpoint.commandId
        && record.clientSeq === checkpoint.clientSeq && record.tick === checkpoint.tick);
      bottle = checkpointRecord ? deserializeBottle(checkpoint!.state) : createBottle(start.seed, start.players[playerId].seat, start.round);
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
      const interactions = ref(realtimeDatabase!, `games/${gameId}/interactions`);
      const existingInteractions = await get(interactions);
      const existingInteractionKeys = new Set<string>();
      existingInteractions.forEach((child) => { existingInteractionKeys.add(child.key!); });
      ready = true;
      stopInteractions = onChildAdded(interactions, (child) => {
        try {
          const interaction = parsePillAttackInteraction(child.val());
          if (!existingInteractionKeys.delete(child.key!)) rainSignal++;
          if (!interaction.targetPlayerIds.includes(playerId) || appliedAttacks.has(interaction.attackId) || !bottle) {
            publish();
            return;
          }
          const input: PillRainInput = {
            type: 'attack/rain', payload: {
              attackId: interaction.attackId,
              colors: interaction.colors,
              columns: attackColumns(interaction.attackId, interaction.colors.length)
            }
          };
          applyInput(bottle, input);
          const record = makeRecord(input);
          appliedAttacks.add(interaction.attackId);
          emitRecord(record);
          if (bottle.phase === 'lost') { publishProgress(true); void declareTerminal(); }
          publish();
        } catch (cause) {
          publish(cause instanceof Error ? cause.message : String(cause));
        }
      }, (cause) => publish(cause.message));
      publishProgress(true);
      void declareTerminal();
      publish();
      void flushOutbox();
      void flushAttackOutbox();
      frame = requestAnimationFrame(loop);
    } catch (cause) {
      publish(cause instanceof Error ? cause.message : String(cause));
    } finally {
      initializing = false;
    }
  }, (error) => publish(error.message));

  const online = () => { void flushOutbox(); void flushAttackOutbox(); };
  window.addEventListener('online', online);

  function suspend() {
    if (!ready || suspended || matchFinished) return;
    publishProgress(true);
    suspended = true;
    cancelAnimationFrame(frame);
    lastTime = undefined;
    accumulator = 0;
  }

  function resume() {
    if (!ready || !suspended || destroyed || matchFinished) return;
    suspended = false;
    lastTime = undefined;
    publishProgress(true);
    frame = requestAnimationFrame(loop);
  }

  async function command(input: PillCommand) {
    if (!ready || !bottle || bottle.phase !== 'playing' || matchFinished) return;
    const phaseBefore = bottle.phase;
    handleClearEvents(applyInput(bottle, input));
    const record = makeRecord(input);
    emitRecord(record);
    const phaseAfter = bottle.phase as BottleState['phase'];
    if (phaseAfter !== phaseBefore) publishProgress(true);
    if (phaseAfter === 'lost') {
      void declareTerminal();
    }
    lastCommand = `${input.type} · tick ${tick}`;
    publish();
  }

  return {
    command,
    requestRematch: () => requestPillBottleRematch(gameId),
    async takeOver() {
      if (!realtimeDatabase) return;
      await set(ref(realtimeDatabase, `games/${gameId}/players/${playerId}/writer`), null);
      window.location.reload();
    },
    suspend,
    resume,
    destroy() {
      if (ready && !suspended) publishProgress(true);
      destroyed = true;
      unsubscribe();
      stopLifecycle();
      stopInteractions();
      stopWriter();
      cancelAnimationFrame(frame);
      if (retryTimer) clearTimeout(retryTimer);
      if (ownsWriter && realtimeDatabase) {
        const writerRef = ref(realtimeDatabase, `games/${gameId}/players/${playerId}/writer`);
        void onDisconnect(writerRef).cancel();
        void runTransaction(writerRef, (current) => current?.epochId === epochId ? null : current, { applyLocally: false });
      }
      window.removeEventListener('online', online);
    }
  };
}

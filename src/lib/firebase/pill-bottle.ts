import { get, onChildAdded, onValue, push, ref, serverTimestamp, set, type Unsubscribe } from 'firebase/database';
import { auth, realtimeDatabase } from './config';
import { FixedTickClock } from '$lib/runtime/fixed-tick-clock';
import { requestRematchReady, startRematch } from '$lib/runtime/rematch';
import { subscribeInteractions } from '$lib/runtime/interactions';
import { WriterLease } from '$lib/runtime/writer-lease';
import { DurableOutbox } from '$lib/runtime/durable-outbox';
import {
  advanceTick,
  advanceToTick,
  attackColors,
  attackColumns,
  applyInput,
  createBottle,
  deserializeBottle,
  derivePillRoundPoints,
  derivePillMatchLifecycle,
  hashState,
  PillBottleObserver,
  PILL_BOTTLE_RULES,
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
  opponents?: PlayerProgress[];
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
    const roundPoints = derivePillRoundPoints(startDefinition, lifecycle, histories);
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
      previousPoints = await loadPreviousPillScores(start.previousGameId, start.matchId);
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
  return requestRematchReady(gameId);
}

export async function startPillBottleRematch(gameId: string) {
  return startRematch(gameId, parsePillStart, start => ({
    advance: Object.keys(start.players).length > 1 && start.round + 1 < PILL_BOTTLE_RULES.matchRounds
  }));
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
  receiveStart?: (start: ReturnType<typeof parsePillStart>) => void,
  manageRematches = true
) {
  if (!realtimeDatabase) throw new Error('Firebase is unavailable.');
  let destroyed = false;
  let frame = 0;
  const clock = new FixedTickClock(PILL_BOTTLE_RULES.tickRate);
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
    if (manageRematches && lifecycle.allReady && !rematchStarting) {
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
    for (let ticks = clock.consume(now); ticks > 0; ticks--) {
      if (!matchFinished) for (const [playerId, observer] of observers) {
        if (!terminalPlayerIds.has(playerId)) observer.advance();
      }
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
  return subscribeInteractions(realtimeDatabase,gameId,parsePillAttackInteraction,()=>receive(),fail);
}

function applyRecord(state: BottleState, record: ControllerRecord) {
  advanceToTick(state, record.tick, []);
  if (record.type !== 'progress/tick') applyInput(state, record);
}

async function loadPreviousPillScores(previousGameId: string | undefined, matchId: string) {
  const totals: Record<string, number> = {};
  let gameId = previousGameId;
  while (gameId && realtimeDatabase) {
    const startSnapshot = await get(ref(realtimeDatabase, `games/${gameId}/start`));
    if (!startSnapshot.exists()) break;
    const start = parsePillStart(startSnapshot.val());
    if (start.matchId !== matchId) break;
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
    const points = derivePillRoundPoints(start, lifecycle, histories);
    for (const playerId of playerIds) totals[playerId] = (totals[playerId] ?? 0) + points[playerId];
    gameId = start.previousGameId;
  }
  return totals;
}

export function createPillBottleController(gameId: string, receive: (state: ControllerState) => void) {
  if (!auth?.currentUser || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const playerId = auth.currentUser.uid;
  let tick = 0;
  let clientSeq = 0;
  let lastProgressTick = -1;
  let frame = 0;
  const clock = new FixedTickClock(PILL_BOTTLE_RULES.tickRate);
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
  let participantIds: string[] = [];
  let opponents: PlayerProgress[] = [];
  let stopInteractions = () => {};
  let stopOpponents = () => {};
  const appliedAttacks = new Set<string>();
  const initialOutbox = loadControllerOutbox(gameId, playerId);
  const initialAttackOutbox = loadAttackOutbox(gameId, playerId);

  const publish = (error?: string) => receive({
    playerId, tick, ready, bottle: bottle ? structuredClone(bottle) : undefined, lastCommand, error, lifecycle, audioOutput, rainSignal, ownershipConflict,
    opponents: opponents.map((opponent) => ({ ...opponent, state: structuredClone(opponent.state) }))
  });

  const lease = new WriterLease(realtimeDatabase, `games/${gameId}/players/${playerId}/writer`, () => {
    ownershipConflict = true; ready = false; suspended = true; cancelAnimationFrame(frame);
    publish('Control moved to another tab or device.');
  });
  const epochId = lease.epochId;
  const controllerOutbox = new DurableOutbox<PendingPillControllerRecord>({
    initial: initialOutbox, order: (a,b) => a.clientSeq-b.clientSeq, identify: item => item.commandId,
    persist: items => saveControllerOutbox(gameId,playerId,items),
    deliver: async record => { const {commandId,...data}=record; await set(ref(realtimeDatabase!,`games/${gameId}/players/${playerId}/records/${commandId}`),{...data,serverTime:serverTimestamp()}); }
  });
  const interactionOutbox = new DurableOutbox<PendingPillAttackInteraction>({
    initial: initialAttackOutbox, order: () => 0, identify: item => item.interactionId,
    persist: items => saveAttackOutbox(gameId,playerId,items),
    deliver: async pending => { const {interactionId,...data}=pending; await set(ref(realtimeDatabase!,`games/${gameId}/interactions/${interactionId}`),{...data,serverTime:serverTimestamp()}); }
  });

  const stopLifecycle = subscribePillBottleLifecycle(gameId, (next) => {
    lifecycle = next;
    matchFinished = next.finished;
    playerFinished = next.terminalPlayerIds.includes(playerId);
    if (matchFinished) {
      cancelAnimationFrame(frame);
      clock.reset();
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

  function queueRecord(record: PendingPillControllerRecord) {
    if (!bottle) return;
    controllerOutbox.enqueue(record);
    clientSeq = record.clientSeq;
  }

  function finishRecord(record: PendingPillControllerRecord) {
    if (!bottle) return;
    try { saveControllerCheckpoint(gameId, playerId, record, bottle); }
    catch { /* Checkpoints are optional caches; the durable outbox remains replayable. */ }
    void controllerOutbox.flush();
  }

  function makeRecord(input: PillInput | PillRainInput | { type: 'progress/tick'; payload: { phase: BottleState['phase']; stateHash: string } }) {
    if (tick < lastProgressTick) throw new Error('A controller record cannot precede its latest progress tick.');
    const commandRef = push(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
    if (!commandRef.key) throw new Error('Could not allocate a controller record identifier.');
    return { commandId: commandRef.key, playerId, epochId, clientSeq: clientSeq + 1, tick, ...input } as PendingPillControllerRecord;
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
      interactionOutbox.enqueue(pending);
    }
  }

  function publishProgress(force = false) {
    if (!bottle || (!force && tick - lastProgressTick < 15)) return;
    const record = makeRecord({ type: 'progress/tick', payload: { phase: bottle.phase, stateHash: hashState(bottle) } });
    queueRecord(record);
    lastProgressTick = tick;
    finishRecord(record);
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
    const phaseBefore = bottle?.phase;
    for (let ticks = clock.consume(now); ticks > 0; ticks--) {
      if (!bottle || bottle.phase === 'lost' || (bottle.phase === 'countdown' && (lifecycle?.playerIds.length ?? 0) > 1)) { clock.reset(); break; }
      handleClearEvents(advanceTick(bottle));
      tick = bottle.tick;
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
      stopOpponents();
      stopOpponents = subscribePillBottleProgress(gameId, (next) => {
        opponents = next.filter((candidate) => candidate.playerId !== playerId);
        publish();
      }, (cause) => publish(cause.message), undefined, undefined, false);
      if (!await lease.claim()) {
        ownershipConflict = true;
        throw new Error('This controller is already active in another tab.');
      }
      const historySnapshot = await get(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/records`));
      const byId = new Map<string, ControllerRecord>();
      historySnapshot.forEach((child) => {
        const record = withoutServerTime(parsePillControllerRecord(child.key!, child.val()));
        if (record.playerId === playerId) byId.set(record.commandId, record);
      });
      for (const record of controllerOutbox.values()) byId.set(record.commandId, record);
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
      if (records.length > 0) {
        try { saveControllerCheckpoint(gameId, playerId, records.at(-1)!, bottle); }
        catch { /* Replaying from the immutable journal remains valid. */ }
      }

      await set(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/epochs/${epochId}`), {
        clientId: lease.clientId, startedFromTick: tick, startedFromCommandSeq: clientSeq,
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
          const record = makeRecord(input);
          queueRecord(record);
          applyInput(bottle, input);
          appliedAttacks.add(interaction.attackId);
          finishRecord(record);
          if (bottle.phase === 'lost') { publishProgress(true); void declareTerminal(); }
          publish();
        } catch (cause) {
          publish(cause instanceof Error ? cause.message : String(cause));
        }
      }, (cause) => publish(cause.message));
      publishProgress(true);
      void declareTerminal();
      publish();
      void controllerOutbox.flush();
      void interactionOutbox.flush();
      frame = requestAnimationFrame(loop);
    } catch (cause) {
      publish(cause instanceof Error ? cause.message : String(cause));
    } finally {
      initializing = false;
    }
  }, (error) => publish(error.message));

  const online = () => { void controllerOutbox.flush(); void interactionOutbox.flush(); };
  window.addEventListener('online', online);

  function suspend() {
    if (!ready || suspended || matchFinished) return;
    publishProgress(true);
    suspended = true;
    cancelAnimationFrame(frame);
    clock.reset();
  }

  function resume() {
    if (!ready || !suspended || destroyed || matchFinished) return;
    suspended = false;
    clock.reset();
    publishProgress(true);
    frame = requestAnimationFrame(loop);
  }

  async function command(input: PillCommand) {
    if (!ready || !bottle || bottle.phase !== 'playing' || matchFinished) return;
    const phaseBefore = bottle.phase;
    const record = makeRecord(input);
    queueRecord(record);
    handleClearEvents(applyInput(bottle, input));
    finishRecord(record);
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
      if (await lease.takeOver()) { ownershipConflict=false;ready=true;suspended=false;clock.reset();frame=requestAnimationFrame(loop);publish(); }
    },
    suspend,
    resume,
    destroy() {
      if (ready && !suspended) publishProgress(true);
      destroyed = true;
      unsubscribe();
      stopLifecycle();
      stopInteractions();
      stopOpponents();
      cancelAnimationFrame(frame);
      controllerOutbox.destroy();interactionOutbox.destroy();void lease.release();
      window.removeEventListener('online', online);
    }
  };
}

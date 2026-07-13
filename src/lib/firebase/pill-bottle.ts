import { doc, serverTimestamp as firestoreTimestamp, updateDoc } from 'firebase/firestore';
import { onValue, push, ref, serverTimestamp, set, type Unsubscribe } from 'firebase/database';
import { auth, firestore, realtimeDatabase } from './config';
import type { RoomPlayer } from './rooms';
import {
  advanceTick,
  advanceToTick,
  applyInput,
  createBottle,
  hashState,
  PILL_BOTTLE_RULES,
  PILL_BOTTLE_RULES_VERSION,
  PILL_BOTTLE_SETTINGS,
  type BottleState,
  type PillInput,
  type ReplayCommand
} from '$lib/game/pill-bottle';
import { parsePillCommand, parsePillProgress, parsePillStart } from '$lib/protocol/pill-bottle';

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
    type: 'game/started',
    roomId,
    ruleset: 'pill-bottle',
    rulesVersion: PILL_BOTTLE_RULES_VERSION,
    seed,
    tickRate: PILL_BOTTLE_RULES.tickRate,
    hostUid,
    members: allowedMembers,
    players,
    settings: PILL_BOTTLE_SETTINGS,
    serverTime: serverTimestamp()
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
  state: BottleState;
  stateHash: string;
  reportedStateHash: string;
  hashMatches: boolean;
}

export function subscribePillBottleProgress(gameId: string, receive: (players: PlayerProgress[]) => void, fail: (error: Error) => void) {
  if (!realtimeDatabase) throw new Error('Firebase is unavailable.');
  return onValue(ref(realtimeDatabase, `games/${gameId}`), (snapshot) => {
    try {
      const game = snapshot.val() as Record<string, unknown> | null;
      if (!game?.start) return;
      const start = parsePillStart(game.start);
      const playerData = game.players && typeof game.players === 'object' ? game.players as Record<string, unknown> : {};
      const players: PlayerProgress[] = [];

      for (const [playerId, definition] of Object.entries(start.players)) {
        const data = playerData[playerId] && typeof playerData[playerId] === 'object'
          ? playerData[playerId] as Record<string, unknown> : {};
        if (!data.progress) continue;
        const progress = parsePillProgress(data.progress);
        const commandData = data.commands && typeof data.commands === 'object'
          ? data.commands as Record<string, unknown> : {};
        const commands: ReplayCommand[] = [];
        for (const [commandId, value] of Object.entries(commandData)) {
          const command = parsePillCommand(commandId, value);
          if (command.playerId === playerId && command.clientSeq <= progress.lastClientSeq) commands.push(command.replay);
        }

        const state = createBottle(start.seed, definition.seat);
        advanceToTick(state, progress.tick, commands);
        const stateHash = hashState(state);
        players.push({
          playerId,
          tick: progress.tick,
          state,
          stateHash,
          reportedStateHash: progress.stateHash,
          hashMatches: stateHash === progress.stateHash
        });
      }
      receive(players);
    } catch (cause) {
      fail(cause instanceof Error ? cause : new Error(String(cause)));
    }
  }, fail);
}

function installationId() {
  const existing = localStorage.getItem('drm-client-id');
  if (existing) return existing;
  const created = crypto.randomUUID();
  localStorage.setItem('drm-client-id', created);
  return created;
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
  let destroyed = false;
  let lastCommand: string | undefined;
  let bottle: BottleState | undefined;
  const publish = (error?: string) => receive({
    tick,
    ready,
    bottle: bottle ? structuredClone(bottle) : undefined,
    lastCommand,
    error
  });

  function publishProgress() {
    if (!bottle) return;
    lastProgressTick = tick;
    void set(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/progress`), {
      epochId,
      tick,
      lastClientSeq: clientSeq,
      stateHash: hashState(bottle),
      phase: bottle.phase,
      serverTime: serverTimestamp()
    });
  }

  function loop(now: number) {
    if (destroyed || !ready) return;
    if (lastTime === undefined) lastTime = now;
    accumulator += Math.min(now - lastTime, 250);
    lastTime = now;
    while (accumulator >= 1000 / PILL_BOTTLE_RULES.tickRate) {
      if (!bottle || bottle.phase !== 'playing') {
        accumulator = 0;
        break;
      }
      advanceTick(bottle);
      tick = bottle.tick;
      accumulator -= 1000 / PILL_BOTTLE_RULES.tickRate;
    }
    if (tick - lastProgressTick >= 15) publishProgress();
    publish();
    frame = requestAnimationFrame(loop);
  }

  const unsubscribe: Unsubscribe = onValue(ref(realtimeDatabase, `games/${gameId}/start`), async (snapshot) => {
    if (!snapshot.exists() || ready) return;
    try {
      const start = parsePillStart(snapshot.val());
      if (!start.players[playerId]) throw new Error('Player is not part of this pill-bottle/2 game.');
      await set(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/epochs/${epochId}`), {
        clientId: installationId(),
        startedFromTick: 0,
        startedFromCommandSeq: 0,
        serverTime: serverTimestamp()
      });
      bottle = createBottle(start.seed, start.players[playerId].seat);
      ready = true;
      publishProgress();
      publish();
      frame = requestAnimationFrame(loop);
    } catch (cause) {
      publish(cause instanceof Error ? cause.message : String(cause));
    }
  }, (error) => publish(error.message));

  async function command(input: PillCommand) {
    if (!ready || !bottle) return;
    applyInput(bottle, input);
    publish();
    const commandRef = push(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/commands`));
    const sequence = ++clientSeq;
    await set(commandRef, { ...input, playerId, epochId, clientSeq: sequence, tick, serverTime: serverTimestamp() });
    if (bottle.phase !== 'playing') publishProgress();
    lastCommand = `${input.type} · tick ${tick}`;
    publish();
  }

  return {
    command,
    destroy() {
      destroyed = true;
      unsubscribe();
      cancelAnimationFrame(frame);
    }
  };
}

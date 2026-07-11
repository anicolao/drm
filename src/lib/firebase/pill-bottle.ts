import { doc, serverTimestamp as firestoreTimestamp, updateDoc } from 'firebase/firestore';
import { onValue, push, ref, serverTimestamp, set, type Unsubscribe } from 'firebase/database';
import { auth, firestore, realtimeDatabase } from './config';
import type { RoomPlayer } from './rooms';
import { advanceTick, applyInput, createBottle, type BottleState, type Input } from '$lib/game/pill-bottle';

export type PillCommandType = 'input/move' | 'input/rotate' | 'input/soft-drop-start' | 'input/soft-drop-end' | 'input/hard-drop';
export interface PillCommand { type: PillCommandType; payload: Record<string, string | number>; }

export async function startPillBottleGame(roomId: string, players: RoomPlayer[]) {
  if (!auth?.currentUser || !firestore || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const gameId = crypto.randomUUID();
  const seed = Number(import.meta.env.VITE_E2E_GAME_SEED) || crypto.getRandomValues(new Uint32Array(1))[0];
  const playerSeats = Object.fromEntries(players.map((player, seat) => [player.uid, { seat }]));
  await set(ref(realtimeDatabase, `games/${gameId}/start`), {
    type: 'game/started', roomId, ruleset: 'pill-bottle', rulesVersion: 'pill-bottle/controller-1',
    seed, tickRate: 60, hostUid: auth.currentUser.uid, players: playerSeats, serverTime: serverTimestamp()
  });
  await updateDoc(doc(firestore, 'rooms', roomId), {
    status: 'active', activeGameId: gameId, startedAt: firestoreTimestamp()
  });
  return gameId;
}

export interface ControllerState { tick: number; ready: boolean; bottle?: BottleState; lastCommand?: string; error?: string; }

export function createPillBottleController(gameId: string, receive: (state: ControllerState) => void) {
  if (!auth?.currentUser || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const playerId = auth.currentUser.uid;
  const epochId = crypto.randomUUID();
  let tick = 0; let clientSeq = 0; let lastProgressTick = -1; let frame = 0; let lastTime: number | undefined; let accumulator = 0;
  let ready = false; let destroyed = false; let lastCommand: string | undefined;
  let bottle: BottleState | undefined;
  const publish = (error?: string) => receive({ tick, ready, bottle: bottle ? structuredClone(bottle) : undefined, lastCommand, error });

  function loop(now: number) {
    if (destroyed || !ready) return;
    if (lastTime === undefined) lastTime = now;
    accumulator += Math.min(now - lastTime, 250); lastTime = now;
    while (accumulator >= 1000 / 60) { tick += 1; if(bottle)advanceTick(bottle); accumulator -= 1000 / 60; }
    if (tick % 15 === 0 && tick !== lastProgressTick) { lastProgressTick = tick; void set(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/progress`), {
      epochId, tick, lastClientSeq: clientSeq, phase: bottle?.phase ?? 'controller', state: bottle, serverTime: serverTimestamp()
    }); }
    publish(); frame = requestAnimationFrame(loop);
  }

  const unsubscribe: Unsubscribe = onValue(ref(realtimeDatabase, `games/${gameId}/start`), async (snapshot) => {
    if (!snapshot.exists() || ready) return;
    const start = snapshot.val() as { players?: Record<string, {seat:number}>; tickRate?: number; seed:number };
    if (start.tickRate !== 60 || !start.players?.[playerId]) { publish('Player is not part of this 60 Hz game.'); return; }
    await set(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/epochs/${epochId}`), {
      clientId: localStorage.getItem('drm-client-id') ?? epochId, startedFromTick: 0, startedFromCommandSeq: 0, serverTime: serverTimestamp()
    });
    bottle=createBottle(start.seed,start.players[playerId].seat);ready = true; publish(); frame = requestAnimationFrame(loop);
  }, (error) => publish(error.message));

  async function command(input: PillCommand) {
    if (!ready) return;
    applyInput(bottle!,input as Input);
    publish();
    const commandRef = push(ref(realtimeDatabase!, `games/${gameId}/players/${playerId}/commands`));
    const seq = ++clientSeq;
    await set(commandRef, { ...input, playerId, epochId, clientSeq: seq, tick, serverTime: serverTimestamp() });
    lastCommand = `${input.type} · tick ${tick}`; publish();
  }

  return { command, destroy() { destroyed = true; unsubscribe(); cancelAnimationFrame(frame); } };
}

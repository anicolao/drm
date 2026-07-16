import { doc, serverTimestamp as firestoreTimestamp, updateDoc } from 'firebase/firestore';
import { ref, serverTimestamp, set } from 'firebase/database';
import { auth, firestore, realtimeDatabase } from '$lib/firebase/config';
import type { RoomPlayer } from '$lib/firebase/rooms';

export interface RealtimeGameDefinition<Settings extends object> {
  ruleset: 'pill-bottle' | 'tetris';
  rulesVersion: string;
  tickRate: number;
  settings: Settings;
  minimumPlayers?: number;
  maximumPlayers?: number;
}

export function randomGameSeed() {
  return Number(import.meta.env.VITE_E2E_GAME_SEED) || crypto.getRandomValues(new Uint32Array(1))[0];
}

export async function startRealtimeGame<Settings extends object>(
  definition: RealtimeGameDefinition<Settings>, roomId: string, members: RoomPlayer[], hostMode: 'player' | 'display'
) {
  if (!auth?.currentUser || !firestore || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const minimum = definition.minimumPlayers ?? 1, maximum = definition.maximumPlayers ?? 4;
  if (members.length < minimum || members.length > maximum) throw new Error(`A game requires between ${minimum} and ${maximum} room members.`);
  const hostUid = auth.currentUser.uid;
  const participants = members.filter((member) => hostMode === 'player' || member.uid !== hostUid)
    .sort((left, right) => left.uid.localeCompare(right.uid));
  if (!participants.length) throw new Error('A TV game requires at least one joined controller.');
  const gameId = crypto.randomUUID();
  await set(ref(realtimeDatabase, `games/${gameId}/start`), {
    type: 'game/started', roomId, ruleset: definition.ruleset, rulesVersion: definition.rulesVersion,
    seed: randomGameSeed(), tickRate: definition.tickRate, hostUid,
    members: Object.fromEntries(members.map((member) => [member.uid, true])),
    players: Object.fromEntries(participants.map((player, seat) => [player.uid, { seat }])),
    audioOutput: hostMode === 'display' ? 'cast' : 'controllers', settings: definition.settings,
    matchId: gameId, round: 0, serverTime: serverTimestamp()
  });
  await updateDoc(doc(firestore, 'rooms', roomId), { status: 'active', activeGameId: gameId, startedAt: firestoreTimestamp() });
  return gameId;
}

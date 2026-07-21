import { get, ref, serverTimestamp, set } from "firebase/database";
import type { Database } from "firebase/database";

export const writeEpochCheckpoint = async (
  realtimeDatabase: Database,
  gameId: string,
  playerId: string,
  epochId: string,
  clientId: string,
  startedFromTick: number,
  startedFromCommandSeq: number,
) => {
  const epochRef = ref(
    realtimeDatabase,
    `games/${gameId}/players/${playerId}/epochs/${epochId}`,
  );

  if ((await get(epochRef)).exists()) return;

  await set(epochRef, {
    clientId,
    startedFromTick,
    startedFromCommandSeq,
    serverTime: serverTimestamp(),
  });
};

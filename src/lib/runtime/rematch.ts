import { doc, serverTimestamp as firestoreTimestamp, updateDoc } from 'firebase/firestore';
import { get, ref, runTransaction, serverTimestamp, set } from 'firebase/database';
import { auth, firestore, realtimeDatabase } from '$lib/firebase/config';
import { randomGameSeed } from './start-game';

export interface RematchStart {
  type: 'game/started'; roomId: string; ruleset: string; rulesVersion: string; seed: number;
  tickRate: number; hostUid: string; audioOutput: 'cast'|'controllers'; members: Record<string,true>;
  players: Record<string,{seat:number}>; settings: object; matchId: string;
  round: number; previousGameId?: string;
}

export async function requestRematchReady(gameId:string) {
  if (!auth?.currentUser || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const playerId=auth.currentUser.uid,readyRef=ref(realtimeDatabase,`games/${gameId}/rematch/ready/${playerId}`);
  if (!(await get(readyRef)).exists()) await set(readyRef,{playerId,serverTime:serverTimestamp()});
}

export async function startRematch<Start extends RematchStart>(
  gameId:string, parse:(value:unknown)=>Start,
  nextRound:(start:Start)=>{advance:boolean;settings?:Start['settings']}
) {
  if (!auth?.currentUser || !firestore || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const snapshot=await get(ref(realtimeDatabase,`games/${gameId}/start`));
  if (!snapshot.exists()) throw new Error('The previous game no longer exists.');
  const start=parse(snapshot.val());
  if (!start.players[auth.currentUser.uid]) return;
  const readiness=await get(ref(realtimeDatabase,`games/${gameId}/rematch/ready`)),ready=new Set<string>();
  readiness.forEach(child=>{const value=child.val();if(value?.playerId===child.key)ready.add(value.playerId)});
  if (!Object.keys(start.players).every(id=>ready.has(id))) return;
  const proposed=crypto.randomUUID(),reservation=ref(realtimeDatabase,`games/${gameId}/rematch/nextGameId`);
  const claim=await runTransaction(reservation,current=>current===null?proposed:undefined,{applyLocally:false});
  const nextGameId=claim.committed?claim.snapshot.val():(await get(reservation)).val();
  if(typeof nextGameId!=='string')throw new Error('Could not reserve the rematch.');
  const policy=nextRound(start),nextStart=ref(realtimeDatabase,`games/${nextGameId}/start`);
  try {
    await set(nextStart,{type:'game/started',roomId:start.roomId,ruleset:start.ruleset,rulesVersion:start.rulesVersion,
      seed:randomGameSeed(),tickRate:start.tickRate,hostUid:start.hostUid,members:start.members,players:start.players,
      settings:policy.settings??start.settings,audioOutput:start.audioOutput,
      matchId:policy.advance?start.matchId:nextGameId,round:policy.advance?start.round+1:0,
      previousGameId:gameId,serverTime:serverTimestamp()});
  } catch(cause) {
    const existing=await get(nextStart).catch(()=>undefined);
    if(!existing?.exists()||parse(existing.val()).roomId!==start.roomId)throw cause;
  }
  await updateDoc(doc(firestore,'rooms',start.roomId),{status:'active',activeGameId:nextGameId,startedAt:firestoreTimestamp()});
  return nextGameId as string;
}

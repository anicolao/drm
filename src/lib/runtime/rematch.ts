import { doc, serverTimestamp as firestoreTimestamp, updateDoc } from 'firebase/firestore';
import { get, ref, runTransaction, serverTimestamp, set } from 'firebase/database';
import { auth, firestore, realtimeDatabase } from '$lib/firebase/config';
import { randomGameSeed } from './start-game';

export interface RematchStart {
  type: 'game/started'; roomId: string; ruleset: string; rulesVersion: string; seed: number;
  tickRate: number; hostUid: string; audioOutput: 'cast'|'controllers'; members: Record<string,true>;
  players: Record<string,{seat:number;level:number}>; settings: object; matchId: string;
  round: number; previousGameId?: string; scores?:Record<string,number>;
}

export async function requestRematchReady(gameId:string,level:number) {
  if (!auth?.currentUser || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const playerId=auth.currentUser.uid,readyRef=ref(realtimeDatabase,`games/${gameId}/rematch/ready/${playerId}`);
  if(!Number.isInteger(level)||level<0||level>20)throw new Error('Level must be between 0 and 20.');
  if (!(await get(readyRef)).exists()) await set(readyRef,{playerId,level,serverTime:serverTimestamp()});
}

export async function startRematch<Start extends RematchStart>(
  gameId:string, parse:(value:unknown)=>Start,
  nextRound:(start:Start)=>{advance:boolean;settings?:Start['settings'];scores?:Record<string,number>;round?:number}
) {
  if (!auth?.currentUser || !firestore || !realtimeDatabase) throw new Error('Firebase is unavailable.');
  const snapshot=await get(ref(realtimeDatabase,`games/${gameId}/start`));
  if (!snapshot.exists()) throw new Error('The previous game no longer exists.');
  const start=parse(snapshot.val());
  if (!start.players[auth.currentUser.uid]) return;
  const readiness=await get(ref(realtimeDatabase,`games/${gameId}/rematch/ready`)),ready=new Map<string,number>();
  readiness.forEach(child=>{const value=child.val();if(value?.playerId===child.key&&Number.isInteger(value.level))ready.set(value.playerId,value.level)});
  if (!Object.keys(start.players).every(id=>ready.has(id))) return;
  const proposed=crypto.randomUUID(),reservation=ref(realtimeDatabase,`games/${gameId}/rematch/nextGameId`);
  const claim=await runTransaction(reservation,current=>current===null?proposed:undefined,{applyLocally:false});
  const nextGameId=claim.snapshot.val()??(await get(reservation)).val();
  if(typeof nextGameId!=='string')throw new Error('Could not reserve the rematch.');
  // Every controller observes the all-ready transition. Only the controller that
  // won the reservation may create the successor; the others follow the room's
  // activeGameId update instead of attempting a write that rules must reject.
  if(!claim.committed)return nextGameId;
  const policy=nextRound(start),nextStart=ref(realtimeDatabase,`games/${nextGameId}/start`);
  await set(nextStart,{type:'game/started',roomId:start.roomId,ruleset:start.ruleset,rulesVersion:start.rulesVersion,
    seed:randomGameSeed(),tickRate:start.tickRate,hostUid:start.hostUid,members:start.members,
    players:Object.fromEntries(Object.entries(start.players).map(([id,player])=>[id,{...player,level:start.ruleset==='quarry-match'?Math.max(...ready.values()):ready.get(id)!}])),
    settings:policy.settings??start.settings,audioOutput:start.audioOutput,
    ...(policy.scores??start.scores?{scores:policy.scores??start.scores}:{}),
    matchId:policy.advance?start.matchId:nextGameId,round:policy.advance?(policy.round??start.round+1):0,
    previousGameId:gameId,serverTime:serverTimestamp()});
  await updateDoc(doc(firestore,'rooms',start.roomId),{status:'active',activeGameId:nextGameId,startedAt:firestoreTimestamp()});
  return nextGameId as string;
}

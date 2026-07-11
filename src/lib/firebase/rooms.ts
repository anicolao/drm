import { signInAnonymously } from 'firebase/auth';
import { collection, doc, getDoc, onSnapshot, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { auth, firestore } from './config';

let anonymousSignIn: ReturnType<typeof signInAnonymously> | undefined;

export async function ensureAnonymousUser() {
  if (!auth) throw new Error('Firebase is not configured.');
  if (auth.currentUser) return auth.currentUser;
  anonymousSignIn ??= signInAnonymously(auth);
  try { return (await anonymousSignIn).user; }
  finally { anonymousSignIn = undefined; }
}

function validName(displayName: string) {
  const name = displayName.trim();
  if (!name || name.length > 24) throw new Error('Player name must be between 1 and 24 characters.');
  return name;
}

export async function createRoom(code: string, displayName: string) {
  if (!firestore) throw new Error('Firebase is not configured.');
  const user = await ensureAnonymousUser();
  const roomId = crypto.randomUUID();
  await setDoc(doc(firestore, 'rooms', roomId), { code, hostUid: user.uid, ruleset: 'tetris', status: 'lobby', createdAt: serverTimestamp() });
  await setDoc(doc(firestore, 'roomCodes', code), { roomId, hostUid: user.uid });
  await setDoc(doc(firestore, 'rooms', roomId, 'players', user.uid), {
    uid: user.uid, displayName: validName(displayName), role: 'host', joinedAt: serverTimestamp()
  });
  return roomId;
}

export async function roomExists(code: string) {
  if (!firestore) throw new Error('Firebase is not configured.');
  await ensureAnonymousUser();
  return (await getDoc(doc(firestore, 'roomCodes', code))).exists();
}

async function roomRefForCode(code: string) {
  if (!firestore) throw new Error('Firebase is not configured.');
  await ensureAnonymousUser();
  const codeSnapshot = await getDoc(doc(firestore, 'roomCodes', code));
  if (!codeSnapshot.exists()) throw new Error('Room not found.');
  return doc(firestore, 'rooms', codeSnapshot.data().roomId as string);
}

export async function getRoom(code: string) {
  const snapshot = await getDoc(await roomRefForCode(code));
  if (!snapshot.exists()) throw new Error('Room not found.');
  return { id: snapshot.id, ...snapshot.data() } as { id: string; hostUid: string; status: 'lobby'; ruleset: 'tetris' | 'doctor' };
}

export async function updateRoomRuleset(code: string, ruleset: 'tetris' | 'doctor') {
  await updateDoc(await roomRefForCode(code), { ruleset });
}

export interface RoomPlayer { uid: string; displayName: string; role: 'host' | 'player' }

export async function joinRoom(code: string, displayName: string) {
  if (!firestore) throw new Error('Firebase is not configured.');
  const user = await ensureAnonymousUser();
  const room = await getRoom(code);
  await setDoc(doc(firestore, 'rooms', room.id, 'players', user.uid), {
    uid: user.uid, displayName: validName(displayName), role: user.uid === room.hostUid ? 'host' : 'player', joinedAt: serverTimestamp()
  }, { merge: true });
  return room;
}

export function subscribeRoomPlayers(roomId: string, receive: (players: RoomPlayer[]) => void, fail: (error: Error) => void) {
  if (!firestore) throw new Error('Firebase is not configured.');
  return onSnapshot(collection(firestore, 'rooms', roomId, 'players'),
    (snapshot) => receive(snapshot.docs.map((entry) => entry.data() as RoomPlayer)), fail);
}

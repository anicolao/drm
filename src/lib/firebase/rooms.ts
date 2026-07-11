import { signInAnonymously } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { auth, firestore } from './config';

let anonymousSignIn: ReturnType<typeof signInAnonymously> | undefined;

export async function ensureAnonymousUser() {
  if (!auth) throw new Error('Firebase is not configured.');
  if (auth.currentUser) return auth.currentUser;
  anonymousSignIn ??= signInAnonymously(auth);
  try { return (await anonymousSignIn).user; }
  finally { anonymousSignIn = undefined; }
}

export async function createRoom(code: string) {
  if (!firestore) throw new Error('Firebase is not configured.');
  const user = await ensureAnonymousUser();
  const roomId = crypto.randomUUID();
  await setDoc(doc(firestore, 'rooms', roomId), { code, hostUid: user.uid, ruleset: 'tetris', status: 'lobby', createdAt: serverTimestamp() });
  await setDoc(doc(firestore, 'roomCodes', code), { roomId, hostUid: user.uid });
}

export async function roomExists(code: string) {
  if (!firestore) return true;
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
  return snapshot.data() as { status: 'lobby' | 'active'; ruleset: 'tetris' | 'doctor' };
}

export async function startRoom(code: string, ruleset: 'tetris' | 'doctor') {
  await updateDoc(await roomRefForCode(code), { status: 'active', ruleset, startedAt: serverTimestamp() });
}

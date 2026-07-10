import { signInAnonymously } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, firestore } from './config';

export async function ensureAnonymousUser() {
  if (!auth) throw new Error('Firebase is not configured.');
  if (auth.currentUser) return auth.currentUser;
  return (await signInAnonymously(auth)).user;
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

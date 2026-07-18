import { signInAnonymously } from 'firebase/auth';
import { collection, doc, getDoc, onSnapshot, runTransaction, serverTimestamp, updateDoc, type Unsubscribe } from 'firebase/firestore';
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
  const name = validName(displayName);
  await runTransaction(firestore, async (transaction) => {
    const codeRef = doc(firestore!, 'roomCodes', code);
    if ((await transaction.get(codeRef)).exists()) throw new Error('Room code is already in use.');
    const roomRef = doc(firestore!, 'rooms', roomId);
    transaction.set(roomRef, { code, hostUid: user.uid, ruleset: 'tetris', status: 'lobby', playerCount: 1, createdAt: serverTimestamp() });
    transaction.set(codeRef, { roomId, hostUid: user.uid });
    transaction.set(doc(firestore!, 'rooms', roomId, 'players', user.uid), {
      uid: user.uid, displayName: name, role: 'host', level: 0, joinedAt: serverTimestamp()
    });
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
  return { id: snapshot.id, ...snapshot.data() } as { id: string; hostUid: string; status: 'lobby' | 'active'; ruleset: 'tetris' | 'doctor' | 'quarry'; activeGameId?: string };
}

export async function updateRoomRuleset(code: string, ruleset: 'tetris' | 'doctor' | 'quarry') {
  await updateDoc(await roomRefForCode(code), { ruleset });
}

export interface RoomPlayer { uid: string; displayName: string; role: 'host' | 'player'; level?: number }

export async function updatePlayerLevel(roomId:string,level:number){
  if(!auth?.currentUser||!firestore)throw new Error('Firebase is not configured.');
  if(!Number.isInteger(level)||level<0||level>20)throw new Error('Level must be between 0 and 20.');
  await updateDoc(doc(firestore,'rooms',roomId,'players',auth.currentUser.uid),{level});
}

export async function joinRoom(code: string, displayName: string) {
  if (!firestore) throw new Error('Firebase is not configured.');
  const user = await ensureAnonymousUser();
  const room = await getRoom(code);
  const name = validName(displayName);
  await runTransaction(firestore, async (transaction) => {
    const roomRef = doc(firestore!, 'rooms', room.id);
    const playerRef = doc(firestore!, 'rooms', room.id, 'players', user.uid);
    const [currentRoom, currentPlayer] = await Promise.all([transaction.get(roomRef), transaction.get(playerRef)]);
    if (!currentRoom.exists()) throw new Error('Room not found.');
    const roomData = currentRoom.data() as { status: 'lobby' | 'active'; hostUid: string; playerCount?: number };
    if (!currentPlayer.exists()) {
      if (roomData.status !== 'lobby') throw new Error('This game has already started.');
      if ((roomData.playerCount ?? 0) >= 4) throw new Error('This room already has four players.');
      transaction.update(roomRef, { playerCount: (roomData.playerCount ?? 0) + 1 });
    }
    transaction.set(playerRef, {
      uid: user.uid, displayName: name, role: user.uid === roomData.hostUid ? 'host' : 'player', joinedAt: serverTimestamp(),
      level:currentPlayer.exists()&&Number.isInteger(currentPlayer.data().level)?currentPlayer.data().level:0
    }, { merge: true });
  });
  return room;
}

export function subscribeRoomPlayers(roomId: string, receive: (players: RoomPlayer[]) => void, fail: (error: Error) => void) {
  if (!firestore) throw new Error('Firebase is not configured.');
  return onSnapshot(collection(firestore, 'rooms', roomId, 'players'),
    (snapshot) => receive(snapshot.docs.map((entry) => entry.data() as RoomPlayer)), fail);
}

export function subscribeRoom(roomId: string, receive: (room: { status: 'lobby' | 'active'; ruleset: 'tetris' | 'doctor' | 'quarry'; activeGameId?: string }) => void, fail: (error: Error) => void): Unsubscribe {
  if (!firestore) throw new Error('Firebase is not configured.');
  return onSnapshot(doc(firestore, 'rooms', roomId),
    (snapshot) => { if (snapshot.exists()) receive(snapshot.data() as { status: 'lobby' | 'active'; ruleset: 'tetris' | 'doctor' | 'quarry'; activeGameId?: string }); }, fail);
}

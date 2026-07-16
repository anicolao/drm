import { onDisconnect, onValue, ref, runTransaction, set, type Database, type Unsubscribe } from 'firebase/database';

export interface WriterLeaseState {
  epochId: string;
  clientId: string;
}

export function installationId(storage: Pick<Storage, 'getItem' | 'setItem'> | undefined = globalThis.localStorage) {
  const created = crypto.randomUUID();
  try {
    const existing = storage?.getItem('drm-client-id');
    if (existing) return existing;
    storage?.setItem('drm-client-id', created);
  } catch {
    // A lease remains safe when browser persistence is unavailable.
  }
  return created;
}

export class WriterLease {
  readonly epochId = crypto.randomUUID();
  readonly clientId = installationId();
  private owned = false;
  private unsubscribe: Unsubscribe = () => {};
  private database: Database;
  private path: string;
  private lost: () => void;

  constructor(database: Database, path: string, lost: () => void) {
    this.database = database;
    this.path = path;
    this.lost = lost;
  }

  async claim(force = false) {
    const leaseRef = ref(this.database, this.path);
    const result = await runTransaction(leaseRef, current =>
      force || current === null || current?.epochId === this.epochId
        ? { epochId: this.epochId, clientId: this.clientId }
        : undefined,
    { applyLocally: false });
    this.owned = result.committed && result.snapshot.val()?.epochId === this.epochId;
    if (!this.owned) return false;
    await onDisconnect(leaseRef).remove();
    this.unsubscribe();
    this.unsubscribe = onValue(leaseRef, snapshot => {
      if (this.owned && snapshot.val()?.epochId !== this.epochId) {
        this.owned = false;
        this.lost();
      }
    });
    return true;
  }

  async takeOver() {
    return this.claim(true);
  }

  async release() {
    this.unsubscribe();
    const leaseRef = ref(this.database, this.path);
    await onDisconnect(leaseRef).cancel();
    await runTransaction(leaseRef, current => current?.epochId === this.epochId ? null : current, { applyLocally: false });
    this.owned = false;
  }

  async suspend() {
    if (!this.owned) return;
    await set(ref(this.database, this.path), null);
    this.owned = false;
  }

  get ownsWriter() { return this.owned; }
}

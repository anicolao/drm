export interface ReplayRecord {
  commandId: string;
  clientSeq: number;
  tick: number;
  type: string;
}

export interface ReplayAdapter<State, Record extends ReplayRecord> {
  clone(state: State): State;
  tick(state: State): number;
  advanceTo(state: State, targetTick: number): void;
  apply(state: State, record: Record): void;
  hash(state: State): string;
  phase(state: State): string;
  progress(record: Record): { stateHash: string; phase: string } | undefined;
}

export interface ReplaySnapshot<State> {
  displayTick: number;
  controllerTick?: number;
  lag?: number;
  state: State;
  stateHash: string;
  reportedStateHash?: string;
  hashMatches: boolean;
}

export class ReplayObserver<State, Record extends ReplayRecord> {
  private readonly adapter: ReplayAdapter<State, Record>;
  private displayTick: number;
  private state: State;
  private checkpoint: { clientSeq: number; tick: number; state: State };
  private readonly pending = new Map<number, Record>();
  private readonly identities = new Map<string, string>();
  private controllerTick: number | undefined;
  private reportedStateHash: string | undefined;
  private hashMatches = true;

  constructor(adapter: ReplayAdapter<State, Record>, initialState: State, displayTick = 0) {
    this.adapter = adapter;
    this.displayTick = displayTick;
    this.state = adapter.clone(initialState);
    this.checkpoint = { clientSeq: 0, tick: adapter.tick(initialState), state: adapter.clone(initialState) };
    adapter.advanceTo(this.state, displayTick);
  }

  receive(record: Record) {
    const encoded = JSON.stringify(record), existing = this.identities.get(record.commandId);
    if (existing && existing !== encoded) throw new Error(`Conflicting controller record identity: ${record.commandId}`);
    if (existing) return;
    this.identities.set(record.commandId, encoded);
    if (record.clientSeq <= this.checkpoint.clientSeq) return;
    const sequenceRecord = this.pending.get(record.clientSeq);
    if (sequenceRecord && JSON.stringify(sequenceRecord) !== encoded) throw new Error(`Conflicting controller sequence: ${record.clientSeq}`);
    this.pending.set(record.clientSeq, record);
    if (this.adapter.progress(record) && (this.controllerTick === undefined || record.tick >= this.controllerTick)) this.controllerTick = record.tick;
    this.processAvailable();
  }

  advance() {
    this.displayTick++;
    this.adapter.advanceTo(this.state, this.displayTick);
    this.processAvailable();
  }

  snapshot(): ReplaySnapshot<State> {
    return {displayTick:this.displayTick,controllerTick:this.controllerTick,
      lag:this.controllerTick===undefined?undefined:this.displayTick-this.controllerTick,
      state:this.adapter.clone(this.state),stateHash:this.adapter.hash(this.state),
      reportedStateHash:this.reportedStateHash,hashMatches:this.hashMatches};
  }

  private processAvailable() {
    for (;;) {
      const record = this.pending.get(this.checkpoint.clientSeq + 1);
      if (!record || record.tick > this.displayTick) return;
      if (record.tick < this.checkpoint.tick) throw new Error('Controller record tick precedes its checkpoint.');
      const corrected = this.adapter.clone(this.checkpoint.state);
      this.adapter.advanceTo(corrected, record.tick);
      if (this.adapter.tick(corrected) !== record.tick) throw new Error('Controller record extends beyond a terminal game state.');
      const progress = this.adapter.progress(record);
      if (progress) {
        this.reportedStateHash = progress.stateHash;
        this.hashMatches = this.adapter.hash(corrected) === progress.stateHash && this.adapter.phase(corrected) === progress.phase;
      } else this.adapter.apply(corrected, record);
      this.checkpoint = {clientSeq:record.clientSeq,tick:record.tick,state:this.adapter.clone(corrected)};
      this.pending.delete(record.clientSeq);
      this.adapter.advanceTo(corrected, this.displayTick);
      this.state = corrected;
    }
  }
}

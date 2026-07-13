import { advanceTick, applyInput } from './engine.ts';
import { deserializeBottle, hashState, serializeBottle } from './replay.ts';
import type { BottleState, ControllerRecord, SerializedBottleState } from './types.ts';

export interface ObserverSnapshot {
  displayTick: number;
  controllerTick?: number;
  lag?: number;
  state: BottleState;
  stateHash: string;
  reportedStateHash?: string;
  hashMatches: boolean;
}

interface Checkpoint {
  clientSeq: number;
  tick: number;
  state: SerializedBottleState;
}

function advanceDisplayState(state: BottleState, targetTick: number) {
  while (state.tick < targetTick && state.phase === 'playing') advanceTick(state);
}

export class PillBottleObserver {
  private displayTick: number;
  private state: BottleState;
  private checkpoint: Checkpoint;
  private readonly pending = new Map<number, ControllerRecord>();
  private readonly identities = new Map<string, string>();
  private controllerTick: number | undefined;
  private reportedStateHash: string | undefined;
  private hashMatches = true;

  constructor(initialState: BottleState, displayTick = 0) {
    this.displayTick = displayTick;
    this.state = deserializeBottle(serializeBottle(initialState));
    this.checkpoint = { clientSeq: 0, tick: initialState.tick, state: serializeBottle(initialState) };
    advanceDisplayState(this.state, displayTick);
  }

  receive(record: ControllerRecord) {
    const encoded = JSON.stringify(record);
    const existing = this.identities.get(record.commandId);
    if (existing && existing !== encoded) throw new Error(`Conflicting controller record identity: ${record.commandId}`);
    if (existing) return;
    this.identities.set(record.commandId, encoded);
    if (record.clientSeq <= this.checkpoint.clientSeq) return;
    const sequenceRecord = this.pending.get(record.clientSeq);
    if (sequenceRecord && JSON.stringify(sequenceRecord) !== encoded) {
      throw new Error(`Conflicting controller sequence: ${record.clientSeq}`);
    }
    this.pending.set(record.clientSeq, record);
    if (record.type === 'progress/tick' && (this.controllerTick === undefined || record.tick >= this.controllerTick)) {
      this.controllerTick = record.tick;
    }
    this.processAvailable();
  }

  advance() {
    this.displayTick++;
    advanceDisplayState(this.state, this.displayTick);
    this.processAvailable();
  }

  snapshot(): ObserverSnapshot {
    return {
      displayTick: this.displayTick,
      controllerTick: this.controllerTick,
      lag: this.controllerTick === undefined ? undefined : this.displayTick - this.controllerTick,
      state: deserializeBottle(serializeBottle(this.state)),
      stateHash: hashState(this.state),
      reportedStateHash: this.reportedStateHash,
      hashMatches: this.hashMatches
    };
  }

  private processAvailable() {
    for (;;) {
      const record = this.pending.get(this.checkpoint.clientSeq + 1);
      if (!record || record.tick > this.displayTick) return;
      if (record.tick < this.checkpoint.tick) throw new Error('Controller record tick precedes its checkpoint.');

      const corrected = deserializeBottle(this.checkpoint.state);
      advanceDisplayState(corrected, record.tick);
      if (corrected.tick !== record.tick) throw new Error('Controller record extends beyond a terminal bottle state.');
      if (record.type !== 'progress/tick') applyInput(corrected, record);
      if (record.type === 'progress/tick') {
        this.reportedStateHash = record.payload.stateHash;
        this.hashMatches = hashState(corrected) === record.payload.stateHash && corrected.phase === record.payload.phase;
      }
      this.checkpoint = { clientSeq: record.clientSeq, tick: record.tick, state: serializeBottle(corrected) };
      this.pending.delete(record.clientSeq);
      advanceDisplayState(corrected, this.displayTick);
      this.state = corrected;
    }
  }
}

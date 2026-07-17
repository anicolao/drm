import { advanceTick, applyInput } from './engine.ts';
import { deserializeBottle, hashState, serializeBottle } from './replay.ts';
import type { BottleState, ControllerRecord } from './types.ts';
import { ReplayObserver, type ReplaySnapshot } from '../../runtime/replay-observer.ts';

export type ObserverSnapshot = ReplaySnapshot<BottleState>;

function advanceTo(state:BottleState,targetTick:number){while(state.tick<targetTick&&state.phase!=='lost')advanceTick(state)}

export class PillBottleObserver extends ReplayObserver<BottleState,ControllerRecord>{
  constructor(initialState:BottleState,displayTick=0){super({
    clone:(state)=>deserializeBottle(serializeBottle(state)),tick:(state)=>state.tick,advanceTo,
    apply:(state,record)=>{if(record.type!=='progress/tick')applyInput(state,record)},hash:hashState,phase:(state)=>state.phase,terminal:(state)=>state.phase==='lost',
    progress:(record)=>record.type==='progress/tick'?record.payload:undefined
  },initialState,displayTick)}
}

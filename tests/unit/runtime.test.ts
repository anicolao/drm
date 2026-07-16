import assert from 'node:assert/strict';
import test from 'node:test';
import { FixedTickClock } from '../../src/lib/runtime/fixed-tick-clock.ts';
import { deriveMatchLifecycle } from '../../src/lib/runtime/lifecycle.ts';
import { ReplayObserver, type ReplayAdapter } from '../../src/lib/runtime/replay-observer.ts';
import { controllerStorageKey,loadStoredArray,loadStoredValue,saveStoredArray,saveStoredValue } from '../../src/lib/runtime/local-store.ts';

test('fixed tick clock follows elapsed time independently of render frequency', () => {
  const sixty = new FixedTickClock(60);
  assert.equal(sixty.consume(0), 0);
  assert.equal(sixty.consume(1000 / 30), 2);
  assert.equal(sixty.consume(2000 / 30), 2);
  const oneTwenty = new FixedTickClock(60);
  let ticks = 0;
  for (let frame = 0; frame <= 120; frame++) ticks += oneTwenty.consume(frame * 1000 / 120);
  assert.equal(ticks, 59);
});

test('fixed tick clock caps catch-up and can reset', () => {
  const clock = new FixedTickClock(60, 250);
  clock.consume(0);
  assert.equal(clock.consume(10_000), 14);
  clock.reset();
  assert.equal(clock.consume(20_000), 0);
});

test('shared lifecycle parameterizes match length and survivor results', () => {
  const first = deriveMatchLifecycle(['a', 'b'], [{ playerId: 'a', result: 'lost', tick: 10 }], [], 0, 3);
  assert.equal(first.winnerId, 'b');
  assert.equal(first.matchComplete, false);
  const final = deriveMatchLifecycle(['a', 'b'], [{ playerId: 'a', result: 'lost', tick: 10 }], ['a', 'b'], 2, 3);
  assert.equal(final.matchComplete, true);
  assert.equal(final.allReady, true);
});

type FakeRecord={commandId:string;clientSeq:number;tick:number;type:'add'|'progress/tick';amount?:number;payload?:{phase:string;stateHash:string}};
type FakeState={tick:number;value:number};
const fakeAdapter:ReplayAdapter<FakeState,FakeRecord>={clone:(state)=>({...state}),tick:(state)=>state.tick,
  advanceTo:(state,target)=>{state.tick=target},apply:(state,record)=>{state.value+=record.amount??0},
  hash:(state)=>`${state.tick}:${state.value}`,phase:()=> 'playing',
  progress:(record:FakeRecord)=>record.type==='progress/tick'?record.payload:undefined};

test('shared observer queues sequence gaps and rewinds late records',()=>{
  const observer=new ReplayObserver(fakeAdapter,{tick:0,value:0},10);
  observer.receive({commandId:'b',clientSeq:2,tick:8,type:'add',amount:3});
  assert.equal(observer.snapshot().state.value,0);
  observer.receive({commandId:'a',clientSeq:1,tick:5,type:'add',amount:2});
  assert.deepEqual(observer.snapshot().state,{tick:10,value:5});
});

test('shared observer rejects conflicting identities and verifies exact progress',()=>{
  const observer=new ReplayObserver(fakeAdapter,{tick:0,value:0},5);
  observer.receive({commandId:'a',clientSeq:1,tick:5,type:'progress/tick',payload:{phase:'playing',stateHash:'5:0'}});
  assert.equal(observer.snapshot().hashMatches,true);
  assert.throws(()=>observer.receive({commandId:'a',clientSeq:1,tick:5,type:'add',amount:1}),/Conflicting/);
});

test('shared local storage safely versions controller data',()=>{
  const values=new Map<string,string>(),storage={getItem:(key:string)=>values.get(key)??null,setItem:(key:string,value:string)=>{values.set(key,value)},removeItem:(key:string)=>{values.delete(key)}};
  const key=controllerStorageKey('tetris','g','p','outbox');saveStoredArray(storage,key,[{id:'a'}]);
  assert.deepEqual(loadStoredArray(storage,key,(value)=>value as{id:string}),[{id:'a'}]);
  saveStoredValue(storage,'checkpoint',{tick:4});assert.deepEqual(loadStoredValue(storage,'checkpoint',(value)=>value as{tick:number}),{tick:4});
  values.set(key,'not json');assert.deepEqual(loadStoredArray(storage,key,(value)=>value),[]);
});

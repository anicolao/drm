import assert from 'node:assert/strict';
import test from 'node:test';
import {advanceStax,applyStaxInput,createStax,deriveStaxLifecycle,hashStax,replayStax,staxLevelRules,type StaxInput,type StaxRecord} from '../../src/lib/game/stax.ts';
import{parseStaxRecord,parseStaxStart,parseStaxTerminal}from'../../src/lib/protocol/stax.ts';

const playing=(seed=1)=>{const state=createStax(seed);state.phase='playing';state.countdown=0;state.spawnClock=999;return state};

test('Stax has deterministic level pacing',()=>{
  assert.deepEqual(staxLevelRules(0).objective,{kind:'lines',target:3});
  assert.ok(staxLevelRules(12).travel<staxLevelRules(2).travel);
  assert.ok(staxLevelRules(12).rampLimit>staxLevelRules(2).rampLimit);
});

test('a ramp tile is caught only in the paddle lane',()=>{
  const state=playing();state.ramp=[{id:1,color:'cyan',lane:2,progress:179}];advanceStax(state);
  assert.deepEqual(state.paddle,[{id:1,color:'cyan'}]);assert.equal(state.misses,0);
  state.ramp=[{id:2,color:'pink',lane:1,progress:179}];advanceStax(state);
  assert.equal(state.misses,1);
});

test('placing completes simultaneous lines and a gravity chain',()=>{
  const state=playing();
  state.columns=[['pink','pink','yellow'],['cyan','cyan','cyan','pink'],['yellow','pink','yellow'],['pink','pink','cyan'],['cyan','cyan','pink']];
  state.paddle=[{id:40,color:'yellow'}];state.paddleLane=1;
  applyStaxInput(state,{type:'input/place',payload:{}});
  assert.deepEqual(state.columns,[['pink'],[],['yellow'],['cyan'],['cyan','cyan']]);
  assert.equal(state.lastChainDepth,3);assert.equal(state.lines,5);assert.ok(state.score>0);
});

test('thrown tiles take a fixed six seconds and cannot be caught',()=>{
  const state=playing();state.paddle=[{id:37,color:'green'}];
  applyStaxInput(state,{type:'input/throw-back',payload:{}});
  for(let i=0;i<359;i++)advanceStax(state);
  assert.equal(state.ramp.length,1);advanceStax(state);
  assert.equal(state.ramp.length,0);assert.equal(state.misses,1);assert.deepEqual(state.paddle,[]);
});

test('replay produces the controller state from commands only',()=>{
  const initial=playing(42);initial.paddle=[{id:41,color:'yellow'}];
  const records:StaxRecord[]=[
    {type:'input/move',payload:{dx:1},commandId:'a',playerId:'p',epochId:'e',clientSeq:1,tick:4},
    {type:'input/place',payload:{},commandId:'b',playerId:'p',epochId:'e',clientSeq:2,tick:7},
    {type:'progress/tick',payload:{phase:'playing',stateHash:'ignored'},commandId:'c',playerId:'p',epochId:'e',clientSeq:3,tick:9}
  ];
  const actual=structuredClone(initial);for(let i=0;i<4;i++)advanceStax(actual);applyStaxInput(actual,records[0] as StaxInput);for(let i=4;i<7;i++)advanceStax(actual);applyStaxInput(actual,records[1] as StaxInput);for(let i=7;i<12;i++)advanceStax(actual);
  const replayed=replayStax(initial,12,records,42);
  assert.equal(hashStax(replayed),hashStax(actual));
});

test('Stax protocol accepts rules and commands but rejects materialized state',()=>{const start={type:'game/started',ruleset:'stax',rulesVersion:'stax/1',seed:1,tickRate:60,round:0,matchId:'m',hostUid:'h',roomId:'r',audioOutput:'controllers',members:{p:true},players:{p:{seat:0,level:2}},settings:{width:5,height:5,targetWins:3,matchRounds:3},scores:{p:0},serverTime:1}as const;assert.equal(parseStaxStart(start).rulesVersion,'stax/1');assert.throws(()=>parseStaxStart({...start,columns:[]}));assert.throws(()=>parseStaxStart({...start,players:{intruder:{seat:0,level:0}}}));assert.equal(parseStaxTerminal({type:'player/terminal',playerId:'p',tick:4,result:'cleared',score:10,misses:0,seat:0,stateHash:'s1-1234abcd',serverTime:1}).result,'cleared');assert.throws(()=>parseStaxTerminal({type:'player/terminal',playerId:'p',tick:4,result:'cleared',score:10,misses:5.5,seat:0,stateHash:'s1-1234abcd',serverTime:1}));assert.equal(parseStaxRecord('a',{type:'input/place',playerId:'p',epochId:'e',clientSeq:1,tick:4,serverTime:1}).type,'input/place');assert.throws(()=>parseStaxRecord('a',{type:'input/place',playerId:'p',epochId:'e',clientSeq:1,tick:4,columns:[]}))});

test('three-round ranking awards N minus rank and preserves exact ties',()=>{const ids=['a','b','c'];const round=deriveStaxLifecycle(ids,{a:0,b:0,c:0},[{playerId:'a',result:'cleared',tick:50,score:900,misses:1,seat:0},{playerId:'b',result:'lost',tick:60,score:1200,misses:5,seat:1}],[],0);assert.equal(round.finished,true);assert.deepEqual(round.roundPoints,{a:2,c:1,b:0});assert.equal(round.matchComplete,false);const last=deriveStaxLifecycle(ids,{a:2,b:3,c:0},[{playerId:'a',result:'lost',tick:50,score:0,misses:5,seat:0},{playerId:'b',result:'lost',tick:50,score:0,misses:5,seat:0}],[],2);assert.equal(last.matchComplete,true);assert.deepEqual(last.winnerIds,['a','b']);assert.equal(last.winnerId,undefined)});

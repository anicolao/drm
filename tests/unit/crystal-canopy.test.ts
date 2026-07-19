import test from 'node:test';
import assert from 'node:assert/strict';
import {applyCanopyInput,canopyStoneCount,createCanopy,generateCanopy,hashCanopy,replayCanopy,solveCanopy,type CanopyRecord} from '../../src/lib/game/crystal-canopy.ts';
import {parseQuarryStart} from '../../src/lib/protocol/quarry-match.ts';

test('Crystal Canopy levels grow from 12 to 60 solver-proven crystals',()=>{
  for(const level of [0,1,5,12,16,20]){
    const first=generateCanopy(123456789,level),second=generateCanopy(123456789,level);
    assert.deepEqual(first,second);assert.equal(first.flat().length,canopyStoneCount(level));assert.equal(solveCanopy(first),true);
    assert.ok(first.every(column=>column.length<=12));
  }
});
test('shots remove exposed tips without moving surviving crystals',()=>{
  const state=createCanopy(7,0);state.columns=[['cyan','pink'],['yellow','pink'],['green','pink'],[],[]];state.total=6;state.cursor=0;
  applyCanopyInput(state,{type:'input/fire',payload:{}});assert.deepEqual(state.columns[0],['cyan']);
  state.cursor=1;applyCanopyInput(state,{type:'input/fire',payload:{}});state.cursor=2;applyCanopyInput(state,{type:'input/fire',payload:{}});
  assert.deepEqual(state.columns,[['cyan'],['yellow'],['green'],[],[]]);assert.equal(state.groups,1);assert.equal(state.groupCount,0);assert.equal(state.cascades,0);
});
test('Crystal Canopy replay and reset are deterministic',()=>{
  const initial=createCanopy(44,3),records:CanopyRecord[]=[{commandId:'f',playerId:'p',epochId:'e',clientSeq:1,tick:2,type:'input/fire',payload:{}}];
  const replayed=replayCanopy(initial,9,records,44);assert.equal(replayed.tick,9);assert.equal(replayed.removed,1);assert.match(hashCanopy(replayed),/^c1-[0-9a-f]{8}$/);
  applyCanopyInput(replayed,{type:'input/restart',payload:{}},44);assert.deepEqual(replayed.columns,initial.columns);assert.equal(replayed.tick,9);assert.equal(replayed.restarts,1);
});
test('Crystal Canopy start records contain rules and roster, never materialized state',()=>{
  const start={type:'game/started',ruleset:'crystal-canopy',rulesVersion:'crystal-canopy/1',seed:1,tickRate:60,round:0,matchId:'m',hostUid:'h',roomId:'r',audioOutput:'controllers',members:{p:true},players:{p:{seat:0,level:4}},settings:{width:5,height:12,targetWins:3,matchRounds:5},scores:{p:0},serverTime:1} as const;
  assert.equal(parseQuarryStart(start).rulesVersion,'crystal-canopy/1');assert.throws(()=>parseQuarryStart({...start,columns:[]}));
});

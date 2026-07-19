import test from 'node:test';
import assert from 'node:assert/strict';
import {matchPuzzleColumnActions} from '../../src/lib/input/match-puzzle.ts';

test('direct column touch moves and fires as one ordered controller gesture',()=>{
  assert.deepEqual(matchPuzzleColumnActions(2,0,true),[
    {type:'input/move',payload:{dx:-1}},
    {type:'input/move',payload:{dx:-1}},
    {type:'input/fire',payload:{}},
  ]);
  assert.deepEqual(matchPuzzleColumnActions(4,4,true),[{type:'input/fire',payload:{}}]);
});

test('edge jumps clamp targets and do not fire',()=>{
  assert.deepEqual(matchPuzzleColumnActions(2,-20),[
    {type:'input/move',payload:{dx:-1}},
    {type:'input/move',payload:{dx:-1}},
  ]);
  assert.equal(matchPuzzleColumnActions(4,20).length,0);
});

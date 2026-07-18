import { QUARRY_HEIGHT, QUARRY_WIDTH, type QuarryColor, type QuarryInput, type QuarryRecord, type QuarryState } from './types.ts';

export const QUARRY_RULES = Object.freeze({ version: 'quarry-match/1' as const, tickRate: 60, width: QUARRY_WIDTH, height: QUARRY_HEIGHT, targetWins: 3 });
const COLORS: QuarryColor[] = ['cyan', 'pink', 'yellow', 'green', 'purple'];
function nextRandom(seed: number) { let x=seed|0;x^=x<<13;x^=x>>>17;x^=x<<5;return x>>>0||1; }
function colorCount(level:number){return level<2?3:level<4?4:5}

export function generateQuarry(seed:number,level:number){
  let rng=seed>>>0||1;const count=colorCount(level),triples:QuarryColor[]=[];
  for(let set=0;set<20;set++)triples.push(COLORS[set%count]);
  for(let i=triples.length-1;i>0;i--){rng=nextRandom(rng);const j=rng%(i+1);[triples[i],triples[j]]=[triples[j],triples[i]]}
  const columns:Array<QuarryColor[]>=Array.from({length:QUARRY_WIDTH},()=>[]);
  for(const color of triples){
    const choices:number[]=[];for(let col=0;col<QUARRY_WIDTH;col++)for(let weight=columns[col].length<QUARRY_HEIGHT?QUARRY_HEIGHT-columns[col].length:0;weight>0;weight--)choices.push(col);
    const used=new Set<number>();
    for(let stone=0;stone<3;stone++){
      const preferred=choices.filter(col=>columns[col].length<QUARRY_HEIGHT&&!used.has(col));
      const available=preferred.length?preferred:choices.filter(col=>columns[col].length<QUARRY_HEIGHT);
      rng=nextRandom(rng);const col=available[rng%available.length];columns[col].push(color);used.add(col);
    }
  }
  if(columns.some(column=>column.length!==QUARRY_HEIGHT))throw new Error('Quarry generator did not fill the board.');
  return columns;
}

export function createQuarry(seed:number,level=0):QuarryState{return{rulesVersion:'quarry-match/1',tick:0,level,columns:generateQuarry(seed,level),cursor:2,groupColor:null,groupCount:0,removed:0,restarts:0,phase:'playing'}}
export function advanceQuarry(state:QuarryState){if(state.phase==='playing')state.tick++}
export function canFire(state:QuarryState){const color=state.columns[state.cursor][0];return Boolean(color&&(!state.groupColor||state.groupColor===color))}
export function applyQuarryInput(state:QuarryState,input:QuarryInput,seed?:number){
  if(state.phase!=='playing')return;
  if(input.type==='input/move'){state.cursor=Math.max(0,Math.min(QUARRY_WIDTH-1,state.cursor+input.payload.dx));return}
  if(input.type==='input/restart'){
    if(seed===undefined)throw new Error('Restart requires the game seed.');const tick=state.tick,restarts=state.restarts+1,fresh=createQuarry(seed,state.level);Object.assign(state,fresh,{tick,restarts});return;
  }
  if(!canFire(state))return;const color=state.columns[state.cursor].shift()!;state.removed++;
  if(state.groupCount===0){state.groupColor=color;state.groupCount=1}
  else if(state.groupCount===1)state.groupCount=2;
  else{state.groupColor=null;state.groupCount=0}
  if(state.removed===QUARRY_WIDTH*QUARRY_HEIGHT)state.phase='cleared';
}
export function hashQuarry(state:QuarryState){const text=JSON.stringify(state);let hash=2166136261;for(let i=0;i<text.length;i++){hash^=text.charCodeAt(i);hash=Math.imul(hash,16777619)}return`q1-${(hash>>>0).toString(16).padStart(8,'0')}`}
export function replayQuarry(initial:QuarryState,targetTick:number,records:readonly QuarryRecord[],seed:number){const state=structuredClone(initial);for(const record of [...records].sort((a,b)=>a.tick-b.tick||a.clientSeq-b.clientSeq)){while(state.tick<record.tick&&state.phase==='playing')advanceQuarry(state);if(record.type!=='progress/tick')applyQuarryInput(state,record,seed)}while(state.tick<targetTick&&state.phase==='playing')advanceQuarry(state);return state}

export function solveQuarry(columns:QuarryColor[][]){
  const memo=new Map<string,boolean>();
  const solve=(stacks:QuarryColor[][],group:QuarryColor|null,count:0|1|2):boolean=>{const key=JSON.stringify([stacks,group,count]);if(memo.has(key))return memo.get(key)!;if(stacks.every(s=>!s.length))return count===0;for(let col=0;col<stacks.length;col++){const color=stacks[col][0];if(!color||(group&&color!==group))continue;const next=stacks.map(s=>[...s]);next[col].shift();const nextCount=(count===2?0:count+1)as 0|1|2;if(solve(next,nextCount===0?null:color,nextCount)){memo.set(key,true);return true}}memo.set(key,false);return false};
  return solve(columns.map(column=>[...column]),null,0);
}

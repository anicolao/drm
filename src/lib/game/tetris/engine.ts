import { TETRIS_HEIGHT, TETRIS_WIDTH, type Orientation, type TetrisActive, type TetrisInput, type TetrisRecord, type TetrisState, type Tetromino } from './types.ts';

export const TETRIS_RULES=Object.freeze({version:'tetris/1' as const,tickRate:60,gravityTicks:48,minimumGravityTicks:2,softDropTicks:2,lockDelayTicks:30,maxLockResets:15,linesPerLevel:10});
const PIECES:Tetromino[]=['I','J','L','O','S','T','Z'];
const CELLS:Record<Tetromino,Array<Array<[number,number]>>>={
 I:[[[1,0],[1,1],[1,2],[1,3]],[[0,2],[1,2],[2,2],[3,2]],[[2,0],[2,1],[2,2],[2,3]],[[0,1],[1,1],[2,1],[3,1]]],
 J:[[[0,0],[1,0],[1,1],[1,2]],[[0,1],[0,2],[1,1],[2,1]],[[1,0],[1,1],[1,2],[2,2]],[[0,1],[1,1],[2,0],[2,1]]],
 L:[[[0,2],[1,0],[1,1],[1,2]],[[0,1],[1,1],[2,1],[2,2]],[[1,0],[1,1],[1,2],[2,0]],[[0,0],[0,1],[1,1],[2,1]]],
 O:[[[0,1],[0,2],[1,1],[1,2]],[[0,1],[0,2],[1,1],[1,2]],[[0,1],[0,2],[1,1],[1,2]],[[0,1],[0,2],[1,1],[1,2]]],
 S:[[[0,1],[0,2],[1,0],[1,1]],[[0,1],[1,1],[1,2],[2,2]],[[1,1],[1,2],[2,0],[2,1]],[[0,0],[1,0],[1,1],[2,1]]],
 T:[[[0,1],[1,0],[1,1],[1,2]],[[0,1],[1,1],[1,2],[2,1]],[[1,0],[1,1],[1,2],[2,1]],[[0,1],[1,0],[1,1],[2,1]]],
 Z:[[[0,0],[0,1],[1,1],[1,2]],[[0,2],[1,1],[1,2],[2,1]],[[1,0],[1,1],[2,1],[2,2]],[[0,1],[1,0],[1,1],[2,0]]]
};
const JLSTZ:Record<string,Array<[number,number]>>={
 '0>1':[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],'1>0':[[0,0],[1,0],[1,-1],[0,2],[1,2]],
 '1>2':[[0,0],[1,0],[1,-1],[0,2],[1,2]],'2>1':[[0,0],[-1,0],[-1,1],[0,-2],[-1,-2]],
 '2>3':[[0,0],[1,0],[1,1],[0,-2],[1,-2]],'3>2':[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],
 '3>0':[[0,0],[-1,0],[-1,-1],[0,2],[-1,2]],'0>3':[[0,0],[1,0],[1,1],[0,-2],[1,-2]]};
const IKICKS:Record<string,Array<[number,number]>>={
 '0>1':[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],'1>0':[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],
 '1>2':[[0,0],[-1,0],[2,0],[-1,2],[2,-1]],'2>1':[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],
 '2>3':[[0,0],[2,0],[-1,0],[2,1],[-1,-2]],'3>2':[[0,0],[-2,0],[1,0],[-2,-1],[1,2]],
 '3>0':[[0,0],[1,0],[-2,0],[1,-2],[-2,1]],'0>3':[[0,0],[-1,0],[2,0],[-1,2],[2,-1]]};

function random(state:TetrisState){let x=state.rng|0;x^=x<<13;x^=x>>>17;x^=x<<5;state.rng=x>>>0;return state.rng/0x100000000}
function refill(state:TetrisState){const bag=[...PIECES];for(let i=bag.length-1;i>0;i--){const j=Math.floor(random(state)*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]]}state.bag.push(...bag)}
function ensureNext(state:TetrisState){while(state.next.length<5){if(!state.bag.length)refill(state);state.next.push(state.bag.shift()!)}}
export function pieceCells(piece:Pick<TetrisActive,'kind'|'row'|'col'|'orientation'>){return CELLS[piece.kind][piece.orientation].map(([r,c])=>({row:piece.row+r,col:piece.col+c}))}
function fits(state:TetrisState,piece:Pick<TetrisActive,'kind'|'row'|'col'|'orientation'>){return pieceCells(piece).every(({row,col})=>row>=0&&row<TETRIS_HEIGHT&&col>=0&&col<TETRIS_WIDTH&&!state.board[row*TETRIS_WIDTH+col])}
function grounded(state:TetrisState,piece=state.active){return Boolean(piece&&!fits(state,{...piece,row:piece.row+1}))}
function spawn(state:TetrisState){ensureNext(state);const kind=state.next.shift()!;ensureNext(state);const active:TetrisActive={id:state.nextId++,kind,row:0,col:3,orientation:0,groundedTicks:0,lockResets:0};state.active=fits(state,active)?active:null;if(!state.active)state.phase='lost'}
export function createTetris(seed:number):TetrisState{const state:TetrisState={rulesVersion:'tetris/1',tick:0,board:Array(TETRIS_HEIGHT*TETRIS_WIDTH).fill(null),active:null,bag:[],next:[],rng:seed>>>0||1,nextId:1,lines:0,score:0,level:0,phase:'playing',softDrop:false};ensureNext(state);spawn(state);return state}
function gravityTicks(state:TetrisState){return Math.max(TETRIS_RULES.minimumGravityTicks,TETRIS_RULES.gravityTicks-state.level*5)}
function clearLines(state:TetrisState){let cleared=0;for(let row=TETRIS_HEIGHT-1;row>=0;row--){if(Array.from({length:TETRIS_WIDTH},(_,col)=>state.board[row*TETRIS_WIDTH+col]).every(Boolean)){state.board.splice(row*TETRIS_WIDTH,TETRIS_WIDTH);state.board.unshift(...Array(TETRIS_WIDTH).fill(null));cleared++;row++}}if(cleared){state.lines+=cleared;state.score+=[0,100,300,500,800][cleared]*(state.level+1);state.level=Math.floor(state.lines/TETRIS_RULES.linesPerLevel)}}
function lock(state:TetrisState){if(!state.active)return;for(const {row,col} of pieceCells(state.active))state.board[row*TETRIS_WIDTH+col]=state.active.kind;state.active=null;clearLines(state);spawn(state)}
function resetGrounded(piece:TetrisActive,wasGrounded:boolean){if(wasGrounded&&piece.lockResets<TETRIS_RULES.maxLockResets){piece.groundedTicks=0;piece.lockResets++}}
function move(state:TetrisState,dx:number){if(!state.active)return;const was=grounded(state);const next={...state.active,col:state.active.col+dx};if(fits(state,next)){state.active=next;resetGrounded(state.active,was)}}
function rotate(state:TetrisState,direction:'clockwise'|'counterclockwise'){if(!state.active)return;const from=state.active.orientation;const to=((from+(direction==='clockwise'?1:3))%4) as Orientation;const was=grounded(state);const kicks=state.active.kind==='O'?[[0,0] as [number,number]]:state.active.kind==='I'?IKICKS[`${from}>${to}`]:JLSTZ[`${from}>${to}`];for(const [x,y] of kicks){const next={...state.active,orientation:to,col:state.active.col+x,row:state.active.row-y};if(fits(state,next)){state.active=next;resetGrounded(state.active,was);return}}}
export function applyTetrisInput(state:TetrisState,input:TetrisInput){if(state.phase!=='playing'||!state.active)return;if(input.type==='input/move')move(state,input.payload.dx);else if(input.type==='input/rotate')rotate(state,input.payload.direction);else if(input.type==='input/soft-drop-start')state.softDrop=true;else if(input.type==='input/soft-drop-end')state.softDrop=false;else{let distance=0;while(state.active&&fits(state,{...state.active,row:state.active.row+1})){state.active.row++;distance++}state.score+=distance*2;lock(state)}}
export function advanceTetris(state:TetrisState){if(state.phase!=='playing'||!state.active)return;state.tick++;const interval=state.softDrop?TETRIS_RULES.softDropTicks:gravityTicks(state);if(state.tick%interval===0&&fits(state,{...state.active,row:state.active.row+1})){state.active.row++;if(state.softDrop)state.score++}if(grounded(state)){state.active.groundedTicks++;if(state.active.groundedTicks>=TETRIS_RULES.lockDelayTicks)lock(state)}else if(state.active)state.active.groundedTicks=0}
export function ghostRow(state:TetrisState){if(!state.active)return 0;let row=state.active.row;while(fits(state,{...state.active,row:row+1}))row++;return row}
export function hashTetris(state:TetrisState){const text=JSON.stringify(state);let hash=2166136261;for(let i=0;i<text.length;i++){hash^=text.charCodeAt(i);hash=Math.imul(hash,16777619)}return`t1-${(hash>>>0).toString(16).padStart(8,'0')}`}
export function replayTetris(initial:TetrisState,targetTick:number,records:readonly TetrisRecord[]){const state=structuredClone(initial);for(const record of [...records].sort((a,b)=>a.tick-b.tick||a.clientSeq-b.clientSeq)){while(state.tick<record.tick&&state.phase==='playing')advanceTetris(state);if(record.type!=='progress/tick')applyTetrisInput(state,record)}while(state.tick<targetTick&&state.phase==='playing')advanceTetris(state);return state}

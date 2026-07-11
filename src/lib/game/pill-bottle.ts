export const WIDTH = 8, HEIGHT = 16;
export type Color = 'cyan' | 'pink' | 'yellow';
export interface Cell { kind: 'virus' | 'pill'; color: Color; id: string }
export interface ActivePill { id: number; row: number; col: number; orientation: 0|1|2|3; colors: [Color,Color]; groundedAt?: number }
export interface BottleState { tick:number; board:(Cell|null)[]; active:ActivePill|null; rng:number; nextId:number; viruses:number; phase:'playing'|'won'|'lost'; softDrop:boolean; chain:number; resolving:boolean }
export type Input = {type:'input/move';payload:{dx:number}}|{type:'input/rotate';payload:{direction:string}}|{type:'input/soft-drop-start'|'input/soft-drop-end'|'input/hard-drop';payload:Record<string,never>};
const colors:Color[]=['cyan','pink','yellow'];
const index=(r:number,c:number)=>r*WIDTH+c;
function random(s:BottleState){let x=s.rng|0;x^=x<<13;x^=x>>>17;x^=x<<5;s.rng=x>>>0;return s.rng/4294967296}
function cells(p:ActivePill):[[number,number],[number,number]]{const offsets:[[number,number],[number,number],[number,number],[number,number]]=[[0,1],[1,0],[0,-1],[-1,0]];const o=offsets[p.orientation];return[[p.row,p.col],[p.row+o[0],p.col+o[1]]]}
function fits(s:BottleState,p:ActivePill){return cells(p).every(([r,c])=>r>=0&&r<HEIGHT&&c>=0&&c<WIDTH&&!s.board[index(r,c)]) }
function hasMatch(board:(Cell|null)[]){for(let r=0;r<HEIGHT;r++)for(let c=0;c<WIDTH;c++){const x=board[index(r,c)];if(!x)continue;if(c<=WIDTH-4&&[1,2,3].every(d=>board[index(r,c+d)]?.color===x.color))return true;if(r<=HEIGHT-4&&[1,2,3].every(d=>board[index(r+d,c)]?.color===x.color))return true}return false}
function spawn(s:BottleState){const p:ActivePill={id:s.nextId++,row:0,col:3,orientation:0,colors:[colors[Math.floor(random(s)*3)],colors[Math.floor(random(s)*3)]]};s.active=fits(s,p)?p:null;if(!s.active)s.phase='lost'}
export function createBottle(seed:number,_seat:number):BottleState{const s:BottleState={tick:0,board:Array(WIDTH*HEIGHT).fill(null),active:null,rng:seed>>>0||1,nextId:1,viruses:12,phase:'playing',softDrop:false,chain:0,resolving:false};let placed=0,attempts=0;while(placed<12&&attempts++<10000){const r=6+Math.floor(random(s)*10),c=Math.floor(random(s)*8),i=index(r,c);if(s.board[i])continue;s.board[i]={kind:'virus',color:colors[Math.floor(random(s)*3)],id:`v${placed}`};if(hasMatch(s.board)){s.board[i]=null;continue}placed++}s.viruses=placed;spawn(s);return s}
function clearMatches(s:BottleState){const clear=new Set<number>();for(let r=0;r<HEIGHT;r++)for(let c=0;c<WIDTH;c++){const x=s.board[index(r,c)];if(!x)continue;let run=[index(r,c)];for(let x2=c+1;x2<WIDTH&&s.board[index(r,x2)]?.color===x.color;x2++)run.push(index(r,x2));if(run.length>=4)run.forEach(i=>clear.add(i));run=[index(r,c)];for(let y=r+1;y<HEIGHT&&s.board[index(y,c)]?.color===x.color;y++)run.push(index(y,c));if(run.length>=4)run.forEach(i=>clear.add(i))}for(const i of clear){if(s.board[i]?.kind==='virus')s.viruses--;s.board[i]=null}if(clear.size&&s.viruses===0){s.phase='won';s.resolving=false}return clear.size>0}
function dropFreedPills(s:BottleState){
  const halves=new Map<string,number[]>();
  s.board.forEach((cell,i)=>{if(cell?.kind==='pill'){const id=cell.id.slice(0,-1),group=halves.get(id)??[];group.push(i);halves.set(id,group)}});
  const groups:number[][]=[];
  for(const half of halves.values()){
    const joined=half.length===2&&Math.abs(Math.floor(half[0]/WIDTH)-Math.floor(half[1]/WIDTH))+Math.abs(half[0]%WIDTH-half[1]%WIDTH)===1;
    if(joined)groups.push(half);else half.forEach(i=>groups.push([i]));
  }
  const owner=new Map<number,number>();groups.forEach((group,g)=>group.forEach(i=>owner.set(i,g)));
  const order=groups.map((_,g)=>g).sort((a,b)=>Math.max(...groups[b])-Math.max(...groups[a]));
  const fallingGroups=new Set<number>();
  let changed=true;
  while(changed){changed=false;for(const g of order){if(fallingGroups.has(g))continue;const canFall=groups[g].every(i=>{if(Math.floor(i/WIDTH)===HEIGHT-1)return false;const below=i+WIDTH,belowOwner=owner.get(below);return belowOwner===g||!s.board[below]||(belowOwner!==undefined&&fallingGroups.has(belowOwner))});if(canFall){fallingGroups.add(g);changed=true}}}
  const falling=[...fallingGroups].flatMap(g=>groups[g]);
  const moves=falling.map(i=>({from:i,to:i+WIDTH,cell:s.board[i]}));
  moves.forEach(({from})=>s.board[from]=null);moves.forEach(({to,cell})=>s.board[to]=cell);
  return falling.length>0;
}
function lock(s:BottleState){if(!s.active)return;const p=s.active;cells(p).forEach(([r,c],n)=>s.board[index(r,c)]={kind:'pill',color:p.colors[n],id:`p${p.id}${n}`});s.active=null;s.chain=0;if(clearMatches(s)){s.chain=1;if(s.phase==='playing')s.resolving=true}else spawn(s)}
function move(s:BottleState,dr:number,dc:number){if(!s.active)return false;const p={...s.active,row:s.active.row+dr,col:s.active.col+dc};if(!fits(s,p))return false;s.active=p;delete s.active.groundedAt;return true}
export function applyInput(s:BottleState,input:Input){if(s.phase!=='playing'||!s.active)return;if(input.type==='input/move')move(s,0,input.payload.dx);else if(input.type==='input/rotate'){const delta=input.payload.direction==='clockwise'?1:3;const p={...s.active,orientation:((s.active.orientation+delta)%4) as 0|1|2|3};if(fits(s,p)){s.active=p;delete s.active.groundedAt}}else if(input.type==='input/soft-drop-start')s.softDrop=true;else if(input.type==='input/soft-drop-end')s.softDrop=false;else if(input.type==='input/hard-drop'){while(move(s,1,0));lock(s)}}
export function advanceTick(s:BottleState){if(s.phase!=='playing')return;s.tick++;if(s.resolving){if(s.tick%24!==0)return;if(dropFreedPills(s))return;if(clearMatches(s)){s.chain++;return}s.resolving=false;spawn(s);return}if(!s.active)return;const interval=s.softDrop?2:24;if(s.tick%interval===0&&!move(s,1,0)){s.active.groundedAt??=s.tick}if(s.active?.groundedAt!==undefined&&s.tick-s.active.groundedAt>=30)lock(s)}
export function activeCells(s:BottleState){return s.active?cells(s.active).map(([r,c],n)=>({row:r,col:c,cell:{kind:'pill',color:s.active!.colors[n],id:`a${s.active!.id}${n}`} as Cell})):[]}

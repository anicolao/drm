<script lang="ts">
  import { ghostRow,pieceCells,TETRIS_HIDDEN_ROWS,TETRIS_VISIBLE_HEIGHT,TETRIS_WIDTH,type TetrisState,type Tetromino } from '$lib/game/tetris';
  export let state:TetrisState;export let label='Block Stack board';export let compact=false;
  const colors:Record<Tetromino,string>={I:'#30d9d4',J:'#4d72ff',L:'#ff9f43',O:'#f5d547',S:'#5fe06d',T:'#b66cff',Z:'#ff4f64'};
  $: active=state.active?pieceCells(state.active):[];
  $: ghost=state.active?pieceCells({...state.active,row:ghostRow(state)}):[];
  function cellAt(visibleRow:number,col:number){const row=visibleRow+TETRIS_HIDDEN_ROWS;const activeCell=active.find(cell=>cell.row===row&&cell.col===col);if(activeCell)return{kind:state.active!.kind,active:true,ghost:false};const locked=state.board[row*TETRIS_WIDTH+col];if(locked)return{kind:locked,active:false,ghost:false};const ghostCell=ghost.find(cell=>cell.row===row&&cell.col===col);return ghostCell?{kind:state.active!.kind,active:false,ghost:true}:undefined}
</script>
<div class:compact class="tetris-shell">
  {#if !compact}<div class="next" aria-label={`Next pieces: ${state.next.slice(0,3).join(', ')}`}>{#each state.next.slice(0,3) as piece}<span style={`--piece:${colors[piece]}`}>{piece}</span>{/each}</div>{/if}
  <div class="matrix" role="img" aria-label={label} data-lines={state.lines} data-score={state.score} data-level={state.level} data-phase={state.phase}>
    {#each Array(TETRIS_VISIBLE_HEIGHT) as _,row}{#each Array(TETRIS_WIDTH) as _,col}{@const cell=cellAt(row,col)}<i class:filled={Boolean(cell&&!cell.ghost)} class:ghost={cell?.ghost} style={cell?`--piece:${colors[cell.kind]}`:''}></i>{/each}{/each}
  </div>
</div>
<style>
  .tetris-shell{width:min(42vw,230px);margin:auto}.next{height:1.8rem;display:flex;justify-content:center;gap:.45rem}.next span{color:var(--piece);font-weight:900;font-size:.7rem}.matrix{display:grid;grid-template-columns:repeat(10,1fr);aspect-ratio:1/2;background:#08090d;border:4px solid #606477;box-shadow:4px 4px 0 #050609}.matrix i{display:block;border:1px solid #101219}.matrix i.filled{background:var(--piece);box-shadow:inset 2px 2px rgba(255,255,255,.3),inset -2px -2px rgba(0,0,0,.3)}.matrix i.ghost{border:1px solid var(--piece);opacity:.5}.compact .matrix{border-width:2px;box-shadow:2px 2px 0 #050609}.compact .matrix i{border-width:.5px}
</style>

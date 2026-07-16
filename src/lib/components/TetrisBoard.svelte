<script lang="ts">
  import { ghostRow,pieceCells,TETRIS_HIDDEN_ROWS,TETRIS_VISIBLE_HEIGHT,TETRIS_WIDTH,type TetrisState,type Tetromino } from '$lib/game/tetris';
  export let state:TetrisState;export let label='Block Stack board';export let compact=false;
  const colors:Record<Tetromino,string>={I:'#30d9d4',J:'#4d72ff',L:'#ff9f43',O:'#f5d547',S:'#5fe06d',T:'#b66cff',Z:'#ff4f64'};
  type RenderCell={kind:Tetromino;ghost:boolean}|undefined;
  function renderCells(current:TetrisState):RenderCell[]{
    const active=current.active?pieceCells(current.active):[];
    const ghost=current.active?pieceCells({...current.active,row:ghostRow(current)}):[];
    return Array.from({length:TETRIS_VISIBLE_HEIGHT*TETRIS_WIDTH},(_,index)=>{
      const row=Math.floor(index/TETRIS_WIDTH)+TETRIS_HIDDEN_ROWS,col=index%TETRIS_WIDTH;
      if(current.active&&active.some(cell=>cell.row===row&&cell.col===col))return{kind:current.active.kind,ghost:false};
      const locked=current.board[row*TETRIS_WIDTH+col];if(locked)return{kind:locked,ghost:false};
      return current.active&&ghost.some(cell=>cell.row===row&&cell.col===col)?{kind:current.active.kind,ghost:true}:undefined;
    });
  }
  $: cells=renderCells(state);
</script>
<div class:compact class="tetris-shell">
  {#if !compact}<div class="next" aria-label={`Next pieces: ${state.next.slice(0,3).join(', ')}`}>{#each state.next.slice(0,3) as piece}<span style={`--piece:${colors[piece]}`}>{piece}</span>{/each}</div>{/if}
  <div class="matrix" role="img" aria-label={label} data-lines={state.lines} data-score={state.score} data-level={state.level} data-phase={state.phase} data-active-row={state.active?.row}>
    {#each cells as cell}<i class:filled={Boolean(cell&&!cell.ghost)} class:ghost={cell?.ghost} style={cell?`--piece:${colors[cell.kind]}`:''}></i>{/each}
  </div>
</div>
<style>
  .tetris-shell{width:min(42vw,230px);margin:auto}.next{height:1.8rem;display:flex;justify-content:center;gap:.45rem}.next span{color:var(--piece);font-weight:900;font-size:.7rem}.matrix{display:grid;grid-template-columns:repeat(10,1fr);aspect-ratio:1/2;background:#08090d;border:4px solid #606477;box-shadow:4px 4px 0 #050609}.matrix i{display:block;border:1px solid #101219}.matrix i.filled{background:var(--piece);box-shadow:inset 2px 2px rgba(255,255,255,.3),inset -2px -2px rgba(0,0,0,.3)}.matrix i.ghost{border:1px solid var(--piece);opacity:.5}.compact .matrix{border-width:2px;box-shadow:2px 2px 0 #050609}.compact .matrix i{border-width:.5px}
</style>

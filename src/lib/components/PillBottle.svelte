<script lang="ts">
  import { onMount } from 'svelte';
  import { activeCells, HEIGHT, WIDTH, type BottleState, type Cell } from '$lib/game/pill-bottle';

  export let state: BottleState;
  let canvas: HTMLCanvasElement;

  const CELL = 10;
  const LEFT = 6;
  const TOP = 11;
  const palette = { cyan: '#39d9e6', pink: '#ff4f91', yellow: '#ffd84a' };
  type DrawCell = Cell & { row: number; col: number };

  function pairId(cell: Cell) {
    return cell.kind === 'pill' ? cell.id.slice(0, -1) : '';
  }

  function drawVirus(context: CanvasRenderingContext2D, cell: DrawCell) {
    const x = LEFT + cell.col * CELL + 1;
    const y = TOP + cell.row * CELL + 1;
    context.fillStyle = palette[cell.color];
    context.fillRect(x + 2, y, 4, 1);
    context.fillRect(x + 1, y + 1, 6, 1);
    context.fillRect(x, y + 2, 8, 4);
    context.fillRect(x + 1, y + 6, 2, 2);
    context.fillRect(x + 5, y + 6, 2, 2);
    context.fillStyle = '#08090d';
    context.fillRect(x + 2, y + 3, 1, 2);
    context.fillRect(x + 5, y + 3, 1, 2);
    context.fillRect(x + 3, y + 6, 2, 1);
  }

  function drawPill(context: CanvasRenderingContext2D, cell: DrawCell, cells: DrawCell[]) {
    const mate = cells.find((other) => other !== cell && pairId(other) === pairId(cell));
    const dx = mate?.col === cell.col ? 0 : (mate?.col ?? cell.col) - cell.col;
    const dy = mate?.row === cell.row ? 0 : (mate?.row ?? cell.row) - cell.row;
    const x = LEFT + cell.col * CELL;
    const y = TOP + cell.row * CELL;
    context.fillStyle = palette[cell.color];
    context.fillRect(x + (dx === -1 ? 0 : 2), y + (dy === -1 ? 0 : 2), dx === 0 ? 6 : 8, dy === 0 ? 6 : 8);
    if (!mate || (dx === 0 && dy === 0)) {
      context.fillRect(x + 1, y + 2, 8, 6);
      context.fillRect(x + 2, y + 1, 6, 8);
    }
    context.fillStyle = 'rgba(255,255,255,.38)';
    context.fillRect(x + 2, y + 2, dx === 1 ? 8 : 4, 1);
    context.fillStyle = 'rgba(0,0,0,.28)';
    context.fillRect(x + 2, y + 7, dx === 1 ? 8 : 5, 1);
  }

  function draw() {
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.imageSmoothingEnabled = false;
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#606477';
    context.fillRect(26, 0, 40, 3);
    context.fillRect(26, 0, 3, 11);
    context.fillRect(63, 0, 3, 11);
    context.fillRect(3, 8, 86, 169);
    context.fillStyle = '#08090d';
    context.fillRect(6, 11, 80, 163);
    context.fillStyle = '#050609';
    context.fillRect(89, 13, 3, 164);
    context.fillRect(8, 177, 84, 3);

    context.fillStyle = '#151720';
    for (let column = 1; column < WIDTH; column++) context.fillRect(LEFT + column * CELL, TOP, 1, HEIGHT * CELL);
    for (let row = 1; row < HEIGHT; row++) context.fillRect(LEFT, TOP + row * CELL, WIDTH * CELL, 1);

    const cells: DrawCell[] = [];
    state.board.forEach((cell, index) => {
      if (cell) cells.push({ ...cell, row: Math.floor(index / WIDTH), col: index % WIDTH });
    });
    for (const active of activeCells(state)) cells.push({ ...active.cell, row: active.row, col: active.col });
    for (const cell of cells) cell.kind === 'virus' ? drawVirus(context, cell) : drawPill(context, cell, cells);
  }

  onMount(draw);
  $: state, draw();
</script>

<canvas bind:this={canvas} class="bottle" width="92" height="180" aria-label="Pill bottle" data-cell-count={WIDTH * HEIGHT} data-virus-count={state.viruses}></canvas>

<style>
  .bottle { display:block; width:min(27vw,180px); height:auto; margin:auto; image-rendering:pixelated }
</style>

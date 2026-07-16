<script lang="ts">
  import { onMount } from 'svelte';
  import { activeCells, HEIGHT, nextPillColors, rainCells, WIDTH, type BottleState, type Cell } from '$lib/game/pill-bottle';

  export let state: BottleState;
  export let label = 'Pill bottle';
  export let showPreview = true;
  let canvas: HTMLCanvasElement;
  let previewCanvas: HTMLCanvasElement;
  let lastFrame = '';
  let transition: 'clear' | 'lock' | 'finish' | 'rain' | '' = '';
  let observed = '';
  let transitionTimer: ReturnType<typeof setTimeout> | undefined;
  $: preview = nextPillColors(state);

  const CELL = 10;
  const LEFT = 6;
  const TOP = 11;
  const RENDER_SCALE = 2;
  const palette = { cyan: '#39d9e6', pink: '#ff4f91', yellow: '#ffd84a' };
  type DrawCell = Cell & { row: number; col: number };

  function pairId(cell: Cell) {
    return cell.kind === 'pill' ? cell.id.slice(0, -1) : '';
  }

  function drawVirus(context: CanvasRenderingContext2D, cell: DrawCell) {
    const x = LEFT + cell.col * CELL;
    const y = TOP + cell.row * CELL;
    context.fillStyle = '#08090d';
    context.beginPath();
    context.roundRect(x + .25, y + 1.25, 9.5, 7, 3);
    context.fill();
    context.fillRect(x + 2, y + .25, 2.25, 2.5);
    context.fillRect(x + 5.75, y + .25, 2.25, 2.5);
    context.fillRect(x + 1.25, y + 7, 2.75, 2.5);
    context.fillRect(x + 6, y + 7, 2.75, 2.5);
    context.fillStyle = palette[cell.color];
    context.beginPath();
    context.roundRect(x + 1.25, y + 2, 7.5, 5.5, 2);
    context.fill();
    context.fillRect(x + 2.75, y + 1, 1.25, 2);
    context.fillRect(x + 6, y + 1, 1.25, 2);
    context.fillRect(x + 2, y + 7, 1.5, 1.5);
    context.fillRect(x + 6.5, y + 7, 1.5, 1.5);
    context.fillStyle = 'rgba(255,255,255,.34)';
    context.fillRect(x + 2, y + 2.25, 5.75, .75);
    context.fillStyle = '#08090d';
    context.fillRect(x + 2.5, y + 4, 1.5, 1.75);
    context.fillRect(x + 6, y + 4, 1.5, 1.75);
    context.fillRect(x + 4.25, y + 6.25, 1.5, .75);
  }

  function halfRadii(dx: number, dy: number, radius: number) {
    if (dx === 1) return [radius, 0, 0, radius];
    if (dx === -1) return [0, radius, radius, 0];
    if (dy === 1) return [radius, radius, 0, 0];
    if (dy === -1) return [0, 0, radius, radius];
    return radius;
  }

  function drawPill(context: CanvasRenderingContext2D, cell: DrawCell, cells: DrawCell[], left = LEFT, top = TOP) {
    const mate = cells.find((other) => other !== cell && pairId(other) === pairId(cell));
    const dx = mate?.col === cell.col ? 0 : (mate?.col ?? cell.col) - cell.col;
    const dy = mate?.row === cell.row ? 0 : (mate?.row ?? cell.row) - cell.row;
    const x = left + cell.col * CELL;
    const y = top + cell.row * CELL;
    const radii = halfRadii(dx, dy, 4);
    context.fillStyle = '#08090d';
    context.beginPath();
    context.roundRect(x, y, 10, 10, radii);
    context.fill();
    const innerX = x + (dx === -1 ? 0 : 1.25);
    const innerY = y + (dy === -1 ? 0 : 1.25);
    const innerWidth = dx === 0 ? 7.5 : 8.75;
    const innerHeight = dy === 0 ? 7.5 : 8.75;
    context.fillStyle = palette[cell.color];
    context.beginPath();
    context.roundRect(innerX, innerY, innerWidth, innerHeight, halfRadii(dx, dy, 3));
    context.fill();
    context.save();
    context.beginPath();
    context.roundRect(innerX, innerY, innerWidth, innerHeight, halfRadii(dx, dy, 3));
    context.clip();
    if (dy !== -1) {
      context.fillStyle = 'rgba(255,255,255,.38)';
      context.fillRect(x + (dx === -1 ? 0 : 1.75), y + 1.75, dx === 0 ? 6.5 : 8.25, 1.25);
    }
    if (dy !== 1) {
      context.fillStyle = 'rgba(0,0,0,.28)';
      context.fillRect(x + (dx === -1 ? 0 : 1.75), y + 7.25, dx === 0 ? 6.5 : 8.25, 1.25);
    }
    context.restore();
    context.fillStyle = '#08090d';
    if (dx === 1) context.fillRect(x + 9.75, y + 1.25, .5, 7.5);
    if (dy === 1) context.fillRect(x + 1.25, y + 9.75, 7.5, .5);
  }

  function drawPreview() {
    if (!previewCanvas || state.phase !== 'playing') return;
    const context = previewCanvas.getContext('2d');
    if (!context) return;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    context.setTransform(RENDER_SCALE, 0, 0, RENDER_SCALE, 0, 0);
    const cells: DrawCell[] = [
      { id: 'previewa', kind: 'pill', color: preview[0], row: 0, col: 0 },
      { id: 'previewb', kind: 'pill', color: preview[1], row: 0, col: 1 }
    ];
    for (const cell of cells) drawPill(context, cell, cells, 0, 0);
  }

  function draw() {
    if (!canvas) return;
    const frame = `${state.phase}|${state.board.map(cell => cell ? `${cell.id}:${cell.color}` : '').join(',')}|${state.active ? `${state.active.id}:${state.active.row}:${state.active.col}:${state.active.orientation}:${state.active.colors.join(':')}` : ''}|${state.fallingRain?.map(piece => `${piece.attackId}:${piece.item}:${piece.row}`).join(',') ?? ''}`;
    if (frame === lastFrame) return;
    lastFrame = frame;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(RENDER_SCALE, 0, 0, RENDER_SCALE, 0, 0);
    context.imageSmoothingEnabled = true;

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

    context.fillStyle = '#0d0f14';
    for (let column = 1; column < WIDTH; column++) context.fillRect(LEFT + column * CELL, TOP, .35, HEIGHT * CELL);
    for (let row = 1; row < HEIGHT; row++) context.fillRect(LEFT, TOP + row * CELL, WIDTH * CELL, .35);

    const cells: DrawCell[] = [];
    state.board.forEach((cell, index) => {
      if (cell) cells.push({ ...cell, row: Math.floor(index / WIDTH), col: index % WIDTH });
    });
    for (const active of activeCells(state)) cells.push({ ...active.cell, row: active.row, col: active.col });
    for (const rain of rainCells(state)) cells.push({ ...rain.cell, row: rain.row, col: rain.col });
    for (const cell of cells) cell.kind === 'virus' ? drawVirus(context, cell) : drawPill(context, cell, cells);
    drawPreview();
  }

  function showReplayTransition() {
    if (!canvas) return;
    const garbage = state.board.filter((cell) => cell?.id.startsWith('g')).length;
    const next = `${state.viruses}:${state.pills}:${state.phase}:${garbage}`;
    if (!observed) { observed = next; return; }
    if (next === observed) return;
    const [viruses, pills, phase, previousGarbage] = observed.split(':');
    observed = next;
    transition = garbage > Number(previousGarbage) ? 'rain'
      : state.viruses < Number(viruses) ? 'clear'
      : state.phase !== phase ? 'finish'
      : state.pills > Number(pills) ? 'lock' : '';
    if (!transition) return;
    if (transitionTimer) clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => transition = '', 420);
  }

  onMount(() => { draw(); showReplayTransition(); return () => { if (transitionTimer) clearTimeout(transitionTimer); }; });
  $: state, draw(), showReplayTransition();
</script>

<div class="bottle-shell">
  {#if showPreview}<div class="next-pill" aria-label={`Next pill: ${preview[0]} and ${preview[1]}`} aria-hidden={state.phase !== 'playing'}>
    {#if state.phase === 'playing'}
      <canvas bind:this={previewCanvas} class="preview-pill" width="40" height="20"></canvas>
    {/if}
  </div>{/if}
  <canvas bind:this={canvas} class="bottle" class:clear={transition==='clear'} class:lock={transition==='lock'} class:finish={transition==='finish'} class:rain={transition==='rain'} width="184" height="360" aria-label={label} data-cell-count={WIDTH * HEIGHT} data-virus-count={state.viruses} data-next-colors={preview.join(',')} data-active-pill={state.active ? 'true' : 'false'} data-pending-rain-count={state.pendingRain?.length ?? 0} data-rain-rows={state.fallingRain?.map(piece => piece.row).join(',') ?? ''} data-garbage-count={state.board.filter(cell => cell?.id.startsWith('g')).length}></canvas>
</div>

<style>
  .bottle-shell{width:min(34vw,230px);margin:auto}.next-pill{display:flex;align-items:center;justify-content:center;margin-bottom:.15rem}
  .preview-pill{display:block;width:calc(100% * 20 / 92);height:auto}
  .bottle { display:block; width:100%; height:auto; image-rendering:auto;transform-origin:50% 100% }
  .bottle.clear{animation:clear-flash .42s ease-out}.bottle.lock{animation:lock-bump .18s ease-out}.bottle.finish{animation:finish-glow .42s ease-out}.bottle.rain{animation:rain-shake .42s ease-out}
  @keyframes clear-flash{35%{filter:brightness(2) drop-shadow(0 0 15px var(--yellow));transform:scale(1.025)}}
  @keyframes lock-bump{45%{transform:translateY(2px)}}
  @keyframes finish-glow{50%{filter:brightness(1.7) drop-shadow(0 0 18px var(--cyan))}}
  @keyframes rain-shake{20%,60%{transform:translateX(-3px);filter:drop-shadow(0 0 12px var(--pink))}40%,80%{transform:translateX(3px)}}
  @media(prefers-reduced-motion:reduce){.bottle.clear,.bottle.lock,.bottle.finish,.bottle.rain{animation:none}}
</style>

<script lang="ts">
  import { onDestroy } from "svelte";
  import type {
    QuarryCascadeCell,
    QuarryCascadeWave,
    QuarryColor,
    QuarryState,
  } from "$lib/game/quarry-match";
  import { QUARRY_PRESENTATION_MS } from "$lib/presentation/quarry";

  export let state: QuarryState;
  export let label = "Quarry Match board";
  export let compact = false;
  export let selectColumn: ((column: number) => void) | undefined = undefined;
  export let onCascadeCue: (() => void) | undefined = undefined;
  export let onPresentationChange: ((complete: boolean) => void) | undefined = undefined;

  const mark: Record<QuarryColor, string> = {
    cyan: "◆",
    pink: "●",
    yellow: "✦",
    green: "▲",
    purple: "■",
  };
  const BURST_MS = QUARRY_PRESENTATION_MS.burst,
    SETTLE_MS = QUARRY_PRESENTATION_MS.settle,
    WAVE_MS = BURST_MS + SETTLE_MS;
  type RenderCell = {
    color?: QuarryColor;
    drop: number;
    bursting: boolean;
  };
  type Presentation = {
    waves: QuarryCascadeWave[];
    startedAt: number;
    cuedStages: number;
  };

  let presentation: Presentation | undefined,
    frame = 0,
    presentationTime = 0,
    observedCascades = state.cascades,
    observedRestarts = state.restarts,
    seen = false,
    cascadeCues = 0;

  function emptyRows() {
    return Array.from({ length: 12 }, (): RenderCell => ({
      drop: 0,
      bursting: false,
    }));
  }
  function stableRows(columns: QuarryColor[][]) {
    return columns.map((column) => {
      const rows = emptyRows();
      column.forEach((color, row) => (rows[row] = { color, drop: 0, bursting: false }));
      return rows;
    });
  }
  function burstRows(wave: QuarryCascadeWave) {
    const rows = stableRows(wave.before),
      cleared = new Set(wave.cells.map((cell) => `${cell.column}:${cell.row}`));
    rows.forEach((column, columnIndex) =>
      column.forEach((cell, row) => (cell.bursting = cleared.has(`${columnIndex}:${row}`))),
    );
    return rows;
  }
  function settledRows(wave: QuarryCascadeWave) {
    const rows = wave.after.map(() => emptyRows()),
      cleared = new Set(wave.cells.map((cell) => `${cell.column}:${cell.row}`));
    wave.before.forEach((column, columnIndex) => {
      let destination = 0;
      column.forEach((color, source) => {
        if (cleared.has(`${columnIndex}:${source}`)) return;
        rows[columnIndex][destination] = {
          color,
          drop: source - destination,
          bursting: false,
        };
        destination++;
      });
    });
    return rows;
  }
  function cueStage(stage: number) {
    if (!presentation || stage < presentation.cuedStages || stage >= presentation.waves.length) return;
    presentation.cuedStages = stage + 1;
    cascadeCues++;
    onCascadeCue?.();
  }
  function finishPresentation() {
    cancelAnimationFrame(frame);
    frame = 0;
    presentation = undefined;
    onPresentationChange?.(true);
  }
  function animate(now: number) {
    if (!presentation) return;
    presentationTime = now;
    const stage = Math.floor((now - presentation.startedAt) / WAVE_MS);
    if (stage >= presentation.waves.length) {
      finishPresentation();
      return;
    }
    cueStage(stage);
    frame = requestAnimationFrame(animate);
  }
  function startPresentation(waves: QuarryCascadeWave[]) {
    cancelAnimationFrame(frame);
    presentationTime = performance.now();
    presentation = {
      waves: structuredClone(waves),
      startedAt: presentationTime,
      cuedStages: 0,
    };
    onPresentationChange?.(false);
    cueStage(0);
    frame = requestAnimationFrame(animate);
  }
  function observe() {
    if (!seen) {
      seen = true;
      observedCascades = state.cascades;
      observedRestarts = state.restarts;
      return;
    }
    if (state.restarts !== observedRestarts || state.cascades < observedCascades) {
      observedRestarts = state.restarts;
      observedCascades = state.cascades;
      finishPresentation();
      return;
    }
    if (state.cascades > observedCascades) {
      observedCascades = state.cascades;
      if (state.lastCascadeWaves.length) startPresentation(state.lastCascadeWaves);
    }
  }
  $: state, observe();
  $: elapsed = presentation ? Math.max(0, presentationTime - presentation.startedAt) : 0;
  $: stage = presentation
    ? Math.min(presentation.waves.length - 1, Math.floor(elapsed / WAVE_MS))
    : -1;
  $: phase = presentation ? (elapsed % WAVE_MS < BURST_MS ? "burst" : "settle") : "idle";
  $: wave = presentation && stage >= 0 ? presentation.waves[stage] : undefined;
  $: rendered = wave
    ? phase === "burst"
      ? burstRows(wave)
      : settledRows(wave)
    : stableRows(state.columns);
  $: activeCells = wave && phase === "burst" ? wave.cells : ([] as QuarryCascadeCell[]);

  onDestroy(() => cancelAnimationFrame(frame));
</script>

<div
  class="quarry-shell"
  class:compact
  class:canopy={state.rulesVersion === "crystal-canopy/1"}
  aria-label={label}
  data-remaining={state.total - state.removed}
  data-rendered-remaining={rendered.flat().filter((cell) => cell.color).length}
  data-cursor={state.cursor}
  data-cascades={state.cascades}
  data-cascade-stage={stage >= 0 ? stage + 1 : ""}
  data-cascade-stages={presentation?.waves.length ?? 0}
  data-cascade-phase={phase}
  data-cascade-cues={cascadeCues}
  data-terminal-presentation={presentation ? "playing" : "complete"}
>
  <div class="progress" aria-label="Current match group">
    {#each [0, 1, 2] as slot}
      <span
        class:stone={slot < state.groupCount}
        class:occupied={slot < state.groupCount}
        class:cyan={state.groupColor === "cyan"}
        class:pink={state.groupColor === "pink"}
        class:yellow={state.groupColor === "yellow"}
        class:green={state.groupColor === "green"}
        class:purple={state.groupColor === "purple"}
      >{slot < state.groupCount && state.groupColor ? mark[state.groupColor] : "·"}</span>
    {/each}
  </div>
  <div class="board">
    {#each rendered as column, col}
      {#each Array(12) as _, visualRow}
        {@const row = state.rulesVersion === "crystal-canopy/1" ? visualRow : 11 - visualRow}
        {@const cell = column[row]}
        <div
          class="cell"
          class:occupied={Boolean(cell.color)}
          class:cyan={cell.color === "cyan"}
          class:pink={cell.color === "pink"}
          class:yellow={cell.color === "yellow"}
          class:green={cell.color === "green"}
          class:purple={cell.color === "purple"}
          class:bursting={cell.bursting}
          class:settling={phase === "settle" && cell.drop > 0}
          style={`--drop:${cell.drop}`}
        >{cell.color ? mark[cell.color] : ""}</div>
      {/each}
      {#if selectColumn}
        <button type="button" class="cursor" class:selected={state.cursor === col} aria-label={`Shoot column ${col + 1}`} on:pointerdown|preventDefault={() => selectColumn?.(col)}>▲</button>
      {:else}
        <div class="cursor" class:selected={state.cursor === col}>▲</div>
      {/if}
    {/each}
    <div class="effects" aria-hidden="true">
      {#key `${state.cascades}:${stage}:${phase}`}
        {#each activeCells as burst}
          <i
            class="burst"
            class:cyan={burst.color === "cyan"}
            class:pink={burst.color === "pink"}
            class:yellow={burst.color === "yellow"}
            class:green={burst.color === "green"}
            class:purple={burst.color === "purple"}
            style={`grid-column:${burst.column + 1};grid-row:${12 - burst.row}`}
          >✦</i>
        {/each}
      {/key}
    </div>
  </div>
</div>

<style>
  .quarry-shell{width:min(72vw,52dvh,430px);display:grid;gap:.35rem}.progress{display:flex;justify-content:center;gap:.35rem}.progress span{display:grid;place-items:center;width:1.7em;aspect-ratio:1;border:1px solid #45495b;color:var(--muted);background:#11131b}.progress .stone{border-radius:22%;color:#090a0e;border-color:#fff;text-shadow:0 1px #ffffff66;box-shadow:inset 0 3px #ffffff55,inset 0 -4px #00000035,0 1px 2px #000}.board{position:relative;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(13,1fr);grid-auto-flow:column;gap:2px;padding:.45rem;background:linear-gradient(#161925,#0d0f16);border:3px solid #3f4355;box-shadow:7px 7px 0 #08090d;aspect-ratio:5/12.7}.canopy .board{background:linear-gradient(#182536,#0b0d14);border-top-color:#8bdcf2}.canopy .cell.occupied{clip-path:polygon(8% 0,92% 0,78% 76%,50% 100%,22% 76%)}.cell{display:grid;place-items:center;border-radius:22%;font-size:clamp(.55rem,2.4dvh,1.15rem);color:#090a0e;text-shadow:0 1px #ffffff66}.occupied{box-shadow:inset 0 3px #ffffff55,inset 0 -4px #00000035,0 1px 2px #000}.cyan,.progress .cyan{background:#30d9d4}.pink,.progress .pink{background:#ff4f91}.yellow,.progress .yellow{background:#f5d547}.green,.progress .green{background:#65d75c}.purple,.progress .purple{background:#aa79ff}.cursor{display:grid;place-items:center;min-width:0;min-height:0;width:100%;height:100%;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;color:#4b4e5d;font-size:clamp(.5rem,2dvh,1rem);touch-action:manipulation}.cursor.selected{color:var(--yellow);filter:drop-shadow(0 0 4px var(--yellow))}.effects{position:absolute;inset:.45rem;display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(13,1fr);gap:2px;pointer-events:none}.burst{z-index:3;display:grid;place-items:center;border-radius:50%;font-style:normal;color:white;pointer-events:none;animation:burst .52s ease-out both;box-shadow:0 0 18px currentColor}.cell.bursting{animation:stone-pulse .52s ease-out both}.cell.settling{animation:settle .36s cubic-bezier(.2,.8,.2,1) both}.compact{width:100%;gap:.1rem}.compact .board{border-width:1px;padding:.15rem;gap:1px;box-shadow:2px 2px 0 #08090d}.compact .effects{inset:.15rem;gap:1px}.compact .progress{gap:1px;font-size:.35rem}.compact .progress span{width:1.2em}.compact .cell{font-size:.35rem}@keyframes burst{0%{opacity:1;transform:scale(.35);filter:brightness(2.5)}55%{opacity:1;transform:scale(1.7) rotate(25deg)}100%{opacity:0;transform:scale(2.35) rotate(60deg)}}@keyframes stone-pulse{0%{transform:scale(1);filter:brightness(1)}55%{transform:scale(1.14);filter:brightness(2.2)}100%{transform:scale(.1);filter:brightness(3);opacity:.15}}@keyframes settle{from{transform:translateY(calc(var(--drop) * -100%));filter:brightness(1.5)}to{transform:translateY(0);filter:brightness(1)}}@media(prefers-reduced-motion:reduce){.burst{animation:none;opacity:1;transform:scale(1.2)}.cell.bursting{animation:none;filter:brightness(1.8)}.cell.settling{animation:none}}
</style>

<script lang="ts">
  export let variant: 'cyan' | 'pink' | 'yellow' = 'cyan';
  export let label = 'YOU';
  const cells = [73, 74, 83, 84, 64, 75, 85, 95, 55, 65, 76, 86, 96, 66, 77, 87, 97];
</script>

<section class="board-wrap">
  <header><strong>{label}</strong><span>1,240</span></header>
  <div class="board" class:cyan={variant === 'cyan'} class:pink={variant === 'pink'} class:yellow={variant === 'yellow'}>
    {#each Array(100) as _, i}
      <i class:filled={cells.includes(i)} class:active={[55, 65, 66, 76].includes(i)}></i>
    {/each}
  </div>
</section>

<style>
  .board-wrap { width: min(100%, 240px); }
  header { display: flex; justify-content: space-between; margin-bottom: .45rem; font-size: .76rem; letter-spacing: .12em; }
  .board { background: #090a0f; border: 3px solid #303343; box-shadow: 6px 6px 0 #08090d; display: grid; grid-template-columns: repeat(10, 1fr); padding: 5px; aspect-ratio: 1/1.45; align-content: end; }
  i { aspect-ratio: 1; border: 1px solid #171922; }
  i.filled { background: var(--piece); border: 2px outset color-mix(in srgb, var(--piece), white 30%); }
  i.active { filter: brightness(1.35); }
  .cyan { --piece: var(--cyan); } .pink { --piece: var(--pink); } .yellow { --piece: var(--yellow); }
</style>

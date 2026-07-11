<script lang="ts">
  import '../styles/global.css';
</script>

<svelte:head><title>drm — block party</title><meta name="description" content="A multiplayer falling-block room game" /></svelte:head>
<slot />
<div class="build" aria-label="Build commit">build {import.meta.env.VITE_APP_COMMIT_HASH}</div>

<style>
  .build { position: fixed; right: .5rem; bottom: .35rem; z-index: 20; color: #747684; font: .62rem/1 'Space Mono', monospace; background: rgba(7, 8, 12, .82); padding: .3rem .4rem; pointer-events: none; }
</style>

<script lang="ts">
  export let online=true;export let ready=false;export let gamepadName='';export let room='';
  $: label=!online?'OFFLINE':!ready?'CONNECTING':'CONNECTED';
</script>
<div class="status-strip" role="status" aria-live="polite">
  <span class:offline={!online} class:connecting={online&&!ready}>● {label}</span>
  <span>ROOM {room}</span>
  {#if gamepadName}<span title={gamepadName}>GAMEPAD READY</span>{:else}<span>TOUCH / KEYBOARD</span>{/if}
</div>
<style>
  .status-strip{position:absolute;z-index:4;top:max(.55rem,env(safe-area-inset-top));left:max(.7rem,env(safe-area-inset-left));right:max(.7rem,env(safe-area-inset-right));display:flex;gap:.7rem;align-items:center;color:var(--cyan);font-size:clamp(.48rem,1.5dvh,.62rem);letter-spacing:.08em}.status-strip span:nth-child(2){color:var(--muted)}.status-strip span:last-child{margin-left:auto}.offline{color:var(--pink)!important}.connecting{color:var(--yellow)!important}
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { STANDARD_GAMEPAD_BUTTON as BUTTON } from '$lib/input/gamepad';

  let connected = false;
  let name = '';
  let pressed: number[] = [];
  let horizontal = 0;
  let vertical = 0;
  let frame = 0;
  let signature = '';

  const active = (button: number) => pressed.includes(button);
  $: up = active(BUTTON.up) || vertical < -0.55;
  $: down = active(BUTTON.down) || vertical > 0.55;
  $: left = active(BUTTON.left) || horizontal < -0.55;
  $: right = active(BUTTON.right) || horizontal > 0.55;

  function poll() {
    const pads = typeof navigator.getGamepads === 'function' ? Array.from(navigator.getGamepads()) : [];
    const pad = pads.find((candidate) => candidate?.connected);
    const nextPressed = pad ? Array.from(pad.buttons, (button, index) => button.pressed || button.value > 0.5 ? index : -1).filter((index) => index >= 0) : [];
    const nextHorizontal = pad?.axes[0] ?? 0;
    const nextVertical = pad?.axes[1] ?? 0;
    const nextSignature = `${pad?.id ?? ''}|${nextPressed.join(',')}|${nextHorizontal.toFixed(2)}|${nextVertical.toFixed(2)}`;
    if (nextSignature !== signature) {
      signature = nextSignature;
      connected = Boolean(pad);
      name = pad?.id ?? '';
      pressed = nextPressed;
      horizontal = nextHorizontal;
      vertical = nextVertical;
    }
    frame = requestAnimationFrame(poll);
  }

  onMount(() => {
    frame = requestAnimationFrame(poll);
    return () => cancelAnimationFrame(frame);
  });
</script>

<section class:connected aria-label="Gamepad detector" data-connected={connected} data-pressed={pressed.join(',')}>
  <div class="status" aria-live="polite">
    <strong>{connected ? 'CONTROLLER DETECTED' : 'CONNECT A CONTROLLER'}</strong>
    <small title={name}>{connected ? name : 'Press a button to let the browser detect it'}</small>
  </div>
  <div class="controller" aria-hidden="true">
    <i class="shoulder l" class:active={active(BUTTON.leftShoulder)}>L</i>
    <i class="shoulder r" class:active={active(BUTTON.rightShoulder)}>R</i>
    <div class="dpad">
      <i class="up" class:active={up}>▲</i><i class="left" class:active={left}>◀</i><i class="middle"></i><i class="right" class:active={right}>▶</i><i class="down" class:active={down}>▼</i>
    </div>
    <i class="stick" class:active={Math.abs(horizontal)>.55||Math.abs(vertical)>.55} style={`--sx:${horizontal * 4}px;--sy:${vertical * 4}px`}></i>
    <div class="center"><i class:active={active(BUTTON.centerLeft)}>−</i><i class:active={active(BUTTON.centerRight)}>+</i></div>
    <div class="faces">
      <i class="x" class:active={active(BUTTON.top)}>X</i>
      <i class="y" class:active={active(BUTTON.leftFace)}>Y</i>
      <i class="a" class:active={active(BUTTON.rightFace)}>A</i>
      <i class="b" class:active={active(BUTTON.bottom)}>B</i>
    </div>
  </div>
</section>

<style>
  section{display:grid;justify-items:center;gap:.45rem;margin:1rem auto 0;color:var(--muted)}.status{display:grid;gap:.2rem;text-align:center;max-width:min(90vw,30rem)}.status strong{font-size:.62rem;color:var(--yellow)}.status small{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.48rem}.connected .status strong{color:var(--cyan)}
  .controller{position:relative;width:210px;height:112px;border:2px solid #3d4254;border-radius:46% 46% 38% 38%/54% 54% 46% 46%;background:linear-gradient(145deg,#242938,#10131c);box-shadow:inset 0 0 0 5px #090b11,0 8px 20px #0008}.connected .controller{border-color:#497385;box-shadow:inset 0 0 0 5px #090b11,0 0 18px #2bd9d433}
  i{position:absolute;display:grid;place-items:center;font-style:normal;font-weight:900;box-sizing:border-box}.shoulder{top:-8px;width:58px;height:16px;border:1px solid #4a5064;border-radius:12px 12px 4px 4px;background:#151925;color:#8f96aa;font-size:.48rem}.shoulder.l{left:18px}.shoulder.r{right:18px}.shoulder.active,.active{color:#071014!important;background:var(--cyan)!important;box-shadow:0 0 12px var(--cyan)!important}
  .dpad{position:absolute;left:25px;top:29px;width:56px;height:56px;display:grid;grid-template:repeat(3,1fr)/repeat(3,1fr)}.dpad i{position:relative;background:#07090e;color:#697086;font-size:.52rem}.dpad .up{grid-area:1/2;border-radius:4px 4px 0 0}.dpad .left{grid-area:2/1;border-radius:4px 0 0 4px}.dpad .middle{grid-area:2/2}.dpad .right{grid-area:2/3;border-radius:0 4px 4px 0}.dpad .down{grid-area:3/2;border-radius:0 0 4px 4px}
  .stick{left:88px;bottom:18px;width:25px;height:25px;border:3px solid #080a10;border-radius:50%;background:#303648;transform:translate(var(--sx),var(--sy));transition:transform .05s linear}.center{position:absolute;left:91px;top:24px;display:flex;gap:8px}.center i{position:relative;width:16px;height:10px;border-radius:6px;background:#080a10;color:#747b90;font-size:.45rem}
  .faces{position:absolute;right:23px;top:24px;width:62px;height:62px}.faces i{width:24px;height:24px;border:2px solid #080a10;border-radius:50%;background:#303648;color:#d9dce5;font-size:.58rem}.faces .x{left:19px;top:0;color:#7ddcf4}.faces .y{left:0;top:19px;color:#f1dc67}.faces .a{right:0;top:19px;color:#e96767}.faces .b{left:19px;bottom:0;color:#7bd685}
  @media(max-width:420px){.controller{transform:scale(.9);margin:-.25rem 0}}
</style>

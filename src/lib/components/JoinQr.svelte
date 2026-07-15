<script lang="ts">
  import { onMount } from 'svelte';

  export let href: string;
  export let label = 'Scan to join';
  let source = '';
  let unavailable = false;

  onMount(() => {
    void import('qrcode').then(({ default: QRCode }) => QRCode.toDataURL(href, {
      errorCorrectionLevel: 'M',
      margin: 1,
      width: 240,
      color: { dark: '#07080cff', light: '#f4f1e8ff' }
    })).then((value) => source = value).catch(() => unavailable = true);
  });
</script>

<figure aria-label={label}>
  {#if source}<img src={source} alt={`${label}: ${href}`} width="240" height="240" />
  {:else if unavailable}<p>Use the room code to join.</p>
  {:else}<span aria-hidden="true"></span>{/if}
  <figcaption>{label}</figcaption>
</figure>

<style>
  figure{margin:0;display:grid;justify-items:center;gap:.55rem}
  img{display:block;width:min(25vw,150px);height:auto;background:var(--text);border:5px solid var(--text);border-radius:4px}
  span{display:block;width:min(25vw,150px);aspect-ratio:1;background:#2a2c38;animation:pulse 1.2s ease-in-out infinite alternate}
  figcaption{color:var(--yellow);font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}
  p{max-width:12rem;color:var(--muted);font-size:.7rem;text-align:center}
  @keyframes pulse{to{opacity:.45}}
  @media(prefers-reduced-motion:reduce){span{animation:none}}
</style>

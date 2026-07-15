import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

function commitHash() {
  if (process.env.COMMIT_HASH) return process.env.COMMIT_HASH.substring(0, 7);
  try { return execSync('git rev-parse --short HEAD').toString().trim(); }
  catch { return 'unknown'; }
}

export default defineConfig({
  plugins: [sveltekit()],
  server: { fs: { allow: [fileURLToPath(new URL('.', import.meta.url))] } },
  define: { 'import.meta.env.VITE_APP_COMMIT_HASH': JSON.stringify(commitHash()) }
});

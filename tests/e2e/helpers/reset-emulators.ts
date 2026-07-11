export async function resetEmulators() {
  const responses = await Promise.all([
    fetch('http://127.0.0.1:8085/emulator/v1/projects/drm-e2e/databases/(default)/documents', { method: 'DELETE' }),
    fetch('http://127.0.0.1:9099/emulator/v1/projects/drm-e2e/accounts', { method: 'DELETE' })
  ]);
  if (responses.some((response) => !response.ok)) throw new Error('Failed to reset Firebase emulators.');
}

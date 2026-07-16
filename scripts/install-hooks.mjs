import { spawnSync } from 'node:child_process';

const result = spawnSync('git', ['config', 'core.hooksPath', '.githooks'], { stdio: 'ignore' });
if (result.status === 0) console.log('Installed repository Git hooks from .githooks.');

import { spawn } from 'node:child_process';

const isWindows = process.platform === 'win32';

function start(name, command, args) {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: false,
    env: process.env,
  });

  child.on('exit', (code) => {
    if (shuttingDown) return;
    console.log(`${name} exited with code ${code}`);
    shutdown(code ?? 0);
  });

  return child;
}

let shuttingDown = false;
const children = [
  start('api', isWindows ? 'node.exe' : 'node', ['server/brain-api.mjs']),
  start('web', isWindows ? 'cmd.exe' : 'npm', isWindows ? ['/d', '/s', '/c', 'npm run web'] : ['run', 'web']),
];

function shutdown(code = 0) {
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) child.kill();
  }
  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

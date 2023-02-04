import { exec } from 'child_process';

exec('ls -lh', (err, stdout, stderr) => {
  if (err) {
    console.error(`error: ${err.message}`);
    return;
  }

  if (stderr) {
    console.error(`error: ${stderr}`);
  }

  console.log(`stdout"\n${stdout}`);
});

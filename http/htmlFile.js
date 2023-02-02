/**
 * Serving html from file
 */
import fs from 'fs/promises';
import http from 'node:http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const host = 'localhost';
const port = 8000;

let indexFile;

const requestListener = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + '/index.html')
  .then(contents => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`Server running at http://${host}/${port}`);
    });
  })
  .catch(err => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
  });

/**
 * Serving plain html with with http module
 */

import http from 'node:http';

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.writeHead(200);
  res.end(
    `<html><body><h1>This is HTML</h1><p>Skibidi dob dob yes yes</p></body></html>`
  );
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server running at http://${host}/${port}`);
});

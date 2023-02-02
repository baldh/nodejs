/**
 * Serving JSON via http module
 */

import http from 'node:http';

const host = 'localhost';
const port = 8000;

const requestListener = (req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.writeHead(200);
  res.end(`{"message": "This is JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server running at http://${host}/${port}`);
});

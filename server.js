const http = require('http');
const DBHandler = require('./DBHandler'); // Import the DBHandler module
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  // Call the connectAndInsert function from DBHandler
  DBHandler.connectAndInsert();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});

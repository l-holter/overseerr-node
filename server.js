const http = require('http');
require('dotenv').config();
const DBHandler = require('./DBHandler'); // Import the DBHandler module
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  // Call the connectAndInsert function from DBHandler
  DBHandler.connectAndInsert();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);

});

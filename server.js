require('dotenv').config();
var DBHandler = require('./DBHandler.js');
var express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Init db client
const DBClient = new DBHandler();

app.get('/api', (req, res) => {
  DBClient.writeToCollection();
  res.json({ message: 'Hello API!' });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

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

app.post('/api', (req, res) => {
  // Check if request body exists
  if (!req.body) {
    return res.status(400).json({ error: 'Request body is missing' });
  }

  // Serialize the request body to JSON
  const jsonData = JSON.stringify(req.body);
  print("Json Data from request body: " + jsonData)

  // Call the writeToCollection method with the serialized JSON data
  DBClient.writeToCollection(jsonData);

  res.json({ message: 'Auth OK' });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

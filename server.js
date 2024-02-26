require('dotenv').config();
var DBHandler = require('./DBHandler.js');
var express = require('express');


const app = express();
app.use(express.json())

const port = process.env.PORT || 3000;

// Init db client
const DBClient = new DBHandler();

app.post('/api', (req, res) => {
  // Check if request body exists
  if (!req.body) {
    res.status(400).json({ error: "Body missing."})
  }
  console.log("RECEIVED FOLLOWING BODY")
  console.log(req.body)

  // Write request body to database
  DBClient.writeConfigToCollection(req.body);

  res.json({ message: 'Content received' });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

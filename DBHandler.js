const { MongoClient } = require('mongodb');

class DBHandler {
  constructor() {
    this.URI = process.env.MONGO_URI;
    this.client = new MongoClient(this.URI)
    console.log("Created client")

    this.client.connect();
    console.log("Connected to DB")
  }

  async writeToCollection() {
    try {
      const database = this.client.db('overseerr');
      const collection = database.collection('connections');
  
      const newConnection = { name: 'Example Connection' };
      const result = await collection.insertOne(newConnection);
      console.log('Inserted new connection:', result.insertedId);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}


module.exports = DBHandler;
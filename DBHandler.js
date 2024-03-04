const { MongoClient } = require('mongodb');
const crypto = require('crypto');

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
  
      const newConnection = { name: 'Connection' , time: new Date()};
      const result = await collection.insertOne(newConnection);
      console.log('Inserted new connection:', result.insertedId);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async writeConfigToCollection(req) {
    try {
        const database = this.client.db('overseerr');
        const collection = database.collection('configs');

        // Extract the IP address from the request
        const ip = req.ip || req.headers['x-forwarded-for'] || 'Unknown';

        // Hash the IP address
        const hashedIp = crypto.createHash('sha256').update(ip).digest('hex');

        const configData = { ...req.body, time_stamp: new Date(), hashed_ip: hashedIp };
        const result = await collection.insertOne(configData);
        console.log('Inserted new config:', result.insertedId);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
  }
}

module.exports = DBHandler;
const { MongoClient } = require('mongodb');

async function connectAndInsert() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('overseerr');
    const collection = database.collection('connections');

    const newConnection = { name: 'Example Connection' };
    const result = await collection.insertOne(newConnection);
    console.log('Inserted new connection:', result.insertedId);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

module.exports = { connectAndInsert };
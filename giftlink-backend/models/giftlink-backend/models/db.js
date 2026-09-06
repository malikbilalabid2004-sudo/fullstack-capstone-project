require('dotenv').config();
const { MongoClient } = require('mongodb');
const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
let dbInstance = null;
const client = new MongoClient(url);
async function connectToDatabase() {
    if (dbInstance) return dbInstance;
    await client.connect();
    dbInstance = client.db("giftdb");
    return dbInstance;
}
module.exports = connectToDatabase;

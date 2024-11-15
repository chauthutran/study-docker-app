import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

export async function connectToDatabase() {
  if (!uri) throw new Error("Please define the MONGO_URI environment variable");

  const client = new MongoClient(uri);

//   if (!client.isConnected) 
    await client.connect();

  return client.db("mydatabase");
}
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECT;

const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export function getDB() {
  return client.db("Prom2023");
}

export async function closeDB() {
  await client.close();
  console.log("MongoDB connection closed");
}

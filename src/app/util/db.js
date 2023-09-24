import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({ path: ".myenv.env" });

const uri = process.env.MONGODB_CONNECT;

export async function connectDB() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export function getDB() {
  console.log(uri);
  const client = new MongoClient(uri);

  console.log("hiii: " + uri);
  return client.db("Prom2023");
}

export async function closeDB() {
  const client = new MongoClient(uri);

  await client.close();
  console.log("MongoDB connection closed");
}

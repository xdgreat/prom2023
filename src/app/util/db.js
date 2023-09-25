import { ServerApiVersion } from "mongodb";
let MongoClient = require("mongodb").MongoClient;
import dotenv from "dotenv";
dotenv.config({ path: ".myenv.env" });

const uri = process.env.MONGODB_CONNECT;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectDB() {
  const client = MongoClient(uri);

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

export async function run() {
  try {
    await client.connect();
    client.db("Prom2023");
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}

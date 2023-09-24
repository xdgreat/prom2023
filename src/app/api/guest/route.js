import { getDB } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = getDB();
    const guestsCollection = db.collection("Guests");
    const guests = await guestsCollection.find({}).toArray();
    return NextResponse.json(guests);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}

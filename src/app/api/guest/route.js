import { getDB, run } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = getDB();
    const guestsCollection = db.collection("Guests");
    const guests = await guestsCollection.find({}).toArray();
    return NextResponse.json(guests);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error: error });
  }
}

export const dynamic = "force-dynamic";

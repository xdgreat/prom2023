import { getDB } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("ins");

  try {
    const db = getDB();
    const guestsCollection = db.collection("Guests");
    console.log("in");
    const guests = await guestsCollection.find({}).toArray();
    console.log(guests);
    return NextResponse.json(guests);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}

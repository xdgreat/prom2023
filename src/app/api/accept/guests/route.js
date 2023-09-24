import { getDB } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = getDB();
    const collection = db.collection("Guests");
    const acceptedUsers = await collection
      .find({ status: "accepted" })
      .toArray();

    return NextResponse.json(acceptedUsers);
  } catch (err) {
    return NextResponse.json({ success: false });
  }
}

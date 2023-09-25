import { closeDB, connectDB, getDB } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const db = getDB();
    const req = await request.json();
    const collection = db.collection("Guests");
    const acceptedUsers = await collection
      .find({ status: "accepted", orderNumber: parseInt(req.orderNumber) })
      .toArray();

    return NextResponse.json(acceptedUsers);
  } catch (err) {
    return NextResponse.json({ success: false, error: err });
  }
}

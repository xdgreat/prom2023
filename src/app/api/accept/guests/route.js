import { connectDB, getDB } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("hi");
  try {
    const req = await request.json();
    console.log("hie");
    const db = getDB();
    console.log("hid");
    const collection = db.collection("Guests");
    console.log("hix");
    const acceptedUsers = await collection
      .find({ status: "accepted", orderNumber: req.orderNumber })
      .toArray();

    console.log("hiss");
    console.log(acceptedUsers[0].firstName);
    return NextResponse.json(acceptedUsers);
  } catch (err) {
    return NextResponse.json({ success: false });
  }
}

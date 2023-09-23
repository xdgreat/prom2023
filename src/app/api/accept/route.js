import { getDB } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();
  console.log("hi");
  console.log(req);
  const { orderNumber } = req;
  console.log("hs");
  const db = getDB();
  const guestsCollection = db.collection("Guests");

  try {
    console.log("hif");
    await guestsCollection.updateOne(
      { orderNumber: parseInt(orderNumber) },
      { $set: { status: "accepted" } }
    );
    console.log("hai");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.error(err, { status: 500 });
  }
}

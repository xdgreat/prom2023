import { getDB } from "@/app/util/db";
import { NextResponse } from "next/server";

async function generateUniqueOrderNumber(guestsCollection) {
  let orderNumber;
  let isUnique = false;
  while (!isUnique) {
    orderNumber = Math.floor(Math.random() * 9000) + 1000;
    console.log(orderNumber);
    const existingGuest = await guestsCollection.findOne({ orderNumber });
    if (!existingGuest) {
      isUnique = true;
    }
  }
  return orderNumber;
}

export async function POST(request) {
  const req = await request.json();
  const db = getDB();
  const guestsCollection = db.collection("Guests");

  try {
    const orderNumber = await generateUniqueOrderNumber(guestsCollection);
    req.orderNumber = orderNumber;
    const result = await guestsCollection.insertOne(req);
    return NextResponse.json({ orderNumber: orderNumber });
  } catch (error) {
    return NextResponse.error(error, { status: 500 });
  }
}

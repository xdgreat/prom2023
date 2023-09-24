import { getDB } from "@/app/util/db";
import { NextResponse } from "next/server";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
const twilioSID = process.env.TWILIO_SID;
const twilioToken = process.env.TWILIO_TOKEN;

const client = twilio(twilioSID, twilioToken);

export async function POST(request) {
  try {
    const db = getDB();
    const guestsCollection = db.collection("Guests");
    const { orderNumber } = await request.json();

    const guest = await guestsCollection.findOne({
      orderNumber: parseInt(orderNumber),
    });

    if (!guest) {
      return NextResponse.error("Guest not found");
    }

    const { firstName, lastName, email, phoneNumber } = guest;
    const countryCode = "+679";
    const formattedPhoneNumber = `${countryCode}${phoneNumber}`;
    const instagramUsername = "@fr3sh.budusy";
    const message = `Hi ${firstName} ${lastName},\n\nWe regret to inform you that your payment was not received. If you believe this is in error or need assistance, please contact us on Instagram at https://instagram.com/${instagramUsername}.\n\nThank you for considering our event.`;

    await client.messages.create({
      body: message,
      from: "+17855092093",
      to: formattedPhoneNumber,
    });

    await guestsCollection.updateOne(
      { orderNumber: parseInt(orderNumber) },
      { $set: { status: "rejected" } }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error, { status: 500 });
  }
}

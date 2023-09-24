import { getDB } from "@/app/util/db";
import { NextResponse } from "next/server";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
const twilioSID = process.env.TWILIO_SID;
const twilioToken = process.env.TWILIO_TOKEN;

const client = twilio(twilioSID, twilioToken);

export const POST = async (request) => {
  try {
    const { orderNumber } = await request.json();
    const db = getDB();
    const guestsCollection = db.collection("Guests");

    const guest = await guestsCollection.findOne({
      orderNumber: parseInt(orderNumber),
    });

    if (!guest) {
      return NextResponse.error("Guest not found", { status: 404 });
    }

    const { firstName, lastName, email, phoneNumber } = guest;
    const countryCode = "+679";
    const formattedPhoneNumber = `${countryCode}${phoneNumber}`;
    const eTicketLink = `https://prom2023.org/guest/${orderNumber}`;
    const message = `Hi ${firstName} ${lastName},\n\nThank you for your purchase! Your order number is #${orderNumber}.\n\nClick here to access your E-Ticket: ${eTicketLink}\n\nThank you for choosing our event!`;

    await client.messages.create({
      body: message,
      from: "+17855092093",
      to: formattedPhoneNumber,
    });

    await guestsCollection.updateOne(
      { orderNumber: parseInt(orderNumber) },
      { $set: { status: "accepted" } }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.error(error, { status: 500 });
  }
};

import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();
  const { username, password } = req;
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername) {
    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    }
  }
  return NextResponse.json({
    success: false,
    message: "Incorrect Username or Password",
  });
}

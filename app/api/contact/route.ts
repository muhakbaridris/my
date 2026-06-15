import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!name || !email.includes("@") || message.length < 10) {
    return NextResponse.json({ message: "Please provide a valid name, email, and message." }, { status: 400 });
  }
  console.info("Contact form submission", { name, email, messageLength: message.length });
  return NextResponse.json({ message: "Message received." }, { status: 201 });
}

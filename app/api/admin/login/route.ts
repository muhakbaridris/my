import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminCookieName, createAdminToken, credentialsAreValid } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (!credentialsAreValid(String(username), String(password))) {
    return NextResponse.json({ message: "Username atau password tidak valid." }, { status: 401 });
  }
  const store = await cookies();
  store.set(adminCookieName(), createAdminToken(String(username)), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return NextResponse.json({ message: "Login berhasil." });
}

import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminCookieName } from "@/lib/admin-auth";

export async function POST() {
  const store = await cookies();
  store.delete(adminCookieName());
  return NextResponse.json({ message: "Logout berhasil." });
}

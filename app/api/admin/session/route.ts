import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { adminCookieName, verifyAdminToken } from "@/lib/admin-auth";

export async function GET() {
  const store = await cookies();
  return NextResponse.json({
    authenticated: verifyAdminToken(store.get(adminCookieName())?.value),
    publishingConfigured: Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_REPO),
  });
}

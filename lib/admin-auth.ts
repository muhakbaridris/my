import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "mai_admin_session";

export function adminCookieName() {
  return COOKIE_NAME;
}

function sign(value: string) {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) throw new Error("ADMIN_SECRET is not configured.");
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createAdminToken(username: string) {
  const expires = Date.now() + 1000 * 60 * 60 * 8;
  const value = `${username}.${expires}`;
  return `${value}.${sign(value)}`;
}

export function verifyAdminToken(token?: string) {
  if (!token) return false;
  const [username, expires, signature] = token.split(".");
  if (!username || !expires || !signature || Number(expires) < Date.now()) return false;
  const expected = sign(`${username}.${expires}`);
  return signature.length === expected.length && timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export function credentialsAreValid(username: string, password: string) {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUsername || !expectedPassword) return false;
  return username === expectedUsername && password === expectedPassword;
}

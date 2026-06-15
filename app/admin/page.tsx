import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

export default function AdminPage() {
  return <section className="mx-auto min-h-[75vh] max-w-7xl px-5 py-16 lg:px-8"><AdminDashboard /></section>;
}

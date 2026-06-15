"use client";

import { BookOpen, FilePlus2, LoaderCircle, LogOut, ShieldCheck } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Session = { authenticated: boolean; publishingConfigured: boolean };

const inputClass = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald dark:border-slate-700 dark:bg-slate-950";

export function AdminDashboard() {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function refreshSession() {
    setSession(await fetch("/api/admin/session").then((response) => response.json()));
  }
  useEffect(() => { void refreshSession(); }, []);

  async function submit(event: FormEvent<HTMLFormElement>, endpoint: string) {
    event.preventDefault(); setLoading(true); setStatus("");
    const form = event.currentTarget;
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
    const result = await response.json(); setStatus(result.message); setLoading(false);
    if (response.ok) { form.reset(); await refreshSession(); }
  }

  if (!session) return <LoaderCircle className="mx-auto animate-spin text-emerald" />;
  if (!session.authenticated) return (
    <Card className="mx-auto max-w-md">
      <ShieldCheck className="text-emerald" />
      <h1 className="mt-5 text-2xl font-semibold text-ink dark:text-white">Admin login</h1>
      <p className="mt-2 text-sm leading-6 text-slate-500">Masuk untuk menambahkan publikasi atau tulisan baru.</p>
      <form onSubmit={(event) => submit(event, "/api/admin/login")} className="mt-7 space-y-4">
        <input className={inputClass} name="username" placeholder="Username" required />
        <input className={inputClass} type="password" name="password" placeholder="Password" required />
        <Button disabled={loading} className="w-full">{loading && <LoaderCircle className="animate-spin" size={16} />} Masuk</Button>
      </form>
      {status && <p className="mt-4 text-sm text-slate-500">{status}</p>}
    </Card>
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-emerald">Content studio</p><h1 className="mt-2 text-3xl font-semibold text-ink dark:text-white">Kelola website</h1></div>
        <Button variant="outline" onClick={async () => { await fetch("/api/admin/logout", { method: "POST" }); await refreshSession(); }}><LogOut size={16} /> Logout</Button>
      </div>
      {!session.publishingConfigured && <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Login aktif. Agar tombol simpan dapat memperbarui website, tambahkan <b>GITHUB_TOKEN</b> dan <b>GITHUB_REPO</b> pada Environment Variables Vercel.</div>}
      <div className="grid gap-8 xl:grid-cols-2">
        <Card>
          <div className="flex items-center gap-3"><BookOpen className="text-emerald" /><h2 className="text-xl font-semibold text-ink dark:text-white">Tambah publikasi</h2></div>
          <form onSubmit={(event) => submit(event, "/api/admin/publish")} className="mt-6 grid gap-4">
            <input type="hidden" name="type" value="publication" />
            <input className={inputClass} name="title" placeholder="Judul publikasi" required />
            <input className={inputClass} name="authors" placeholder="Penulis, pisahkan dengan koma" required />
            <div className="grid gap-4 sm:grid-cols-2"><input className={inputClass} name="journal" placeholder="Jurnal" required /><input className={inputClass} type="number" name="year" placeholder="Tahun" required /></div>
            <input className={inputClass} name="doi" placeholder="DOI" required />
            <input className={inputClass} name="keywords" placeholder="Kata kunci, pisahkan dengan koma" required />
            <textarea className={inputClass} name="abstract" rows={4} placeholder="Abstrak singkat" required />
            <textarea className={inputClass} name="bibtex" rows={3} placeholder="BibTeX (opsional)" />
            <Button disabled={loading}><FilePlus2 size={16} /> Simpan publikasi</Button>
          </form>
        </Card>
        <Card>
          <div className="flex items-center gap-3"><FilePlus2 className="text-emerald" /><h2 className="text-xl font-semibold text-ink dark:text-white">Tambah blog</h2></div>
          <form onSubmit={(event) => submit(event, "/api/admin/publish")} className="mt-6 grid gap-4">
            <input type="hidden" name="type" value="blog" />
            <input className={inputClass} name="title" placeholder="Judul tulisan" required />
            <input className={inputClass} name="excerpt" placeholder="Ringkasan" required />
            <div className="grid gap-4 sm:grid-cols-2"><input className={inputClass} name="category" placeholder="Kategori" required /><input className={inputClass} type="date" name="date" required /></div>
            <textarea className={inputClass} name="content" rows={12} placeholder="Isi tulisan dalam format Markdown" required />
            <Button disabled={loading}><FilePlus2 size={16} /> Simpan blog</Button>
          </form>
        </Card>
      </div>
      {status && <p className="rounded-2xl bg-emerald/10 p-4 text-sm font-medium text-emerald">{status}</p>}
    </div>
  );
}

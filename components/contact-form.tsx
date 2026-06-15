"use client";

import { LoaderCircle, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
    setStatus(response.ok ? "sent" : "error");
    if (response.ok) event.currentTarget.reset();
  }
  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink dark:text-white">Name<input required name="name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald dark:border-slate-700 dark:bg-slate-950" /></label>
        <label className="grid gap-2 text-sm font-medium text-ink dark:text-white">Email<input required type="email" name="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald dark:border-slate-700 dark:bg-slate-950" /></label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink dark:text-white">Message<textarea required name="message" rows={7} className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald dark:border-slate-700 dark:bg-slate-950" /></label>
      <div className="flex items-center gap-4"><Button disabled={status === "sending"}>{status === "sending" ? <LoaderCircle className="animate-spin" size={17} /> : <Send size={17} />} Send message</Button><p aria-live="polite" className="text-sm text-slate-500">{status === "sent" ? "Thank you. Your message has been received." : status === "error" ? "Please check the form and try again." : ""}</p></div>
    </form>
  );
}

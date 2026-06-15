"use client";

import { motion } from "framer-motion";
import { BookOpen, FolderKanban, Quote, Tags } from "lucide-react";

const stats = [
  { label: "Publications", value: "07", icon: BookOpen },
  { label: "Indexed journals", value: "03", icon: Quote },
  { label: "Research themes", value: "08", icon: Tags },
  { label: "Research projects", value: "03", icon: FolderKanban },
];

export function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }, index) => (
        <motion.div key={label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 + index * .08 }} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
          <Icon className="mb-5 text-emerald" size={20} />
          <p className="text-3xl font-semibold text-ink dark:text-white">{value}</p>
          <p className="mt-1 text-sm text-slate-500">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

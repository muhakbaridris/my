"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const key = "mai-visitor-count";
    const next = Number(localStorage.getItem(key) || "1247") + 1;
    localStorage.setItem(key, String(next));
    setCount(next);
  }, []);
  return <span className="flex items-center gap-1 text-xs" title="Local visitor counter"><Eye size={15} /> {count?.toLocaleString() ?? "—"}</span>;
}

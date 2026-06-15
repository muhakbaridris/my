import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-900/70",
        className,
      )}
      {...props}
    />
  );
}

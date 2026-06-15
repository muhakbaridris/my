import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(text: string) {
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 220));
}

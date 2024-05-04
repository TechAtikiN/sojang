import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatString(str: string) {
  return str.length > 20 ? str.slice(0, 20) + "..." : str
}
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Fired by in-page CTAs (e.g. the hero's "View Policies") to open the header's Policies menu.
export const OPEN_POLICIES_EVENT = "bhawana:open-policies"

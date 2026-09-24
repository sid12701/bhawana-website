"use client"

import { createElement, useLayoutEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode } from "react"
import { cn, getReducedMotion } from "../lib/utils"

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: keyof HTMLElementTagNameMap
  /** Seconds to wait before this element fades in (for sequencing siblings). */
  delay?: number
  children?: ReactNode
}

/**
 * Scroll-triggered fade-up that never hides content by default.
 *
 * The element is server-rendered fully visible, so it shows without JavaScript and before hydration.
 * Only elements that start below the fold are hidden (before first paint) and faded in when scrolled
 * into view; anything already on screen, or any visitor preferring reduced motion, gets no animation.
 */
export default function Reveal({ as = "div", delay = 0, className, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState<"static" | "hidden" | "shown">("static")

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || getReducedMotion() || !("IntersectionObserver" in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setState("hidden")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown")
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const revealStyle =
    state === "shown" && delay > 0 ? ({ ...style, "--reveal-delay": `${Math.min(delay, 0.4)}s` } as CSSProperties) : style

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: cn(className, state === "hidden" && "reveal-hidden", state === "shown" && "reveal-shown"),
      style: revealStyle,
    },
    children,
  )
}

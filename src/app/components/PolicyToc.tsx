"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "../lib/utils"

export type PolicyTocItem = {
  id: string
  title: string
  /** 3 for numbered subsections such as "3.1", which sit under their parent in the outline */
  level: 2 | 3
}

type PolicyTocProps = {
  items: PolicyTocItem[]
  lang?: string
}

// Titles such as "Complaints/Grievances/Enquiries" have no spaces; offer line breaks after each slash
// so the rail wraps between words instead of splitting one mid-word. The text itself is unchanged.
function breakAfterSlashes(title: string) {
  const parts = title.split("/")
  return parts.flatMap((part, i) => (i < parts.length - 1 ? [part, "/", <wbr key={i} />] : [part]))
}

/** Move focus to the chosen section so keyboard and screen-reader users land where the page scrolled. */
function focusSection(id: string) {
  document.getElementById(id)?.focus({ preventScroll: true })
}

function TocList({
  items,
  lang,
  activeId,
  onNavigate,
}: PolicyTocProps & { activeId?: string; onNavigate?: () => void }) {
  return (
    <ol lang={lang} className="border-l border-neutralDivider">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={() => {
              onNavigate?.()
              // Let the browser scroll to the anchor first, then move focus there
              requestAnimationFrame(() => focusSection(item.id))
            }}
            aria-current={item.id === activeId ? "location" : undefined}
            className={cn(
              "-ml-px block border-l py-1.5 pr-2 text-sm leading-snug [overflow-wrap:break-word] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
              item.level === 3 ? "pl-7" : "pl-4",
              item.id === activeId
                ? "border-primary font-medium text-primary"
                : "border-transparent text-neutralText hover:border-neutralText hover:text-secondary",
            )}
          >
            {breakAfterSlashes(item.title)}
          </a>
        </li>
      ))}
    </ol>
  )
}

/** Sticky desktop outline that tracks the section being read. */
export function PolicyTocSidebar({ items, lang }: PolicyTocProps) {
  const [activeId, setActiveId] = useState<string | undefined>(items[0]?.id)
  const navRef = useRef<HTMLElement>(null)

  // Long outlines scroll inside the sidebar; keep the active entry in view without moving the page.
  useEffect(() => {
    const nav = navRef.current
    const link = nav?.querySelector<HTMLElement>('[aria-current="location"]')
    if (!nav || !link) return
    // The sticky nav is the link's offsetParent, so offsetTop is already relative to it
    const top = link.offsetTop
    if (top < nav.scrollTop + 32 || top + link.offsetHeight > nav.scrollTop + nav.clientHeight - 32) {
      nav.scrollTop = top - nav.clientHeight / 3
    }
  }, [activeId])

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    // The active section is the last one whose top has passed a line just under the sticky header.
    const READING_LINE = 112
    let frame = 0
    const update = () => {
      frame = 0
      let current = sections[0].id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= READING_LINE) current = section.id
        else break
      }
      setActiveId(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [items])

  return (
    <nav
      ref={navRef}
      aria-labelledby="policy-toc-heading"
      className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain pb-4"
    >
      <p id="policy-toc-heading" className="mb-3 font-poppins text-sm font-semibold text-secondary">
        Contents
      </p>
      <TocList items={items} lang={lang} activeId={activeId} />
    </nav>
  )
}

/** Collapsible outline for phones and tablets; closes once a section is chosen. */
export function PolicyTocDisclosure({ items, lang }: PolicyTocProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  return (
    <details ref={detailsRef} className="group rounded-lg border border-neutralDivider bg-background">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-4 font-poppins text-sm font-semibold text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
        <span>
          Contents <span className="font-inter font-normal text-neutralText">({items.length})</span>
        </span>
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="px-4 pb-4 pt-1">
        <TocList
          items={items}
          lang={lang}
          onNavigate={() => {
            if (detailsRef.current) detailsRef.current.open = false
          }}
        />
      </div>
    </details>
  )
}

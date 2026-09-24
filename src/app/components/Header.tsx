"use client"

import { useState, useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { navigation } from "../lib/content"
import { cn, getReducedMotion, OPEN_POLICIES_EVENT } from "../lib/utils"

type NavChild = (typeof navigation.main)[number]["children"] extends (infer T)[] | undefined ? T : never

const POLICIES_MENU = "Policies & Codes"
const DESKTOP_QUERY = "(min-width: 1024px)"
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

function NavChildLink({
  child,
  className,
  onClick,
}: {
  child: NavChild
  className: string
  onClick?: () => void
}) {
  if ("external" in child && child.external) {
    return (
      <a
        href={child.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {child.label}
      </a>
    )
  }

  return (
    <Link href={child.href} className={className} onClick={onClick}>
      {child.label}
    </Link>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  // A hover-opened dropdown should stay open on the click that usually follows the hover.
  const openedByHoverRef = useRef(false)
  const focusFirstItemRef = useRef(false)
  const wasMobileMenuOpenRef = useRef(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // In-page CTAs can ask for the Policies menu: the dropdown on desktop, the drawer on mobile.
  useEffect(() => {
    const handleOpenPolicies = () => {
      if (window.matchMedia(DESKTOP_QUERY).matches) {
        openedByHoverRef.current = false
        focusFirstItemRef.current = true
        setOpenDropdown(POLICIES_MENU)
      } else {
        setOpenMobileSection(POLICIES_MENU)
        setIsMobileMenuOpen(true)
      }
    }

    window.addEventListener(OPEN_POLICIES_EVENT, handleOpenPolicies)
    return () => window.removeEventListener(OPEN_POLICIES_EVENT, handleOpenPolicies)
  }, [])

  // Desktop dropdown: move focus into a freshly opened menu, and close on outside press.
  useEffect(() => {
    if (!openDropdown) return

    if (focusFirstItemRef.current) {
      focusFirstItemRef.current = false
      dropdownRefs.current[openDropdown]?.querySelector<HTMLElement>("[data-nav-menu] a")?.focus()
    }

    const handlePointerDown = (event: PointerEvent) => {
      const wrapper = dropdownRefs.current[openDropdown]
      if (wrapper && !wrapper.contains(event.target as Node)) setOpenDropdown(null)
    }

    // Scrolling the page away means the reader has moved on; a small nudge shouldn't count.
    const scrollYAtOpen = window.scrollY
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollYAtOpen) <= 48) return
      // Don't strand keyboard focus on a menu item that's about to unmount
      if (dropdownRefs.current[openDropdown]?.querySelector("[data-nav-menu]")?.contains(document.activeElement)) {
        triggerRefs.current[openDropdown]?.focus({ preventScroll: true })
      }
      setOpenDropdown(null)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [openDropdown])

  // Mobile drawer behaves as a modal dialog: scroll lock, focus trap, Escape to close.
  useEffect(() => {
    if (!isMobileMenuOpen) {
      if (wasMobileMenuOpenRef.current) menuButtonRef.current?.focus({ preventScroll: true })
      wasMobileMenuOpenRef.current = false
      return
    }

    wasMobileMenuOpenRef.current = true
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    // The hero carousel reads this to hold its autoplay while the drawer covers the page
    document.documentElement.dataset.menuOpen = "true"
    closeButtonRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
        return
      }
      if (event.key !== "Tab" || !drawerRef.current) return

      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      } else if (!drawerRef.current.contains(document.activeElement)) {
        event.preventDefault()
        first.focus()
      }
    }

    const desktopQuery = window.matchMedia(DESKTOP_QUERY)
    const handleViewportChange = () => {
      if (desktopQuery.matches) setIsMobileMenuOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    desktopQuery.addEventListener("change", handleViewportChange)
    return () => {
      document.body.style.overflow = previousOverflow
      delete document.documentElement.dataset.menuOpen
      document.removeEventListener("keydown", handleKeyDown)
      desktopQuery.removeEventListener("change", handleViewportChange)
    }
  }, [isMobileMenuOpen])

  const toggleDropdown = (label: string) => {
    if (openDropdown === label && openedByHoverRef.current) {
      openedByHoverRef.current = false
      return
    }
    openedByHoverRef.current = false
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const handleDropdownKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>, label: string) => {
    const wrapper = dropdownRefs.current[label]
    const items = Array.from(wrapper?.querySelectorAll<HTMLElement>("[data-nav-menu] a") ?? [])
    const index = items.indexOf(document.activeElement as HTMLElement)

    switch (event.key) {
      case "Escape":
        if (openDropdown === label) {
          event.preventDefault()
          setOpenDropdown(null)
          triggerRefs.current[label]?.focus()
        }
        break
      case "ArrowDown":
        event.preventDefault()
        if (openDropdown !== label) {
          focusFirstItemRef.current = true
          openedByHoverRef.current = false
          setOpenDropdown(label)
        } else {
          items[Math.min(index + 1, items.length - 1)]?.focus()
        }
        break
      case "ArrowUp":
        if (openDropdown === label) {
          event.preventDefault()
          if (index <= 0) triggerRefs.current[label]?.focus()
          else items[index - 1]?.focus()
        }
        break
    }
  }

  const animationProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.15 },
      }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background border-b transition-shadow duration-150 ease-in",
        isScrolled && "shadow-md",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 min-h-16 py-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center space-x-3 font-poppins text-xl font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <img
              src="/images/final_logo.jpg"
              alt="Bhawana Capital Logo"
              width="40"
              height="40"
              className="h-10 w-auto object-contain"
            />
            <span className="min-w-0 [overflow-wrap:anywhere]">Bhawana Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.main.map((item, itemIndex) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    ref={(el) => {
                      dropdownRefs.current[item.label] = el
                    }}
                    className="relative"
                    onMouseEnter={() => {
                      if (openDropdown !== item.label) openedByHoverRef.current = true
                      setOpenDropdown(item.label)
                    }}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onKeyDown={(event) => handleDropdownKeyDown(event, item.label)}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setOpenDropdown((current) => (current === item.label ? null : current))
                      }
                    }}
                  >
                    <button
                      type="button"
                      ref={(el) => {
                        triggerRefs.current[item.label] = el
                      }}
                      className="flex items-center space-x-1 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                      aria-expanded={openDropdown === item.label}
                      aria-controls={`nav-menu-${itemIndex}`}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openDropdown === item.label && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          {...animationProps}
                          id={`nav-menu-${itemIndex}`}
                          data-nav-menu
                          className={cn(
                            "absolute top-full max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain rounded-lg border bg-background shadow-lg",
                            // Long menus (the 18 policies) read as two columns instead of one scrolling list
                            item.children.length > 8 ? "right-0 w-[36rem] columns-2 gap-x-1 p-2" : "left-0 w-72 py-2",
                          )}
                        >
                          {item.children.map((child) => (
                            <NavChildLink
                              key={child.label}
                              child={child}
                              className={cn(
                                "block px-4 py-2 text-sm text-secondary hover:bg-neutralBg hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
                                item.children.length > 8 && "break-inside-avoid rounded-md px-3",
                              )}
                              onClick={() => setOpenDropdown(null)}
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-sm font-medium text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            className="lg:hidden p-2.5 -mr-2.5 text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={drawerRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, x: "100%" },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: "100%" },
                  transition: { duration: 0.3, ease: "easeInOut" },
                })}
            className="lg:hidden fixed inset-y-0 right-0 w-80 max-w-[85vw] overflow-y-auto overscroll-contain bg-background border-l shadow-xl z-50"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span id="mobile-menu-title" className="font-poppins text-lg font-bold text-secondary">
                  Menu
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 -mr-2.5 text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navigation.main.map((item, itemIndex) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full text-left text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-2"
                          onClick={() =>
                            setOpenMobileSection(openMobileSection === item.label ? null : item.label)
                          }
                          aria-expanded={openMobileSection === item.label}
                          aria-controls={`mobile-nav-section-${itemIndex}`}
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              openMobileSection === item.label && "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileSection === item.label && (
                            <motion.div
                              id={`mobile-nav-section-${itemIndex}`}
                              {...(reducedMotion
                                ? {}
                                : {
                                    initial: { height: 0, opacity: 0 },
                                    animate: { height: "auto", opacity: 1 },
                                    exit: { height: 0, opacity: 0 },
                                    transition: { duration: 0.24, ease: "easeInOut" },
                                  })}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-1 space-y-0.5">
                                {item.children.map((child) => (
                                  <NavChildLink
                                    key={child.label}
                                    child={child}
                                    className="block text-sm text-neutralText hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-2.5"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  />
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-secondary hover:text-primary transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.3 },
                })}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

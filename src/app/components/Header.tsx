"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { navigation } from "../lib/content"
import { cn, getReducedMotion } from "../lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 font-poppins text-xl font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <img
              src="/images/final_logo.jpg"
              alt="Bhawana Capital Logo"
              width="40"
              height="40"
              className="h-10 w-auto object-contain"
            />
            <span>Bhawana Capital</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.main.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center space-x-1 text-sm font-medium text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          {...animationProps}
                          className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-secondary hover:bg-neutralBg hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
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
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, x: "100%" },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: "100%" },
                  transition: { duration: 0.3, ease: "easeInOut" },
                })}
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-background border-l shadow-xl z-50"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-poppins text-lg font-bold text-primary">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {navigation.main.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-left text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-2"
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                          aria-expanded={openDropdown === item.label}
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronDown
                            className={cn("h-4 w-4 transition-transform", openDropdown === item.label && "rotate-180")}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
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
                              <div className="pl-4 pt-2 space-y-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    className="block text-sm text-neutralText hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
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
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  )
}

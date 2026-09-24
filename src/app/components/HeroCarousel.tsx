"use client"

import { useState, useEffect, useCallback, type KeyboardEvent as ReactKeyboardEvent } from "react"
import { motion, AnimatePresence, easeOut } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import { hero } from "../lib/content"
import { cn, getReducedMotion, OPEN_POLICIES_EVENT } from "@/app/lib/utils"

const CTA_CLASSES = "transition-transform hover:scale-105 focus-visible:scale-105"
const TITLE_CLASSES = "font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight"
const DESCRIPTION_CLASSES = "text-lg md:text-xl text-neutralText max-w-lg"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPausedByUser, setIsPausedByUser] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocusWithin, setHasFocusWithin] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const slides = hero.slides

  const isAutoPlaying = !reducedMotion && !isPausedByUser && !isHovered && !hasFocusWithin

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    // Hold the slide while the mobile menu drawer is open over the page
    const interval = setInterval(() => {
      if (document.documentElement.dataset.menuOpen !== "true") nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Arrow keys only drive the carousel while focus is inside it.
  const handleKeyDown = (e: ReactKeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prevSlide()
    }
    if (e.key === "ArrowRight") {
      e.preventDefault()
      nextSlide()
    }
  }

  const slideVariants = {
    enter: { opacity: 0, y: reducedMotion ? 0 : 8 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reducedMotion ? 0 : -8 },
  }

  const transition = { duration: reducedMotion ? 0 : 0.4, ease: reducedMotion ? undefined : easeOut }

  return (
    <section
      className="relative bg-gradient-to-br from-neutralBg to-background py-12 md:py-20 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocusWithin(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHasFocusWithin(false)
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content: invisible copies of every slide share one grid cell with the live slide,
              so the column is always as tall as the longest slide and nothing shifts between slides. */}
          <div className="relative grid grid-cols-1">
            {slides.map((slide) => (
              <div key={slide.id} aria-hidden="true" className="invisible col-start-1 row-start-1 space-y-6 [overflow-wrap:anywhere]">
                <div className={TITLE_CLASSES}>{slide.title}</div>
                <p className={DESCRIPTION_CLASSES}>{slide.description}</p>
                {slide.ctas && (
                  <div className="flex flex-wrap gap-4 pt-4">
                    {slide.ctas.map((cta) => (
                      <span key={cta.label} className={buttonVariants({ size: "lg" })}>
                        {cta.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="col-start-1 row-start-1 space-y-6"
                role="group"
                aria-roledescription="slide"
                aria-label={`${currentSlide + 1} of ${slides.length}`}
              >
                {/* Always the page's only H1: the static HTML ships slide 1's title, and the page never loses its H1 as slides change */}
                <h1 className={TITLE_CLASSES}>{slides[currentSlide].title}</h1>
                <p className={DESCRIPTION_CLASSES}>{slides[currentSlide].description}</p>
                {slides[currentSlide].ctas && (
                  <div className="flex flex-wrap gap-4 pt-4">
                    {slides[currentSlide].ctas!.map((cta, index) =>
                      cta.action === "openPolicies" ? (
                        <Button
                          key={index}
                          type="button"
                          variant={cta.variant || "default"}
                          size="lg"
                          className={CTA_CLASSES}
                          onClick={() => window.dispatchEvent(new Event(OPEN_POLICIES_EVENT))}
                        >
                          {cta.label}
                        </Button>
                      ) : (
                        <Button
                          key={index}
                          variant={cta.variant || "default"}
                          size="lg"
                          asChild
                          className={CTA_CLASSES}
                        >
                          <a href={cta.href}>{cta.label}</a>
                        </Button>
                      ),
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Image */}
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="aspect-video rounded-2xl overflow-hidden"
              >
                <picture>
                  <source srcSet={`/images/slide-${currentSlide + 1}.webp`} type="image/webp" />
                  <img
                    src={`/images/slide-${currentSlide + 1}.jpg`}
                    alt=""
                    width={1440}
                    height={616}
                    fetchPriority={currentSlide === 0 ? "high" : "auto"}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        {/* Controls sit under the copy column on desktop so they line up with the headline */}
        <div className="flex items-center justify-center lg:justify-start mt-10 space-x-6">
          {/* Navigation Dots */}
          <div className="flex lg:-ml-1.5" aria-label="Carousel navigation" role="group">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-current={index === currentSlide ? "true" : undefined}
                aria-label={`Go to slide ${index + 1}`}
                className="group/dot flex h-11 items-center justify-center rounded-full px-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => goToSlide(index)}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    // The current slide reads by shape as well as colour: a pill, against round dots at 3:1+ contrast
                    "block h-3 rounded-full transition-all duration-150 ease-out",
                    index === currentSlide
                      ? "w-6 bg-primary"
                      : "w-3 bg-neutralText/70 group-hover/dot:bg-primary/70",
                  )}
                />
              </button>
            ))}
          </div>

          {/* Arrow + Pause Controls */}
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background border hover:bg-neutralBg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setIsPausedByUser((paused) => !paused)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-background border hover:bg-neutralBg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={isPausedByUser ? "Play slideshow" : "Pause slideshow"}
              >
                {isPausedByUser ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
            )}
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-background border hover:bg-neutralBg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Live Region for Screen Readers: silent while auto-rotating, announces user-driven changes */}
      <div className="sr-only" aria-live={isAutoPlaying ? "off" : "polite"} aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].title}
      </div>
    </section>
  )
}

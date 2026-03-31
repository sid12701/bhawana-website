"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, easeOut } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { hero } from "../lib/content"
import { cn, getReducedMotion } from "@/app/lib/utils"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const slides = hero.slides

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
    if (!isAutoPlaying || reducedMotion) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide, reducedMotion])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide()
      if (e.key === "ArrowRight") nextSlide()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  const slideVariants = {
    enter: { opacity: 0, y: reducedMotion ? 0 : 8 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: reducedMotion ? 0 : -8 },
  }

  const transition = { duration: reducedMotion ? 0 : 0.4, ease: reducedMotion ? undefined : easeOut }

  return (
    <section
      className="relative bg-gradient-to-br from-neutralBg to-background py-16 md:py-24 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="space-y-6"
              >
                <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-neutralText max-w-lg">{slides[currentSlide].description}</p>
                {slides[currentSlide].ctas && (
                  <div className="flex flex-wrap gap-4 pt-4">
                    {slides[currentSlide].ctas!.map((cta, index) => (
                      <Button
                        key={index}
                        variant={cta.variant || "default"}
                        size="lg"
                        asChild
                        className="transition-transform hover:scale-105 focus-visible:scale-105"
                      >
                        <a href={cta.href}>{cta.label}</a>
                      </Button>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="aspect-video rounded-2xl overflow-hidden"
              >
                <img
                  src={`/images/slide-${currentSlide + 1}.jpg`}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center mt-12 space-x-8">
          {/* Navigation Dots */}
          <div className="flex space-x-2" role="tablist" aria-label="Carousel navigation">
            {slides.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-120 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  index === currentSlide
                    ? "bg-primary scale-110"
                    : "bg-neutralDivider hover:bg-primary/50 hover:scale-110",
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-background border hover:bg-neutralBg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-background border hover:bg-neutralBg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].title}
      </div>
    </section>
  )
}

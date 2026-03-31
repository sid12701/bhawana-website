"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Header from "./components/Header"
import HeroCarousel from "./components/HeroCarousel"  
import AboutSection from "./components/AboutSection"
import ProductsSection from "./components/ProductsSection"
import DirectorsSection from "./components/DirectorsSection"
import BlogSection from "./components/BlogSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import { getReducedMotion } from "./lib/utils"

export default function HomePage() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const pageMotionProps = reducedMotion ? {} : { variants: pageVariants, initial: "hidden" as const, animate: "visible" as const }

  return (
    <motion.div {...pageMotionProps}>
      <Header />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ProductsSection />
        <DirectorsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  )
}

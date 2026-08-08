"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Header from "./Header"
import HeroCarousel from "./HeroCarousel"
import AboutSection from "./AboutSection"
import ProductsSection from "./ProductsSection"
import DirectorsSection from "./DirectorsSection"
import BlogSection from "./BlogSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import { getReducedMotion } from "../lib/utils"

export default function HomePageClient() {
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

  const pageMotionProps = reducedMotion
    ? {}
    : { variants: pageVariants, initial: "hidden" as const, animate: "visible" as const }

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

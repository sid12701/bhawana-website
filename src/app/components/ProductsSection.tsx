"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import SectionHeading from "./SectionHeading"
import { products } from "../lib/content"
import { getReducedMotion } from "../lib/utils"

export default function ProductsSection() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const cardVariants = {
    hover: {
      scale: 1.01,
      y: -4,
      transition: { duration: 0.16 },
    },
  }

  const cardMotionProps = reducedMotion ? {} : { variants: cardVariants, whileHover: "hover" as const }

  return (
    <section className="py-16 md:py-24 bg-neutralBg" id="products">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Loan Products"
          subtitle="Tailored financial solutions to meet your unique needs"
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div key={product.name} {...cardMotionProps} className="group">
              <Card className="h-full transition-shadow duration-160 ease-out hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                <CardHeader className="pb-4">
                  <CardTitle className="font-poppins text-xl text-secondary group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutralText">
                    {product.name === "Personal Loan"
                      ? "Quick and flexible personal loans with competitive interest rates and minimal documentation."
                      : "Get advance access to your salary with our convenient and transparent salary advance program."}
                  </p>

                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="group/btn w-full justify-between hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <a href={product.href}>
                        View Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

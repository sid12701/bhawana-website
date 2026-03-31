"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { Percent, TrendingUp, Shield, Calculator } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { getReducedMotion } from "../lib/utils"

const PAGE_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

const SECTION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function InterestRatePolicyContent() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const pageVariants: Variants | undefined = reducedMotion ? undefined : PAGE_VARIANTS

  const sectionVariants: Variants | undefined = reducedMotion ? undefined : SECTION_VARIANTS

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Percent className="h-12 w-12 text-primary mr-4" />
              <TrendingUp className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Interest Rate Policy
            </h1>
            <p className="text-lg md:text-xl text-neutralText mb-8">
              Transparent and fair interest rate determination in compliance with RBI guidelines
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
              <Shield className="h-4 w-4 mr-2" />
              RBI Compliant Policy
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Preamble */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-12">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6 flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-primary" />
                    Preamble
                  </h2>
                  <p className="text-lg text-neutralText leading-relaxed mb-6">
                    Reserve Bank of India through notification No. DNBS. 204 / CGM (ASR)-2009 dated January 2, 2009 and
                    vide its Guidelines on FPC for NBFCs DNBS.CC.PD.No.266/03.10.01/2011-12 dated March 26, 2012 have
                    directed all NBFCs to:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-neutralText leading-relaxed">
                        Communicate the annualised rate of interest to the borrower along with the approach for
                        gradation of risk and rationale for charging different rates of interest to different categories
                        of borrowers.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-neutralText leading-relaxed">
                        Make available the rates of interest and the approach for gradation of risks on the web-site of
                        the companies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rate of Interest */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6 flex items-center">
                    <Percent className="h-6 w-6 mr-3 text-primary" />
                    Rate of Interest
                  </h2>

                  <div className="space-y-6">
                    <p className="text-neutralText leading-relaxed">
                      The Company, at the time sanction of loan, intimates in writing the following with the borrower:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Loan amount",
                        "Rate of interest",
                        "Other fees including processing fee charged or to be charged by our partner",
                        "Loan amount sanctioned",
                        "Tenure of the Loan",
                        "Due dates of the monthly instalments",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-neutralBg rounded-lg">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-neutralText">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg">
                      <h3 className="font-poppins text-lg font-semibold text-secondary mb-3 flex items-center">
                        <Calculator className="h-5 w-5 mr-2" />
                        Interest Rate Calculation
                      </h3>
                      <p className="text-neutralText leading-relaxed mb-4">
                        The rate of interest is arrived at based on the following components:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Weighted average cost of funds",
                          "Average customer acquisition cost",
                          "Administrative and operational costs",
                          "Risk premium and profit margin",
                        ].map((component, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-neutralText">{component}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-l-4 border-accent pl-6">
                      <p className="text-neutralText leading-relaxed">
                        <strong>Important Note:</strong> The rates of interest are subject to change as the situation
                        warrants and are subject to the discretion of the management and/or changes to extraneous cost
                        factors which has a say in the setting up of the interest rate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Risk Gradation */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-3 text-primary" />
                    Approach for Risk Gradation
                  </h2>

                  <div className="space-y-6">
                    <p className="text-neutralText leading-relaxed">
                      Bhawana Capital Private Limited grants credit facilities only to those customers who have both the
                      intention and the ability to discharge their obligations. To execute a smooth underwriting process
                      the Company carries out different processes as per Know Your Customer guidelines and allocates
                      credit grade for each customer.
                    </p>

                    <div className="bg-neutralBg p-6 rounded-lg">
                      <h3 className="font-poppins text-lg font-semibold text-secondary mb-4">
                        Credit Assessment Focus Areas
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          "History of the Company or Borrower",
                          "Financial Leverage",
                          "Liquidity and Sources of Cash",
                          "Profitability of Operations",
                          "Collateral being provided",
                        ].map((area, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-neutralText text-sm">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4">
                      {[
                        {
                          title: "Character",
                          description: "Borrower's integrity and willingness to repay",
                          icon: "👤",
                        },
                        {
                          title: "Capacity",
                          description: "Ability to repay based on income and cash flow",
                          icon: "💪",
                        },
                        { title: "Capital", description: "Financial resources and net worth", icon: "💰" },
                        { title: "Collateral", description: "Security provided against the loan", icon: "🏠" },
                      ].map((item, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                          <CardContent className="p-6">
                            <div className="text-3xl mb-3">{item.icon}</div>
                            <h4 className="font-poppins font-semibold text-secondary mb-2">{item.title}</h4>
                            <p className="text-sm text-neutralText">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <p className="text-neutralText leading-relaxed">
                        The determination of a customer's credit grading is generally distinguished by the asset type
                        and its use and is mostly based on four general categories:{" "}
                        <strong>Character, Capacity, Capital and Collateral</strong>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information Card */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8 text-center">
                  <h3 className="font-poppins text-xl font-bold text-secondary mb-4">
                    Questions About Our Interest Rates?
                  </h3>
                  <p className="text-neutralText mb-6">
                    Our team is available to explain our interest rate policy and help you understand how rates are
                    determined for your specific situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:info@bhawanafinance.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Email Us
                    </a>
                    <a
                      href="tel:+91-124-6687879"
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Call Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

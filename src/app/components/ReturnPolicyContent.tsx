"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import {
  RotateCcw,
  Receipt,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react"
import { getReducedMotion } from "../lib/utils"
import { legal } from "../lib/content"

export default function ReturnPolicyContent() {
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => setReducedMotion(getReducedMotion()), [])

  const pageVariants: Variants | undefined = reducedMotion
    ? undefined
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } } }

  const sectionVariants: Variants | undefined = reducedMotion
    ? undefined
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <RotateCcw className="w-12 h-12 text-white mr-4" />
              <Receipt className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Return Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Clear, time-bound returns — including a 2-day window for mistaken applications
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Transparent & Customer-first
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Receipt className="w-6 h-6" />
                  About Bhawana Capital Private Limited
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  <strong>Bhawana Capital Private Limited</strong> (formerly Bhawana Securities and Financial Services
                  Limited) is a Non-Deposit Taking Non-Banking Finance Company registered with the Reserve Bank of India
                  (RBI). The Company is engaged in providing short-term loans and advances.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Return Policy & Highlights */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <RotateCcw className="w-6 h-6" />
                  Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Customers can return the loans within <strong>2 days</strong> from the date of disbursement, if applied
                  mistakenly. Bhawana provides its borrowers with the information needed to manage returns, including
                  details on any compensation and charges levied for each return, if applicable.
                </p>
                <p>
                  We also offer borrowers tools to track and manage returns, access loan data, and view detailed payment
                  tracking and order history.
                </p>

                <div className="mt-2 rounded-lg border bg-gray-50 p-4">
                  <h3 className="font-medium mb-2">Key highlights</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Return window: within 2 days from date of disbursement (for mistaken applications).</li>
                    <li>Charges: any compensation/charges will be communicated during the return process.</li>
                    <li>Tracking: manage returns and access loan/payment history via Bhawana’s digital tools.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* How to Initiate */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Clock className="w-6 h-6" />
                  How to initiate a return
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Contact our support team within 2 days of disbursement to request a return.</li>
                  <li>Keep your loan/account details handy for verification.</li>
                  <li>Our team will guide you on next steps, timelines, and any applicable compensation or charges.</li>
                </ol>
                <p className="mt-4 text-xs text-gray-500">
                  Note: All returns are subject to applicable terms and verification. Please contact support to understand
                  if any compensation or charges may apply to your case.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Need help */}
      <section className="pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Phone className="w-6 h-6" />
                  Need help?
                </CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border bg-white/80 p-4">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </h4>
                  <a
                    className="text-blue-700 hover:underline"
                    href={`mailto:${legal.email}`}
                    aria-label="Email support"
                  >
                    {legal.email}
                  </a>
                </div>
                <div className="rounded-lg border bg-white/80 p-4">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone
                  </h4>
                  <a className="text-blue-700 hover:underline" href={`tel:${legal.phone}`} aria-label="Call support">
                    {legal.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about returns?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Our team can walk you through eligibility, timelines, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href={`mailto:${legal.email}`}>Email Support</a>
              </Button>
              <Button className="bg-white text-blue-700 hover:bg-white/90" asChild>
                <Link href="/grievance-redressal">
                  View Grievance Redressal Policy <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Return Policy",
            description:
              "Bhawana Capital Return Policy, including a 2-day return window for loans mistakenly applied and steps to initiate a return.",
            url: "https://bhawanafinance.com/return-policy",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://bhawanafinance.com" },
                { "@type": "ListItem", position: 2, name: "Return Policy", item: "https://bhawanafinance.com/return-policy" },
              ],
            },
          }),
        }}
      />
    </motion.div>
  )
}

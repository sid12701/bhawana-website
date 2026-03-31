"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { Truck, Timer, ClipboardList, CheckCircle, Mail, Phone, ExternalLink } from "lucide-react"
import { getReducedMotion } from "../lib/utils"

export default function ShippingPolicyContent() {
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
              <Truck className="w-12 h-12 text-white mr-4" />
              <Timer className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipping Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Prompt and transparent timelines for loan disbursement
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Fast &amp; Transparent
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <ClipboardList className="w-6 h-6" />
                  About this Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  <strong>Bhawana Capital Private Limited</strong> ensures that loans are disbursed promptly within the
                  agreed timeframe and with full visibility for applicants.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Shipping (Disbursement) Policy */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Truck className="w-6 h-6" />
                  Disbursement Timelines & Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  The loans must be disbursed within <strong>2–3 days</strong> from the date of receiving the
                  application, or within the specific time agreed with you. You can check the status of your application
                  and days left for disbursement on our digital platform.
                </p>
                <div className="rounded-lg border bg-gray-50 p-4">
                  <h3 className="font-medium mb-2">Key points</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Standard disbursement window: 2–3 days from application receipt (subject to agreed terms).</li>
                    <li>Live status &amp; timeline tracking available via your dashboard.</li>
                    <li>Any applicable conditions or delays are communicated proactively.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Help / Contacts */}
      <section className="pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Phone className="w-6 h-6" />
                  Need help with status or timelines?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  View real-time updates on your dashboard. For any discrepancies, contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" className="border-blue-200 text-blue-700 bg-white">
                    <Link href="/grievance-redressal">Grievance Redressal</Link>
                  </Button>
                  <Button asChild variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                    <Link href="/#contact">Contact Support</Link>
                  </Button>
                </div>
                <p className="mt-6 text-xs text-gray-500">
                  Last updated: <time dateTime="2025-01-01">01 Jan 2025</time>
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about disbursement?</h2>
            <p className="text-lg text-blue-100 mb-8">
              We’ll help you understand timelines, status updates, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="mailto:info@bhawanafinance.com">
                  Email Support
                </a>
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
    </motion.div>
  )
}

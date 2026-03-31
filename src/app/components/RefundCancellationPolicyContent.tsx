"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import {
  RotateCcw,
  XOctagon,
  ClipboardList,
  AlertCircle,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
import { getReducedMotion } from "../lib/utils"

export default function RefundCancellationPolicyContent() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [todayISO, setTodayISO] = useState<string>("")
  const [todayDisplay, setTodayDisplay] = useState<string>("")

  useEffect(() => {
    setReducedMotion(getReducedMotion())
    const d = new Date()
    setTodayISO(d.toISOString().slice(0, 10))
    setTodayDisplay(d.toLocaleDateString())
  }, [])

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
              <XOctagon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund / Cancellation Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Smooth, hassle-free support when delays are beyond your control
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Customer-first & Transparent
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <ClipboardList className="w-6 h-6" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>
                  <strong>Bhawana Capital Private Limited</strong> values a smooth and hassle-free customer experience.
                  We ensure that our loan products are available for disbursement, but we understand that external
                  factors may cause delays.
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Last updated: <time dateTime={todayISO}>{todayDisplay}</time>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <RotateCcw className="w-6 h-6" />
                  Refund / Cancellation Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  In order to maintain a good customer experience, it is important for you to ensure that the loan
                  products listed on Bhawana’s website / LSP’s platform are available for disbursement. However, we
                  understand that there could be delays that are out of your control, leading to late disbursement. In
                  such cases, Bhawana will not charge any penalty, so you can continue to sell online without any
                  tension.
                </p>

                <div className="rounded-lg border bg-amber-50 p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-700 mt-0.5" />
                    <p className="text-sm text-amber-900">
                      <strong>Note:</strong> This policy is intended to support borrowers when delays are caused by
                      external factors. It does not waive obligations under your loan agreement. For questions about
                      your specific case, please contact support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Help & Related Links */}
      <section className="pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                    <Mail className="w-6 h-6" />
                    Need help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    For assistance regarding refunds or cancellations, reach out to our support team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="border-blue-200 text-blue-700 bg-white">
                      <a href="mailto:info@bhawanafinance.com" aria-label="Email support">
                        Email Support
                      </a>
                    </Button>
                    <Button asChild variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                      <a href="tel:01246687879" aria-label="Call support">
                        <Phone className="w-4 h-4 mr-2" />
                        0124-6687879
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                    <ExternalLink className="w-6 h-6" />
                    Related policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/return-policy">Return Policy</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/shipping-policy">Shipping Policy</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about refunds or cancellations?</h2>
            <p className="text-lg text-blue-100 mb-8">
              We’re here to clarify eligibility, timelines, and next steps.
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

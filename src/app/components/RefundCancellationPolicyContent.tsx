"use client"

import { useEffect, useState } from "react"
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
import Reveal from "./Reveal"
import { legal } from "../lib/content"

export default function RefundCancellationPolicyContent() {
  const [todayISO, setTodayISO] = useState<string>("")
  const [todayDisplay, setTodayDisplay] = useState<string>("")

  useEffect(() => {
    const d = new Date()
    setTodayISO(d.toISOString().slice(0, 10))
    setTodayDisplay(d.toLocaleDateString())
  }, [])

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 flex items-center justify-center md:mb-6">
              <RotateCcw className="h-10 w-10 md:h-12 md:w-12 text-primary mr-4" />
              <XOctagon className="h-10 w-10 md:h-12 md:w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">Refund / Cancellation Policy</h1>
            <p className="text-lg md:text-xl text-neutralText mb-6 md:mb-8">
              Smooth, hassle-free support when delays are beyond your control
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-secondary">
              <CheckCircle className="w-4 h-4 mr-2" />
              Customer-first & Transparent
            </div>
          </div>
        </div>
      </section>

      {/* About / Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <ClipboardList className="w-6 h-6" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed">
                <p>
                  <strong>Bhawana Capital Private Limited</strong> values a smooth and hassle-free customer experience.
                  We ensure that our loan products are available for disbursement, but we understand that external
                  factors may cause delays.
                </p>
                <p className="mt-4 text-sm text-neutralText">
                  Last updated: <time dateTime={todayISO}>{todayDisplay}</time>
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Policy Details */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <RotateCcw className="w-6 h-6" />
                  Refund / Cancellation Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed space-y-4">
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
          </Reveal>
        </div>
      </section>

      {/* Help & Related Links */}
      <section className="pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                    <Mail className="w-6 h-6" />
                    Need help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText leading-relaxed">
                  <p className="mb-4">
                    For assistance regarding refunds or cancellations, reach out to our support team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="outline" className="border-primary/15 text-primary bg-white">
                      <a href={`mailto:${legal.email}`}>
                        Email Support
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={`tel:${legal.phoneTel}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        {legal.phoneLocal}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader className="pb-3">
                  <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                    <ExternalLink className="w-6 h-6" />
                    Related policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText leading-relaxed">
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/return-policy/">Return Policy</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/shipping-policy/">Shipping Policy</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/privacy-policy/">Privacy Policy</Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-white">
                      <Link href="/terms-conditions/">Terms &amp; Conditions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about refunds or cancellations?</h2>
            <p className="text-lg text-white/80 mb-8">
              We’re here to clarify eligibility, timelines, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="inverse" asChild>
                <a href={`mailto:${legal.email}`}>
                  Email Support
                </a>
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/grievance-redressal-policy/">
                  View Grievance Redressal Policy <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

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
import Reveal from "./Reveal"
import { legal } from "../lib/content"

export default function ReturnPolicyContent() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 flex items-center justify-center md:mb-6">
              <RotateCcw className="h-10 w-10 md:h-12 md:w-12 text-primary mr-4" />
              <Receipt className="h-10 w-10 md:h-12 md:w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">Return Policy</h1>
            <p className="text-lg md:text-xl text-neutralText mb-6 md:mb-8">
              Clear, time-bound returns — including a 2-day window for mistaken applications
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-secondary">
              <CheckCircle className="w-4 h-4 mr-2" />
              Transparent & Customer-first
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <Receipt className="w-6 h-6" />
                  About Bhawana Capital Private Limited
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed">
                <p>
                  <strong>Bhawana Capital Private Limited</strong> (formerly Bhawana Securities and Financial Services
                  Limited) is a Non-Deposit Taking Non-Banking Finance Company registered with the Reserve Bank of India
                  (RBI). The Company is engaged in providing short-term loans and advances.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Return Policy & Highlights */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <RotateCcw className="w-6 h-6" />
                  Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed space-y-4">
                <p>
                  Customers can return the loans within <strong>2 days</strong> from the date of disbursement, if applied
                  mistakenly. Bhawana provides its borrowers with the information needed to manage returns, including
                  details on any compensation and charges levied for each return, if applicable.
                </p>
                <p>
                  We also offer borrowers tools to track and manage returns, access loan data, and view detailed payment
                  tracking and order history.
                </p>

                <div className="mt-2 rounded-lg border bg-neutralBg p-4">
                  <h3 className="font-medium mb-2">Key highlights</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Return window: within 2 days from date of disbursement (for mistaken applications).</li>
                    <li>Charges: any compensation/charges will be communicated during the return process.</li>
                    <li>Tracking: manage returns and access loan/payment history via Bhawana’s digital tools.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* How to Initiate */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <Clock className="w-6 h-6" />
                  How to initiate a return
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed">
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Contact our support team within 2 days of disbursement to request a return.</li>
                  <li>Keep your loan/account details handy for verification.</li>
                  <li>Our team will guide you on next steps, timelines, and any applicable compensation or charges.</li>
                </ol>
                <p className="mt-4 text-xs text-neutralText">
                  Note: All returns are subject to applicable terms and verification. Please contact support to understand
                  if any compensation or charges may apply to your case.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Need help */}
      <section className="pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <Phone className="w-6 h-6" />
                  Need help?
                </CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border bg-white/80 p-4">
                  <h3 className="font-medium mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </h3>
                  <a
                    className="inline-block py-1 text-primary underline-offset-2 transition-colors hover:text-secondary hover:underline"
                    href={`mailto:${legal.email}`}
                  >
                    {legal.email}
                  </a>
                </div>
                <div className="rounded-lg border bg-white/80 p-4">
                  <h3 className="font-medium mb-1 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone
                  </h3>
                  <a className="inline-block py-1 text-primary underline-offset-2 transition-colors hover:text-secondary hover:underline" href={`tel:${legal.phoneTel}`}>
                    {legal.phone}
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <Reveal className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about returns?</h2>
            <p className="text-lg text-white/80 mb-8">
              Our team can walk you through eligibility, timelines, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="inverse" asChild>
                <a href={`mailto:${legal.email}`}>Email Support</a>
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
    </div>
  )
}

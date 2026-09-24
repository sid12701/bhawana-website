import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { Truck, Timer, ClipboardList, CheckCircle, Mail, Phone, ExternalLink } from "lucide-react"
import { legal } from "../lib/content"

export default function ShippingPolicyContent() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 flex items-center justify-center md:mb-6">
              <Truck className="h-10 w-10 md:h-12 md:w-12 text-primary mr-4" />
              <Timer className="h-10 w-10 md:h-12 md:w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">Shipping Policy</h1>
            <p className="text-lg md:text-xl text-neutralText mb-6 md:mb-8">
              Prompt and transparent timelines for loan disbursement
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-secondary">
              <CheckCircle className="w-4 h-4 mr-2" />
              Fast &amp; Transparent
            </div>
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <ClipboardList className="w-6 h-6" />
                  About this Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed">
                <p>
                  <strong>Bhawana Capital Private Limited</strong> ensures that loans are disbursed promptly within the
                  agreed timeframe and with full visibility for applicants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping (Disbursement) Policy */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <Truck className="w-6 h-6" />
                  Disbursement Timelines & Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed space-y-4">
                <p>
                  The loans must be disbursed within <strong>2–3 days</strong> from the date of receiving the
                  application, or within the specific time agreed with you. You can check the status of your application
                  and days left for disbursement on our digital platform.
                </p>
                <div className="rounded-lg border bg-neutralBg p-4">
                  <h3 className="font-medium mb-2">Key points</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Standard disbursement window: 2–3 days from application receipt (subject to agreed terms).</li>
                    <li>Live status &amp; timeline tracking available via your dashboard.</li>
                    <li>Any applicable conditions or delays are communicated proactively.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help / Contacts */}
      <section className="pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle as="h2" className="flex items-center gap-3 text-primary text-xl">
                  <Phone className="w-6 h-6" />
                  Need help with status or timelines?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutralText leading-relaxed">
                <p className="mb-4">
                  View real-time updates on your dashboard. For any discrepancies, contact our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="outline" className="border-primary/15 text-primary bg-white">
                    <Link href="/grievance-redressal-policy/">Grievance Redressal</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/#contact">Contact Support</Link>
                  </Button>
                </div>
                <p className="mt-6 text-xs text-neutralText">
                  Last updated: <time dateTime="2025-01-01">01 Jan 2025</time>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about disbursement?</h2>
            <p className="text-lg text-white/80 mb-8">
              We’ll help you understand timelines, status updates, and next steps.
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
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import karmalife_logo from "../../../public/images/karmalife-logo.webp"
import {
  ExternalLink,
  Phone,
  MapPin,
  Globe,
  Smartphone,
  FileText,
  Shield,
  Users,
  Building,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { legal } from "../lib/content"

const partnerDetails = [
  { id: "A", label: "DLA", value: "KarmaLife" },
  { id: "B", label: "LSP - Company Name", value: "Onionlife Private Limited" },
  { id: "C", label: "GRO Name", value: "Lavita Shetty" },
  { id: "D", label: "Designation", value: "Grievance Redressal Officer (GRO)" },
  { id: "E", label: "Contact Number", value: legal.karmalifeGroContactNumber},
  {
    id: "F",
    label: "Address",
    value:
      "1500, First Floor, 19th Main Rd, Sector 1, HSR Layout, Bengaluru, Karnataka 560102",
  },
  { id: "G", label: "Website", value: "https://karmalife.ai/", isLink: true },
  {
    id: "H",
    label: "Google Play Store",
    value: "https://play.google.com/store/apps/details?id=in.onionlife.karmalife&hl=en_IN&pli=1",
    isLink: true,
    linkText: "Download App",
  },
  { id: "I", label: "Privacy Policy", value: "https://karmalife.ai/privacy-policy/", isLink: true },
  { id: "J", label: "Terms & Conditions", value: "https://karmalife.ai/terms-and-conditions/", isLink: true },
  { id: "K", label: "Grievance Redressal Policy", value: "https://karmalife.ai/grievances-redressal-policy/", isLink: true },
  { id: "L", label: "Products Offered", value: "https://karmalife.ai/our-solutions/", isLink: true },
  { id: "M", label: "Company Website", value: "https://karmalife.ai/", isLink: true },
  { id: "N", label: "RBI Sachet Portal", value: "https://sachet.rbi.org.in/", isLink: true },
]

const authorizedActivities = [
  "Assisting in marketing",
  "Assisting in sourcing customers",
  "Assisting in sourcing and collection of documents",
  "Assisting in background checking, pre-assessment & fraud assessment",
  "Assisting in performing Know Your Customer (KYC)",
  "Assisting in recovery and collection",
  "Assisting in providing customer support",
  "Assisting in resolving grievances",
]

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case "contact number":
      return <Phone className="w-4 h-4" />
    case "address":
      return <MapPin className="w-4 h-4" />
    case "website":
    case "company website":
      return <Globe className="w-4 h-4" />
    case "google play store":
      return <Smartphone className="w-4 h-4" />
    case "privacy policy":
    case "terms & conditions":
    case "grievance redressal policy":
      return <FileText className="w-4 h-4" />
    case "rbi sachet portal":
      return <Shield className="w-4 h-4" />
    default:
      return <ExternalLink className="w-4 h-4" />
  }
}

export function KarmalifeContent() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-secondary mr-4" />
              <Shield className="w-12 h-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">DSA/LSP Partnership</h1>
            <p className="text-lg md:text-xl text-neutralText mb-8">
              Our authorized Digital Lending Application partner
            </p>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-secondary">
              <CheckCircle className="w-4 h-4 mr-2" />
              RBI-Compliant Partnership
            </div>
          </div>
        </div>
      </section>

      {/* Title + Logo row */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                    Digital Lending Application – KarmaLife
                  </h2>
                  {/* Optional partner logo if placed in /public */}
                  <div className="relative h-8 w-[140px]">
                    <Image
                      src={karmalife_logo}
                      alt="KarmaLife logo"
                      className="object-contain mt-2"
                      height={90}
                      width={90}
                      priority={false}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Information */}
      <section>
        <div className="container mx-auto px-4 max-w-6xl">
          <div>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary text-xl">
                  <Building className="w-6 h-6" />
                  Partner Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-4">
                  {partnerDetails.map((detail) => (
                    <div
                      key={detail.id}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                        {detail.id}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          {getIcon(detail.label)}
                          <span className="font-semibold text-secondary">{detail.label}:</span>
                        </div>
                        {detail.isLink ? (
                          <a
                            href={detail.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block py-1 text-primary underline underline-offset-2 transition-colors hover:text-secondary break-all"
                          >
                            {"linkText" in detail && detail.linkText ? detail.linkText : detail.value}
                          </a>
                        ) : (
                          <span className="text-neutralText">{detail.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bhawana Nodal GRO for Digital Lending */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary text-xl">
                  <Shield className="w-6 h-6" />
                  Bhawana Capital — Digital Lending Grievance Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <p className="text-neutralText leading-relaxed">
                  {legal.nodalDigitalLendingGro.split(legal.phoneLocal)[0]}
                  <a
                    href={`tel:${legal.phoneTel}`}
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    {legal.phoneLocal}
                  </a>
                  {legal.nodalDigitalLendingGro.split(legal.phoneLocal)[1]}
                </p>
                <div className="mt-6 space-y-3 text-sm text-neutralText">
                  <p>
                    To report an unauthorised or suspicious digital lending app, use the{" "}
                    <a
                      href={legal.rbiSachetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 transition-colors hover:text-secondary"
                    >
                      RBI Sachet portal
                    </a>
                    .
                  </p>
                  <p>
                    To lodge a complaint with the RBI Ombudsman, use the{" "}
                    <a
                      href={legal.rbiCmsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 transition-colors hover:text-secondary"
                    >
                      RBI Complaint Management System
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authorized Activities (CTA band style) */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold">Activities Authorized by Bhawana Capital</h3>
              <p className="text-white/80 mt-3">
                Our partner is authorized to assist with the following services
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {authorizedActivities.map((activity, index) => (
                <div
                  key={activity}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg"
                >
                  <div className="w-8 h-8 shrink-0 bg-white rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-white">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">Need Support?</h2>
            <p className="text-lg text-neutralText mb-8">
              For any queries or grievances related to our digital lending services, you can contact our authorized
              partner&apos;s Grievance Redressal Officer.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <a
                    href={`tel:${legal.karmalifeGroPhoneTel}`}
                    className="inline-block py-1 text-primary hover:text-secondary font-semibold text-lg transition-colors"
                  >
                    {legal.karmalifeGroPhone}
                  </a>
                  <p className="text-neutralText mt-2"> Lavita Shetty - GRO</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">RBI Sachet Portal</h3>
                  <a
                    href={legal.rbiSachetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-1 text-primary hover:text-secondary font-semibold transition-colors"
                  >
                    File Complaint <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-neutralText mt-2">Official RBI Portal</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about our KarmaLife partnership?</h2>
            <p className="text-lg text-white/80 mb-8">
              We’re happy to clarify responsibilities, escalation paths, and how to get help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="inverse" asChild>
                <a href={`tel:${legal.karmalifeGroPhoneTel}`}>Call GRO: {legal.karmalifeGroPhone}</a>
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90" asChild>
                <a href={legal.rbiSachetUrl} target="_blank" rel="noopener noreferrer">
                  RBI Sachet Portal <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="inverse" asChild>
                <a href="/grievance-redressal-policy/">View Grievance Redressal Policy</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

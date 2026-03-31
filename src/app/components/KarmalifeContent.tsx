"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import karmalife_logo from "../../../public/images/karmalife.svg"
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
import { getReducedMotion } from "../lib/utils"

const partnerDetails = [
  { id: "A", label: "DLA", value: "KarmaLife" },
  { id: "B", label: "LSP - Company Name", value: "Onionlife Private Limited" },
  { id: "C", label: "GRO Name", value: "Lavita Shetty" },
  { id: "D", label: "Designation", value: "Grievance Redressal Officer (GRO)" },
  { id: "E", label: "Contact Number", value: "+91 88926 94935"},
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
      className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen"
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
              <Users className="w-12 h-12 text-white mr-4" />
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DSA/LSP Partnership</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Our authorized Digital Lending Application partner
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              RBI-Compliant Partnership
            </div>
          </motion.div>
        </div>
      </section>

      {/* Title + Logo row */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
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
          </motion.div>
        </div>
      </section>

      {/* Partner Information */}
      <section>
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Building className="w-6 h-6" />
                  Partner Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <div className="grid gap-4">
                  {partnerDetails.map((detail, index) => (
                    <motion.div
                      key={detail.id}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50/60 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-semibold text-sm">
                        {detail.id}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getIcon(detail.label)}
                          <span className="font-semibold text-gray-900">{detail.label}:</span>
                        </div>
                        {detail.isLink ? (
                          <a
                            href={detail.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 underline break-all transition-colors"
                          >
                            {"linkText" in detail && detail.linkText ? detail.linkText : detail.value}
                          </a>
                        ) : (
                          <span className="text-gray-700">{detail.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Authorized Activities (CTA band style) */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold">Activities Authorized by Bhawana Capital</h3>
              <p className="text-blue-100 mt-3">
                Our partner is authorized to assist with the following services
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {authorizedActivities.map((activity, index) => (
                <div
                  key={activity}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-white">{activity}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Need Support?</h2>
            <p className="text-lg text-gray-600 mb-8">
              For any queries or grievances related to our digital lending services, you can contact our authorized
              partner&apos;s Grievance Redressal Officer.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <a
                    href="tel:+919355598772"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors"
                  >
                    +91 9355598772
                  </a>
                  <p className="text-gray-600 mt-2"> Lavita Shetty - GRO</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">RBI Sachet Portal</h3>
                  <a
                    href="https://sachet.rbi.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    File Complaint <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-gray-600 mt-2">Official RBI Portal</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about our KarmaLife partnership?</h2>
            <p className="text-lg text-blue-100 mb-8">
              We’re happy to clarify responsibilities, escalation paths, and how to get help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white  hover:bg-white text-blue-600" asChild>
                <a href="tel:+919355598772">Call GRO: +91 9355598772</a>
              </Button>
              <Button className="bg-white text-blue-700 hover:bg-white/90" asChild>
                <a href="https://sachet.rbi.org.in/" target="_blank" rel="noopener noreferrer">
                  RBI Sachet Portal <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="border-white  hover:bg-white text-blue-600" asChild>
                <a href="/grievance-redressal-policy">View Grievance Redressal Policy</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

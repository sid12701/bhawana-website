"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import loanfront_logo from "../../../public/images/LF_logo.png"
import {
  ExternalLink,
  Phone,
  MapPin,
  Globe,
  Smartphone,
  FileText,
  Shield,
  Users,
  HelpCircle,
  Building,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { getReducedMotion } from "../lib/utils"

const partnerDetails = [
  { id: "A", label: "DLA", value: "LoanFront" },
  { id: "B", label: "LSP - Company Name", value: "Vaibhav Vyapaar Private Limited (VVPL)" },
  { id: "C", label: "GRO Name", value: "Satya Mallidi" },
  { id: "D", label: "Designation", value: "Grievance Redressal Officer (GRO)" },
  { id: "E", label: "Contact Number", value: "+91 6366828598" },
  {
    id: "F",
    label: "Address",
    value:
      "Second Floor, Envision Technology Center, 119, Road No. 3, Phase-1, Vijayanagar, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066",
  },
  { id: "G", label: "Website", value: "https://www.loanfront.in/", isLink: true },
  {
    id: "H",
    label: "Google Playstore",
    value: "https://play.google.com/store/apps/details?id=in.loanfront.android",
    isLink: true,
    linkText: "Download App",
  },
  { id: "I", label: "Privacy Policy", value: "https://www.loanfront.in/privacy-policy.html", isLink: true },
  { id: "J", label: "Terms & Conditions", value: "https://www.loanfront.in/terms-conditions.html", isLink: true },
  {
    id: "K",
    label: "Grievance Redressal Policy",
    value: "https://www.loanfront.in/GrievancePolicy.html",
    isLink: true,
  },
  { id: "L", label: "Products Offered", value: "https://www.loanfront.in/ourproduct.html", isLink: true },
  { id: "M", label: "Company Website", value: "https://www.vaibhav-vyapaar.com/", isLink: true },
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

const additionalResources = [
  {
    title: "Collection Agencies",
    description: "Details on Collection Agencies for loans originated via LoanFront",
    link: "https://loanfront.in/Partners_Collection.html",
    icon: <Building className="w-6 h-6" />,
  },
  {
    title: "FAQ Section",
    description: "Frequently Asked Questions about LoanFront services",
    link: "https://www.loanfront.in/faq.html",
    icon: <HelpCircle className="w-6 h-6" />,
  },
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
    case "google playstore":
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

export function LoanfrontLspContent() {
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

      {/* Termination Notice Banner */}
      <section className="py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 font-medium text-base md:text-lg">
                Please note that the Loan Service Provider (LSP) arrangement with Vaibhav Vyapaar Private Limited (LoanFront) has been terminated with effect from 26 March 2026. Bhawana Capital Private Limited is no longer originating or disbursing loans under this programme.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Title + Logo row (from PHP structure) */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Digital Lending Application – LoanFront
                  </h2>
                  {/* Optional partner logo if present in /public */}
                  <div className="relative h-8 w-[140px]">
                    <Image
                      src={loanfront_logo}
                      alt="LoanFront logo"
                      className="object-contain"
                      height={80}
                      width={80}
                      priority={false}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partner Information (lettered list) */}
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

      {/* Authorized Activities (blue→indigo CTA band style from your other pages) */}
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
              <p className="text-blue-100 mt-3">Our partner is authorized to assist with the following services</p>
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

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Additional Resources</h3>
              <p className="text-lg text-gray-600">More information and support resources</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {additionalResources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow border-0 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        {resource.icon}
                      </div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-900">{resource.title}</h4>
                      <p className="text-gray-600 mb-6">{resource.description}</p>
                      <Button asChild className="bg-blue-700 hover:bg-blue-800">
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          Learn More <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA (consistent with your other pages) */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about our LoanFront partnership?</h2>
            <p className="text-lg text-blue-100 mb-8">
              We’re happy to clarify responsibilities, escalation paths, and how to get help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="tel:+916366828598">Call GRO: +91 6366828598</a>
              </Button>
              <Button className="bg-white text-blue-700 hover:bg-white/90" asChild>
                <a href="https://sachet.rbi.org.in/" target="_blank" rel="noopener noreferrer">
                  RBI Sachet Portal <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="/grievance-redressal">View Grievance Redressal Policy</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

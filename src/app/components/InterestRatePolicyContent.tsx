"use client"

import { motion } from "framer-motion"
import { Calculator, Mail, Percent, Phone, Shield, TrendingUp } from "lucide-react"

import {
  interestRatePolicyPdfHref,
  interestRatePolicySections,
  type InterestRateBlock,
  type InterestRateSection,
} from "@/app/lib/interestRatePolicyData"
import { PolicyPdfSection } from "./PolicyPdfSection"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

function renderBlock(block: InterestRateBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-gray-700 leading-relaxed text-justify">
          {block.text}
        </p>
      )
    case "list":
      return (
        <ul key={index} className="list-disc list-outside space-y-2 pl-6">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-gray-700 leading-relaxed text-justify">
              {item}
            </li>
          ))}
        </ul>
      )
    case "table":
      return (
        <div key={index} className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-secondary"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-slate-100 last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 align-top text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

function PolicySectionCard({ section, index }: { section: InterestRateSection; index: number }) {
  const cardClasses = index % 2 === 0 ? "bg-white border-blue-100" : "bg-slate-50/80 border-slate-200"

  return (
    <Card className={`shadow-md ${cardClasses}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-blue-700 text-xl">
          {section.id === "version-control" ? (
            <Calculator className="w-6 h-6" />
          ) : section.id === "model" || section.id === "disclosure" ? (
            <Percent className="w-6 h-6" />
          ) : section.id === "gradation" ? (
            <TrendingUp className="w-6 h-6" />
          ) : (
            <Shield className="w-6 h-6" />
          )}
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{section.blocks.map(renderBlock)}</CardContent>
    </Card>
  )
}

export default function InterestRatePolicyContent() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Percent className="w-12 h-12 text-white mr-4" />
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Interest Rate Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Board-approved Interest Rate Policy covering the interest-rate model, risk
              gradation, charges, and borrower disclosures.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              RBI Compliant · Version 1.3
            </div>
          </motion.div>
        </div>
      </section>

      <PolicyPdfSection
        title="Interest Rate Policy (PDF)"
        description="Board-approved Interest Rate Policy. Download or view the official PDF copy below."
        pdfHref={interestRatePolicyPdfHref}
        fileName="interest-rate-policy.pdf"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {interestRatePolicySections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: Math.min(index * 0.05, 0.2) }}
                viewport={{ once: true }}
              >
                <PolicySectionCard section={section} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Questions About Our Interest Rates?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Our team is available to explain our interest rate policy and help you understand how
              rates are determined for your specific situation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Call Us</h3>
                  <a href="tel:01246687879" className="text-blue-200 hover:text-white font-semibold transition-colors">
                    0124-6687879
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Email Us</h3>
                  <a
                    href="mailto:info@bhawanafinance.com"
                    className="text-blue-200 hover:text-white font-semibold transition-colors"
                  >
                    info@bhawanafinance.com
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 bg-transparent"
                asChild
              >
                <a href="/fair-practice-code/">View Fair Practice Code</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

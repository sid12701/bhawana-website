"use client"

import { motion } from "framer-motion"
import { AlertTriangle, FileText, Phone, Mail, ExternalLink } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export function LspClosureLoanfrontContent() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      {/* Hero Section */}
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
              <AlertTriangle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Notice of LSP Agreement Closure — LoanFront (VVPL)
            </h1>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <FileText className="w-4 h-4 mr-2" />
              Public Notice
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notice Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  {/* Date of Publication */}
                  <div className="mb-8">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Date of Publication
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      31 March 2026
                    </p>
                  </div>

                  <hr className="border-gray-200 mb-8" />

                  {/* Notice Body */}
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-justify text-base md:text-lg">
                      Bhawana Capital Private Limited hereby informs its borrowers, stakeholders, and the public that the Business Associate / Loan Service Provider Agreement entered into with Vaibhav Vyapaar Private Limited (operating as LoanFront) has been terminated effective 26 March 2026.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-justify text-base md:text-lg">
                      All loan accounts originated under this programme have been duly transferred and all outstanding obligations have been settled in accordance with applicable RBI regulations.
                    </p>

                    <p className="text-gray-700 leading-relaxed text-justify text-base md:text-lg">
                      For any queries related to your loan account, please contact LoanFront directly.
                    </p>
                  </div>

                  <hr className="border-gray-200 mt-10 mb-8" />

                  {/* LoanFront Contact Details */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      LoanFront Contact Information
                    </h2>
                    <div className="bg-blue-50 rounded-lg p-6 space-y-3">
                      <p className="text-gray-700">
                        <span className="font-semibold">Company:</span> Vaibhav Vyapaar Private Limited (LoanFront)
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">GRO:</span> Satya Mallidi — Grievance Redressal Officer
                      </p>
                      <p className="text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold">Phone:</span>{" "}
                        <a
                          href="tel:+916366828598"
                          className="text-blue-700 hover:text-blue-900 underline transition-colors"
                        >
                          +91 6366828598
                        </a>
                      </p>
                      <p className="text-gray-700 flex items-start gap-2">
                        <ExternalLink className="w-4 h-4 text-blue-600 mt-1" />
                        <span>
                          <span className="font-semibold">Website:</span>{" "}
                          <a
                            href="https://www.loanfront.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 underline transition-colors"
                          >
                            www.loanfront.in
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              If you have any concerns regarding this notice, feel free to reach out to us.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-10">
              <Card className="shadow-lg hover:shadow-xl transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Call Us</h3>
                  <a
                    href="tel:01246687879"
                    className="text-blue-200 hover:text-white font-semibold transition-colors"
                  >
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

            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 bg-transparent"
              asChild
            >
              <a href="/grievance-redressal-policy">View Grievance Redressal Policy</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

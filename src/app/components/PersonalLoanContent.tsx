"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Smartphone, Shield, CreditCard, CheckCircle, Phone, Mail, User, Zap, TrendingUp } from "lucide-react"

export function PersonalLoanContent() {
  const keyFeatures = [
    {
      icon: Smartphone,
      title: "100% Digital Process",
      description: "Complete loan application process online with our Digital Application",
    },
    {
      icon: Shield,
      title: "RBI Regulated",
      description: "Fully compliant with RBI guidelines ensuring transparency and security",
    },
    {
      icon: CreditCard,
      title: "Flexible Repayment",
      description: "Multiple payment options including UPI, payment gateways, and more",
    },
  ]

  const digitalKycFeatures = [
    {
      icon: User,
      title: "Digital KYC Process",
      description: "Complete your KYC digitally with just a selfie, PAN card, and address proof",
    },
    {
      icon: TrendingUp,
      title: "Booster Options",
      description: "Enhance loan eligibility with bank statements, payslips, and employment letters",
    },
    {
      icon: Zap,
      title: "Digital Application",
      description: "Our partner’s mobile app helps you apply quickly and securely",
    },
  ]

  const loanSpecifications = [
    { specification: "Principal", details: "₹ 1,500 - ₹ 30,000" },
    { specification: "Tenure", details: "3 Months - 12 Months" },
    { specification: "Interest Rates (per annum)", details: "17.95% - 35.95%" },
    { specification: "Processing Fees", details: "1% - 7.5% (₹ 100 - ₹ 2,000 Max)" },
    { specification: "Life-Time Registration Fees", details: "₹ 100 to ₹ 750" },
    { specification: "Repayment Frequency", details: "Monthly" },
    { specification: "APR Range", details: "30% - 87%" },
  ]

  const complianceFeatures = [
    "No Hidden Charges - Full transparency in loan terms and fees",
    "Grievance Redressal Mechanism - Prompt resolution of customer issues",
    "Data Privacy and Security - Strict adherence to RBI data privacy guidelines",
  ]

  const loanPurposes = [
    "Medical emergencies or unforeseen expenses",
    "Funding a vacation or travel plans",
    "Purchasing daily necessities",
    "Meeting personal financial goals",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Personal Loans
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            100% Digital, Unsecured Personal Loans for All Your Financial Needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Products</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Bhawana Capital, a Non-Banking Financial Company (NBFC) regulated by the Reserve Bank of India (RBI),
              offers instant personal loans through a 100% digital process. Our product ensures a seamless experience
              with minimal documentation and quick disbursal, while adhering to all applicable regulatory guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Digital KYC Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {digitalKycFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Loans Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Personal Loans
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Bhawana Capital offers 100% unsecured personal loans tailored to meet your financial needs. Our
                  personal loans are designed to provide quick access to funds for a variety of purposes, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {loanPurposes.map((purpose, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{purpose}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Product Specifications
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800 border-b">
                          Specification
                        </th>
                        <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800 border-b">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanSpecifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="px-6 py-4 font-medium text-gray-700 border-b">{spec.specification}</td>
                          <td className="px-6 py-4 text-gray-600 border-b">{spec.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Note:</strong> The interest rate and processing fee for individuals are determined based on
                  the "Risk Profile" and the internal policies of our NBFC that considers parameters like credit score,
                  credit vintage, overdue amount, income source, number of active loans, number of EMIs delayed, etc.
                  Making timely EMI payments for all loans will help customers get the lowest interest rates and higher
                  credit amounts.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Transparency and Compliance */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Transparency and Compliance
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Shield className="w-10 h-10 text-green-600 mb-4" />
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">RBI Compliance Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bhawana Capital strictly complies with all RBI regulations concerning digital lending, including
                  mandatory disclosures, borrower privacy, and grievance redressal mechanisms. Loan approvals, terms,
                  and conditions are subject to verification of submitted information and documentation, in line with
                  our internal credit assessment policies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Apply for Your Personal Loan?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you need instant cash for unforeseen expenses or personal needs, Bhawana Capital is here to assist
            you with reliable and transparent lending solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Apply for Personal Loan
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="tel:0124-6687879" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="w-5 h-5" />
              0124-6687879
            </a>
            <a
              href="mailto:info@bhawanafinance.com"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              info@bhawanafinance.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

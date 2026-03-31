"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { FileText, CheckCircle, Phone, Mail, IndianRupee, Calendar, Zap } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function SalaryAdvanceContent() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Salary Advance
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quick cash when you need it most
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              className="mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Salary Advance Loan</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              </div>

              <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  Life is unpredictable, and sometimes you need quick access to funds before your next payday. Our
                  Salary Advance loans are designed to bridge that gap, providing you with instant financial relief when
                  unexpected expenses arise.
                </p>
                <p className="text-lg">
                  Whether it's a medical emergency, urgent home repairs, or any other pressing financial need, our
                  salary advance loans offer a convenient and hassle-free solution to get you the money you need, when
                  you need it.
                </p>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose Our Salary Advance?
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Zap className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">Instant Approval</h4>
                      <p className="text-gray-600">
                        Get approved within minutes with our streamlined digital process. No lengthy paperwork or
                        waiting periods.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IndianRupee className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">Flexible Amounts</h4>
                      <p className="text-gray-600">
                        Borrow anywhere from ₹5,000 to ₹50,000 based on your salary and repayment capacity.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">Short Tenure</h4>
                      <p className="text-gray-600">
                        Flexible repayment terms from 7 to 90 days, designed to align with your next salary cycle.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Loan Details */}
            <motion.div
              className="mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Loan Details</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Loan Amount</h4>
                        <p className="text-gray-600">₹5,000 to ₹50,000</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tenure</h4>
                        <p className="text-gray-600">7 to 90 days</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Processing Time</h4>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Interest Rate</h4>
                        <p className="text-gray-600">Competitive rates as per RBI guidelines</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Processing Fee</h4>
                        <p className="text-gray-600">Minimal processing charges</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Prepayment</h4>
                        <p className="text-gray-600">No prepayment penalties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Eligibility Criteria */}
            <motion.div
              className="mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Eligibility Criteria</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Basic Requirements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">Age: 21 to 60 years</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">Minimum salary: ₹15,000 per month</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">Employment: Minimum 6 months in current job</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">Indian resident with valid documents</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Required Documents</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Aadhaar Card</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">PAN Card</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Salary Slips (Last 3 months)</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Bank Statements (Last 3 months)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Application Process */}
            <motion.div
              className="mb-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
                Simple Application Process
              </h3>

              <div className="grid md:grid-cols-4 gap-8">
                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Apply Online</h4>
                  <p className="text-gray-600 text-sm">Fill out our simple online application form</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Upload Documents</h4>
                  <p className="text-gray-600 text-sm">Submit required documents digitally</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Quick Verification</h4>
                  <p className="text-gray-600 text-sm">Our team verifies your application instantly</p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Get Funds</h4>
                  <p className="text-gray-600 text-sm">Money transferred to your account within 24 hours</p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Quick Cash? Apply Now!</h3>
              <p className="text-xl mb-8 opacity-90">
                Get your salary advance in just 24 hours with minimal documentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-blue-600">
                  Apply for Salary Advance
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +91-124-6687879
                </Button>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="mt-16 bg-gray-100 rounded-lg p-8"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Need Help? Contact Us</h3>

              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">+91-124-6687879</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-600">info@bhawanafinance.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

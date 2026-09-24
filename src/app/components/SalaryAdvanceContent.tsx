import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { FileText, CheckCircle, Phone, Mail, IndianRupee, Calendar, Zap } from "lucide-react"
import { legal } from "../lib/content"
import Reveal from "./Reveal"

export function SalaryAdvanceContent() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Salary Advance
          </h1>
          <p className="text-lg md:text-xl text-neutralText mb-8">
            Quick cash when you need it most
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-neutralBg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <Reveal className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Salary Advance Loan</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              </div>

              <div className="max-w-4xl mx-auto text-neutralText leading-relaxed">
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
            </Reveal>

            {/* Key Features */}
            <Reveal className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
                Why Choose Our Salary Advance?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Card className="h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">Instant Approval</h3>
                      <p className="text-neutralText">
                        Get approved within minutes with our streamlined digital process. No lengthy paperwork or
                        waiting periods.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IndianRupee className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">Flexible Amounts</h3>
                      <p className="text-neutralText">
                        Borrow anywhere from ₹5,000 to ₹50,000 based on your salary and repayment capacity.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">Short Tenure</h3>
                      <p className="text-neutralText">
                        Flexible repayment terms from 7 to 90 days, designed to align with your next salary cycle.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Reveal>

            {/* Loan Details */}
            <Reveal className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Loan Details</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">Loan Amount</h3>
                        <p className="text-neutralText">₹5,000 to ₹50,000</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">Tenure</h3>
                        <p className="text-neutralText">7 to 90 days</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">Processing Time</h3>
                        <p className="text-neutralText">Within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">Interest Rate</h3>
                        <p className="text-neutralText">Competitive rates as per RBI guidelines</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">Processing Fee</h3>
                        <p className="text-neutralText">Minimal processing charges</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">Prepayment</h3>
                        <p className="text-neutralText">No prepayment penalties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Eligibility Criteria */}
            <Reveal className="mb-16">
              <div className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Eligibility Criteria</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-secondary mb-4">Basic Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">Age: 21 to 60 years</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">Minimum salary: ₹15,000 per month</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">Employment: Minimum 6 months in current job</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">Indian resident with valid documents</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-secondary mb-4">Required Documents</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">Aadhaar Card</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">PAN Card</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">Salary Slips (Last 3 months)</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-neutralText">Bank Statements (Last 3 months)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Application Process */}
            <Reveal className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
                Simple Application Process
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Apply Online</h3>
                  <p className="text-neutralText text-sm">Fill out our simple online application form</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Upload Documents</h3>
                  <p className="text-neutralText text-sm">Submit required documents digitally</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Quick Verification</h3>
                  <p className="text-neutralText text-sm">Our team verifies your application instantly</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Get Funds</h3>
                  <p className="text-neutralText text-sm">Money transferred to your account within 24 hours</p>
                </div>
              </div>
            </Reveal>

            {/* CTA Section */}
            <Reveal className="text-center bg-primary text-white rounded-lg p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Quick Cash? Apply Now!</h2>
              <p className="text-xl mb-8 opacity-90">
                Get your salary advance in just 24 hours with minimal documentation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <a href={legal.karmalifeAppUrl} target="_blank" rel="noopener noreferrer">
                    Apply for Salary Advance
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="inverse"
                  asChild
                >
                  <a href={`tel:${legal.phoneTel}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call: {legal.phone}
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Contact Information */}
            <Reveal className="mt-16 bg-neutralBg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center text-secondary mb-8">Need Help? Contact Us</h2>

              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div className="flex items-center justify-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-neutralText">{legal.phone}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-neutralText">{legal.email}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}

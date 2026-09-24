import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Smartphone, Shield, CreditCard, CheckCircle, Phone, Mail, User, Zap, TrendingUp } from "lucide-react"
import { legal } from "../lib/content"
import Reveal from "./Reveal"

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
    { specification: "Interest Rates (per annum)", details: "17.95% – 36.00%" },
    { specification: "Processing Fees", details: "Up to 8% of loan amount (plus GST), as per KFS" },
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Personal Loans
          </h1>
          <p className="text-lg md:text-xl text-neutralText mb-8 max-w-3xl mx-auto">
            100% Digital, Unsecured Personal Loans for All Your Financial Needs
          </p>
          <div>
            <Button size="lg" className="text-lg" asChild>
              <a href={legal.karmalifeAppUrl} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Products</h2>
            <p className="text-lg text-neutralText leading-relaxed">
              Bhawana Capital, a Non-Banking Financial Company (NBFC) regulated by the Reserve Bank of India (RBI),
              offers instant personal loans through a 100% digital process. Our product ensures a seamless experience
              with minimal documentation and quick disbursal, while adhering to all applicable regulatory guidelines.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Key Features */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
          >
            Key Features
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {keyFeatures.map((feature, index) => (
              <Reveal key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
                    <p className="text-neutralText">{feature.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Digital KYC Features: same card style as Key Features above so the two grids read as one system */}
          <div className="grid md:grid-cols-3 gap-8">
            {digitalKycFeatures.map((feature, index) => (
              <Reveal key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
                    <p className="text-neutralText">{feature.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Loans Section */}
      <section className="py-16 bg-neutralBg">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
          >
            Personal Loans
          </Reveal>

          <Reveal>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-neutralText leading-relaxed mb-6">
                  Bhawana Capital offers 100% unsecured personal loans tailored to meet your financial needs. Our
                  personal loans are designed to provide quick access to funds for a variety of purposes, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {loanPurposes.map((purpose, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-neutralText">{purpose}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
          >
            Product Specifications
          </Reveal>

          <Reveal>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="px-6 py-4 text-left text-lg font-semibold text-secondary border-b">
                          Specification
                        </th>
                        <th className="px-6 py-4 text-left text-lg font-semibold text-secondary border-b">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loanSpecifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-neutralBg" : "bg-white"}>
                          <td className="px-6 py-4 font-medium text-neutralText border-b">{spec.specification}</td>
                          <td className="px-6 py-4 text-neutralText border-b">{spec.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal
            delay={0.2}
            className="mt-8"
          >
            <Card className="bg-primary/5 border-primary/15">
              <CardContent className="p-6">
                <p className="text-neutralText leading-relaxed">
                  <strong>Note:</strong> The interest rate and processing fee for individuals are determined based on
                  the "Risk Profile" and the internal policies of our NBFC that considers parameters like credit score,
                  credit vintage, overdue amount, income source, number of active loans, number of EMIs delayed, etc.
                  Making timely EMI payments for all loans will help customers get the lowest interest rates and higher
                  credit amounts.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Transparency and Compliance */}
      <section className="py-16 bg-neutralBg">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal
            as="h2"
            className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12"
          >
            Transparency and Compliance
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <Reveal key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Shield className="w-10 h-10 text-primary mb-4" />
                    <p className="text-neutralText leading-relaxed">{feature}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.4}
            className="mt-12 text-center"
          >
            <Card className="bg-primary/5 border-primary/15">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">RBI Compliance Commitment</h3>
                <p className="text-neutralText leading-relaxed">
                  Bhawana Capital strictly complies with all RBI regulations concerning digital lending, including
                  mandatory disclosures, borrower privacy, and grievance redressal mechanisms. Loan approvals, terms,
                  and conditions are subject to verification of submitted information and documentation, in line with
                  our internal credit assessment policies.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Reveal
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Apply for Your Personal Loan?
          </Reveal>
          <Reveal
            as="p"
            delay={0.2}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Whether you need instant cash for unforeseen expenses or personal needs, Bhawana Capital is here to assist
            you with reliable and transparent lending solutions.
          </Reveal>
          <Reveal
            delay={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg" asChild>
              <a href={legal.karmalifeAppUrl} target="_blank" rel="noopener noreferrer">
                Apply for Personal Loan
              </a>
            </Button>
            <Button
              size="lg"
              variant="inverse"
              className="text-lg"
              asChild
            >
              <a href={legal.karmalifePage}>Learn More</a>
            </Button>
          </Reveal>
          <Reveal
            delay={0.6}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
          >
            <a href={`tel:${legal.phoneTel}`} className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone className="w-5 h-5" />
              {legal.phoneLocal}
            </a>
            <a
              href={`mailto:${legal.email}`}
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {legal.email}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

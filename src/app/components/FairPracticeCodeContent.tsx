"use client"

import { motion } from "framer-motion"
import { Shield, FileText, Users, Scale, CheckCircle, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const sections = [
  {
    id: "1",
    title: "Introduction (FAIR PRACTICE CODE)",
    icon: <FileText className="w-6 h-6" />,
    content: [
      'Bhawana Capital Private Limited (formerly Bhawana Securities and Financial Services Limited) ("the Company") is a Non-Deposit Taking Non-Banking Finance Company registered with Reserve Bank of India ("RBI"). The Company is presently in the business of providing short term loans and advances',
      'The Company has put in place the Fair Practices Code ("FPC" or "Code") in conformity with the Guidelines on Fair Practices Code for NBFCs as contained in the Chapter V of Master Direction - Non-Banking Financial Company –Non-Systemically Important Non-Deposit taking Company (Reserve Bank) Directions, 2016 and has been duly approved by the Board of Directors. The FPC sets out the principles for fair practices, transparency & adequate disclosures while dealing with its customers.',
      "The commitments outlined in this FPC adopted by the Company are applicable under normal operating environment; however, under situations beyond the control of the Company, it may not be possible for us to fulfil the commitments made thereunder.",
      "This FPC applies to the all categories of product and services offered by the Company.",
    ],
  },
  {
    id: "2",
    title: "OBJECTIVE OF CODE",
    icon: <Shield className="w-6 h-6" />,
    intro: "The objectives of this FPC are following:",
    list: [
      "To promote good practices and ensure good practices in dealing with customers;",
      "To promote a fair relationship between the customer and Company;",
      "To ensure compliance with legal norms in matters relating to recovery of advances;",
      "To strengthen mechanisms for redressal of customer grievances;",
    ],
  },
  {
    id: "3",
    title: "KEY COMMITMENTS",
    icon: <Users className="w-6 h-6" />,
    intro: "The Company's key commitments to customers:",
    commitments: [
      {
        main: "Act fairly and reasonably in all their dealings with customers by:",
        sub: [
          "Meeting the commitments and standards specified in the Code, for the products and services which the Company offers and in the procedures and practices its staff follows;",
          "Making sure that Company's products and services meet relevant laws and regulations applicable to it;",
          "Company's dealings with customers will rest on ethical principles of integrity and transparency",
        ],
      },
      {
        main: "Help customers understand how company's product work by explaining their financial implications.",
      },
      {
        main: "Deal quickly and sympathetically with things that go wrong by:",
        sub: [
          "Correcting mistakes;",
          "Handling customer's complaints;",
          "Telling customers' how to take their complaint forward if they are still not satisfied",
        ],
      },
      {
        main: "Publicize the Code, put it on Company's website and have copies available for customer on request.",
      },
    ],
  },
]

const applicationProcessing = [
  "The Company offers, various financial products including instant personal loans through a 100% digital process.",
  "The Company shall convey all communications to the borrower in the in the English language. The company may also provide the borrower an option to choose a language as understood by the borrower. The borrower may intimate the company about its preferred language at the time of the loan application.",
  "Loan application forms of the Company shall shall provide all necessary information to the borrowers required in relation to the services offered by the company so that the borrower can make a meaningful comparison with the terms and conditions offered by other NBFCs and can make an informed decision.",
  "The loan application form shall indicate the documents required to be submitted / uploaded with the application form.",
  "The Company shall give an acknowledgment of receipt for all loan applications digitally, with no discrimination based on caste, creed, or religion. The Company shall endeavor to provide the timeframe within which loan applications shall be processed.",
  "Loan application complete in all respects shall be processed within a reasonable time frame. In case the proposal is not approved by the Company, the borrower is intimated accordingly about the rejection of the loan.",
]

const loanAppraisal = [
  "The Company will ensure that there is proper assessment of loan application made by borrowers. The assessment would be in line with Company's credit policies and procedures.",
  "The Company shall convey in writing to the borrower in the vernacular language or a language as understood by the borrower by means of sanction letter and/or sanction mail or otherwise (i.e on mobile and / or web-based platform), the amount of loan sanctioned along with the terms and conditions including annualised rate of interest and method of application thereof and keeps the acceptance of these terms and conditions by the borrower on its record.",
  'The Company shall mention the penal interest charged for late repayment in bold in any of the documents namely "loan agreement / transaction documents / sanction letter and/or mail communication sent for this purpose/ Mobile application/ Charges section on the Company & products\' websites". The Company shall make available information related to interest rates and other charges (late payment or otherwise) on the website also.',
  "The Company's digital platform and risk assessment model requires digital acceptance of all terms and conditions of the loan. It includes Digital signing or Aadhar based OTP authentication (if applicable) or Clickwrap or clickthrough acceptance on loan agreement &/or terms & conditions.",
  "The terms and conditions of the respective financial product of the Company shall be applicable for all borrowers without discrimination.",
]

const disbursementTerms = [
  "The Company gives notice in the English language or a language as understood by the borrower of any change in the terms and conditions including the disbursement schedule, interest rates, service charges, prepayment charges, etc. The changes shall only be made if the loan agreement executed between the company and the borrower permits such changes. Further, the said changes shall be effective only prospectively.",
  "Decision to recall / accelerate payment or performance under the agreement should be in consonance with the loan agreement.",
  "The borrower shall enter into an agreement with the Company by providing consent via click wrap / Digital signature / Electronic signature etc, to all standard and specific terms and conditions before seeking disbursement.",
  "The Company shall release all securities on repayment of all dues or on realization of the outstanding amount of the loan subject to any legitimate right or lien for any other claim they may have against the borrower. If such right of set-off is to be exercised, the borrower shall be given notice about the same with full particulars about the remaining claims and the conditions under which the Company is entitled to retain the securities until the relevant claim is settled/paid.",
]

const generalPractices = [
  "The Company will refrain from interference in the affairs of the borrower except for the purposes provided in the terms and conditions of the loan agreement or as consented by customer on the terms and conditions as part of onboarding & disbursement process on mobile applications (unless new information, not earlier disclosed by the borrower, has come to the notice of the Company).",
  "In case of receipt of request from the borrower for transfer of borrowal account, the consent or otherwise i.e. objection of the Company, if any, will be conveyed within 21 days from the date of receipt of request. Such transfer shall be as per transparent contractual terms in consonance with law.",
  "In the matter of recovery of loans, the Company will not resort to undue harassment viz. persistently bothering the borrowers at odd hours, use of muscle power for recovery of loans, etc. To avoid rude behaviour from the staff of the Company, we shall ensure trainings are provided on code of conduct to deal with the customers in an appropriate manner.",
  "The Company shall charge interest rate, processing fees or other charges in accordance with the Company's loan policy only.",
  "There shall be no discrimination in extending loans and other financial product to the physically / visually challenged applicants on ground of disability subject to the eligibility criteria as per Company's credit policy.",
]

const grievanceRedressal = [
  "The Company shall lay down the appropriate Grievance Redressal Mechanism within the organization. Such a mechanism should ensure that all disputes arising out of the decisions of Company's institutions' functionaries are heard and disposed off at least at the next higher level.",
  "The Board of Directors should also provide for periodical review of the compliance of the Fair Practices Code and the functioning of the Grievances Redressal Mechanism at various levels of management. A consolidated report of such reviews may be submitted to the Board at regular intervals, as may be prescribed by it.",
  "The Company shall also guide customer who wish to lodge a complaint and also provide guidance on what to do in case the Customer is unhappy with the outcome.",
]

const grievanceContactInfo = [
  "the name and contact details (Telephone / Mobile nos. as also email address) of the Grievance Redressal Officer and Nodal Officer, who can be approached for resolution of complaints against the Company",
  "if the complaint / dispute is not redressed within a period of one month, the customer may appeal to the General Manager of DoS of RBI, New Delhi.",
]

const interestRateModel = [
  "Interest rate model and other charges for each finance product category shall be adopted taking into account relevant factors such as cost of equity, cost of borrowed funds, margin, credit risk, opex cost, industry trend, risk associates with the approval of the Board.",
  "The rate of interest and the approach for gradation of risk and rationale for different rate of interest to different categories of borrowers shall be disclosed to the borrower or customer in the application and/or website and communicated explicitly in the loan sanction letter / communication.",
  "The Company would intimate the rate of interest to be charged from the borrower at the time of application/sanctioning of the loan.",
  "The Company shall make available information related to interest rates and other charges (including late payment or otherwise) and the approach of risk on its website also.",
  "The rate of interest should be annualised rate so as to make borrower aware of the exact rates that would be charged to the account.",
  "The Company would ensure that it will not unduly charge excessive interest rates to its borrowers. The interest rate for its customers/borrowers would be arrived at taking into account broad parameters such as the risk profile of the customers/borrowers, interest rate trends prevailing in the money market, cost of borrowings, primary and collateral security offered by customers/borrowers, structure of the deal, interest rate charged by competitors, and the historical credit track record of the customers/borrowers",
]

export function FairPracticeCodeContent() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-white mr-4" />
              <Scale className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fair Practice Code</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Our commitment to transparency, ethical practices, and customer protection
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              RBI Compliant & Board Approved
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                      {section.icon}
                      {section.id}. {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.content &&
                      section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed text-justify">
                          {paragraph}
                        </p>
                      ))}

                    {section.intro && <p className="text-gray-700 leading-relaxed font-medium">{section.intro}</p>}

                    {section.list && (
                      <ol className="list-decimal list-inside space-y-2 ml-4">
                        {section.list.map((item, lIndex) => (
                          <li key={lIndex} className="text-gray-700 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}

                    {section.commitments && (
                      <ol className="list-decimal list-inside space-y-4 ml-4">
                        {section.commitments.map((commitment, cIndex) => (
                          <li key={cIndex} className="text-gray-700 leading-relaxed">
                            {commitment.main}
                            {commitment.sub && (
                              <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                                {commitment.sub.map((subItem, sIndex) => (
                                  <li key={sIndex} className="text-gray-600">
                                    {subItem}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ol>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications for Loan & Their Processing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <FileText className="w-6 h-6" />
                  4. APPLICATIONS FOR LOAN & THEIR PROCESSING
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  {applicationProcessing.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-justify">
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Loan Appraisal and Terms & Conditions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Scale className="w-6 h-6" />
                  5. LOAN APPRAISAL AND TERMS & CONDITIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  {loanAppraisal.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-justify">
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Disbursement of Loans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <CheckCircle className="w-6 h-6" />
                  6. DISBURSEMENT OF LOANS INCLUDING CHANGES IN TERMS AND CONDITIONS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  {disbursementTerms.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-justify">
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* General Practices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Users className="w-6 h-6" />
                  7. GENERAL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  {generalPractices.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-justify">
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Grievance Redressal Mechanism */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Shield className="w-6 h-6" />
                  8. GRIEVANCE REDRESSAL MECHANISM
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  {grievanceRedressal.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-justify">
                      {item}
                    </li>
                  ))}
                  <li className="text-gray-700 leading-relaxed text-justify">
                    The following information / public notice shall be displayed prominently and also on website, for
                    the benefit of the customers, at all branches/ places of the Company, where business is transacted:
                    <ol className="list-decimal list-inside space-y-2 ml-6 mt-2">
                      {grievanceContactInfo.map((info, index) => (
                        <li key={index} className="text-gray-600">
                          {info}
                        </li>
                      ))}
                    </ol>
                  </li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> The public notice will serve the purpose of highlighting to the customers,
                    the Grievance Redressal Mechanism followed by the Company, together with details of the Grievance
                    Redressal Officer and Nodal Officer and of the DOS Office of the RBI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Interest Rate Model */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Scale className="w-6 h-6" />
                  9. INTEREST RATE MODEL AND OTHER CHARGES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-4 ml-4">
                  {interestRateModel.map((item, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-justify">
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <FileText className="w-6 h-6" />
                  10. REVIEW
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                  The Board of Director reserves the right to review the Fair Practice Code from time to time and to
                  carry out necessary changes, accordingly as and when required.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify">
                  The Company will abide by all guidelines, directive, instructions and advices of Reserve Bank of India
                  as will be in force from time to time. The content in this document shall be read in conjunction with
                  these guidelines, directives, instructions and advices. The Company will apply better practice so long
                  as such practice does not conflict with or violate Reserve Bank of India regulations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Questions About Our Fair Practice Code?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Our team is available to explain our fair practice commitments and address any concerns you may have.
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
                <a href="/grievance-redressal">View Grievance Redressal Policy</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

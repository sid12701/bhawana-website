"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import {
  Shield,
  IdCard,
  FileText,
  ListChecks,
  UserCheck,
  Building2,
  AlertCircle,
  Database,
  CheckCircle,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { getReducedMotion } from "../lib/utils"

type Definition = { term: string; definition: string }

export default function KycAmlPolicyContent() {
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => setReducedMotion(getReducedMotion()), [])

  const pageVariants: Variants | undefined = reducedMotion
    ? undefined
    : { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } } }

  const sectionVariants: Variants | undefined = reducedMotion
    ? undefined
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }

  const toc = [
    { id: "introduction", label: "1. Introduction (KYC & AML)", icon: <FileText className="h-4 w-4" /> },
    { id: "applicability", label: "2. Applicability", icon: <Shield className="h-4 w-4" /> },
    { id: "definitions", label: "3. Definitions", icon: <Database className="h-4 w-4" /> },
    { id: "elements", label: "4. Elements of this Policy", icon: <ListChecks className="h-4 w-4" /> },
    { id: "principal-officer", label: "5. Appointment of Principal Officer", icon: <UserCheck className="h-4 w-4" /> },
    { id: "fiu-reporting", label: "6. Reporting to FIU-IND", icon: <AlertCircle className="h-4 w-4" /> },
    { id: "designated-director", label: "7. Designated Director", icon: <Building2 className="h-4 w-4" /> },
    { id: "records", label: "8. Maintenance & Preservation of Records", icon: <Database className="h-4 w-4" /> },
    { id: "ckycr-fatca-crs", label: "9. CKYCR & FATCA/CRS", icon: <IdCard className="h-4 w-4" /> },
    { id: "ml-tf-risk", label: "10. ML/TF Risk Assessment", icon: <Shield className="h-4 w-4" /> },
    { id: "third-party-dd", label: "11. Reliance on Third-Party Due Diligence", icon: <UserCheck className="h-4 w-4" /> },
    { id: "cdd", label: "Customer Due Diligence (CDD) Procedure", icon: <IdCard className="h-4 w-4" /> },
  ]

  const definitions: Definition[] = [
    { term: "Aadhaar number", definition: "Shall have the meaning assigned to it in clause (a) of section 2 of the Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act, 2016 (18 of 2016)." },
    { term: "Authentication", definition: "In the context of Aadhaar authentication, means the process as defined under sub-section (c) of section 2 of the Aadhaar Act, 2016." },
    { term: "Customer", definition: "A person who is engaged in a financial transaction or activity with the Company and includes a person on whose behalf the person who is engaged in the transaction or activity, is acting." },
    { term: "Act and Rules", definition: "The Prevention of Money-Laundering Act, 2002 and the Prevention of Money-Laundering (Maintenance of Records) Rules, 2005, respectively, along with amendments." },
    { term: "Customer Due Diligence (CDD)", definition: "Identifying and verifying the customer and the beneficial owner." },
    { term: "Central KYC Records Registry (CKYCR)", definition: "An entity to receive, store, safeguard and retrieve the KYC records in digital form of a customer as defined under Rule 2(1)(aa) of the Rules." },
    { term: "Digital KYC", definition: "Capturing live photo of the customer and OVD or proof of possession of Aadhaar (where offline verification cannot be carried out), along with the latitude and longitude of the capture location by an authorized officer of the RE." },
    { term: "Digital Signature", definition: "Has the same meaning as assigned in clause (p) of subsection (1) of section (2) of the Information Technology Act, 2000 (21 of 2000)." },
    { term: "Equivalent e-document", definition: "An electronic equivalent of a document, issued by the issuing authority with its valid digital signature, including documents issued to the digital locker account of the customer." },
    { term: "Know Your Client (KYC) Identifier", definition: "The unique number or code assigned to a customer by the Central KYC Records Registry." },
    { term: "Officially Valid Document (OVD)", definition: "Passport, driving license, proof of possession of Aadhaar card, Voter ID, NREGA job card duly signed by a State Government officer, or NPR letter. Proof of Aadhaar may be submitted in such form as issued by UIDAI." },
    { term: "Digital Platform", definition: "Mobile app and/or web-based platform through which the Company provides personal loans and advances to its customers." },
    { term: "Principal Officer", definition: "An officer nominated by the Company responsible for furnishing information as per Rule 8 of the Rules." },
    { term: "Transaction", definition: "Includes purchase, sale, loan, pledge, gift, transfer, delivery or arrangement thereof; opening accounts; deposits, withdrawals, transfers; safe deposit services; fiduciary relationships; payments made/received; or forming a legal person or arrangement." },
    { term: "Video based Customer Identification Process (V-CIP)", definition: "A consent-based, real-time audio-visual interaction by a Company official to obtain identification documents for CDD and verify their veracity, treated as face-to-face for this policy." },
  ]

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <IdCard className="w-12 h-12 text-white mr-4" />
              <Shield className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KYC & AML Policy</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              RBI-aligned Know Your Customer & Anti-Money Laundering framework
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Board Approved & Regulatory Compliant
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Note */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-cyan-50/80 backdrop-blur-sm">
              <CardContent className="p-5">
                <p className="text-sm text-cyan-900">
                  This KYC & AML Policy is adopted in line with the RBI Master Direction — Know Your Customer (KYC) Direction, 2016 (as amended) and the Prevention of Money-Laundering Act, 2002 with applicable rules and amendments. It applies across all products and business verticals of Bhawana Capital Private Limited.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* TOC */}
      <section className="pb-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <ListChecks className="w-6 h-6" />
                  On this page
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid sm:grid-cols-2 gap-2">
                  {toc.map((t) => (
                    <a key={t.id} href={`#${t.id}`} className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <span className="opacity-80 group-hover:opacity-100">{t.icon}</span>
                      <span className="underline-offset-2 group-hover:underline">{t.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          {/* 1. Introduction */}
          <motion.div id="introduction" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <FileText className="w-6 h-6" />
                  1. Introduction (Know Your Customer and Anti-Money Laundering)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Reserve Bank of India has issued directions on Know Your Customer (KYC) norms and Anti-Money
                  Laundering (AML) standards and advised all NBFCs to implement a Board-approved framework on KYC and AML measures. Bhawana Capital Private Limited (“the Company” or “Bhawana”), being a regulated entity, complies with these directions.
                </p>
                <p>
                  This policy is adopted in compliance with the RBI Master Direction — Know Your Customer (KYC) Direction, 2016 (as amended), the Prevention of Money-Laundering Act, 2002 and the Prevention of Money-Laundering (Maintenance of Records) Rules, 2005 (as amended). Its objectives are to understand customers and their financial dealings, manage risks prudently, and prevent misuse of the Company for money-laundering or unlawful activities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 2. Applicability */}
          <motion.div id="applicability" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Shield className="w-6 h-6" />
                  2. Applicability
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                This KYC-AML Policy prevails over any contrary instruction across Company documents, processes, or
                circulars relating to KYC-AML. It applies to all existing and future products and verticals of the Company.
              </CardContent>
            </Card>
          </motion.div>

          {/* 3. Definitions */}
          <motion.div id="definitions" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Database className="w-6 h-6" />
                  3. Definitions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="space-y-3">
                  {definitions.map((d) => (
                    <li key={d.term} className="leading-relaxed">
                      <span className="font-medium">{d.term}:</span> {d.definition}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 4. Elements */}
          <motion.div id="elements" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <ListChecks className="w-6 h-6" />
                  4. Elements of this Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-gray-700 leading-relaxed">
                <p>The Company’s KYC-AML policy comprises four key elements:</p>
                <ul className="list-disc list-inside">
                  <li>Customer Acceptance Policy</li>
                  <li>Customer Identification Procedure</li>
                  <li>Monitoring of Transactions</li>
                  <li>Risk Management</li>
                </ul>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">A. Customer Acceptance Policy</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No account opening or disbursal in anonymous, fictitious, or benami names.</li>
                    <li>
                      Customers are accepted only after successful CDD; if CDD cannot be applied due to non-cooperation or
                      unreliable documents/information, the account will not be opened.
                    </li>
                    <li>No transaction or account-based relationship is undertaken without following CDD procedures.</li>
                    <li>
                      Mandatory KYC information is sought at onboarding and during periodic updates; optional information is obtained with explicit customer consent after account opening.
                    </li>
                    <li>
                      Clear stipulations when a customer acts on behalf of another person/entity (e.g., mandate holder or fiduciary capacity).
                    </li>
                    <li>Systems to ensure the customer’s identity does not match names in sanctions lists circulated by RBI.</li>
                  </ul>
                  <p>These safeguards must not cause harassment to genuine customers nor unduly restrict access to services, especially for financially or socially disadvantaged segments.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">B. Customer Identification Procedure</h3>
                  <p>
                    Customer identification entails CDD using reliable, independent source documents, data, or information to verify identity and understand the intended nature of the relationship. The Company should be able to demonstrate due diligence to competent authorities based on the customer’s risk profile.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Indicative documents/information for identification are specified in the KYC Documentation Policy (Annexure-I).</li>
                    <li>Identification occurs at account opening, during doubts about authenticity/adequacy of data, and while carrying out financial transactions.</li>
                    <li>
                      During online application, additional proofs are not required if the submitted proof covers both identity and address. If permanent and current addresses differ, a declaration for correspondence address is obtained; during physical KYC (for thresholds), current address proof is required.
                    </li>
                    <li>Each customer is allotted a Unique Customer Identification Code (UCIC) at onboarding.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">C. Monitoring of Transactions</h3>
                  <p>
                    Ongoing monitoring is essential to identify activity outside normal patterns, with enhanced focus on complex or unusually large transactions without apparent economic or lawful purpose. The extent of monitoring depends on risk sensitivity.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Thresholds may be prescribed; transactions exceeding thresholds attract attention.</li>
                    <li>High cash activity inconsistent with customer profile or very high turnover may indicate layering or placement concerns.</li>
                    <li>High-risk accounts undergo intensified monitoring with periodic risk categorization reviews.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">D. Risk Management</h3>
                  <p>
                    Customers are profiled via a system-driven, consent-based model using inputs from multiple sources to categorize risk as Low, Medium, or High. Profiling considers credit appraisal, background, activity, location, origin, sources of funds, repayment history, and other factors. Profiles are updated from time to time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 5. Principal Officer */}
          <motion.div id="principal-officer" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <UserCheck className="w-6 h-6" />
                  5. Appointment of Principal Officer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                The Company designates a Principal Officer (PO) responsible for monitoring and reporting transactions and sharing information under the Act. The PO liaises with enforcement agencies, NBFCs, and other institutions engaged in AML/CFT efforts. Details of the PO (name, designation, address) are communicated to FIU-IND and/or RBI.
              </CardContent>
            </Card>
          </motion.div>

          {/* 6. FIU Reporting */}
          <motion.div id="fiu-reporting" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <AlertCircle className="w-6 h-6" />
                  6. Reporting to Financial Intelligence Unit-India (FIU-IND)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  As required under Section 12 of the Act read with Rule 3 of the Rules, the Company reports cash and suspicious transactions to the Director, FIU-IND. If the PO believes related transactions are structured below thresholds to evade reporting, such information is also furnished within prescribed timelines.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Address: Director, FIU-IND, Financial Intelligence Unit-India, 6th Floor, Hotel Samrat, Chanakyapuri, New Delhi-110021.</li>
                  <li>Copies of furnished information are retained by the PO for records.</li>
                  <li>Reports under Rule 3(1)(A), (B), (BA) are submitted monthly by the 15th of the succeeding month.</li>
                  <li>Reports under Rule 3(1)(D) are furnished promptly, not later than seven working days from occurrence.</li>
                  <li>Strict confidentiality regarding reporting of suspicious transactions is maintained.</li>
                  <li>Each day of delay in reporting or rectification constitutes a separate violation (Rule 8). NIL reports are not required where no cash/suspicious transactions occur in a period.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 7. Designated Director */}
          <motion.div id="designated-director" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Building2 className="w-6 h-6" />
                  7. Appointment of Designated Director
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                The Board nominates a Designated Director (senior management or equivalent) responsible for ensuring
                compliance with obligations under the Act and Rules. The Principal Officer cannot be the Designated Director. Details are communicated to FIU-IND.
              </CardContent>
            </Card>
          </motion.div>

          {/* 8. Records */}
          <motion.div id="records" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Database className="w-6 h-6" />
                  8. Maintenance and Preservation of Records
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>Under Section 12 of PMLA, the Company maintains:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Transaction records under Rule 3 for five years from the date of transaction.</li>
                  <li>Identity and address records of all clients for five years after the relationship ends or account closure, whichever is later.</li>
                  <li>Other records for at least five years from the record date.</li>
                  <li>Destruction of records is controlled via departmental registers under custody of senior management, capturing approvals for destruction.</li>
                </ul>
                <p>Records are maintained in a manner (hard/soft) enabling easy retrieval when requested by competent authorities. The Company maintains identity records and transaction records in hard or soft format.</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 9. CKYCR / FATCA / CRS */}
          <motion.div id="ckycr-fatca-crs" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <IdCard className="w-6 h-6" />
                  9. CKYCR and Reporting under FATCA/CRS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Compliance with GoI notification (July 7, 2015) and RBI circular RBI/2015-16/251 is ensured.</li>
                  <li>KYC data for new individual accounts (w.e.f. Nov 1, 2016) is uploaded to CERSAI/CKYCR as per Rules.</li>
                  <li>Existing clients’ KYC data is kept ready in RBI-prescribed digital templates; forms may be revised to capture required data.</li>
                  <li>FATCA and CRS reporting requirements are complied with as advised by RBI and GoI.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 10. ML/TF Risk */}
          <motion.div id="ml-tf-risk" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <Shield className="w-6 h-6" />
                  10. Money Laundering and Terrorist Financing Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Annual ML/TF risk assessment is conducted, documented, and presented to the Board.</li>
                  <li>A Risk-Based Approach (RBA) guides mitigation and management with Board-approved policies, controls, and procedures.</li>
                  <li>Implementation of controls is monitored and enhanced as necessary.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 11. Third-party DD */}
          <motion.div id="third-party-dd" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <UserCheck className="w-6 h-6" />
                  11. Reliance on Third-Party Due Diligence
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>For identifying and verifying customers at the commencement of an account-based relationship, the Company may rely on third-party CDD subject to:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Obtaining CDD records/info from the third party or CKYCR within 7 days.</li>
                  <li>Assurance that identification data and documentation will be made available without delay upon request.</li>
                  <li>Third party is supervised/monitored for CDD and record-keeping compliance.</li>
                  <li>Third party is not based in a high-risk jurisdiction.</li>
                  <li>The Company remains ultimately responsible for CDD and any enhanced due diligence.</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* CDD Procedure with Table */}
          <motion.div id="cdd" className="scroll-mt-24" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-600 text-xl">
                  <IdCard className="w-6 h-6" />
                  Customer Due Diligence (CDD) Procedure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>For an individual establishing an account-based relationship, the Company obtains:</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left">ID</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 align-top">(A)</td>
                        <td className="border border-gray-300 px-3 py-2 align-top">Proof of Identity</td>
                        <td className="border border-gray-300 px-3 py-2">
                          Scan/Image uploaded on the Digital Platform:
                          <ol className="mt-2 list-decimal pl-5">
                            <li>PAN card or the equivalent e-document thereof.</li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 align-top">(B)</td>
                        <td className="border border-gray-300 px-3 py-2 align-top">Proof of Address</td>
                        <td className="border border-gray-300 px-3 py-2">
                          Any one of the following (scan/image) uploaded on the Digital Platform:
                          <ol className="mt-2 list-decimal pl-5">
                            <li>Passport or equivalent e-document</li>
                            <li>Voter Identity Card or equivalent e-document</li>
                            <li>Masked UIDAI (Aadhaar) or equivalent e-document containing identity and address</li>
                          </ol>
                          <p className="mt-2">
                            For customers with cumulative loan amount exceeding INR 60,000 in a financial year (physical
                            face-to-face KYC threshold): If address on OVD does not match current residence, current address
                            proof is mandatory (e.g., rent agreement, electricity/telephone/post-paid mobile/piped gas/water bill, municipal tax receipt).
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 align-top">(C)</td>
                        <td className="border border-gray-300 px-3 py-2 align-top">Real-time selfie</td>
                        <td className="border border-gray-300 px-3 py-2">
                          One real-time selfie captured via the Company’s tech-based mobile application during loan application.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  If the aggregate borrowal amount of a single borrower (one or more tranches) exceeds INR 60,000 in a financial year, CDD is carried out using physical mode or V-CIP as per Annexure-1.
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>Mandatory KYC information is obtained at onboarding and during periodic updates as specified.</li>
                  <li>Optional/additional information may be collected post-onboarding with explicit customer consent.</li>
                  <li>
                    In line with KYC Directions 2016, Chapter VI, paragraph 24, repeat KYC documents are not requested; in some cases only a selfie is requested based on risk assessment.
                  </li>
                  <li>
                    Account opening via OTP-based e-KYC in non face-to-face mode may be accepted subject to:
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>Specific customer consent for OTP authentication.</li>
                      <li>For borrowal accounts, only term loans; aggregate sanction not exceeding INR 60,000 in a financial year.</li>
                      <li>Customer declaration that no other account will be opened using OTP-based KYC with the Company or any financial institution.</li>
                    </ul>
                  </li>
                  <li>
                    The Company may undertake live V-CIP after informed consent, adhering to stipulations including:
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>Recording video and capturing photograph; obtaining identification via Aadhaar offline verification; BCs may facilitate at customer end.</li>
                      <li>Clear image of PAN (or e-PAN) and verification from issuing authority.</li>
                      <li>Geotagging to ensure customer is physically present in India.</li>
                      <li>Face match between Aadhaar/PAN and live customer; details must match declarations.</li>
                      <li>Varied OTP/questions to ensure real-time interaction, not pre-recorded.</li>
                      <li>For Aadhaar XML/QR, generation date not older than 3 days at V-CIP.</li>
                      <li>Operationalization post concurrent audit to ensure process integrity.</li>
                      <li>End-to-end encrypted, real-time audio-visual interaction with liveness checks; security audits before rollout.</li>
                      <li>Interaction triggered from Company domain; operated by trained officials; preserve activity logs and official credentials.</li>
                      <li>Secure storage of video with date/time stamp; use of AI/face matching may assist but responsibility remains with the Company.</li>
                      <li>Aadhaar number is redacted/blackout as per Section 16; BCs only facilitate at customer end.</li>
                    </ul>
                  </li>
                  <li>Accounts opened through OTP-based e-KYC must be flagged as pending CDD on CKYCR; status updated after completion.</li>
                  <li>
                    The Company may accept e-Aadhaar as OVD, including printing e-Aadhaar at a branch/office from UIDAI portal or adopting e-KYC, and confirming via simple authentication service of UIDAI as applicable.
                  </li>
                  <li>
                    Under Rule 9 of the PML Rules, at account commencement the Company identifies and verifies clients and obtains purpose/intended nature of business; in other cases, identity is verified when:
                    <ul className="mt-2 list-disc pl-6 space-y-1">
                      <li>A transaction equals/exceeds INR 50,000 (single or connected series), or</li>
                      <li>Any international money transfer operation is performed.</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <p className="text-xs text-gray-500">
                  Note: This page provides a summarized presentation of the Company&apos;s KYC & AML Policy. In the
                  event of any conflict, the Board-approved policy and applicable regulations shall prevail.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions about our KYC & AML Policy?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Our team can explain the framework and how it applies to your account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="mailto:info@bhawanafinance.com">Email Compliance Team</a>
              </Button>
              <Button className="bg-white text-blue-700 hover:bg-white/90" asChild>
                <Link href="/grievance-redressal">
                  View Grievance Redressal Policy <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

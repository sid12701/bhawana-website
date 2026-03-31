"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { FileText, Shield, Scale, AlertCircle, CheckCircle, Smartphone, Globe, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { getReducedMotion } from "../lib/utils"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TermsAndConditionsContent() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setReducedMotion(getReducedMotion())
  }, [])

  const pageVariants: Variants | undefined = reducedMotion
    ? undefined
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }

  const sectionVariants: Variants | undefined = reducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, ease: "easeOut" },
        },
      }

  return (
    <>
      <Header />
      <motion.div variants={pageVariants} initial="hidden" animate="visible">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-12 w-12 text-primary mr-4" />
              <Shield className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg md:text-xl text-neutralText">
              Please read these Terms carefully before using our website, apps, and digital services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Introduction */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-secondary">
                    <FileText className="h-6 w-6 text-primary" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-neutralText leading-relaxed">
                  <p>
                    These Website Standard Terms and Conditions (these “Terms”) govern the use of this website,
                    including all pages within this website (collectively, the “Website”). By using this Website, you
                    expressly accept these Terms in full. Do not use this Website if you have any objections to any of
                    these Terms. This Website is meant for information and financial transactions and may require
                    entering into legal contracts to digitally sign transactions and therefore is not for use by minors
                    (those under 18 years of age).
                  </p>
                  <p>
                    These Terms apply to your use of the software, website, smartphone applications, or other electronic
                    means (the “Platform”). This electronic record is published under the Information Technology Act,
                    2000, and the Information Technology (Intermediaries Guidelines) Rules, 2011.
                  </p>
                  <p>
                    We may modify these Terms at our sole discretion without prior notice. Please review them
                    periodically. Continued use of the Website means you accept the updates. Subject to your compliance,
                    we grant a personal, non-exclusive, non-transferable, limited privilege to access and use the
                    Website.
                  </p>
                  <div className="bg-neutralBg p-4 rounded-lg">
                    <p className="text-sm">
                      Refunds: If we confirm your refund request (e.g., excess EMI collected and no payment delays
                      beyond 30 days), we may seek your bank details to process the refund. Processing typically takes
                      48–72 working hours from receipt of all information. For queries, email{" "}
                      <a href="mailto:info@bhawanafinance.com" className="text-primary underline">
                        info@bhawanafinance.com
                      </a>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 1. Ownership */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">1. Ownership</CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText leading-relaxed">
                  Bhawana Capital Private Limited, a company incorporated under the laws of India and having its
                  registered office at F-6, 711, 7th Floor, Pearls Omaxe Netaji Subhash Place, New Delhi North West DL
                  110034 India, is the sole and absolute owner of this Website and all content published from this URL.
                </CardContent>
              </Card>
            </motion.div>

            {/* 2. Intellectual Property Rights */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">2. Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText leading-relaxed">
                  Other than content you submit, Bhawana Capital Private Limited and/or its licensors own all rights to
                  the intellectual property and material contained on this Website. You are granted a limited license,
                  subject to these Terms, solely for viewing the material on this Website.
                </CardContent>
              </Card>
            </motion.div>

            {/* 3. Restrictions */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-secondary">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    3. Restrictions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-neutralText">
                  <p>You are expressly restricted from the following:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    {[
                      "Copying, capturing, downloading, deconstructing, reverse engineering, or publishing any Website material in any media.",
                      "Selling, sublicensing, or otherwise commercializing any Website material.",
                      "Publicly performing and/or showing any Website material.",
                      "Accessing the Website in any way that is or may be damaging to it or impacts user access.",
                      "Using the Website contrary to applicable laws or in a way that causes harm to the Website or others.",
                      "Engaging in data mining, harvesting, extracting, or similar activity in relation to the Website.",
                      "Using the Website to engage in advertising or marketing.",
                      "Accessing restricted areas without authorization; user IDs and passwords must be kept confidential.",
                      "Hosting, displaying, uploading, publishing, transmitting, updating, or sharing unlawful or harmful content (including defamatory, obscene, hateful, or privacy-invasive material).",
                    ].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* 4. No warranties */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">4. No warranties</CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText leading-relaxed">
                  This Website is provided “as is” and “as available.” Bhawana Capital Private Limited makes no express
                  or implied representations or warranties of any kind regarding the Website or its materials. Nothing
                  herein constitutes consultation or advice to you.
                </CardContent>
              </Card>
            </motion.div>

            {/* 5. Limitation of liability */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">5. Limitation of liability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-neutralText leading-relaxed">
                  <p>
                    In no event shall Bhawana Capital Private Limited, nor its officers, directors, or employees, be
                    liable for anything arising out of or in any way connected with your use of this Website under any
                    theory of liability, including indirect, consequential, or special damages.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      We are not responsible or liable for injury, loss, act of God, accident, delay, or any direct or
                      indirect damages arising from failures, delays, use/inability to use the Website, or performance
                      /non‑performance by us or any provider, or for viruses that may infect your device as a result of
                      access or downloads from the Website.
                    </li>
                    <li>
                      Third‑party links: We have no control over third‑party websites. We are not responsible for their
                      availability, content, products, or materials.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* 6. Indemnification */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">6. Indemnification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-neutralText leading-relaxed">
                  <p>
                    You agree to indemnify Bhawana Capital Private Limited against all liabilities, costs, demands,
                    causes of action, damages, and expenses (including reasonable attorneys’ fees) arising from your
                    breach of these Terms, policies, or applicable law, or violation of third‑party rights.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      You are solely responsible for your device capability, internet connection, and other
                      specifications required to use the Platform.
                    </li>
                    <li>
                      You will indemnify and hold Bhawana Capital harmless from losses arising from improper use of any
                      intellectual property of Bhawana Capital or any third party accessible via the services.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* 7-10. Standard clauses */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">7. Severability</CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText">
                  If any provision is found unenforceable or invalid, the remainder shall continue in effect.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">8. Variation of Terms</CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText">
                  We may revise these Terms at any time. You are expected to review them regularly.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">9. Assignment</CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText">
                  We may assign, transfer, or subcontract our rights and/or obligations without notice. You may not
                  assign or transfer your rights or obligations under these Terms.
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">10. Entire Agreement</CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText leading-relaxed">
                  These Terms, including legal notices and disclaimers on this Website, constitute the entire agreement
                  between you and Bhawana Capital Private Limited regarding your use of the Website and supersede any
                  prior agreements. If any clause becomes illegal, invalid, or unenforceable, the remainder remains
                  effective.
                </CardContent>
              </Card>
            </motion.div>

            {/* 11. Digital Contracts */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-secondary">
                    <Smartphone className="h-5 w-5 text-primary" />
                    11. Digital Contracts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-neutralText leading-relaxed">
                  <p>
                    The Website provides financial services, including advancing loans to eligible users, requiring
                    execution of loan agreements online. Agreements will be displayed on the Website and must be
                    digitally signed using Aadhaar‑enabled eSign under applicable IT Act rules, and are binding.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Uninstalling or discontinuing use of our services does not release you from obligations to repay
                      outstanding amounts or charges.
                    </li>
                    <li>
                      You are solely responsible for activities under your user account and maintaining confidentiality
                      of credentials. We may accept or reject registration at our discretion.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* 12. Governing Law & Jurisdiction */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-secondary">
                    <Scale className="h-5 w-5 text-primary" />
                    12. Governing Law & Jurisdiction
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-neutralText leading-relaxed">
                  These Terms are governed by the laws of India. You submit to the non‑exclusive jurisdiction of the
                  courts in Delhi / NCR, India, for dispute resolution.
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Note */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8">
                  <h3 className="font-poppins text-xl font-bold text-secondary mb-3">Questions about these Terms?</h3>
                  <p className="text-neutralText mb-4">
                    For clarifications or queries related to these Terms, you can write to us:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutralText">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span>Corporate Office: Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-4 w-4 text-primary mt-0.5" />
                      <a href="mailto:info@bhawanafinance.com" className="text-primary underline">
                        info@bhawanafinance.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center px-3 py-1.5 bg-primary/10 rounded-full text-sm text-primary">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    RBI and IT Act compliant
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      </motion.div>
      <Footer />
    </>
  )
}

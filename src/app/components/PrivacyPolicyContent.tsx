"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { Calendar, Shield, FileText } from "lucide-react"
import { Card, CardContent } from "./ui/card";
import { getReducedMotion } from "../lib/utils"

export default function PrivacyPolicyContent() {
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
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-primary mr-4" />
              <FileText className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-neutralText mb-8">
              Bhawana Capital Private Limited Principles of Processing its Clients Personal Data
            </p>
            <div className="flex items-center justify-center text-sm text-neutralText">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Latest updated on January 15, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-12">
                <CardContent className="p-8">
                  <p className="text-lg text-neutralText leading-relaxed">
                    Bhawana Capital Private Limited (formerly Bhawana Securities and Financial Services Limited)
                    ("Bhawana") is a Non-Deposit Taking Non-Banking Finance Company registered with Reserve Bank of
                    India ("RBI"). The Company is presently in the business of providing short term loans and advances.
                    These principles of Processing the Clients' Personal Data (hereinafter also principles) describe how
                    we, Bhawana Capital (hereinafter also we, us or our) process Personal Data of our Clients and any
                    other Data Principals (hereinafter also you) in relation to the services and products we offer.
                    These principles apply if you use, have used, have expressed an intention to use or are in any other
                    way related to our products or services, or in case you have expressed your wish to receive any
                    information about our products or services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 1: Definitions */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">1. Definitions</h2>
                  <div className="space-y-4">
                    {[
                      "1.1. Client – A natural person who uses, has used or has expressed an intention to use the products or services offered by Bhawana Capital or expressed a wish to receive information about Bhawana Capital products or services;",
                      "1.2. Contract – A contract concluded between Bhawana Capital and the Client;",
                      "1.3. Data Protection Regulations – Any applicable laws and regulations regulating the processing of Personal Data, namely the Digital Data Protection (DPDP) Act 2023;",
                      "1.4. Data Principal – means a natural person to whom personal data relates;",
                      "1.5. Bhawana Capital – Bhawana Capital Private Limited, bearing CIN: U65100DL1995PLC071089 with registered office address situated at F-6, 711, 7th Floor, Pearls Omaxe Netaji Subhash Place New Delhi-110034 and corporate office situated at The Executive Centre Level 18, One Horizon Centre, DLF5, Gurgaon-122002, India; phone: 0124-6687879; e-mail: info@bhawanafinance.com;",
                      "1.6. Multitude Group – Bhawana Capital together with companies the majority shareholder of which is directly or indirectly Bhawana Capital's parent undertaking Multitude AG (Registry Code CHE-455.352.012) (Grafenauweg 8, 6300 Zug, Switzerland);",
                      "1.7. Personal Data – Any information about an individual who is identifiable by or in relation to such data; any information relating to Data Principal;",
                      "1.8. Processing – Any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storing, adaption, alteration, retrieval, use, alignment or combination, indexing, disclosure by transmission, granting access to, making enquiries, transfer, viewing, restriction, erasure, destruction, etc.",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 2: Data Fiduciary */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">2. Data Fiduciary</h2>
                  <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                    2.1. Bhawana Capital is responsible for the Processing of your Personal Data and for those reasons
                    we are the data fiduciary. As Bhawana Capital is a company established under the laws of Republic of
                    India, then the Processing of your Personal Data shall be governed by the laws of India.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 3: Collecting Personal Data */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">
                    3. Collecting your Personal Data
                  </h2>
                  <div className="space-y-4">
                    <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                      3.1. Bhawana Capital collects your Personal Data in the following ways:
                    </p>
                    <p className="text-neutralText leading-relaxed pl-8 border-l-2 border-neutralDivider">
                      3.1.1. contact and communication data through communications made to us;
                    </p>
                    <p className="text-neutralText leading-relaxed pl-8 border-l-2 border-neutralDivider">
                      3.1.2. In case you apply for a loan or request other services or products from us, you provide
                      your Personal Data directly to us or through the third-party loan service provider authorised by
                      us. We collect personal data from external sources. Such external sources include but are not
                      limited to public and private registers which are used to identify you and verify your identity
                      and perform credit and risk assessments;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 4: Personal Data Processed */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">4. Personal Data Processed</h2>
                  <div className="space-y-4">
                    <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                      4.1. Considering the financial nature of our services and products, Bhawana Capital Processes
                      Personal Data collected for the following purposes:
                    </p>
                    {[
                      "4.1.1. concluding and performing the Contract with our Client. This includes properly identifying the Client and performing credit and risk checks and assessments on the Client to determine whether and on which conditions to conclude the Contract;",
                      "4.1.2. performance of our obligations arising from law; (e.g., anti-money laundering (AML) and terrorist financing rules and regulations to properly identify the Client (KYC) and ensure the trust- and creditworthiness of the Client);",
                      "4.1.3. safeguarding our rights (establishing, exercising, and defending legal claims);",
                      "4.1.4. assessing and developing further the quality of our services and products, e.g., customer support service and quality assurance service;",
                      "4.1.5. assessing the quality of our (potential) service providers services which enables us to evaluate and develop further the quality of the services and products we offer to our Clients;",
                      "4.1.6. internal record and statistics keeping;",
                      "4.1.7. security of the website to guarantee a safe consultation and secure interaction with our systems;",
                      "4.1.8. to ensure the best user experience;",
                      "4.1.9. the purposes you would have requested when providing your Personal Data to us.",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-8 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}

                    <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider mt-6">
                      4.2. For the foregoing, Bhawana Capital Processes the following Personal Data:
                    </p>
                    {[
                      "4.2.1. identification data (e.g., name, personal identification code, date of birth, place of birth, nationality, information about and copy of identification document, results of face/ID recognition, voice, picture, video, signature, address);",
                      "4.2.2. contact data (e.g., address, phone number, e-mail address, language of communication);",
                      "4.2.3. bank data (e.g., bank ID, account holder, account number, transaction information from your bank account, if you have consented to this);",
                      "4.2.4. professional data (e.g., current and former employer and position);",
                      "4.2.5. financial data (e.g., salary, income, assets, liabilities, properties, tax data);",
                      "4.2.6. data concerning origin of assets (e.g., data concerning employer, transaction partners, business activities and actual beneficiaries, data showing the source of your income and wealth);",
                      "4.2.7. data concerning creditworthiness/trustworthiness (e.g., data concerning payment behaviour, damages caused to Bhawana Capital or other persons, data that enables Bhawana Capital to perform the due diligence measures regarding money laundering and terrorist financing prevention and to ensure the compliance with international sanctions, including the purpose of the business relationship and whether the Client is a politically exposed person);",
                      "4.2.8. data obtained when performing an obligation arising from the law (e.g., information received from enquiries submitted by investigative bodies, tax authorities, courts and bailiffs, and Reserve Bank of India);",
                      "4.2.9. communications data (e.g., e-mails, phone call recordings);",
                      "4.2.10. data related to the products and services of Bhawana Capital (e.g., performance of the Contract or the failure thereof, transactions history, submitted applications, requests and complaints).",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-8 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 5: Automated Decision-Making */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">
                    5. Automated decision-making and profiling
                  </h2>
                  <div className="space-y-4">
                    {[
                      "5.1. Bhawana Capital decides based on profiling and automated decision-making whether the Client's application to receive our products or services is fully or partially accepted or rejected.",
                      "5.2. The decision is made based on information received from your application, information received from external sources and other third parties, as well as the Client's previous payment behaviour with us, and other financial service providers. No special categories of Personal Data (e.g., data concerning health, genetic data) are Processed.",
                      "5.3. Profiling and automated decision-making are necessary for entering the Contract, to meet Bhawana Capital's legal obligations to properly identify the Client, for assessing the creditworthiness of the Client, fraud prevention and money laundering. Automated decision-making helps Bhawana Capital to verify your identity and whether you are trust- and creditworthy to fulfil your obligations under the Contract. Automated decision-making helps us to make fair and responsible decisions and reduce the potential for human error, discrimination, and abuse of power, as well as enables to deliver decision-making within a shorter period, taking into account the volume of applications received by Bhawana Capital.",
                      "5.4. Because the decision-making is automated, the Client might not be eligible for our products or services. We have implemented suitable measures to safeguard the Client's rights and freedoms and can assure that we regularly test our automated methods, e.g., credit scoring methods, to ensure they remain fair, effective, and unbiased. However, if you want to contest an automated decision made or express your point of view, please contact us on the contact details provided below in Section 10.",
                      "5.5. Bhawana Capital uses profiling in addition to above to decide based on the Client's financial soundness in using our products and services whether to offer on our own initiative a higher credit amount or other services and products to the existing Client. As a result of described profiling, some Clients may not receive such offers. However, such profiling does not directly produce any legal effects on the Client or otherwise significantly affect the Client, as this does not influence the already existing Contract and the Client has the chance to apply for a new loan on her/his own initiative.",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 6: Disclosing Personal Data */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">
                    6. Disclosing the Personal Data
                  </h2>
                  <div className="space-y-4">
                    {[
                      "6.1. The financial nature of Bhawana Capital's products and services require us to share your Personal Data to run our everyday business to process transactions, maintain customer accounts, and report to public institutions. We will always ensure to respect relevant financial industry secrecy obligations before sharing any Personal Data.",
                      "6.2. We only share your Personal Data with those carefully selected and trusted partners to whom Bhawana Capital wishes to entrust or has entrusted the provision of services and with the third parties performing functions delegated to them by law, if stipulated herein, required under the applicable law (e.g., when Bhawana Capital is obligated to share Personal Data with the authorities) or with your consent.",
                      "6.3. Bhawana Capital may share your Personal Data with the following partners and third parties:",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}
                    {[
                      "6.3.1. Bhawana Capital cooperation partners with whom Bhawana Capital offers co-branded products and services for providing and marketing those services and products;",
                      "6.3.2. Personal Data processors and their sub-processors, e.g., legal and other advisors, data storage providers, telemarketing, marketing and surveys service providers, communication service providers, identification and certification service providers, card management service providers, invoicing and payment service providers, credit and financial institutions, bank data scraping, scoring and credit check service providers, online and offline intermediaries, IT service providers, etc.;",
                      "6.3.3. credit reference agencies who provide credit reports;",
                      "6.3.4. persons maintaining databases of defaulted payments;",
                      "6.3.5. debt collection agencies and bailiffs;",
                      "6.3.6. Bhawana Capital's auditors and regulators;",
                      "6.3.7. other partners and third parties to which we may assign, pledge, or transfer our rights and obligations to the extent required or allowed under the legislation applicable to Bhawana Capital or according to the agreement concluded with you.",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-8 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 7: Protection of Personal Data */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">
                    7. Protection of Personal Data
                  </h2>
                  <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                    7.1. Bhawana Capital endeavours to maintain physical, technical, and procedural safeguards
                    appropriate to the sensitivity of the Personal Data in question. These safeguards are designed to
                    protect your Personal Data from loss and unauthorized access, copying, use, modification, or
                    disclosure. Despite these safeguards, please note that no method of transmission over the internet
                    or data storage is fully secure. Should we be required by law to inform you of a breach to your
                    Personal Data, we may notify you electronically, in writing, or by phone.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 8: Data Retention */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">8. Data retention</h2>
                  <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                    8.1. Bhawana Capital retains your Personal Data in accordance with industry guidelines for as long
                    as necessary for the purposes for which they were collected, or for as long as necessary to
                    safeguard our rights, or for as long as required by applicable legal acts, including but not limited
                    to the norms prescribed under Prevention of Money Laundering Act, 2002. Kindly note that if the same
                    Personal Data is Processed for several purposes, we will retain the Personal Data for the longest
                    retention period applicable
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 9: Your Rights */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">9. Your rights</h2>
                  <div className="space-y-4">
                    <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                      9.1. To the extent required by applicable Data Protection Regulations, you have all the rights of
                      a Data Principal as regards your Personal Data. This includes the right to:
                    </p>
                    {[
                      "9.1.1. request access to your Personal Data;",
                      "9.1.2. rectify inaccurate or incomplete Personal Data relating to you;",
                      "9.1.3. erase your Personal Data;",
                      "9.1.4. withdraw your consent where our Processing of your Personal Data is based on your consent;",
                      "9.1.5. Should you believe that your rights have been violated, you have the right to lodge a complaint with Bhawana Capital customer support at (info@bhawanafinance.com).",
                      "9.1.6. Should you believe that your rights have been violated, you have the right to lodge a complaint with: - Bhawana Capital customer support at (info@bhawanafinance.com); - Data Protection Board of India (DPBI)",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-8 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}
                    {[
                      "9.2. When requesting access to, or rectification of your Personal Data, please note that we shall request specific information from you to enable us to confirm your identity and right to access or rectify, as well as to search for and provide you with the Personal Data that we hold about you.",
                      "9.3. Kindly note that your right to access or rectify your Personal Data we hold about you is not absolute.",
                      "9.4. If we cannot provide you with access to, or rectification of your Personal Data, we will inform you of the reasons why, subject to any legal or regulatory restrictions. We can assure you we will not discriminate you for exercising any of your rights described in these Principles.",
                      "9.5. To exercise your rights, please contact Bhawana Capital on the contact details above.",
                    ].map((item, index) => (
                      <p key={index} className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 10: Amending Principles */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">10. Amending these principles</h2>
                  <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                    10.1. Should our Personal Data Processing practices change or there shall be a need to amend these
                    principles under the applicable law, case-law or guidelines issued by competent authorities, we are
                    entitled to unilaterally amend these principles at any time. Our most recent principles will always
                    be published on our website, and we urge you to check this at least once a month.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Section 11: Contact */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="font-poppins text-2xl font-bold text-secondary mb-6">11. Contact</h2>
                  <p className="text-neutralText leading-relaxed pl-4 border-l-2 border-neutralDivider">
                    11.1. In case you have any question regarding the Processing of your Personal Data by Bhawana
                    Capital or you would like to exercise your rights as a Data Principal, please contact us on contact
                    details provided above in Section 9.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information Card */}
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-8 text-center">
                  <h3 className="font-poppins text-xl font-bold text-secondary mb-4">
                    Need Help with Your Privacy Rights?
                  </h3>
                  <p className="text-neutralText mb-6">
                    If you have any questions about this privacy policy or wish to exercise your data protection rights,
                    please contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:info@bhawanafinance.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Email Us
                    </a>
                    <a
                      href="tel:+91-124-6687879"
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Call Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

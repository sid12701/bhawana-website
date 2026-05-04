"use client"

import { motion } from "framer-motion"
import { CheckCircle, FileText, Mail, Phone, Scale, Shield, Users } from "lucide-react"

import { getFairPracticeCodeDocument, type FairPracticeCodeSection } from "@/app/lib/fairPracticeCodeData"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const iconMap = {
  fileText: FileText,
  shield: Shield,
  users: Users,
  scale: Scale,
  checkCircle: CheckCircle,
}

type FairPracticeCodeContentProps = {
  documentCode: "en" | "hi"
}

function PolicySectionCard({ section, index }: { section: FairPracticeCodeSection; index: number }) {
  const Icon = iconMap[section.icon]
  const cardClasses = index % 2 === 0 ? "bg-white border-blue-100" : "bg-slate-50/80 border-slate-200"

  return (
    <Card className={`shadow-md ${cardClasses}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-blue-700 text-xl">
          <Icon className="w-6 h-6" />
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {section.content?.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex} className="text-gray-700 leading-relaxed text-justify">
            {paragraph}
          </p>
        ))}

        {section.intro && <p className="text-gray-700 leading-relaxed font-medium">{section.intro}</p>}

        {section.list && (
          <ol className="list-decimal list-inside space-y-3 ml-4">
            {section.list.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 leading-relaxed text-justify">
                {item}
              </li>
            ))}
          </ol>
        )}

        {section.commitments && (
          <ol className="list-decimal list-inside space-y-4 ml-4">
            {section.commitments.map((commitment, commitmentIndex) => (
              <li key={commitmentIndex} className="text-gray-700 leading-relaxed">
                {commitment.main}
                {commitment.sub && (
                  <ul className="list-disc list-inside space-y-2 ml-6 mt-2">
                    {commitment.sub.map((subItem, subItemIndex) => (
                      <li key={subItemIndex} className="text-gray-600 leading-relaxed">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        )}

        {section.nestedListLead && (
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed text-justify">{section.nestedListLead}</p>
            {section.nestedList && (
              <ol className="list-decimal list-inside space-y-2 ml-6">
                {section.nestedList.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 leading-relaxed text-justify">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}

        {section.note && (
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
            <p className="text-blue-900 text-sm leading-relaxed">{section.note}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function FairPracticeCodeContent({ documentCode }: FairPracticeCodeContentProps) {
  const document = getFairPracticeCodeDocument(documentCode)

  if (!document) {
    return null
  }

  const pageTitle =
    document.code === "hi" ? "Fair Practice Code (Hindi)" : "Fair Practice Code (English)"
  const pageDescription =
    document.code === "hi"
      ? "Hindi version of Bhawana Capital's Fair Practice Code."
      : "English version of Bhawana Capital's Fair Practice Code."

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
              <Shield className="w-12 h-12 text-white mr-4" />
              <Scale className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{pageTitle}</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">{pageDescription}</p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              RBI Compliant and Board Approved
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto" lang={document.languageTag}>
            <div className="space-y-6">
              {document.sections.map((section, index) => (
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
                <a href="/grievance-redressal-policy">View Grievance Redressal Policy</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

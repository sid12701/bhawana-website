"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText, Mail, Phone, Shield } from "lucide-react"

import type {
  BoardPolicyBlock,
  BoardPolicyDocument,
  BoardPolicySection,
} from "@/app/lib/boardPolicyTypes"
import { PolicyPdfSection } from "./PolicyPdfSection"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

function renderBlock(block: BoardPolicyBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-gray-700 leading-relaxed text-justify">
          {block.text}
        </p>
      )
    case "subheading":
      return (
        <h3 key={index} className="pt-2 font-poppins text-lg font-semibold text-secondary">
          {block.text}
        </h3>
      )
    case "note":
      return (
        <div key={index} className="rounded-lg border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm leading-relaxed text-blue-900">{block.text}</p>
        </div>
      )
    case "link":
      return (
        <a
          key={index}
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center break-all text-primary hover:text-primary/80"
        >
          {block.text}
          <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
        </a>
      )
    case "list":
      return (
        <ul key={index} className="list-disc list-outside space-y-2 pl-6">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-gray-700 leading-relaxed text-justify">
              {item}
            </li>
          ))}
        </ul>
      )
    case "table":
      return (
        <div key={index} className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-secondary"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-slate-100 last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="whitespace-pre-line px-4 py-3 align-top text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}

function PolicySectionCard({ section, index }: { section: BoardPolicySection; index: number }) {
  const cardClasses = index % 2 === 0 ? "bg-white border-blue-100" : "bg-slate-50/80 border-slate-200"

  return (
    <Card className={`shadow-md ${cardClasses}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl text-blue-700">
          <FileText className="h-6 w-6 flex-shrink-0" />
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{section.blocks.map(renderBlock)}</CardContent>
    </Card>
  )
}

type BoardPolicyContentProps = {
  document: BoardPolicyDocument
}

export default function BoardPolicyContent({ document }: BoardPolicyContentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 flex items-center justify-center">
              <FileText className="mr-4 h-12 w-12 text-white" />
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{document.title}</h1>
            <p className="mb-8 text-xl text-blue-100 md:text-2xl">{document.subtitle}</p>
            <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-sm">
              <Shield className="mr-2 h-4 w-4" />
              {document.badge}
            </div>
          </motion.div>
        </div>
      </section>

      <PolicyPdfSection
        title={`${document.title} (PDF)`}
        description="Official board-approved document. Download or view the PDF below."
        pdfHref={document.pdfHref}
        fileName={document.pdfFileName}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-6">
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
      </section>

      {document.showFlowchart ? (
        <section className="bg-neutralBg py-16 md:py-24" id="grievance-flowchart">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <Card>
                <CardContent className="p-4 sm:p-8">
                  <figure className="mx-auto w-full max-w-[1080px] overflow-x-auto">
                    <picture>
                      <source
                        srcSet="/images/grievance-redressal-flowchart.svg"
                        type="image/svg+xml"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/grievance-redressal-flowchart.png"
                        alt="Bhawana Capital grievance redressal and escalation flowchart"
                        className="w-full rounded-lg border border-neutral-200 shadow-sm"
                        width={1080}
                        height={1720}
                      />
                    </picture>
                  </figure>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">{document.ctaTitle}</h2>
            <p className="mb-8 text-lg text-blue-100">{document.ctaBody}</p>

            <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
              <Card className="border-white/20 bg-white/10 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Call Us</h3>
                  <a
                    href="tel:01246687879"
                    className="font-semibold text-blue-200 transition-colors hover:text-white"
                  >
                    0124-6687879
                  </a>
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/10 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Email Us</h3>
                  <a
                    href="mailto:info@bhawanafinance.com"
                    className="font-semibold text-blue-200 transition-colors hover:text-white"
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
                className="border-white bg-transparent px-8 py-3 font-semibold text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="/grievance-redressal-policy">Grievance Redressal</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

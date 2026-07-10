"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { ExternalLink, Download, MessageSquare, Users } from "lucide-react"

import {
  grievanceRedressalSections,
  type GrievanceBlock,
  type GrievanceSection,
} from "../lib/grievanceRedressalData"
import { legal } from "../lib/content"
import { getReducedMotion } from "../lib/utils"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

function renderBlock(block: GrievanceBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-neutralText leading-relaxed text-justify">
          {block.text}
        </p>
      )
    case "subheading":
      return (
        <h3 key={index} className="font-poppins text-lg font-semibold text-secondary pt-2">
          {block.text}
        </h3>
      )
    case "list":
      return (
        <ul key={index} className="list-disc list-outside space-y-2 pl-6">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="text-neutralText leading-relaxed text-justify">
              {item}
            </li>
          ))}
        </ul>
      )
    case "note":
      return (
        <div key={index} className="rounded-lg border border-accent/30 bg-accent/10 p-4">
          <p className="text-sm font-medium text-secondary leading-relaxed">{block.text}</p>
        </div>
      )
    case "table":
      return (
        <div key={index} className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="min-w-full text-sm">
            <thead className="bg-neutralBg">
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-neutral-200 px-4 py-3 text-left font-semibold text-secondary"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-neutral-100 last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 align-top text-neutralText">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
    default:
      return null
  }
}

function GrievanceSectionCard({ section }: { section: GrievanceSection }) {
  return (
    <Card>
      <CardContent className="space-y-4 p-8">
        <h2 className="font-poppins text-2xl font-bold text-secondary">{section.title}</h2>
        {section.blocks.map((block, index) => renderBlock(block, index))}
      </CardContent>
    </Card>
  )
}

export default function GrievanceRedressalContent() {
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
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center">
              <MessageSquare className="mr-4 h-12 w-12 text-primary" />
              <Users className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
              Grievance Redressal Mechanism
            </h1>
            <p className="mt-4 text-lg text-neutralText md:text-xl">Bhawana Capital Private Limited</p>
            <div className="mt-8">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href={legal.grievancePdf} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Grievance Redressal Mechanism (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            {grievanceRedressalSections.map((section) => (
              <motion.div
                key={section.id}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <GrievanceSectionCard section={section} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutralBg py-16 md:py-24" id="grievance-flowchart">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Card>
                <CardContent className="p-4 sm:p-8">
                  <figure className="mx-auto w-full max-w-[1080px] overflow-x-auto">
                    <picture>
                      <source srcSet="/images/grievance-redressal-flowchart.svg" type="image/svg+xml" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/grievance-redressal-flowchart.png"
                        alt="Bhawana Capital grievance redressal and escalation flowchart showing Level 1 Grievance Redressal Officer, Level 2 Nodal Officer, and Level 3 RBI Ombudsman under RB-IOS 2021"
                        className="w-full rounded-lg border border-neutral-200 shadow-sm"
                        width={1080}
                        height={1720}
                      />
                    </picture>
                  </figure>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

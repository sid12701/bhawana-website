import { ExternalLink, FileText, Mail, Phone, Shield, ZoomIn } from "lucide-react"

import type {
  BoardPolicyBlock,
  BoardPolicyDocument,
  BoardPolicySection,
} from "@/app/lib/boardPolicyTypes"
import { PolicyPdfCard } from "./PolicyPdfCard"
import { PolicyTocDisclosure, PolicyTocSidebar, type PolicyTocItem } from "./PolicyToc"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { cn } from "../lib/utils"
import { legal } from "../lib/content"

function renderBlock(block: BoardPolicyBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-neutralText leading-relaxed">
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
        <div key={index} className="rounded-lg border border-primary/15 bg-primary/5 p-4">
          <p className="text-sm leading-relaxed text-secondary">{block.text}</p>
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
            <li key={itemIndex} className="text-neutralText leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )
    case "table":
      return (
        <div key={index} className="overflow-x-auto rounded-lg border border-neutralDivider">
          <table className="min-w-full text-sm">
            <thead className="bg-neutralBg">
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-neutralDivider px-4 py-3 text-left font-semibold text-secondary"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-neutralDivider last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="whitespace-pre-line px-4 py-3 align-top text-neutralText"
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

// Numbered subsections ("3.1", "15.2") are stored as siblings of their parent; they read as the next level down.
const SUBSECTION_TITLE = /^\d+\.\d+\s/

function PolicySectionCard({ section, index }: { section: BoardPolicySection; index: number }) {
  const cardClasses = index % 2 === 0 ? "bg-white border-primary/15" : "bg-neutralBg border-neutralDivider"
  const isSubsection = SUBSECTION_TITLE.test(section.title)

  return (
    // tabIndex -1 lets the contents list move focus here after jumping to the section
    <Card id={section.id} tabIndex={-1} className={`shadow-md outline-none ${cardClasses}`}>
      <CardHeader>
        <CardTitle
          as={isSubsection ? "h3" : "h2"}
          className={cn("flex items-center gap-3 text-primary", isSubsection ? "text-lg" : "text-xl")}
        >
          <FileText className={cn("flex-shrink-0", isSubsection ? "h-5 w-5" : "h-6 w-6")} />
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{section.blocks.map(renderBlock)}</CardContent>
    </Card>
  )
}

function GrievanceFlowchart() {
  return (
    <Card id="grievance-flowchart">
      <CardContent className="p-4 sm:p-6">
        <figure>
          {/* Opens the vector original so phones can pinch-zoom the small print. The zoom badge sits in the
              chart's empty bottom-right corner so it never covers the title. */}
          <a
            href="/images/grievance-redressal-flowchart.svg"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <picture>
              <source srcSet="/images/grievance-redressal-flowchart.svg" type="image/svg+xml" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/grievance-redressal-flowchart.png"
                alt="Bhawana Capital grievance redressal and escalation flowchart"
                className="w-full rounded-lg border border-neutralDivider shadow-sm"
                width={1080}
                height={1720}
              />
            </picture>
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-neutralDivider bg-background/95 text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white"
            >
              <ZoomIn className="h-5 w-5" />
            </span>
          </a>
        </figure>
      </CardContent>
    </Card>
  )
}

type BoardPolicyContentProps = {
  document: BoardPolicyDocument
}

export default function BoardPolicyContent({ document }: BoardPolicyContentProps) {
  const tocItems: PolicyTocItem[] = document.sections.map((section) => ({
    id: section.id,
    title: section.title,
    level: SUBSECTION_TITLE.test(section.title) ? 3 : 2,
  }))

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-12 md:py-16">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center md:mb-6">
              <FileText className="mr-4 h-10 w-10 md:h-12 md:w-12 text-primary" />
              <Shield className="h-10 w-10 md:h-12 md:w-12 text-secondary" />
            </div>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">{document.title}</h1>
            <p lang={document.lang} className="text-lg md:text-xl text-neutralText mb-6 md:mb-8">{document.subtitle}</p>
            <div lang={document.lang} className="inline-flex items-center rounded-full border border-primary/20 bg-background px-5 py-2 text-sm font-medium text-secondary">
              <Shield className="mr-2 h-4 w-4" />
              {document.badge}
            </div>
          </div>
        </div>
      </section>

      {/*
        Reading layout: one 640px column, which holds policy text at about 72-75 characters per line.
        From 1024px a sticky contents rail sits beside it; below that the contents collapse into a disclosure.
      */}
      <section className="pt-8 pb-16 md:pt-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[40rem] lg:grid lg:max-w-6xl lg:grid-cols-[15rem_minmax(0,40rem)] lg:justify-center lg:gap-12">
            <aside className="hidden lg:block">
              <PolicyTocSidebar items={tocItems} lang={document.lang} />
            </aside>

            <div className="flex min-w-0 flex-col gap-8">
              <PolicyPdfCard
                title={`${document.title} (PDF)`}
                description={
                  document.pdfDescription ??
                  "Official board-approved document. Download or view the PDF below."
                }
                pdfHref={document.pdfHref}
                fileName={document.pdfFileName}
              />

              {/* The escalation path is what a complainant needs first, so it leads the grievance page */}
              {document.showFlowchart ? <GrievanceFlowchart /> : null}

              <div className="lg:hidden">
                <PolicyTocDisclosure items={tocItems} lang={document.lang} />
              </div>

              <div lang={document.lang} className="space-y-6">
                {document.sections.map((section, index) => (
                  <PolicySectionCard key={section.id} section={section} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 lang={document.lang} className="mb-8 text-3xl font-bold md:text-4xl">{document.ctaTitle}</h2>
            <p lang={document.lang} className="mb-8 text-lg text-white/80">{document.ctaBody}</p>

            <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
              <Card className="border-white/20 bg-white/10 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Call Us</h3>
                  <a
                    href={`tel:${legal.phoneTel}`}
                    className="inline-block py-1 font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    {legal.phoneLocal}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/10 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Email Us</h3>
                  <a
                    href={`mailto:${legal.email}`}
                    className="inline-block py-1 font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    {legal.email}
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                variant="inverse"
                className="font-semibold"
                asChild
              >
                <a href="/grievance-redressal-policy/">Grievance Redressal</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

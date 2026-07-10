import { Download, ExternalLink, FileText } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

type PolicyPdfSectionProps = {
  title: string
  description: string
  pdfHref: string
  fileName: string
}

export function PolicyPdfSection({ title, description, pdfHref, fileName }: PolicyPdfSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-5xl border-primary/20 shadow-lg">
          <CardContent className="space-y-6 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="font-poppins text-xl font-bold text-secondary md:text-2xl">{title}</h2>
                  <p className="mt-2 text-sm text-neutralText md:text-base">{description}</p>
                  <p className="mt-2 text-xs text-neutralText/80">File: {fileName}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={pdfHref} download={fileName}>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={pdfHref} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open PDF
                  </a>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutralBg">
              <iframe
                title={title}
                src={`${pdfHref}#toolbar=1&navpanes=0`}
                className="h-[70vh] min-h-[480px] w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

import { Download, ExternalLink, FileText } from "lucide-react"

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { cn } from "../lib/utils"
import PdfPreview from "./PdfPreview"

type PolicyPdfCardProps = {
  title: string
  description: string
  pdfHref: string
  fileName: string
}

export function PolicyPdfCard({
  title,
  description,
  pdfHref,
  fileName,
  className,
}: PolicyPdfCardProps & { className?: string }) {
  return (
    <Card className={cn("border-primary/20 shadow-lg", className)}>
      {/* gap, not space-y: the preview is display:none on phones and must not leave a trailing margin */}
      <CardContent className="flex flex-col gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="h-7 w-7" />
            </div>
            <div>
              <h2 className="font-poppins text-xl font-bold text-secondary md:text-2xl">
                {title}
              </h2>
              <p className="mt-2 text-sm text-neutralText md:text-base">
                {description}
              </p>
              <p className="mt-2 text-xs text-neutralText">File: {fileName}</p>
            </div>
          </div>
          {/* Buttons sit under the text, lined up with the title (icon 56px + 16px gap) */}
          <div className="flex flex-col gap-3 sm:flex-row sm:pl-[4.5rem]">
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

        <PdfPreview title={title} src={`${pdfHref}#toolbar=1&navpanes=0`} />
      </CardContent>
    </Card>
  )
}

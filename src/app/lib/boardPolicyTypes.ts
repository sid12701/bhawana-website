export type BoardPolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "note"; text: string }
  | { type: "link"; text: string; href: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }

export type BoardPolicySection = {
  id: string
  title: string
  blocks: BoardPolicyBlock[]
}

export type BoardPolicyDocument = {
  slug: string
  title: string
  subtitle: string
  pdfHref: string
  pdfFileName: string
  badge: string
  ctaTitle: string
  ctaBody: string
  pdfDescription?: string
  showFlowchart?: boolean
  /** BCP 47 language of the document text (e.g. "hi"); page chrome stays in the site language. */
  lang?: string
  sections: BoardPolicySection[]
}

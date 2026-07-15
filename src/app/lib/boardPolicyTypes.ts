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
  showFlowchart?: boolean
  sections: BoardPolicySection[]
}

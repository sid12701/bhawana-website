"""Generate TypeScript board-policy data files from FINAL docx JSON extracts."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXTRACTS = ROOT / "tmp-policy-extracts"
OUT_DIR = ROOT / "src" / "app" / "lib" / "policies"

# "1. Title" or "4.1 Title" / "7.3 Title" (no trailing dot on subsection numbers)
NUMBERED_HEADING = re.compile(r"^(?:\d+\.\s+|\d+(?:\.\d+)+\s+)\S")
# Sub-clause headings that continue as body on same line (KYC 15.1 / 15.2)
NUMBERED_INLINE = re.compile(r"^(\d+(?:\.\d+)+)\s+(.+)$")

GRIEVANCE_HEADINGS = {
    "Introduction",
    "Grounds for filing a complaint",
    "How to raise complaints?",
    "Mechanism to handle customer complaints/ grievances",
    "Complaint lodge / registration",
    "Resolution of Grievances",
    "ANNEXURE-Escalation Grid",
    "Complaint Management System",
}

POLICIES = [
    {
        "slug": "interest-rate-policy",
        "title": "Interest Rate Policy",
        "subtitle": "Board-approved Interest Rate Policy covering the interest-rate model, risk gradation, charges, and borrower disclosures.",
        "pdfFile": "interest-rate-policy.pdf",
        "badge": "RBI Compliant",
        "ctaTitle": "Questions About Our Interest Rates?",
        "ctaBody": "Our team can explain how rates are determined and which disclosures apply to your loan.",
        "mode": "numbered",
    },
    {
        "slug": "kyc-aml-cft-policy",
        "title": "KYC-AML-CFT Policy",
        "subtitle": "Know Your Customer, Anti-Money Laundering and Combating the Financing of Terrorism.",
        "pdfFile": "kyc-aml-cft-policy.pdf",
        "badge": "RBI Compliant",
        "ctaTitle": "Questions About KYC / AML?",
        "ctaBody": "Contact us for clarification on customer due diligence and AML requirements.",
        "mode": "numbered",
    },
    {
        "slug": "fair-practice-code",
        "title": "Fair Practice Code (English)",
        "subtitle": "Board-approved Fair Practice Code covering transparency, ethical lending, and customer protection.",
        "pdfFile": "fair-practice-code.pdf",
        "badge": "English · RBI Compliant",
        "ctaTitle": "Questions About Our Fair Practice Code?",
        "ctaBody": "We are happy to explain how these commitments apply to your relationship with us.",
        "mode": "numbered",
    },
    {
        "slug": "fair-practice-code-hindi",
        "title": "Fair Practice Code (Hindi)",
        "subtitle": "निष्पक्ष आचरण संहिता — पारदर्शिता, नैतिक ऋण और ग्राहक संरक्षण।",
        "pdfFile": "fair-practice-code-hindi.pdf",
        "badge": "हिन्दी · RBI Compliant",
        "ctaTitle": "Fair Practice Code संबंधी प्रश्न?",
        "ctaBody": "हमसे संपर्क करें — हम संहिता की प्रतिबद्धताओं को समझाने में सहायता करेंगे।",
        "mode": "numbered",
    },
    {
        "slug": "grievance-redressal-mechanism",
        "title": "Grievance Redressal Mechanism",
        "subtitle": "How customers can raise complaints and how Bhawana Capital resolves them promptly and fairly.",
        "pdfFile": "grievance-redressal-mechanism.pdf",
        "badge": "RBI Compliant",
        "ctaTitle": "Need Help With a Complaint?",
        "ctaBody": "Reach Customer Care or escalate as described in this mechanism.",
        "mode": "grievance",
        "showFlowchart": True,
    },
    {
        "slug": "loan-transfer-policy",
        "title": "Loan Transfer Policy",
        "subtitle": "Policy on transfer and acquisition of loan exposures.",
        "pdfFile": "loan-transfer-policy.pdf",
        "badge": "RBI Compliant",
        "ctaTitle": "Questions About Loan Transfers?",
        "ctaBody": "Contact us for clarification on assignment and borrower notification.",
        "mode": "loan_transfer",
    },
    {
        "slug": "interest-rates-and-service-charges",
        "title": "Interest Rates and Service Charges",
        "subtitle": "Website schedule of interest rates and service charges under the RBI RBC Directions, 2025.",
        "pdfFile": "interest-rates-and-service-charges.pdf",
        "badge": "Updated with rates & charges",
        "ctaTitle": "Questions About Rates or Charges?",
        "ctaBody": "All loan-specific rates and charges are also disclosed in your Key Fact Statement.",
        "mode": "numbered",
    },
    {
        "slug": "rbi-ombudsman-salient-features",
        "title": "RBI Ombudsman — Salient Features",
        "subtitle": "Complaint escalation to RBI and salient features of the Reserve Bank – Integrated Ombudsman Scheme, 2021.",
        "pdfFile": "rbi-ombudsman-salient-features.pdf",
        "badge": "RB-IOS 2021",
        "ctaTitle": "Need Escalation Guidance?",
        "ctaBody": "First use our Grievance Redressal Mechanism; then escalate to RBI if unresolved.",
        "mode": "numbered",
    },
    {
        "slug": "digital-lending-policy",
        "title": "Digital Lending Policy",
        "subtitle": "Board-approved Digital Lending Policy covering LSPs, disclosures, fund flows, and data privacy.",
        "pdfFile": "digital-lending-policy.pdf",
        "badge": "RBI Compliant",
        "ctaTitle": "Questions About Digital Lending?",
        "ctaBody": "Our team can explain partner roles, disclosures, and borrower protections.",
        "mode": "numbered",
    },
    {
        "slug": "collection-and-recovery-policy",
        "title": "Collection and Recovery Policy",
        "subtitle": "Fair collection practices, agent conduct, and recovery principles under RBI Directions.",
        "pdfFile": "collection-and-recovery-policy.pdf",
        "badge": "RBI Compliant",
        "ctaTitle": "Questions About Collection Practices?",
        "ctaBody": "Raise concerns through our Grievance Redressal Mechanism at any time.",
        "mode": "numbered",
    },
]


def ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def slugify(title: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9\u0900-\u097F]+", "-", title.lower()).strip("-")
    return s[:80] or "section"


def looks_like_list_item(text: str) -> bool:
    if re.match(r"^\([a-z]\)\s", text, re.I):
        return True
    if text.endswith(";") or text.endswith("; and") or text.endswith("; and"):
        return True
    if text.endswith("."):  # closing sentence of a list
        # short phrase-like lines without a long narrative
        if len(text) < 180 and text[0].islower():
            return True
    return False


LOAN_TRANSFER_SKIP_TITLES = {
    "POLICY ON TRANSFER AND ACQUISITION OF LOAN  EXPOSURES",
    "POLICY ON TRANSFER AND ACQUISITION OF LOAN EXPOSURES",
    "BHAWANA CAPITAL PRIVATE LIMITED",
}


def is_all_caps_heading(text: str) -> bool:
    if text in LOAN_TRANSFER_SKIP_TITLES:
        return False
    letters = [c for c in text if c.isalpha()]
    if len(letters) < 8 or len(text) > 120:
        return False
    if text.endswith(".") or text.endswith(","):
        return False
    upper = sum(1 for c in letters if c.isupper())
    return upper / len(letters) >= 0.85


def is_colon_subheading(text: str) -> bool:
    return bool(re.match(r"^[A-Za-z][\w\s/&\-]{2,60}:$", text))


def is_heading(text: str, mode: str) -> bool:
    if mode == "grievance":
        if text in GRIEVANCE_HEADINGS:
            return True
        if NUMBERED_HEADING.match(text):
            return True
        return False
    if mode == "loan_transfer":
        if text == "INTRODUCTION" or is_all_caps_heading(text):
            return True
        if is_colon_subheading(text):
            return False  # handled as subheading blocks
        return False
    # numbered + KYC-style 4.1 etc.
    if NUMBERED_HEADING.match(text):
        # Split case: "15.1 Statutory reliance. The Company may..."
        m = NUMBERED_INLINE.match(text)
        if m and ". " in m.group(2):
            first = m.group(2).split(". ", 1)[0]
            # treat as heading only if short title then body
            if len(first.split()) <= 8:
                return True
        return True
    return False


def split_inline_numbered(text: str) -> tuple[str, str | None]:
    """Return (heading_title, optional body) for '15.1 Title. Body...'."""
    m = NUMBERED_INLINE.match(text)
    if not m:
        return text, None
    rest = m.group(2)
    if ". " not in rest:
        return text, None
    title_part, body = rest.split(". ", 1)
    if len(title_part.split()) > 8:
        return text, None
    heading = f"{m.group(1)} {title_part}"
    return heading, body


def flush_list(items: list[str], blocks: list[dict]) -> None:
    if items:
        blocks.append({"type": "list", "items": items[:]})
        items.clear()


def parse_sections(paras: list[str], tables: list[list[list[str]]], mode: str) -> list[dict]:
    # Skip title / company boilerplate until first heading or intro body
    start = 0
    for i, raw in enumerate(paras):
        text = raw.strip()
        if not text:
            continue
        if is_heading(text, mode) or text == "Introduction" or text == "INTRODUCTION":
            start = i
            break
        # interest-rates has preamble paragraph before numbered sections
        if mode == "numbered" and text.startswith("This disclosure"):
            start = i
            break

    sections: list[dict] = []
    current: dict | None = None
    pending_list: list[str] = []

    def ensure_section(title: str) -> None:
        nonlocal current
        if current is not None:
            flush_list(pending_list, current["blocks"])
            sections.append(current)
        current = {"id": slugify(title), "title": title, "blocks": []}

    def add_block(block: dict) -> None:
        nonlocal current
        if current is None:
            ensure_section("Overview")
        assert current is not None
        flush_list(pending_list, current["blocks"])
        current["blocks"].append(block)

    i = start
    while i < len(paras):
        text = paras[i].strip()
        if not text:
            i += 1
            continue

        # Preamble paragraph before first heading (rates schedule)
        if current is None and not is_heading(text, mode) and text not in {"Introduction", "INTRODUCTION"}:
            ensure_section("Overview")
            add_block({"type": "paragraph", "text": text})
            i += 1
            continue

        heading_candidate = text
        inline_body = None
        if mode == "numbered" and NUMBERED_INLINE.match(text):
            heading_candidate, inline_body = split_inline_numbered(text)

        if is_heading(heading_candidate if inline_body else text, mode) or text in {
            "Introduction",
            "INTRODUCTION",
        }:
            title = heading_candidate if inline_body else text
            if text in {"Introduction", "INTRODUCTION"}:
                title = text.title() if text.isupper() else text
            ensure_section(title)
            if inline_body:
                add_block({"type": "paragraph", "text": inline_body})
            i += 1
            continue

        if is_colon_subheading(text):
            add_block({"type": "subheading", "text": text.rstrip(":")})
            i += 1
            continue

        # Link-only lines
        if text.startswith("http://") or text.startswith("https://"):
            add_block({"type": "link", "text": text, "href": text})
            i += 1
            continue

        # Note lines
        if text.startswith("Note:"):
            add_block({"type": "note", "text": text})
            i += 1
            continue

        # Collect list-like sequences (exclude definition lines starting with quotes)
        if not text.startswith(("“", '"', "‘", "'")) and (
            looks_like_list_item(text)
            or (
                current
                and pending_list
                and len(text) < 220
                and text[0].islower()
            )
        ):
            item = text
            if item.endswith("; and"):
                item = item[:-5]
            elif item.endswith(";"):
                item = item[:-1]
            pending_list.append(item)
            i += 1
            continue

        if pending_list:
            flush_list(pending_list, current["blocks"] if current else [])

        add_block({"type": "paragraph", "text": text})
        i += 1

    if current is not None:
        flush_list(pending_list, current["blocks"])
        sections.append(current)

    # Attach tables: known section titles first, then empty sections, then last section
    remaining = list(tables)
    title_hints = [
        "3.1 Channels of raising a complaint",
        "ANNEXURE-Escalation Grid",
        "MINIMUM HOLDING PERIOD",
        "1. Rates of Interest",
        "2. Service Charges",
    ]
    for title_prefix in title_hints:
        if not remaining:
            break
        for section in sections:
            if section["title"] == title_prefix or section["title"].startswith(title_prefix):
                has_table = any(b["type"] == "table" for b in section["blocks"])
                if not has_table:
                    tbl = remaining.pop(0)
                    section["blocks"].append(
                        {"type": "table", "headers": tbl[0], "rows": tbl[1:]}
                    )
                break

    if remaining:
        for section in sections:
            if not remaining:
                break
            if len(section["blocks"]) == 0:
                tbl = remaining.pop(0)
                section["blocks"].append({"type": "table", "headers": tbl[0], "rows": tbl[1:]})

    while remaining:
        tbl = remaining.pop(0)
        if not sections:
            sections.append({"id": "tables", "title": "Tables", "blocks": []})
        sections[-1]["blocks"].append({"type": "table", "headers": tbl[0], "rows": tbl[1:]})

    sections = [s for s in sections if s["blocks"]]
    return sections


def emit_block(block: dict, indent: int) -> str:
    pad = " " * indent
    t = block["type"]
    if t == "paragraph":
        return f'{pad}{{ type: "paragraph", text: {ts_string(block["text"])} }}'
    if t == "subheading":
        return f'{pad}{{ type: "subheading", text: {ts_string(block["text"])} }}'
    if t == "note":
        return f'{pad}{{ type: "note", text: {ts_string(block["text"])} }}'
    if t == "link":
        return (
            f'{pad}{{ type: "link", text: {ts_string(block["text"])}, '
            f'href: {ts_string(block["href"])} }}'
        )
    if t == "list":
        items = ",\n".join(f'{" " * (indent + 4)}{ts_string(i)}' for i in block["items"])
        return f'{pad}{{ type: "list", items: [\n{items},\n{pad}  ] }}'
    if t == "table":
        headers = ", ".join(ts_string(h) for h in block["headers"])
        rows_parts = []
        for row in block["rows"]:
            cells = ", ".join(ts_string(c) for c in row)
            rows_parts.append(f'{" " * (indent + 4)}[{cells}]')
        rows = ",\n".join(rows_parts)
        return (
            f'{pad}{{ type: "table", headers: [{headers}], rows: [\n{rows},\n{pad}  ] }}'
        )
    raise ValueError(t)


def emit_policy_file(meta: dict, sections: list[dict]) -> str:
    section_parts = []
    for section in sections:
        blocks = ",\n".join(emit_block(b, 8) for b in section["blocks"])
        section_parts.append(
            f"""  {{
    id: {ts_string(section["id"])},
    title: {ts_string(section["title"])},
    blocks: [
{blocks}
    ],
  }}"""
        )
    sections_ts = ",\n".join(section_parts)
    show_flowchart = "true" if meta.get("showFlowchart") else "false"
    return f"""import type {{ BoardPolicyDocument }} from "../boardPolicyTypes"

const doc: BoardPolicyDocument = {{
  slug: {ts_string(meta["slug"])},
  title: {ts_string(meta["title"])},
  subtitle: {ts_string(meta["subtitle"])},
  pdfHref: {ts_string("/policies/" + meta["pdfFile"])},
  pdfFileName: {ts_string(meta["pdfFile"])},
  badge: {ts_string(meta["badge"])},
  ctaTitle: {ts_string(meta["ctaTitle"])},
  ctaBody: {ts_string(meta["ctaBody"])},
  showFlowchart: {show_flowchart},
  sections: [
{sections_ts}
  ],
}}

export default doc
"""


def emit_index(slugs: list[str]) -> str:
    imports = "\n".join(
        f'import {camel(s)} from "./{s}"' for s in slugs
    )
    entries = ",\n".join(f'  "{s}": {camel(s)}' for s in slugs)
    return f"""import type {{ BoardPolicyDocument }} from "../boardPolicyTypes"

{imports}

export const boardPolicies: Record<string, BoardPolicyDocument> = {{
{entries},
}}

export function getBoardPolicy(slug: string): BoardPolicyDocument {{
  const doc = boardPolicies[slug]
  if (!doc) throw new Error(`Unknown board policy: ${{slug}}`)
  return doc
}}
"""


def camel(slug: str) -> str:
    parts = slug.split("-")
    return parts[0] + "".join(p.title() for p in parts[1:])


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    slugs: list[str] = []
    for meta in POLICIES:
        extract_path = EXTRACTS / f'{meta["slug"]}.json'
        data = json.loads(extract_path.read_text(encoding="utf-8"))
        sections = parse_sections(data["paragraphs"], data["tables"], meta["mode"])
        out = OUT_DIR / f'{meta["slug"]}.ts'
        out.write_text(emit_policy_file(meta, sections), encoding="utf-8")
        slugs.append(meta["slug"])
        print(f'Wrote {out.name}: {len(sections)} sections')
    (OUT_DIR / "index.ts").write_text(emit_index(slugs), encoding="utf-8")
    print("Wrote index.ts")


if __name__ == "__main__":
    main()

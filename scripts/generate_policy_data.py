"""Generate policy data TypeScript files from docx JSON extracts."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def is_section_heading(text: str) -> bool:
    stripped = text.strip()
    if re.match(r"^\d+\.\s", stripped):
        return True
    headings = {
        "Introduction",
        "Grounds for filing a complaint",
        "How to raise complaints?",
        "Mechanism to handle customer complaints/ grievances",
        "Mechanism to handle customer complaints/ grievances ",
        "Complaint lodge / registration",
        "Resolution of Grievances",
        "ANNEXURE-Escalation Grid",
        "Complaint Management System",
    }
    return stripped in headings or stripped.startswith("5. ") or stripped.startswith("6. ") or stripped.startswith("7.")


def build_grievance_data(paras: list[str]) -> str:
    start = next(i for i, p in enumerate(paras) if p.strip() == "Introduction")
    content = [p for p in paras[start:] if p is not None]

    sections: list[dict] = []
    current: dict | None = None

    def flush():
        nonlocal current
        if current and current["blocks"]:
            sections.append(current)
        current = None

    def ensure_section(title: str, section_id: str):
        nonlocal current
        flush()
        current = {"id": section_id, "title": title, "blocks": []}

    def add_block(block: dict):
        if current is None:
            ensure_section("Introduction", "introduction")
        current["blocks"].append(block)

    i = 0
    while i < len(content):
        text = content[i]
        stripped = text.strip()
        if not stripped:
            i += 1
            continue

        if stripped == "Introduction":
            ensure_section("Introduction", "introduction")
            i += 1
            continue

        if stripped == "Grounds for filing a complaint":
            ensure_section("Grounds for filing a complaint", "grounds")
            i += 1
            continue

        if stripped == "How to raise complaints?":
            ensure_section("How to raise complaints?", "how-to-raise")
            i += 1
            continue

        if stripped.startswith("Mechanism to handle customer complaints"):
            ensure_section("Mechanism to handle customer complaints/ grievances", "mechanism")
            i += 1
            continue

        if stripped == "Complaint lodge / registration":
            add_block({"type": "subheading", "text": stripped})
            i += 1
            continue

        if stripped == "Resolution of Grievances":
            add_block({"type": "subheading", "text": stripped})
            i += 1
            continue

        if stripped.startswith("5. Treatment of Complaints"):
            ensure_section("5. Treatment of Complaints/Grievances/Enquiries etc.", "treatment")
            i += 1
            continue

        if stripped.startswith("6. Time frame"):
            ensure_section("6. Time frame", "time-frame")
            i += 1
            continue

        if stripped.startswith("7. Review Mechanism"):
            ensure_section("7. Review Mechanism", "review")
            i += 1
            continue

        if stripped == "ANNEXURE-Escalation Grid":
            ensure_section("ANNEXURE-Escalation Grid", "annexure")
            i += 1
            continue

        if stripped == "Complaint Management System":
            ensure_section("Complaint Management System", "cms")
            i += 1
            continue

        if stripped == "3.1 Channels of raising a complaint":
            add_block({"type": "subheading", "text": stripped})
            i += 1
            continue

        if stripped == "3.2 Content / information in Complaints":
            add_block({"type": "subheading", "text": stripped})
            i += 1
            continue

        if stripped == "Sl. No." and i + 2 < len(content) and content[i + 1].strip() == "Method of lodging a complaint":
            headers = [content[i].strip(), content[i + 1].strip(), content[i + 2].strip()]
            rows = []
            j = i + 3
            while j < len(content) and content[j].strip().endswith("."):
                row_no = content[j].strip()
                method = content[j + 1].strip() if j + 1 < len(content) else ""
                contact_parts = []
                j += 2
                while j < len(content):
                    nxt = content[j].strip()
                    if not nxt or nxt.startswith("3.2") or nxt.startswith("Mechanism"):
                        break
                    if re.match(r"^\d+\.$", nxt):
                        break
                    contact_parts.append(nxt)
                    j += 1
                rows.append([row_no, method, " ".join(contact_parts)])
            add_block({"type": "table", "headers": headers, "rows": rows})
            i = j
            continue

        if stripped.startswith("7.1") or stripped.startswith("7.2") or stripped.startswith("7.3"):
            add_block({"type": "subheading", "text": stripped})
            i += 1
            continue

        if stripped in {
            "Non-observance of directions issued by RBI to NBFCs,",
            "Non-adherence to any of the provisions of RBI guidelines on Fair Practices Code, issued from time to time.",
        }:
            if not current or current["blocks"] and current["blocks"][-1].get("type") != "list":
                add_block({"type": "list", "items": []})
            current["blocks"][-1]["items"].append(stripped)
            i += 1
            continue

        principle_starts = stripped.startswith("Customers shall") or stripped.startswith("All complaints") or stripped.startswith("Our employees") or stripped.startswith("To comply with regulatory")
        if current and current["id"] == "introduction" and principle_starts:
            if not current["blocks"] or current["blocks"][-1].get("type") != "list":
                add_block({"type": "list", "items": []})
            current["blocks"][-1]["items"].append(stripped)
            i += 1
            continue

        list_prefixes = (
            "Customer's full name",
            "Customer\u2019s full name",
            "Registered mobile number",
            "Loan ID allotted",
            "Specific details",
            "Registered E-mail",
            "Information pertaining",
            "Explanation of final",
            "Expected timelines",
            "Maintain contact",
            "Request for more",
        )
        if any(stripped.startswith(prefix) for prefix in list_prefixes):
            if not current["blocks"] or current["blocks"][-1].get("type") != "list":
                add_block({"type": "list", "items": []})
            current["blocks"][-1]["items"].append(stripped)
            i += 1
            continue

        if stripped.startswith("Note:"):
            add_block({"type": "note", "text": stripped})
            i += 1
            continue

        if stripped == "RBI CMS Portal Link:":
            link = content[i + 1].strip() if i + 1 < len(content) else ""
            add_block({"type": "paragraph", "text": stripped})
            add_block({"type": "link", "text": link, "href": link})
            i += 2
            continue

        if stripped == "Self-Guide Video link:":
            link = content[i + 1].strip() if i + 1 < len(content) else ""
            add_block({"type": "paragraph", "text": stripped})
            add_block({"type": "link", "text": link, "href": link})
            i += 2
            continue

        if stripped.startswith("http"):
            add_block({"type": "link", "text": stripped, "href": stripped})
            i += 1
            continue

        add_block({"type": "paragraph", "text": stripped})
        i += 1

    flush()

    lines = [
        'export type GrievanceBlock =',
        '  | { type: "paragraph"; text: string }',
        '  | { type: "subheading"; text: string }',
        '  | { type: "list"; items: string[] }',
        '  | { type: "note"; text: string }',
        '  | { type: "table"; headers: string[]; rows: string[][] }',
        '  | { type: "link"; text: string; href: string }',
        '',
        'export type GrievanceSection = {',
        '  id: string',
        '  title: string',
        '  blocks: GrievanceBlock[]',
        '}',
        '',
        'export const grievanceRedressalSections: GrievanceSection[] = [',
    ]

    for section in sections:
        lines.append('  {')
        lines.append(f'    id: {ts_string(section["id"])},')
        lines.append(f'    title: {ts_string(section["title"])},')
        lines.append('    blocks: [')
        for block in section["blocks"]:
            lines.append('      ' + json.dumps(block, ensure_ascii=False) + ',')
        lines.append('    ],')
        lines.append('  },')

    lines.append(']')
    lines.append('')
    return '\n'.join(lines)


def build_fpc_english_sections(paras: list[str]) -> list[dict]:
    start = next(i for i, p in enumerate(paras) if p.strip() == "1. INTRODUCTION")
    content = [p.strip() for p in paras[start:] if p and p.strip()]

    sections: list[dict] = []
    current_title = None
    current_id = None
    buffer: list[str] = []

    def flush_section():
        nonlocal buffer, current_title, current_id
        if not current_title:
            return
        section = {"id": current_id, "title": current_title, "icon": "fileText"}
        if current_id == "1":
            section["content"] = buffer[:]
        elif current_id == "2":
            section["intro"] = buffer[0]
            section["list"] = buffer[1:]
        elif current_id == "3":
            section["commitments"] = parse_commitments(buffer)
        elif current_id == "8":
            parsed = parse_section_8(buffer)
            section.update(parsed)
        elif current_id == "10":
            section["content"] = buffer[:]
        else:
            section["list"] = buffer[:]
        sections.append(section)
        buffer = []

    def parse_commitments(items: list[str]) -> list[dict]:
        commitments: list[dict] = []
        i = 0
        while i < len(items):
            text = items[i]
            if text.endswith('by:'):
                main = text
                subs = []
                i += 1
                while i < len(items) and not items[i][0].isupper() and not items[i].startswith('Help') and not items[i].startswith('Deal') and not items[i].startswith('Publicize'):
                    subs.append(items[i])
                    i += 1
                commitments.append({"main": main, **({"sub": subs} if subs else {})})
                continue
            if text.startswith('Deal quickly'):
                main = text
                subs = []
                i += 1
                while i < len(items) and items[i].endswith(';') or (i < len(items) and items[i] in [
                    'Correcting mistakes swiftly;',
                    "Handling customer's complaints at top most priority;",
                    'Providing guidance to customers on how to escalate their complaint further if they remain unsatisfied with the resolution.',
                ]):
                    subs.append(items[i])
                    i += 1
                commitments.append({"main": main, "sub": subs})
                continue
            commitments.append({"main": text})
            i += 1
        return commitments

    def parse_section_8(items: list[str]) -> dict:
        main = []
        nested = []
        note = None
        for item in items:
            low = item.lower()
            if low.startswith('the name and contact details') or low.startswith('if the complaint'):
                nested.append(item)
            elif low.startswith('the public notice'):
                note = item
            else:
                main.append(item)
        result = {"list": main}
        if nested:
            result["nestedListLead"] = (
                "The following information / public notice shall be displayed prominently and also on website, for the benefit of the customers, at all branches/ places of the Company, where business is transacted:"
            )
            result["nestedList"] = nested
        if note:
            result["note"] = note
        return result

    icon_map = {
        "1": "fileText",
        "2": "shield",
        "3": "users",
        "4": "fileText",
        "5": "scale",
        "6": "checkCircle",
        "7": "users",
        "8": "shield",
        "9": "scale",
        "10": "fileText",
    }

    for text in content:
        if re.match(r"^\d+\.\s", text):
            flush_section()
            current_title = text
            current_id = text.split('.', 1)[0]
            section_icon = icon_map.get(current_id, "fileText")
            continue
        if text == "***":
            flush_section()
            current_title = None
            current_id = None
            continue
        if current_title is None and text.startswith('The Company will abide'):
            sections.append({
                "id": "footer",
                "title": "",
                "icon": "fileText",
                "content": [text],
            })
            continue
        buffer.append(text)

    flush_section()
    for section in sections:
        section["icon"] = icon_map.get(section["id"], section.get("icon", "fileText"))
    return sections


def main():
    with open(ROOT / "grievance_extract.json", encoding="utf-8") as f:
        grievance_paras = json.load(f)
    with open(ROOT / "fpc_extract.json", encoding="utf-8") as f:
        fpc_paras = json.load(f)

    grievance_ts = build_grievance_data(grievance_paras)
    (ROOT / "src/app/lib/grievanceRedressalData.ts").write_text(grievance_ts, encoding="utf-8")

    fpc_sections = build_fpc_english_sections(fpc_paras)
    print("Generated grievance data")
    print("FPC sections:", len(fpc_sections))
    for s in fpc_sections:
        print(s["id"], s["title"][:50])

    # patch fairPracticeCodeData.ts english sections only
    fpc_path = ROOT / "src/app/lib/fairPracticeCodeData.ts"
    original = fpc_path.read_text(encoding="utf-8")

    def section_to_ts(section: dict, indent: str = "      ") -> str:
        lines = [f"{indent}{{"]
        lines.append(f'{indent}  id: {ts_string(section["id"])},')
        if section.get("title"):
            lines.append(f'{indent}  title: {ts_string(section["title"])},')
        lines.append(f'{indent}  icon: {ts_string(section["icon"])},')
        if section.get("content"):
            lines.append(f'{indent}  content: [')
            for p in section["content"]:
                lines.append(f'{indent}    {ts_string(p)},')
            lines.append(f'{indent}  ],')
        if section.get("intro"):
            lines.append(f'{indent}  intro: {ts_string(section["intro"])},')
        if section.get("list"):
            lines.append(f'{indent}  list: [')
            for item in section["list"]:
                lines.append(f'{indent}    {ts_string(item)},')
            lines.append(f'{indent}  ],')
        if section.get("commitments"):
            lines.append(f'{indent}  commitments: [')
            for c in section["commitments"]:
                lines.append(f'{indent}    {{')
                lines.append(f'{indent}      main: {ts_string(c["main"])},')
                if c.get("sub"):
                    lines.append(f'{indent}      sub: [')
                    for sub in c["sub"]:
                        lines.append(f'{indent}        {ts_string(sub)},')
                    lines.append(f'{indent}      ],')
                lines.append(f'{indent}    }},')
            lines.append(f'{indent}  ],')
        if section.get("nestedListLead"):
            lines.append(f'{indent}  nestedListLead: {ts_string(section["nestedListLead"])},')
        if section.get("nestedList"):
            lines.append(f'{indent}  nestedList: [')
            for item in section["nestedList"]:
                lines.append(f'{indent}    {ts_string(item)},')
            lines.append(f'{indent}  ],')
        if section.get("note"):
            lines.append(f'{indent}  note: {ts_string(section["note"])},')
        lines.append(f'{indent}}},')
        return "\n".join(lines)

    english_sections_ts = "\n".join(section_to_ts(s) for s in fpc_sections if s["id"] != "footer")
    footer = next((s for s in fpc_sections if s["id"] == "footer"), None)

    pattern = r'(code: "en"[\s\S]*?sections: \[)([\s\S]*?)(\n    \],\n  \},\n  \{\n    code: "hi")'
    replacement = r'\1\n' + english_sections_ts + r'\3'
    updated = re.sub(pattern, replacement, original, count=1)

    if footer and footer.get("content"):
        # append footer paragraph to section 10 content
        updated = updated.replace(
            'id: "10"',
            'id: "10"',
        )
        # Section 10 already has content; add footer there manually via script output
        sec10_content = [s for s in fpc_sections if s["id"] == "10"][0]["content"]
        sec10_content.extend(footer["content"])
        english_sections_ts = "\n".join(section_to_ts(s) for s in fpc_sections if s["id"] != "footer")
        # rebuild section 10 with footer
        for s in fpc_sections:
            if s["id"] == "10" and footer:
                s["content"].extend(footer["content"])
        english_sections_ts = "\n".join(section_to_ts(s) for s in fpc_sections if s["id"] != "footer")
        updated = re.sub(pattern, r'\1\n' + english_sections_ts + r'\3', original, count=1)

    fpc_path.write_text(updated, encoding="utf-8")
    print("Updated fairPracticeCodeData.ts")


if __name__ == "__main__":
    main()

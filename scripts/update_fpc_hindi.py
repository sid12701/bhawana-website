"""Update Hindi Fair Practice Code data from extracted DOCX paragraphs."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def ts_string(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def main() -> None:
    paras = json.loads((ROOT / "fpc_hindi_extract.json").read_text(encoding="utf-8"))
    start = next(i for i, p in enumerate(paras) if p.strip().startswith("1."))
    content = paras[start:]

    sections: list[dict] = []
    current: str | None = None
    buffer: list[str] = []

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

    def flush() -> None:
        nonlocal current, buffer
        if not current:
            return
        sec_id = current.split(".", 1)[0]
        section: dict = {
            "id": sec_id,
            "title": current,
            "icon": icon_map.get(sec_id, "fileText"),
        }
        if sec_id in {"1", "10"}:
            section["content"] = buffer[:]
        else:
            section["list"] = buffer[:]
        sections.append(section)
        buffer = []

    for text in content:
        if re.match(r"^\d+\.\s", text.strip()):
            flush()
            current = text.strip()
            continue
        buffer.append(text)

    flush()

    lines: list[str] = []
    for section in sections:
        lines.append("      {")
        lines.append(f'        id: {ts_string(section["id"])},')
        lines.append(f'        title: {ts_string(section["title"])},')
        lines.append(f'        icon: {ts_string(section["icon"])},')
        if section.get("content"):
            lines.append("        content: [")
            for paragraph in section["content"]:
                lines.append(f"          {ts_string(paragraph)},")
            lines.append("        ],")
        if section.get("list"):
            lines.append("        list: [")
            for item in section["list"]:
                lines.append(f"          {ts_string(item)},")
            lines.append("        ],")
        lines.append("      },")

    hindi_sections_ts = "\n".join(lines)
    fpc_path = ROOT / "src/app/lib/fairPracticeCodeData.ts"
    original = fpc_path.read_text(encoding="utf-8")

    pattern = r'(code: "hi"[\s\S]*?sections: \[)([\s\S]*?)(\n    \],\n  \},\n\])'
    updated = re.sub(pattern, r"\1\n" + hindi_sections_ts + r"\n    \3", original, count=1)
    updated = updated.replace(
        '    languageTag: "hi",\n    sections:',
        '    languageTag: "hi",\n'
        '    downloadHref: "/policies/fair-practice-code-hindi.pdf",\n'
        '    downloadLabel: "Download Fair Practice Code (Hindi PDF)",\n'
        "    sections:",
    )
    fpc_path.write_text(updated, encoding="utf-8")
    print(f"Updated {len(sections)} Hindi sections")


if __name__ == "__main__":
    main()

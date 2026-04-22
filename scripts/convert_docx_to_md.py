#!/usr/bin/env python3
"""
Convert .docx files in the docs/ directory to .md files in the same directory.
This script uses mammoth to convert DOCX -> HTML, then markdownify to convert HTML -> Markdown.
It preserves basic structure and writes UTF-8 encoded .md files with the same basename.
"""
import os
from pathlib import Path

try:
    import mammoth
except Exception:
    print("mammoth not installed")
    raise

try:
    from markdownify import markdownify as md
except Exception:
    print("markdownify not installed")
    raise

ROOT = Path("/Users/ravi/Desktop/AI OS/ai-future-os")
DOCS_DIR = ROOT / "docs"

if not DOCS_DIR.exists():
    print(f"Docs directory does not exist: {DOCS_DIR}")
    raise SystemExit(1)

count = 0
for docx_path in DOCS_DIR.glob("*.docx"):
    md_path = docx_path.with_suffix('.md')
    print(f"Converting: {docx_path} -> {md_path}")
    with docx_path.open('rb') as f:
        result = mammoth.convert_to_html(f)
        html = result.value  # The generated HTML
        messages = result.messages
        if messages:
            print('Mammoth messages:')
            for m in messages:
                print(' -', m)
    # Convert HTML to Markdown
    markdown = md(html, heading_style="ATX")
    # Simple cleanup: strip leading/trailing whitespace
    markdown = markdown.strip() + "\n"
    with md_path.open('w', encoding='utf-8') as out:
        out.write(markdown)
    count += 1

print(f"Done. Converted {count} files.")

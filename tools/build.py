#!/usr/bin/env python3
"""Bundle src/ into self-contained HTML files.

dist/family-voting-guide.html  full standalone page to text, email or open offline
dist/artifact.html             same page without the document shell, for publishing as a hosted artifact
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
DIST = ROOT / "dist"


def bundle() -> str:
    page = (SRC / "template.html").read_text()
    for marker, name in [("/*STYLES*/", "styles.css"), ("/*DISTRICTS*/", "districts.js"),
                         ("/*CONTENT*/", "content.js"), ("/*APP*/", "app.js")]:
        body = (SRC / name).read_text()
        if name.endswith(".js"):
            body = body.replace("</script", "<\\/script")
        page = page.replace(marker, body, 1)
    return page


def main() -> None:
    DIST.mkdir(exist_ok=True)
    fragment = bundle()
    (DIST / "artifact.html").write_text(fragment)
    standalone = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
                  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
                  + fragment + "\n</html>\n")
    (DIST / "family-voting-guide.html").write_text(standalone)
    print(f"built {len(standalone):,} bytes")


if __name__ == "__main__":
    main()

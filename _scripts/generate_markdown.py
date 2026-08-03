#!/usr/bin/env python3
"""
Post-build step: generate .md companion files for every HTML page in _site/,
then append a page index to _site/llms.txt.

Run after `bundle exec jekyll build`:
    python _scripts/generate_markdown.py

Output:
    _site/index.md, _site/blog/post-title/index.md, etc.
    Appended ## Pages section in _site/llms.txt
"""

from pathlib import Path
from bs4 import BeautifulSoup
import html2text

SITE_URL = "https://www.lambdalatitudinarians.org"
SITE_DIR = Path("_site")

# Pages that produce no useful markdown
SKIP_URL_PREFIXES = (
    "/java-applet-player/",
    "/feed/",
)


def make_converter() -> html2text.HTML2Text:
    h = html2text.HTML2Text()
    h.ignore_links = False
    h.body_width = 0       # no line-wrapping
    h.unicode_snob = True  # real Unicode instead of HTML entities
    h.protect_links = True
    h.ignore_images = False
    return h


def extract_content(html_path: Path, conv: html2text.HTML2Text) -> tuple[str, str]:
    """Return (page_title, markdown_body) for one HTML file."""
    with open(html_path, encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    title_tag = soup.find("h1") or soup.title
    title = title_tag.get_text(strip=True) if title_tag else ""

    # Default layout wraps content in <div class="content container">
    content_el = soup.find("div", class_="content")
    # Resume layout has no wrapper — fall back to body
    if not content_el:
        content_el = soup.find("body")
    if not content_el:
        return title, ""

    return title, conv.handle(str(content_el))


def url_for(html_path: Path) -> str:
    rel = html_path.relative_to(SITE_DIR)
    if rel.name == "index.html":
        parent = str(rel.parent)
        return "/" if parent == "." else f"/{parent}/"
    return "/" + str(rel)


def md_path_for(html_path: Path) -> Path:
    if html_path.name == "index.html":
        return html_path.parent / "index.md"
    return html_path.with_suffix(".md")


def md_url_for(url: str) -> str:
    if url.endswith("/"):
        return f"{SITE_URL}{url}index.md"
    return f"{SITE_URL}{url.replace('.html', '.md')}"


def main() -> None:
    conv = make_converter()
    pages: list[tuple[str, str]] = []  # (url, title)

    for html_path in sorted(SITE_DIR.rglob("*.html")):
        url = url_for(html_path)

        if any(url.startswith(p) for p in SKIP_URL_PREFIXES):
            continue
        # Skip paths containing underscored segments (e.g. _site/_layouts if
        # they somehow end up there)
        if any(part.startswith("_") for part in html_path.relative_to(SITE_DIR).parts):
            continue

        title, content = extract_content(html_path, conv)
        if not content.strip():
            continue

        md_path = md_path_for(html_path)
        header = (
            f"> [LLM context index]({SITE_URL}/llms.txt)"
            f" · [Nathan Contino bio]({SITE_URL}/nathan-contino.md)\n\n"
        )

        with open(md_path, "w", encoding="utf-8") as f:
            f.write(header)
            f.write(content)

        pages.append((url, title))

    # Append a page index to llms.txt so LLMs know what's here
    llms_path = SITE_DIR / "llms.txt"
    with open(llms_path, "a", encoding="utf-8") as f:
        f.write("\n\n## Pages\n\n")
        for url, title in sorted(pages):
            label = title if title else url
            f.write(f"- [{label}]({md_url_for(url)})\n")

    print(f"Generated {len(pages)} markdown files, updated llms.txt")


if __name__ == "__main__":
    main()

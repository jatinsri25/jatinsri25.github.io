"""Check static navigation, local assets, metadata and preserved destinations."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]


class Document(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = set()
        self.refs = []
        self.hrefs = set()
        self.meta = {}
        self.headings = 0
        self.title = False
        self.errors = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            if attrs["id"] in self.ids:
                self.errors.append(f"Duplicate id: {attrs['id']}")
            self.ids.add(attrs["id"])
        if tag == "a":
            self.hrefs.add(attrs.get("href", ""))
        for name in ("href", "src"):
            if name in attrs:
                self.refs.append(attrs[name])
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property"))] = attrs.get("content")
        if tag == "h1":
            self.headings += 1
        if tag == "title":
            self.title = True
        if tag == "script" and attrs.get("type") != "application/ld+json":
            self.errors.append("Unexpected browser JavaScript")
        if tag == "img" and not attrs.get("alt"):
            self.errors.append("Image lacks alternative text")


pages = [ROOT / "index.html", ROOT / "links.html", ROOT / "404.html", *sorted((ROOT / "work").glob("*.html"))]
docs = {path: Document(path) for path in pages}
errors = []
all_hrefs = set()
count = 0
for path, doc in docs.items():
    errors += [f"{path.name}: {message}" for message in doc.errors]
    all_hrefs.update(doc.hrefs)
    if doc.headings != 1 or not doc.title:
        errors.append(f"{path.name}: expected one H1 and a title")
    for name in ("description", "viewport", "og:title", "og:description", "og:url", "og:type"):
        if not doc.meta.get(name):
            errors.append(f"{path.name}: missing {name}")
    for href in doc.refs:
        url = urlsplit(href)
        if url.scheme or url.netloc:
            continue
        count += 1
        target = ROOT / unquote(url.path).lstrip("/") if url.path.startswith("/") else path.parent / unquote(url.path)
        if not url.path:
            target = path
        if target.is_dir():
            target /= "index.html"
        target = target.resolve()
        if not target.is_file():
            errors.append(f"{path.name}: missing local destination {href}")
        elif url.fragment and target in docs and unquote(url.fragment) not in docs[target].ids:
            errors.append(f"{path.name}: missing anchor {href}")
    if re.search(r"9569452553|tel:", path.read_text()):
        errors.append(f"{path.name}: phone number should not appear in page content")

for label, href in json.loads((ROOT / "docs/preserved-links.json").read_text()).items():
    if href not in all_hrefs:
        errors.append(f"Original link lost: {label}: {href}")

for anchor in ("home", "about", "projects", "experience", "skills", "contact"):
    if anchor not in docs[ROOT / "index.html"].ids:
        errors.append(f"Original home anchor lost: {anchor}")

if errors:
    print("\n".join(errors))
    sys.exit(1)
print(f"PASS: {len(pages)} pages; {count} local references; all original navigation links and anchors preserved.")

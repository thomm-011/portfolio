"""Prepare cache-safe asset URLs for the static GitHub Pages publication."""
import hashlib
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
page = root / 'index.html'
content = page.read_text()
for stem, extension, attribute in [('styles', 'css', 'href'), ('main', 'js', 'src')]:
    source = root / f'{stem}.{extension}'
    digest = hashlib.sha256(source.read_bytes()).hexdigest()[:12]
    filename = f'{stem}.{digest}.{extension}'
    (root / filename).write_bytes(source.read_bytes())
    pattern = rf'{attribute}="{stem}(?:\.[a-f0-9]{{12}})?\.{extension}"'
    content, count = re.subn(pattern, f'{attribute}="{filename}"', content)
    if count != 1:
        raise RuntimeError(f'Expected one {stem} reference, found {count}')
    print(filename)
page.write_text(content)

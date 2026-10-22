#!/usr/bin/env python3
"""Assemble the served pages from their templates.

- template.html               -> index.html
- src/work-project-system.html -> work/project-system.html   (noindex, unlinked)
- inlines the outlined wordmark paths and the favicon from src/
- stamps every assets/… link (also ../assets/…) with a content hash (?v=…) so a
  changed stylesheet or script always reaches returning visitors despite the
  1-year cache set in .htaccess
- drops anything between <!-- build:omit … /build:omit --> (unreleased sections)
"""
import hashlib, os, re

d = open('src/wm.d').read(); vb = open('src/wm.vb').read(); tr = open('src/wm.tr').read()
mark = open('src/mark.b64').read()

PAGES = [('template.html', 'index.html'),
         ('src/work-project-system.html', 'work/project-system.html')]

for src, out in PAGES:
    t = open(src, encoding='utf-8').read()
    stamped = []
    def stamp(m):
        attr, up, path = m.group(1), m.group(2), m.group(3)
        h = hashlib.sha1(open(path, 'rb').read()).hexdigest()[:8]
        stamped.append(f'{up}{path}?v={h}')
        return f'{attr}="{up}{path}?v={h}"'
    t = re.sub(r'(href|src)="((?:\.\./)*)(assets/(?:css|js)/[^"?]+)"', stamp, t)
    t = re.sub(r'\s*<!-- build:omit.*?/build:omit -->', '', t, flags=re.S)
    t = t.replace('__WM_VB__', vb).replace('__WM_TR__', tr).replace('__WM_D__', d).replace('__MARK_B64__', mark)
    os.makedirs(os.path.dirname(out) or '.', exist_ok=True)
    open(out, 'w', encoding='utf-8', newline='\n').write(t)
    print(out, len(t), 'bytes')
    for s in stamped: print('  ', s)

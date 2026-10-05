#!/usr/bin/env python3
"""Assemble index.html from template.html.

- inlines the outlined wordmark paths and the favicon from src/
- stamps every assets/… link with a content hash (?v=…) so a changed
  stylesheet or script always reaches returning visitors despite the
  1-year cache set in .htaccess
"""
import hashlib, re

d = open('src/wm.d').read(); vb = open('src/wm.vb').read(); tr = open('src/wm.tr').read()
mark = open('src/mark.b64').read()
t = open('template.html').read()

stamped = []
def stamp(m):
    attr, path = m.group(1), m.group(2)
    h = hashlib.sha1(open(path, 'rb').read()).hexdigest()[:8]
    stamped.append(f'{path}?v={h}')
    return f'{attr}="{path}?v={h}"'
t = re.sub(r'(href|src)="(assets/[^"?]+)"', stamp, t)

t = t.replace('__WM_VB__', vb).replace('__WM_TR__', tr).replace('__WM_D__', d).replace('__MARK_B64__', mark)
open('index.html', 'w').write(t)
print('index.html', len(t), 'bytes')
for s in stamped: print('  ', s)

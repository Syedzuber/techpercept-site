#!/usr/bin/env python3
"""Assemble index.html from the template, inlining the outlined wordmark and the favicon."""
d = open('src/wm.d').read(); vb = open('src/wm.vb').read(); tr = open('src/wm.tr').read()
mark = open('src/mark.b64').read()
t = open('template.html').read()
import hashlib
css_hash = hashlib.sha1(open('styles.css','rb').read()).hexdigest()[:8]
t = t.replace('href="styles.css"', f'href="styles.css?v={css_hash}"')
t = t.replace('__WM_VB__', vb).replace('__WM_TR__', tr).replace('__WM_D__', d).replace('__MARK_B64__', mark)
open('index.html','w').write(t)
print('index.html', len(t), 'bytes | styles.css?v=' + css_hash)

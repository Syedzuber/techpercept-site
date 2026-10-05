# techpercept.com

The Techpercept website. One static page, no build step required to deploy — `index.html` at the repo root is what Hostinger serves.

## Layout

```
index.html        ← the deployed page (generated — do not hand-edit)
template.html     ← the page's markup and script: edit THIS
styles.css        ← all CSS, design-system tokens at the top: edit THIS
build.py          ← assembles index.html; stamps styles.css with a cache-busting hash
src/              ← outlined wordmark paths, favicon, logo SVGs
.htaccess         ← Hostinger/Apache: HTTPS redirect, caching, security headers
```

`index.html` is checked in so Hostinger can deploy without running Python. After any edit to `template.html` **or `styles.css`**, run `python3 build.py` and commit the changed files plus `index.html` — the build stamps the stylesheet link with a content hash, so a CSS change always reaches returning visitors.

## Before first launch — fill the config block

At the bottom of `template.html`, inside `<script>`, there is a labelled block:

```js
var ZOHO_WEBTOLEAD_URL = "";   // Zoho CRM → Setup → Developer Space → Web Forms → the form's action URL
var CALENDLY_URL = "";         // https://calendly.com/…
var WHATSAPP = "";             // +91 …
var EMAIL = "";                // hello@techpercept.com
```

Until `ZOHO_WEBTOLEAD_URL` is set, the form refuses to submit and shows a note — on purpose, so a leaking contact form never goes live on a RevOps firm's site. Fill all four, run `python3 build.py`, commit.

## Deploy to Hostinger (GitHub → hPanel, auto-deploy)

Hostinger's Git integration pulls directly from GitHub and redeploys on every push to the chosen branch.

1. Push this repo to GitHub (see below). A **private** repo is fine — Hostinger authorises via GitHub OAuth.
2. In Hostinger: **Websites → Dashboard** (next to techpercept.com) → sidebar **Advanced → Git**.
3. **Connect with GitHub**, authorise the Hostinger app, pick this repository, **Next**.
4. Settings: **Branch** `main` · **Root directory** `public_html` (the default — the repo root maps to the site root, which is exactly what we want since `index.html` is at the root).
5. **Deploy.** First deploy takes a minute. Open techpercept.com.
6. Confirm the **Auto-deployment** toggle beside the repo is on. From now on, `git push` is the deploy.

**Gotcha:** connecting the repo overwrites whatever is already in `public_html`. If there's an old site there, that's intended — but back it up first if you want it.

**Redeploy / history:** the same Git screen has **Redeploy** (manual) and **All deployments** (branch, commit, time, status) — useful when something looks stale.

## First push

```bash
cd techpercept-site
git init
git add .
git commit -m "Techpercept site — Direction C, design system v1"
git branch -M main
git remote add origin git@github.com:<your-user>/techpercept-site.git
git push -u origin main
```

## Launch checklist

- [ ] Four config values filled, `build.py` run, committed
- [ ] Deployed; techpercept.com loads over HTTPS
- [ ] Opened on your own phone — the road stacks, nothing clips
- [ ] Submitted the form once yourself; lead appears in Zoho
- [ ] Clicked every nav link and the calendar link
- [ ] Favicon shows in the tab
- [ ] *Then* post the LinkedIn announcement

## Editing afterwards

Copy and structure live in `template.html`; every style lives in `styles.css`. Colours are CSS variables in the first block of `styles.css`, named after the Techpercept design system (`--leak`, `--signal`, `--signal-text`, `--ink`, `--paper`…). Change a token there and it changes everywhere. Rebuild, commit, push.

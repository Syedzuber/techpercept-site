# techpercept.com

The Techpercept website. One static page, no build step required to deploy — `index.html` at the repo root is what Hostinger serves.

## Layout

```
index.html              ← the deployed page (generated — do not hand-edit)
template.html           ← the page's markup: edit THIS
assets/css/styles.css   ← all CSS, design-system tokens at the top: edit THIS
assets/js/config.js     ← YOUR file: launch values + hero enquiry sources. Nothing else touches it
assets/js/scenarios.js  ← the four Act I businesses (page copy)
assets/js/main.js       ← road engine, form wiring, hero source rotation
build.py                ← assembles index.html; stamps every assets/ link with a content hash
src/                    ← outlined wordmark paths, favicon, logo SVGs (build inputs; not served)
.htaccess               ← Hostinger/Apache: HTTPS redirect, caching, security headers
```

`index.html` is checked in so Hostinger can deploy without running Python. After any edit to `template.html` **or anything under `assets/`**, run `python3 build.py` and commit the changed files plus `index.html` — the build stamps each asset link with a content hash, so a CSS or JS change always reaches returning visitors despite the 1-year browser cache.

## Before first launch — fill the config block

`assets/js/config.js` holds everything site-specific:

```js
window.TP_CONFIG = {
  ZOHO_WEBTOLEAD_URL: "https://crm.zoho.in/crm/WebToLeadForm",  // Zoho CRM → Setup → Channels → Webforms → your form → </> Source code
  ZOHO_XNQSJSDP: "",        // the hidden input named xnQsjsdp in that source
  ZOHO_XMIWTLD: "",         // the hidden input named xmIwtLD
  ZOHO_RETURN_URL: "https://techpercept.com/?sent=1",  // the site shows a thank-you note on ?sent=1
  CALENDLY_URL: "",         // https://calendly.com/…
  WHATSAPP: "",             // +91 …
  EMAIL: "",                // hello@techpercept.com
  SOURCES: ["IndiaMART", "WhatsApp", "Instagram", "Google", "JustDial"],  // hero: "Enquiry arrives on …"
  SOURCE_EVERY: 3000
};
```

Until the three `ZOHO_*` values are set, the form refuses to submit and shows a note — on purpose, so a leaking contact form never goes live on a RevOps firm's site. Fill all four, run `python3 build.py`, commit.

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

- [ ] Four config values filled in `assets/js/config.js`, `build.py` run, committed
- [ ] Deployed; techpercept.com loads over HTTPS
- [ ] Opened on your own phone — the road stacks, nothing clips
- [ ] Submitted the form once yourself; lead appears in Zoho
- [ ] Clicked every nav link and the calendar link
- [ ] Favicon shows in the tab
- [ ] *Then* post the LinkedIn announcement

## Act I — the four businesses

Act I is one road with a switch. The copy for all four businesses (has no system / bought a system / outgrew its system / has four systems) lives in `assets/js/scenarios.js` as `TP_SCENARIOS`; the markup in `template.html` is empty slots. To change a caption, edit the text there and rebuild. To add a fifth, add an object — but don't: four is the number of discovery-call archetypes, and a fifth chip turns the row into a dropdown. Every scenario that isn't a real client keeps its "A composite." tag.

## Editing afterwards

Copy and structure live in `template.html`; every style lives in `assets/css/styles.css`; behaviour in `assets/js/main.js`. Colours are CSS variables in the first block of the stylesheet, named after the Techpercept design system (`--leak`, `--signal`, `--signal-text`, `--ink`, `--paper`…). Change a token there and it changes everywhere. Rebuild, commit, push.

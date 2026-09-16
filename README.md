# nexolash.com

Static multi-page site for Nexolash. No build step, no dependencies — plain HTML, one stylesheet, one script.

Visual direction: **"Signal"** — refined dark technical. Space Grotesk (display) + IBM Plex Sans (body), hairline 1px grid, gradient used only as a rule, never a background wash.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — both divisions |
| `software.html` | Software Engineering — custom software, web apps, AI & automation |
| `interiors.html` | Interiors & Construction — India |
| `about.html` | About the company |
| `contact.html` | Contact details + enquiry form |

## Design tokens

All in `assets/styles.css` under `:root`. The two divisions differ only by one accent variable:

- `body.d-software` → `--accent: var(--blue)` (#5B9CFF)
- `body.d-interior` → `--accent: var(--green)` (#4ADE80)

Nothing else forks between divisions, so a change to the system applies everywhere.

## Before going live — fill these in

- `+91 00000 00000` in `contact.html` (both the visible text and the `tel:` link)
- `hello@nexolash.com` → real general/software address
- `projects@nexolash.com` → real interiors address

```bash
# macOS
grep -rl "00000 00000" . | xargs sed -i '' 's/+910000000000/+919876543210/g; s/+91 00000 00000/+91 98765 43210/g'
# Linux: drop the '' after -i
```

## Contact form

The form currently opens the visitor's email client pre-filled (`data-mailto` in `contact.html`, handled in `assets/main.js`). Zero setup, works everywhere, but loses anyone without a mail client configured.

For submissions straight to your inbox, use [Formspree](https://formspree.io) (free tier is enough):

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

Remove `data-mailto` and `novalidate` when you do. On Netlify, add `netlify` to the form tag instead.

## Deploying

**Netlify / Cloudflare Pages / Vercel** — connect this repo, leave the build command empty, publish directory `/`. Then point `nexolash.com` at it.

**GitHub Pages** — Settings → Pages → deploy from `main`, folder `/ (root)`. Add a `CNAME` file containing `nexolash.com` and set the DNS records GitHub gives you.

Note: the current nexolash.com runs on GoDaddy Website Builder, which can't serve these files. You'll need to move the domain off Website Builder before pointing it at any of the above.

## Photos

The interiors page converts far better with real project photos. Drop them in `assets/` and swap them into the service plates — six to eight good site photos makes a large difference.

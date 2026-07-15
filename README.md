# Siddhardha — Portfolio Site

A single-page portfolio built with plain HTML/CSS/JS — no build step, no framework,
so it deploys to Vercel as-is.

## What's inside
``` 
index.html        → all page content and sections
css/style.css      → all styling
js/script.js       → nav toggle, project-card hover/tap, contact form
assets/            → put resume.pdf and any project images here
vercel.json        → basic static hosting config
```

## Before you deploy — 2 things to check
1. **Resume**: drop your real resume into `assets/` named exactly `resume.pdf`
   (delete `PUT-YOUR-RESUME-HERE.txt` once you do).
2. **LinkedIn posts**: the "On LinkedIn" section uses 3 placeholder post cards
   styled like real LinkedIn posts (text + like/comment/repost counts). LinkedIn
   blocks automated fetching of your feed, so open `index.html`, search for
   `li-card`, and swap in your actual post text and numbers.

Your photo (background removed) is already in `assets/profile.png` and wired
into the hero section. To swap it for a different shot later, replace that
file with another background-removed PNG of the same name.

Your email (kvsaisiddhardha2117@gmail.com), LinkedIn, and GitHub links are already
wired up in the nav-adjacent contact section and footer.

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```bash
npm i -g vercel
cd this-folder
vercel
```
Follow the prompts (accept defaults — it's a static site, no build command needed).

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → "Add New Project" → import that repo.
3. Framework preset: "Other" (static). Leave build command empty, output directory `.`.
4. Click Deploy.

## Contact form note
The contact form currently opens the visitor's email app with a pre-filled message
(no backend required). If you'd rather have messages land straight in an inbox
without the visitor's email client popping up, sign up at a form-backend service
like Formspree, point the form at your new endpoint, and swap the JS submit handler
for a normal `fetch()` POST. This is optional — the mailto version works out of the box.

# ProOrient — Professional Orientation System

A web application for professional (career) orientation based on the **RIASEC / Holland** model. Built as a bachelor's final project: _"Development of an Electronic System for Professional Orientation."_

The app guides a user through a 24-question interest assessment, computes a three-letter RIASEC code, visualizes the result on Holland's hexagon, and recommends matching occupations. It is organized as a small multi-page site (Home, About RIASEC, The Types, Methodology, System) plus the test and results flow.

## Tech stack

- **React 18** + **Vite** (fast build, zero-config deploy)
- Pure client-side scoring engine (no backend required)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build      # output goes to /dist
npm run preview    # preview the production build locally
```

## Deploy to Vercel (GitHub method)

1. Create a new repository on GitHub and push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: ProOrient RIASEC app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/proorient.git
   git push -u origin main
   ```

2. Go to https://vercel.com → **Add New… → Project**.
3. Import your `proorient` repository.
4. Vercel auto-detects **Vite**. Leave the defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. In ~1 minute you'll get a live URL like `https://proorient.vercel.app`.

That's it — every future `git push` to `main` redeploys automatically.

## Project structure

```
proorient/
├── index.html              # Vite entry HTML
├── package.json            # dependencies & scripts
├── vite.config.js          # Vite + React plugin
├── vercel.json             # SPA routing for Vercel
├── .gitignore
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # routing + layout shell
    ├── index.css           # global base styles
    ├── data/               # static content (no logic)
    │   ├── types.js        # the six RIASEC types
    │   ├── questions.js    # 24 questions + Likert scale
    │   ├── occupations.js  # occupation database
    │   └── content.js      # methodology / architecture text
    ├── lib/                # logic & shared helpers
    │   ├── riasec.js       # pure scoring engine
    │   ├── router.js       # tiny hash router
    │   └── theme.js        # style tokens + global CSS
    ├── components/         # reusable UI pieces
    │   ├── NavBar.jsx
    │   ├── Footer.jsx
    │   ├── TypeCard.jsx
    │   └── Hexagon.jsx
    └── pages/              # one file per page
        ├── Home.jsx
        ├── About.jsx
        ├── Types.jsx
        ├── Methodology.jsx
        ├── Architecture.jsx
        ├── Test.jsx
        └── Results.jsx
```

The scoring logic in `src/lib/riasec.js` is plain JavaScript with no React or DOM
dependencies, so it is easy to read and could be unit-tested on its own.

## Scope note

This is a **front-end prototype**: the RIASEC scoring algorithm runs entirely in the browser, and the occupation list is a curated sample. The full system described in the thesis (PostgreSQL database, FastAPI backend, JWT authentication, server-side PDF report generation, and the complete O\*NET dataset of 900+ occupations) would extend this front end with a backend service.

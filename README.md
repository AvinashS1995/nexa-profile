# nexa-profile
NexaProfile is a modern personal portfolio app built with Angular 18 standalone components, Angular Material, and Sass (SCSS). It showcases skills, projects, and experience with responsive design, interactive charts, and recruiter‑friendly UI optimized for real‑world presentation.

# NexaProfile

## What It Is
NexaProfile is an Angular 18 + Tailwind 3 portfolio shell that mirrors the original NexaProfile design. It uses data-driven sections (hero, about, skills, experience, education, projects, services, contact) and router fragments so deep links such as `/home#projects` scroll to the right section.

## Tech Stack
- **Angular 18 (standalone components + router)**
- **Tailwind CSS 3.4**, configured via `tailwind.config.js` and `postcss.config.cjs`
- **Font Awesome + tw-animate-css** for icons and animations
- **Local data** in `src/app/data/portfolio-data.ts` and a `PortfolioService` that feeds every component

## Project Flow
1. Run `npm install` to pull Angular/Tailwind/PostCSS dependencies.
2. Use `npm run build` to compile the router + PostCSS pipeline (ideal before creating a release).
3. Run `npm start` (or `ng serve`) to open `http://localhost:4200/home`; the router outlet renders `HomePageComponent`, which scrolls to fragments.

## Key Files
- `src/app/components/*` – UI sections
- `src/app/pages/home-page/*` – route entry point & fragment handling
- `src/app/services/portfolio.service.ts` – shared portfolio payload
- `src/styles/globals.css` – Tailwind theme tokens and baseline styling
- `src/assets/nexa-profile-logo.png` – navbar brand mark used before “NexaProfile”

## How To Use
- Drop the official NexaProfile logo at `src/assets/nexa-profile-logo.png` (per `src/assets/README.md`).
- Navigate via the top nav buttons to trigger `router.navigate(['/home'], { fragment })`.
- Customize `portfolioData` for new skills, experience, and projects.

## Tips
- If you see “unknown `@tailwind`” errors, rerun `npm install` to ensure Tailwind/PostCSS are installed.
- The navbar is styled with gradient text and includes the logo + “NexaProfile” text aligned inline.

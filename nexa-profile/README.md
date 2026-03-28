# NexaProfile

NexaProfile is an Angular 18 + Tailwind 3 portfolio experience that mirrors the branded landing page while using router fragments, standalone components, and a shared data model so every section (hero, about, skills, experience, education, projects, services, contact) renders consistently.

## What to expect
1. Router-driven navigation with `/home` as the landing route and fragment-aware scrolling handled inside `HomePageComponent`.
2. Standalone components under `src/app/components/` for each section, each receiving structured data from `portfolioData`.
3. Tailwind CSS 3.4.19 configured via `tailwind.config.js` + `postcss.config.cjs`, plus theme tokens and gradients in `src/styles/globals.css`.
4. A shared `PortfolioService` that exposes the mock data, used by the nav footer and routed page.
5. A nav button that shows the NexaProfile mark (drop it at `src/assets/nexa-profile-logo.png`) alongside the name.

## Tech flow
- `npm install` pulls Angular CLI, Tailwind, PostCSS, Autoprefixer, and supporting runtime dependencies.
- `npm run build` verifies the PostCSS/Tailwind pipeline + router layout compile cleanly.
- `npm start` / `ng serve` opens `http://localhost:4200/home`; the nav buttons call `router.navigate(['/home'], { fragment })` so deep links work.

## Key files
| Path | Purpose |
| --- | --- |
| `src/app/data/portfolio-data.ts` | Portfolio payload consumed by every section. |
| `src/app/services/portfolio.service.ts` | Provides the portfolio object via dependency injection. |
| `src/app/pages/home-page/*` | Houses `HomePageComponent` and handles router fragments with `ViewportScroller`. |
| `tailwind.config.js` + `postcss.config.cjs` | Tailwind/PostCSS configuration for the Angular builder. |
| `src/styles.css` / `src/styles/globals.css` | Import Tailwind and define the color/theme tokens, typography, and base styles. |

## Customization tips
- Replace `portfolioData` entries to showcase your skills, experience, or services.
- Drop the provided NexaProfile logo at `src/assets/nexa-profile-logo.png`; the navbar already uses it next to the title.
- If the CLI complains about `@tailwind` rules, rerun `npm install` so the toolchain is installed before running the dev server.

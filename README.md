# NexaProfile

A data-driven, one-page portfolio built with **Angular 18**, **Tailwind CSS 3.4.19**, and standalone components. The layout pulls every hero, about, skills, experience, education, projects, services, and contact entry from `src/app/data/portfolio-data.ts` so the experience mirrors the real-world resume of Avinash Suryawanshi while keeping the structure consistent for future content updates.

![Angular 18.2.0](https://img.shields.io/badge/Angular-18.2.0-red)
![Tailwind CSS 3.4.19](https://img.shields.io/badge/Tailwind%20CSS-3.4.19-blue)
![tw-animate-css](https://img.shields.io/badge/tw--animate-css-1.3.8-purple)
![Build](https://img.shields.io/badge/build-manual-yellow)
![API: Render](https://img.shields.io/badge/API-Render-blueviolet)
![License: Unlicensed](https://img.shields.io/badge/license-Unlicensed-lightgrey)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Demo / Deployment](#demo--deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author / Contact](#author--contact)

## Features

- **Scroll-aware navigation** – `AppComponent` keeps the current section highlighted, toggles a mobile drawer, shows a scroll-to-top button, and smooth-scrolls to anchors defined in the `navItems` array for every section ID (`home`, `about`, `skills`, `experience`, `education`, `projects`, `services`, `contact`).
- **Hero with resume + social CTA** – dynamic initials, role badges, resume download link, and hero social icons (GitHub/LinkedIn/email) powered by the `portfolioData.home` payload.
- **About + Achievements** – biography copy, dynamic stats, and achievement tiles styled with gradients that rely on `portfolioData.about`.
- **Skills grid** – three categories (Frontend, Backend, Tools & Platforms) with icon badges and color accents read directly from `portfolioData.skills`, including Angular, Angular Material, DevExtreme, Bootstrap, Tailwind, Node.js, Express.js, MongoDB, .NET Core, MySQL, Git, Swagger, Postman, VS Code, Vercel, Render, and CI/CD.
- **Experience & Education timelines** – timeline cards show each entry from `portfolioData.experience`/`education`, including project descriptions, tech stack chips, and logic to display `Present` when `currentlyWorking`/`currentlyStudying` is true.
- **Project spotlight** – spotlight cards for SFA, Hotel Management Monitoring, Employee Management App, and Weather Forecasting apps; each card renders descriptions, tech stack chips, and optional Live Demo + Code buttons using `portfolioData.projects`.
- **Services grid** – six service offerings (Frontend Development, UI/UX Design, API Integration, Performance Optimization, Maintenance & Support, Deployment & DevOps) visualized with icons, colors, and copy from `portfolioData.services`.
- **Contact + form** – profile contact info, location, phone, email, social handles, and an `NgForm`-backed contact form powered by `ApiService`. Submitted payloads are POSTed to `${environment.apiUrl}portfolio/send-message` (default `https://ems-backend-api.onrender.com/api/`).
- **Standalone structure** – every section is a standalone component with its own template/style (Hero, About, Skills, Experience, Education, Projects, Services, Contact) imported into the `AppComponent` bootstrap.

## Tech Stack

- **Framework:** Angular 18.2.x (standalone components, `bootstrapApplication`, `provideZoneChangeDetection`, `provideRouter`, `provideHttpClient` with `withFetch`).
- **Languages & runtimes:** TypeScript 5.5.x, RxJS ~7.8, Zone.js ~0.14.10.
- **Styling:** Tailwind CSS 3.4.19 + PostCSS 8.4.35 + Autoprefixer 10.4.14 + tw-animate-css 1.3.8 + Font Awesome 6 via CDN + Inter font extension.
- **Build & tooling:** Angular CLI 18.2.12, Angular DevKit build-angular, Karma + Jasmine specs (`npm run test`).
- **Data & API:** `src/app/data/portfolio-data.ts` drives content; contact form hits `ApiService` (`src/app/core/service/api.service.ts`) which posts to `environment.apiUrl` (default `https://ems-backend-api.onrender.com/api/`).
- **Showcased competencies:** Angular Material, DevExtreme, Bootstrap, Tailwind, NgForm, REST APIs, Node.js, Express.js, MongoDB, .NET Core, MySQL, GitHub workflows, Swagger, Postman, VS Code, Vercel, Render, CI/CD (as documented in the data payloads for experience/projects/services).

## Installation and Setup

1. **Prerequisites:** Node.js 18+ (per Angular 18), npm 10+, and optional Angular CLI 18.2 globally (`npm install -g @angular/cli@18.2.12`).
2. **Dependencies:** `npm install`.
3. **API endpoint:** adjust `src/environments/environment.ts` / `environment.prod.ts` to point to your preferred backend. The contact form targets `${environment.apiUrl}portfolio/send-message`.
4. **Development server:** `npm start` (alias `ng serve`). Visit `http://localhost:4200`.
5. **Production build:** `npm run build` -> `dist/nexa-profile`.
6. **Tests:** `npm run test` runs Karma + Jasmine specs (see `app.component.spec.ts` scaffolding).

## Usage

1. Run `npm start` (or `ng serve`) and open `http://localhost:4200`. The hero, about, skills, experience, education, projects, services, and contact sections are all rendered by their dedicated standalone components.
2. Use the nav bar or mobile menu to jump between sections and watch the scroll spy update the active state; the scroll-to-top button appears after 500px.
3. Replace `portfolioData` entries (`src/app/data/portfolio-data.ts`) to personalize names, stats, experiences, projects, services, and contact info.
4. Contact submissions come from the form at the bottom; `ApiService` posts to `${environment.apiUrl}portfolio/send-message`, so ensure your backend accepts that route or mock it during development.
5. Preview or link to the featured project URLs defined under `portfolioData.projects` (live demos/code links included).

## Folder Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero-section/
│   │   ├── about-section/
│   │   ├── skills-section/
│   │   ├── experience-section/
│   │   ├── education-section/
│   │   ├── projects-section/
│   │   ├── services-section/
│   │   └── contact-section/
│   ├── core/service/api.service.ts
│   ├── data/portfolio-data.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── styles/
│   └── globals.css
├── styles.css
├── main.ts
├── index.html
└── public/ (static assets)
```

Each component folder contains its `.ts`, `.html`, and `.css` files that render the corresponding section and consume values from `portfolioData`.

## Demo / Deployment

- **Live Preview:** [https://nexa-profile-sage.vercel.app](https://nexa-profile-sage.vercel.app)
- **Screenshot:** ![App preview](public/assets/nexa-profile-screenshot.png)
- **Notes:** Build output lands under `dist/nexa-profile`. Serve those files via your favorite host (Vercel, Render, Netlify) and point the contact form to a backend API that exposes `portfolio/send-message`.

## Contributing

1. Fork the repo and create a branch (`feature/my-idea`).
2. Update `portfolioData`, add assets to `public/`, or tweak section components as needed.
3. Run `npm install`, `npm run lint` (if configured), and `npm run test` before committing.
4. Open a pull request with a clear summary and testing notes.
5. Keep the standalone pattern intact so each section remains decoupled and reusable.

## License

Currently **Unlicensed** (all rights reserved). Add a LICENSE file or update the badge if you adopt an open-source license.

## Author / Contact

- **Avinash Suryawanshi** – Angular Developer, Torrient Pharma (contact info mirrors `portfolioData.contactInfo`).
- **Email:** ai.suryawanshi95@gmail.com
- **Phone:** +91 9096683915
- **LinkedIn:** https://www.linkedin.com/in/avinash-suryawanshi-8a68182b8/
- **GitHub:** https://github.com/AvinashS1995

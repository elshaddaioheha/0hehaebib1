# 0hehaebib1 Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-00A86B?style=for-the-badge&logo=vercel&logoColor=white)](https://0hehaebib1.vercel.app/)
[![CI](https://github.com/elshaddaioheha/0hehaebib1/actions/workflows/ci.yml/badge.svg)](https://github.com/elshaddaioheha/0hehaebib1/actions/workflows/ci.yml)
[![Coverage](https://raw.githubusercontent.com/elshaddaioheha/0hehaebib1/badges/coverage.svg)](https://github.com/elshaddaioheha/0hehaebib1/actions/workflows/ci.yml)
![Vite](https://img.shields.io/badge/Vite-6A5ACD?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-0B1F2A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-111111?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-102A43?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Vitest](https://img.shields.io/badge/Vitest-1D2D44?style=for-the-badge&logo=vitest&logoColor=6E9F18)

Modern portfolio site for Oheha Ebibi with bold typography, animated sections, and data-driven content modules.

## Live Demo

- https://0hehaebib1.vercel.app/

## Screenshot

![Portfolio Screenshot](./public/gallery-oloja.png)

## Tech Stack

- Vite
- React
- Tailwind CSS
- Framer Motion
- TypeScript
- Vitest + React Testing Library
- ESLint + Prettier

## Built With

Built with Vite + React + Tailwind + Framer Motion.

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/elshaddaioheha/0hehaebib1.git
cd 0hehaebib1
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Run quality checks:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Project Structure

```text
src/
  components/
    AboutSection.tsx
    ContactSection.tsx
    ExperienceTimeline.tsx
    ExpertiseSection.tsx
    Footer.tsx
    Hero.tsx
    Navigation.tsx
    ProjectCard.tsx
    SkillsSection.tsx
    WorksSection.tsx
  data/
    portfolioData.ts
  hooks/
    useMorphingText.ts
    useRevealInView.ts
    useTypingText.ts
  test/
    setup.ts
  App.test.tsx
  App.tsx
  index.css
  main.tsx
```

## CI/CD

- GitHub Actions workflow runs lint, typecheck, tests (with coverage), and build on pushes and pull requests to `main`.
- Coverage badge is published to the `badges` branch from coverage artifacts and referenced at the top of this README.
- Deploy job triggers on `main` pushes when `VERCEL_TOKEN` (and optionally `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) are configured in repository secrets.

## Deployment

This project is configured for Vercel with:

- `vercel.json` for Vite output directory and SPA rewrites
- `vite.config.ts` for build/test setup
- Contact form uses EmailJS in the client. Configure env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

Push to GitHub and import in Vercel for automatic deployments.

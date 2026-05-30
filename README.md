# Pablo Valdes — Portfolio

A noir / Persona-inspired full-stack developer portfolio. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**, with a custom WebGL shader background, fluid `clamp()`-based typography, and light / dark / "swag" themes.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To send contact-form emails locally, set `RESEND_API_KEY` in `.env.local` (the form degrades gracefully without it).

## Editing content

All site content lives in **`src/app/lib/data.ts`** — edit it there and the home sections, project detail pages, and project sidebar all update automatically.

- **`experience`** / **`education`** — drive the Experience section.
- **`projects`** — drive the Projects section, the `(projects)` sidebar nav, and detail pages.
  - To add a project: add an entry (newest first). Set `image: null` to show a styled "preview coming soon" placeholder, or drop a file in `public/images/` and reference its filename.
  - Older projects keep their YouTube walkthroughs in their own page files under `src/app/(projects)/<slug>/`. Newer projects render from the `detail` field via the shared `ProjectDetail` component (no walkthrough).

## Architecture notes

- **`ShaderBackground.tsx`** — raw WebGL noir fog shader (no dependencies). Theme-aware and respects `prefers-reduced-motion`. Mounted globally via `BackgroundLayer.tsx` in the root layout.
- **Typography** — fluid `clamp()` utilities in `globals.css` (`.text-heading`, `.text-section-title`, etc.) scale smoothly from mobile to desktop.
- **Theme** — Zustand store (`src/app/lib/store.ts`); dark mode uses a crimson accent, light mode a warm paper tone.

## Deploy

Deployed on [Vercel](https://vercel.com) to [pablovaldes.com](https://pablovaldes.com).

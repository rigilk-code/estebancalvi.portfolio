# AGENTS.md

This repository is a Vite + React + TypeScript portfolio site styled with Tailwind and a shadcn-inspired component layer. Use the project docs and existing code patterns before introducing new libraries or architectural abstractions.

## Start here

- Project overview and setup: [README.md](README.md)
- App routing and global context: [src/App.tsx](src/App.tsx)
- Locale handling: [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx)
- Portfolio content data: [src/data/caseStudies.ts](src/data/caseStudies.ts)

## Commands

Run these from the repo root:

- `npm install --legacy-peer-deps`
- `npm run dev` — local development
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm test` — Vitest suite
- `npm run deploy` — publish to GitHub Pages via `gh-pages`

## Architecture and conventions

- The app uses `react-router-dom` and a `HashRouter` for GitHub Pages compatibility.
- Locale switching is centralized in `LanguageContext`; routes use `/es` prefixes for Spanish and a root path for English.
- Prefer using the existing `useLanguage` helper and `localePath()` rather than hardcoding route strings in new components.
- Content is structured in typed data files under `src/data/` and rendered by page components. Keep this data-driven pattern when adding items.
- Styling follows Tailwind utility classes. The project includes UI primitives under `src/components/ui/` and should be reused before creating bespoke equivalents.
- Prefer small, focused React components over new state containers or custom hooks unless the logic is reused across multiple files.

## Content and i18n rules

- When changing portfolio content, check both the English and Spanish content sources, especially `src/data/en.json` and `src/data/es.json`.
- If you add or rename a case-study slug, update the routing/data and any references to that slug consistently.
- Keep typed content blocks aligned with the `ContentBlock` definitions in `src/data/caseStudies.ts`.

## Code guidance

- Use the `@/` alias for imports instead of relative deep paths when editing within the app.
- Keep changes consistent with the current component structure and naming conventions in `src/components` and `src/pages`.
- For UI work, prefer Tailwind classes and existing base components; do not add a new CSS framework or rewrite the current styling system.
- Avoid broad refactors unless the task explicitly requires them.

## Verification

Before concluding work, run the most relevant validation:

- `npm run build` for app integrity
- `npm run lint` for code quality
- `npm test` for regression safety when code changes affect behavior

If a feature changes route behavior or localized content, validate that the affected Spanish and English paths still render correctly.

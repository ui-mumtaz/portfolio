# Mumtaz Ahmad — Portfolio

Angular 22 rewrite of the portfolio at **[ui-mumtaz.github.io/portfolio](https://ui-mumtaz.github.io/portfolio/)** — standalone components, Signals, zoneless change detection, and static prerendering (SSG).

## Stack

- Angular 22 — standalone components, Signals, `@if`/`@for`/`@defer`, zoneless change detection
- TypeScript strict mode
- SCSS, with global tokens in `src/styles.scss` and per-component stylesheets
- Static prerendering (`outputMode: "static"` in `angular.json`) — the production build emits plain HTML/CSS/JS, no Node server required
- Deployed to GitHub Pages via GitHub Actions

## Setup

```bash
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` works around an npm 10 Arborist bug ("Cannot read properties of null (reading 'edgesOut')") triggered by Vitest's optional browser-mode peer dependencies. It has no effect on the app itself — only on how npm resolves dev-only test tooling.

```bash
npm start        # ng serve — dev server at http://localhost:4200
npm run build    # ng build — static output in dist/portfolio/browser
```

## Editing content

**All page copy lives in one file: `src/app/data/portfolio-data.ts`.** Every section (hero, about, skills, experience, projects, education, contact, footer, SEO meta tags) is a plain exported object typed against `src/app/models/portfolio.models.ts`. To change what the site says, edit the strings in `portfolio-data.ts` — no template or component changes are needed for ordinary copy edits.

Text that needs `<strong>`/`<code>` emphasis, an accent-colored span, or a forced line break is stored as a `RichText` array (a list of `{ text, bold?, code?, accent?, breakAfter? }` segments) and rendered through the shared `<app-rich-text>` component. See any existing entry (e.g. `HERO.lead` or `ABOUT.paragraphs`) as a template for adding more.

Images (project covers, the hero banner, the favicon) and the résumé PDF live in `public/assets/` and are referenced by path from `portfolio-data.ts` or component templates — add new files there and reference them the same way.

## Architecture

```
src/app/
  core/
    services/    scroll, clipboard, toast, seo — all DOM access guarded via afterNextRender/isPlatformBrowser
    directives/  appReveal / appRevealStagger (scroll-triggered entrance animation), appParallax / appMotionFx
  shared/        icon, rich-text, section-head, button, chip, toast — small presentational pieces reused across sections
  sections/      one component per page section, in page order
  data/          portfolio-data.ts — ALL copy
  models/        portfolio.models.ts — the types portfolio-data.ts is checked against
```

Every component is `ChangeDetectionStrategy.OnPush`; the app runs zoneless (`provideZonelessChangeDetection()` in `app.config.ts`), so updates are driven entirely by signals.

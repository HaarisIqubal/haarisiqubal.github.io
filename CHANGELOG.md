# Changelog

All notable changes to this project are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [Unreleased]

### Planned
- Dark/light theme toggle with OS `prefers-color-scheme` auto-detection
- Tailwind `darkMode: 'class'` with semantic CSS custom properties
- Modern UI refresh: nav, hero, cards, footer
- Subtle scroll-reveal animations (IntersectionObserver)
- Portfolio timeline view with date-annotated JSON data
- GitHub Pages deployment link in README
- Dependency audit and upgrade

---

## [1.0.0] — 2026-03-06

### Added
- `ThemeContext` — dark/light mode with OS `prefers-color-scheme` auto-detection,
  localStorage persistence, and manual override lock
- `ThemeToggle` component (sun/moon button) wired into Navbar (desktop + mobile)
- `darkMode: 'class'` enabled in `tailwind.config.js` with semantic CSS custom property tokens
- CSS custom properties (`--color-bg`, `--color-text`, `--color-primary`, etc.) in `App.css`
  for both light and dark palettes with smooth `0.3s` transitions
- `useScrollReveal` hook — IntersectionObserver-based one-shot scroll detection
- `RevealOnScroll` wrapper component — fade-up animation, configurable `delay`
- `TimelineItem` and `TimelineView` components — vertical alternating timeline layout
  (desktop) and left-rail layout (mobile) for the portfolio page
- Grid/Timeline view toggle on the Portfolio page (`HiViewGrid` / `HiViewList`)
- `startDate` / `endDate` fields added to all items in `porfolio.json`
- `CHANGELOG.md`, `.github/copilot-instructions.md`, `/memories/repo/portfolio-context.md`
- `HelmetProvider` wrapping in `index.js` (required by react-helmet-async)

### Changed
- Migrated `react-helmet` → `react-helmet-async` across all pages and `index.js`
- `Navbar` — sticky with backdrop blur, theme-aware colors, uses CSS vars throughout
- `Hero` — emoji stripped from greeting; uses CSS var colors
- `Footer` — simplified to plain text, theme-aware
- `PortfolioCard` — fixed `class` → `className` throughout; card header color uses primary var
- `Home/Portfolio` — `key` prop added to mapped cards; wrapped in `RevealOnScroll`
- `Home/About` — wrapped in `RevealOnScroll`
- `Home/Contact` — wrapped in `RevealOnScroll`; card headers use theme tokens
- `Portfolio.js` — filter logic cleaned up (no `console.log`); `useEffect` dependency corrected
- All hardcoded `#E6DB74`, `#30CBEF`, `text-white` → CSS variable references

### Dependency updates
- `react` 18.2.0 → 18.3.1
- `react-dom` 18.2.0 → 18.3.1
- `react-router-dom` 6.22.3 → 6.30.3
- `react-icons` 5.1.0 → 5.6.0
- `tailwindcss` 3.4.3 → 3.4.19
- `react-helmet-async` 2.0.5 added; `react-helmet` removed

---

## [0.1.0] — Initial Baseline

### Summary
- React 18 + CRA bootstrap with Tailwind CSS 3
- Pages: Home, About, Portfolio, Resume, 404
- Components: Navbar (mobile hamburger), Footer, Hero (typewriter), About snippet,
  Portfolio grid, Contact cards, PortfolioCard, PortfolioPosts (Medium RSS)
- Data-driven portfolio cards via `src/data/porfolio.json`
- Resume page with inline experience/project/education data and PDF download
- Design language: dark `#212121` background, VT323 code-font, `#E6DB74` yellow body text,
  `#30CBEF` cyan accent — code/terminal aesthetic
- Routing: react-router-dom v6, BrowserRouter, ScrollToTop utility

# Haaris Iqubal — Developer Portfolio

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38BDF8?style=flat&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.30.3-CA4245?style=flat&logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

Personal developer portfolio built with React 18 and Tailwind CSS. Showcases projects, experience, and skills with a code-terminal aesthetic, dark/light/system theming, and a project timeline view.

**Live site:** [haarisiqubal.github.io/portfolio](https://haarisiqubal.github.io/portfolio)

---

## Tech Stack

| Layer | Library | Version |
|-------|---------|---------|
| UI | React | 18.3.1 |
| Styling | Tailwind CSS | 3.4.19 |
| Routing | react-router-dom | 6.30.3 |
| Typewriter | react-simple-typewriter | 5.0.1 |
| Icons | react-icons | 5.6.0 |
| Page titles | react-helmet-async | 2.0.5 |
| Build | react-scripts (CRA) | 5.0.1 |

---

## Local Development

```bash
npm install
npm start        # dev server → http://localhost:3000
npm run build    # production build → /build
```

---

## Project Structure

```
src/
  App.js              Router, ThemeProvider, layout wrapper
  components/
    Navbar.js         Sticky navbar with theme toggle
    ThemeToggle.js    3-way theme cycle button (system / light / dark)
    RevealOnScroll.js Scroll-reveal animation wrapper
    Home/             Hero, About snippet, Portfolio preview, Contact sections
    Portfolio/        PortfolioCard, PortfolioPosts, TimelineItem, TimelineView
  data/
    porfolio.json     Portfolio items with dates, tags, topics
  pages/              Home, About, Portfolio, Resume, PageNotFound
  utils/
    ThemeContext.js   3-mode theme state (system / light / dark) + OS auto-detection
    useScrollReveal.js IntersectionObserver hook for scroll animations
    ScrollToTop.js
    ToText.js
```

---

## Features

- 3-mode theming — system (OS auto-detect), light, dark; persisted in localStorage
- Portfolio grid view and chronological timeline view with toggle
- Scroll-reveal fade-up animations on section entry
- Filter projects by topic: Web, Swift, ML/DL
- Medium RSS blog posts feed
- Responsive layout with mobile hamburger menu
- Sticky navbar with backdrop blur

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the full history.

### Recent
- `v1.0.0` — 3-mode theming, timeline view, scroll animations, dependency upgrades, react-helmet-async migration
- `v0.1.0` — Initial baseline (CRA, Tailwind, portfolio grid, resume, blog feed)


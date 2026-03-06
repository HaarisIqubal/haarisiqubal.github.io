# GitHub Copilot Instructions — Developer Portfolio

## Project Summary
React 18 + Tailwind CSS 3 developer portfolio for Haaris Iqubal.
Bootstrapped with Create React App (`react-scripts`). No Vite, no TypeScript, no eject.
Deployed to GitHub Pages.

---

## Tech Stack
| Layer | Library | Version |
|-------|---------|---------|
| UI | React | 18 |
| Styling | Tailwind CSS | 3 |
| Routing | react-router-dom | 6 |
| Typewriter effect | react-simple-typewriter | 5 |
| Icons | react-icons | 5 |
| Page title | react-helmet | 6 |
| Build | react-scripts (CRA) | 5 |

---

## Design System

### Color Tokens
| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#212121` | Page background (App.css body) |
| Primary / Accent | `#30CBEF` | Active nav links, headings accent — `.text-primary-color` |
| Body text | `#E6DB74` | Paragraph text — `.body-color` |
| White | `#ffffff` | Headings, labels |
| Gray borders | `border-gray-600` | Cards and borders |

### Typography
- **Code font**: VT323 monospace — applied via `.code-font` class
- **Body font**: system sans-serif (Tailwind default)
- Section headings use `.section-heading` = `code-font text-6xl text-white text-center lowercase`

### Naming Convention
- Nav links and labels use lowercase with underscore prefix: `_home`, `_about`, `_resume`
- Section headings use HTML-tag style: `<About_Me>`, `<Portfolio>`, or brace style: `{_Resume}`

### Key Utility Classes (App.css)
```
.code-font          VT323 monospace font
.section-heading    code-font, text-6xl, white, centered, lowercase
.section-width      max-w-[1200px]
.body-color         color: #E6DB74 (yellow/cream)
.text-primary-color color: #30CBEF (cyan)
.button-style       gray bg, code-font, rounded, hover → dark + body-color
.contact-card       border-gray-600 rounded shadow-md text-center m-2
.nav-link           hover → text-primary-color transition
```

---

## File Structure
```
src/
  App.js              Router + layout (Navbar, content max-w-[1140px], Footer)
  App.css             Global classes and body background
  index.css           Tailwind directives
  components/
    Navbar.js         Top nav bar with mobile hamburger
    Footer.js         Simple footer
    Home/
      Hero.js         Full-viewport typewriter hero section
      About.js        Short about snippet with "Read More" link
      Portfolio.js    3 featured portfolio cards with "Read More" link
      Contact.js      Email / LinkedIn / GitHub contact cards
    Portfolio/
      PortfolioCard.js  Card: image, title, description, tags, link button
      PortfolioPosts.js  Medium RSS feed (api.rss2json.com)
  data/
    porfolio.json     Portfolio items array (note: typo in filename — intentional legacy)
  pages/
    Home.js           Assembles Hero + About + Portfolio + Contact
    About.js          Full about page: motivations, hobbies, secrets sections
    Portfolio.js      Filter bar (Web/Swift/ML/DL) + cards grid + blog posts
    Resume.js         Skills, Experience, Projects, Education + PDF download
    PageNotFound.js   404 page
  utils/
    ScrollToTop.js    Scroll to top on route change
    ToText.js         HTML to plain text for Medium post excerpts
  static/             Static files (resume.pdf)
public/images/        Portfolio project images (.webp)
```

---

## Data Schemas

### `src/data/porfolio.json`
```json
{
  "portfolio": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Short description",
      "img": "/images/filename.webp",
      "topic": "Web | Swift | ML/DL",
      "link": "https://...",
      "tags": ["tag1", "tag2"],
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM | present"
    }
  ]
}
```

### Resume data (inline in `Resume.js`)
Three arrays: `experiences[]`, `project[]`, `education[]`
Each item: `{ period, title, location?, department?, bullets[], link? }`

---

## Coding Conventions
1. **Functional components only** — no class components.
2. **className**, not `class` — React JSX prop (legacy `class` in PortfolioCard.js is a known bug).
3. Keep components **composable and small** — prefer extracting sub-components over inline HTML blocks.
4. **DRY** — shared layout patterns belong in reusable components.
5. **No unnecessary abstractions** — do not create helpers or wrappers unless used more than once.
6. **Scroll animations** — use IntersectionObserver or CSS transitions; keep them subtle.
7. **Theming** — dark/light mode is driven by a `ThemeContext`. Use `dark:` Tailwind variants.
   Auto-detection reads `window.matchMedia('(prefers-color-scheme: dark)')`.
8. All data-driven content (portfolio projects, timeline) lives in `src/data/` as JSON.
9. Images go in `public/images/` and are referenced as `/images/filename.webp`.
10. Page-level `<Helmet>` sets the browser tab title.

---

## Routing Notes
- `BrowserRouter` — requires correct base URL for GitHub Pages (`homepage` in package.json).
- `ScrollToTop` component must be placed inside `<Routes>` wrapper pages.
- Mobile nav uses an overlay with full-screen menu.

---

## Known Issues / Tech Debt
- `PortfolioCard.js` uses `class` instead of `className` throughout.
- `PortfolioCard` mapped in `Portfolio.js` and `Home/Portfolio.js` is missing a `key` prop.
- `react-helmet` is deprecated — consider migrating to `react-helmet-async`.
- Resume data is hardcoded in `Resume.js`; consider moving to `src/data/resume.json`.

---

## When Adding Features
- **New page**: create in `src/pages/`, add `<Route>` in `App.js`, add `<Link>` in `Navbar.js`.
- **New section component**: create in `src/components/Home/` or relevant subdirectory.
- **New data**: add to `src/data/` as JSON, import where needed.
- **New icons**: use `react-icons` (already installed); prefer `hi2`, `fi`, or `si` sets.
- **Animations**: keep transition durations `200–400ms`; use `ease-in-out`; never block scroll.
- **Theme support**: all color classes must have `dark:` variants; never hardcode hex in JSX.

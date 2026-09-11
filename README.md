# Portfolio

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Includes a full light/dark theme system and a modular, data-driven component structure.

## Stack

- React 19 + Vite
- Tailwind CSS (theme driven by CSS variables)
- Framer Motion (scroll and entrance animations)
- Lucide React (icons)

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:5173`).

Other commands:

```bash
npm run build     # production build, output in dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/
│   ├── common/       # Button, Container, SectionTitle, ThemeToggle, BrandIcons
│   ├── layout/        # Navbar, Footer
│   ├── sections/       # Hero, About, Experience, Skills, Projects, Contact
│   └── cards/         # ExperienceCard, ProjectCard, SkillBadge
├── data/             # experience.js, projects.js, skills.js — edit these to update content
├── hooks/            # useTheme.js
├── App.jsx
├── main.jsx
└── index.css         # theme tokens (CSS variables) and base styles
```

## Customizing content

You shouldn't need to touch any component code to update the portfolio's content:

- **Name, title, and intro** — `src/components/sections/Hero.jsx`
- **Bio and strengths** — `src/components/sections/About.jsx`
- **Work history** — `src/data/experience.js`
- **Skills** — `src/data/skills.js`
- **Projects** — `src/data/projects.js`
- **Contact links and email** — `src/components/sections/Contact.jsx` and `src/components/layout/Footer.jsx`
- **Site title and meta description** — `index.html`

## Customizing the theme

All colors are defined as CSS variables in `src/index.css` under `:root` (light theme) and `.dark` (dark theme):

```css
:root {
  --background: #ffffff;
  --surface: #f5f6f8;
  --text-primary: #14171c;
  --text-secondary: #5c6470;
  --border: #e4e7eb;
  --accent: #a8672a;
}
```

Change these values to restyle the whole site — every component consumes them through Tailwind's `background`, `surface`, `text-primary`, `text-secondary`, `border`, and `accent` color utilities (see `tailwind.config.js`).

Fonts are loaded via Google Fonts in `index.html` (Fraunces for headings, Inter for body text, JetBrains Mono for small labels) and mapped in `tailwind.config.js` under `fontFamily`.

The selected theme is stored in `localStorage` under the key `portfolio-theme` and falls back to the visitor's OS-level preference on first visit.

## Deploying

The `npm run build` output in `dist/` is static and can be deployed to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

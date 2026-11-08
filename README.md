# Portfolio

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Includes a full light/dark theme system and a modular, data-driven component structure.

> 📘 **Full step-by-step guide** (admin panel, templates, deploying, troubleshooting): [docs/PORTFOLIO_GUIDE.md](docs/PORTFOLIO_GUIDE.md)

## Stack

- React 19 + Vite
- Tailwind CSS (theme driven by CSS variables)
- Framer Motion (scroll and entrance animations)
- Lucide React (icons)

## Getting started

Requires Node.js 22+ (Vite 8 needs ^20.19 or >=22.12).

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
├── content/          # profile.json, experience.json, projects.json, skills.json, site.json — all site content
├── hooks/            # useTheme.js
├── App.jsx
├── main.jsx
└── index.css         # theme tokens (CSS variables) and base styles
```

## Updating content (admin panel)

All text on the site lives in JSON files in `src/content/`. The component code doesn't need to change for content updates.

| File | What it holds |
| --- | --- |
| `profile.json` | Name, job title, hero text, photo, About paragraphs, strengths, contact links, and the search/share description |
| `experience.json` | Work history |
| `projects.json` | Projects |
| `skills.json` | Skill groups |
| `site.json` | Which design template is active |

The page title, meta tags and structured data in `index.html` are filled from `profile.json` at build time (see the `profileMeta` plugin in `vite.config.js`).

### Using the admin panel

The site includes [Sveltia CMS](https://sveltiacms.app/), a Git-based CMS, at:

**https://ratheeshk2505.github.io/portfolio/admin/**

1. Create a [fine-grained GitHub token](https://github.com/settings/personal-access-tokens/new): give it access to **only** the `ratheeshk2505/portfolio` repository and set **Contents: Read and write**. Choose an expiry date.
2. Open the admin URL, click **Sign In Using Access Token** and paste the token. It is stored only in that browser.
3. Edit and save. Each save is a commit to `develop`, which triggers the GitHub Pages deploy; the change is live in about 1–2 minutes.

Security: there is no password in the site's code. Only GitHub accounts with write access to the repository (and a valid token) can save anything. Keep 2FA on your GitHub account, sign out of the CMS on shared computers, and revoke the token on GitHub if a device is lost.

After editing in the CMS, run `git pull` before changing files locally.

To edit without GitHub (local only), run `npm run build && npm run preview`, open `http://localhost:4173/portfolio/admin/` in Chrome or Edge and choose **Work with Local Repository**, then commit and push as usual.

The CMS configuration (fields, labels, sign-in) is in `public/admin/config.yml`. Uploaded images go to `public/images/`.

## Design templates

There are three designs to choose from:

| Template | Look |
| --- | --- |
| **Classic** | Warm, editorial serif headings, 3D tilt cards and floating shapes |
| **Minimal** | Clean, centered, sans-serif layout with a blue accent and no 3D effects |
| **Terminal** | Developer style: monospace headings, green accents and a code-window hero |

Each one works in both light and dark mode.

- **Choose one:** in the admin panel, open **Profile → Site design** and pick a template (stored in `src/content/site.json`). Saving redeploys the site.
- **Preview without changing anything:** add `?template=minimal`, `?template=terminal` or `?template=classic` to the site URL.
- **Customize:** colors and fonts for each template are in `src/index.css` under `[data-template="…"]`. The hero layouts are in `src/components/sections/hero/`, and the list of templates is in `src/templates/index.js`.

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

The `npm run build` output in `dist/` is static and is deployed to GitHub Pages (https://ratheeshk2505.github.io/portfolio/) by `.github/workflows/deploy.yml` on every push to `develop`. Because the site lives under `/portfolio/`, reference files in `public/` from JSX with `import.meta.env.BASE_URL` (e.g. `${import.meta.env.BASE_URL}Ratheesh-K.jpg`), not a leading `/`.

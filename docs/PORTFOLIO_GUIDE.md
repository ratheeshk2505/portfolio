# Portfolio Guide

Step-by-step instructions for running, updating and deploying this portfolio.

- **Live site:** https://ratheeshk2505.github.io/portfolio/
- **Admin panel:** https://ratheeshk2505.github.io/portfolio/admin/
- **Repository:** https://github.com/ratheeshk2505/portfolio (branch `develop`)

---

## Contents

1. [How it all fits together](#1-how-it-all-fits-together)
2. [One-time setup: admin sign-in token](#2-one-time-setup-admin-sign-in-token)
3. [Editing your details in the admin panel](#3-editing-your-details-in-the-admin-panel)
4. [Changing the design template](#4-changing-the-design-template)
5. [Changing your photo or adding images](#5-changing-your-photo-or-adding-images)
6. [Deploying changes](#6-deploying-changes)
7. [Working on your computer](#7-working-on-your-computer)
8. [Editing content without the admin panel](#8-editing-content-without-the-admin-panel)
9. [Customizing the design (code)](#9-customizing-the-design-code)
10. [Security checklist](#10-security-checklist)
11. [Troubleshooting](#11-troubleshooting)
12. [Quick reference](#12-quick-reference)

---

## 1. How it all fits together

```
 You edit in /admin  ──►  Sveltia CMS commits JSON to GitHub (develop)
                                         │
 You push from your computer  ───────────┤
                                         ▼
                     GitHub Actions: npm ci → lint → build
                                         │
                                         ▼
                 Publishes dist/ to the gh-pages branch → live site
```

- **All content** (text, links, skills, jobs, projects, chosen template) is stored in JSON files in `src/content/`.
- **The admin panel** is just a friendly editor for those JSON files. Every save is a Git commit, so every change has history and can be undone.
- **Deployment is automatic.** Any push to `develop` rebuilds and publishes the site in about 1–2 minutes.
- **There is no server or database.** The site is static files on GitHub Pages.

| File | What it controls |
| --- | --- |
| `src/content/profile.json` | Name, job title, hero text, photo, About paragraphs, strengths, contact links, search/share description |
| `src/content/experience.json` | Work history |
| `src/content/projects.json` | Projects |
| `src/content/skills.json` | Skill groups |
| `src/content/site.json` | Active design template |

---

## 2. One-time setup: admin sign-in token

The admin panel signs in with a **GitHub fine-grained personal access token**. You only need to do this once per browser (and again when the token expires).

### 2.1 Create the token

1. Sign in to GitHub and open **Settings** (your avatar, top-right → *Settings*).
2. In the left sidebar, scroll down to **Developer settings**.
3. Go to **Personal access tokens → Fine-grained tokens → Generate new token**.
   Direct link: https://github.com/settings/personal-access-tokens/new
4. Fill in:
   - **Token name:** `portfolio-admin`
   - **Expiration:** 90 days (or a custom date; shorter is safer)
   - **Repository access:** *Only select repositories* → choose **ratheeshk2505/portfolio**
   - **Permissions → Repository permissions → Contents:** **Read and write**
     (Metadata: Read-only is added automatically. Leave everything else as *No access*.)
5. Click **Generate token** and **copy it now**. GitHub shows it only once.

### 2.2 Sign in to the admin panel

1. Open https://ratheeshk2505.github.io/portfolio/admin/ (keep the trailing `/`).
2. Click **Sign In Using Access Token**.
3. Paste the token and confirm.

The token is saved in that browser only. On a new browser or device, sign in again with the same token (or create a new one).

### 2.3 When the token expires

Sign-in will fail with an authentication error. Create a new token (step 2.1), then sign in again. Optionally delete the old token on GitHub.

---

## 3. Editing your details in the admin panel

After signing in you will see these sections in the left sidebar:

| Sidebar item | What you can edit |
| --- | --- |
| **Profile → Site design** | Which template the site uses |
| **Profile → Profile & Contact** | Name, job title, hero text, photo, About, strengths, email, LinkedIn, GitHub, location, SEO description |
| **Experience** | Jobs (add, edit, delete, reorder) |
| **Projects** | Projects (add, edit, delete, reorder) |
| **Skills** | Skill groups and the skills in each |

### 3.1 Update your profile

1. Click **Profile → Profile & Contact**.
2. Edit any field. Useful ones:
   - **Job title**: shown in the browser tab, LinkedIn/WhatsApp previews, Google, and the Minimal/Terminal heroes.
   - **Search & share description**: the 1–2 sentence summary Google and link previews show.
   - **Title-bar skills**: the short list at the end of the browser tab title, e.g. `Angular, React, NestJS`.
   - **Hero detail lines**: the small lines under the hero (e.g. "Based in Kottayam, Kerala"). Use **Add** to add a line, the handle to drag, the bin to remove.
   - **About paragraphs**: one item per paragraph.
   - **Strengths**: the three blocks next to the About text.
   - **LinkedIn URL / GitHub URL**: leave empty to hide that link everywhere.
3. Click **Save** (top-right).
4. Wait about 1–2 minutes, then refresh the live site.

### 3.2 Add a new job

1. Click **Experience → New Job**.
2. Fill in **Company**, **Role**, **Duration**, **Location / work mode**, **Summary** and **Achievements**.
   - For your current job, write the duration like `July 2026 — Present`. The word **Present** marks it as your current employer in Google's structured data.
3. **Save**.
4. To put it at the top, go back to the Experience list and drag it to the first position. The site shows jobs in the list's order.

### 3.3 Edit or remove a job / project / skill group

- **Edit:** click the item in the list, change it, **Save**.
- **Delete:** open the item → the menu (⋮) or **Delete** button → confirm.
- **Reorder:** drag items in the list view. The site uses the same order.

### 3.4 Add a project

1. **Projects → New Project**.
2. Enter **Title**, **Description**, **Technologies** (one per item), and optionally **Source code URL** and **Live demo URL**. The GitHub and arrow icons appear on the card only when those URLs are filled in.
3. **Save**.

### 3.5 Update skills

1. **Skills** → click a group (e.g. *Frontend*) or **New Skill group**.
2. Add, remove or drag skills in the **Skills** list.
3. **Save**.

---

## 4. Changing the design template

There are three templates. All of them support light and dark mode and use the same content.

| Template | Look |
| --- | --- |
| **Classic** | Warm serif headings, amber accent, photo card with 3D tilt, floating shapes |
| **Minimal** | Clean centered layout, round photo, bold sans-serif headings, blue accent, no 3D effects |
| **Terminal** | Developer style: monospace headings, green accent, grid background, `whoami` heading with blinking cursor and a `profile.json` code window |

### 4.1 Preview before switching

Add `?template=` to the site URL. This changes only what *you* see in that tab; it doesn't change the site:

- https://ratheeshk2505.github.io/portfolio/?template=classic
- https://ratheeshk2505.github.io/portfolio/?template=minimal
- https://ratheeshk2505.github.io/portfolio/?template=terminal

Use the sun/moon button to check both light and dark mode.

### 4.2 Switch the template

1. Admin panel → **Profile → Site design**.
2. Choose **Classic**, **Minimal** or **Terminal**.
3. **Save**. The live site uses the new design after the deploy finishes (1–2 minutes).

---

## 5. Changing your photo or adding images

The photo is used in the hero, the browser icon on iPhones, and link previews (LinkedIn, WhatsApp, X).

1. Admin panel → **Profile → Profile & Contact → Photo**.
2. Click the field and **upload** a new image (or pick one already uploaded).
3. **Save**.

Tips:

- Use a **square** JPG or WebP, around **600×600 px** and under **200 KB**.
- Uploaded images are stored in `public/images/` in the repository.
- The current photo is `public/Ratheesh-K.jpg`.
- LinkedIn caches previews. After changing the photo, use https://www.linkedin.com/post-inspector/ with your site URL to refresh it.

---

## 6. Deploying changes

### 6.1 From the admin panel

Nothing to do. Every **Save** commits to `develop`, and GitHub Actions deploys it automatically.

### 6.2 From your computer

```bash
git pull origin develop
```

Make your changes, then:

```bash
npm run lint
```

```bash
npm run build
```

```bash
git add -A
```

```bash
git commit -m "describe your change"
```

```bash
git push origin develop
```

### 6.3 Check a deployment

1. Open https://github.com/ratheeshk2505/portfolio/actions
2. The newest **Deploy to GitHub Pages** run should show a green tick. Then a **pages build and deployment** run publishes it.
3. Open the live site and hard-refresh: **Cmd + Shift + R** (Mac) or **Ctrl + Shift + R** (Windows).

If you save several times quickly, older deploy runs are cancelled automatically and only the newest one finishes. That is expected.

> Don't use `npm run deploy`. The GitHub Actions workflow does deployment for you.

---

## 7. Working on your computer

### 7.1 First time

Requires **Node.js 22 or newer** (`node -v` to check).

```bash
git clone https://github.com/ratheeshk2505/portfolio.git
```

```bash
cd portfolio
```

```bash
npm install
```

### 7.2 Run the site locally

```bash
npm run dev
```

Open http://localhost:5173/portfolio/. Changes to code or `src/content/*.json` appear instantly.

### 7.3 Always pull first

The admin panel commits directly to GitHub, so your computer may be behind. Before you start working locally, run:

```bash
git pull origin develop
```

### 7.4 Use the admin panel locally (no token needed)

Useful for trying content changes before publishing.

```bash
npm run build && npm run preview
```

1. Open http://localhost:4173/portfolio/admin/ in **Chrome or Edge** (Safari and Firefox don't support this).
2. Click **Work with Local Repository** and select the `portfolio` folder.
3. Edits are written to your local files only. Check them with `npm run dev`, then commit and push (section 6.2).

---

## 8. Editing content without the admin panel

You can edit the JSON files directly, either in your editor or on github.com (open the file → pencil icon → **Commit changes**). Keep the JSON valid: double quotes, commas between items, no trailing comma after the last item.

**profile.json** (shortened):

```json
{
  "name": "Ratheesh K",
  "role": "Senior Software Engineer",
  "seoDescription": "One or two sentences for Google and link previews.",
  "skillsSummary": "Angular, React, NestJS",
  "greeting": "Hi, I'm",
  "heroIntro": "Short introduction shown in the hero.",
  "heroDetails": ["Line one", "Line two"],
  "heroBadge": "web developer ~ 2026",
  "photo": "/Ratheesh-K.jpg",
  "about": ["Paragraph one", "Paragraph two"],
  "strengths": [{ "title": "Title", "detail": "Detail" }],
  "contactIntro": "Text above the contact links.",
  "email": "you@example.com",
  "linkedin": "https://linkedin.com/in/…",
  "github": "https://github.com/…",
  "location": "City, State"
}
```

**experience.json** (one object per job, top of the list = shown first):

```json
[
  {
    "company": "Company name",
    "role": "Your role",
    "duration": "Jan 2024 — Present",
    "location": "Remote",
    "description": "One-paragraph summary.",
    "achievements": ["Achievement one", "Achievement two"]
  }
]
```

**projects.json**:

```json
[
  {
    "title": "Project name",
    "description": "What it does.",
    "technologies": ["React", "TypeScript"],
    "github": "",
    "demo": ""
  }
]
```

**skills.json**:

```json
[
  { "category": "Frontend", "items": ["Angular", "React"] }
]
```

**site.json**: `"template"` must be `classic`, `minimal` or `terminal`:

```json
{ "template": "classic" }
```

Run `npm run build` after editing by hand. A broken JSON file stops the build, and the deploy will fail until it's fixed.

---

## 9. Customizing the design (code)

| What | Where |
| --- | --- |
| Colors and fonts per template | `src/index.css`, the `:root` / `.dark` blocks (Classic) and `[data-template="minimal"]`, `[data-template="terminal"]` blocks |
| Hero layout per template | `src/components/sections/hero/HeroClassic.jsx`, `HeroMinimal.jsx`, `HeroTerminal.jsx` |
| List of templates | `src/templates/index.js` |
| Template choices in the admin | `public/admin/config.yml` (the `site` file → `template` options) |
| Admin forms and labels | `public/admin/config.yml` |
| Page title, meta tags, structured data | Filled from `profile.json` by the `profileMeta` plugin in `vite.config.js` (tokens like `%%NAME%%` in `index.html`) |
| Fonts loaded | Google Fonts `<link>` in `index.html` |

### 9.1 Add a fourth template

1. **Register it** in `src/templates/index.js`:
   ```js
   { id: "ocean", label: "Ocean", description: "…", effects3d: false },
   ```
2. **Add colors** in `src/index.css`, copying the Minimal blocks:
   ```css
   [data-template="ocean"] { --background: …; --accent: …; --font-display: …; }
   [data-template="ocean"].dark { … }
   ```
3. **Hero (optional):** create `src/components/sections/hero/HeroOcean.jsx` and add it to the `heroes` map in `src/components/sections/Hero.jsx`. Without this, it uses the Classic hero.
4. **Admin option:** in `public/admin/config.yml`, add `- { label: Ocean, value: ocean }` under the template `options`.
5. Preview with `?template=ocean`, then commit and push.

### 9.2 Add a new field to the profile

1. Add the field to `src/content/profile.json`.
2. Use it in a component: `import { profile } from "../../content";` then `{profile.yourField}`.
3. Add it to the **Profile & Contact** `fields` list in `public/admin/config.yml` so it appears in the admin panel.

---

## 10. Security checklist

- [ ] **2FA is on** for your GitHub account (Settings → Password and authentication).
- [ ] The admin token is **fine-grained**, limited to **only** `ratheeshk2505/portfolio`, with only **Contents: Read and write**.
- [ ] The token has an **expiry date**.
- [ ] **Sign out** of the admin panel on shared or public computers (avatar menu → *Sign Out*).
- [ ] If a device is lost, **revoke the token** right away: https://github.com/settings/personal-access-tokens
- [ ] Never paste the token into chats, issues, or files in the repository.
- [ ] Don't add a phone number or other private details to the content files. The repository and its history are public.

Why `/admin` is safe to leave public: the page holds no secrets. Saving requires a GitHub token with write access to this repository, which only you have.

### Optional: "Sign In with GitHub" button instead of a token

1. Deploy the free **Sveltia CMS Authenticator** on Cloudflare Workers: https://github.com/sveltia/sveltia-cms-auth (follow its README; it walks you through creating a GitHub OAuth app).
2. In `public/admin/config.yml` under `backend:`, add `base_url: https://<your-worker>.workers.dev` and change `auth_methods: [token]` to `auth_methods: [oauth, token]`.
3. Commit and push.

---

## 11. Troubleshooting

| Problem | Fix |
| --- | --- |
| **Admin sign-in fails** | Token expired, wrong repository selected, or Contents isn't *Read and write*. Create a new token (section 2.1). |
| **Saved in admin but the site didn't change** | Wait 2 minutes, then hard-refresh. Check the Actions tab (section 6.3). A red ✗ means the build failed. Open the run to see the error. |
| **Deploy failed after a manual JSON edit** | The JSON is probably invalid (missing comma or quote). Run `npm run build` locally to see the error, fix it, push again. |
| **`git push` rejected ("fetch first")** | The admin panel committed while you worked. Run `git pull --rebase origin develop`, then `git push origin develop`. |
| **Admin page shows a 404** | Use the full URL with a trailing slash: `/portfolio/admin/`. |
| **Template didn't change** | Check `src/content/site.json` has `classic`, `minimal` or `terminal` (lowercase). Remove any `?template=` from your URL. That overrides the setting. |
| **Images broken on the live site** | In code, never write `src="/file.jpg"`. Use `assetUrl("/file.jpg")` from `src/content`. The site lives under `/portfolio/`. |
| **LinkedIn shows an old preview** | Re-scrape with https://www.linkedin.com/post-inspector/ |
| **Old site version after deploy** | Hard-refresh, or open in a private window. |
| **`npm run dev` fails with a Node error** | Install Node.js 22+ (`node -v` to check). |

---

## 12. Quick reference

| Task | How |
| --- | --- |
| Edit content | https://ratheeshk2505.github.io/portfolio/admin/ → edit → **Save** |
| Switch design | Admin → **Profile → Site design** |
| Preview a design | Add `?template=minimal` (or `classic` / `terminal`) to the site URL |
| Run locally | `npm run dev` → http://localhost:5173/portfolio/ |
| Check before pushing | `npm run lint` and `npm run build` |
| Deploy | `git push origin develop` (the admin panel does this on every save) |
| Watch deploys | https://github.com/ratheeshk2505/portfolio/actions |
| New admin token | https://github.com/settings/personal-access-tokens/new |
| Revoke a token | https://github.com/settings/personal-access-tokens |

import { readFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const BASE = '/portfolio/'
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
const SITE_URL = pkg.homepage

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// JSON inside <script> must not be able to close the tag.
const safeJson = (data) => JSON.stringify(data, null, 2).replace(/</g, '\\u003c')

/**
 * Fills the %%TOKENS%% in index.html (title, meta tags, structured data)
 * from the CMS-managed JSON in src/content, so edits made in /admin
 * also update what search engines and link previews see.
 */
function profileMeta() {
  return {
    name: 'profile-meta',
    transformIndexHtml(html) {
      const read = (file) =>
        JSON.parse(readFileSync(new URL(`./src/content/${file}`, import.meta.url), 'utf8'))
      const profile = read('profile.json')
      const experience = read('experience.json')
      const site = read('site.json')

      const photoPath = profile.photo ? `${BASE}${profile.photo.replace(/^\//, '')}` : ''
      const photoUrl = profile.photo ? new URL(profile.photo.replace(/^\//, ''), SITE_URL).href : ''
      const currentCompany = experience.find((job) => /present/i.test(job.duration))?.company

      const person = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        url: SITE_URL,
        image: photoUrl || undefined,
        jobTitle: profile.role,
        worksFor: currentCompany ? { '@type': 'Organization', name: currentCompany } : undefined,
        sameAs: [profile.linkedin, profile.github].filter(Boolean),
      }
      const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: `${profile.name} - ${profile.role}`,
        url: SITE_URL,
        description: profile.seoDescription,
        author: { '@type': 'Person', name: profile.name },
      }
      const structuredData = [person, website]
        .map((data) => `<script type="application/ld+json">\n${safeJson(data)}\n    </script>`)
        .join('\n    ')

      const tokens = {
        NAME: escapeHtml(profile.name),
        ROLE: escapeHtml(profile.role),
        SEO_DESCRIPTION: escapeHtml(profile.seoDescription),
        SKILLS_SUMMARY: escapeHtml(profile.skillsSummary),
        PHOTO_PATH: escapeHtml(photoPath),
        PHOTO_URL: escapeHtml(photoUrl),
        STRUCTURED_DATA: structuredData,
        TEMPLATE: escapeHtml(site.template || 'classic'),
      }
      return html.replace(/%%([A-Z_]+)%%/g, (match, key) => tokens[key] ?? match)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: BASE,
  plugins: [react(), profileMeta()],
  build: {
    sourcemap: false,
  },
})

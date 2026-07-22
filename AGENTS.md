# Repository Guide

## Commands
- Use Node.js 24 to match `.github/workflows/deploy.yml`; Astro 7 requires Node `>=22.12.0`.
- Install dependencies with `npm ci` (the committed `package-lock.json` is authoritative).
- Use `npm run dev` for Astro's dev server and `npm run preview` to serve a completed production build.
- `npm run check` is the focused Astro/TypeScript validation. `npm run build` runs that check before generating `dist/`; there are no separate test, lint, or formatter scripts.
- Deployment is handled only by `.github/workflows/deploy.yml` on pushes to `main` or manual dispatch. There is no local deploy script.

## Structure
- This is one Astro 7 static site with no backend or runtime API. Filesystem routes are `/`, `/blog/`, and `/blog/<post-id>/`.
- `astro.config.mjs` targets the root Pages domain with `base: '/'`, static output, and `trailingSlash: 'always'`; keep root-relative links and asset paths compatible with that deployment.
- Edit navigation, profile, social links, projects, and hobbies in `src/data/site.ts`; longer homepage copy lives in `src/pages/index.astro`.
- `src/layouts/BaseLayout.astro` owns shared document structure and browser behavior; `src/styles/global.css` contains the site-wide visual and responsive system.

## Blog
- Blog sources are Markdown or MDX under `src/content/blog/`; `src/content.config.ts` is the frontmatter schema.
- `draft: true` entries are excluded from the homepage, blog index, and generated post routes. `sample: true` leaves the post public but adds a visible sample-content notice.
- Post IDs come from content filenames and become `/blog/<id>/`; both listing pages sort by `date` descending, and the homepage shows only the newest three.

## Generated Files
- `dist/` and `.astro/` are generated and ignored; do not edit or commit them.
- Files under `public/` are copied to the site root and are referenced as `/assets/...` in current content.

# SEApodEErman personal site

A static, responsive personal site for **SEApodEErman**, also known as **Mahiru Shiina in osu!** It is built with [Astro](https://astro.build/) and deploys to [seapodeerman.github.io](https://seapodeerman.github.io) through GitHub Actions.

The project has no backend, database, analytics, form handler, or runtime API. Astro prerenders every page into plain files in `dist/`.

## Local development

Use Node.js 24 (the deployment workflow uses Node 24). Then run:

```sh
npm ci
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

Useful commands:

```sh
npm run check    # Validate Astro and TypeScript files
npm run build    # Run checks and create the production site in dist/
npm run preview  # Preview the completed production build
```

`dist/` is generated and ignored by Git. Do not edit it directly.

## Editing the site

Most frequently edited content is centralized in [`src/data/site.ts`](src/data/site.ts):

- Main navigation
- Name, osu! alias, and short introduction
- Social/contact links
- Project cards, screenshots, external links, and tags
- Hobby cards

Entries with `placeholder: true` are intentionally shown as placeholders. Replace their text, image path, and URL, then set `placeholder: false` (or remove that property) when the information is real.

The longer biography and section copy are in [`src/pages/index.astro`](src/pages/index.astro). Shared page structure is in `src/components/`, and the full visual system is in [`src/styles/global.css`](src/styles/global.css).

## Adding and editing blog posts

Posts are Markdown files in [`src/content/blog/`](src/content/blog/). Copy an existing sample or create a new `.md` file with this frontmatter:

```md
---
title: "Post title"
excerpt: "A short description used in post previews."
date: 2026-01-01
tags: ["mapping", "osu!"]
sample: false
draft: false
---

Write the post in Markdown here.
```

- Use `draft: true` to keep a post out of the production build.
- Use `sample: true` only for placeholder/demo writing. It adds a visible sample-content notice.
- The filename becomes the URL, for example `mapping-notes.md` becomes `/blog/mapping-notes/`.
- Frontmatter is validated by [`src/content.config.ts`](src/content.config.ts).

## Replacing images

Static images live under [`public/assets/`](public/assets/):

```text
public/assets/
├── profile/        # Profile photo or avatar
├── projects/       # Project screenshots and card artwork
├── blog/           # Optional blog images
└── illustrations/  # Decorative graphics
```

Current SVGs are original, clearly labeled placeholders—not personal photographs or claimed project screenshots.

1. Add an optimized SVG, WebP, AVIF, PNG, or JPG to the appropriate directory.
2. Update its `/assets/...` path in `src/data/site.ts` or the relevant post/component.
3. For the profile image, update `profile.portrait` in `src/data/site.ts` and change the image alt text plus/remove the “replace me” label in `src/pages/index.astro`.
4. Keep files reasonably small. Aim for under 300 KB for most raster images.

Missing image paths will show the browser's broken-image state, so run the production build and check new paths before pushing.

## Replacing links and contact details

Edit `socialLinks` in [`src/data/site.ts`](src/data/site.ts). GitHub is the only confirmed external profile. The osu! profile, email, and additional social account intentionally point back to the contact section and display a **Placeholder** label.

For email, use a `mailto:` link, for example:

```ts
{ label: 'Email', handle: 'hello@example.com', href: 'mailto:hello@example.com', placeholder: false }
```

Project links work the same way: replace `href: '#contact'` with the real URL and remove `placeholder: true`.

## Theme and design settings

Color tokens are at the top of [`src/styles/global.css`](src/styles/global.css). The light palette is based on:

- `#ead2ac`
- `#df928e`
- `#c58882`
- `#d1dede`
- `#55868c`

Dark-mode values immediately follow the light tokens. The site starts in the requested light theme, and the theme switch stores a visitor's choice in `localStorage`. Motion automatically reduces when `prefers-reduced-motion` is enabled.

## Deployment

[`deploy.yml`](.github/workflows/deploy.yml) builds and publishes the static `dist/` output whenever `main` is pushed. The Astro configuration uses:

- `site: 'https://seapodeerman.github.io'`
- `base: '/'`
- static output

This is correct for the special root repository `SEApodEErman/seapodeerman.github.io`; no repository-name prefix or `CNAME` file is needed.

One-time GitHub setup:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy to GitHub Pages** manually from the Actions tab.

Before pushing, run:

```sh
npm ci
npm run build
```

After deployment, verify the homepage, a blog post, the theme toggle, and section links at [https://seapodeerman.github.io](https://seapodeerman.github.io).

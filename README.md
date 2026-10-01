# SEApodEErman personal site

A static personal site for **SEApodEErman**, also known as **Mahiru Shiina in osu!**, with projects, keyboards, tournament contributions, and writing. Built with [Astro](https://astro.build/) and published to [seapodeerman.top](https://seapodeerman.top) through GitHub Pages.

Astro generates every page at build time. The site has no backend, database, accounts, analytics, form handler, or runtime API.

## Local development

Use **Node.js 24**, matching the deployment workflow, and install the locked dependencies:

```sh
npm ci
npm run dev
```

Astro prints the local address, normally `http://localhost:4321`.

```sh
npm run check    # Validate Astro and TypeScript files
npm run build    # Run checks and generate the production site
npm run preview  # Serve the completed production build
```

There are no separate test, lint, formatter, or local deployment scripts. Both `dist/` and `.astro/` are generated and ignored; do not edit them directly.

## Editing content

[`src/data/site.ts`](src/data/site.ts) holds shared identity and navigation:

- Navigation, profile, hero artwork, and social/profile links
- Tournament and community contributions

Projects and keyboard builds are Markdown Content Collections, validated by
[`src/content.config.ts`](src/content.config.ts):

- [`src/content/projects/`](src/content/projects/): selected beatmaps, hitsounding, and software. Frontmatter holds title, description, category (`Beatmapping`, `Hitsounds`, or `Software`), image, imageAlt, href, externalLabel, role, tags, and order. Optional facts, gallery, relatedPost, previewImage, and previewImageAlt enrich the showcase. The Markdown body contains the project story and notes.
- [`src/content/keyboards/`](src/content/keyboards/): photos, build specs, and short stories. Frontmatter holds title, image, imageAlt, fullImage, order, and specs. The Markdown body is the build story.
- Set `draft: true` to hide a project or build. Lower `order` values appear first. The first public map and keyboard supply the homepage entrance previews.

Project filenames generate their own pages at `/projects/<filename>/`. Keep filenames unique and stable so existing links continue to work. The legacy `/projects/kawayo/` page renders the Kawayo keyboard entry, keeping its story and specs in one place. Add only confirmed contributions and links; avoid inventing tournament names or credits when details are unavailable.

The homepage layout is in [`src/pages/index.astro`](src/pages/index.astro); the anime poster opening is in [`HeroPoster.astro`](src/components/HeroPoster.astro). Two prominent entrances lead to osu! work and keyboards on the homepage; a third section holds notes and software. The homepage previews two maps, a compact tournament summary, and up to three keyboards. A public `osuSpotlight.projectId` leads the map selection, followed by collection order. `KeyboardGallery` in `mode="preview"` features Kawayo, then shows smaller build previews; set its `featuredId` prop to select another board. Detailed desk specifications remain in the [current setup post](src/content/blog/current-setup.md). Existing profile links handle contact. There are no audio/video previews or new runtime integrations.

The top navigation opens dedicated pages:

- `/osu/`: all public maps and hitsounding projects, mapping and hitsounding stats, the most played/favourited map spotlight, the osu! profile, and tournament contributions. Update `osuStats` and `osuSpotlight` in `src/data/site.ts`; the spotlight references a public project’s filename.
- `/keyboards/`: all public builds, expandable stories, specs, and the photo gallery. Write each story in its keyboard entry’s Markdown body; headings, photos, lists, and links work inside the disclosure. Build anchors such as `/keyboards/#neo60-core` link directly to a board. Homepage previews link to these anchors, while their photos still open the gallery.
- `/blog/`: Notes & code, with the complete list of posts, newest first. “Browse all notes” jumps straight to the list. Software project features remain on the homepage.
- `/about/`: the bio, profile avatar, interests, and social links. Edit its copy in [`src/pages/about.astro`](src/pages/about.astro).

The collections supply both the homepage and dedicated pages. All public entries appear on their collection pages; the homepage selects up to two maps, three builds, and the three newest posts. Project detail pages link back to their dedicated collection, and navigation highlights the current page or section.

For example, a keyboard entry looks like this:

```md
---
title: "My keyboard"
image: "../../../public/assets/blog/my-keyboard.webp"
imageAlt: "A descriptive view of the keyboard"
fullImage: "/assets/blog/my-keyboard.webp"
order: 3
specs:
  Switches: "Switch name"
  Keycaps: "Keycap set"
  Stabilizers: "Stabilizer name"
  Plate: "Plate material"
  Mount: "Mounting style"
  Build: "Build notes"
draft: false
---

A short story about this build.
```

All six spec fields are required. Gallery photos open in an accessible native dialog;
without JavaScript, the same links open the full-size images. Build specs use native
`details` and stay usable without JavaScript.

Shared document structure, navigation behavior, and theme handling live in [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) and [`src/components/`](src/components/). The visual and responsive system lives in [`src/styles/global.css`](src/styles/global.css).

## Blog posts

Posts live in [`src/content/blog/`](src/content/blog/). Create a Markdown file with this frontmatter:

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

- `draft: true` excludes a post from the homepage, blog index, and generated post routes.
- `sample: true` keeps a post public and adds a visible sample-content notice.
- The filename becomes the URL: `mapping-notes.md` becomes `/blog/mapping-notes/`.
- Listings sort by date, newest first; the homepage shows the three newest public posts.
- [`src/content.config.ts`](src/content.config.ts) validates the frontmatter.

The existing `/blog/` and `/blog/<post-id>/` URLs remain unchanged.

## Images and links

Hero artwork lives in [`src/assets/hero/mahiru.png`](src/assets/hero/mahiru.png), referenced by `profile.hero` in `src/data/site.ts`. Project artwork lives in [`src/assets/projects/`](src/assets/projects/) and is referenced with paths relative to each Markdown file, for example `../../assets/projects/kotone-kagome.webp`. Collection image fields and the hero use Astro image optimization with responsive WebP variants. Supply descriptive alt text where images are rendered.

Blog and gallery photos live under [`public/assets/blog/`](public/assets/blog/). A collection `image` field can reference them relatively (`../../../public/assets/blog/neo60-core.webp`) for optimized previews, while `fullImage` uses the public URL (`/assets/blog/neo60-core.webp`). Files in `public/` are also copied without processing, so keep the original files reasonably sized. The favicon is `/assets/favicon.png`.

Update social destinations in `src/data/site.ts` and project destinations in their Markdown frontmatter. Internal links and public asset URLs should start with `/` and page links should end with `/`, matching the deployment configuration. Run a production build and inspect affected pages after changing images, filenames, or links.

## Appearance and accessibility

The design uses an anime poster composition, sky blue and seafoam light surfaces, a midnight-blue dark theme, and self-hosted Outfit typography. Pressing an entrance combines keycap feedback with a single hit-circle ripple and never delays navigation. Color, typography, spacing, and responsive rules are defined in `src/styles/global.css`. The agreed design brief lives in [`REDESIGN.md`](REDESIGN.md).

Light and dark themes follow the visitor's system preference until they choose a theme; that choice persists in `localStorage`. Motion respects `prefers-reduced-motion`. Keep navigation and gallery interactions usable with a keyboard when making changes.

## GitHub Pages deployment

[`deploy.yml`](.github/workflows/deploy.yml) builds and publishes `dist/` on pushes to `main` or manual workflow dispatch. Preview redesign branches locally before merging; pushing a feature branch does not automatically publish it.

[`astro.config.mjs`](astro.config.mjs) uses:

```js
site: 'https://seapodeerman.top',
base: '/',
output: 'static',
trailingSlash: 'always',
```

[`public/CNAME`](public/CNAME) contains `seapodeerman.top`. Keep the custom domain, DNS, GitHub Pages settings, and Astro `site` value aligned. In repository **Settings → Pages**, the build source should be **GitHub Actions**.

GitHub Pages serves static files. Client-side interactions and build-time content generation work here; features requiring a server, private credentials, persistent user data, or form processing need a separate service. Never place secrets in browser code or public build output.

Before merging, run `npm run build` with Node.js 24. Preview the homepage, a project detail page, keyboard gallery, blog index and post, mobile navigation, and both themes. After publishing, verify the same routes on [seapodeerman.top](https://seapodeerman.top).

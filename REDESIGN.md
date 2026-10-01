# Personal website redesign brief

Status: Second visual pass complete and locally verified. Story revisions await the user's notes.
Working branch: `redesign-sol6.1`.

## Vision and audience

Create a playful, innovative, heavily anime-inspired personal website for
SEApodEErman, known as Mahiru Shiina in osu!. The opening should make the
connection between an osu! mapper/hitsounder and a keyboard enthusiast feel
distinctive within the first five seconds.

Primary visitors are fellow osu! creators looking for work references and
keyboard enthusiasts exploring builds. A complete visual overhaul is welcome.

## Visual direction

- Use an anime character-poster composition: oversized cropped lettering,
  outlined typography, expressive color blocks, prominent artwork, and compact
  supporting information. The Kita poster supplied during the interview guides
  composition, rather than serving as a layout to reproduce exactly.
- Following the first preview, use conventional Atkinson Hyperlegible lettering
  with a white fill, muted slate-blue outer outline, and looser spacing for every
  outlined-text treatment, including the hero and section headings.
- Mahiru Shiina anchors the character identity. Display both SEApodEErman and
  the osu! alias without making the relationship ambiguous.
- Draw the palette from the supplied Mahiru references: sky blue, seafoam,
  cloud white, soft blush, and navy for readable text.
- Prioritize light mode. Design dark mode deliberately around midnight-blue
  surfaces and readable pastel accents.
- The interview attachments are visual references only. The user subsequently
  selected `C:\Users\SEApodEErman\Downloads\mahiru.png` as the actual hero
  artwork. Its repository source is `src/assets/hero/mahiru.png`.

## Visitor journey and content

### Introduction

A striking introduction offers two primary entrances: osu! and Keyboards.
Keep both choices immediately understandable and accessible on mobile.
Provide access to a separate third section for writing and software projects
without giving it equal prominence in the opening.

### osu!

Prioritize selected beatmaps and hitsounding projects. Each visual summary
identifies the project, the owner's contribution, and a direct osu! link.
Summaries must be useful without opening another page.

Include individual showcase pages in the first version. These contain the
owner's role, project notes, relevant artwork or screenshots, and a clear osu!
link. Preserve existing project URLs where available. Current content includes
Kotone / Kagome and takehirotei / Haiboku no Altra Vita.

Audio and video previews are outside the first-version scope.

### Keyboards

Build a photo-led collection. Each keyboard includes structured build specs
and a short personal build story. Current content includes Neo60 Core,
KBD67 Lite, and Kawayo. Keep the gallery and stories easy to browse; a separate
keyboard detail-page structure has not been required by the interview.

### Writing and software

Provide a separate third section for blog posts and software projects,
including osu! ReqTrac. Preserve existing blog routes and content.

### Contact

Existing profile and social links handle contact. No dedicated collaboration
funnel or contact form is required.

## Signature interaction

Proposed treatment: the two entrance panels preview a real beatmap or keyboard.
On hover or keyboard focus, the relevant preview receives emphasis. Pressing an
entrance combines a restrained keycap compression with a single hit-circle
ripple before normal link navigation. Avoid delaying navigation to finish an
animation.

Touch users see the previews directly. Reduced-motion users receive simple
highlighting. The interaction should reinforce the destination, rather than
becoming a mini-game or an obstacle to accessing work. The user delegated the
exact interaction design, asking for something unique and useful without
unnecessary complexity.

Implement with CSS and a small local browser script if needed. Static HTML links
must work without JavaScript. No runtime service or media downloads are needed.

## Content architecture and hosting

- Keep Astro, TypeScript, CSS, static prerendering, and GitHub Pages deployment
  through the existing GitHub Actions workflow.
- Move project entries and keyboard specs/stories from `src/data/site.ts` into
  Markdown-backed Astro Content Collections. Define typed frontmatter schemas;
  use Markdown bodies for narrative notes and stories.
- Keep identity, navigation, and social links in `src/data/site.ts`.
- Preserve the blog collection's draft/sample behavior and descending-date
  listings, including the homepage's newest-three rule when showing recent posts.
- Use Astro components for static content. Use a small Astro island only if an
  interaction needs component state; do not add a framework for simple effects.
- Use Astro image optimization for imported assets, responsive image sizing,
  explicit dimensions, and lazy loading below the opening.
- Preserve existing URLs or provide static redirect pages when a route must
  move. Keep root-relative paths and trailing slashes compatible with deployment.
- Theme preference can be handled by CSS system preferences and a small local
  toggle script with browser storage; it requires no backend.

## Implementation checks

- Confirm both themes are readable, including text over artwork.
- Verify mobile layouts, touch interaction, keyboard focus, reduced motion,
  and useful navigation with JavaScript disabled.
- Check collection migration for missing content, changed slugs, and draft leaks.
- Run `npm run check` and `npm run build` with Node.js 24 after implementation.
- Leave generated `dist/` and `.astro/` files uncommitted.
- Preserve the pre-existing uncommitted work carried onto this branch.

## Suggested build order

1. Establish theme tokens, typography, and a responsive poster composition.
2. Migrate projects and keyboard entries into Content Collections.
3. Build the osu! summaries/showcase pages, keyboard collection, and third section.
4. Add the entrance feedback and theme controls.
5. Verify the complete site and production build before any deployment.

## Implementation verification

- Node.js 24.21.0: `npm run build` passes, including Astro/TypeScript validation
  with zero errors, warnings, or hints. Nine static pages are generated.
- A generated-site audit checked 247 internal links and asset references,
  including fragment targets, with no missing targets.
- Firefox verification covered both themes, the project showcase, photo-dialog
  keyboard controls and focus return, and responsive layouts at 320, 390, 768,
  1024, and 1440 pixels. No horizontal overflow was found at the checked sizes.
- A script-disabled narrow viewport retained navigation, entrance links,
  full-size photo links, and native build-spec disclosures.
- `README.md` documents Markdown editing and image paths. Source artwork is
  processed into responsive WebP variants during the production build.
- The changes remain local on `redesign-sol6.1`; deployment has not been requested.

## Second visual pass — 2026-10-01

- Addressed review points 1, 2, 4, and 5. Personal project/build stories are
  deferred until the user supplies them; the software journey in point 6 is
  reserved for a later pass.
- Shared tracking tokens replace compressed headings and titles. Outlined text
  retains Atkinson Hyperlegible, a white fill, and a slate-blue stroke.
- The mobile hero uses separate identity, artwork, and action rows, with a
  compact crop for shorter screens. Entrance thumbnails show recognizable work.
- Angled frames, beat-circle markers, an asymmetric map spread, and keycap labels
  carry the poster direction into the homepage and collection pages.
- The homepage shows two selected maps, a compact tournament summary, and a
  Kawayo feature with smaller Neo60 Core and KBD67 Lite previews. Full stories
  and specifications remain available on the dedicated pages.
- At 390 × 844, the keyboard section starts at about 1,962 pixels, compared with
  about 3,082 in the reviewed first pass. Both entrances fit at 390 × 844 and
  320 × 568, with the name clear of the character's face.
- Node.js 24.21.0: `npm run build` passes with zero errors, warnings, or hints;
  12 static pages are generated.
- The generated-site audit checks 458 internal links and asset references,
  including image variants, CSS assets, and fragments, with no missing targets.
- Seven pages were checked in both themes at 320, 375, 390, 768, 1024, and 1440
  pixels: 84 layout checks without horizontal or heading overflow. Short-screen
  and zoom-equivalent viewport checks also passed.
- Gallery keyboard activation, arrow navigation, Escape, and focus return pass.
  Build links reach their collection anchors; native story/spec disclosures work.
  Opening the mobile menu now focuses its first link, and Escape restores focus.
- Script-disabled checks retain navigation, entrance links, full-size photo
  links, collection links, and native disclosures. Reduced-motion CSS disables
  animations, the entrance ripple, transitions, and smooth scrolling.

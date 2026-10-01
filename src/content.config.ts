import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    sample: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Beatmapping', 'Hitsounds', 'Software']),
    image: image(),
    imageAlt: z.string(),
    previewImage: image().optional(),
    previewImageAlt: z.string().optional(),
    href: z.url(),
    externalLabel: z.string(),
    tags: z.array(z.string()).default([]),
    role: z.string(),
    order: z.number().default(0),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    gallery: z.array(z.object({
      src: z.string(), alt: z.string(), caption: z.string(),
      width: z.number().positive(), height: z.number().positive(),
    })).default([]),
    relatedPost: z.object({ title: z.string(), href: z.string() }).optional(),
    draft: z.boolean().default(false),
  }),
});

const keyboards = defineCollection({
  loader: glob({ base: './src/content/keyboards', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    imageAlt: z.string(),
    fullImage: z.string(),
    order: z.number().default(0),
    specs: z.object({
      Switches: z.string(), Keycaps: z.string(), Stabilizers: z.string(),
      Plate: z.string(), Mount: z.string(), Build: z.string(),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, keyboards };

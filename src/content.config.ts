import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/members" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string().optional(),
    order: z.number().default(100),
    photo: z.string().optional(),
    researchmap: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    nav: z.boolean().default(true),
    order: z.number().default(100),
    home: z.boolean().default(false),
    homeOrder: z.number().default(100),
    homeMode: z.enum(["teaser", "full"]).default("teaser"),
    standalone: z.boolean().default(true),
  }),
});

const homepage = defineCollection({
  loader: glob({ pattern: "homepage.md", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().optional(),
    hero: z.string().optional(),
  }),
});

export const collections = { news, members, pages, homepage };

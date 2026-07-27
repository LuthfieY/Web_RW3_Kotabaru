import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/education" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    icon: z.string(),
    duration: z.string().optional(),
    order: z.number(),
    status: z.enum(["draft", "published"]),
  }),
});

export const collections = { education };

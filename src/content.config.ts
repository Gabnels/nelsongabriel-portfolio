// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Importante para Astro v6

const blog = defineCollection({
  // En Astro v6 usamos loader en lugar de type: "content"
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    image: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };

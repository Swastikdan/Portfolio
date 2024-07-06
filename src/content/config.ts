import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startdate: z.coerce.date(),
    enddate: z.coerce.date().optional(),
    tech: z.array(z.string()),
    draft: z.boolean().optional(),
    demourl: z.string().optional(),
    repourl: z.string().optional(),
  }),
});

export const collections = { blog, projects };
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    startdate: z.coerce.date(),
    enddate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demourl: z.string().optional(),
    repourl: z.string().optional(),
  }),
});

export const collections = { projects };

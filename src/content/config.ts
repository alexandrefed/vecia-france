import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Équipe Vecia'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // LinkedIn specific fields
    linkedin: z.object({
      title: z.string().optional(),
      content: z.string().optional(),
      hashtags: z.array(z.string()).default([]),
    }).optional(),
    // SEO
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).default([]),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
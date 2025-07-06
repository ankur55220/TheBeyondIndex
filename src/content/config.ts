// Configuration for content collections
import { defineCollection, z } from 'astro:content';

const cosmos = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      author: z.string().optional(),
      tags: z.array(z.string()).default([]),
      heroImage: z
        .object({
          src: z.string(),
          width: z.number().optional(),
          height: z.number().optional(),
        })
        .optional(),
    }),
  });

  const mysteries = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      author: z.string().optional(),
      tags: z.array(z.string()).default([]),
      heroImage: z
        .object({
          src: z.string(),
          width: z.number().optional(),
          height: z.number().optional(),
        })
        .optional(),
    }),
  });

export const collections = {
  cosmos:cosmos,
  mysteries:mysteries,
};

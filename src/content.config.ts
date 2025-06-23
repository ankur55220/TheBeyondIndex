import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const mysteries = defineCollection({
	// Load Markdown and MDX files in the `src/content/mysteries/` directory.
	loader: glob({ base: './src/content/mysteries', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

const cosmos = defineCollection({
	// Load Markdown and MDX files in the `src/content/mysteries/` directory.
	loader: glob({ base: './src/content/cosmos', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

export const collections = { mysteries, cosmos };

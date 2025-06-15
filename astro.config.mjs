import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vecia-france.vercel.app',
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true,
    runtime: 'nodejs20.x',
  }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    ssr: {
      external: ['node:buffer', 'node:path', 'node:fs', 'node:os', 'node:crypto'],
    },
  },
});
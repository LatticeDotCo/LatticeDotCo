import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://latticecorp.cloud/',
  integrations: [tailwind()],
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  output: 'server',
})
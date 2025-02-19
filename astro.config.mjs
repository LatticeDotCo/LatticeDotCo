import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://latticecorp.cloud/',
  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare(),
})
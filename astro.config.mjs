import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'http://latticecorp.cloud/',
  integrations: [tailwind()],
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  output: 'server',
})
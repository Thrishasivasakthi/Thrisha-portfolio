import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://thrishasivasakthi.github.io',
  base: '/Thrisha-portfolio',
  output: 'static'
});

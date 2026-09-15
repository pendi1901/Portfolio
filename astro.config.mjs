import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Canonical origin — drives canonical URLs, Open Graph tags and the sitemap.
  site: 'https://www.pendi.works',
  integrations: [tailwind()],
});

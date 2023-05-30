import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  meta:{
    favicon:'../images/Net Access Solutions Logo (2).png',
  },
  integrations: [tailwind()],
  
});
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://nelson-gabriel.com",
  integrations: [sitemap(), partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
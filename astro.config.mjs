import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon(), db()],
  site: "https://astro-code-review.vercel.app",
  security: {
    checkOrigin: true,
  },
  experimental: {
    actions: true,
  },
  output: "server",
  adapter: netlify(),
});

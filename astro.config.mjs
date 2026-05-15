// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // 1. Configuramos las rutas para GitHub Pages
  site: "https://dev-leonardorivera.github.io",
  base: "/digital-menu-astro",
  trailingSlash: "always", // Obliga a Astro a usar '/' al final de las rutas, ideal para GitHub Pages

  integrations: [
    icon({
      iconSets: {
        mdi: () => import("@iconify-json/mdi/icons.json"),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

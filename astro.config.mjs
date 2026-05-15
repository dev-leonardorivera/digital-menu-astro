// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // 1. Añadimos la URL de tu GitHub Pages y la subcarpeta del repositorio
  site: 'https://dev-leonardorivera.github.io',
  base: '/digital-menu-astro',
  trailingSlash: 'always', // Recomendado para evitar problemas de rutas en GitHub Pages

  integrations: [
    icon({
      iconSets: {
        mdi: () => import('@iconify-json/mdi/icons.json'),
      },
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});

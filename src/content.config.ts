import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  // Cargamos todos los archivos .md dentro de la carpeta products
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/products" }),

  // Definimos el mismo tipado que tenías en tu interfaz
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      price: z.string(),
      description: z.string(),
      // La magia: Astro valida y procesa la ruta de la imagen
      image: image(),
      tag: z.string().optional(), // Opcional por si algún plato no tiene tag
      notes: z.array(z.string()),
      intensity: z.number().min(1).max(5),
      category: z.string(),
    }),
});

export const collections = { products };

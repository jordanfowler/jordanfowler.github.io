import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jordanfowler.co',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

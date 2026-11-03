import { defineConfig } from 'astro/config';

// Web personal en la raíz de GitHub Pages (repo <usuario>.github.io): HTML estático, sin servidor.
export default defineConfig({
  site: 'https://repicam.github.io',
  output: 'static',
});

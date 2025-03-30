import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // This represents '0.0.0.0'
    port: 5000
  }
});

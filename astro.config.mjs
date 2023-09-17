import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  vite: {
    build: {
      assetsInlineLimit: 0, // jsが<script>に直接展開されるのを防ぐ
    },
  },
});

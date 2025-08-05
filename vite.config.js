// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: process.cwd(),         // your project root
  publicDir: 'public',         // where your favicon & manifest live

  plugins: [
    // React plugin will transform JSX in .js, .jsx, .ts, .tsx automatically
    react({
      // Explicitly include JS and JSX files under src
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    }),
  ],

  resolve: {
    // keep your existing alias
    alias: { '@': path.resolve(__dirname, 'src') },
    // allow imports without extensions
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  server: {
    port: 3000,
    // proxy settings if you need them, e.g.:
    // proxy: { '/blog-posts': 'https://your-strapi-url' }
  },

  // allow importing uppercase .PNG (and other) asset files
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
});

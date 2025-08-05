// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: process.cwd(),
  publicDir: 'public',

  plugins: [
    // React plugin automatically handles JSX in .js, .jsx, .ts, .tsx
    react()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  server: {
    port: 3000,
  },

  // Treat uppercase .PNG (and other formats) as static assets
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],

  // ← NEW: output production build into "build" instead of "dist"
  build: {
    outDir: 'build',
  },
});

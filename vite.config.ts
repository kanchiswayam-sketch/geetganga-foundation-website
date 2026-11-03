import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets load correctly on any static hosting subdirectory or root
  server: {
    port: 3000,
    host: true
  }
});

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DashBoard/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist', // Specify your desired output directory (e.g., 'dist' or 'build')
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  server: {
    proxy: {
      '/api2': {
        target: 'http://api.sl.se',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, '/api2')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/index.css';`,
      },
    },
  }
});
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import * as path from 'path';

export default defineConfig({
  build: { outDir: './build' },
  plugins: [react(), checker({ typescript: true })],
  server: {
    host: true,
    port: (process.env as unknown as { PORT: number }).PORT || 3000,
  },
  resolve: {
    alias: {
      '@router': path.resolve(__dirname, 'src/router'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
  },
});

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
      '@core': path.resolve(__dirname, 'src/core'),
      '@views': path.resolve(__dirname, 'src/views'),
    },
  },
});

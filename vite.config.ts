import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Folder output build
    assetsDir: 'assets', // Folder untuk aset (gambar, font, dll.)
    emptyOutDir: true, // Bersihkan folder dist sebelum build
  },
});
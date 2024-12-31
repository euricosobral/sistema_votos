import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/sistema_votos/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
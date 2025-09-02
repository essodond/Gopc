import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // écoute toutes les interfaces réseau pour ngrok
    port: 5173,   // port par défaut
    
  },
});

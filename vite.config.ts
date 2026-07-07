import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3737,
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
    // Allow all hosts for production deployment behind reverse proxy
    allowedHosts: [
      'novobhumi.com',
      'www.novobhumi.com',
      'localhost',
      '127.0.0.1',
      'my-websites-novobhumi.mabiow.legacy-platform.host',
      '.legacy-platform.host',
    ],
  },
})

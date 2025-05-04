import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  allowedHosts: ['all', "d88c-92-220-43-155.ngrok-free.app"],

  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Anubhav-Portfolio/',
  server: {
    port: 5173
  }
})
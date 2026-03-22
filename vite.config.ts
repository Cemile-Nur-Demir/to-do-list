import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  
  base: '/cemile_nur_demir_to-do-list',   // örn: '/my-app/'
  plugins: [
    react(),
    tailwindcss(),
  ],
})
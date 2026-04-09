import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@sections': '/src/components/sections',
      '@ui': '/src/components/ui',
      '@layout': '/src/components/layout',
      '@hooks': '/src/hooks',
      '@context': '/src/context',
      '@data': '/src/data',
      '@styles': '/src/styles',
    },
  },
})
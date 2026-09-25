import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Caminhos relativos funcionam no domínio raiz e em /<repositorio>/ no GitHub Pages.
  base: './',
  build: { outDir: 'dist' },
})

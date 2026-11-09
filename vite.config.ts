import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' faz o site funcionar em qualquer endereço do GitHub Pages
// (usuario.github.io/nome-do-repo/) sem precisar configurar o nome do repositório.
export default defineConfig({
  plugins: [react()],
  base: './',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Checker from 'vite-plugin-checker';
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), Checker({ typescript: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})

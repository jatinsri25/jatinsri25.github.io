import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/jatinsri25.github.io/', // Not needed for User Pages (username.github.io), only for Project Pages
})

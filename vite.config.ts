import { defineConfig } from 'vite'
import angular from '@vitejs/plugin-angular'
import path from 'path'

export default defineConfig({
  plugins: [angular()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 4200,
  },
  build: {
    target: 'ES2022',
  },
})

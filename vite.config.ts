import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), nightwatchPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/core/core/main.ts', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/core/services/main.ts', import.meta.url)),
      '@watchers': fileURLToPath(new URL('./src/core/watchers/main.ts', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/core/utils', import.meta.url)),
      '@dto': fileURLToPath(new URL('./src/core/dto/main.ts', import.meta.url)),
      pages: fileURLToPath(new URL('./src/client/pages', import.meta.url)),
      app: fileURLToPath(new URL('./src/client/app', import.meta.url))
    }
  }
})

import { fileURLToPath, URL } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url))
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@core': fileURLToPath(new URL('./src/core/core/main.ts', import.meta.url)),
        '@services': fileURLToPath(new URL('./src/core/services/main.ts', import.meta.url)),
        '@watchers': fileURLToPath(new URL('./src/core/watchers/main.ts', import.meta.url)),
        pages: fileURLToPath(new URL('./src/client/pages', import.meta.url)),
        app: fileURLToPath(new URL('./src/client/app', import.meta.url))
      }
    }
  })
)

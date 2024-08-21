import { createSSRApp } from 'vue'
import App from './client/app.vue'
import { router } from './client/app/router'
import { createPinia } from 'pinia'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  app.use(router)
  return { app, router }
}

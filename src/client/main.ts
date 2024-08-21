import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app.vue'
import { router } from './app/router'
import './main.scss'
import { loggingPlugin } from '../core/utils/logging'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(loggingPlugin)
app.use(router)

app.mount('#app')

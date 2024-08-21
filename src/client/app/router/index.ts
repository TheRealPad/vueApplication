import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import { useIsAuthenticateStore } from '@core/authentication'

import HomeView from 'pages/home/index.vue'
import AboutView from 'pages/about/index.vue'
import UserView from 'pages/user/index.vue'
import NotFoundView from 'pages/notFound/index.vue'

const isSSR = typeof window === 'undefined'

const routes = [
  { path: '/', component: HomeView, props: { message: 'Oui' } },
  { path: '/about', component: AboutView, props: { message: 'Non' } },
  { path: '/user', component: UserView, props: { message: 'Non' }, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', component: NotFoundView }
]

const router = createRouter({
  history: isSSR ? createMemoryHistory() : createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticateStore = useIsAuthenticateStore()

  if (to.meta.requiresAuth && !isAuthenticateStore.isAuthenticate) {
    next('/')
  } else {
    next()
  }
})

export { router }

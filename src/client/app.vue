<script setup lang="ts">
import { useIsAuthenticateStore } from '@core'
import ThemeSwitch from './components/themeSwitch/index.vue'

const isAuthenticateStore = useIsAuthenticateStore()
</script>

<template>
  <h1>Hello App!</h1>
  <ThemeSwitch />
  <h2>{{ isAuthenticateStore.isAuthenticate }}</h2>
  <button @click="isAuthenticateStore.updateValue"><p>authenticate</p></button>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/user">Go to User</RouterLink>
    <RouterLink to="/badRoute">Bad route</RouterLink>
    <RouterLink to="/pokemon">Pokemon route</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

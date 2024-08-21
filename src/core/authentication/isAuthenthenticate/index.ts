import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIsAuthenticateStore = defineStore('isAuthenticate', () => {
  const isAuthenticate = ref(false)
  function updateValue() {
    isAuthenticate.value = !isAuthenticate.value
  }

  return { isAuthenticate, updateValue }
})

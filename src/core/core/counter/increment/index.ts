import { ref } from 'vue'
import { defineStore } from 'pinia'

import { increment as incrementCore } from '@services'

export const useIncrementStore = defineStore('increment', () => {
  const count = ref(0)
  const isRequestPending = ref(false)
  const isRequestSuccess = ref(false)
  const isRequestFailure = ref(false)

  function increment(data: number) {
    isRequestPending.value = true
    isRequestSuccess.value = false
    isRequestFailure.value = false

    incrementCore(count.value)
      .then((data) => {
        count.value = data
        isRequestSuccess.value = true
      })
      .catch(() => {
        isRequestFailure.value = true
      })
      .finally(() => {
        isRequestPending.value = false
      })
  }

  return { count, increment, isRequestFailure, isRequestSuccess, isRequestPending }
})

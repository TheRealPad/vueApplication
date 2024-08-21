import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getCounts } from '@services'
import { retrieveCountsWatcher } from '@watchers'

export const useRetrieveCountsStore = defineStore('retrieveCounts', () => {
  const counts = ref<number[]>([])
  const isRequestPending = ref(false)
  const isRequestSuccess = ref(false)
  const isRequestFailure = ref(false)

  function retrieveCounts() {
    isRequestPending.value = true
    isRequestSuccess.value = false
    isRequestFailure.value = false

    getCounts()
      .then((data) => {
        counts.value = data
        isRequestSuccess.value = true
      })
      .catch(() => {
        isRequestFailure.value = true
      })
      .finally(() => {
        isRequestPending.value = false
      })
  }

  retrieveCountsWatcher()

  return { counts, retrieveCounts, isRequestFailure, isRequestSuccess, isRequestPending }
})

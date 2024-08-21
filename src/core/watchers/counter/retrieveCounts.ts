import { watch } from 'vue'

import { useRetrieveCountsStore, useIncrementStore } from '@core'

function retrieveCountsWatcher() {
  const countsStore = useRetrieveCountsStore()
  const incrementStore = useIncrementStore()

  watch(
    () => incrementStore.isRequestSuccess,
    (newValue) => {
      if (newValue) {
        countsStore.counts = [...countsStore.counts, incrementStore.count]
      }
    }
  )
}

export { retrieveCountsWatcher }

import { watch } from 'vue'

import { useRetrieveCountsStore, useIncrementStore } from '@core'

function retrieveCountsWatcher() {
  const countsStore = useRetrieveCountsStore()
  const incrementStore = useIncrementStore()

  watch(
    () => incrementStore.state.request.isRequestSuccess,
    (newValue) => {
      if (newValue) {
        countsStore.state.counts = [...countsStore.state.counts, incrementStore.state.count]
      }
    }
  )
}

export { retrieveCountsWatcher }

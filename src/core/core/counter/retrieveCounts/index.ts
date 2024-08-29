import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { retrieveCountsWatcher } from '@watchers'
import { setRequestStateToPending } from '@utils/setRequestStateToPending'
import { setRequestStateToSuccess } from '@utils/setRequestStateToSuccess'
import { setRequestStateToFailure } from '@utils/setRequestStateToFailure'
import { retrieveRepository } from '../../../services/utils'
import { CounterEnum } from '../type'
import type { State } from './type'
import { defaultState } from './type'

export const useRetrieveCountsStore = defineStore(CounterEnum.retrieveCounts, () => {
  const state = ref<State>(defaultState)
  const repository = retrieveRepository()

  const counts = computed(() => state.value.counts)

  function retrieveCounts() {
    state.value = { ...state.value, request: setRequestStateToPending() }

    repository
      .getCounts()
      .then((data) => {
        state.value = {
          counts: data,
          request: setRequestStateToSuccess()
        }
      })
      .catch(() => {
        state.value = { ...state.value, request: setRequestStateToFailure() }
      })
  }

  retrieveCountsWatcher()

  return {
    state,
    retrieveCounts,
    counts
  }
})

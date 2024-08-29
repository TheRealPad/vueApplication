import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getCounts } from '@services'
import { retrieveCountsWatcher } from '@watchers'
import { setRequestStateToPending } from '@utils/setRequestStateToPending'
import { setRequestStateToSuccess } from '@utils/setRequestStateToSuccess'
import { setRequestStateToFailure } from '@utils/setRequestStateToFailure'
import type { State } from './type'
import { defaultState } from './type'

export const useRetrieveCountsStore = defineStore('retrieveCounts', () => {
  const state = ref<State>(defaultState)

  function retrieveCounts() {
    state.value = { ...state.value, request: setRequestStateToPending() }

    getCounts()
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
    retrieveCounts
  }
})

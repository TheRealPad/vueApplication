import { ref } from 'vue'
import { defineStore } from 'pinia'

import { increment as incrementCore } from '@services'
import { setRequestStateToPending } from '@utils/setRequestStateToPending'
import { setRequestStateToSuccess } from '@utils/setRequestStateToSuccess'
import { setRequestStateToFailure } from '@utils/setRequestStateToFailure'
import type { State } from './type'
import { defaultState } from './type'

export const useIncrementStore = defineStore('increment', () => {
  const state = ref<State>(defaultState)

  function increment(data: number) {
    state.value = { ...state.value, request: setRequestStateToPending() }

    incrementCore(state.value.count)
      .then((data) => {
        state.value = { ...state.value, count: data, request: setRequestStateToSuccess() }
      })
      .catch(() => {
        state.value = { ...state.value, request: setRequestStateToFailure() }
      })
  }

  return { state, increment }
})

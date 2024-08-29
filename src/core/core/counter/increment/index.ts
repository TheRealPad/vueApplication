import { ref } from 'vue'
import { defineStore } from 'pinia'

import { setRequestStateToPending } from '@utils/setRequestStateToPending'
import { setRequestStateToSuccess } from '@utils/setRequestStateToSuccess'
import { setRequestStateToFailure } from '@utils/setRequestStateToFailure'
import { retrieveRepository } from '../../../services/utils'
import { CounterEnum } from '../type'
import type { State } from './type'
import { defaultState } from './type'

export const useIncrementStore = defineStore(CounterEnum.increment, () => {
  const state = ref<State>(defaultState)
  const repository = retrieveRepository()

  function increment(data: number) {
    state.value = { ...state.value, request: setRequestStateToPending() }

    repository
      .increment(state.value.count)
      .then((data) => {
        state.value = { ...state.value, count: data, request: setRequestStateToSuccess() }
      })
      .catch(() => {
        state.value = { ...state.value, request: setRequestStateToFailure() }
      })
  }

  return { state, increment }
})

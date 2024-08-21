import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@core/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments the count', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
    store.increment()
    expect(store.count).toBe(1)
  })
})

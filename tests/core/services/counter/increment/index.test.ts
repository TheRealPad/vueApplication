import { describe, it, expect } from 'vitest'

import { increment } from '@services'

describe('getCounts', () => {
  it('should resolve with an empty array after 1 second', async () => {
    const result = await increment(1)

    expect(result).toEqual(2)
  })

  it('should return a promise', () => {
    const result = increment()

    expect(result).toBeInstanceOf(Promise)
  })
})

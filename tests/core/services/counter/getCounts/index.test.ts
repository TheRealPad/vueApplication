import { describe, it, expect } from 'vitest'

import { getCounts } from '@services'

describe('getCounts', () => {
  it('should resolve with an empty array after 1 second', async () => {
    const result = await getCounts()

    expect(result).toEqual([])
  })

  it('should return a promise', () => {
    const result = getCounts()

    expect(result).toBeInstanceOf(Promise)
  })
})

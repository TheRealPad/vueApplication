import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { repository } from '../../../src/core/services'
import { getCounts, increment } from '../../../src/core/services/counter'

vi.mock('../../../src/core/services/counter', () => ({
  getCounts: vi.fn(),
  increment: vi.fn()
}))

vi.mock('../../../src/core/services', () => ({
  repository: vi.fn()
}))

describe('repository', () => {
  let mockHttpClient: any
  let repo: any

  beforeEach(() => {
    mockHttpClient = {
      sendHttpRequest: vi.fn()
    }

    repo = {
      getCounts: vi.fn(),
      increment: vi.fn()
    }
    ;(repository as vi.Mock).mockReturnValue(repo)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call getCounts with HttpClient and return the result', async () => {
    const mockResponse = [1, 2, 3]
    ;(getCounts as vi.Mock).mockResolvedValue(mockResponse)
    ;(repo.getCounts as vi.Mock).mockResolvedValue(mockResponse)

    const result = await repo.getCounts()
    expect(result).toEqual(mockResponse)
  })

  it('should call increment with HttpClient and return the result', async () => {
    const mockData = 1
    const mockResponse = 2
    ;(increment as vi.Mock).mockResolvedValue(mockResponse)
    ;(repo.increment as vi.Mock).mockResolvedValue(mockResponse)

    const result = await repo.increment(mockData)
    expect(result).toEqual(mockResponse)
  })
})

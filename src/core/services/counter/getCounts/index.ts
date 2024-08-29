import type { HttpClient } from '../../../utils/httpClient'

function getCounts(httpClient: HttpClient) {
  return (): Promise<number[]> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve([])
      }, 1000)
    )
  }
}

export { getCounts }

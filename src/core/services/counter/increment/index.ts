import type { HttpClient } from '../../../utils/httpClient'

function increment(httpClient: HttpClient) {
  return (data: number): Promise<number> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(++data)
      }, 1000)
    )
  }
}

export { increment }

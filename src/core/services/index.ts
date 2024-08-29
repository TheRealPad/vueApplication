import type { HttpClient } from '../utils/httpClient'
import { getCounts, increment } from './counter'
import type { Repository } from './type'

function repository(httpClient: HttpClient): Repository {
  return {
    getCounts: getCounts(httpClient),
    increment: increment(httpClient)
  }
}

export { repository }

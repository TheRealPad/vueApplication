import axios from 'axios'

import type { RequestConfig, HttpClient } from '@utils/httpClient'
import type { HttpMethods } from '@utils/httpClient'

function sendRequest<Response>(config: RequestConfig): Promise<Response> {
  const requestData =
    config.method === HttpMethods.GET ? { params: config.data } : { data: config.data }

  return new Promise<Response>((resolve, reject) =>
    axios({
      url: config.baseUrl + config.endpoint,
      method: config.method,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers
      },
      ...requestData
    })
      .then(({ data }) => resolve(data))
      .catch((error) =>
        reject(!!error.response ? error.response.data : !!error.request ? error.request : error)
      )
  )
}

function cleanHeaders(headers: { [p: string]: string } | undefined) {
  return headers
    ? Object.entries(headers)
        .filter(([_, value]) => !!value)
        .reduce((nextHeaders, [key, value]) => ({ ...nextHeaders, [key]: value }), {})
    : undefined
}

function createHttpClient(): HttpClient {
  return {
    sendHttpRequest<Response>(config: RequestConfig): Promise<Response> {
      return sendRequest({
        ...config,
        headers: cleanHeaders(config.headers)
      })
    }
  }
}

export { createHttpClient }

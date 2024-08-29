import { repository } from '../../core/services'
import { createHttpClient } from './httpClient'

export default {
  install(app: any) {
    const httpClient = createHttpClient()
    const repo = repository(httpClient)

    app.config.globalProperties.$repository = repo
  }
}

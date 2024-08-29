import type { Repository } from './type'
import { getCurrentInstance } from 'vue'

function retrieveRepository(): Repository {
  return getCurrentInstance().appContext.config.globalProperties.$repository
}

export { retrieveRepository }

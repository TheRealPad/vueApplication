import type { RequestState } from '../../../utils/requestState'
import { defaultRequestState } from '../../../utils/requestState'

interface State {
  count: number
  request: RequestState
}

const defaultState: State = {
  count: 0,
  request: defaultRequestState
}

export { defaultState }
export type { State }

import type { RequestState } from '../../../utils/requestState'
import { defaultRequestState } from '../../../utils/requestState'

interface State {
  counts: number[]
  request: RequestState
}

const defaultState: State = {
  counts: [],
  request: defaultRequestState
}

export { defaultState }
export type { State }

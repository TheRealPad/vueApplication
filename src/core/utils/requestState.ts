interface RequestState {
  isRequestPending: boolean
  isRequestSuccess: boolean
  isRequestFailure: boolean
}

const defaultRequestState: RequestState = {
  isRequestFailure: false,
  isRequestPending: false,
  isRequestSuccess: false
}

export type { RequestState }
export { defaultRequestState }

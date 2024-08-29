function setRequestStateToPending() {
  return {
    isRequestFailure: false,
    isRequestPending: true,
    isRequestSuccess: false
  }
}

export { setRequestStateToPending }

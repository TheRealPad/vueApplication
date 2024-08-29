function setRequestStateToFailure() {
  return {
    isRequestFailure: true,
    isRequestPending: false,
    isRequestSuccess: false
  }
}

export { setRequestStateToFailure }

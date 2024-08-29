function setRequestStateToSuccess() {
  return {
    isRequestFailure: false,
    isRequestPending: false,
    isRequestSuccess: true
  }
}

export { setRequestStateToSuccess }

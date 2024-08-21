function getCounts(): Promise<number[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([])
    }, 1000)
  )
}

export { getCounts }

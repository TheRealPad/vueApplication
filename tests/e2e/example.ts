describe('My First Test', function () {
  before((browser) => {
    browser.init()
  })

  it('visits the app root url', function () {
    browser.assert.textContains('h1', 'Hello App!')
  })

  after((browser) => browser.end())
})

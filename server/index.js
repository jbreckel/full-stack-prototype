import app from './server'

const server = app.listen(3000, () => {
  console.log('server started')
})

let currentApp = app
if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}

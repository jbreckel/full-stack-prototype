import nconf from 'nconf'

import app from './server'

nconf
  .use('memory')
  .env([
    'PORT',
    'HOST',
  ])
  .defaults({
    PORT: 3000,
    HOST: '0.0.0.0',
  })

const {
  PORT,
  HOST,
} = nconf.get()

const server = app.listen(PORT, HOST, () => {
  console.log('server started', `${HOST}:${PORT}`)
})

let currentApp = app
if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}

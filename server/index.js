import nconf from 'nconf'
import mongoose from 'mongoose'

import app from './server'

nconf
  .use('memory')
  .env([
    'PORT',
    'HOST',
    'MONGODB_URI',
  ])
  .defaults({
    PORT: 3000,
    HOST: '0.0.0.0',
  })
  .required([
    'MONGODB_URI',
  ])

const {
  PORT,
  HOST,
  MONGODB_URI,
} = nconf.get()

mongoose.connect(MONGODB_URI)
mongoose.Promise = global.Promise

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

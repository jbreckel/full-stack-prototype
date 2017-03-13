import { resolve } from 'path'

import express, { Router } from 'express'
import compression from 'compression'

import httpProxy from 'http-proxy-middleware'

import graphqlRouter from './graphql'
import htmlRouter from './html'

const app = express()

app.use('*', compression({ threshold: 0 }))
if ( process.env.NODE_ENV === 'development') {
  app.use('/bundle', Router()
    .use(httpProxy({
      target: 'http://localhost:3001/',
      logLevel: 'silent',
    }))
  )
} else {
  app.use('/bundle', express.static(`${resolve(__dirname, 'public/bundle')}`))
}

app.use(graphqlRouter())

app.use('*', htmlRouter)

export default app

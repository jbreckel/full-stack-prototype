import express from 'express'

import graphqlRouter from './graphql'

const app = express()

app.use(graphqlRouter())

export default app

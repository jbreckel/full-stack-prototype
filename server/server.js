import express from 'express'

const app = express()

app.get('/graphql', (req, res) => {
  res.send({
    message: 'Here is some place were a graphql server would fit in perfectly',
  })
})

app.get('/graphiql', (req, res) => {
  res.send({
    message: 'Give me a graphical UI for graphql!',
  })
})

export default app

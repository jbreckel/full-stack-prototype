import request from 'supertest'

import app from '../server/server'

describe('server', () => {
  let serverInstance
  beforeEach((done) => {
    serverInstance = app.listen(1234, (err) => {
      if (err) throw err
      done()
    })
  })

  afterEach((done) => {
    serverInstance.close(done)
  })

  it('can start server', () => {})

  it('`/` returns 404', (done) => {
    request(serverInstance)
      .get('/')
      .expect(404, done)
  })

  describe('graphql', () => {
    it('`/graphql` returns `200` and `GET query missing`', (done) => {
      request(serverInstance)
      .get('/graphql')
      .expect(200)
      .expect('GET query missing', done)
    })

    it('`/graphiql` returns 200', (done) => {
      request(serverInstance)
      .get('/graphiql')
      .expect(200, done)
    })
  })
})

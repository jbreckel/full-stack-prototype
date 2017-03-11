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

    // this only tests one example. graphql schema test will follow shortly
    it('can query `__typename` of product', (done) => {
      request(serverInstance)
      .get('/graphql?query=%7B%0A%20%20products%20%7B%0A%20%20%20%20__typename%0A%20%20%7D%0A%7D')
      .expect(200)
      .end((err, res) => {
        if (err) throw err
        else {
          expect(res.body).toMatchSnapshot()
          done()
        }
      })
    })

    it('`/graphiql` returns 200', (done) => {
      request(serverInstance)
      .get('/graphiql')
      .expect(200, done)
    })
  })
})

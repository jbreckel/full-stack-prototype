import gql from 'graphql-tag'

import execute from './mockServer'

describe('category', () => {
  it('can query categories', (done) => {
    execute(gql`
      query {
        categories {
          id
          name
        }
      }
    `)
      .then((result) => {
        expect(result).toMatchSnapshot()
        done()
      })
  })

  it('can query category with id', (done) => {
    execute(gql`
      query getCategory($id: ID!){
        category(id: $id) {
          id
          name
        }
      }
    `,
      {
        id: 'id',
      })
      .then((result) => {
        expect(result).toMatchSnapshot()
        done()
      })
  })
})

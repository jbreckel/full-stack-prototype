import gql from 'graphql-tag'

import execute from './mockServer'

describe('product', () => {
  it('can query products', (done) => {
    execute(gql`
      query {
        products {
          id
          name
          purchasePrice
          salePrice
          category {
            id
            name
          }
        }
      }
    `)
      .then((result) => {
        expect(result).toMatchSnapshot()
        done()
      })
  })

  it('can query product with id', (done) => {
    execute(gql`
      query getProduct($id: ID!){
        product(id: $id) {
          id
          name
          purchasePrice
          salePrice
          category {
            id
            name
          }
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

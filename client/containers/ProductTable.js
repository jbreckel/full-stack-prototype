import { compose } from 'recompose'

import { graphql } from 'react-apollo'

import ProductTableQuery from '../types/graphql/query/ProductTable.graphql'
import updateProduct from '../types/graphql/mutation/updateProduct.graphql'
import removeProduct from '../types/graphql/mutation/removeProduct.graphql'

import ProductTable from '../components/ProductTable'

export default compose(
  graphql(updateProduct, {
    props: ({ mutate }) => ({
      updateProduct: (product) => mutate({
        variables: { product },
      }),
    }),
  }),
  graphql(removeProduct, {
    props: ({ mutate }) => ({
      removeProduct: (product) => mutate({
        variables: { product },
      }),
    }),
  }),
  graphql(ProductTableQuery, {
    props: ({ data: { products = [], ...querySubscriptions } }) => ({
      products,
      querySubscriptions,
    }),
  }),
)(ProductTable)

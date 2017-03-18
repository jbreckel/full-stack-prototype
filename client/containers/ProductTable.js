import { compose } from 'recompose'
import { connect } from 'react-redux'
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
  connect(
    ({ categoryView }) => ({
      categories: categoryView.categories,
    }),
  ),
  graphql(ProductTableQuery, {
    options: ({ categories }) => ({
      variables: {
        categories,
      },
    }),
    props: ({ data: { products = [], ...querySubscriptions } }) => ({
      products,
      querySubscriptions,
    }),
  }),
)(ProductTable)

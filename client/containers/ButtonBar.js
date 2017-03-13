import { compose } from 'recompose'

import { graphql } from 'react-apollo'

import addProduct from '../types/graphql/mutation/addProduct.graphql'
import addCategory from '../types/graphql/mutation/addCategory.graphql'

import ButtonBar from '../components/ButtonBar'

export default compose(
  graphql(addProduct, {
    props: ({ mutate }) => ({
      addProduct: (product) => mutate({
        variables: { product },
        optimisticResponse: {
          __typename: 'Mutation',
          addProduct: {
            __typename: 'Product',
            ...product,
          },
        },
      }),
    }),
  }),
  graphql(addCategory, {
    props: ({ mutate }) => ({
      addCategory: (category) => mutate({
        variables: { category },
        optimisticResponse: {
          __typename: 'Mutation',
          addCategory: {
            __typename: 'Product',
            ...category,
          },
        },
      }),
    }),
  }),
)(ButtonBar)

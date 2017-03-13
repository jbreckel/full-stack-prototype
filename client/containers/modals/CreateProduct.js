import { compose, mapProps } from 'recompose'

import { graphql } from 'react-apollo'

import CreateOrEditProduct from '../../components/modals/CreateOrEditProduct'
import CreateOrUpdateProduct from '../../types/graphql/query/CreateOrUpdateProduct.graphql'
import addProduct from '../../types/graphql/mutation/addProduct.graphql'

export default compose(
  mapProps((props) => ({
    ...props,
    buttonTitle: 'Create product',
  })),
  graphql(addProduct, {
    props: ({ mutate }) => ({
      sendProduct: (product) => mutate({
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
  graphql(CreateOrUpdateProduct, {
    props: ({ data: { categories, ...querySubscriptions } }) => ({
      categories,
      querySubscriptions,
    }),
  }),
)(CreateOrEditProduct)

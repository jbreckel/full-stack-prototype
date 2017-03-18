import { compose, mapProps } from 'recompose'

import { graphql } from 'react-apollo'

import CreateOrEditProduct from '../../components/modals/CreateOrEditProduct'
import CreateOrUpdateProduct from '../../types/graphql/query/CreateOrUpdateProduct.graphql'
import updateProduct from '../../types/graphql/mutation/updateProduct.graphql'

export default compose(
  mapProps((props) => ({
    ...props,
    buttonTitle: props.children,
  })),
  graphql(updateProduct, {
    props: ({ mutate }) => ({
      // as we want to omit __typename
      // eslint-disable-next-line no-unused-vars
      sendProduct: ({ __typename, category, ...product }) => mutate({
        variables: {
          product: {
            ...product,
            category: category && category.id,
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

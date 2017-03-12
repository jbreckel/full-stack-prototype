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
      sendProduct: (product) => mutate({
        variables: { product },
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

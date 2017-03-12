import { compose, mapProps } from 'recompose'

import { graphql } from 'react-apollo'

import DeleteProduct from '../../components/modals/DeleteProduct'
import removeProduct from '../../types/graphql/mutation/removeProduct.graphql'

export default compose(
  mapProps((props) => ({
    ...props,
    buttonTitle: props.children,
  })),
  graphql(removeProduct, {
    props: ({ mutate, ownProps: { product: { id } = {} } }) => ({
      removeProduct: () => mutate({
        variables: { id },
      }),
    }),
  }),
)(DeleteProduct)

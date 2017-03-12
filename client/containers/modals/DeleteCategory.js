import { compose, mapProps } from 'recompose'

import { graphql } from 'react-apollo'

import DeleteCategory from '../../components/modals/DeleteCategory'
import removeCategory from '../../types/graphql/mutation/removeCategory.graphql'

export default compose(
  mapProps((props) => ({
    ...props,
    buttonTitle: props.children,
  })),
  graphql(removeCategory, {
    props: ({ mutate, ownProps: { product: { id } = {} } }) => ({
      removeCategory: () => mutate({
        variables: { id },
      }),
    }),
  }),
)(DeleteCategory)

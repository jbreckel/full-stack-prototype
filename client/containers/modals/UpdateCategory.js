import { compose, mapProps } from 'recompose'

import { graphql } from 'react-apollo'

import CreateOrEditCategory from '../../components/modals/CreateOrEditCategory'
import updateCategory from '../../types/graphql/mutation/updateCategory.graphql'

export default compose(
  mapProps((props) => ({
    ...props,
    buttonTitle: props.children,
  })),
  graphql(updateCategory, {
    props: ({ mutate }) => ({
      sendCategory: (product) => mutate({
        variables: { product },
      }),
    }),
  }),
)(CreateOrEditCategory)

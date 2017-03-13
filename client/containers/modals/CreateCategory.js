import { compose, mapProps } from 'recompose'

import { graphql } from 'react-apollo'

import CreateOrEditCategory from '../../components/modals/CreateOrEditCategory'
import addCategory from '../../types/graphql/mutation/addCategory.graphql'

export default compose(
  mapProps((props) => ({
    ...props,
    buttonTitle: 'Create category',
  })),
  graphql(addCategory, {
    props: ({ mutate }) => ({
      sendCategory: (category) => mutate({
        variables: { category },
        optimisticResponse: {
          __typename: 'Mutation',
          addCategory: {
            __typename: 'Category',
            ...category,
          },
        },
      }),
    }),
  }),
)(CreateOrEditCategory)

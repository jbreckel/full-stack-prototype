import { compose } from 'recompose'

import { graphql } from 'react-apollo'

import CategoryListQuery from '../types/graphql/query/CategoryList.graphql'

import CategoryList from '../components/CategoryList'

export default compose(
  graphql(CategoryListQuery, {
    props: ({ data: { categories = [], ...querySubscriptions } }) => ({
      categories,
      querySubscriptions,
    }),
  }),
)(CategoryList)

import { compose, mapProps, withHandlers } from 'recompose'

import { connect } from 'react-redux'

import { graphql } from 'react-apollo'

import {
  addCategoryToView,
  removeCategoryFromView,
  clearCategoryView,
} from '../actions'

import CategoryListQuery from '../types/graphql/query/CategoryList.graphql'

import CategoryList from '../components/CategoryList'

export default compose(
  graphql(CategoryListQuery, {
    props: ({ data: { categories = [], ...querySubscriptions } }) => ({
      categories,
      querySubscriptions,
    }),
  }),
  connect(
    ({ categoryView }) => ({
      selectedCategories: categoryView.categories,
    }),
    (dispatch) => ({
      addCategory: (categoryId) => dispatch(addCategoryToView(categoryId)),
      removeCategory: (categoryId) => dispatch(removeCategoryFromView(categoryId)),
      clear: () => dispatch(clearCategoryView()),
    }),
  ),
  withHandlers({
    toggleView: ({
      selectedCategories,
      addCategory,
      removeCategory,
    }) => (id = null) => {
      if (selectedCategories.indexOf(id) !== -1) {
        removeCategory(id)
      } else {
        addCategory(id)
      }
    },
  }),
  mapProps(({ categories, selectedCategories = [], ...rest }) => ({
    ...rest,
    selectedCategories,
    categories: categories.map(({ id, ...category }) => ({
      ...category,
      id,
      selected: selectedCategories.indexOf(id) !== -1,
    })),
  })),
)(CategoryList)

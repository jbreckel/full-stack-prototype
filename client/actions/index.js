import {
  ADD_CATEGORY_TO_VIEW,
  REMOVE_CATEGORY_FROM_VIEW,
  CLEAR_CATEGORY_VIEW,
} from './actionTypes'

export const addCategoryToView = (categoryId) => ({
  type: ADD_CATEGORY_TO_VIEW,
  payload: {
    categoryId,
  },
})

export const removeCategoryFromView = (categoryId) => ({
  type: REMOVE_CATEGORY_FROM_VIEW,
  payload: {
    categoryId,
  },
})

export const clearCategoryView = () => ({
  type: CLEAR_CATEGORY_VIEW,
})

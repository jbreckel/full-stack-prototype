import { uniq } from 'lodash'

import {
  ADD_CATEGORY_TO_VIEW,
  REMOVE_CATEGORY_FROM_VIEW,
  CLEAR_CATEGORY_VIEW,
} from '../actions/actionTypes'

const initialState = {
  categories: [],
}

export const categoryView = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY_TO_VIEW:
      return {
        ...state,
        categories: uniq(state.categories
          .concat(action.payload.categoryId)),
      }
    case REMOVE_CATEGORY_FROM_VIEW:
      return {
        ...state,
        categories: state.categories.filter((id) => id !== action.payload.categoryId),
      }
    case CLEAR_CATEGORY_VIEW:
      return {
        ...state,
        categories: [],
      }
    default:
      return state
  }
}

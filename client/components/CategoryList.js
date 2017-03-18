import React from 'react'

import { CheckBox } from './inputs'

import CategoryRow from './CategoryRow'

const CategoryList = ({ categories, querySubscriptions: { loading }, toggleView }) => (
  <div>
    {
      loading
        ? 'Loading'
        : [
          ...categories.map((category) => (
            <CategoryRow {...{ category, toggleView }} />
          )),
          <div
            key="without"
          >
            <CheckBox
              id="without"
              isChecked={ false }
              toggleView={ () => toggleView() }
            >
              Without category
            </CheckBox>
          </div>,
        ]
    }
  </div>
)

export default CategoryList

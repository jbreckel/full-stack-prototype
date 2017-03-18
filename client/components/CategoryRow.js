import React from 'react'

import UpdateCategory from '../containers/modals/UpdateCategory'
import DeleteCategory from '../containers/modals/DeleteCategory'

import { CheckBox } from './inputs'

const CategoryRow = ({
  category,
  category: { id, name, selected },
  toggleView,
}) => (
  <div>
    <UpdateCategory category={ category } >Edit</UpdateCategory>
    <DeleteCategory category={ category } >X</DeleteCategory>
    <CheckBox
      key={id}
      id={id}
      isChecked={ selected }
      toggleView={ () => toggleView(id) }
    >
      { name }
    </CheckBox>
  </div>
)

export default CategoryRow

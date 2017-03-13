import React from 'react'

import { compose, withState, withHandlers } from 'recompose'

import {
  TextInput,
} from '../inputs'

const ProductForm = ({
  onChange,
  category: {
    name,
  },
}) => (
  <div>
    {/* name */}
    Name:
    <TextInput
      value={ name }
      onChange={ onChange('name') }
    />
    <br />
  </div>
)

export default compose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    openModal: ({ setIsOpen }) => () => setIsOpen(true),
    closeModal: ({ setIsOpen }) => () => setIsOpen(false),
    onChange: ({ category, setCategory }) => (key) => (value) => {
      setCategory({
        ...category,
        [key]: value,
      })
    },
  }),
)(ProductForm)

import React, { PropTypes } from 'react'

import { compose, withState, withHandlers } from 'recompose'

import {
  TextInput,
  NumberInput,
  SelectInput,
} from '../inputs'

const ProductForm = ({
  onChange,
  product: {
    name,
    purchasePrice,
    salePrice,
    categoryId,
  },
  categories,
}) => (
  <div>
    {/* name */}
    Name:
    <TextInput
      value={ name }
      onChange={ onChange('name') }
    />
    <br />
    {/* purchasePrice */}
    Purchase price:
    <NumberInput
      value={ purchasePrice }
      step="0.01"
      onChange={ onChange('purchasePrice') }
    />
    <br />
    {/* salePrice */}
    Sale price:
    <NumberInput
      value={ salePrice }
      step="0.01"
      onChange={ onChange('salePrice') }
    />
    <br />
    {/* categoryId */}
    Category:
    <SelectInput
      value={ categoryId }
      options={ [{ id: null, name: 'none' }, ...categories] }
      onChange={ onChange('categoryId') }
    />
    <br />
  </div>
)

export default compose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    openModal: ({ setIsOpen }) => () => setIsOpen(true),
    closeModal: ({ setIsOpen }) => () => setIsOpen(false),
    onChange: ({ product, setProduct }) => (key) => (value) => {
      setProduct({
        ...product,
        [key]: value,
      })
    },
  }),
)(ProductForm)

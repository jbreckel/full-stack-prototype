import React from 'react'

const SelectInput = ({ options, onChange, ...props }) => (
  <select
    { ...props }
    onChange={ (event) => onChange(event.target.value) }
  >
    {
      options.map(({ id, name }) => (
        <option
          key={ id }
          value={ id }
        >
          { name }
        </option>
      ))
    }
  </select>
)

export default SelectInput

import React from 'react'

const Input = ({ onChange, ...props }) => (
  <input
    { ...props }
    onChange={ (event) => onChange(event.target.value) }
  />
)

export default Input

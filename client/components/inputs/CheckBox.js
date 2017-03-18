import React from 'react'

import { compose, withState, withHandlers } from 'recompose'

const CheckBox = ({ id, children, isChecked, toggle }) => (
  <div style={{ display: 'inline' }}>
    <button
      onClick={toggle}
    >
      <label
        htmlFor={`checkbox-${id}`}
      >
        <input
          name={`checkbox-${id}`}
          type="checkbox"
          value={ children }
          checked={isChecked}
        />
        { children }
      </label>
    </button>
  </div>
)

export default compose(
  withState('isChecked', 'setIsChecked', ({ isChecked }) => isChecked || false),
  withHandlers({
    toggle: ({ setIsChecked, isChecked, toggleView = () => null }) => () =>
      setIsChecked(!isChecked, toggleView),
  }),
)(CheckBox)

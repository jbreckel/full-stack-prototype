import React from 'react'
import Modal from 'react-modal'

import { compose, withState, withHandlers } from 'recompose'

const Delete = ({
  isOpen,
  openModal,
  closeModal,
  buttonTitle,
  modalProps,
  children,
}) => (
  <div
    style={{
      display: 'inline',
    }}
  >
    <button onClick={ openModal }>{ buttonTitle }</button>
    <Modal
      { ...modalProps }
      isOpen={ isOpen }
    >
      { children(closeModal) }
    </Modal>
  </div>
)

export default compose(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    openModal: ({ setIsOpen }) => () => setIsOpen(true),
    closeModal: ({ setIsOpen }) => () => setIsOpen(false),
  }),
)(Delete)

import React from 'react'
import Modal from 'react-modal'

import { compose, withState, withHandlers } from 'recompose'

const CreateOrEditModal = ({
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
      <button onClick={ closeModal }>X</button>
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
)(CreateOrEditModal)

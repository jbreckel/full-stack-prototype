import React from 'react'

import { compose, withHandlers } from 'recompose'

import DeleteModal from './DeleteModal'

const DeleteProduct = ({
  buttonTitle,
  ...rest
}) => (
  <DeleteModal
    {...{
      buttonTitle,
      modalProps: {
        contentLabel: buttonTitle,
      },
    }}
  >
    {
      (closeModal) => (
        <ModalBody { ...{ ...rest, closeModal } } />
      )
    }
  </DeleteModal>
)
const ModalBody = compose(
  withHandlers(({ closeModal, removeProduct }) => ({
    yesClick: () => removeProduct().then(closeModal),
    noClick: () => closeModal(),
  })),
)(({ yesClick, noClick, product: { name } }) => (
  <div>
    Do you really wish to delete &quot;{ name }&quot;?
    <button onClick={ yesClick }>Yes</button>
    <button onClick={ noClick }>No</button>
  </div>
))

export default compose(
)(DeleteProduct)

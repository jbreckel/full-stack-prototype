import React from 'react'

import { compose, withHandlers } from 'recompose'

import DeleteModal from './DeleteModal'

const DeleteCategory = ({
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
  withHandlers(({ closeModal, removeCategory }) => ({
    yesClick: () => removeCategory().then(closeModal),
    noClick: () => closeModal(),
  })),
)(({ yesClick, noClick, category: { name } }) => (
  <div>
    Do you really wish to delete &quot;{ name }&quot;?
    <button onClick={ yesClick }>Yes</button>
    <button onClick={ noClick }>No</button>
  </div>
))

export default compose(
)(DeleteCategory)

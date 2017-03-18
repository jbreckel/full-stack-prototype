import React from 'react'

import { compose, withState } from 'recompose'

import { cloneDeep } from 'lodash'

import CreateOrEditModal from './CreateOrEditModal'
import CategoryForm from './CategoryForm'

const CreateOrEditCategory = ({
  buttonTitle,
  ...rest
}) => (
  <CreateOrEditModal
    {...{
      buttonTitle,
      modalProps: {
        contentLabel: buttonTitle,
      },
    }}
  >
    {
      (closeModal) => (
        <ModalBody
          {...{
            ...rest,
            closeModal,
          }}
        />
      )
    }
  </CreateOrEditModal>
)

const ModalBody = compose(
  withState('category', 'setCategory', ({ category = {} }) => cloneDeep(category)),
)(({ closeModal, category, sendCategory, ...rest }) => (
  <div>
    <CategoryForm
      {...{
        ...rest,
        category,
      }}
    />
    <button
      onClick={
        () => {
          sendCategory(category).then(() => closeModal())
        }
      }
    >
      Submit
    </button>
  </div>
))

export default compose(
)(CreateOrEditCategory)

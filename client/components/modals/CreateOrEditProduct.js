import React from 'react'

import { compose, withState } from 'recompose'

import { cloneDeep } from 'lodash'

import CreateOrEditModal from './CreateOrEditModal'
import ProductForm from './ProductForm'

const CreateOrEditProduct = ({
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
  withState('product', 'setProduct', ({ product = {} }) => cloneDeep(product)),
)(({ closeModal, product, sendProduct, ...rest }) => (
  <div>
    <ProductForm
      {...{
        ...rest,
        product,
      }}
    />
    <button
      onClick={
        () => {
          sendProduct(product).then(() => closeModal())
        }
      }
    >
      Submit
    </button>
  </div>
))

export default compose(
)(CreateOrEditProduct)

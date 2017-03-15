import mongoose from 'mongoose'

import Product from '../../../models/product'

import productQuery from '../../product/query/single'

export default (root, { product }, ctx, options) => {
  const id = mongoose.Types.ObjectId()
  return new Product({
    ...product,
    _id: id,
  })
    .save()
    .then(() => productQuery(root, { id }, ctx, options))
}

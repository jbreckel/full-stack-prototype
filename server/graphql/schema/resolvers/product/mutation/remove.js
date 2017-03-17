import infoToProjection from 'graphql-mongodb-projection'

import Product from '../../../models/product'

export default (root, { id }, ctx, options) =>
  Product
    .findByIdAndRemove(id, {
      select: infoToProjection(options),
    })
    .populate('category')
    .exec()

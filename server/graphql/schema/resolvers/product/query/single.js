import infoToProjection from 'graphql-mongodb-projection'

import Product from '../../../models/product'

export default (root, params, ctx, options) =>
  Product
    .findById(params.id)
    .populate('category')
    .select(infoToProjection(options))
    .exec()

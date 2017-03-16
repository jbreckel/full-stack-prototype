import infoToProjection from 'graphql-mongodb-projection'

import Category from '../../../models/category'

export default (root, params, ctx, options) =>
  Category
    .findById(params.id, { lean: true })
    .select(infoToProjection(options))
    .exec()

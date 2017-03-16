import infoToProjection from 'graphql-mongodb-projection'

import Category from '../../../models/category'

export default (root, { id }, ctx, options) =>
  Category
    .findByIdAndRemove(id, {
      select: infoToProjection(options),
    })
    .exec()

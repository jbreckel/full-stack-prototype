import infoToProjection from 'graphql-mongodb-projection'

import Category from '../../../models/category'

export default (root, params, ctx, options) =>
  Category
    .find({})
    .select(infoToProjection(options))
    .exec()

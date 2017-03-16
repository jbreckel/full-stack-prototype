import infoToProjection from 'graphql-mongodb-projection'

import Product from '../../../models/product'

export default (root, { categories = [] }, ctx, options) => {
  console.log('select', infoToProjection(options))
  const query = Product
    .find({})
    .populate({ path: 'category' })
    .select(infoToProjection(options))

  if (categories.length > 0) {
    query
      .where('category')
      .in(categories)
  }
  return query
    .exec()
}

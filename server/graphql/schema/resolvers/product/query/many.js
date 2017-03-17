import infoToProjection from 'graphql-mongodb-projection'

import Product from '../../../models/product'

export default (root, { categories = [] }, ctx, options) => {
  const query = Product
    .find({})
    .populate({ path: 'category' })
    .select(infoToProjection(options))

  if (categories.length > 0) {
    const categoriesWithoutNull = categories.filter((c) => c != null)
    query
      .or(
        [
          categories.indexOf(null) !== -1 && { category: null },
          categoriesWithoutNull.length > 0 && { category: { $in: categoriesWithoutNull } },
        ].filter((c) => c)
      )
  }
  return query
    .exec()
}

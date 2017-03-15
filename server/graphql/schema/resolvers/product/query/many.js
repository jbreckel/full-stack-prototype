import Product from '../../../models/product'
import getProjection from '../../../utils/get-projection'

export default (root, { categories = [] }, ctx, options) => {
  const query = Product
    .find({})
    .populate({ path: 'category' })
    .select(getProjection(options.fieldNodes[0]))

  if (categories.length > 0) {
    query
      .where('category')
      .in(categories)
  }
  return query
    .exec()
}

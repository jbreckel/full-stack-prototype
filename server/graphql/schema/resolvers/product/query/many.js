import Product from '../../../models/product'
import getProjection from '../../../utils/get-projection'

export default (root, { category }, ctx, options) =>
  Product
    .find({})
    .populate({
      path: 'category',
      match: { _id: category },
    })
    .select({
      ...getProjection(options.fieldNodes[0]),
      // always select category to allow filter even when not requested in graphql
      category: 1,
    })
    .exec()
    // no filter when category is not specified
    .then((res) => (!category ? res : res.filter(({ category: c }) => c)))

import Product from '../../../models/product'
import getProjection from '../../../utils/get-projection'

export default (root, { category }, ctx, options) =>
  Product
    .find({})
    .populate({
      path: 'category',
      match: { _id: category },
    })
    .exec()
    // no filter when category is not specified
    .then((res) => (!category ? res : res.filter(({ category: c }) => c)))

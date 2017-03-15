import Product from '../../../models/product'
import getProjection from '../../../utils/get-projection'

export default (root, params, ctx, options) =>
  Product
    .findById(params.id)
    .populate('category')
    .select(getProjection(options.fieldNodes[0]))
    .exec()

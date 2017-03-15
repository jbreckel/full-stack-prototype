import Category from '../../../models/category'
import getProjection from '../../../utils/get-projection'

export default (root, params, ctx, options) =>
  Category
    .find({})
    .select(getProjection(options.fieldNodes[0]))
    .exec()

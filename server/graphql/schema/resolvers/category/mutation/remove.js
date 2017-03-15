import getProjection from '../../../utils/get-projection'

import Category from '../../../models/category'

export default (root, { id }, ctx, options) =>
  Category
    .findByIdAndRemove(id, {
      select: getProjection(options.fieldNodes[0]),
    })
    .exec()

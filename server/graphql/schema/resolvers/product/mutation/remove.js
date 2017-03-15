import getProjection from '../../../utils/get-projection'

import Product from '../../../models/product'

export default (root, { id }, ctx, options) =>
  Product
    .findByIdAndRemove(id, {
      select: getProjection(options.fieldNodes[0]),
    })
    .exec()

import Product from '../../../models/product'

import productQuery from '../../product/query/single'

export default (root, { product: { id, ...product } }, ctx, options) =>
  Product
    .findByIdAndUpdate(id, product, { new: true })
    .exec()
    .then(() => productQuery(root, { id }, ctx, options))

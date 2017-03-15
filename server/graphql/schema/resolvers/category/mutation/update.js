import Category from '../../../models/category'

import categoryQuery from '../../category/query/single'

export default (root, { category: { id, ...category } }, ctx, options) =>
  Category
    .findByIdAndUpdate(id, category, { new: true })
    .exec()
    .then(() => categoryQuery(root, { id }, ctx, options))

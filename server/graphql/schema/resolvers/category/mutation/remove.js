import infoToProjection from 'graphql-mongodb-projection'

import Category from '../../../models/category'

import findProducts from '../../product/query/many'
import updateProduct from '../../product/mutation/update'

export default (root, { id }, ctx, options) =>
  Category
    .findByIdAndRemove(id, {
      select: infoToProjection(options),
    })
    .exec()
    .then((doc) =>
      findProducts(root, { categories: [id] }, ctx, options)
        .then((products) =>
          Promise.all(products.map(({ id: pid }) =>
            updateProduct(root, { product: { id: pid, category: null } }, ctx, options)
          )).then(() => doc)
        )
      )

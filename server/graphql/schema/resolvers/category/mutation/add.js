import mongoose from 'mongoose'

import Category from '../../../models/category'

export default (root, { category }) =>
  new Category({
    ...category,
    _id: mongoose.Types.ObjectId(),
  }).save()

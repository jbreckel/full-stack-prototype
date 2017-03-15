import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    select: true,
  },
  name: {
    type: String,
    required: true,
    select: true,
  },
})

export default mongoose.model('Category', categorySchema)

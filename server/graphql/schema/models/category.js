import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Category', categorySchema)

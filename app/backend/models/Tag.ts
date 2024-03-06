import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: Map,
      of: String,
      required: true
    },
  },
  { timestamps: true }
);

const Tag = mongoose.model('Tag', tagSchema);

export default Tag;

import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: Map,
      of: String,
      required: true
    },
    // Add array holding post IDs with this tag? 
    // otherwise could be slow to search by tag
  },
  { timestamps: true }
);

const Tag = mongoose.model('Tag', tagSchema);

export default Tag;

import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    authors: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
      validate: {
        validator: function(arr: Array<mongoose.Schema.Types.ObjectId>) {
          return arr.length > 0;
        },
        message: 'At least one author must be associated with the post.'
      },
      required: true
    },
    title: { type: String, required: true },
    bodytext: { type: String, required: true },
    tags: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
      validate: {
        validator: function(arr: Array<String>) {
          return arr.length > 0;
        },
        message: 'At least one tag must be associated with the post.'
      },
      required: true
    },
    comments: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
      default: [],
      required: true
    },
    public: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;

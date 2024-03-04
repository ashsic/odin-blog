import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model('Comment', commentSchema);

export default Post;

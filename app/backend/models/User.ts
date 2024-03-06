import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    fullname: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    password: { type: String, required: true },
    adminStatus: { type: Boolean, required: true },
    posts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
      default: [],
      required: true
    }
    // Comments?
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

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
  }
);

const User = mongoose.model('User', userSchema);

export default User;

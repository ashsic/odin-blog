import mongoose from "mongoose";
import { config } from "dotenv";

import User from "./User";
import Post from "./Post";

config();

const connectDb = () => {
  const mongoDB: string = process.env.DB_URL || '';
  return mongoose.connect(mongoDB);
}

const models = { User, Post };

export { connectDb, models };

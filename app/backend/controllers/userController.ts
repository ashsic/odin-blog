import { models } from '../models/index';
import { Request, Response } from 'express';

const getUsers = async (req: Request, res: Response) => {
  try{
    const users = await models.User.find({}) ?? 'Undefined';
    return res.send(users);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await models.User.find({ _id: req.params.userid }) ?? 'Undefined';
    return res.send(user);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const getUserPosts = async (req: Request, res: Response) => {
  try {
    const posts = await models.User.find({ _id: req.params.userid }, { posts: 1 }) ?? 'Undefined';
    return res.send(posts);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

export {
  getUsers,
  getUser,
  getUserPosts
};

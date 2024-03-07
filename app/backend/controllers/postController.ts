import { models } from "../models";
import { Request, Response } from 'express';

const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = new models.Post({
      authors: req.body.authors,
      title: req.body.title,
      bodytext: req.body.bodytext,
      tags: req.body.tags,
      comments: req.body.comments,
      public: req.body.public
    });
    await newPost.save()
    return res.send(newPost);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await models.Post.find({}) ?? 'Undefined';
    return res.send(posts);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const thisPost = await models.Post.find({ _id: req.params.postid }) ?? 'Undefined';
    return res.send(thisPost);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await models.Post.findOne({_id: req.params.postid });
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
    }
    await models.Post.deleteOne({ _id: req.params.postid });
    res.send('Post deleted')
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

export {
  createPost,
  getPosts,
  getPost,
  deletePost
};

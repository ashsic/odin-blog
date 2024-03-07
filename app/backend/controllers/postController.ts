import { models } from "../models";
import { Request, Response } from 'express';

const createPost = async (req: Request, res: Response) => {
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
};

const getPosts = async (req: Request, res: Response) => {
  const posts = await models.Post.find({}) ?? 'Undefined';
  return res.send(posts);
};

const getPost = async (req: Request, res: Response) => {
  const thisPost = await models.Post.find({ _id: req.params.postid }) ?? 'Undefined';
  return res.send(thisPost);
};

const deletePost = async (req: Request, res: Response) => {
  const post = await models.Post.findOne({_id: req.params.postid });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  await models.Post.deleteOne({ _id: req.params.postid });

  res.send('Post deleted')
};


export {
  createPost,
  getPosts,
  getPost,
  deletePost
};

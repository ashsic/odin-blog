import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

router.get('/', async (req: CustomRequest, res) => {
  const posts = await req.context?.models?.Post?.find({}) ?? 'Undefined';
  return res.send(posts);
});

router.get('/:postid', async (req: CustomRequest, res) => {
  const post = await req.context?.models?.Post?.find({ _id: req.params.postid }) ?? 'Undefined';
  return res.send(post);
});

router.post('/', async (req: CustomRequest, res) => {
  const Post = await req.context?.models?.Post;
  const post = new Post({
    authors: req.body.authors,
    title: req.body.title,
    bodytext: req.body.bodytext,
    tags: req.body.tags,
    comments: req.body.comments,
    public: req.body.public
  });

  await post.save()

  return res.send(post);
});

export default router;


// curl test cmd

// curl -X POST -H 'Content-Type: application/json' -d '{"authors": ["65e63d6d52dc40ba5036ad2c"], "title": "testing defaults", "bodytext": "test", "tags": ["65e8c15134bf6d33344e82f9"] ,"public": true}' http://localhost:3000/posts

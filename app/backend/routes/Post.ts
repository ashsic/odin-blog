import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

router.get('/', async (req: CustomRequest, res) => {
  const posts = await req.context?.models?.Post?.find({}) ?? 'Undefined';
  return res.send(posts);
});

router.post('/', async (req: CustomRequest, res) => {
  const Post = await req.context?.models?.Post;
  const post = new Post({
    authors: req.body.authors,
    title: req.body.title,
    bodytext: req.body.bodytext,
    tags: req.body.tags
  });

  await post.save()

  return res.send(post);
});

export default router;

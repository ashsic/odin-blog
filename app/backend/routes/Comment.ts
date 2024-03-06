import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

// Do we want this?
router.get('/', async (req: CustomRequest, res) => {
  const comments = await req.context?.models?.Comment?.find({}) ?? 'Undefined';
  return res.send(comments);
});

router.get('/:userid/comments', async (req: CustomRequest, res) => {
  const userComments = await req.context?.models?.User?.find(
    { _id: req.params.userid },
    { comments: 1 }
  ) ?? 'Undefined';
  return res.send(userComments);
});


export default router;

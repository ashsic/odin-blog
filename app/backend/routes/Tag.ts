import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

router.get('/', async (req: CustomRequest, res) => {
  const tags = await req.context?.models?.Tag?.find({}) ?? 'Undefined';
  return res.send(tags);
});

router.get('/:tagid', async (req: CustomRequest, res) => {
  const tag = await req.context?.models?.Tag?.find({ _id: req.params.tagid }) ?? 'Undefined';
  return res.send(tag);
});


export default router;

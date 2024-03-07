import { Router } from 'express';
import { models } from '../models';

const router = Router();

router.get('/', async (req, res) => {
  const tags = await models.Tag.find({}) ?? 'Undefined';
  return res.send(tags);
});

router.get('/:tagid', async (req, res) => {
  const tag = await models.Tag.find({ _id: req.params.tagid }) ?? 'Undefined';
  return res.send(tag);
});


export default router;

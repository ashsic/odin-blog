import { Router } from 'express';
import { getTag, getTags, createTag } from '../controllers/tagController';

const router = Router();

router.get('/', getTags);

router.get('/:tagid', getTag);


export default router;

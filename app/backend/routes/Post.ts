import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('test');
  // res.send(Object.values(req.context.models.users));
});

export default router;
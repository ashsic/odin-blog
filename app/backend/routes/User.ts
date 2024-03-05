import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

router.get('/', async (req: CustomRequest, res) => {
  const users = await req.context?.models?.User?.find({}) ?? 'Undefined';
  return res.send(users);
});

router.post('/', async (req: CustomRequest, res) => {
  const User = await req.context?.models?.User;
  const user = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    password: req.body.password,
    adminStatus: req.body.adminStatus
  });

  await user.save()

  return res.send(user);
});

export default router;

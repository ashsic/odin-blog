import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

router.get('/', async (req: CustomRequest, res) => {
  const users = await req.context?.models?.User?.find({}) ?? 'Undefined';
  return res.send(users);
});

router.get('/:userid', async (req: CustomRequest, res) => {
  const user = await req.context?.models?.User?.find({ _id: req.params.userid }) ?? 'Undefined';
  return res.send(user);
});


// Remove for security? if outside users are not wanted
router.post('/', async (req: CustomRequest, res) => {
  const User = await req.context?.models?.User;
  const user = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    password: req.body.password,
    adminStatus: false
  });

  await user.save()

  return res.send(user);
});

export default router;

import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

// Routes - all have /users by default

// GET:
// all users - /users
// specific user (id) - /users/:userid
// specific user's posts - /users/:userid/posts?
// specific user's comments? - /users/:userid/comments?
// sort by tag within users posts, or sort tag by user, unsure

// POST
// Create user

// PUT
// main one: adding, removing posts upon authoring/deleting a post
// edit password
// edit username, first/lastname?

// DELETE
// delete user

router.get('/', async (req: CustomRequest, res) => {
  const users = await req.context?.models?.User?.find({}) ?? 'Undefined';
  return res.send(users);
});

router.get('/:userid', async (req: CustomRequest, res) => {
  const user = await req.context?.models?.User?.find({ _id: req.params.userid }) ?? 'Undefined';
  return res.send(user);
});

// Remove for security? if outside users are not wanted, can modify in db directly
router.post('/', async (req: CustomRequest, res) => {
  const User = await req.context?.models?.User;
  const user = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    password: req.body.password,
    posts: req.body.posts,
    adminStatus: false // admins will be added via db
  });

  await user.save()

  return res.send(user);
});

export default router;

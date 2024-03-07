import { Router } from 'express';
import { getUsers, getUser, getUserPosts } from '../controllers/userController';

const router = Router();

// Routes - all have /users by default

// PUT
// main one: adding, removing posts upon authoring/deleting a post
// edit password
// edit username, first/lastname?



router.get('/', getUsers);

router.get('/:userid', getUser);

router.get('/:userid/posts', getUserPosts);



export default router;

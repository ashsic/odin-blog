import { Router } from 'express';
import { createPost, getPosts, getPost, deletePost } from '../controllers/postController';

const router = Router();

// Routes - all have /posts by default

// TODO:

// GET:
// do we want comments?
// specific post's comments - /posts/:postid/comments, then .map in react for each comment id?

// PUT
// add/remove authors, tags, comments? - /posts/:postid

router.get('/', getPosts);

router.get('/:postid', getPost);

router.post('/', createPost);

router.delete('/:postid', deletePost);



export default router;


// curl test cmd

// curl -X POST -H 'Content-Type: application/json' -d '{"authors": ["65e63d6d52dc40ba5036ad2c"], "title": "testing defaults", "bodytext": "test", "tags": ["65e8c15134bf6d33344e82f9"] ,"public": true}' http://localhost:3000/posts

// curl -X DELETE http://localhost:3000/posts/65e75cc99ed17e055c05bdc9

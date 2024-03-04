import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('test');
  // res.send(Object.values(req.context.models.users));
});

router.post('/', (req, res) => {
  console.log(req.body)
  const message = {
    username: req.body.username,
    fullname: {
      firstname: req.body.firstname,
      lastname: req.body.lastname
    },
    password: req.body.password,
    adminStatus: req.body.adminStatus
  }

  return res.send(message);
});

export default router;

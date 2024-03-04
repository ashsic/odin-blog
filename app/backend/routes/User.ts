import { Router } from 'express';
import CustomRequest from '../interfaces/CustomRequest';

const router = Router();

router.get('/', (req: CustomRequest, res) => {
  res.send('test');
  console.log('/users');
  console.log(req.context);
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

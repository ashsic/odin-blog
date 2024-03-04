import express from 'express';
import { connectDb, models } from './models/index';

import routes from './routes/index';
import CustomRequest from './interfaces/CustomRequest';

const app = express();

const port = process.env.PORT || 3000;

// Middleware

app.use((req: CustomRequest, res, next) => {
  req.context = {
    models,
  };
  next();
});

// Routes

app.use('/users', routes.user);
app.use('/posts', routes.post);





connectDb().then(() => {
  console.log('Connected to MongoDB.');

  app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
  });
}).catch((err: Error) => {
  console.error('Error connecting to MongoDB', err);
});

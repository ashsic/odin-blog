import express from 'express';
import { connectDb, models } from './models/index';

import routes from './routes/index';


const app = express();

const port = process.env.PORT || 3000;

// Middleware

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

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

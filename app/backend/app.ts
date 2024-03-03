import express from 'express';
import { connectDb } from './models/index.js';

const app = express();

const port = process.env.PORT || 3000;

connectDb().then(() => {
  console.log('Connected to MongoDB.');

  app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
  });
}).catch((err: Error) => {
  console.error('Error connecting to MongoDB', err);
});

import express from 'express';
import { connectDb, models } from './models/index';

import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  context: {
    [key: string]: any; 
  };
};

const app = express();

const port = process.env.PORT || 3000;

// Middleware

// app.use((req: CustomRequest, res: Response, next: NextFunction) => {
//   req.context = {
//     models,
//   };
//   next();
// });

const customMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  req.context = {
    models,
  }; 
  next();
};

app.use(customMiddleware as express.RequestHandler);



// Routes

app.get('/', (req, res) => {
  res.send('Hello world!')
});




connectDb().then(() => {
  console.log('Connected to MongoDB.');

  app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
  });
}).catch((err: Error) => {
  console.error('Error connecting to MongoDB', err);
});

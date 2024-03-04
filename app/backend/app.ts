import express from 'express';
import { connectDb, models } from './models/index';

import { Request, Response, NextFunction } from 'express';

import router from './routes/User';

const app = express();

const port = process.env.PORT || 3000;

// Middleware

// app.use((req, res, next) => {
//   req.context = {
//     models,
//   };
//   next();
// });

interface CustomRequest extends Request {
  context: {
    [key: string]: any; 
  };
};

const customMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  req.context = {
    models,
  }; 
  next();
};

app.use(customMiddleware as express.RequestHandler);



// Routes

app.use('/users', router);




connectDb().then(() => {
  console.log('Connected to MongoDB.');

  app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
  });
}).catch((err: Error) => {
  console.error('Error connecting to MongoDB', err);
});

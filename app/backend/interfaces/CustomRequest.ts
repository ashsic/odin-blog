import { Request } from 'express';
import { Model, Document } from 'mongoose';

export default interface CustomRequest extends Request {
  context?: {
    models?: any
  };
};

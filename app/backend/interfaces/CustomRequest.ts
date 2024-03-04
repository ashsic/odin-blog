import { Request } from 'express';

export default interface CustomRequest extends Request {
  context?: {
    [key: string]: any; 
  };
};

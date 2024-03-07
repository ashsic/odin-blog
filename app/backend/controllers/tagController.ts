import { models } from "../models";
import { Request, Response } from 'express';

const createTag = async (req: Request, res: Response) => {
  const tag = new models.Tag({
    name: req.body.name
  });

  await tag.save()

  return res.send(tag);
};

const getTags = async (req: Request, res: Response) => {
  const tags = await models.Tag.find({}) ?? 'Undefined';
  return res.send(tags);
};

const getTag = async (req: Request, res: Response) => {
  const tag = await models.Tag.find({ _id: req.params.tagid }) ?? 'Undefined';
  return res.send(tag);
};

const deleteTag = async (req: Request, res: Response) => {
  const tag = await models.Tag.find({ _id: req.params.tagid }) ?? 'Undefined';
  return res.send(tag);
};

export {
  createTag,
  getTags,
  getTag,
  deleteTag
};

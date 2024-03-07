import { models } from "../models";
import { Request, Response } from 'express';

const createTag = async (req: Request, res: Response) => {
  try {
    const tag = new models.Tag({
      name: req.body.name
    });
    await tag.save()
    return res.send(tag);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const getTags = async (req: Request, res: Response) => {
  try {
    const tags = await models.Tag.find({}) ?? 'Undefined';
    return res.send(tags);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const getTag = async (req: Request, res: Response) => {
  try {
    const tag = await models.Tag.find({ _id: req.params.tagid }) ?? 'Undefined';
    return res.send(tag);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

const deleteTag = async (req: Request, res: Response) => {
  try {
    const tag = await models.Tag.find({ _id: req.params.tagid }) ?? 'Undefined';
    return res.send(tag);
  } catch (err) {
    res.status(500).json({ error: err, message: "Error" })
  }
};

export {
  createTag,
  getTags,
  getTag,
  deleteTag
};

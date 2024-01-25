import dbConnect from '@/db/connect';
import { Image } from '@/db/models/Image';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  const image = await Image.findById(id);

  res.appendHeader('Content-Type', image.mimetype);
  res.appendHeader('Content-Length', image.size);

  res.status(200).send(image.binaryData);
}

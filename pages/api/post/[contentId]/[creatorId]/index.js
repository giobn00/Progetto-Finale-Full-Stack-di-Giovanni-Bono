import { findPostByIdAndCreator } from '@/api-lib/db';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {
  const db = await getMongoDb();

  const food = await findPostByIdAndCreator(db, req.query.contentId, req.query.creatorId);
  if (!food) {
    return res.status(200).json({});
  }
  return res.json(food);
});

export default handler;

import { ValidateProps } from '@/api-lib/constants';
import { findPostByIdAndCreator } from '@/api-lib/db';
import { findCodes, insertComment } from '@/api-lib/db/comment';
import { auths, validateBody } from '@/api-lib/middlewares';
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

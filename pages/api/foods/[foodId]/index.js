import { ValidateProps } from '@/api-lib/constants';
import { findFoodById } from '@/api-lib/db';
import { findCodes, insertComment } from '@/api-lib/db/comment';
import { auths, validateBody } from '@/api-lib/middlewares';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';

const handler = nc(ncOpts);

handler.get(async (req, res) => {
  const db = await getMongoDb();

  const food = await findFoodById(db, req.query.foodId);
  if (!food) {
    return res.status(404).json({ error: { message: 'Food is not found.' } });
  }
  return res.json(food);
});

export default handler;

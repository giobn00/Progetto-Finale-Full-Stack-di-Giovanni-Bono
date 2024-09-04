import { findFoodById } from '@/api-lib/db';
import { getMongoDb } from '@/api-lib/mongodb';
import { ncOpts } from '@/api-lib/nc';
import nc from 'next-connect';
export const config = { runtime: 'nodejs' };

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

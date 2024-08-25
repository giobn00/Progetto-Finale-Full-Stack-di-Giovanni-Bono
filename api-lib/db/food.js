
export async function findFoodById(db, id) {

  const foods = await db
    .collection('foods')
    .findOne({_id: String(id)});

  if (!foods) return null;
  
  return foods;
}

export async function findPosts(db, before, by, limit = 10) {
  // TODO: da fare dopo per la ricerca testuale e non con codice 
  return db
    .collection('posts')
    .aggregate([
      {
        $match: {
          ...(by && { creatorId: new ObjectId(by) }),
          ...(before && { createdAt: { $lt: before } }),
        },
      },
      { $sort: { _id: -1 } },
      { $limit: limit },
      {
        $lookup: {
          from: 'users',
          localField: 'creatorId',
          foreignField: '_id',
          as: 'creator',
        },
      },
      { $unwind: '$creator' },
      { $project: dbProjectionUsers('creator.') },
    ])
    .toArray();
}


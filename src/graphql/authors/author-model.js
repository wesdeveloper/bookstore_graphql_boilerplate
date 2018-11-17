import { ObjectId } from 'mongodb';
import db from '../../config/db';

const AUTHOR_COLLECTION = 'authors';

const findById = async ({ _id }) => {
  const authorCollection = await db.getCollection(AUTHOR_COLLECTION);
  return authorCollection.findOne(ObjectId(_id));
};

const insertOne = async (author) => {
  const authorCollection = await db.getCollection(AUTHOR_COLLECTION);
  return authorCollection.insertOne({
    ...author,
    _id: ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

const find = async (query = {}) => {
  const authorCollecion = await db.getCollection(AUTHOR_COLLECTION);
  return authorCollecion.find(query).toArray();
};

export default {
  insertOne,
  findById,
  find,
};

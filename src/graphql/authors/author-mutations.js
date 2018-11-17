import authorModel from './author-model';

// eslint-disable-next-line import/prefer-default-export
export const insertOne = async (_, {
  name,
  born,
  nationality,
  description,
  gender,
}) => authorModel.insertOne({
  name, born, nationality, description, gender,
}).then((data) => {
  const author = data.ops[0];
  console.log('object', author);
  // author._id = author._id.toString();
  // delete author._id;
  return author.toJSON();
});

import Author from './author-model';

const parseId = ({ _id, ...author }) => ({ _id: _id.toString(), ...author });

export const getAthorById = async (_, { id }) => parseId(await Author.findById({ _id: id }));

export const getAuthors = async () => Author.find({}).then(authors => authors.map(parseId));

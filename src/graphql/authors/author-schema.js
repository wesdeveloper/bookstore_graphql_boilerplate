export const types = `
type Author {
    _id: String!
    name: String
    born: String
    nationality: String
    description: String
    gender: String
    createdAt: Date
    updatedAt: Date
  }
`;

export const queries = `
  getAthorById(id: String!): Author
  getAuthors: [Author]
`;

export const mutations = `
  insertOne(name: String, born: String, nationality: String, description: String, gender: String): Author
`;

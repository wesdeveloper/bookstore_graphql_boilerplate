export const types = `
  type Author {
    id: String!
    name: String
    born: String
    nationality: String
    description: String
    gender: String
    createdAt: String
    updatedAt: String
  }
`;

export const queries = `
  getAthorById(id: String!): Author
  getAllAuthors: [Author!]
`;

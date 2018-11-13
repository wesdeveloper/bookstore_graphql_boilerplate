import { makeExecutableSchema } from 'graphql-tools';

import * as AuthorSchema from './authors/author-schema';
import * as AuthorQueries from './authors/author-queries';

const types = [];
const queries = [];

const schemas = [AuthorSchema];

schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
});

const typeDefs = `
  ${types.join('\n')}

  type Query {
    ${queries.join('\n')}
  }

  schema {
    query: Query
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...AuthorQueries,
    },
  },
});

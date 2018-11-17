import { makeExecutableSchema } from 'graphql-tools';

import * as AuthorSchema from './authors/author-schema';
import * as AuthorQueries from './authors/author-queries';
import * as AuthorMutations from './authors/author-mutations';

const types = [];
const queries = [];
const mutations = [];

const schemas = [AuthorSchema];

schemas.forEach((s) => {
  types.push(s.types);
  queries.push(s.queries);
  mutations.push(s.mutations);
});

const typeDefs = `
  scalar Date

  ${types.join('\n')}

  type Query {
    ${queries.join('\n')}
  }

  type Mutation {
    ${mutations.join('\n')}
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...AuthorQueries,
    },
    Mutation: {
      ...AuthorMutations,
    },
    Date: {
      __parseValue(value) {
        return new Date(value); // value from the client
      },
      __serialize(value) {
        return value.getTime(); // value sent to the client
      },
      __parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      },
    },
  },
});

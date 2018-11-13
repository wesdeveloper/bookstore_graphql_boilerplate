import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

export default app;

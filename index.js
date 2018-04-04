// @flow

import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const graphiql = process.env.NODE_ENV === 'debug';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql,
}));

const port = process.env.PORT || 4000;
app.listen(port);

console.log('Running a GraphQL API server at localhost:' + port + (graphiql ? ' (with Graphiql)' : ''));

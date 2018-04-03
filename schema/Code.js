// @flow

import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Code',
  fields: () => ({
    type: { type: GraphQLString },
    value: { type: GraphQLString },
  }),
})

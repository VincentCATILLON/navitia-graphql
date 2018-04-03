// @flow

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql';

import Coord from './Coord';

export default new GraphQLObjectType({
  name: 'AdministrativeRegion',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    label: { type: GraphQLString },
    coord: { type: Coord },
    level: { type: GraphQLInt },
    zip_code: { type: GraphQLString },
  }),
})

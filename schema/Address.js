// @flow

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList
} from 'graphql';

import AdministrativeRegion from './AdministrativeRegion';
import Coord from './Coord';

export default new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    label: { type: GraphQLString },
    coord: { type: Coord },
    house_number: { type: GraphQLInt },
    administrative_regions: { type: new GraphQLList(AdministrativeRegion) },
  }),
})

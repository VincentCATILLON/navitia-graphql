// @flow

import { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLNonNull, GraphQLString } from 'graphql';

import Place from './Place';
import PlaceEmbeddedType from './PlaceEmbeddedType';
import Navitia from '../modules/apis/Navitia';

const query = new GraphQLObjectType({
  name: 'Schema',
  fields: () => ({
    autocompletion: {
      type: new GraphQLList(Place),
      description: 'Places autocompletion',
      args: {
        q: {
          name: 'q',
          type: new GraphQLNonNull(GraphQLString)
        },
        types: {
          name: 'types',
          type: new GraphQLList(PlaceEmbeddedType)
        }
      },
      resolve: (_, { q, types }) =>
        Navitia.places(q, {
          ...(types && types.length ? { type: types } : {})
        }).then(json => json.places || [])
    }
  })
});

export default new GraphQLSchema({
  query
});

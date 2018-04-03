// @flow

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

export default new GraphQLObjectType({
  name: 'GeoJson',
  fields: () => ({
    type: { type: GraphQLString },
    coordinates: { type: new GraphQLList(new GraphQLList(GraphQLInt)) }
  })
})

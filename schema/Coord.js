// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Coord',
  fields: () => ({
    lon: { type: new GraphQLNonNull(GraphQLString) },
    lat: { type: new GraphQLNonNull(GraphQLString) }
  })
})

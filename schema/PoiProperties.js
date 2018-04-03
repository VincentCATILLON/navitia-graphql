// @flow

import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql'

export default new GraphQLObjectType({
  name: 'PoiProperties',
  fields: () => ({
    name: { type: GraphQLString },
    amenity: { type: GraphQLString },
    capacity: { type: GraphQLString },
    network: { type: GraphQLString },
    operator: { type: GraphQLString },
    ref: { type: GraphQLString }
  })
})

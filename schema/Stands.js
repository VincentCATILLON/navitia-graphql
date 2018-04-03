// @flow

import {
  GraphQLInt,
  GraphQLObjectType
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Stands',
  fields: () => ({
    available_bikes: { type: GraphQLInt },
    available_places: { type: GraphQLInt },
    total_stands: { type: GraphQLInt }
  })
})

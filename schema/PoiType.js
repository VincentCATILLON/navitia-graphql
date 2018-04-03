// @flow

import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql'

export default new GraphQLObjectType({
  name: 'PoiType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
})

// @flow

import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql'

export default new GraphQLObjectType({
  name: 'Network',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString }
  })
})

// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import CommercialMode from './CommercialMode'

export default new GraphQLObjectType({
  name: 'PhysicalMode',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    commercial_modes: { type: new GraphQLList(CommercialMode) }
  })
})

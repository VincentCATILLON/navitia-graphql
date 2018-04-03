// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import PhysicalMode from './PhysicalMode'

export default new GraphQLObjectType({
  name: 'CommercialMode',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    physical_modes: { type: new GraphQLList(PhysicalMode) }
  })
})

// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import Code from './Code'
import GeoJson from './GeoJson'
import Line from './Line'
import Place from './Place'

export default new GraphQLObjectType({
  name: 'Route',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    is_frequence: { type: GraphQLString },
    line: { type: Line },
    direction: { type: Place },
    direction_type: { type: GraphQLString },
    geojson: { type: GeoJson },
    codes: { type: new GraphQLList(Code) }
  })
})

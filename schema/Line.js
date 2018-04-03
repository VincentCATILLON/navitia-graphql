// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import Code from './Code'
import CommercialMode from './CommercialMode'
import GeoJson from './GeoJson'
import Network from './Network'
import PhysicalMode from './PhysicalMode'
import Route from './Route'

export default new GraphQLObjectType({
  name: 'Line',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    label: { type: GraphQLString },
    code: { type: GraphQLString },
    color: { type: GraphQLString },
    opening_time: { type: GraphQLString },
    closing_time: { type: GraphQLString },
    routes: { type: new GraphQLList(Route) },
    commercial_mode: { type: CommercialMode },
    physical_modes: { type: new GraphQLList(PhysicalMode) },
    network: { type: Network },
    text_color: { type: GraphQLString },
    geojson: { type: GeoJson },
    codes: { type: new GraphQLList(Code) }
  })
})

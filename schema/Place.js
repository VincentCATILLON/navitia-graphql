// @flow

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} from 'graphql'

import Address from './Address'
import AdministrativeRegion from './AdministrativeRegion'
import PlaceEmbeddedType from './PlaceEmbeddedType'
import Poi from './Poi'
import StopArea from './StopArea'
import StopPoint from './StopPoint'

export default new GraphQLObjectType({
  name: 'Place',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    embedded_type: { type: PlaceEmbeddedType },
    quality: { type: GraphQLInt },
    administrative_region: { type: AdministrativeRegion },
    address: { type: Address },
    poi: { type: Poi },
    stop_area: { type: StopArea },
    stop_point: { type: StopPoint },
    distance: { type: GraphQLString }
  })
})

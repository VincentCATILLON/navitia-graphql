// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import Address from './Address'
import AdministrativeRegion from './AdministrativeRegion'
import Coord from './Coord'
import PoiProperties from './PoiProperties'
import PoiType from './PoiType'
import Stands from './Stands'

export default new GraphQLObjectType({
  name: 'Poi',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    label: { type: GraphQLString },
    poi_type: { type: PoiType },
    adress: { type: Address },
    administrative_regions: { type: GraphQLList(AdministrativeRegion) },
    coord: { type: Coord },
    properties: { type: PoiProperties },
    stands: { type: Stands }
  })
})

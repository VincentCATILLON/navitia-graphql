// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import AdministrativeRegion from './AdministrativeRegion'
import Coord from './Coord'
import Line from './Line'
import StopPoint from './StopPoint'
import Navitia from '../modules/apis/Navitia'

export default new GraphQLObjectType({
  name: 'StopArea',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    label: { type: GraphQLString },
    coord: { type: Coord },
    administrative_regions: { type: new GraphQLList(AdministrativeRegion) },
    stop_points: { type: new GraphQLList(StopPoint) },
    lines: {
      type: new GraphQLList(Line),
      resolve: stop => Navitia.stopLines('stop_area', stop.id).then(json => json.lines || [])
    }
  })
})

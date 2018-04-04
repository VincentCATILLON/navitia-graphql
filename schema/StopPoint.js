// @flow

import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import AdministrativeRegion from './AdministrativeRegion'
import Coord from './Coord'
import Line from './Line'
import StopArea from './StopArea'
import Navitia from '../modules/apis/Navitia'

export default new GraphQLObjectType({
  name: 'StopPoint',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    label: { type: GraphQLString },
    coord: { type: Coord },
    equipments: { type: new GraphQLList(GraphQLString) },
    administrative_regions: { type: new GraphQLList(AdministrativeRegion) },
    stop_area: { type: StopArea },
    lines: {
      type: new GraphQLList(Line),
      resolve: (stop, args, context) => Navitia.stopLines('stop_point', stop.id, {}, context).then(json => json.lines || [])
    }
  })
})

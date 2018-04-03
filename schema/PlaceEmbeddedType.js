// @flow

import {
  GraphQLEnumType
} from 'graphql'

export default new GraphQLEnumType({
  name: 'PlaceEmbeddedType',
  values: {
    'address': { value: 'address' },
    'administrative_region': { value: 'administrative_region' },
    'poi': { value: 'poi' },
    'stop_area': { value: 'stop_area' },
    'stop_point': { value: 'stop_point' }
  }
})

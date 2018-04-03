// @flow

import Base64 from 'base-64';
import fetch from 'node-fetch';

import config from '../../navitia.json';
import type { QueryType } from '../Url.js';
import Url from '../Url.js';

const URL = 'https://api.navitia.io';
const API_VERSION = 'v1';

/**
 * Documentation: https://doc.navitia.io
 */
export default class Navitia {
  static callApi(
    path: Array<string> = [],
    query: QueryType = {},
  ): Promise<Object> {
    if (!config.coverage || !config.token) {
      throw new Error('Your navitia.json config is incomplete.');
    }

    const url = URL + Navitia.getPath(path) + Url.buildParameters(query);
    const parameters = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic ' + Base64.encode(config.token + ':'),
      },
    };

    console.log('Navitia call', url);

    return fetch(url, parameters).then(response => response.json());
  }

  static places(text: string, query?: QueryType) {
    return Navitia.callApi(['places'], { q: text, ...query });
  }

  static stopLines(type: 'stop_point' | 'stop_area', id: string, query?: QueryType) {
    return Navitia.callApi([type + 's', id, 'lines'], query);
  }

  static getPath(path: Array<string>) {
    const basePath = [API_VERSION, 'coverage', config.coverage];

    return Url.buildPath(basePath.concat(path));
  }
}

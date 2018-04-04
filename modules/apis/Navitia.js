// @flow

import fetch from 'node-fetch';

import type { QueryType } from '../Url.js';
import Url from '../Url.js';

const URL = 'https://api.navitia.io';
const API_VERSION = 'v1';

export type ContextType = {
  authorization?: string,
  coverage?: string,
};

/**
 * Documentation: https://doc.navitia.io
 */
export default class Navitia {
  static callApi(
    path: Array<string> = [],
    query: QueryType = {},
    context: ContextType = {},
  ): Promise<Object> {
    if (!context.authorization) {
      throw new Error('Your Navitia token is missing.');
    }
    if (!context.coverage) {
      throw new Error('The Navitia coverage is missing.')
    }

    const url = URL + Navitia.getPath(context.coverage, path) + Url.buildParameters(query);
    const parameters = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: context.authorization,
      },
    };

    console.log('Navitia call', url);

    return fetch(url, parameters).then(response => response.json());
  }

  static places(text: string, query?: QueryType, context: ContextType) {
    return Navitia.callApi(['places'], { q: text, ...query }, context);
  }

  static stopLines(type: 'stop_point' | 'stop_area', id: string, query?: QueryType, context: ContextType) {
    return Navitia.callApi([type + 's', id, 'lines'], query, context);
  }

  static getPath(coverage: string, path: Array<string>) {
    const basePath = [API_VERSION, 'coverage', coverage];

    return Url.buildPath(basePath.concat(path));
  }
}

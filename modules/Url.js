// @flow

export type QueryType = { [key: string]: any };

export default class Url {
  static buildParameters(query: QueryType) {
    const parameters = [];
    for (const key in query) {
      if (query[key]) {
        if (query[key].constructor === Array) {
          for (const index in query[key]) {
            parameters.push(
              encodeURIComponent(key) +
                '[]=' +
                encodeURIComponent(query[key][index]),
            );
          }
        } else {
          parameters.push(
            encodeURIComponent(key) + '=' + encodeURIComponent(query[key]),
          );
        }
      }
    }

    return parameters.length ? '?' + parameters.join('&') : '';
  }

  static buildPath(path: Array<string>) {
    return path.length ? '/' + path.join('/') : '';
  }
}

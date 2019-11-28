export const MOVIEDB_API_KEY = '7d7e7b567dc60a1fe9771413fc6472d8';
export const MOVIEDB_SERVER = 'https://api.themoviedb.org/3/';

/**
 * Describe all routes is available in project
*/
export const routePaths = {
  home: '/',
};

/**
 * Describe all routes is available in project
 * @params location Info about env project is running
 * @return {String} What server should be connected
*/
export const requestBuilder = (endpoint = 'discover', params) => {
  let server = MOVIEDB_SERVER;

  switch (endpoint) {
    case 'discover':
      server = server.concat('discover/movie/');
      break;

    case 'search':
      server = server.concat('search/movie/');
      break;

    default:
      server = server.concat('discover/movie/');
      break;
  }

  server = server.concat('?api_key=').concat(MOVIEDB_API_KEY);

  if (params && Object.keys(params).length > 0) {
    Object.keys(params).forEach((p) => {
      server = server.concat(`&${p}=${params[p]}`);
    });
  }

  return server;
};

export const apiEndpoints = {
  requestBuilder,
};

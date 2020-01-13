export const CITYBIK_SERVER = '//api.citybik.es/v2/';
export const TOTAL_ZOOM = 7;

/**
 * Describe all routes is available in project
*/
export const routePaths = {
  home: '/',
  networks: '/networks',
  stations: '/stations',
};

/**
 * Describe all routes is available in project
 * @params location Info about env project is running
 * @return {String} What server should be connected
*/
export const requestBuilder = (endpoint = 'discover', params) => {
  let server = CITYBIK_SERVER;

  switch (endpoint) {
    case 'networks':
      server = server.concat('networks/');
      break;

    case 'station':
      server = server.concat(`networks/${params.network_id}`);
      break;

    default:
      server = server.concat('networks/');
      break;
  }

  return server;
};

export const apiEndpoints = {
  requestBuilder,
};

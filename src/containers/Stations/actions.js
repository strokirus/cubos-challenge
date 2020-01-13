import C from './constants';

/**
 * Request to Stations Request and store
 */
// eslint-disable-next-line import/prefer-default-export
export const fetchStations = params => ({
  type: C.FETCH_STATIONS_REQUEST,
  params: {
    id: params,
  },
});

import C from './constants';

/**
 * Request to Networks Request and store
 */
// eslint-disable-next-line import/prefer-default-export
export const fetchNetworks = params => ({
  type: C.FETCH_NETWORKS_REQUEST,
  params: {
    page: params ? parseInt(params.page, 10) : 0,
  },
});

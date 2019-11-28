import C from './constants';

/**
 * Request to store in Redux search text
 * @param params Info passed by user with your search
 * @return {Promise} yield to store information
 */
export const setSearch = params => ({
  type: C.SET_SEARCH,
  params,
});

/**
 * Request to Discover Request and store
 */
export const fetchDiscover = () => ({
  type: C.FETCH_DISCOVER_REQUEST,
});

/**
 * Request to Search Request and store
 */
export const fetchSearch = () => ({
  type: C.FETCH_SEARCH_REQUEST,
});

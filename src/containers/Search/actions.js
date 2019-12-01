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
export const fetchDiscover = params => ({
  type: C.FETCH_DISCOVER_REQUEST,
  params: {
    page: params ? parseInt(params.page, 10) : 0,
  },
});

/**
 * Request to Movie Request and store
 */
export const fetchMovie = params => ({
  type: C.FETCH_MOVIE_REQUEST,
  params: {
    movie_id: params.movie_id,
  },
});

/**
 * Request to Search Request and store
 */
export const fetchSearch = params => ({
  type: C.FETCH_SEARCH_REQUEST,
  params: {
    page: params ? parseInt(params.page, 10) : 0,
  },
});

import C from './constants';

/**
 * Request to Movie Request and store
 */
export const fetchMovie = params => ({
  type: C.FETCH_MOVIE_REQUEST,
  params: {
    movieId: params,
  },
});


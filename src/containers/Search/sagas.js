import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import {
  requestDiscover,
  requestSearch,
  requestGenres,
} from './api';
import {
  imagePath,
  dateFormat,
  genresFull,
  ratingFormat,
} from '../../utils';

import {
  routePaths,
} from '../../settings';

import history from '../../helpers/history';

import C from './constants';

/**
 * Trigged when Discover Request is demmanded
*/
function* fetchDiscover(data) {
  try {
    const { page } = data.params;

    const dataGenres = yield call(requestGenres);

    const response = yield call(requestDiscover, page !== 0 ? { page } : { });

    if (response.data && response.data.results) {
      response.data.results = response.data.results.map(e => ({
        ...e,
        img: imagePath(e.poster_path),
        release_date: dateFormat(e.release_date),
        genres: genresFull(e.genre_ids, dataGenres),
        rating: ratingFormat(e.vote_average),
      }));
      yield put({ type: C.FETCH_DISCOVER_SUCCESS, data: response.data });
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_DISCOVER_FAILURE, error: error.response.status });
  }
}

/**
 * Trigged when Search Request is demmanded
*/
function* fetchSearch(data) {
  try {
    const { page } = data.params;
    const dataGenres = yield call(requestGenres);
    const { textSearch } = yield select(state => state.search);

    const response = yield call(requestSearch, textSearch, page !== 0 ? { page } : { });

    if (response.data) {
      response.data.results = response.data.results.map(e => ({
        ...e,
        img: imagePath(e.poster_path),
        release_date: dateFormat(e.release_date),
        genres: genresFull(e.genre_ids, dataGenres),
        rating: ratingFormat(e.vote_average),
      }));

      yield put({ type: C.FETCH_SEARCH_SUCCESS, data: response.data });

      history.push(`${routePaths.search}/${textSearch}/${response.data.page || 1}`);
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_SEARCH_FAILURE, error: error.response.status });
  }
}

function* getSearchData() {
  yield takeLatest(C.FETCH_DISCOVER_REQUEST, fetchDiscover);
  yield takeLatest(C.FETCH_SEARCH_REQUEST, fetchSearch);
}

export default getSearchData;

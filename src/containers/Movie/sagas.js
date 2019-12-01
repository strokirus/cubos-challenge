import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  requestMovie,
} from './api';

import {
  dateFormat,
  ratingFormat,
  imagePath,
} from '../../utils';

import {
  getLanguage,
} from '../../helpers/languages';

import C from './constants';

/**
 * Trigged when Movie Request is demmanded
*/
function* fetchMovie(data) {
  const { movieId } = data.params;

  try {
    const response = yield call(requestMovie, movieId);

    if (response.data) {
      response.data.poster_path = imagePath(response.data.poster_path);
      response.data.release_date = dateFormat(response.data.release_date);
      response.data.vote_average = ratingFormat(response.data.vote_average);
      response.data.original_language = getLanguage(response.data.original_language);
      yield put({ type: C.FETCH_MOVIE_SUCCESS, data: response.data });
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_MOVIE_FAILURE, error: error.response.status });
  }
}

function* getAppData() {
  yield takeLatest(C.FETCH_MOVIE_REQUEST, fetchMovie);
}

export default getAppData;

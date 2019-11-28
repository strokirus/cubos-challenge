import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import {
  requestDiscover,
  requestSearch,
} from './api';
import C from './constants';

/**
 * Trigged when Discover Request is demmanded
*/
function* fetchDiscover() {
  try {
    const response = yield call(requestDiscover);

    if (response.data) {
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
function* fetchSearch() {
  try {
    const { textSearch } = yield select(state => state.app);

    const response = yield call(requestSearch, textSearch);

    if (response.data) {
      yield put({ type: C.FETCH_SEARCH_SUCCESS, data: response.data });
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_SEARCH_FAILURE, error: error.response.status });
  }
}

function* getAppData() {
  yield takeLatest(C.FETCH_DISCOVER_REQUEST, fetchDiscover);
  yield takeLatest(C.FETCH_SEARCH_REQUEST, fetchSearch);
}

export default getAppData;

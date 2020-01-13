import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  requestStation,
} from './api';

import C from './constants';

import history from '../../helpers/history';

/**
 * Trigged when Stations Request is demmanded
*/
function* fetchStations(data) {
  try {
    const response = yield call(requestStation, { network_id: data.params.id });
    if (response.data && response.data.network) {
      yield put({
        type: C.FETCH_STATIONS_SUCCESS,
        data: response.data.network,
      });
    } else {
      throw response.status;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    history.push('/');
    location.href = '/';
    yield put({ type: C.FETCH_STATIONS_FAILURE, error: error.response.status });
  }
}

function* getStationsData() {
  yield takeLatest(C.FETCH_STATIONS_REQUEST, fetchStations);
}

export default getStationsData;

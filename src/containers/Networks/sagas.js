import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  requestNetworks,
} from './api';

import C from './constants';

/**
 * Trigged when Networks Request is demmanded
*/
function* fetchNetworks() {
  try {
    const response = yield call(requestNetworks);
    const countries = { };

    response.data.networks.forEach((e) => {
      if (!countries[e.location.country]) {
        countries[e.location.country] = [];
      }

      countries[e.location.country].push(e);
    });

    response.data.countries = countries;

    if (response.data && response.data.networks) {
      yield put({ type: C.FETCH_NETWORKS_SUCCESS,
        data: response.data,
        countries: response.data.countries,
      });
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_NETWORKS_FAILURE, error: error.response.status });
  }
}

function* getNetworksData() {
  yield takeLatest(C.FETCH_NETWORKS_REQUEST, fetchNetworks);
}

export default getNetworksData;

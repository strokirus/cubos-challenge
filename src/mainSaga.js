import { fork } from 'redux-saga/effects';
import networksSaga from './containers/Networks/sagas';
import stationsSaga from './containers/Stations/sagas';

const sagas = [
  networksSaga,
  stationsSaga,
];

/**
 * Describe all sagas used in project
 */
export default function* root() {
  yield sagas.map(saga => fork(saga));
}

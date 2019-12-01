import { fork } from 'redux-saga/effects';
import searchSaga from './containers/Search/sagas';
import movieSaga from './containers/Movie/sagas';

const sagas = [
  searchSaga,
  movieSaga,
];

/**
 * Describe all sagas used in project
 */
export default function* root() {
  yield sagas.map(saga => fork(saga));
}

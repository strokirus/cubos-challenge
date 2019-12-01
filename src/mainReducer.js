import { combineReducers } from 'redux';
import search from './containers/Search/reducers';
import movie from './containers/Movie/reducers';

const mainReducer = combineReducers({
  search,
  movie,
});

/**
 * Describe all reducers used in project
 */
export default mainReducer;

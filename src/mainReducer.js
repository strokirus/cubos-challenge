import { combineReducers } from 'redux';
import networks from './containers/Networks/reducers';
import stations from './containers/Stations/reducers';

const mainReducer = combineReducers({
  networks,
  stations,
});

/**
 * Describe all reducers used in project
 */
export default mainReducer;

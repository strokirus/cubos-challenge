import C from './constants';

const initialState = {
  isFetching: true,
  info: { },
};

const appReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
        info: initialState.info,
      };

    case C.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        info: action.data,
      };

    case C.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: true,
        info: initialState.info,
      };

    default:
      return state || initialState;
  }
};

export default appReducer;

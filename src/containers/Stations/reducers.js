import C from './constants';

const initialState = {
  data: {
    isFetching: true,
    info: { },
  },
};

const stationsReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_STATIONS_REQUEST:
      return {
        ...state,
        data: initialState.data,
      };

    case C.FETCH_STATIONS_SUCCESS:
      return {
        ...state,
        data: {
          isFetching: false,
          info: action.data,
        },
      };

    case C.FETCH_STATIONS_FAILURE:
      return {
        ...state,
        data: {
          ...initialState.data,
        },
      };

    default:
      return state || initialState;
  }
};

export default stationsReducer;

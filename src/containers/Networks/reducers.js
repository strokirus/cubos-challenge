import C from './constants';

const initialState = {
  info: {
    show: false,
    isFetching: true,
    results: [],
    status: false,
  },
  stations: {
    isFetching: true,
    data: {},
  },
};

const networksReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_NETWORKS_REQUEST:
      return {
        ...state,
        show: true,
        info: initialState.info,
      };

    case C.FETCH_NETWORKS_SUCCESS:
      return {
        ...state,
        info: {
          show: true,
          isFetching: false,
          results: action.data.networks,
          countries: action.data.countries,
          status: true,
        },
      };

    case C.FETCH_NETWORKS_FAILURE:
      return {
        ...state,
        show: false,
        info: {
          ...initialState.info,
          status: false,
        },
      };

    case C.FETCH_STATIONS_REQUEST:
      return {
        ...state,
        stations: initialState.stations,
      };

    case C.FETCH_STATIONS_SUCCESS:
      return {
        ...state,
        stations: {
          isFetching: false,
          data: action.data,
        },
      };

    case C.FETCH_STATIONS_FAILURE:
      return {
        ...state,
        stations: {
          ...initialState.stations,
        },
      };

    default:
      return state || initialState;
  }
};

export default networksReducer;

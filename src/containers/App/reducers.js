import C from './constants';

const initialState = {
  search: {
    isLoading: true,
    results: [],
    page: 0,
    total: 0,
  },
  discover: {
    isLoading: true,
    results: [],
    page: 0,
    total: 0,
  },
  textSearch: '',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_DISCOVER_REQUEST:
      return {
        ...state,
        discover: initialState.discover,
      };

    case C.FETCH_DISCOVER_SUCCESS:
      return {
        ...state,
        discover: {
          isLoading: false,
          results: action.data.results,
          page: action.data.page,
          total: action.data.total_pages,
        },
      };

    case C.FETCH_DISCOVER_FAILURE:
      return {
        ...state,
        discover: initialState.discover,
      };

    case C.FETCH_SEARCH_REQUEST:
      return {
        ...state,
        search: initialState.discover,
      };

    case C.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        search: {
          isLoading: false,
          results: action.data.results,
          page: action.data.page,
          total: action.data.total_pages,
        },
      };

    case C.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        search: initialState.discover,
      };

    case C.SET_SEARCH:
      return {
        ...state,
        textSearch: action.params,
      };

    default:
      return state || initialState;
  }
};

export default appReducer;

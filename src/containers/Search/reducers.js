import C from './constants';

const initialState = {
  search: {
    show: false,
    isLoading: true,
    results: [],
    page: 0,
    total: 0,
  },
  discover: {
    show: false,
    isLoading: true,
    results: [],
    page: 0,
    total: 0,
  },
  textSearch: '',
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case C.FETCH_DISCOVER_REQUEST:
      return {
        ...state,
        show: true,
        discover: initialState.discover,
        search: {
          ...state.search,
          show: false,
        },
      };

    case C.FETCH_DISCOVER_SUCCESS:
      return {
        ...state,
        discover: {
          show: true,
          isLoading: false,
          results: action.data.results,
          page: action.data.page,
          total: action.data.total_pages,
          totalItens: action.data.total_results,
        },
        search: {
          ...state.search,
          show: false,
        },
      };

    case C.FETCH_DISCOVER_FAILURE:
      return {
        ...state,
        show: false,
        discover: initialState.discover,
        search: {
          ...state.search,
          show: false,
        },
      };

    case C.FETCH_SEARCH_REQUEST:
      return {
        ...state,
        search: initialState.discover,
        discover: {
          ...state.discover,
          show: false,
        },
      };

    case C.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        search: {
          show: true,
          isLoading: false,
          results: action.data.results,
          page: action.data.page,
          total: action.data.total_pages,
          totalItens: action.data.total_results,
        },
        discover: {
          ...state.discover,
          show: false,
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

export default searchReducer;

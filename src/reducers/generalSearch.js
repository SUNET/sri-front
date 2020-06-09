import types from '../types/generalSearch';

const initialState = {
  loading: false,
  results: [],
  filter: '',
  error: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_START:
      return { ...state, loading: true, filter: action.filter };

    case types.SEARCH_ERROR:
      return {
        ...state,
        filter: '',
        loading: false,
        results: [],
        error: true,
      };

    case types.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.results,
        errors: false,
      };

    case types.SEARCH_CLEAN:
      return {
        ...state,
        filter: '',
        loading: false,
        results: [],
        errors: false,
      };

    default:
      return state;
  }
};

export default searchReducer;

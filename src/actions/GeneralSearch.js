import types from '../types/generalSearch';

export const startGeneralSearch = (filter) => ({
  type: types.SEARCH_START,
  filter,
});

export const successGeneralSearch = (results) => ({
  type: types.SEARCH_SUCCESS,
  results,
});

export const errorGeneralSearch = () => ({
  type: types.SEARCH_ERROR,
});

export const cleanGeneralSearch = () => ({
  type: types.SEARCH_CLEAN,
});

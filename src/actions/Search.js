export const startSearch = (search) => {
  return {
    type: 'SEARCH_START',
    search,
  };
};

export const successSearch = (results) => {
  return {
    type: 'SEARCH_SUCCESS',
    results,
  };
};

const initialState = {
    loading: false,
    results: [],
    search: "",
    queried: false
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_START":
            return { ...state, loading: true, search: action.search };

        case "SEARCH_ERRORS":
            return {
                ...state,
                loading: false,
                results: action.results,
                queried: true
            };

        case "SEARCH_SUCCESS":
            return {
                ...state,
                loading: false,
                results: action.results,
                queried: true
            };

        default:
            return state;
    }
};

export default searchReducer;

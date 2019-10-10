const initialState = {
    refresh: true
};

const refreshFields = (state = initialState, action) => {
    switch (action.type) {
        case "REFRESH_FIELDS":
            return { ...state, refresh: !state.refresh };

        default:
            return state;
    }
};

export default refreshFields;

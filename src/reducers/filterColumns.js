const initialState = {
    all_columns: true,
    columnsVisible: []
};

const filterColumnsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_HIDE_COLUMN":
            return {
                ...state,
                columnsVisible: {
                    ...state.columnsVisible,
                    [action.column]: action.visible
                },
                all_columns: false
            };

        case "SHOW_ALL_COLUMNS":
            let columnsVisible = Object.keys(action.columns).map((key) => {
                action.columns[key] = false;
                return action.columns[key];
            });
            return {
                ...state,
                columnsVisible: {
                    ...columnsVisible
                },
                all_columns: true
            };

        default:
            return state;
    }
};

export default filterColumnsReducer;

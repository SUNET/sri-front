const initialState = {
    all_columns: true,
    columns_visible: []
};

const filterColumnsReducer = (state = initialState, action) => {
    let nextState = {};
    switch (action.type) {
        case "SHOW_HIDE_COLUMN":
            //automatically adds columns that are shown or hidden
            nextState = {
                ...state,
                columns_visible: {
                    ...state.columns_visible,
                    [action.column]: action.visible
                },
                all_columns: true
            };
            //if all columns are hidden show all
            for (const column in nextState.columns_visible) {
                if (nextState.columns_visible[column]) {
                    return (nextState = { ...nextState, all_columns: false });
                }
            }
            return nextState;

        case "SHOW_ALL_COLUMNS":
            //change to false the state of each column and activate all_collumns
            let columns_visible = Object.keys(action.columns).map((key) => {
                action.columns[key] = false;
                return action.columns[key];
            });
            nextState = {
                ...state,
                columns_visible: {
                    ...columns_visible
                },
                all_columns: true
            };
            return nextState;

        default:
            return state;
    }
};

export default filterColumnsReducer;

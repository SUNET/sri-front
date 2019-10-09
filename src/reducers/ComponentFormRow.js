const initialState = {
    0: {
        is_saved: false,
        is_editing: false,
        is_new: true
    }
};

const ComponentFormRowReducer = (state = initialState, action) => {
    let nextState = {};
    switch (action.type) {
        case "ADD_ROW":
            nextState = {
                ...state,
                ...state[action.model],
                [action.index]: {
                    is_saved: false,
                    is_editing: false,
                    is_new: true
                }
            };
            return nextState;

        case "EDIT_ROW":
            nextState = {
                ...state,
                ...state[action.index],
                [action.index]: {
                    is_saved: false,
                    is_editing: true,
                    is_new: false
                }
            };
            return nextState;

        case "SAVE_ROW":
            nextState = {
                ...state,
                ...state[action.index],
                [action.index]: {
                    is_saved: true,
                    is_editing: false,
                    is_new: false
                }
            };
            return nextState;

        case "REMOVE_ROW":
            nextState = {
                ...state,
                ...state[action.index],
                [action.index]: {
                    is_saved: false,
                    is_editing: false,
                    is_new: false
                }
            };
            return nextState;

        default:
            return state;
    }
};

export default ComponentFormRowReducer;
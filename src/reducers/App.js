// eslint-disable-next-line
import * as actions from "../actions/App";

const appData = {
    is_app_loaded: false,
    is_fetching: false
};

let appReducer = (state = appData, action) => {
    switch (action.type) {
        case actions.LOADED:
            return {
                ...state,
                is_app_loaded: true
            };
        case actions.START_FETCHING:
            return {
                ...state,
                is_fetching: true
            };
        case actions.STOP_FETCHING:
            return {
                ...state,
                is_fetching: false
            };
        default:
            return state;
    }
};

export default appReducer;

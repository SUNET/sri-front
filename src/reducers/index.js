// IMPORT LIBRARIES
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";

import appReducer from "./App";
import searchReducer from "./Search";
import notifyReducer from "./Notify";

const reducers = (history) =>
    combineReducers({
        app: appReducer,
        search: searchReducer,
        form: formReducer,
        notify: notifyReducer,
        router: connectRouter(history)
    });

export default reducers;

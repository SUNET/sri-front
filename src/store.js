import { combineReducers } from "redux";

import appReducer from "./reducers/App";
import notifyReducer from "./reducers/Notify";

const appStore = combineReducers({
    app: appReducer,
    notify: notifyReducer
});

export default appStore;

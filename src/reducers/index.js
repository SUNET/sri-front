// IMPORT LIBRARIES
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";

import appReducer from "../reducers/App";
import notifyReducer from "../reducers/Notify";

const reducers = (history) =>
	combineReducers({
		app: appReducer,
		form: formReducer,
		notify: notifyReducer,
		router: connectRouter(history)
	});

export default reducers;

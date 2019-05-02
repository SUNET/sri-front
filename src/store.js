import { createStore, compose, applyMiddleware } from "redux";

import history from "./history";
import reducers from "./reducers";
import middlewares from "./middlewares";

const composedMiddlewares = compose(applyMiddleware(...middlewares(history)));

const configureStore = (preloadedState) => {
	const store = createStore(
		reducers(history),
		preloadedState,
		composedMiddlewares
	);

	return store;
};

export default configureStore;

import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from './reducers';

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history)];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedMiddlewares = composeEnhancers(applyMiddleware(...middlewares));

const configureStore = (preloadedState) => {
  const store = createStore(reducers(history), preloadedState, composedMiddlewares);
  return store;
};

export default configureStore;

import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

import reducers from './reducers';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedMiddlewares = composeEnhancers(applyMiddleware(...middlewares));

const configureStore = (preloadedState) => {
  const store = createStore(reducers(history), preloadedState, composedMiddlewares);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;

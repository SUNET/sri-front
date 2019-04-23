import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from "redux";
import { Provider } from 'react-redux';

import appStore from "./store";
import AppContainer from './containers/App';
import * as serviceWorker from './serviceWorker';

import './stye/reset.css';


/* for redux dev tools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/* Store */
export const store = createStore(
    appStore,
);

/* render app */
const app = (
  <Provider store={store}>
      <AppContainer />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store';

import * as actions from './actions/App';
import AppContainer from './containers/App';
import * as serviceWorker from './serviceWorker';

import './i18n';

import './style/reset.css';
import '@fortawesome/fontawesome-free/css/all.css';

import requestWhoami from './utils/fetchUtils';

/* Store */
export const store = configureStore();
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/* render app */
const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

const initialAction = async () => {
  const user = await requestWhoami();
  store.dispatch(actions.iam(user));
  store.dispatch(actions.appLoaded());
};

ReactDOM.render(app, document.getElementById('root'), initialAction);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

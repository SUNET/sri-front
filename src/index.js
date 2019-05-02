import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import configureStore from "./store";
import history from "./history";

import AppContainer from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import "./i18n";

import "./style/reset.css";

/* Store */
export const store = configureStore();

/* render app */
const app = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route path="/" component={AppContainer} />
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

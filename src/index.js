import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";

import { Provider } from "react-redux";

import configureStore from "./store";

import * as actions from "./actions/App";
import AppContainer from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { API_HOST } from "./createRelayEnvironment.js";
import JWTVerifyMutation from "./mutations/JWTVerifyMutation";
import JWTRefreshMutation from "./mutations/JWTRefreshMutation";

import "./i18n";

import "./style/reset.css";
import "@fortawesome/fontawesome-free/css/all.css";

/* Store */
export const store = configureStore();
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/* render app */
const app = (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

const initialAction = () => {
    const cookie_jwt = Cookies.get("JWT");

    if (!cookie_jwt) {
        fetch(`${API_HOST}/authn?next=${document.location.href}`, {
            method: "GET"
        }).then((response) => {
            if (response.redirected) {
                document.location.href = response.url;
            }
        });
    } else {
        JWTVerifyMutation(cookie_jwt).then((data) => {
            if (!data) {
                if (Cookies.get("sessionid")) {
                    JWTRefreshMutation(cookie_jwt);
                } else {
                    fetch(`${API_HOST}/authn?next=${document.location.href}`, {
                        method: "GET"
                    }).then((response) => {
                        if (response.redirected) {
                            document.location.href = response.url;
                        }
                    });
                }
            } else {
                store.dispatch(actions.appLoaded());
            }
        });
    }
};

ReactDOM.render(app, document.getElementById("root"), initialAction);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

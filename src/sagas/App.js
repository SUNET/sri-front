import { put, call, select } from "redux-saga/effects";
import { getRequest, postRequest, checkStatus } from "./common";

import { API_HOST } from "../config";

import * as actions from "../actions/App";

const url = API_HOST + "/userprofile/whoami/";
const api = API_HOST + "/api/v1/userprofile/";

export function* requestWhoami() {
    try {
        console.log("Getting user id from", url);
        const user = yield call(fetchConfig, url);
        yield put(actions.iam(user));
    } catch (error) {
        console.log("Error getting user id", error);
    }
}

export function* updateProfile() {
    try {
        console.log("Update profile", api);
        const state = yield select();
        const data = {
            email: state.app.user.email,
            display_name: state.app.user.display_name,
            landing_page: state.app.user.landing_page,
            id: state.app.user.userid,
            user_id: state.app.user.userid,
            view_community: state.app.user.view_community,
            view_network: state.app.user.view_network,
            view_services: state.app.user.view_services
        };
        const profile = yield call(postConfig, api + state.app.user.userid, data);
        yield put(actions.updateProfile(profile));
    } catch (error) {
        console.log("Error update the profile ", error);
    }
}

export function fetchConfig(url) {
    return window
        .fetch(url, {
            ...getRequest
        })
        .then(checkStatus)
        .then((response) => response.json());
}

export function postConfig(url, data) {
    return window
        .fetch(api, {
            ...postRequest,
            body: JSON.stringify(data)
        })
        .then(checkStatus)
        .then((response) => response.json());
}

import { put, call } from "redux-saga/effects";
import { getRequest, postRequest, checkStatus } from "./common";

import * as actions from "../actions/App";

const url = "http://localhost:8000/userprofile/whoami/";
const api = "http://localhost:8000/api/v1/userprofile/";
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
        const profile = yield call(postConfig, api);
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

export function postConfig(url) {
    return window
        .fetch(url, {
            ...postRequest
        })
        .then(checkStatus)
        .then((response) => response.json());
}

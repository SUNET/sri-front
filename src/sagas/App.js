import { put, call } from "redux-saga/effects";
import { getRequest, checkStatus } from "./common";

import * as actions from "../actions/App";


export function* requestWhoami() {
    const url = "http://localhost:8000/userprofile/whoami/";
    try {
        console.log("Getting user id from", url);
        const user = yield call(fetchConfig, url);
        yield put(actions.iam(user));
    } catch (error) {
        console.log('Error getting user id', error);
    }
}

export function fetchConfig(url) {
  return window
    .fetch(url, {
      ...getRequest
    })
    .then(checkStatus)
    .then(response => response.json());
}

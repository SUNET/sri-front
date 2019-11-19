import { takeLatest } from "redux-saga/effects";

import * as actions from "./actions/App";

import { requestWhoami } from "./sagas/App";

function* rootSaga() {
    yield takeLatest(actions.LOADED, requestWhoami);
}

export default rootSaga;

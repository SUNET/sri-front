import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import * as actions from './actions/App';

import { requestWhoami, updateProfile } from './sagas/App';

function* rootSaga() {
  yield all([takeLatest(actions.LOADED, requestWhoami), takeEvery(actions.UPDATE_PROFILE, updateProfile)]);
}

export default rootSaga;

import { takeEvery, takeLatest, call } from 'redux-saga/effects';
import { initSplitSdk as originalInitSplitSdk, getTreatments as originalGetTreatments } from '@splitsoftware/splitio-redux';

function* initSplitSdkSaga(dispatch, action) {
  const thunk = originalInitSplitSdk(action.payload);
  yield call(thunk, dispatch);
}

function* getTreatmentsSaga(action) {
  yield call(originalGetTreatments, action.payload);
}

export function* splitSaga(dispatch) {
  yield takeLatest(INIT_SPLIT_SDK, initSplitSdkSaga, dispatch);
  yield takeEvery(GET_TREATMENTS, getTreatmentsSaga);
}

// SAGA Action types
const INIT_SPLIT_SDK = 'INIT_SPLIT_SDK';

const GET_TREATMENTS = 'GET_TREATMENTS';

// Plain action creators
export function initSplitSdk(params) {
  return {
    type: INIT_SPLIT_SDK,
    payload: params,
  }
}

export function getTreatments(params) {
  return {
    type: GET_TREATMENTS,
    payload: params,
  }
}
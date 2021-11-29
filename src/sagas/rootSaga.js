import {all, fork } from 'redux-saga/effects'
import { sagaWatcher } from "./sagaWatchers";

export function* rootSaga() {
  yield all([
    fork(sagaWatcher)
  ])
}
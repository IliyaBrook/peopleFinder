import {takeEvery, take, call, put, delay} from 'redux-saga/effects'
import { LOAD_USERS_FROM_API, USERS_LOADING } from "../reduxStore/reducers/usersTypes";
import axios from "axios";

export function* sagaWatcher() {
  yield call(getUsersWorker)
}

function* getUsersWorker() {
  const res = yield call(fetchUsersWorker)
  yield put({type:LOAD_USERS_FROM_API,users:res})
  yield put({type:USERS_LOADING,loading:false})
}

function* fetchUsersWorker() {
  yield put({type:USERS_LOADING,loading:true})
  const response = yield axios.get(`https://randomuser.me/api/?results=25&page=1`)
  return response.data.results
}
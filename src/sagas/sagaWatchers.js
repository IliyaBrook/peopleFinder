import {
  takeEvery, take, call,
  put, delay, all, select,
  takeLatest
} from "redux-saga/effects";
import {
  FAVORITE_USERS_LOADING,
  GET_ALL_FAVORITE_USERS,
  LOAD_USERS_FROM_API,
  USERS_LOADING
} from "../reduxStore/reducers/usersTypes";
import axios from "axios";

export function* sagaWatcher() {
  yield all([
    call(getUsersWorker),
    call(usersLoadedWatcher)
  ])
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

function* usersLoadedWatcher() {
  yield takeLatest(USERS_LOADING, favoriteUsersWorker)
}

function* favoriteUsersWorker(isUsersLoading) {
  if (!isUsersLoading.loading) {
    yield put({type:FAVORITE_USERS_LOADING,loading:true})
    const favoriteFromStorage = JSON.parse(localStorage.getItem('favoriteUsers'))
    if (favoriteFromStorage) {
      yield put({type:GET_ALL_FAVORITE_USERS, payload:favoriteFromStorage})
    }
    yield put({type:FAVORITE_USERS_LOADING,loading:false})
  }
}

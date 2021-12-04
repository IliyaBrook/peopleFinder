import {
  takeEvery, call, put, all, takeLatest
} from "redux-saga/effects";
import {
  FAVORITE_USERS_LOADING,
  GET_ALL_FAVORITE_USERS,
  HOME_PAGE_SCROLL_END,
  LOAD_USERS_FROM_API, SET_USERS_WHEN_SCROLL_END,
  USERS_LOADING
} from "../reduxStore/reducers/usersTypes";
import axios from "axios";

export function* sagaWatcher() {
  yield all([
    call(getUsersWorker),
    takeLatest(USERS_LOADING, favoriteUsersWorker),
    takeEvery(HOME_PAGE_SCROLL_END, fetchNewUsersScrolling)
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

function* fetchNewUsersScrolling() {
  const res = yield call(fetchUsersWorker)
  yield put({type:SET_USERS_WHEN_SCROLL_END,payload:res})
  yield put({type:USERS_LOADING,loading:false})
}
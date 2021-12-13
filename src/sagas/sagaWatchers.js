import {
  takeEvery, call, put, all, takeLatest,
  select, delay, fork, take, cancel,
  race, takeMaybe
} from "redux-saga/effects";

import {
  FAVORITE_USERS_LOADING,
  GET_ALL_FAVORITE_USERS,
  HOME_PAGE_SCROLL_END,
  LOAD_USERS_FROM_API, SET_USERS_WHEN_SCROLL_END,
  USERS_LOADING
} from "../reduxStore/reducers/users/usersReducerTypes";
import {
  REQUEST_LOGOUT
} from "../reduxStore/reducers/authorizeUser/authorizeUserTypes";
import axios from "axios";
import { SET_USER_DATA } from "../reduxStore/reducers/authorizeUser/authorizeUserTypes";
import { socketUsersChannel } from "../socket/socketUsersChannel";
import { logOutAction } from "../reduxStore/reducers/authorizeUser/authorizeActions";
import { checkOnline} from '../socket/sockets'

const io = checkOnline

export function* sagaWatcher() {
  yield all([
    call(handleLogin),
    call(runChannel),
    call(updateUserDataWorker),
    call(getUsersWorker),
    takeEvery(USERS_LOADING, favoriteUsersWorker),
    takeEvery(HOME_PAGE_SCROLL_END, fetchNewUsersScrolling)
  ]);
}

function* handleLogin() {
  while (true) {
    const {payload} = yield take(SET_USER_DATA)
    io.emit("loggedIn", { ...payload, login: true })
    yield take(REQUEST_LOGOUT)
    io.emit("loggedOut", { ...payload, login: false })
    yield put(logOutAction())
  }
}


function* runChannel() {
  const channel = yield call(socketUsersChannel)
  while (true) {
    const channelData = yield take(channel)
    console.log('channel data: ', channelData)
  }
}

function* updateUserDataWorker() {
  const storageData = localStorage?.getItem("userData");
  if (storageData) {
    yield put({
      type: SET_USER_DATA, payload: JSON.parse(storageData)
    });
  }
}

function* getUsersWorker() {
  const res = yield call(fetchUsersWorker);
  yield put({ type: LOAD_USERS_FROM_API, users: res });
  yield put({ type: USERS_LOADING, loading: false });
}

function* fetchUsersWorker() {
  yield put({ type: USERS_LOADING, loading: true });
  const response = yield axios.get(`https://randomuser.me/api/?results=25&page=1`);
  return response.data.results;
}

function* favoriteUsersWorker(isUsersLoading) {
  if (!isUsersLoading.loading) {
    yield put({ type: FAVORITE_USERS_LOADING, loading: true });
    const favoriteFromStorage = JSON.parse(localStorage.getItem("favoriteUsers"));
    if (favoriteFromStorage) {
      yield put({ type: GET_ALL_FAVORITE_USERS, payload: favoriteFromStorage });
    }
    yield put({ type: FAVORITE_USERS_LOADING, loading: false });
  }
}

function* fetchNewUsersScrolling() {
  const res = yield call(fetchUsersWorker);
  yield put({ type: SET_USERS_WHEN_SCROLL_END, payload: res });
}


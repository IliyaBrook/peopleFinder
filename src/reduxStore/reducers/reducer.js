import React from "react";
import {
  FAVORITE_USERS_LOADING,
  GET_ALL_FAVORITE_USERS,
  LOAD_USERS_FROM_API,
  REMOVE_FAVORITE_USER,
  SET_FAVORITE_USER, SET_PATH,
  USERS_LOADING
} from "./usersTypes";

const reducerInit = {
  usersLoading:false,
  favoriteUsersLoading:false,
  users:[],
  favoriteUsers:[],
  path:''
}
export const reducer = (state = reducerInit, action ) => {
  switch (action.type) {
    case LOAD_USERS_FROM_API:
      return {...state, users: [...action.users]}
    case USERS_LOADING:
      return {...state, usersLoading: action.loading}
    case FAVORITE_USERS_LOADING:
      return {...state, favoriteUsersLoading: action.loading}
    case SET_FAVORITE_USER:
      return {...state, favoriteUsers: [...state.favoriteUsers, action.payload]}
    case REMOVE_FAVORITE_USER:
      const prevState = state.favoriteUsers
      const filteredState = prevState.filter(user => user.login.uuid !== action.payload)
      return {...state, favoriteUsers: filteredState}
    case GET_ALL_FAVORITE_USERS:
      return {...state, favoriteUsers: [...action.payload]}
    default:
      return state
  }
}


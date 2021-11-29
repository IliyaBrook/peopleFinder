import React from "react";
import { LOAD_USERS_FROM_API, USERS_LOADING } from "./usersTypes";

const reducerInit = {
  usersLoading:false,
  users:[],
  checkBoxCountrys:[]
}
export const reducer = (state = reducerInit, action ) => {
  switch (action.type) {
    case LOAD_USERS_FROM_API:
      return {...state, users: [...action.users]}
    case USERS_LOADING:
      return {...state, usersLoading: action.loading}
    default:
      return state
  }
}


import {
  LOG_OUT,
  SET_USER_DATA
} from "./authorizeUserTypes";

const authorizeUserInit = {
  userData:null,
  isLoggedIn:false
}
export const authorizeUserReducer = (state = authorizeUserInit, action ) => {
  switch (action.type){
    case SET_USER_DATA:
      return {...state, isLoggedIn: true, userData: action.payload}
    case LOG_OUT:
      return authorizeUserInit
    default:
      return state
  }
}
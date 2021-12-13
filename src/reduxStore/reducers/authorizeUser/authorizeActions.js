import { LOG_OUT } from "./authorizeUserTypes";

export const logOutAction = () => {
  localStorage.removeItem("userData");
  return dispatch => dispatch({ type: LOG_OUT, payload: {isLoggedIn: false} })
};
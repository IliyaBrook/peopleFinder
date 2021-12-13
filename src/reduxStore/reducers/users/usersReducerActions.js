import { REMOVE_FAVORITE_USER, SET_FAVORITE_USER } from "./usersReducerTypes";

export const setFavoriteUsersAction = (user) => {
  if (localStorage.getItem('favoriteUsers')) {
    const oldStorageData = JSON.parse(localStorage.getItem('favoriteUsers'))
    const newStorageData = [...oldStorageData, user]
    localStorage.setItem('favoriteUsers', JSON.stringify(newStorageData))
  }else {
    localStorage.setItem('favoriteUsers', JSON.stringify([user]))
  }
  return dispatch => {
      return dispatch({type:SET_FAVORITE_USER, payload:user})
  }
}

export const removeFavoriteUsersAction = (user) => {
  const userId = user.login.uuid
  if (localStorage.getItem('favoriteUsers')) {
    const oldStorageData = JSON.parse(localStorage.getItem('favoriteUsers'))
    const newStorageData = oldStorageData.filter(id => id.login.uuid !== userId)
    localStorage.setItem('favoriteUsers', JSON.stringify(newStorageData))
  }

  return dispatch => {
    return dispatch({type:REMOVE_FAVORITE_USER, payload: userId})
  }
}
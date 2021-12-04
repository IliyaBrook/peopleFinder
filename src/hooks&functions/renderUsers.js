import UserCard from "../components/UserList/userCard";
import { useDispatch, useSelector } from "react-redux";
import { getFormValues } from "redux-form";
import { useCallback, useRef } from "react";
import { HOME_PAGE_SCROLL_END } from "../reduxStore/reducers/usersTypes";

export const RenderUsers = ({ users }) => {
  const dispatch = useDispatch()

  let observer = useRef(0)
  const getLastElement = useCallback(elem => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        dispatch({type:HOME_PAGE_SCROLL_END})
      }
    })
    if (elem) observer.current.observe(elem)
  },[users])

  const checkBoxSelector = useSelector(state => getFormValues('checkboxCountrys')(state))
  const inputSearchSelector = useSelector(state => getFormValues('searchUsersInput')(state)) || ''

  const renderFilteredUsers = users.filter(user => {
    const input = inputSearchSelector.filterInput || "";
    const name = (`${user.name.first} ${user.name.last}`).toLowerCase();
    return name.includes(input.toLowerCase());
  }).filter(user => {
    if (checkBoxSelector) {
      const stateKeys = Object.keys(checkBoxSelector);
      if (stateKeys.length) {
        const trueKeys = stateKeys.filter(elem => checkBoxSelector[elem]);
        if (trueKeys.length === 0) {
          return users;
        }
        return user.location.country === trueKeys?.find(elem => {
          return elem === user.location.country;
        });
      }
    }
    return users;
  });
  return renderFilteredUsers.map(useCallback((user, index) => {
    if (users.length === index + 1) {
      return <UserCard user={user} index={index} key={index} elemRef={getLastElement}/>
    }else {
      return  <UserCard user={user} index={index} key={index}/>
    }
  },[users]));
};





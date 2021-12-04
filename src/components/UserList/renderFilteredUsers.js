import UserCard from "./userCard";
import { useSelector } from "react-redux";
import { getFormValues } from "redux-form";

export const RenderFilteredUsers = ({ users }) => {

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
  return renderFilteredUsers.map((user, index) => {
    return (
      <UserCard user={user} index={index} key={index}/>
    );
  });
};





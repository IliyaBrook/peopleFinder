import Spinner from "components/Spinner";
import * as S from "./style";
import UserCard from "./userCard";
import { useSelector } from "react-redux";
import { CheckboxReduxForm, SearchUsersInput } from "../reduxForms/reduxFormRenders";
import { getFormValues } from "redux-form";


const UserList = () => {
  const { users, usersLoading } = useSelector(state => state.reducer);
  const checkBoxSelector = useSelector(state => getFormValues('checkboxCountrys')(state))
  const inputSearchSelector = useSelector(state => getFormValues('searchUsersInput')(state)) || ''

  const renderFilteredUsers = users.filter(user => {
    const input = inputSearchSelector.filterInput || ''
    const name = (`${user.name.first} ${user.name.last}`).toLowerCase()
    return name.includes(input.toLowerCase())
  }).filter(user => {
    if (checkBoxSelector) {
      const stateKeys = Object.keys(checkBoxSelector)
      if (stateKeys.length) {
        const trueKeys = stateKeys.filter(elem => checkBoxSelector[elem])
        if (trueKeys.length === 0) {
          return users
        }
        return user.location.country === trueKeys?.find(elem => {
          return elem === user.location.country;
        });
      }
    }
    return users
  })

  const RenderUsers = () => {
    return renderFilteredUsers.map((user, index) => {
      return (
        <UserCard user={user} index={index} key={index} />
      );
    })
  };

  return (
    <S.UserList>
      <S.Filters>
        <CheckboxReduxForm />
      </S.Filters>
      <SearchUsersInput />
      <S.List>
        <RenderUsers/>
        {usersLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;

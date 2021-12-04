import Spinner from "components/Spinner";
import * as S from "./style";
import { useSelector } from "react-redux";
import { CheckboxReduxForm, SearchUsersInput } from "../reduxForms/reduxFormRenders";
import { RenderFilteredUsers } from "./renderFilteredUsers";


const UserList = () => {
  const { users, usersLoading } = useSelector(state => state.reducer);


  return (
    <S.UserList>
      <S.Filters>
        <CheckboxReduxForm />
      </S.Filters>
      <SearchUsersInput/>
      <S.List>
        <RenderFilteredUsers users={users}/>
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

import Spinner from "components/Spinner";
import * as S from "./style";
import { useSelector } from "react-redux";
import { CheckboxReduxForm, SearchUsersInput } from "../reduxForms/reduxFormRenders";
import { RenderUsers } from "../../hooks&functions/renderUsers";


const UserList = () => {
  const { users, usersLoading } = useSelector(state => state.reducer);

  return (
    <S.UserList>
      <S.Filters>
        <CheckboxReduxForm />
      </S.Filters>
      <SearchUsersInput />
      <S.List>
        <RenderUsers users={users} loading={usersLoading}/>
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

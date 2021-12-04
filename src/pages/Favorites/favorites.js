import React, { useState } from "react";
import * as S from "../Home/style";
import * as F from './styles'
import { useSelector } from "react-redux";
import UserCard from "../../components/UserList/userCard";
import { List } from "./styles";
import Text from "../../components/Text";
import Spinner from "../../components/Spinner";
import {SpinnerWrapper} from "../../components/UserList/style";


export const Favorites = () => {
  const { favoriteUsers, usersLoading } = useSelector(state => state.reducer);

  const ShowSpinner = () => usersLoading ?
    <SpinnerWrapper>
      <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
    </SpinnerWrapper> :
    null

  return (
    <F.Content>
      <S.Header>
        <Text size="64px" bold>
          Favorite Users
        </Text>
      </S.Header>
      <F.List>
        <ShowSpinner/>
        {favoriteUsers.map(((user, index) => <UserCard index={index} user={user} key={index} />))}
      </F.List>
    </F.Content>
  );
};

export default Favorites;
import React, { useState } from "react";
import * as S from "./style";
import Text from "../Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavoriteUsersAction, setFavoriteUsersAction
} from "../../reduxStore/reducers/actions";

const UserCard = ({ user, index, elemRef}) => {
  const dispatch = useDispatch()
  const favoriteUsers = useSelector(state => state.reducer.favoriteUsers)
  const findFavorite = !!favoriteUsers.find(elem => elem?.login.uuid === user?.login.uuid)
  const [hoveredUserId, setHoveredUserId] = useState();

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };
  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleFavoriteUser = () => {
    return findFavorite ? dispatch(removeFavoriteUsersAction(user)) :
      dispatch(setFavoriteUsersAction(user))
  }

  return (
    <S.User
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      ref={elemRef}
    >
      <S.UserPicture src={user?.picture.large} alt="" />
      <S.UserInfo>
        <Text size="22px" bold>
          {user?.name.title} {user?.name.first} {user?.name.last}
        </Text>
        <Text size="14px">{user?.email}</Text>
        <Text size="14px">
          {user?.location.street.number} {user?.location.street.name}
        </Text>
        <Text size="14px">
          {user?.location.city} {user?.location.country}
        </Text>
      </S.UserInfo>
      <S.IconButtonWrapper
        isVisible={
          index === hoveredUserId || findFavorite
        }
        onClick={handleFavoriteUser}>
        <IconButton>
          <FavoriteIcon color="error" />
        </IconButton>
      </S.IconButtonWrapper>
    </S.User>
  );
};

export default UserCard;
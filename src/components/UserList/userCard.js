import React, { useState } from "react";
import * as S from "./style";
import Text from "../Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const UserCard = ({ user, index }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };
  const handleMouseLeave = () => {
    setHoveredUserId();
  };
  return (
    <S.User
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
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
      <S.IconButtonWrapper isVisible={index === hoveredUserId}>
        <IconButton>
          <FavoriteIcon color="error" />
        </IconButton>
      </S.IconButtonWrapper>
    </S.User>
  );
};

export default UserCard;
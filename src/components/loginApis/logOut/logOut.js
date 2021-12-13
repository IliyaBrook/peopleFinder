import React from "react";
import { LogOutImage, LogOutButtonStyled} from "./logOutStyles";
import { useDispatch } from "react-redux";
import {REQUEST_LOGOUT} from "../../../reduxStore/reducers/authorizeUser/authorizeUserTypes"
import { logOutAction } from "../../../reduxStore/reducers/authorizeUser/authorizeActions";

export const LogOut = (props) => {
  const dispatch = useDispatch()
  return (
        <LogOutButtonStyled
          {...props}
          onClick={() => dispatch({type:REQUEST_LOGOUT})}
        >
          <LogOutImage/>
          <span>{props.text}</span>
        </LogOutButtonStyled>
  )
};
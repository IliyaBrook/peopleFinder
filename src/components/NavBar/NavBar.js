import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {useHistory, useLocation } from 'react-router-dom'
import { AuthApisWrapper } from "./styles";
import { useSelector } from "react-redux";
import { GoogleLoginButton } from "../loginApis/google/styles";
import { GoogleLogin } from "../loginApis/google/googleLogin";
import { LogOut } from "../loginApis/logOut/logOut";
import { FacebookLogin } from "../loginApis/facebook/facebook";

const NavBar = () => {
  const { isLoggedIn } = useSelector(state => state.authorizeUserReducer)
  const history = useHistory()
  const location = useLocation()
  const locationValue = location.pathname === '/' ? 0 : 1
  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={locationValue}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} onClick={() => history.push('/')}/>
        <Tab label="Favorites" index={1} onClick={() => history.push('/favorites')}/>
        <AuthApisWrapper>
          {
            isLoggedIn ? (
                <>
                  <LogOut text={'LOGOUT'} width="40%" height="53%"/>
                </>
            ) :
              (
                <>
                  <GoogleLogin/>
                  <FacebookLogin/>
                </>
              )
          }
        </AuthApisWrapper>
      </Tabs>
    </AppBar>
  );
};

export default NavBar;

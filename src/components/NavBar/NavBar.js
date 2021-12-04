import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {useHistory, useLocation } from 'react-router-dom'

const NavBar = () => {
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
      </Tabs>
    </AppBar>
  );
};

export default NavBar;

import React, { useState } from 'react';

import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import {
  StyledAppBar,
  StyledToolbar,
  ButtonsCotainer,
  RootContainer,
  StyledMobileTypography,
  StyledBrowserTypography
} from './styles';

import MediaQuery from 'react-responsive';

export default function Layout({ children }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMobileContent = () => {
    return (
      <>
        <StyledMobileTypography variant="h6">
          Ivan
        </StyledMobileTypography>
        <IconButton color="inherit" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Wiriting</MenuItem>
          <MenuItem onClick={handleClose}>Portfolio</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </>
    )
  }

  const renderBrowserContent = () => {
    return (
      <>
        <StyledBrowserTypography variant="h6">
          Ivan
        </StyledBrowserTypography>
        <ButtonsCotainer>
          <Button color="inherit">About</Button>
          <Button color="inherit">Wiriting</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Contact</Button>
        </ButtonsCotainer>
      </>
    )
  }

  return (
    <RootContainer>
      <StyledAppBar color="primary" position="static">
        <StyledToolbar>
          <MediaQuery minDeviceWidth={1080}>
            {renderBrowserContent()}
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1080}>
            {renderMobileContent()}
          </MediaQuery>
        </StyledToolbar>
      </StyledAppBar>
      {children}
    </RootContainer>
  )
}

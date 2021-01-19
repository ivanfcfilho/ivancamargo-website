import React, { useState } from 'react';

import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { useRouter } from 'next/router';

import {
  StyledAppBar,
  StyledToolbar,
  ButtonsCotainer,
  RootContainer,
  StyledMobileTypography,
  StyledBrowserTypography
} from './styles';

import MediaQuery from 'react-responsive';

const menuItems = [
  {
    "label": "About",
    "path": "/about"
  },
  {
    "label": "Writing",
    "path": "/writing"
  },
  {
    "label": "Portfolio",
    "path": "/portfolio"
  },
  {
    "label": "Contact",
    "path": "/contact"
  }
]

export default function Layout({ children }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleMenuClick = (path) => {
    router.push(path)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMobileMenu = () => {
    return menuItems.map((item) =>
      <MenuItem onClick={() => handleMenuClick(item.path)}>{item.label}</MenuItem>
    );
  }

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
          onClick={handleClick}
        >
          {renderMobileMenu()}
        </Menu>
      </>
    )
  }

  const renderBrowserMenu = () => {
    return menuItems.map((item) =>
      <Button onClick={() => handleMenuClick(item.path)} color="inherit">{item.label}</Button>
    );
  }

  const renderBrowserContent = () => {
    return (
      <>
        <StyledBrowserTypography variant="h6">
          Ivan
        </StyledBrowserTypography>
        <ButtonsCotainer>
          {renderBrowserMenu()}
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

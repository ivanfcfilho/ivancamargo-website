import React, { useState } from 'react';

import { AppBar, Button, Divider, Toolbar, Typography } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { useRouter } from 'next/router';

import {
  ButtonsCotainer,
  StyledBrowserAppBar,
  StyledMobileAppBar,
  StyledToolbar,
  RootContainer,
  StyledMobileTypography,
  StyledBrowserTypography,
  StyledMobileIconButton,
  StyledMenu,
  StyledMenuItem
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

  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState()

  const router = useRouter();

  const handleMenuClick = (path) => {
    setMenuOpen(false);
    router.push(path)
  }

  const recordButtonPosition = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  }

  let closeMenu = () => {
    setMenuOpen(false);
  }

  const renderMobileMenu = () => {
    return menuItems.map((item, index) =>
      <>
        <StyledMenuItem
          key={`menu_item_${index}`}
          onClick={() => handleMenuClick(item.path)}>
          <Typography variant="h8">
            {item.label}
          </Typography>
        </StyledMenuItem>
        { index < menuItems.length - 1 && <Divider />}
      </>
    );
  }

  const renderMobileContent = () => {
    return (
      <>
        <StyledMobileAppBar key="menu-app-bar" color="primary" position="static">
          <StyledToolbar>
            <StyledMobileTypography variant="h6">
              Ivan
            </StyledMobileTypography>
            <StyledMobileIconButton color="inherit" onClick={recordButtonPosition}>
              <MenuIcon />
            </StyledMobileIconButton>
            <StyledMenu
              key="simple-menu"
              id="simple-menu"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              keepMounted
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              open={menuOpen}
              onClose={closeMenu}
            >
              {renderMobileMenu()}
            </StyledMenu>
          </StyledToolbar>
        </StyledMobileAppBar>
        {children}
      </>
    )
  }

  const renderBrowserMenu = () => {
    return menuItems.map((item, index) =>
      <Button
        key={`"menu_button_${index}`}
        onClick={() => handleMenuClick(item.path)}
        color="inherit">{item.label}
      </Button>
    );
  }

  const renderBrowserContent = () => {
    return (
      <>
        <StyledBrowserAppBar color="primary" position="static">
          <StyledToolbar>
            <StyledBrowserTypography variant="h6">
              Ivan
            </StyledBrowserTypography>
            <ButtonsCotainer>
              {renderBrowserMenu()}
            </ButtonsCotainer>
          </StyledToolbar>
        </StyledBrowserAppBar>
        {children}
      </>
    )
  }

  return (
    <RootContainer>
      <MediaQuery minDeviceWidth={1080}>
        {renderBrowserContent()}
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1080}>
        {renderMobileContent()}
      </MediaQuery>
      <AppBar color="primary" position="relative">
        <Toolbar>
        </Toolbar>
      </AppBar>
    </RootContainer>
  )
}

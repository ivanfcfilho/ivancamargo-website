import React, { useState } from 'react';

import { Button, Divider, Toolbar } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { useRouter } from 'next/router';

import {
  StyledBrowserAppBar,
  StyledMobileAppBar,
  StyledToolbar,
  ButtonsCotainer,
  RootContainer,
  StyledMobileTypography,
  StyledBrowserTypography,
  StyledMobileIconButton,
  StyledMenu,
  StyledMenuItem,
  StyledMobileMenuTypography,
  FooterAppBar,
  BrowserCenterContent,
  MobileCenterContent
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
        <StyledMenuItem onClick={() => handleMenuClick(item.path)}>
          <StyledMobileMenuTypography variant="h8">
            {item.label}
          </StyledMobileMenuTypography>
        </StyledMenuItem>
        {index < menuItems.length - 1 && <Divider />}
      </>
    );
  }

  const renderMobileContent = () => {
    return (
      <>
        <StyledMobileAppBar color="primary" position="static">
          <StyledToolbar>
            <StyledMobileTypography variant="h6">
              Ivan
            </StyledMobileTypography>
            <StyledMobileIconButton color="inherit" onClick={recordButtonPosition}>
              <MenuIcon />
            </StyledMobileIconButton>
            <StyledMenu
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
        <MobileCenterContent>
          {children}
        </MobileCenterContent>
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
        <BrowserCenterContent>
          {children}
        </BrowserCenterContent>
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
      <FooterAppBar color="primary" position="static">
        <Toolbar>
        </Toolbar>
      </FooterAppBar>
    </RootContainer>
  )
}

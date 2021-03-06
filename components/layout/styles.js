import styled from 'styled-components';

import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";

export const StyledButton = styled(Button)`
  margin-left: 0.5rem
`

export const StyledToolbar = styled(Toolbar)`
  flex-grow: 1;
  height: 100%;
`

export const StyledBrowserTypography = styled(Typography)`
  padding-left: 8rem;
  flex-grow: 1;
`

export const StyledMobileTypography = styled(Typography)`
  padding-left: 1rem;
  flex-grow: 1;
  font-size: 4rem !important;
`

export const RootContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`

export const ButtonsCotainer = styled.div`
  padding-right: 8rem;
`

export const StyledBrowserAppBar = styled(AppBar)`
  height: 5.5rem;
`

export const StyledMobileAppBar = styled(AppBar)`
  height: 12rem;
`

export const StyledMobileIconButton = styled(IconButton)`
  .MuiSvgIcon-root {
    width: 3.5rem;
    height: 3.5rem;
  }
`

export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    top: 103px !important;
    left: 1.0rem !important;
    width: 100%;
    padding: 0 !important;
    background-color: #E0E0E0;
  }
`

export const StyledMenuItem = styled(MenuItem)`
  height: 7rem;
  font-size: xx-large !important;
`

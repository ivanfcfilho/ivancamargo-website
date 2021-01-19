import styled from 'styled-components';

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

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
`

export const RootContainer = styled.div`
  flexGrow: 1,
`

export const ButtonsCotainer = styled.div`
  padding-right: 8rem;
`
export const StyledAppBar = styled(AppBar)`
  height: 5rem;
`